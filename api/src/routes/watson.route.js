'use strict'
const watson = require('watson-developer-cloud/assistant/v1');
const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';
const ASSISTANT_IAM_APIKEY = '';
const express = require('express');
const router = express.Router();

const chatbot = new watson({
    'username': 'd2b20928-8536-4d46-9f4a-86c0cf2dcf7f',
    'password': 'MaadWhsaXdlw',
    'version': '2019-03-02',
    'url': ASSISTANT_IAM_URL,
    'iam_url': 'https://iam.bluemix.net/identity/token'

});

router.post('/', (req, res) => {
    let text = req.body.message;
    var payload2 = {
        workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
        context: {},
        input: { text }
    }

    chatbot.message(payload2, (err, resposta) => {       
        return res.status(201).send(resposta)
    });
})

router.put('/:id', (req, res, next) =>{
    const id = req.params.id;
    return res.status(201).send({
        id: id,
        item: req.body
    })
})

module.exports = router;