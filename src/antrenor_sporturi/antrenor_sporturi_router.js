import AntrenorSporturi from "./antrenor_sporturi";
import Router from "koa-router";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()
/*get all*/

router.get('/', (req, res) => {
    AntrenorSporturi.findAll((err, antrenor) => {
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
    AntrenorSporturi.findByIdAntrenor(id, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});
//get by id sport
router.get('/id_sport', (req, res) => {
    var id = req.headers["id_sport"];

    AntrenorSporturi.findByIdSport(id, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

router.get('/experience', (req, res) => {
    var id = req.headers["id_antrenor"];

    AntrenorSporturi.getExperience(id, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});


/*create*/
router.post('/create', (req, res) => {


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


router.delete('/delete', (req, res) => {
    var ids = req.headers["id_sport"];
    var ida = req.headers["id_antrenor"];
    AntrenorSporturi.delete(ida, ids, (err, antrenor) => {
        if (err) {
            res.status(err);
        } else {
            res.send(antrenor);
        }
    });
});

router.put('/edit', (req, res) => {
    var antrenor = req.body["antrenor"];
    var sport = req.body["sport"];
    var experienta = req.body["experienta"];
    var a = new AntrenorSporturi({
        "id_antrenor": antrenor,
        "id_sport": sport,
        "experienta": experienta
    })
    AntrenorSporturi.update(antrenor, sport, experienta, (err, result) => {
        if (err) {
            res.status(err);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/scop', (req, res) => {
    var id_scop = req.headers["id_scop"];
    AntrenorSporturi.getByScop(id_scop, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            console.log(antrenor)
            res.send(antrenor);
        }
    });
});