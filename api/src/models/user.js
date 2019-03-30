'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    location: {
        type: String
    },
    maritalStatus:{
        type: String
    },
    sex: {
        type: String
    },
    conversation: {
        type: []
    }
});


module.exports = mongoose.model('user', schema);