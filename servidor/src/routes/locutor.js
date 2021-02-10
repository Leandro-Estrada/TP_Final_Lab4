import { Router } from 'express';
import { getDirectores } from '../controllers/director.controller.js';
const router = Router();

import { createLocutor, getLocutores, getOneLocutor, deleteLocutor, updateLocutor } from '../controllers/locutor.controller.js';

// http://localhost:3000/api/locutores

router.post('/', createLocutor);
router.get('/', getLocutores);

// http://localhost:3000/api/locutores/1

router.get('/:id', getOneLocutor);
router.delete('/:id', deleteLocutor);
router.put('/:id', updateLocutor);

export default router;