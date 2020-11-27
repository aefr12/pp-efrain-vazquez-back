var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var portNumber = 3000;

http.createServer(app).listen(portNumber, function(){
	console.log('Server listening at port '+ portNumber);
	routes.initialize(app);
});