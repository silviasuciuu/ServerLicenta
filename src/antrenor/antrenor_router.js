import Router from 'koa-router';
import antrenor from "./antrenor";
import * as res from "express";
import Antrenor from "./antrenor";


const bodyParser = require('body-parser');
var express = require('express')
const app = express();
global.atob = require("atob");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()/*toti antrenorii*/
router.get('/', (req, res) => {
    Antrenor.findAll((err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});


/*get by email*/
router.get('/email', (req, res) => {
    var email = req.headers["email"];

    // se primeste ed forma "email" trebuie eliminate ghilimelele
    var emaill = email.substring(1, email.length - 1)
    Antrenor.findByEmail(emaill, (err, antrenor) => {

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
    Antrenor.findById(id, (err, antrenor) => {
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

    Antrenor.findByEmailAndPassword(email, password, (err, antrenor) => {
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
    var numar_telefon = req.body["numar_telefon"];



    var a = new Antrenor({
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
    await Antrenor.findByEmail(email, (err, user) => {
        if (err) {
        } else {
            if (user.length !== 0) {
                res.status(400).send({error: "Email deja existent"});
            } else {
                 Antrenor.findByTelephone(numar_telefon, (err, user1) => {
                    if (err) {
                    } else {
                        if (user1.length !== 0) {
                            res.status(400).send({error: "Numar de telefon deja existent"});
                        } else {
                            Antrenor.create(a, (err, user) => {
                                res.sendStatus(200);

                            });
                        }
                    }
                });
            }
        }
    });






});


router.put('/edit', async (req, res) => {
    var id=req.body['id']
    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var password = req.body["parola"];
    var varsta = req.body["varsta"];
    var descriere = req.body["descriere"];
    var poza = req.body["poza"];
    var antrenor = new Antrenor({
        "id": id,
        "nume": nume,
        "prenume": prenume,
        "parola": password,
        "varsta": varsta,
        "nota": 0,
        "descriere": descriere,
        "poza": poza
    })
   await Antrenor.update(antrenor, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });

});




