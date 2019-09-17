const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

mongoose.connect('mongodb+srv://legalChatbotDb:1QazxsW229@legalchatbot-errfy.mongodb.net/test?retryWrites=true')
app.use(cors({enableOrigin:"*"}));

app.use(bodyParser.json()); 


//carregando models
const UserConversation = require('./models/user');
const Company = require('./models/company');


//carregando rotas
const index = require('./routes/index');
const conversationRoute = require('./routes/watson.route');
const companyRoute = require('./routes/company.route');

app.use('/', index);
app.use('/conversation', conversationRoute);
app.use('/company', companyRoute);
module.exports = app;