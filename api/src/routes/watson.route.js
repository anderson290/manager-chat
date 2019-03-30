'use strict'

const express = require('express');
const watson = require('../controllers/watson.controller');
const router = express.Router();

router.post('/', watson.createUser);
router.post('/send', watson.sendMessage);

router.put('/:id', watson.updateMessage);

module.exports = router;