// https://github.com/Stocard/node-ssh-forward
const { SSHConnection } = require('node-ssh-forward')
var express = require('express');
var app = express();    
const request = require('request'); // Handle API Requests
const path = require('path');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded

//$ ssh -L 9000:imgur.com:80 example.com
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'praneetaweb',
  host: 'localhost',
  database: 'praneeta',
  password: 'prawny1997',
  port: 4445,
})

app.get('/fetchCustomers', (req, res) => {
  pool.query('SELECT * from customers', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

app.get('/fetchAddress', (req, res) => {

  pool.query('SELECT * from address', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

// VIEW 1
// select * from ImportedParts;
app.get('/fetchView1', (req, res) => {
  pool.query('SELECT * from ImportedParts', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

// VIEW 2
app.get('/fetchView2', (req, res) => {
  pool.query('SELECT * from partStats', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

// VIEW 3
app.get('/fetchView3', (req, res) => {
  pool.query('SELECT * from Contact_purchases', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

// VIEW 4
app.get('/fetchView4', (req, res) => {
  pool.query('SELECT * from revenuePerDate', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})
// VIEW 5
app.get('/fetchView5', (req, res) => {
  pool.query('SELECT * from saleStats', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

// VIEW 6
app.get('/fetchView6', (req, res) => {
  pool.query('SELECT * from valuedCustomers', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

app.get('/fetchParts', (req, res) => {

  pool.query('SELECT part.part_id , part.part_name, part.price, part.in_stock, part.imported_country, supplier.sup_name \
  FROM supplier \
 RIGHT OUTER JOIN supplied_by \
  ON supplier.sup_id = supplied_by.sup_id \
LEFT OUTER JOIN part \
  ON supplied_by.part_id = part.part_id;', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})

app.get('/fetchSuplier', (req, res) => {
  pool.query('SELECT * from supplier', (error, response) => {
    if (error) {
      return res.send(error);
    }
    res.send(JSON.parse(JSON.stringify(response)));
  })
})


// Express instance listens to the given port
const port = process.env.PORT || 4501;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.listen(port, function () {
  console.log("Started on PORT ", port);
})


