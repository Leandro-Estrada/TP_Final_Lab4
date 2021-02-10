import { Router } from 'express';
const router = Router();

import { createPropaganda, getPropaganda, getOnePropaganda, deletePropaganda, updatePropaganda } from '../controllers/propagandas.controller.js';

// http://localhost:3000/api/propagandas

router.post('/', createPropaganda);
router.get('/', getPropaganda);

// http://localhost:3000/api/propagandas/:id

router.get('/:id', getOnePropaganda);
router.delete('/:id', deletePropaganda);
router.put('/:id', updatePropaganda);

export default router;