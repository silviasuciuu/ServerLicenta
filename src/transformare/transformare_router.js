import Transformare from "./transformare";


const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()
router.post('/create', (req, res) => {

    var id_antrenor = req.body["id_antrenor"];
    var poza= req.body["poza"];

    var a = new Transformare({
        "id":0,
        "id_antrenor":id_antrenor,
        "poza": poza,

    })
    Transformare.create(a, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.sendStatus(200);
        }
    });
});





router.get('/', (req, res) => {
    Transformare.findAll((err, mes) => {
        if (err) {
            res.send(err);
        } else {
            res.send(mes);
        }
    });
});



router.get('/id_client', (req, res) => {
    var id = req.headers["id_client"];
    Transformare.findByIdClient(id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            console.log(resp)
            res.send(resp);
        }
    });
});


router.get('/id_antrenor', (req, res) => {
    var id = req.headers["id_antrenor"];
    Transformare.findByIdAntrenor(id, (err, resp) => {
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

    Transformare.findByCLientAntrenor(idC,idA, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});