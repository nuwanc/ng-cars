'use strict';

describe('Controller: CarListCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCarsApp'));

  var CarListCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.when('GET','cars/cars.json').respond([{},{},{}]);
    CarListCtrl = $controller('CarListCtrl', {
      $scope: scope,
      $http: $http
    });
  }));

  it('should attach a list of data to the scope', function () {
    httpBackend.flush();
    expect(scope.cars.length).toBe(3);
  });
});