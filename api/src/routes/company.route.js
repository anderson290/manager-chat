'use strict'

const express = require('express');
const company = require('../controllers/company.controller');
const router = express.Router();

const authService = require('./../services/auth.service');
//authService.autorize,
router.get('/', company.getCompany);
router.get('/companies', company.getCompanies);
router.post('/create',  company.createCompany);
router.post('/authenticate', company.authenticate);
router.put('/:id', company.updateCompany);
router.delete('/:id', company.deleteCompany);

module.exports = router;