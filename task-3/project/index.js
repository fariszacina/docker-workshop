var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var pg = require('pg');

// connect to postgres db
pg.connect('postgres://postgres:postgres@' + process.env.TASK3_DATABASE_1_PORT_5432_TCP_ADDR || '127.0.0.1' + '/postgres', function(err, client, done) {
    // create the db and ignore any errors, for example if it already exists.
    client.query('CREATE DATABASE db', function(err) {
      client.end(); // close the connection
    });
});

app.get('/health', function (req, res) {
  var sequelize = new Sequelize('db', 'postgres', 'postgres', {
    host: process.env.TASK3_DATABASE_1_PORT_5432_TCP_ADDR || '127.0.0.1',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  var User = sequelize.define('User', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });

  sequelize.sync().then(function() {
    return User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20)
    });
  }).then(function(jane) {
    res.send(jane.get({
      plain: true
    }));
  });
});

app.listen(8087, function () {
  console.log('app listening on port 8087!');
})
