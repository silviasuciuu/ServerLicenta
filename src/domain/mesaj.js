import {dbConn} from "../dbutils/db.config"

export default class Mesaj {
    constructor({id,id_client,id_antrenor, mesaj, status}) {
        this.id=id;
        this.id_antrenor = id_antrenor;
        this.mesaj = mesaj;
        this.status = status;

    }

    static create(newMesaj, result){
        dbConn.query("INSERT INTO mesaj set ?", newMesaj, function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
            }
        });
    };
    static findAll(result) {
        dbConn.query("SELECT * from mesaj", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
                console.log(result)
            }
        });
    };

    static findByIdClient(id, result) {
        dbConn.query("SELECT * from mesaj where id_client = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static findByIdAntrenor(id, result) {
        dbConn.query("SELECT * from mesaj where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static findBetween(idClient,idAntrenor, result) {
        dbConn.query("SELECT * from mesaj where (id_client = ? AND id_antrenor = ?) " +
            "OR  (id_client = ? AND id_antrenor = ?) ORDER BY trimis", idClient,idAntrenor, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };



}