import Router from 'koa-router';
import Sport from "./sport";
import * as res from "express";
import express from "express";

export const router = express.Router()
/*toate sporturile*/
router.get('/', (req, res) => {
    Sport.findAll((err, sport) => {
        if (err) {
            res.send(err);
        } else {
            res.send(sport);
        }
    });
});

/*toate sporturile dupa scop*/
router.get('/scope', (req, res) => {
    var scope=req.headers["scope"];

    Sport.findByScope(scope,(err, sport) => {
        if (err) {
            res.send(err);
        } else {
            res.send(sport);
        }
    });
});