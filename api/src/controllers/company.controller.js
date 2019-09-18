'use strict'

const mongoose = require('mongoose');

const Company = mongoose.model('company');
const md5 = require('md5');
const repository = require('../repositories/company.repository');
const authService = require('./../services/auth.service');


exports.getCompanies = async (req, res) => {

    await repository.get().then(companies => {

        res.status(200).send(companies)

    });

}

exports.createCompany = async (req, res) => {


    await repository.create(req.body)
        .then(x => {

            res.status(201).send({ message: "Empresa cadastrada" })

        }).catch(e => {

            res.status(400).send({ message: "Empresa não cadastrada" + e })

        });
}

exports.authenticate = async (req, res) => {
    try {
        const company = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });


        if(!company){
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            email: company.email,
            fantasyName: company.fantasyName
        });

        res.status(201).send({
            token: token,
            data: {
                fantasyName: company.fantasyName,
                email: company.email
            }
        });

    } catch{

    }


}

exports.updateCompany = async (req, res) => {

    await repository.update(req.body)
        .then(user => {
            res.status(200).send({ message: 'Atualizado' })
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar a Empresa',
                data: e
            });
        });
}

exports.deleteCompany = async (req, res, next) => {
    await repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Empresa removida com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover a Empresa',
                data: e
            });
        });
}

