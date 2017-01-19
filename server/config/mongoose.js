var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    modelsPath = path.join(__dirname, './../models'),
    dbURI = 'mongodb://localhost/heyteamup';

mongoose.connect(dbURI);
mongoose.Promise = global.Promise;

mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
});

mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/* When the connection is disconnected */
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
/* If the Node process ends, close the Mongoose connection */
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

fs.readdirSync(modelsPath).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(path.join(modelsPath, file));
  }
});
