'use strict'
const watson = require('watson-developer-cloud/assistant/v1');
const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';
const ASSISTANT_IAM_APIKEY = '';

const mongoose = require('mongoose');

const UserConversation = mongoose.model('user');


const chatbot = new watson({
    'username': 'd2b20928-8536-4d46-9f4a-86c0cf2dcf7f',
    'password': 'MaadWhsaXdlw',
    'version': '2019-03-02',
    'url': ASSISTANT_IAM_URL,
    'iam_url': 'https://iam.bluemix.net/identity/token'

});

exports.createUser = async (req, res) => {
    let user = new UserConversation(req.body)

    await user.save()
        .then(x => {
            console.log(req.body)
            res.status(201).send({ message: "User cadastrado" })

        }).catch(e => {
            res.status(400).send({ message: "User não cadastrado" + e })


        });
}
exports.getFirst = async (req, res) => {
    let payload = {
        workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
        context: {},
        input: {}
    };
    chatbot.message(payload, function trataResposta(err, resposta) {
        if (err) {
            console.log(err)
        }

        res.status(200).send({ message: resposta.output.text[0], options: resposta.output.generic[1]})
        if (resposta.output.text.length > 0) {
            console.log('======================================');
            console.log(resposta.output.text[0]);
            console.log('======================================');
        }
    });
}

exports.getUsers = async (req, res) => {

    UserConversation.find().then(users => {
        console.log("USER", users)
        res.status(200).send(users)
    })


}

exports.updateUser = async (req, res) => {

    UserConversation.findByIdAndUpdate(req.body.id, req.body.user).then(user => {
        res.status(200).send({ message: 'Atualizado' })
    })
}

exports.sendMessage = async (req, res) => {
    let text = req.body.message;

    var payload2 = {
        workspace_id: 'e7a92d12-195e-475d-a8e4-56e9ad5ee1c5',
        context: req.body.context || {},
        input: { text } || {}
    }

    await chatbot.message(payload2, (err, resposta) => {


        console.log("AQUI", resposta)
        console.log('======================================');

        return res.status(201).send(resposta)
    });
}

exports.updateMessage = (req, res, next) => {
    const id = req.params.id;
    return res.status(201).send({
        id: id,
        item: req.body
    })
}