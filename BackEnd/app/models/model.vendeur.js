const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VendeurSchema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    prenom: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    phone: {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    type: {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    status: {
        type: Boolean,
        select: false,
        required: true,
        trim: true,
        default: false,
    },
    fichierAdministratif : {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    chiffreAffaires: {
        type: Number,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    produits: {
        type: Number,
        select: false,
        required: true,
        trim: true,
        default: 0,
    },
},
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Vendeur', VendeurSchema);