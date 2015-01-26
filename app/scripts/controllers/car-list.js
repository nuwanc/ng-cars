'use strict';


angular.module('ngCarsApp')
  .controller('CarListCtrl', function ($scope,$http) {
      $http.get('cars/cars.json').success(function(data) {
    	$scope.cars = data;
  	  });

  	  $scope.orderProp = 'year';
  });