// express
var express = require('express');
var app = express();

// public paths
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

// db requirements
var mongoose = require('mongoose');

// using handlebars
app.set('view engine', 'hbs');

// index route (removed)
// app.get("/", function(req, res){
//   res.render('index.hbs')
// });

// listening on port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
