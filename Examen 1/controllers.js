var controllers = angular.module('examen.controllers', [])

controllers.controller('ImageController', function($scope){
	
});

controllers.controller('VideoController', function($scope){

});

controllers.controller('chatController', function($scope, $message){
	
	$scope.messages = $message.all;

	$scope.send = function(message){
		$message.create(message);
		console.log('asds');
	};
});