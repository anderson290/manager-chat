const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
const cors = require('cors')

mongoose.connect(config.connectionString);

app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser.json()); 


//carregando models
const UserConversation = require('./models/user');
const Company = require('./models/company');
const Ticket = require('./models/ticket');


//carregando rotas
const index = require('./routes/index');
const conversationRoute = require('./routes/watson.route');
const companyRoute = require('./routes/company.route');
const ticketRoute = require('./routes/ticket.route');

app.use('/', index);
app.use('/conversation', conversationRoute);
app.use('/company', companyRoute);
app.use('/ticket', ticketRoute);

module.exports = app;