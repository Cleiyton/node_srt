'use strict'


const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getCadastro = async (req, res, next) => {

    try {
        const cadastro = await Cadastro.find({
            active:true
        },' email id password')

        return res.status(200).send(cadastro);

    } catch (e) {
        return res.status(400).send({ error: 'nao foi possivel trazer o cliente' });
    }
}

exports.post = async (req, res, next) => {
    const { email } = req.body;

    try {
        if (await Cadastro.findOne({ email })) {
            return res.status(400).send({ error: 'user already exist' })
        }

        const cadastro = await Cadastro.create(req.body);

        cadastro.password = undefined;

        return res.status(201).send({ message: 'Cliente cadastrado com sucesso' });



    } catch (e) {

        res.status(500).send({
            message: 'Falha ao processar suas requisições'
        });
    }
};



/* exports.authenticate = async (req, res, next) => {
    const { email, password } = req.body;

    const cadastro = await Cadastro.findOne({ email }).select('+password');

    if (!cadastro) {
        return res.status(400).send({ error: 'User not found' });

    }

    if (!await bcrypt.compare(password, cadastro.password)) {

        return res.status(400).send({ error: 'Invalid password' });
    }

    cadastro.password = undefined;

    const token = jwt.sign({ id: cadastro.id }, )

    res.status(200).send({ message: 'user successfully logged in' });

};*/

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


