var mysql = require('mysql');


function insert (table, row) {
	var sql = "INSERT INTO (" + table + row.join(", ") + ");";

	function exec_SQL(cmd) {

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Database created");
        });
    });

    console.log("succeesssssssssssssssssssssssssssss")
}	
}


// get 
