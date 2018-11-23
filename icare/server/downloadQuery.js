const fs = require('fs');

function getCSVString(data) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(data[0])
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')

    return csv;
}


function getCSV(data, user, callback) {
    var csv = getCSVString(data);
    var date = new Date();
    var d = date.valueOf();
    var filepath = __dirname + '/download/' + d + '_' + user + '.csv';
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