import path from "path";
import Auth from "./auth";

const bodyParser = require('body-parser');
var express = require('express')
const app = express();
var jsonParser = bodyParser.json()


import jwt from 'jsonwebtoken';
import { jwtConfig } from '../utils/constants';



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies
export const router = express.Router()

const createToken = (user) => {
    return jwt.sign({ email: user.email}, jwtConfig.secret, { expiresIn: 60 * 60 * 60 });
};

router.post('/login', (req, res) => {
    const {email, parola, tip} = req.body;

    if (email && parola) {
        Auth.findByEMailAndPassword(email, parola, tip, (err, user) => {
                if (err) {
                    res.send(err);
                } else {
                    if (user.length!=0 && parola == user[0].parola) {

                        res.status(201).send({ body: createToken(user) });
                    } else {
                       // res.body = {issue: [{error: 'Invalid credentials'}]};
                        res.status(400).send({ error: "Invalid credentials" });
                    }
                }
            }
        );
    }
});