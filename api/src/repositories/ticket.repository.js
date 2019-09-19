'use strict'

const mongoose = require('mongoose');
const Ticket = mongoose.model('ticket');

exports.get = () => {
    return Ticket.find();
}

exports.create = (body) => {
    let ticket = new Ticket(body);

    return ticket.save();
}