import { Router } from 'express';
import { create, deleted, researchAll, update } from '../controller/clientController';
const router = Router()

router.post('/client', create)
router.get('/client', researchAll)
router.put('/client/:id', update)
router.delete('/client/:id', deleted)

export default router

