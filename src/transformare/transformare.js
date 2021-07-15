import {dbConn} from "../dbutils/db.config"

export default class Transformare {
    constructor({id, id_antrenor, poza}) {
        this.id = id;
        this.id_antrenor = id_antrenor;
        this.poza = poza;
    }

    static async create(newTransformare, result) {
        dbConn.query("INSERT INTO transformare set ?", newTransformare, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
    };

    static async findAll(result) {
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

    static async findByIdAntrenor(id, result) {
        dbConn.query("SELECT * from transformare where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };




}