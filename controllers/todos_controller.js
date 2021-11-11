const { Todo } = require('../db/models');

const list = async (req, res) => {
	try {
		const data = await Todo.findAll();

		res.status(200).send(data);
	} catch (err) {
		res.status(400).send(err);
	}
};

const create = async (req, res) => {
	try {
		const { title } = req.body;

		const todo = await Todo.create({
			title,
		});

		res.status(200).send(todo);
	} catch (err) {
		res.status(400).send(err);
	}
};

const show = async (req, res) => {
	try {
		const { todoId } = req.params;

		const todo = await Todo.findByPk(todoId);

		res.status(200).send(todo);
	} catch (err) {
		res.status(400).send(err);
	}
};

const update = async (req, res) => {
	try {
		const { todoId } = req.params;
		const { title } = req.body;

		const [affectedRows] = await Todo.update(
			{
				title,
			},
			{
				where: { id: todoId },
			}
		);

		if (affectedRows) {
			res.status(200).json({ message: 'Successful' });
		}
	} catch (err) {
		res.status(400).send(err);
	}
};

const destroy = async (req, res) => {
	try {
		const { todoId } = req.params;

		const deletedRows = await Todo.destroy({
			where: { id: todoId },
		});

		if (deletedRows) {
			res.status(200).json({ message: 'Successful' });
		}
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
};

module.exports = {
	list,
	create,
	show,
	update,
	destroy,
};
