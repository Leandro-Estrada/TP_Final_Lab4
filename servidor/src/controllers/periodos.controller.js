import Periodo from '../models/periodo.js';
import TemaMusical from '../models/temamusical.js';
import Propaganda from '../models/propaganda.js';

export async function getPeriodos(req, res) {
    try {
        const periodos = await Periodo.findAll({
            include: [
                {model: Propaganda}, {model: TemaMusical}
            ],
            attributes: ['id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({periodos});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar los periodos',
            data: {}
        })
    }
}

export async function getOnePeriodo(req, res) {
    try {
        const { id } = req.params;
        const periodo = await Periodo.findOne({
            attributes: [ 'id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
            where: { id }
        });
        res.json({periodo});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar el periodo con id: ' + id,
            data: {}
        })
    }
}

export async function createPeriodos(req, res){
    const {duracion, fkprogramasid, fkpropagandasid, fktemasmusicalesid} = req.body;
    try {
        let newPeriodo = await Periodo.create({
            duracion,
            fkprogramasid,
            fkpropagandasid,
            fktemasmusicalesid,
        }, {
            fields: ['duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid']
        })
        
        if(newPeriodo){
            return res.json({
                message: 'Periodo creado exitosamente',
                data: newPeriodo
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear un nuevo Periodo',
            data: {}
        })
    }
}

export async function updatePeriodos(req, res) {
    const { id } = req.params;
    const { duracion, fkprogramasid, fkpropagandasid, fktemasmusicalesid } = req.body;

    try {
        const periodos = await Periodo.findOne({
            attributes: ['id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
            where: { id }
        });

        const updatedPeriodos = await Periodo.update({
            duracion,
            fkprogramasid,
            fkpropagandasid,
            fktemasmusicalesid,
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Periodo actualizado con exito',
            updatedPeriodos
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar el Periodos con id: ' + id,
            data: {}
        })
    }
}

export async function deletePeriodo(req, res) {
    try {
        const { id } = req.params;
        await Periodo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Periodo borrado con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar el periodo con id: ' + id,
            data: {}
        })
    }
}