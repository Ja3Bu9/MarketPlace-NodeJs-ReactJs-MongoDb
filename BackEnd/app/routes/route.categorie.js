module.exports = app => {
    const Router = require("express").Router();
    const conntrollercategorie = require("../controllers/categorie.controller");


    Router.route("/add").post(conntrollercategorie.addCategorie);
    // Router.route("/register").post(conntrollerAdmin.registersuperAdmin);
    Router.route("/").get(conntrollercategorie.getCategorie);
    Router.route("/update/:idCategorie").put(conntrollercategorie.updateCategorie);
    Router.route("/delete/:idCategorie").delete(conntrollercategorie.deleteCategorie);


    app.use("/categorie", Router);
}