'use strict'

const express = require('express');
const ticket = require('../controllers/ticket.controller');
const router = express.Router();

// const authService = require('./../services/auth.service');

router.get('/', ticket.getTickets);
router.post('/create', ticket.createTicket);
// router.post('/authenticate', ticket.authenticate);

module.exports = router;