var mysql = require('mysql');

module.exports = {
    clients: function(callback) {
        var sql = "select * from client";

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

    getNeedsReferralsCount: function(needs, date) {
        var table = '`needs assessment`';
        var sql = 'select '

        var i = 0;
        for (; i < needs.length-1; i++) {
            var temp = `(SELECT Count(*) FROM ${table} WHERE \`${needs[i]}\` = 'Yes'  and \`Start Date of Assessment (YYYY-MM-DD)\` = '2018-12-12') as '${needs[i]}', `;
            sql = sql + temp;
        }
        sql = sql + `(SELECT Count(*) FROM ${table} WHERE \`${needs[i]}\` = 'Yes'  and \`Start Date of Assessment (YYYY-MM-DD)\` = '2018-12-12') as '${needs[i]}';`
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
    getNeedsGroupBy: function(needs, date, groupBy) {
        var table = '`needs assessment`';
        var sql = 'select * from'

        var i = 0;
        for (; i < needs.length-1; i++) {
            var temp = `(SELECT Count(*) as '${needs[i]}', ${groupBy.join(',')} FROM ${table} WHERE \`${needs[i]}\` = 'Yes'  and \`Start Date of Assessment (YYYY-MM-DD)\` = '2018-12-12' group by ${groupBy.join(',')}) as T${i} natural join`;
            sql = sql + temp;
        }
        sql = sql + `(SELECT Count(*) as '${needs[i]}' FROM ${table} WHERE \`${needs[i]}\` = 'Yes'  and \`Start Date of Assessment (YYYY-MM-DD)\` = '2018-12-12' group by ${groupBy.join(',')}) as T${i};`
        console.log(sql)

        // var con = mysql.createConnection({
        //     host: "den1.mysql6.gear.host",
        //     user: "icare",
        //     password: "team9!",
        //     database: "icare"
        // });

        // con.connect(function(err) {
        //     if (err) throw err;
        //     con.query(sql, function (err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     });
        //     con.end();
        // });
    }
}

module.exports.getNeedsGroupBy([`ITF: Level of community involvement Referrals`, `ITF: Level of community involvement`], ' ok', ['`Start Date of Assessment (YYYY-MM-DD)`', '`Date of Birth (YYYY-MM-DD)`']);
