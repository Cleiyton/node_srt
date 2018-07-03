'use strict'

const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Carteira = mongoose.model('Carteira');

exports.getByConta = async (req, res, next) => {
    try {
        const carteira = await Carteira.find({
            cadastro:req.params.id
        })
        return res.status(200).send(carteira);

    } catch (e) {

        res.status(400).send({
            error: 'Error loading bank account'
        });
    }
}



exports.post = async (req, res, next) => {
    try {

        const carteira = await Carteira.create(req.body);

        return res.status(200).send({ message: 'bank account successfully registered' });



    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};


exports.put = async (req, res, next) => {

    try {
        const carteira = await Carteira.findByIdAndUpdate(req.params.id, {
            $set: {
                nameConta: req.body.nameConta,
                tipodaconta: req.body.tipodaconta,
                saldo: req.body.saldo
            }
        });

        res.status(400).send({ message: 'bank account successfully updated' })

    } catch (e) {

        res.status(500).send({
            error: 'Falha ao processar suas requisições'
        });

    }

};

/*exports.delete = async (req, res, next) => {

    try {
        const carteira = await Carteira.findByIdAndRemove(req.params.id);
        res.status(200).send({ message: 'wallet successfully removed' });


    } catch (e) {
        res.status(400).send({ error: 'error removing wallet' });

    }
}*/

