angular.module("app")
    .service("mainSvc", function($http) {

        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


        this.getCityData = function() {
            return $http({
                    method: "get",
                    url: "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
                })
                .then(function(response) {
                    return response.data;
                });
        };





    });
