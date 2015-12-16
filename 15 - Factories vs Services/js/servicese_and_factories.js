myGrocery.factory('ItemsFactory', function(){
	return $firebaseObject.$extene ({
		getItemName: function(){
			return this.name + ' - ' + this.quantity;
			}
		});
});

myGrocery.factory('Item', function(ItemsFactorym){
	var fireRef = new Firebase('https://grocery-store1.firebaseio.com/items')
	return function(itemID){
		return new ItemsFactory(fireRef.child(itemID));
	}
});