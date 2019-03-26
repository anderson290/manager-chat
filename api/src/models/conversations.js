'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


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
        type: Boolean
    },
    conversation: {
        type: []
    }
});


module.exports.Conversations = mongoose.model('conversations', schema, 'conversations');