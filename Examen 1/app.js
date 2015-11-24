var examen = angular.module('examen', ['ngRoute', 'examen.controllers', 'examen.factories'])

examen.config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/image', {
		templateUrl: 'views/image.html'
	})
	.when('/video', {
		templateUrl: 'views/video.html'
	})
	.when('/chat', {
		templateUrl: 'views/chat.html'
	})
	.otherwise({
		redirectorio: '/'
	});
}]);