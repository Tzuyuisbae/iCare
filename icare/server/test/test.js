const assert = require('assert');
var mysql = require('mysql');
var xlsx = require('node-xlsx');
const insert = require('../insertDatabase');
const initialize = require('../initializeDatabase');

it('should return true', () => {
  assert.equal(true, true);
}); 

it('test fix row types to prepare for sql insertion', () => {
  let header = ['header1', 'header2', 'header 3 Date'];
  let row = [['row 1', 2, '1998-02-02']];
  let expected = [ [ '"row 1"', 2, 'date("1998-02-02")' ] ];
  actual = insert.fix_row_types(header, row);
  assert.deepEqual(expected, actual);
});

it('test fix multiple row types to prepare for sql insertion', () => {
  let header = ['header1', 'header2', 'header 3Date'];
  let row = [['row 1', 2, '1998-02-02'], ['row 2', 6, '1990-03-03']];
  let expected = [ [ '"row 1"', 2, 'date("1998-02-02")' ],[ '"row 2"', 6, 'date("1990-03-03")' ] ];
  let actual = insert.fix_row_types(header, row);
  assert.deepEqual(expected, actual);
});

it('test adding row to database in table organization', () => {
  // inserting into organization table
  row = ["'organizationTest'"];
  table = 'organization';

  insert.insert(table, row);

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
    con.query('select Name from organization where Name=\'organizationTest', function (err, result) {
        if (err){
            console.log(err.message);
        }
        assert.equals('organizationTest', result[0]);
    }); con.end();
  });
});

it('add a row to table (accounts) with foreign key', () => {
  var table = 'accounts';
  var values = ["'Test'", "'test@email.com'", "'pass'", "'organizationTest'", "0", "'{}'"];
  insert.insert(table, values);

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
    con.query('select Name from accounts where email=\'test@email.com\'', function (err, result) {
        assert.equals('Test', result[0]);
        assert(!err);
    }); con.end();
  });

});

it('test insert into an invalid table returns error ', () => {

  row = ['"hello"', '"there"'];
  table = 'invalid';

  insert.insert(table, row, (err) => {
    assert(err);
  });
});

it('test create table', () => {
  table = 'testTable';
  columns = " `Email Address` VARCHAR(33)," + 
  " `Street Number` INT," + 
  " `Street Name` VARCHAR(255)," + 
  " `Street Type` VARCHAR(255)," + 
  " `Street Direction` VARCHAR(255)";

  initialize.create_table(table, columns);

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
    con.query('select * from testTable', function (err, result) {
        console.log(result);
        assert(!err);
    }); con.end();
  });
});


it('test parsing of an icare excel sheet', function() {
  this.timeout(10000);
  var obj = xlsx.parse(__dirname + '/test.xlsx'); // parses a file
  var sheet = obj[6];
  var actual = insert.parse_sheet(sheet);
  assert.deepEqual([ [ 'H1', 'H2', 'H3', 'H4' ],[ 1, 2, 8, 8 ],[ 'H', 'E', 'L', 'O' ] ], actual);

});