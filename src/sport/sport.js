import {dbConn} from "../dbutils/db.config"

export default class Sport {
    constructor({id, denumire}) {
        this.id = id;
        this.denumire = denumire;

    }

    static findAll(result) {
        dbConn.query("SELECT * from sport", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }

    static findByScope(scope,result) {

        dbConn.query("SELECT sport.denumire FROM sport INNER JOIN scopuri_sport ON scopuri_sport.id_sport = sport.id and scopuri_sport.id_scop=?", [scope],function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }


    static async findByName(name, result) {
        dbConn.query("SELECT * from sport where denumire = ? ", [name], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };
}
