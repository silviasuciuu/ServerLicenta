import {dbConn} from "../dbutils/db.config"

export default class Greutate {
    constructor({idClient, greutate, data}) {
        this.idClient = idClient;
        this.greutate = greutate;
        this.data = data;

    }

    static create(newGreutate, result){
        dbConn.query("INSERT INTO greutate set ?", newGreutate, function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
            }
        });
    };
    static findAll(result) {
        dbConn.query("SELECT * from greutate", function (err, res) {
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
        dbConn.query("SELECT * from greutate where idClient = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };




    static update(idClient,greutate,data, result) {
        dbConn.query("UPDATE greutate SET greutate=?,data=? where id=Client?", [greutate, data, idClient], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}