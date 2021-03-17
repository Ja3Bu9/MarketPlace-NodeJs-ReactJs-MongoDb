const Client = require('../models/model.client');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../configs/jwt.config")
const nodemailer = require("../configs/nodemailer.config")
const { body, validationResult } = require('express-validator');




exports.registerClient = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let confirmationCode = '';
    for (let i = 0; i < 25; i++) {
    confirmationCode += characters[Math.floor(Math.random() * characters.length )];
    }


    let clientPush = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        adresse: req.body.adresse,
        confirmationCode: confirmationCode
       
    })
    
    Client.findOne({ email: req.body.email })
        .then((client) => {
            if (client == null) {
                clientPush.save()
                    .then(() => res.json({notification : "please Check email confirmation !" }))
                    .catch((err) => res.json(err))
                    nodemailer.sendConfirmationEmail(
                        clientPush.nom,
                        clientPush.email,
                        clientPush.confirmationCode
                 );
            }
            else {
                res.json("email already exist !");
            }
        })
        .catch((err) => res.json(err))
    
}


exports.loginClient = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        Client.findOne({
            email: req.body.email
        }).select('password').then((client) => {
            if (client == null) {
                error.push("email not found !")
                res.json({ error: error });
                return;
            }
            if (client.status != "Active") {
                return res.status(401).send({
                  message: "Pending Account. Please Verify Your Email!",
                });
              }
            var passwordIsValid = bcrypt.compareSync(req.body.password, client.password);
            if (!passwordIsValid){
                error.push("credential error !")
                return res.json({
                    error: error
                });
            }
            else{
                var token = jwt.sign({
                    id: client._id,
                    client: true,
                }, config.secret, {
                    expiresIn: 86400
                })
                res.status(200).send({
                    auth: true,
                    token: token
                })
            }
        
        }).catch((err) => {
            if (err) return res.status(500).send('Error server.')
        });
    
   
}


exports.verifyClient = (req, res, next) => {
    Client.findOne({
      confirmationCode: req.params.confirmationCode,
    })
      .then((client) => {
        if (!client) {
          return res.status(404).send({ message: "client Not found." });
        }
  
        client.status = "Active";
        client.save()
             .then(() => res.json({notification : "Account Confirmed !" }))
            .catch((err) => res.json(err))
      })
      .catch((e) => console.log("error", e));
  };

exports.getClient = async (req, res) => {
    await Client.find().then((clients) => {
        res.status(200).json(clients)
    }).catch((err) => {
        res.status(500).json(err)
    })
}