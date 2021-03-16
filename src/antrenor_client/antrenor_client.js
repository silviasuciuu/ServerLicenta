import {dbConn} from "../dbutils/db.config"

export default class AntrenorClient {
    constructor({id_antrenor, id_client}) {
        this.id_antrenor = id_antrenor;
        this.id_client = id_client;

    }

    static async create(newAntrenorClient, result){
        dbConn.query("INSERT INTO antrenor_client set ?", newAntrenorClient, function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
            }
        });
    };
    static async findAll(result) {
        dbConn.query("SELECT * from antrenor_client", function (err, res) {
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
        dbConn.query("SELECT * from antrenor_client where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };
    static async findByIdClient(id, result) {
        dbConn.query("SELECT * from antrenor_client where id_client = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async findByIdClientAndIdAntrenor(idc,ida, result) {
        dbConn.query("SELECT * from antrenor_client where id_antrenor = ? and id_client=?", idc, ida, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };




    static async delete(id_antrenor,id_client, result) {
        dbConn.query("DELETE FROM antrenor_client  where id_antrenor=? AND id_client=?", [id_antrenor,id_client], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}