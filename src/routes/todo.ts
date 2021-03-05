import express from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controller/todo';

const router = express.Router();
router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;