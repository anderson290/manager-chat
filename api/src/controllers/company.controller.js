'use strict'

const mongoose = require('mongoose');

const Company = mongoose.model('company');

exports.getCompanies = async (req, res) => {

    Company.find().then(companies => {

        res.status(200).send(companies)
    
    });

}

exports.createCompany = async (req, res) => {
    let company = new Company(req.body)

    await company.save()
        .then(x => {

            res.status(201).send({ message: "Empresa cadastrada" })

        }).catch(e => {

            res.status(400).send({ message: "Empresa não cadastrada" + e })

        });
}

exports.updateCompany = async (req, res) => {
  
    await Company.findByIdAndUpdate(req.body.id, req.body).then(user => {
        res.status(200).send({ message: 'Atualizado' })
    })
}

exports.deleteCompany = async (req, res) => {

}