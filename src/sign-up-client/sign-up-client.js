import {dbConn} from "../dbutils/db.config"

export default class SignUpClientApp {
    constructor({id, nume, prenume, email, parola, varsta, greutate, inaltime, sex, bmi, status, poza,descriere}) {
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
        this.poza = poza;
        this.descriere = descriere;

    }

    static async create(newClient, result) {
        dbConn.query("INSERT INTO client set ?", newClient, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });






    };
    static async findByEmail(email, result) {
        dbConn.query("SELECT * from client where email = ? ", [email], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };


    static async findById(id, result) {
        dbConn.query("SELECT * from client where id = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                return res;
            }
        });
    };



    static async findByEmail(email,  result) {
        dbConn.query("SELECT * from client where email = ?",[ email], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

}