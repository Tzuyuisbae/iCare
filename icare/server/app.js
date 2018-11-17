const queries = require('./queries.js');
const insert = require('./insertDatabase.js');
const download = require('./downloadQuery.js');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// default options
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`${__dirname}/public/${req.body.filename}`, function(err) {
    if (err)
      return res.status(500).send(err);
    
    insert.process_template(`${__dirname}/public/${req.body.filename}`)
    res.send('File uploaded!');
  });
});

app.get('/query', (req, res) => {
  queries.clients(function(err, result) {
      if (!err) {
        //res.json([{ express: 'Hello From Express' } ]);
        res.json(result);
      } else {
          console.log('Error while performing Query.');
      }
  });
});

app.post('/download', (req, res) => {
  console.log(req.body.query);
  download.getCSV(req.body.query, function (filepath) {
    res.download(filepath);
  });
  // var file = __dirname + '/public/kanye.jpg';
  // res.download(file);
});

app.post('/authenticate', (req, res) => {
  queries.authenticate(req.body.email, req.body.password, function(err, result) {
      if (!err) {
        //res.json([{ express: 'Hello From Express' } ]);
        if (result.length == 0) {
          res.json({ authenticated: false });
        } else {
          res.json({ authenticated: true });
        }
      } else {
          console.log('Error while performing Query.');
      }
  });
});

app.listen(8000);