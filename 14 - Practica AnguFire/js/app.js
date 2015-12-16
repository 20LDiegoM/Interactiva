var myGeocery = angular.module('myGeocery', ['firebase']);
myGeocery.controller('groceryListController',
  function groceryListController($scope, $firebaseArray, item) {
    var fireRef = new Firebase('https://grocery-store1.firebaseio.com/items');

    $scope.items = $firebaseArray(fireRef);
    $scope.newItem = {
      name: '',
      quantity: 0
    };

    $scope.getItemInfo = function (itemID){

    };

    /*add Item*/
    $scope.addItem = function() {
      $scope.items.$add($scope.newItem);
      $scope.newItem = {
        $name: '',
        quantity: 0
      }
    };

    /*Remove Iten*/
    $scope.removeItem = function(toRemove) {
      $scope.items.$remove(toRemove);
    };

    /*Update Item*/
    $scope.updateItem = function(toUpdate, newName, newQuantity) {
      toUpdate.name = newName;
      toUpdate.quantity = newQuantity;
      $scope.items.$save(toUpdate);
    };

  });
