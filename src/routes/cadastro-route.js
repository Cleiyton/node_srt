'use strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/cadastro-controller');

router.post('/', controller.post); 
router.put('/:id', controller.put );

module.exports = router;    