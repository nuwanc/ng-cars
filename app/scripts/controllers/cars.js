'use strict';

/* Controllers */

function CarListCtrl($scope, $http) {
  $http.get('cars/cars.json').success(function(data) {
    $scope.cars = data;
  });

  $scope.orderProp = 'year';
}

//CarListCtrl.$inject = ['$scope', '$http'];


function CarDetailCtrl($scope, $routeParams, $http) {
  $http.get('cars/' + $routeParams.carId + '.json').success(function(data) {
    $scope.car = data;
    $scope.mainImageUrl = data.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };
}

//CarDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];