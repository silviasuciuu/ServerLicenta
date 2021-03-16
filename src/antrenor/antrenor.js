import {dbConn} from "../dbutils/db.config"

export default class Antrenor {
    constructor({id, nume, prenume, email, parola, varsta,nota,descriere,poza}) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.email = email;
        this.parola = parola;
        this.varsta = varsta;
        this.nota=nota;
        this.descriere=descriere;
        this.poza=poza;

    }

    static async create(newAntrenor, result){
        dbConn.query("INSERT INTO antrenor set ?", [newAntrenor], function (err, res){
            if(err){
                console.log("error: ",err);
                result(err,null);
            }else {
                result(null,res.insertId);
            }
        });
    };
    static async findAll(result) {
        dbConn.query("SELECT * from antrenor", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
                console.log(result)
            }
        });
    };

    static async findById(id, result) {
        dbConn.query("SELECT * from antrenor where id = ? ", [id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async findByEmailAndPassword(email, parola, result) {
        dbConn.query("SELECT * from antrenor where email = ? and parola=?", [email, parola], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };


    static async update(antrenor, result) {
        console.log(antrenor)
        dbConn.query("UPDATE antrenor SET email=? ,parola=? ,varsta=? ,nota=? ,descriere=?,poza=? where nume=? and prenume=?", [ antrenor.email, antrenor.parola, antrenor.varsta,antrenor.nota,antrenor.descriere,antrenor.poza, antrenor.nume,antrenor.prenume], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}