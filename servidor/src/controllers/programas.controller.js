import Director from '../models/director.js';
import Locutor from '../models/locutor.js';
import Periodo from '../models/periodo.js';
import Programa from '../models/programa.js';
import Propaganda from '../models/propaganda.js';
import TemaMusical from '../models/temamusical.js';

export async function getProgramas(req, res) {
    try {
        const programas = await Programa.findAll({
            include: [
                { model: Director }, { model: Locutor }, {
                    model: Periodo, include: [{ model: Propaganda }, { model: TemaMusical }]
                }],
            attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({ programas });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar los programas',
            data: {}
        })
    }
}

export async function getOnePrograma(req, res) {
    try {
        const { id } = req.params;
        const programa = await Programa.findOne({
            attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
            where: { id }
        });
        res.json({ programa });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo consultar el programa con id: ' + id,
            data: {}
        })
    }
}

export async function createProgramas(req, res) {
    const { tituloprograma, dia, horarioemision, duracion, fkdirectorid, fklocutoresid } = req.body;
    try {
        let newPrograma = await Programa.create({
            tituloprograma,
            dia,
            horarioemision,
            duracion,
            fkdirectorid,
            fklocutoresid
        }, {
            fields: ['tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid']
        })

        if (newPrograma) {
            return res.json({
                message: 'Programa creado exitosamente',
                data: newPrograma
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear un nuevo Programa',
            data: {}
        })
    }
}

export async function updatePrograma(req, res) {
    const { id } = req.params;
    const { tituloprograma, dia, horarioemision, duracion, fkdirectorid, fklocutoresid } = req.body;

    try {
        const programa = await Programa.findOne({
            attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
            where: { id }
        });

        const updatedPrograma = await Programa.update({
            tituloprograma,
            dia,
            horarioemision,
            duracion,
            fkdirectorid,
            fklocutoresid
        },
            {
                where: { id }
            });

        return res.json({
            message: 'Programa actualizado con exito',
            updatedPrograma
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo actuallizar el Programa con id: ' + id,
            data: {}
        })
    }
}

export async function deletePrograma(req, res) {
    try {
        const { id } = req.params;
        await Programa.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Programa borrado con exito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo borrar el Programa con id: ' + id,
            data: {}
        })
    }
}