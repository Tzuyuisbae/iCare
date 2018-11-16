var mysql = require('mysql');
var xlsx = require('node-xlsx');
var d = new Date();
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function insert (table, row, callback) {
    var sql = "INSERT INTO " + table + " values (" + row.join(", ") + ");";
    //console.log(sql);
    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });

    con.connect((err) => {
        if (err) {
            throw err;
        }
        console.log("Connected!");
        con.query(sql, function (err, result) {
            if (err) {
                callback(err);
            } else {
                console.log('shit inserted');
            }
        });
        con.end();
    });

    return 'success';
}

function parse_sheet(sheet) {
    var rows = [];
    // ROW data starts at row 3 of excel file
    for(var j = 0; j < sheet['data'].length; j++) {
        //add the row to the rows array
        var row = sheet['data'][j];
        // if row is not empty
        if (!(row === undefined || row.length == 0)) {
            rows.push(row);
        }
    }
    return rows;
}

function add_sheet_to_table(table, sheet) {

    var rows = [];
    var headers = sheet['data'][2];
    var status1 = [];

    // ROW data starts at row 3 of excel file
    for(var j = 3; j < sheet['data'].length; j++) {
        //add the row to the rows array
        var row = sheet['data'][j];
        // if row is not empty
        if (!(row === undefined || row.length == 0)) {
            rows.push(row);
        }
    }
    // prepare row values for SQL processing
    rows = fix_row_types(headers, rows);

    var con = mysql.createConnection({
        host: "den1.mysql6.gear.host",
        user: "icare",
        password: "team9!",
        database: "icare"
    });


    // loop each row, try and catch each row for errors
    for (var i = 0; i < rows.length; i++) {
        // insert(table, rows[i], (err) => {
        //     if (err) {
        //         status1.push(err.message);
        //     }
        //     if (i == rows.length) done();
        // });

        var sql = "INSERT INTO " + table + " values ('APR', 2018, " + rows[i].join(", ") + ");";

        con.query(sql, function (err, result) {
            if (err) {
                console.log(err.message + ' ' + table);
            } else {
                console.log(sql);
            }
        });
    }
    con.end();
    function done() {
        //console.log(status1);
    }
}

function fix_row_types(header, rows) {
    
    // for each column
    for (var i =0; i<header.length; i++) {
        //console.log(header[i]);
        if (header[i].includes("Date")) {
            for (var j= 0; j < rows.length; j++) {
                rows[j][i] = "date(\"" + rows[j][i] + "\")";
                //console.log(rows[j][i]);
            }
        } else if (isNaN(rows[0][i]) || header[i].includes("Speaking") || header[i].includes("Reading") || header[i].includes("Listening")) {
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
    var obj = xlsx.parse(filepath);
    var rows = [];
    
    for(var i = 0; i < obj.length; i++)
    {
        var sheet = obj[i];

        if (sheet['name'] == 'Client Profile') {
            add_sheet_to_table('client', sheet);
        } if (sheet['name'] == 'Needs Assessment&Referrals') {
            add_sheet_to_table('`needs assessment`', sheet);
        } if (sheet['name'] == 'Community Connections') {
            add_sheet_to_table('community', sheet);
        } if (sheet['name'] == 'Info&Orien') {
            add_sheet_to_table('infoorient', sheet);
        } if (sheet['name'] == 'Employment') {
            add_sheet_to_table('employment', sheet);
        } if (sheet['name'] == 'LT Client Enrol') {
            add_sheet_to_table('`LT Client Enroll`', sheet);
        } if (sheet['name'] == 'LT Course Setup') {
            add_sheet_to_table('`LT Course Setup`', sheet);
        } if (sheet['name'] == 'LT Client Exit') {
            add_sheet_to_table('`LT Client Exit`', sheet);
        }
    }
}

module.exports.parse_sheet = parse_sheet;
module.exports.fix_row_types = fix_row_types;  
module.exports.add_sheet_to_table = add_sheet_to_table;  
module.exports.process_template = process_template;
//module.exports.insert = insert;

// console.log('Date of Birth (YYYY-MM-DD)'.includes("Date"));
process_template (__dirname + '/test/test.xlsx');
