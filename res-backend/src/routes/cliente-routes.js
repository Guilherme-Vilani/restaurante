const express = require('express')
const router = express.Router()
const ClienteService = require('../service/cliente-service.js')
const clienteService = new ClienteService()
const Cliente = require('../models/cliente-model')

router.get('/cliente/listar', async (req, res) => {
    let cliente = await clienteService.list()
    res.json(cliente)
})

router.post('/cliente/registro', async (req, res) => {
    try {

        const { nome, email, idade, telefone } = req.body;

        const cliente = await Cliente.create({
            nome,
            email,
            idade,
            telefone
        });

        res.status(201).json(cliente);
    } catch (err) {
        console.log(err);
    }
})

router.delete('/cliente/excluir/:id', async (req, res) => {
    Cliente
        .findByIdAndRemove(req.params.id).then(doc => {
            if (!doc) {
                return res.status(404).send();
            }
            res.send(doc);
        }).catch(err => {
            res.status(500).send(err);
        })
})

module.exports = (app) => app.use('/', router)