require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>starter-project</h1><p>copy repo and start</p>');
});

//routes
app.get('/test', (req, res) => {});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		app.listen(port, () => console.log(`Server is listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
