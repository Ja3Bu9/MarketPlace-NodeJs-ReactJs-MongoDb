// const Produit = require('../models/model.produit');

// exports.addProduit = (req, res) => {


//     let produitPush = new Categorie({
//         nom: req.body.nom,
//         prix: req.body.prix,
//         quantite: req.body.quantite,
//         photo: req.body.photo,
//         idCategorie: req.body.idCategorie,
//         idVendeur: req.body.idVendeur
       
//     })
    
//     Categorie.findOne({ nom: req.body.nom })
//         .then((categorie) => {
//             if (categorie == null) {
//                 categoriePush.save()
//                     .then(() => res.json({notification : "Category Added !" }))
//                     .catch((err) => res.json(err))
//                     }
//             else {
//                 res.json("Category already exist !");
//             }
//         })
//         .catch((err) => res.json(err))


//         // produitPush.save()
//         // .then(() => res.json({notification : "Product Added !" }))
//         // .catch((err) => res.json(err))
    
// }