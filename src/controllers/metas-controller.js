'use strict'

const ValidationContract = require('../validators/fluent-validator');
const mongoose = require('mongoose');
const Metas = mongoose.model('Metas');



exports.getByMetas = async (req, res, next)=>{

    try{
        const metas = await Metas.find({

                active:true

        },'description valor data categoria contaCartao');

        return res.status(200).send({metas});

    }catch(e){

        return res.status(400).send({error:'error while listing goals'})
    }
}



exports.post = async (req, res, next0) => {

    try {
        const metas = await Metas.create(req.body);
        return res.status(200).send({ message: 'goals successfully registered' });

    } catch (e) {

        return res.status(200).send({ message: 'error while registering goals' });

    }
}


exports.put = async (req, res, next) => {

    try {

        const metas = await Metas.findByIdAndUpdate(req.params.id, {

            $set: {
                description: req.body.description,
                valor: req.body.valor,
                data: req.body.data,
                contaCartao: req.body.contaCartao
            }
        });

        return res.status(200).send({ message: 'goal updated with successes' });

    } catch (e) {

        return res.status(400).send({ error: 'error while updating goals' });

    }

}



exports.delete = async (req, res, next) => {

    try{
        const metas= await Metas.findByIdAndRemove(req.params.id);
        return res.status(200).send({message:'goals successfully removed'})


    }catch(e){
        return res.status(400).send({error:'error removing targets'})

        
    }

}


