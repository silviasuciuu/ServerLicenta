import Mesaj from "./mesaj";
import Client from "../client/client";
import Greutate from "../greutate/greutate";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()
/**
 * DE TESTAT !!!
 */



/*create*/
router.post('/create', (req, res) => {

    var id_antrenor = req.body["id_antrenor"];
    var id_client = req.body["id_client "];
    var mesaj= req.body["mesaj"];
    var status = req.body["status"];

    var a = new Mesaj({
        "id":0,
        "id_antrenor":id_antrenor,
        "id_client": id_client,
        "mesaj": mesaj,
        "status": status

    })
    Mesaj.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});


router.get('/', (req, res) => {
    Mesaj.findAll((err, mes) => {
        if (err) {
            res.send(err);
        } else {
            res.send(mes);
        }
    });
});



router.get('/id_client', (req, res) => {
    var id = req.headers["id_client"];
    Mesaj.findByIdClient(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});


router.get('/id_antrenor', (req, res) => {
    var id = req.headers["id_antrenor"];
    Mesaj.findByIdAntrenor(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});


router.get('/id_antrenor/id_client', (req, res) => {
    var idA = req.headers["id_antrenor"];
    var idC = req.headers["id_client"];

    Mesaj.findBetween(idC,idA, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});