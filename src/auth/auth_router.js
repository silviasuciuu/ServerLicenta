
const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()

/*get by id antrenor*/
router.get('/credidentials', (req, res) => {
    var email = req.headers["email"];
    var parola = req.headers["parola"];
    var tip = req.headers["tip"];

    Auth.findByEMailAndPassword(email,parola,tip, (err, antrenor) => {
        if (err) {
            res.send(err);
        } else {
            res.send(antrenor);
        }
    });
});

