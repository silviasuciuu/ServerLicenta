import Router from 'koa-router';
import * as res from "express";
import Client from "./client";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()
/*toti clientii*/
router.get('/', (req, res) => {
    Client.findAll((err, antrenor) => {
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

    Client.findById(id, (err, antrenor) => {
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

    Client.findByEmailAndPassword(email, password, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

router.post('/create', (req, res) => {
    console.log(req.body)

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

    var a = new Client({
        "id": 0,
        "nume": nume,
        "prenume": prenume,
        "email": email,
        "parola": parola,
        "varsta": varsta,
        "greutate": greutate,
        "inaltime": inaltime,
        "sex": sex,
        "bmi":bmi,
        "poza": poza,
        "status":status,
        "descriere":descriere
    })
    Client.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/edit', (req, res) => {
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
    var id=0;
    Client.findByEmailAndPassword(email, parola, function (error, result) {
        id=result[0].id;
        var a = new Client({
            "id": id,
            "nume": nume,
            "prenume": prenume,
            "email": email,
            "parola": parola,
            "varsta": varsta,
            "greutate": greutate,
            "inaltime": inaltime,
            "sex": sex,
            "bmi":bmi,
            "poza": poza,
            "status":status,
            "descriere":descriere
        })
        Client.update(a, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.sendStatus(200);
            }
        });
    })

});