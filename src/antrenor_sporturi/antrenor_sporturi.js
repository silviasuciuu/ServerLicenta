import {dbConn} from "../dbutils/db.config"

export default class AntrenorSporturi {
    constructor({id, nume, prenume, email, parola, varsta}) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.email = email;
        this.parola = parola;
        this.varsta = varsta;
    }

    static async create(newAntrenorSporturi, result){
        dbConn.query("INSERT INTO antrenor_sporturi set ?", newAntrenorSporturi, function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
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
        dbConn.query("SELECT * from antrenor_sporturi where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async findByIdSport(id, result) {
        dbConn.query("SELECT * from antrenor_sporturi where id_sport= ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };




    static async update(id_antrenor,id_sport,experienta, result) {
        dbConn.query("UPDATE antrenor_sporturi SET experienta=? where id_antrenor=? AND id_sport=?", [experienta,id_antrenor,id_sport], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    static async delete(id_antrenor,id_sport, result) {
        dbConn.query("REMOVE FROM antrenor_sporturi  where id_antrenor=? AND id_sport=?", [id_antrenor,id_sport], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}