(function() {
    function MainCtrl($scope, $http) {
      // Initialize global variables
      var apiKey = '79c4eb4b276398cb69787312bf3bbd08';
      var totalTemp = 0;

      $scope.send = function() {
        // set variables to access api
        var city = $scope.city;
        var openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=imperial&cnt=' + $scope.forecast + '&appid=' +apiKey;

        $http.get(openWeatherUrl)
        // function to calculate, then retrieve average temp based on forecast option
          .then(function (response) {
            for (var i = 0; i < $scope.forecast; i++) {
              totalTemp += response.data.list[i].temp.day;
            }
            $scope.avgTemp = totalTemp / $scope.forecast;
          }, function(response) {
            $scope.currentWeather = "Something went wrong";
          });
      };

    };

    angular
        .module('konverse')
        .controller('MainCtrl', ['$scope', '$http', MainCtrl]);
})();
