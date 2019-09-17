'use strict'

const express = require('express');
const company = require('../controllers/company.controller');
const router = express.Router();

router.get('/companies', company.getCompanies);
router.post('/create', company.createCompany);
router.put('/:id', company.updateCompany);
router.delete('/:id', company.deleteCompany);

module.exports = router;