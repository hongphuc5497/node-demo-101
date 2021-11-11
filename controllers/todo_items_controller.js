const { TodoItem } = require('../db/models');

const list = async (req, res) => {
	try {
		const data = await TodoItem.findAll();

		res.status(200).send(data);
	} catch (err) {
		res.status(400).send(err);
	}
};

// const create = async (req, res) => {
// 	try {
// 		const { title } = req.body;
// 		console.log(req.body);

// 		const todo = await Todo.create({
// 			title,
// 		});

// 		res.status(200).send(todo);
// 	} catch (err) {
// 		res.status(400).send(err);
// 	}
// };

module.exports = {
	list
};
