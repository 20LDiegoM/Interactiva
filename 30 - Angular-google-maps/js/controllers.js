var submodule = angular.module('angularMaps.controllers', []);

submodule.controller('HomeController', ['$scope', function($scope) {
  $scope.title = 'Hello World';
  $scope.promotions = [{
    name: 'Coca Cola',
    price: '$2'
  }, {
    name: 'Pepsi',
    price: '$3'
  }, {
    name: 'Red Bull',
    price: '$4'
  }];

  $scope.add = function() {
    var newPromotion = angular.copy($scope.newPromotion);
    $scope.promotions.push(newPromotion);
  };

}])

submodule.controller('MapsController', [function() {

}]);
