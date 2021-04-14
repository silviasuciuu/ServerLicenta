import {dbConn} from "../dbutils/db.config"

export default class Parere {
    constructor({id,descriere,id_client,id_antrenor, nota}) {
        this.id=id;
        this.descriere=descriere;
        this.id_antrenor = id_antrenor;
        this.id_client = id_client;
        this.nota = nota;

    }

    static async create(newParere, result){
        dbConn.query("INSERT INTO pareri set ?", newParere, function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
            }
        });
    };
    static async findAll(result) {
        dbConn.query("SELECT * from pareri", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
                console.log(result)
            }
        });
    };

    static async findByIdClient(id, result) {
        dbConn.query("SELECT * from pareri where id_client = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async findByIdAntrenor(id, result) {
        dbConn.query("SELECT * from pareri where id_antrenor = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };



    static async update(descriere,idClient,idAntrenor,nota, result) {
        dbConn.query("UPDATE pareri SET descriere=?,nota=? where id_client=? AND id_antrenor=?", [descriere,nota,idClient,idAntrenor], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}