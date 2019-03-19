const express = require('express');
const bodyParser = require('body-parser');
const watson = require('watson-developer-cloud/assistant/v1');


const app = express();

const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';

const ASSISTANT_IAM_APIKEY = '';

app.use(bodyParser.json());

const port = 3000;



var chatbot = new watson({
    'username':'d2b20928-8536-4d46-9f4a-86c0cf2dcf7f',
    'password':'MaadWhsaXdlw',
    'version': '2019-03-02',
    'url': ASSISTANT_IAM_URL,
    'iam_url': 'https://iam.bluemix.net/identity/token'

});
var payload = {
    workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
    context: {},
    input: {}
};

chatbot.message(payload, function trataResposta(err, resposta){
    if(err){
        console.log(err)
    }


    if(resposta.output.text.length > 0){
        console.log(resposta);
    }
});
app.post('/conversation/', (req, res) => {
    let text = req.body.message


   var payload2 ={
    workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
    context: {},
    input: {text}

//     {
//         "message": "Bom dia",
//        "context" : {
           
//        }
//    }
   }

    chatbot.message(payload2, (err, resposta) => {

        console.log(resposta)
    
    });
})

app.listen(port, () => console.log(`Running on port ${port}`));

