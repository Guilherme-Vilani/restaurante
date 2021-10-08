const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: {type: String, required:true},
        cardapio: [],
        image: {type: String}
    }
)

module.exports = mongoose.model('Estabelecimento', schema);