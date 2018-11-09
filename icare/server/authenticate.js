var mysql = require('mysql');

function authenticate(email, password, callback) {
    var sql = "select Name from accounts where email='" + email + "' and password='" + password + "'"; 
        console.log(sql);
    
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
            con.end();
          });
}

var isValid = function (err, result, res) {
    if (err) console.log("Database error!");
    console.log(JSON.stringify(result));
};

// call from server.js and create and put callback function in server.js

console.log("Call Function");
authenticate('email@email.com', 'pass', isValid);
