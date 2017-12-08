var app = angular.module('GameApp',[])

app.controller('GameController',['$http', function ($http){
    console.log('Game Controller has been loaded, why isnt welcome showing up');

    var self = this;

    self.welcome = "welcome"
    self.message = "message"
    self.gameArray = []
    self.getGames = function () {
        $http({
            method: 'GET',
            url: '/game'
        }).then(function(response) {
            console.log('response', response.data);
            self.gameArray = response.data;
        });
    };
self.getGames()
    
}]);