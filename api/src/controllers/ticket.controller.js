'use strict'

const mongoose = require('mongoose');

const Ticket = mongoose.model('ticket');
// const md5 = require('md5');
const repository = require('../repositories/ticket.repository');
// const authService = require('./../services/auth.service');


exports.getTickets = async (req, res) => {

    await repository.get().then(tickets => {

        res.status(200).send(tickets)

    });

}

exports.createTicket = async (req, res) => {


    await repository.create(req.body)
        .then(x => {

            res.status(201).send({ message: "Ticket criado" })

        }).catch(e => {

            res.status(400).send({ message: "Ticket não criado" + e })

        });
}



