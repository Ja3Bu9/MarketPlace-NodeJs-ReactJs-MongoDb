module.exports = app => {
    const Router = require("express").Router();
    const conntrollerproduit = require("../controllers/produit.controller");


    Router.route("/add").post(conntrollerproduit.addProduit);
    Router.route("/").get(conntrollerproduit.getProduits);
    // Router.route("/update/:idCategorie").put(conntrollercategorie.updateCategorie);
    // Router.route("/delete/:idCategorie").delete(conntrollercategorie.deleteCategorie);


    app.use("/produit", Router);
}