module.exports = app => {
    const Router = require("express").Router();
    const conntrollerproduit = require("../controllers/produit.controller");


    Router.route("/add").post(conntrollerproduit.addProduit);
    Router.route("/").get(conntrollerproduit.getProduits);
    Router.route("/:idProduit").get(conntrollerproduit.getProduit);

    Router.route("/update/:idProduit").put(conntrollerproduit.updateProduit);
    Router.route("/delete/:idProduit").delete(conntrollerproduit.deleteProduit);


    app.use("/produit", Router);
}