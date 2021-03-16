import Router from 'koa-router';
import * as res from "express";
import AntrenorClient from "./antrenor_client";
const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
export const router = express.Router()
/*get all*/

router.get('/', (req, res) => {
    AntrenorClient.findAll((err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

/*get by id antrenor*/
router.get('/id_antrenor', (req, res) => {
    var id = req.headers["id_antrenor"];

    AntrenorClient.findByIdAntrenor(id,(err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});
//get by id client
router.get('/id_client', (req, res) => {
    var id = req.headers["id_client"];

    AntrenorClient.findByIdClient(id,(err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

router.get('/id_client/id_antrenor', (req, res) => {
    var idc = req.headers["id_client"];
    var ida = req.headers["id_antrenor"];

    AntrenorClient.findByIdClientAndIdAntrenor(idc,ida,(err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});


/*create*/
router.post('/create',  (req, res) => {
    console.log(req.body)
    var id_client = req.body["id_client"];
    var id_antrenor = req.body["id_antrenor"];

    var a = new AntrenorClient({
        "id_client":id_client,
        "id_antrenor": id_antrenor,

    })
    AntrenorClient.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});


router.delete('/delete', (req, res) => {
    var idc = req.headers["id_client"];
    var ida = req.headers["id_antrenor"];
    AntrenorClient.delete(ida,idc,(err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});