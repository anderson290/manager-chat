'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    code: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    conversation: [
        {
            userType: String,
            message: String
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'company'
    },
    status:{
        type: String
    }
});


module.exports = mongoose.model('ticket', schema);