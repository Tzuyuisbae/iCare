var mysql = require('mysql');
var xlsx = require('node-xlsx');

function insert (table, row) {
	var sql = "INSERT INTO " + table + " values (" + row.join(", ") + ");";

    console.log(sql);

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
}

function add_rows_to_table(table, sheet) {

    var rows = [];
    // HEADERS START AT TWO and data at 3
    for(var j = 3; j < sheet['data'].length; j++) {
        //add the row to the rows array
        rows.push(sheet['data'][j]);
    }
    var headers = sheet['data'][2];
    rows = fix_row_types(headers, rows);
    console.log(rows[0]);
    insert(table, rows[0]);
}

function fix_row_types(header, rows) {
    
    
    for (var i =0; i<header.length; i++) {
        console.log(header[i]);
        if (header[i].includes("Date")) {
            for (var j= 0; j < rows.length; j++) {
                rows[j][i] = "date(\"" + rows[j][i] + "\")";
                //console.log(rows[j][i]);
            }
        } else if (isNaN(rows[0][i])) {
            for (var j= 0; j < rows.length; j++) {
                rows[j][i] = '\"' + rows[j][i] + '\"'; 
            }
        }
    }
    
    for (var i =0; i<rows.length; i++) {
        rows[i] = rows[i].slice(0, header.length);
    }
    return rows;

}

function process_template(filepath) {
    var obj = xlsx.parse(__dirname + filepath); // parses a file
    var rows = [];

    for(var i = 0; i < obj.length; i++)
    {
        var sheet = obj[i];
        console.log(sheet['name']);

        if (sheet['name'] == 'Client Profile') {
            add_rows_to_table('client', sheet);
        }
/*
        if (sheet['name'] == 'Needs Assessment&Referrals') {
            add_rows_to_table('`Needs Assessment`', sheet);
        }
        */
       // etc..
    }
}

console.log('Date of Birth (YYYY-MM-DD)'.includes("Date"));
process_template ('/test.xlsx');