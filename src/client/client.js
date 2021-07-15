import {dbConn} from "../dbutils/db.config"

export default class ClientApp {
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
    static async findAll(result) {
        dbConn.query("SELECT * from client", function (err, res) {
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
        dbConn.query("SELECT * from client where id = ? ", id, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

    static async findByEmailAndPassword(email, parola, result) {
        dbConn.query("SELECT * from client where email = ? and parola=?",[ email, parola], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
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
    static async update(client, result) {
        dbConn.query("UPDATE client SET nume=?,prenume=?,email=?,parola=?,varsta=?,greutate=?,inaltime=?,sex=?,bmi=?,poza=?,descriere=?,status=? where id=?", [client.nume, client.prenume, client.email, client.parola, client.varsta, client.greutate, client.inaltime, client.sex, client.bmi,client.poza,client.descriere,client.status, client.id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    static async updateGreutate(greutate,bmi,status,id, result) {
        dbConn.query("UPDATE client SET greutate=?,bmi=?,status=? where id=?", [ greutate,bmi,status ,id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}