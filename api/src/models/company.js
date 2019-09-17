'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    companyName: {
        type: String
    },
    razaoSocial: {
        type: String
    },
    fantasyName: {
        type: String
    },
    cnpj: {
        type: Number
    },
    address: {
        type: String
    },
    phoneNumber:{
        type: Number
    },
    email:{
        type: String
    },
    site:{
        type: String
    },
    level:{
        type: Number
    }
});


module.exports = mongoose.model('company', schema);