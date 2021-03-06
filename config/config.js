require('dotenv').config();

module.exports = {
	development: {
    dialect: 'postgres',
		database: process.env.DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432
	},
};
