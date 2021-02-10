import Locutor from '../models/locutor.js';

export async function getLocutores(req, res) {
    try {
        const locutores = await Locutor.findAll({
            attributes: ['id', 'dni', 'nombre', 'apellido'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({locutores});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar los locutores',
            data: {}
        })
    }
}

export async function getOneLocutor(req, res) {
    try {
        const { id } = req.params;
        const locutor = await Locutor.findOne({
            attributes: [ 'id', 'dni', 'nombre', 'apellido'],
            where: { id }
        });
        res.json({locutor});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar el locutor con id: ' + id,
            data: {}
        })
    }
}

export async function createLocutor(req, res){
    const {dni, nombre, apellido} = req.body;
    try {
        let newLocutor = await Locutor.create({
            dni,
            nombre,
            apellido,
        }, {
            fields: ['dni', 'nombre', 'apellido']
        })
        
        if(newLocutor){
            return res.json({
                message: 'Locutor creado exitosamente',
                data: newLocutor
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear un nuevo Locutor',
            data: {}
        })
    }
}

export async function updateLocutor(req, res) {
    const { id } = req.params;
    const { dni, nombre, apellido } = req.body;

    try {
        const locutor = await Locutor.findOne({
            attributes: ['id', 'dni', 'nombre', 'apellido'],
            where: { id }
        });

        const updatedLocutor = await Locutor.update({
            dni,
            nombre,
            apellido
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Locutor actualizado con exito',
            updatedLocutor
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar el Locutor con id: ' + id,
            data: {}
        })
    }
}

export async function deleteLocutor(req, res) {
    try {
        const { id } = req.params;
        await Locutor.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Locutor borrado con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar el Locutor con id: ' + id,
            data: {}
        })
    }
}