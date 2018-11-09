var mysql = require('mysql');

module.exports = {
    clients: function(callback) {
        var sql = "select * from client";

        var con = mysql.createConnection({
            host: "den1.mysql6.gear.host",
            user: "icare",
            password: "team9!",
            database: "icare"
        });

        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
            if (err) throw err;
            callback(null, result);
            });
        });
    }
}