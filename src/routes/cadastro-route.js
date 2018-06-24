'use strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/cadastro-controller');

router.post('/', controller.post); 
router.put('/:id', controller.put );
//router.post('/authenticate', controller.authenticate);
router.get('/', controller.getCadastro);

module.exports = router;    