const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://legalChatbotDb:hunteronce290@legalchatbot-errfy.mongodb.net/test?retryWrites=true')

app.use(bodyParser.json());


//carregando models
const UserConversation = require('./models/user');


//carregando rotas
const index = require('./routes/index');
const conversationRoute = require('./routes/watson.route');



app.use('/', index);
app.use('/conversation', conversationRoute);

module.exports = app;