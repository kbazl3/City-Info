angular.module('app')
    .controller("mainCtrl", function($scope, mainSvc) {

        let cityData = [];

        mainSvc.getCityData()
            .then(function(response) {
                cityData = response;
            });



        $scope.findCity = function() {

            $scope.foundCities =
                cityData.filter(function(place) {
                    console.log($scope.userInput);
                    if (place.city.includes($scope.userInput)) {
                        return place;
                    }
                })
                .map(function(userInput) {
                    let obj = {
                        city: userInput.city,
                        state: userInput.state,
                        population: userInput.population
                    };
                    return obj;
                });


        };

        //create filter


    });
