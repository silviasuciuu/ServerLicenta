import Router from 'koa-router';
import * as res from "express";

import path from "path";
import Antrenor from "../antrenor/antrenor";
import SignUpClientApp from "./sign-up-client";
import Client from "../client/client";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()


/*get by id*/
/*get by id*/
router.get('/id', (req, res) => {
    var id = req.headers["id"];

    Client.findById(id, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

router.get('/email', (req, res) => {
    var email = req.headers["email"];
    // se primeste ed forma "email" trebuie eliminate ghilimelele
    var emaill=email.substring(1,email.length-1)

    Client.findByEmail(emaill, (err, client) => {

        if (err) {
            res.send(err);
        } else {

            res.send(client);

        }
    });
});



router.post('/create', async (req, res) => {

    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var email = req.body["email"];
    var parola = req.body["parola"];
    var varsta = req.body["varsta"];
    var greutate = req.body["greutate"];
    var inaltime = req.body["inaltime"];
    var sex = req.body["sex"];
    var bmi = req.body["bmi"];
    var poza = req.body["poza"];
    var status = req.body["status"];
    var descriere = req.body["descriere"];

    var a = new SignUpClientApp({
        "id": 0,
        "nume": nume,
        "prenume": prenume,
        "email": email,
        "parola": parola,
        "varsta": varsta,
        "greutate": greutate,
        "inaltime": inaltime,
        "sex": sex,
        "bmi": bmi,
        "poza": poza,
        "status": status,
        "descriere": descriere
    })
    await SignUpClientApp.findByEmail(email, (err, user) => {
        if (err) {
        } else {
            if (user.length !== 0) {
                res.status(400).send({error: "Email already used"});
            } else {
                SignUpClientApp.create(a, (err, user) => {
                    res.sendStatus(200);
                });
            }
        }
    });
});
