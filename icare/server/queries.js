var mysql = require('mysql');

var d = new Date();
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

module.exports = {
    clients: function(callback) {
        // clients added this month
        //var sql = `select * from client where MONTH='${months[d.getMonth()]}' and YEAR=${d.getFullYear()}`;
        var sql = `select * from client`;

        var con = mysql.createConnection({
            host: "den1.mysql6.gear.host",
            user: "icare",
            password: "team9!",
            database: "icare"
        });

        con.connect(function(err) {
            if (err) throw err;
            con.query(sql, function (err, result) {
            callback(null, result);
            });
            con.end();
        });
    }, 
    /**
     * Check whether an email and password is correct
     * @param {*} email 
     * @param {*} password 
     * @param {*} callback 
     */
    authenticate: function(email, password, callback) {
        var sql = "select Name, permissions from accounts where email='" + email + "' and password='" + password + "'"; 
    
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
    },
    
    /**
     * Query the count of number of referrals made in a given month, for some amount of needs
     * @param {Array} needs The needs to get the count of, for the given month and year
     * @param {Array} date The date to query [month, year]
     */
    getMultipleNeedsReferralsCount: function(needs, date) {
        var table = '`needs assessment`';
        var sql = 'select '

        var i = 0;
        for (; i < needs.length-1; i++) {
            var temp = `(SELECT Count(*) FROM ${table} WHERE \`${needs[i]}\` = 'Yes' and MONTH='${date[0]}' and YEAR=${date[1]}) as '${needs[i]}', `;
            sql = sql + temp;
        }
        sql = sql + `(SELECT Count(*) FROM ${table} WHERE \`${needs[i]}\` = 'Yes' and MONTH='${date[0]}' and YEAR=${date[1]}) as '${needs[i]}';`
        console.log(sql)

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
            console.log(result);
            });
            con.end();
        });
    },

    /**
     * Get detailed results for the needs wanted, grouping results by DOB, postal code etc.
     * @param {Array} needs The needs we want to recieve detail on
     * @param {Array} date Array representing month and year wanted [month, year]
     * @param {Array} groupBy Array of fields to group the query by (e.g age, DOB, postal code)
     */
    getReferralsDetails: function(needs, date, groupBy) {
        var table = '`needs assessment`';
        var sql = 'select * from'

        var i = 0;
        for (; i < needs.length-1; i++) {
            var temp = `(SELECT Count(*) as '${needs[i]}', ${groupBy.join(',')} FROM ${table} WHERE \`${needs[i]}\` = 'Yes' and MONTH='${date[0]}' and YEAR=${date[1]} group by ${groupBy.join(',')}) as T${i} natural join`;
            sql = sql + temp;
        }
        sql = sql + `(SELECT Count(*) as '${needs[i]}', ${groupBy.join(',')} FROM ${table} WHERE \`${needs[i]}\` = 'Yes' and MONTH='${date[0]}' and YEAR=${date[1]} group by ${groupBy.join(',')}) as T${i};`
        console.log(sql)

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
            console.log(result);
            });
            con.end();
        });
    }, 

    /**
     * Count the number of services given, given the services, and group by given fields
     * @param {String} service Which service you want to recieve info on (e.g community, employment)
     * @param {Array} groupBy Array of fields to group the query by (e.g age, DOB, postal code)
     * @param {Array} date Array representing month and year wanted [month, year]
     */
    getServicesRecieved: function(service, groupBy, date) {
        
        var sql = `select count(*) as 'Count', ${groupBy.join(",")} from ${service} where MONTH='${date[0]}' and YEAR=${date[1]} group by ${groupBy.join(',')}`;
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
            console.log(result);
            });
            con.end();
        });
    },

    /**
     * Do a month-by-month comparison of the counts of services given, for the given year
     * @param {String} service Which service you want to recieve info on (e.g community, employment)
     * @param {String} Year Year wanted
     */
    getServicedRecievedMonthlyComparison: function(service, year) {

        var sql = `select MONTH, count(*) as 'Count' from ${service} where YEAR=${year} group by MONTH`;
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
            console.log(result);
            });
            con.end();
        });
    }
}

//module.exports.getMultipleNeedsReferralsCount([`ITF: Level of community involvement Referrals`, `ITF: Level of community involvement`], [`APR`, '2018']);
//module.exports.getReferralsDetails([`ITF: Level of community involvement Referrals`, `ITF: Level of community involvement`], [`APR`, '2018'], ['`Postal Code where the service was received`', '`Date of Birth (YYYY-MM-DD)`' ] );
//module.exports.getServicesRecieved('community',  ['`Postal Code where the service was received`'], [`APR`, '2018'],);
//module.exports.getServicedRecievedMonthlyComparison('infoorient', '2018');
