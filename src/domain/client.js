import MentorSkills from "./mentor-skills";
import User from "./user";
import {dbConn} from "../dbutils/db.config"
export default class Client {
    constructor({id, nume, prenume, email, parola, varsta, greutate, inaltime, sex, bmi, status}) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.email = email;
        this.parola = parola;
        this.varsta = varsta;
        this.greutate = greutate;
        this.inaltime = inaltime;
        this.sex = sex;
        this.bmi = bmi;
        this.status = status;


    }

    static create(newClient, result) {
        dbConn.query("INSERT INTO client set ?", newClient, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
    };


    static findAll(result) {
        dbConn.query("SELECT * from client", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };

    static findById(id, result) {
        dbConn.query("SELECT * from client where id = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static findByEmailAndPassword(email, parola, result) {
        dbConn.query("SELECT * from client where email = ? and parola=?", email, parola, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };



    static update(client,result) {
        dbConn.query("UPDATE client SET nume=?,prenume=?,email=?,parola=?,varsta=?,greutate=?,inaltime=?,sex=?,bmi=? where id=?", [client.nume,client.prenume,client.email,client.parola,client.varsta,client.greutate,client.inaltime,client.sex,client.bmi, client.id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}