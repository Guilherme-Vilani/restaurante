const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        cardapio: [],
    }
)

module.exports = mongoose.model('Estabelecimento', schema);