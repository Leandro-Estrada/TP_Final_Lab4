import { Router } from 'express';
const router = Router();

import { createDirector, getDirectores, getOneDirector, deleteDirector, updateDirector } from '../controllers/director.controller.js';

// http://localhost:3000/api/directores

router.post('/', createDirector);
router.get('/', getDirectores);

// http://localhost:3000/api/directores/1

router.get('/:id', getOneDirector);
router.delete('/:id', deleteDirector);
router.put('/:id', updateDirector);

export default router;