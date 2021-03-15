const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommandeSchema = new Schema({
    status: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: "attente"
    },
    idProduit: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    idClient: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    idVendeur: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    DateLivraison: {
        type: Date,
        required: true,
        trim: true,
        minlength: 3,
        default: null,
    },
    idLivreur: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        default: null,
    },

},
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Commande', CommandeSchema);