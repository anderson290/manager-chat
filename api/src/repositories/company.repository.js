'use strict'

const mongoose = require('mongoose');
const Company = mongoose.model('company');
const md5 = require('md5');

exports.get = () => {
    return Company.find();
}

exports.create = (body) => {
    let company = new Company({
        companyName: body.companyName,
        razaoSocial: body.razaoSocial,
        fantasyName: body.fantasyName,
        cnpj: body.cnpj,
        address: body.address,
        phoneNumber: body.phoneNumber,
        email: body.email,
        site: body.site,
        password: md5(body.password + global.SALT_KEY),
        level: body.level
    });

    return company.save();
}

exports.update = (body) => {
    return Company.findByIdAndUpdate(body.id, body);
}


exports.delete = (id) => {
    return Company.findByIdAndDelete(id);
}

exports.authenticate = async (data) => {
    const res = await Company.findOne({
        email: data.email, 
        password: data.password
    });

    return res;
}