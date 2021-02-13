import {dbConn} from "../dbutils/db.config"

export default class Transformare {
    constructor({id, id_antrenor,id_client,scop,kilograme, inainte, dupa,}) {
        this.id = id;
        this.inainte = inainte;
        this.dupa = dupa;
        this.id_antrenor = id_antrenor;
        this.id_client = id_client;
        this.scop = scop;
        this.kilograme = kilograme;

    }

    static create(newTransformare, result) {
        dbConn.query("INSERT INTO transformare set ?", newTransformare, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
    };

    static findAll(result) {
        dbConn.query("SELECT * from transformare", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
                console.log(result)
            }
        });
    };

    static findByIdAntrenor(id, result) {
        dbConn.query("SELECT * from transformare where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static findByIdClient(id, result) {
        dbConn.query("SELECT * from transformare where id_client = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static findByCLientAntrenor(idC, idA, result) {
        dbConn.query("SELECT * from transformare where id_client = ? and id_antrenor=?", idC, idA, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };



}