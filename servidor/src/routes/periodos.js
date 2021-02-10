import { Router } from 'express';
const router = Router();

import { createPeriodos, getPeriodos, getOnePeriodo, deletePeriodo, updatePeriodos } from '../controllers/Periodos.controller.js';

// http://localhost:3000/api/periodos/:id

router.post('/', createPeriodos);
router.get('/', getPeriodos);

// http://localhost:3000/api/periodos/:id

router.get('/:id', getOnePeriodo);
router.delete('/:id', deletePeriodo);
router.put('/:id', updatePeriodos);

export default router;