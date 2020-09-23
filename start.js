var express = require('express');
var app = express();

const config = require('./config.json');
const { Console } = require('console');
const port = config.webserver.port;
const directory = config.webserver.directory;

console.log('NodeHostMU from mhjwass')

app.use(require('morgan')('dev'));
app.use(express.static(__dirname + directory));

app.listen(process.env.PORT || port);

console.log("NodeHost Webserver has been started on port " + port)