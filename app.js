const watson = require('watson-developer-cloud/assistant/v1');

const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';

const ASSISTANT_IAM_APIKEY = '';

var chatbot = new watson({

    'version': '2019-03-02',
    'url': ASSISTANT_IAM_URL || '<url>',
    'iam_apikey': ASSISTANT_IAM_APIKEY || '<iam_apikey>',
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
        return;
    }

    if(resposta.output.text.length > 0){
        console.log(resposta.output.text);
    }
});