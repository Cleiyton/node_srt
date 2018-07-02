
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    description: {
        type: String,
        required: true
    },

    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },

    contaCartao: {

        type: String,
        required: true

    },

    categoria: {
        type: String,
        required: true

    },

        cadastro:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cadastro'
        },

    active: {
        type: Boolean,
        required: true,
        default: true
    }

});

module.exports = mongoose.model('Metas', schema);