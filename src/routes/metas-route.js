'use strict'


const express = require('express');
const router = express.Router();
const controller = require('../controllers/metas-controller');

router.post('/cadastro', controller.post);
router.put('/update/:id', controller.put);
router.delete('/delete/:id', controller.delete);
router.get('/list',controller.getByMetas);

module.exports = router;    