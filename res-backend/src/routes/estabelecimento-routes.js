const express = require('express')
const router = express.Router()
const EstabelecimentoService = require('../service/estabelecimento-service.js')
const estabelecimentoService = new EstabelecimentoService()
const Estabelecimento = require('../models/estabelecimento-model')

router.get('/estabelecimento/listar', async (req, res) => {
    let estabelecimento = await estabelecimentoService.list()
    res.json(estabelecimento)
})

// router.post('/cliente/registro', async (req, res) => {
//     try {

//         const { nome, email, carrinho, dinheiro } = req.body;

//         const cliente = await Cliente.create({
//             nome,
//             email,
//             carrinho,
//             dinheiro
//         });

//         res.status(201).json(cliente);
//     } catch (err) {
//         console.log(err);
//     }
// })

// router.delete('/cliente/excluir/:id', async (req, res) => {
//     Cliente
//         .findByIdAndRemove(req.params.id).then(doc => {
//             if (!doc) {
//                 return res.status(404).send();
//             }
//             res.send(doc);
//         }).catch(err => {
//             res.status(500).send(err);
//         })
// })

module.exports = (app) => app.use('/', router)