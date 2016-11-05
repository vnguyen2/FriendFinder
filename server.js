// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express server setup
var app = express();
var PORT = process.env.PORT || 3000;

//  use express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// api routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// server status
app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});