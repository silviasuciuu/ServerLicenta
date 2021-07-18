import {dbConn} from "../dbutils/db.config"
import ClientApp from "../client/client";
import Antrenor from "../antrenor/antrenor";

export default class Auth {
    constructor({email, parola, tip}) {
        this.email = email;
        this.parola = parola;
        this.tip=tip;

    }


    static findByEMailAndPassword(email, parola, tip, result) {
        let query = "SELECT * from " + tip + " where email = ? and parola=?"
        dbConn.query(query, [email, parola], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });


    };


}