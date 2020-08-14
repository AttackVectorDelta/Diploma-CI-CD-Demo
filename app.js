const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const middlewares = require('./middlewares')

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());

//Middleware
app.use(middlewares.notFound);
app.use(middlewares.general);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});