import { Router } from 'express';
const router = Router();

import { createTemaMusical, getTemaMusical, getOneTemaMusical, deleteTemaMusical, updateTemaMusical } from '../controllers/temasmusicales.controller.js';

// http://localhost:3000/api/temasmusicales

router.post('/', createTemaMusical);
router.get('/', getTemaMusical);

// http://localhost:3000/api/temasmusicales/:id

router.get('/:id', getOneTemaMusical);
router.delete('/:id', deleteTemaMusical);
router.put('/:id', updateTemaMusical);


export default router;