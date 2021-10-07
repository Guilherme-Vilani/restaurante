const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        email: {type: String, required:true},
        carrinho: [],
        dinheiro: {type: Number, required:true},
    }
)

module.exports = mongoose.model('Cliente', schema);