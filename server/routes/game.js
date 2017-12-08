var express = require('express');
var router = express.Router();
var Games = require('../models/game.schema');
router.get('/', function(req,res){
  //get request for all games
  Games.find({}, function(errorMakingDatabaseQuery, data){
      if(errorMakingDatabaseQuery){
          console.log('error with game find', errorMakingDatabaseQuery)
          res.sendStatus(500)
      } else {
          res.send(data);
      }

  })

})

router.post('/', function(req,res){
    //post request for all games
    var addGame = new Games(req.body);
    addGame.save( function(errorMakingDatabaseQuery, data){
        if(errorMakingDatabaseQuery){
            console.log('error with game post', errorMakingDatabaseQuery)
            res.sendStatus(500)
        } else{ res.sendStatus(201)



        }
   
  
  })

})

module.exports = router