const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//carregando rotas
const index = require('./routes/index');
const conversationRoute = require('./routes/watson.route');


app.use('/', index);
app.use('/conversation', conversationRoute);

module.exports = app;