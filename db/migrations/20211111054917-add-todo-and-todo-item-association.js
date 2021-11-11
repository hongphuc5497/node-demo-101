'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('TodoItems', 'todoId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Todos',
				key: 'id',
				as: 'todoId',
			},
			onDelete: 'CASCADE',
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('TodoItems', 'todoId');
	},
};
