const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const watson = require('watson-developer-cloud/assistant/v1');

const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';

const ASSISTANT_IAM_APIKEY = '';
const app = express();

app.use(bodyParser.json());

// const route = router.get('/', (req, res, next)=>{
//     res.status(200).send({
//         title: "Chatbot API",
//         version: "0.0.1"
//     })
// })

// const create = router.post('/', (req, res, next)=>{
//     res.status(200).send()
// })
var chatbot = new watson({
    'username':'d2b20928-8536-4d46-9f4a-86c0cf2dcf7f',
    'password':'MaadWhsaXdlw',
    'version': '2019-03-02',
    'url': ASSISTANT_IAM_URL,
    'iam_url': 'https://iam.bluemix.net/identity/token'

});
app.post('/conversation', (req, res) => {
    let text = req.body.message;


   var payload2 ={
    workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
    context: {},
    input: {text}
   }

    chatbot.message(payload2, (err, resposta) => {
        console.log(resposta)    
        return res.status(200).send()
    });
})


// const route = router.get('/', (req, res, next)=>{
//     res.status(200).send({
//         title: "Chatbot API",
//         version: "0.0.1"
//     })
// })

// const route = router.get('/', (req, res, next)=>{
//     res.status(200).send({
//         title: "Chatbot API",
//         version: "0.0.1"
//     })
// })

// const route = router.get('/', (req, res, next)=>{
//     res.status(200).send({
//         title: "Chatbot API",
//         version: "0.0.1"
//     })
// })


// app.use('/', route);

module.exports = app;