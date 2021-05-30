import Greutate from "./greutate";
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


/*get by id client*/
router.get('/id_client', (req, res) => {
    var id = req.headers["id_client"];
    Greutate.findByIdClient(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});


/*create*/
router.post('/create', (req, res) => {
    var id_client = req.body["id_client "];
    var greutate = req.body["greutate"];
    var data = req.body["data"];

    var a = new Greutate({
        "id_client": id_client,
        "greutate": greutate,
        "data": data

    })
   Greutate.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});




router.put('/edit', (req, res) => {
    var id_client = req.body["id_client "];
    var greutate = req.body["greutate"];
    var data = req.body["data"];


    var a = new Greutate({
        "id_client": id_client,
        "greutate": greutate,
        "data": data

    })
    Greutate.update(id_client, greutate, data, (err, result) => {
        if (err) {
            res.status(err);
        } else {
            res.sendStatus(200);
        }
    });
});