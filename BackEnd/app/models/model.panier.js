const mongoose = require('mongoose');
const { schema } = require('../../../../Mcdo mongodb nodejs/backend/app/models/model.menu');


const Schema = mongoose.Schema;
const PanierSchema = new Schema({
    
    idProduit: {
        type: Schema.Types.ObjectId,
        ref: 'Produit'
    },
    idClient: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    Quantite: {
        type: Number,
        required: true,
        trim: true,
    },

}, {
    versionKey: false
});

module.exports = mongoose.model('Panier', PanierSchema);