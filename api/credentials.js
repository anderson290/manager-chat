const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';

const ASSISTANT_IAM_APIKEY = '';

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
