'use strict'


const express = require('express');
const router = express.Router();
const controller = require('../controllers/carteira-controller');

router.post('/contas', controller.post);
router.put('/contas/:id', controller.put );
router.get('/:id',controller.getByConta);
//router.delete('/delete/:id', controller.delete);

module.exports = router;    