const queries = require('./queries.js');
const insert = require('./insertDatabase.js');
const download = require('./downloadQuery.js');
const savedQueries = require('./saveQuery.js');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


const groupByOptions = [
  `Postal Code where the service was received`,
  `Date of Birth (YYYY-MM-DD)`,
  `Official Language of Preference`,
  `Care for Newcomer Children`,
  `Translation?`];

const customQueries = {
  'needs': {
    'options': 
    [ `IKO: Life in Canada`,
      `IKO: Life in Canada Referrals`,
      `IKO: Community and Government Services`,
      `IKO: Community and Government Services Referrals`,
      `IKO: Working in Canada`,
      `IKO: Working in Canada Referrals`,
      `IKO: Education in Canada`,
      `IKO: Education in Canada Referrals`,
      `ITF: Social networks`,
      `ITF: Social networks Referrals`,
      `ITF: Professional networks`,
      `ITF: Professional networks Referrals`,
      `ITF: Access to local community services`,
      `ITF: Access to local community services Referrals`,
      `ITF: Level of community involvement`,
      `ITF: Level of community involvement Referrals`,
      `Improve Language Skills`,
      `Improve Language Skills Referrals`,
      `Improve Other Skills`,
      `Improve Other Skills Referrals`,
      `Find employment`,
      `Find employment Referrals`],
    'groupBy' : groupByOptions
  },

  'services': {
    'services': 
    [ 'community',
      'employment',
      'infoorient',
      'lt client enroll',
      'lt client exit'],
    'groupBy': groupByOptions
  },
  'monthlyServices': {
    'services': 
    [ 'community',
      'employment',
      'infoorient',
      'lt client enroll',
      'lt client exit'],
    'groupBy': []
  }
};

// default options
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/upload', function(req, res) {

  const date = new Date();
  const d = date.valueOf();

  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const filepath = `${__dirname}/public/` + d + `_${req.body.filename}`;

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(filepath, function(err) {
    if (err)
      return res.status(500).send(err);
    
    insert.process_template(filepath)
    res.json({msg: 'File uploaded!'});
  });
});

app.get('/getCustomQueryOptions', (req, res) => {
  console.log(customQueries[req.query.queryID]);
  res.send(customQueries[req.query.queryID]);
});

app.get('/query', (req, res) => {
  console.log(req.query.sql);
  queries.query(req.query.sql, function(err, result) {
    if (!err) {
      if (result.length > 0) {
        res.send(result);
      } else {
        console.log('Error while performing query');
      }
    }
  });
});

app.post('/customQueryServices', (req, res) => {
  const service = req.body.service;
  const date = req.body.date;
  const groupBy = req.body.groupBySelected;

  queries.getServicesRecieved(service, date, groupBy, function (err, result) {
    if (!err) {
      console.log(result);
      res.send(result);
    }
  });
});

app.post('/customQueryMonthly', (req, res) => {
  const service = req.body.service;
  const year = req.body.year;

  queries.getServicedRecievedMonthlyComparison(service, year, function (err, result) {
    if (!err) {
      console.log(result);
      res.send(result);
    }
  });
});

app.post('/customQueryNeeds', (req, res) => {
  const options = req.body.options;
  const date = req.body.date;
  const groupBy = req.body.groupBySelected;
  console.log(options);
  console.log(date);

  if (groupBy.length === 0) {
    queries.getMultipleNeedsReferralsCount(options, date, function (err, result) {
      if (!err) {
        console.log(result);
        res.send(result);
      }
    });
  } else {
    queries.getReferralsDetails(options, date, groupBy, function (err, result) {
      if (!err) {
        console.log(result);
        res.send(result);
      }
    });
  }
});

app.post('/download', (req, res) => {
  download.getCSV(req.body.query, req.body.email, function (filepath) {
    res.download(filepath);
  });
});

app.post('/authenticate', (req, res) => {
  queries.authenticate(req.body.email, req.body.password, function(err, result) {
      if (!err) {
        if (result.length == 0) {
          res.json({ authenticated: false });
        } else {
          res.json({ authenticated: true, permissions: result[0].permissions });
        }
      } else {
          console.log('Error while performing Query.');
      }
  });
});

app.post('/insertAccount', (req, res) => {
  insert.insertAccount(
    req.body.Name,
    req.body.email,
    req.body.pass,
    req.body.organization,
    req.body.permissions,
    function (err, result) {
      if (err) {
        res.json({ error: err.message });
      } else {
        res.json({ error: 'Success!' });
      }
    });
});

app.get('/getSavedPresetQueries', (req, res) => {
  const email = req.query.email;
  savedQueries.getSavedQueries(email, function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      console.log(err.message);
    }
  });
});

app.listen(8000);