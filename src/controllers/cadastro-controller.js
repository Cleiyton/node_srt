'use strict'


const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');


exports.post = async (req, res, next) => {
    const { email } = req.body;

    try {
        if (await Cadastro.findOne({ email })) {
            return res.status(400).send({ error: 'user already exist' })
        }

        const cadastro = await Cadastro.create(req.body);

        return res.status(201).send({ message: 'Cliente cadastrado com sucesso' });



    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        const cadastrado = await Cadastro.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                password: req.body.password
            }
        })

        return res.status(200).send({ message: 'user updated successfully' });


    } catch (e) {
        return res.status(400).send({ message: 'erro updated user' });

    }
}


