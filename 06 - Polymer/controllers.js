angular.module('polymer.controllers', [])

.controller('HomeController', ['$scope', function($scope) {
	$scope.title = 'Hello World';
	$scope.promotions = ¨[
		 {name: 'coca cola', price: '$2'},
		 {name: 'pepsi', price: '$3'},
		 {name: 'redbull', price: '$4'}

	];
	$scope.add = function() {
		var newpromotion = angular.copy($scope.newpromotion);
		$scope.promotions.push(newpromotion);
	};

}])

.controller('ProductsController', [function() {
	// body...
}]);

.controller('VideosController', [function() {
	// body...
}]);



