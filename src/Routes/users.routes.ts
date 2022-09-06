import { Router } from 'express';
import { destroy, index, show, store, update } from '../Controllers/users.controller';

const router = Router();

router.get('/', index);
router.get('/:id', show);
router.post('/add', store);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;