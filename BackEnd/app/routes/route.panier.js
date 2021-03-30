module.exports = app => {
    const Router = require("express").Router();
    const conntrollerpanier = require("../controllers/panier.controller");
    const middleWare = require("../middleware/authenticateClient")




    Router.route("/add").post(middleWare.client,conntrollerpanier.addToPanier);
    Router.route("/:idClient").get(middleWare.client,conntrollerpanier.getPanier);
    Router.route("/update/:idPanier").put(middleWare.client,conntrollerpanier.updatePanier);
    Router.route("/delete/:idPanier").delete(middleWare.client,conntrollerpanier.deletePanier);


    app.use("/panier", Router);
}