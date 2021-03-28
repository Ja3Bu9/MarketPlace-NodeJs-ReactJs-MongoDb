module.exports = app => {
    const Router = require("express").Router();
    const conntrollerCommande = require("../controllers/commande.controller");


    Router.route("/add/cc/:idClient").post(conntrollerCommande.addCommandeCC);
    Router.route("/add/cash/:idClient").post(conntrollerCommande.addCommandeCash);

    Router.route("/").get(conntrollerCommande.getCommandes);
    Router.route("/verify/:idCommande").put(conntrollerCommande.verifyCommande);
    Router.route("/refuse/:idCommande").put(conntrollerCommande.refuseCommande);
    Router.route("/livre/:idCommande").put(conntrollerCommande.LivreCommande);
    Router.route("/addlivreur/:idCommande").put(conntrollerCommande.AddLivreurCommande);




    app.use("/commande", Router);
}