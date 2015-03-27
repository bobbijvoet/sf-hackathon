'use strict';

class FirebaseService
{
	constructor($firebaseArray)
	{
		let baseUrl = 'https://winningfrontmen.firebaseio.com/';
		this.playersService = $firebaseArray(new Firebase(baseUrl + 'users'));
		this.markersService = $firebaseArray(new Firebase(baseUrl + 'markers'));
	}

	getPlayers()
	{
		return this.playersService.$loaded();
	}

	getMarkers(id)
	{
		if(id) {
			return this.markersService.$getRecord(id);
		}
		return this.markersService.$loaded();
	}
}

FirebaseService.$inject = ['$firebaseObject', '$firebaseArray'];

export default FirebaseService;