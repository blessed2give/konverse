(function() {
    function MainCtrl($scope, $http) {
      // Initialize global variables
      var apiKey = '79c4eb4b276398cb69787312bf3bbd08';

      $scope.send = function() {
        // set variables to access api
        var city = 'Chicago';
        var openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=imperial&cnt=16&appid=' +apiKey;

        $http.get(openWeatherUrl)
          .then(function (response) {
          }, function(response) {
            $scope.currentWeather = "Something went wrong";
          });
      };

    };

    angular
        .module('konverse')
        .controller('MainCtrl', ['$scope', '$http', MainCtrl]);
})();
