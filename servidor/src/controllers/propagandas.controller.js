import Propaganda from '../models/propaganda.js';

export async function getPropaganda(req, res) {
    try {
        const propagandas = await Propaganda.findAll({
            attributes: ['id', 'cuit', 'empresa'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({propagandas});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar las propandas',
            data: {}
        })
    }
}

export async function getOnePropaganda(req, res) {
    try {
        const { id } = req.params;
        const propaganda = await Propaganda.findOne({
            attributes: [ 'id', 'cuit', 'empresa'],
            where: { id }
        });
        res.json({propaganda});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar la propaganda con id: ' + id,
            data: {}
        })
    }
}

export async function createPropaganda(req, res){
    const {cuit, empresa} = req.body;
    try {
        let newPropaganda = await Propaganda.create({
            cuit,
            empresa,
        }, {
            fields: ['cuit', 'empresa']
        })
        
        if(newPropaganda){
            return res.json({
                message: 'Propaganda creada exitosamente',
                data: newPropaganda
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear una nueva Propaganda',
            data: {}
        })
    }
}

export async function updatePropaganda(req, res) {
    const { id } = req.params;
    const { cuit, empresa, } = req.body;

    try {
        const propaganda = await Propaganda.findOne({
            attributes: ['id', 'cuit', 'empresa'],
            where: { id }
        });

        const updatedPropaganda = await Propaganda.update({
            cuit,
            empresa
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Propaganda actualizada con exito',
            updatedPropaganda
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar la propaganda con id: ' + id,
            data: {}
        })
    }
}

export async function deletePropaganda(req, res) {
    try {
        const { id } = req.params;
        await Propaganda.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Propaganda borrada con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar la propaganda con el id: ' + id,
            data: {}
        })
    }
}