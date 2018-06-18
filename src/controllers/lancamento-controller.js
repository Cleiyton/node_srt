'use strict '


const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Lancamento = mongoose.model('Lancamento');

exports.getByLancamento = async (req, res, next) => {

    try {
            const lancamento = await Lancamento.find({

                active:true
            },'description contaCartao valor');

            return res.status(200).send({lancamento})

    } catch (e) {

        return res.status(400).send({error:'error while listing expenses'})



    }
 
}

exports.post = async (req, res, next) => {

    try {
        const lancamento = await Lancamento.create(req.body);

        return res.status(200).send({ message: 'launch successfully registered' });
    } catch (e) {

        return res.status(400).send({ error: 'error when posting' });

    }
}


exports.put = async (req, res, next) => {

    try {

        const lancamento = await Lancamento.findByIdAndUpdate(req.params.id, {

            $set: {

                description: req.body.description,
                valor: req.body.valor,
                data: req.body.data,
                contaCartao: req.body.contaCartao,
                categoria: req.body.categoria,
            }

        });

        return res.status(200).send({ message: 'expenses successfully updated' })



    } catch (e) {
        return res.status(200).send({ error: 'error updating expenses' })
    }

}


exports.delete = async (req, res, next) => {

    try {
        const lancamento = await Lancamento.findByIdAndRemove(req.params.id);

        return res.status(200).send({ message: 'expense successfully removed' });

    } catch (e) {
        return res.status(200).send({ error: 'error removing expense' });

    }
}