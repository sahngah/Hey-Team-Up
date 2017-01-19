var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');

app.use(express.static(path.join(__dirname + '/client')))
.use(express.static(path.join(__dirname + '/client/assets')))
.use(express.static(path.join(__dirname + '/bower_components')))
.use(bp.json())
.use(session({
  secret: 'verysecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1111, function(){
  console.log('running on port 1111!');
})
