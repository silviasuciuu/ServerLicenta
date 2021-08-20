import {dbConn} from "../dbutils/db.config"

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

    static async findAll(result) {
        dbConn.query("SELECT * from antrenor_sporturi", function (err, res) {
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
        dbConn.query("SELECT * from antrenor_sporturi where id_antrenor = ? ", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async getExperience(id, result) {
        dbConn.query("SELECT sport.denumire,antrenor_sporturi.experienta from sport  left join antrenor_sporturi on  antrenor_sporturi.id_antrenor = ? and sport.id=antrenor_sporturi.id_sport ORDER BY sport.id", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }

        });
    };



    static async findByIdAntrSport(idA, idS, result) {
        dbConn.query("SELECT * from antrenor_sporturi where id_antrenor= ? and id_sport=? ", [idA, idS], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };


    static async update(id_antrenor, id_sport, experienta, result) {


        AntrenorSporturi.findByIdAntrSport(id_antrenor, id_sport, (err, antrenor) => {

            if (antrenor.length == 0) {
                var a = new AntrenorSporturi({
                    "id_sport": id_sport,
                    "id_antrenor": id_antrenor,
                    "experienta": experienta

                })
                AntrenorSporturi.create(a, (err, result) => {
                    console.log('da')
                });

            }
        });


        dbConn.query("UPDATE antrenor_sporturi SET experienta=? WHERE id_antrenor=? AND id_sport=?", [experienta, id_antrenor, id_sport], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    static async delete(id_antrenor, id_sport, result) {
        dbConn.query("DELETE FROM antrenor_sporturi  where id_antrenor=? AND id_sport=?", [id_antrenor, id_sport], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }




    static async getByScop( id_scop, result) {
        dbConn.query("SELECT sport.id from sport inner join scopuri_sport where sport.id=scopuri_sport.id_sport and scopuri_sport.id_scop=?",[id_scop], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    static async findByIdSport(id, result) {
        dbConn.query("SELECT * from antrenor_sporturi where id_sport= ? ",[ id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };


}