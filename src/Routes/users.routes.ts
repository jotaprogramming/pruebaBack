import { Router } from 'express';
import Controller from '../Controllers/users.controller'
// import { body, validationResult } from 'express-validator';

const router = Router();
const controller = new Controller();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/add', controller.store);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

export default router;