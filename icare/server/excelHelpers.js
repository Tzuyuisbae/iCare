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

        h = rows[0][i];
        if (rows[0][i].includes("Speaking") || rows[0][i].includes("Reading") || rows[0][i].includes("Listening")) {
            header = header + '\" `' + rows[0][i] + "` ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'N/A')," + '\" + \n';
        } else if (!isNaN(rows[1][i]) || rows[1][i] === "N/A") {
            header = header + '\" `' + rows[0][i] + '` INT,' + '\" + \n'; 
        } else if (rows[0][i].includes("Date")) {
            header = header + '\" `' + rows[0][i] + '` DATE,' + '\" + \n';
        } else if (rows[1][i] === "Yes" || rows[1][i] === "No") {
            header = header + '\" `' + rows[0][i] + '` ENUM(\\"Yes\\", \\"No\\", \\"\\"),' + '\" + \n';
        } else {
            header = header + '\" `' + rows[0][i] + '` VARCHAR(60),' + '\" + \n';
        }
    }
    return header;
}


var rows = get_rows('/test.xlsx', 9);
var header = get_header_vals(rows);


console.log(header);

