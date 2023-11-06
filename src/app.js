const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // Importa el paquete cors

const app = express();

app.use(morgan('dev'));
app.use(cors()); // Usa el middleware cors
app.use(require('./routes/index'));

module.exports = app;
