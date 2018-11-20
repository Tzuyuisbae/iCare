var mysql = require('mysql');

function saveQuery(email, nameOfQuery, query) {
    var sql = `UPDATE accounts SET saved_queries=JSON_SET(saved_queries,  '$.${nameOfQuery}', '${query}') where email='${email}';`;

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
            }
        });
        con.end();
    });
}

function getSavedQueries (email, callback) {
    var sql = `select saved_queries from accounts where email='${email}'`;

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result) {
            //console.log(result);
            callback(err, JSON.parse(result[0].saved_queries));
        });
        con.end();
    });
}


getSavedQueries('ishan@email.com', function (err, result) {
    console.log(result);
    console.log(Object.values(result));
});