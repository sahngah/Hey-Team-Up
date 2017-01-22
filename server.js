const express = require('express'),
      app = express(),
      bp = require('body-parser'),
      path = require('path'),
      session = require('express-session'),
      port = process.env.PORT || 1111;

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

// Dev process for creating sample db. Delete before deployment
require('./server/config/sampleDb.js');

app.listen(port, function(){
  console.log(`running on port ${port}!`);
})
