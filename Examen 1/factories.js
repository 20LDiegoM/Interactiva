var factories = angular.module('examen.factories', ['firebase']);

factories.factory('$message', function($firebaseArray){
	var ref = new Firebase('https://chat506.firebaseio.com');
	var chatrooms = $firebaseArray(ref.child('rooms'));
	var messages = $firebaseArray(ref.child('rooms/Chat room 2/messages'));

	var create = function(message){
		return messages.$add(message);
	};
	var get = function(messageId){
		return $firebaseObject$firebaseObject(ref.child('rooms/Chat room 2/messages').child(messageId));
	};

	return {
		all: messages,
		create: create,
		get: get
	};
});