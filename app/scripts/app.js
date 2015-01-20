'use strict';

/**
 * @ngdoc overview
 * @name ngCarsApp
 * @description
 * # ngCarsApp
 *
 * Main module of the application.
 */
angular
  .module('ngCarsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      $routeProvider.
      when('/cars', {templateUrl: 'views/car-list.html',   controller: CarListCtrl}).
      when('/cars/:carId', {templateUrl: 'views/car-detail.html', controller: CarDetailCtrl}).
      otherwise({redirectTo: '/cars'});
  });
