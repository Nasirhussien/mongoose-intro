var express = require('express')
var bodyparser = require('body-parser')
var mongooseConnection =require('./modules/mongoose-connection')
var games = require('./routes/game')
var app = express()

var port = 5000

app.use(bodyparser.json())

app.use(express.static('server/public'));

mongooseConnection.connect() //module to spin up mongoose

app.use('/game', games)

app.listen(port, function(){
    console.log('listening on port', port);  
});