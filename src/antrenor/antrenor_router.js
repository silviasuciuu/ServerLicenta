import Router from 'koa-router';
import antrenor from "./antrenor";
import * as res from "express";
import Antrenor from "./antrenor";
const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
export const router = express.Router()
/*toti antrenorii*/
router.get('/', (req, res) => {
    Antrenor.findAll((err, antrenor) => {
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

    Antrenor.findById(id,(err, antrenor) => {
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

router.post('/create',  (req, res) => {
    console.log(req.body)
    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var email = req.body["email"];
    var password = req.body["parola"];
    var varsta = req.body["varsta"];
    var descriere = req.body["descriere"];
    var poza = req.body["poza"];
    var a = new Antrenor({
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
    Antrenor.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/edit',  (req, res) => {
    var nume = req.body["nume"];
    var prenume = req.body["prenume"];
    var email = req.body["email"];
    var password = req.body["parola"];
    var varsta = req.body["varsta"];
    var descriere = req.body["descriere"];
    var poza = req.body["poza"];
    var a = new Antrenor({
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
    Antrenor.update(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});