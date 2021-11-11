const express = require('express');
const router = express.Router();

// Controllers
const todosController = require('./controllers/todos_controller');
const todoItemsController = require('./controllers/todo_items_controller');

router.get('/todos', todosController.list);
router.get('/todos/:todoId', todosController.show);
router.post('/todos', todosController.create);
router.put('/todos/:todoId', todosController.update);
router.delete('/todos/:todoId', todosController.destroy);

router.get('/todos/:todoId/items', todoItemsController.list);

// For any other request method on todo items, we're going to return "Method Not Allowed"
router.all('/api/todos/:todoId/items', (req, res) =>
	res.status(405).send({
		message: 'Method Not Allowed',
	})
);

module.exports = router;
