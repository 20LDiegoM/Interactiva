angular.module('angularMaps', ['ngRoute', 'angularMaps.controllers'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: "HomeController"

      })
      .when('/products', {
        templateUrl: 'views/map.html',
        controller: "MapsController"
      })
      .otherwise({
        redictTo: '/'
      })

  }]);
