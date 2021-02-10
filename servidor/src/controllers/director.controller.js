import Director from '../models/director.js';

export async function getDirectores(req, res) {
    try {
        const directores = await Director.findAll({
            attributes: ['id', 'dni', 'nombre', 'apellido'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({directores});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar los directores',
            data: {}
        })
    }
}

export async function getOneDirector(req, res) {
    try {
        const { id } = req.params;
        const director = await Director.findOne({
            attributes: [ 'id', 'dni', 'nombre', 'apellido'],
            where: { id }
        });
        res.json({director});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar el director con id: ' + id,
            data: {}
        })
    }
}

export async function createDirector(req, res){
    const {dni, nombre, apellido} = req.body;
    try {
        let newDirector = await Director.create({
            dni,
            nombre,
            apellido,
        }, {
            fields: ['dni', 'nombre', 'apellido']
        })
        
        if(newDirector){
            return res.json({
                message: 'Director creado exitosamente',
                data: newDirector
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear un nuevo Director',
            data: {}
        })
    }
}

export async function updateDirector(req, res) {
    const { id } = req.params;
    const { dni, nombre, apellido } = req.body;

    try {
        const director = await Director.findOne({
            attributes: ['id', 'dni', 'nombre', 'apellido'],
            where: { id }
        });

        const updatedDirector = await Director.update({
            dni,
            nombre,
            apellido
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Director actualizado con exito',
            updatedDirector
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar el Director con id: ' + id,
            data: {}
        })
    }
}

export async function deleteDirector(req, res) {
    try {
        const { id } = req.params;
        await Director.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Director borrado con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar el Director con id: ' + id,
            data: {}
        })
    }
}