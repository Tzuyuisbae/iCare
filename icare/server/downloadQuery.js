const fs = require('fs');

function getCSVString(data, callback) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(data[0])
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')

    return csv;
}


function getCSV(data, callback) {
    var csv = getCSVString(data);
    var filepath = __dirname + '/download/' + 'test.csv';
    fs.writeFile(filepath, csv, function(err) {
        if(err) {
            return console.log(err);
        } else {
            callback(filepath)
        }
    }); 
    
}

module.exports.getCSVString = getCSVString;
module.exports.getCSV = getCSV;