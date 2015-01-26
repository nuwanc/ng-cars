'use strict';

angular.module('ngCarsApp')
  .controller('CarDetailCtrl', function ($scope, $routeParams, $http) {
  		$http.get('cars/' + $routeParams.carId + '.json').success(function(data) {
    		$scope.car = data;
    		$scope.mainImageUrl = data.images[0];
  		});

  		$scope.setImage = function(imageUrl) {
    		$scope.mainImageUrl = imageUrl;
  		};
  });