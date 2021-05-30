import Parere from "./pareri.js";
import Greutate from "../greutate/greutate";
import Router from "koa-router";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router();
/**
 * DE TESTAT !!!
 */



/*create*/
router.post('/create', (req, res) => {

    var id_antrenor = req.body["id_antrenor"];
    var id_client = req.body["id_client "];
    var descriere= req.body["descriere"];
    var nota = req.body["nota"];

    var a = new Parere({
        "id":0,
        "descriere":descriere,
        "id_antrenor":id_antrenor,
        "id_client": id_client,
        "nota": nota,

    })
    Parere.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});


router.get('/', (req, res) => {
    Parere.findAll((err, mes) => {
        if (err) {
            res.send(err);
        } else {
            res.send(mes);
        }
    });
});



router.get('/id_client', (req, res) => {
    var id = req.headers["id_client"];
    Parere.findByIdClient(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});


router.get('/id_antrenor', (req, res) => {
    var id = req.headers["id_antrenor"];
    Parere.findByIdAntrenor(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});


router.put('/edit', (req, res) => {
    var id_client = req.body["id_client "];
    var id_antrenor = req.body["id_antrenor"];

    var nota = req.body["nota"];
    var descriere = req.body["descriere"];


    var a = new Parere({
        "id_client": id_client,
        "id_antrenor": id_antrenor,
        "nota": nota,
        "descriere":descriere

    })
   Parere.update(descriere, id_client, id_antrenor,nota, (err, result) => {
        if (err) {
            res.status(err);
        } else {
            res.sendStatus(200);
        }
    });
});