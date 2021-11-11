require('dotenv').config();

// Config server
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(morgan('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Routes
app.use('/api', apiRoutes);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) =>
	res.status(200).send({
		message: 'Welcome to the beginning of nothingness.',
	})
);

const port = process.env.PORT || 3300;
app.listen(port, () => {
	console.log(`App is now running on port ${port}.`);
});

module.exports = app;
