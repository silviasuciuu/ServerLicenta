import Transformare from "./transformare";
import {router} from "../parere/pareri_router";



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