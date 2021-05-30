import {dbConn} from "../dbutils/db.config";

export default class AntrenorSporturi {
    constructor({id_antrenor, id_sport, experienta}) {
        this.id_antrenor = id_antrenor;
        this.id_sport = id_sport;
        this.experienta = experienta;

    }

    static async create(newAntrenorSporturi, result) {
        dbConn.query("INSERT INTO antrenor_sporturi set ?", newAntrenorSporturi, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
    };
}

