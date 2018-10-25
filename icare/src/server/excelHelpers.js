var xlsx = require('node-xlsx');
var fs = require('fs');


function get_rows(filepath, sheet_num) {

    var obj = xlsx.parse(__dirname + filepath); // parses a file
    var rows = [];
    var writeStr = "";

    // ADD BOUNDARY CASES

    //looping through all sheets
    for(var i = sheet_num; i < sheet_num+1; i++)
    {
        var sheet = obj[i];

        // HEADER STARTS AT 2 AND DATA COMES AFTER
        //loop through all rows in the sheet
        for(var j = 2; j < sheet['data'].length; j++) {
            //add the row to the rows array
            rows.push(sheet['data'][j]);
        }
    }
    // ROWS[I] IS A ROW WITH ARRAY
    return rows;
}

function get_header_vals(rows) {

    // ADD BOUNDARY CASES

    var header = '';
    // header is row[0] and data is row[1] for iCare files
    for (var i =0; i<rows[0].length; i++) {

        if (!isNaN(rows[1][i])) {
            header = header + '\" `' + rows[0][i] + '` INT,' + '\" + \n'; 
        } else if (rows[0][i].includes("Date")) {
            header = header + '\" `' + rows[0][i] + '` DATE,' + '\" + \n';
        } else {
            header = header + '\" `' + rows[0][i] + '` VARCHAR(255),' + '\" + \n';
        }
    }
    return header;
}


var rows = get_rows('/test.xlsx', 3);
var header = get_header_vals(rows);

var hello = "why there ";

console.log(header);

