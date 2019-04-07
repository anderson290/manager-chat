'use strict'

const express = require('express');
const watson = require('../controllers/watson.controller');
const router = express.Router();

router.get('/first', watson.getFirst);
router.get('/users', watson.getUsers);


router.put('/updateUser', watson.updateUser);

router.post('/create', watson.createUser);
router.post('/send', watson.sendMessage);
router.put('/:id', watson.updateMessage);
module.exports = router;