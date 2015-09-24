var submodule = angular.module('bootstrap.controller', []);

submodule.controller('HomeController', ['#scope', function($scope) {
  $scope.title = 'Hello World';
  $scope.promotions = {
    '001': {
      name: 'Coca Cola',
      price: '$2'
    },
    '002': {
      name: 'Pepsi',
      price: '$3'
    },
    '003': {
      name: 'Red Bull',
      price: '$4'
    }
  };

}])

submodule.controller('ProductsController', [function() {

}]);
