var express = require('express')
var bodyparser = require('body-parser')
var mongoose =require('mongoose')
var games = require('./routes/game')

var app = express()

var port = 5000

app.use(bodyparser.json())

app.use(express.static('server/public'));

var databaseURL = 'mongodb://localhost:27017/game_chest'; 
mongoose.connect(databaseURL)

mongoose.connect(databaseURL)

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to : ', databaseURL)
})

mongoose.connection.on('error', function(error){
    console.log('mongoose connection error : ', error)
})

app.use('/game', games)

app.listen(port, function(){
    console.log('listening on port', port);  
});