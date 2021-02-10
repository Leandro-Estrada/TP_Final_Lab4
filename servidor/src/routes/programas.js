import { Router } from 'express';
const router = Router();

import { createProgramas, getProgramas, getOnePrograma, deletePrograma, updatePrograma } from '../controllers/programas.controller.js';

// http://localhost:3000/api/programas

router.post('/', createProgramas);
router.get('/', getProgramas);

// http://localhost:3000/api/programas/:id

router.get('/:id', getOnePrograma);
router.delete('/:id', deletePrograma);
router.put('/:id', updatePrograma);

export default router;