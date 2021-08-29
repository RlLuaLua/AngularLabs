var express = require('express'); //import express.js used for routing
var app = express();//app object denotes the Express application, create it by calling the top-level express() function, exported by the express module.

var cors = require('cors');
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//points to dist
app.use(express.static(__dirname + '/../dist/my-app'));
console.log(__dirname);

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});

app.post('/api/auth', require('./router/postLogin.js'));
