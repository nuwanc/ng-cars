'use strict';

describe('Controller: CarDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCarsApp'));

  var CarDetailCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.when('GET','cars/yaris.json').respond({'model' : 'Yaris','images': [
        'images/cars/yaris.png'
    ]});
    CarDetailCtrl = $controller('CarDetailCtrl', {
      $scope: scope,
      $http: $http,
      $routeParams : {carId:'yaris'}
    });
  }));

  it('should attach a list of data to the scope', function () {
    httpBackend.flush();
    expect(scope.car.model).toBe('Yaris');
  });
});