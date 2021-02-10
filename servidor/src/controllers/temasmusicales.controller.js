import TemaMusical from '../models/temamusical.js';

export async function getTemaMusical(req, res) {
    try {
        const temasmusicales = await TemaMusical.findAll({
            attributes: ['id', 'titulo', 'autor'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({temasmusicales});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar los temas musicales',
            data: {}
        })
    }
}

export async function getOneTemaMusical(req, res) {
    try {
        const { id } = req.params;
        const temamusical = await TemaMusical.findOne({
            attributes: [ 'id', 'titulo', 'autor'],
            where: { id }
        });
        res.json({temamusical});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar el tema musical con id: ' + id,
            data: {}
        })
    }
}

export async function createTemaMusical(req, res){
    const {titulo, autor} = req.body;
    try {
        let newTemaMusical = await TemaMusical.create({
            titulo,
            autor,
        }, {
            fields: ['titulo', 'autor']
        })
        
        if(newTemaMusical){
            return res.json({
                message: 'Tema Musical creado exitosamente',
                data: newTemaMusical
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear un nuevo Tema Musical',
            data: {}
        })
    }
}

export async function updateTemaMusical(req, res) {
    const { id } = req.params;
    const { titulo, autor, } = req.body;

    try {
        const temamusical = await TemaMusical.findOne({
            attributes: ['id', 'titulo', 'autor'],
            where: { id }
        });

        const updatedTemaMusical = await TemaMusical.update({
            titulo,
            autor
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Tema Musical actualizado con exito',
            updatedTemaMusical
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar el Tema Musical con id: ' + id,
            data: {}
        })
    }
}

export async function deleteTemaMusical(req, res) {
    try {
        const { id } = req.params;
        await TemaMusical.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Tema Musical borrado con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar el tema musical con id: ' + id,
            data: {}
        })
    }
}
/* ---------------------------------------------------------------------------------------------------------------------- */

export async function getTasksByProject(req, res) {
    try {
        const { projectid } = req.params;
        const tasks = await Task.findAll({
            attributes: [ 'id', 'projectid', 'name', 'done',],
            where: {
                projectid
            }
        }); 
        res.json({ tasks });
    } catch (e) {
        console.log(e);
    }
}