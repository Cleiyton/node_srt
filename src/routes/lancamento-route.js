'use strict'


const express = require('express');
const router = express.Router();
const controller= require('../controllers/lancamento-controller');

router.post('/cadastro', controller.post); 
router.put('/update/:id', controller.put);
router.delete('/delete/:id',controller.delete);
router.get('/list/:id',controller.getByLancamento);
router.get('/despesas/:id',controller.getByDespesas);
router.get('/receitas/:id', controller.getByReceita);

module.exports = router;    