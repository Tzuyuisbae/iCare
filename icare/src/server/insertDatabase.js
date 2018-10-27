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
        if (err){
            console.log(err.message);
        }
        console.log("Connected!");
        con.query(sql, function (err, result) {
        if (err){
            console.log(err.message);
        }
          console.log("Database created");
        });
    });

}

function add_sheet_to_table(table, sheet) {

    var rows = [];
    var headers = sheet['data'][2];

    // ROW data starts at row 3 of excel file
    for(var j = 3; j < sheet['data'].length; j++) {
        //add the row to the rows array
        var row = sheet['data'][j];
        // if row is not empty
        if (!(row === undefined || row.length == 0)) {
            console.log(row);
            rows.push(row);
        }
    }
    // prepare row values for SQL processing
    rows = fix_row_types(headers, rows);

    // loop each row, try and catch each row for errors
    for (var i = 0; i < rows.length; i++) {
        try {
            insert(table, rows[i]);
        } catch (err) {
            console.log(err.message);
        }
    }
}

function fix_row_types(header, rows) {
    
    // for each column
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
    // remove empty cells
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
            add_sheet_to_table('client', sheet);
        }
        if (sheet['name'] == 'Needs Assessment&Referrals') {
            add_sheet_to_table('`needs assessment`', sheet);
        }
        if (sheet['name'] == 'Community Connections') {
            add_sheet_to_table('community', sheet);
        }
        if (sheet['name'] == 'Info&Orien') {
            add_sheet_to_table('infoorient', sheet);
        }
        if (sheet['name'] == 'Employment') {
            add_sheet_to_table('employment', sheet);
        }
    }
}

console.log('Date of Birth (YYYY-MM-DD)'.includes("Date"));
process_template ('/test.xlsx');