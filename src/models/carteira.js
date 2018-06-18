
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    nameConta:{
        type:String,
        required:true
    },
    tipodaconta: {
        type: String,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    },

    active: {
        type: Boolean,
        required: true,
        default: true
    }



});

module.exports = mongoose.model('Carteira', schema);