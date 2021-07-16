import Router from "koa-router";
var express = require('express')
export const router = express.Router()

import * as res from "express";
import SignUpAntrenor from "./sign-up-antrenor";
import Client from "../client/client";
import AntrenorSporturi from "../antrenor_sporturi/antrenor_sporturi";
import Antrenor from "../antrenor/antrenor";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies

/*toti antrenorii*/
router.get('/', (req, res) => {
    SignUpAntrenor.findAll((err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

/*create*/
router.post('/create/antrenor-sporturi', (req, res) => {

    var id_sport = req.body["id_sport"];
    var id_antrenor = req.body["id_antrenor"];
    var experienta = req.body["experienta"];

    var a = new AntrenorSporturi({
        "id_sport": id_sport,
        "id_antrenor": id_antrenor,
        "experienta": experienta

    })
    AntrenorSporturi.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});



/*get by email*/
router.get('/email', (req, res) => {
    var email = req.headers["email"];

    // se primeste ed forma "email" trebuie eliminate ghilimelele
    var emaill = email.substring(1, email.length - 1)

    SignUpAntrenor.findByEmail(emaill, (err, antrenor) => {

        if (err) {
            res.send(err);
        } else {

            res.send(antrenor);

        }
    });
});


/*get by id*/
router.get('/id', (req, res) => {
    var id = req.headers["id"];

    SignUpAntrenor.findById(id, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

/*get by email and password*/
router.get('/credidentials', (req, res) => {
    var email = req.headers["email"];
    var password = req.headers["parola"];

    SignUpAntrenor.findByEmailAndPassword(email, password, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});




router.post('/create', async (req, res) => {
    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var email = req.body["email"];
    var password = req.body["parola"];
    var varsta = req.body["varsta"];
    var descriere = req.body["descriere"];
    var poza = req.body["poza"];
    var numar_telefon=req.body["numar_telefon"]


    var a = new SignUpAntrenor({
        "id": 0,
        "nume": nume,
        "prenume": prenume,
        "email": email,
        "parola": password,
        "varsta": varsta,
        "nota": 0,
        "descriere": descriere,
        "poza": poza,
        "numar_telefon":numar_telefon
    })
    await SignUpAntrenor.findByEmail(email, (err, user) => {
        if (err) {
        } else {
            if (user.length !== 0) {
                res.status(400).send({error: "Email already used"});
            } else {
                SignUpAntrenor.findByTelephone(numar_telefon, (err, user) => {
                    if (err) {
                    } else {
                        if (user.length !== 0) {
                            res.status(400).send({error: "Phone number already used"});
                        } else {
                            SignUpAntrenor.create(a, (err, user) => {
                                //  broadcast(a.id, { type: 'created', payload: a});
                                res.sendStatus(200);

                            });
                        }
                    }
                });



            }
        }
    });
});

router.put('/edit', (req, res) => {
    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var email = req.body["email"];
    var password = req.body["parola"];
    var varsta = req.body["varsta"];
    var descriere = req.body["descriere"];
    var poza = req.body["poza"];
    var a = new SignUpAntrenor({
        "id": 0,
        "nume": nume,
        "prenume": prenume,
        "email": email,
        "parola": password,
        "varsta": varsta,
        "nota": 0,
        "descriere": descriere,
        "poza": poza
    })
    SignUpAntrenor.update(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});




