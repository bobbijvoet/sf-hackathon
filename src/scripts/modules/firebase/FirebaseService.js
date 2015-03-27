'use strict';

class FirebaseService
{
	constructor($firebaseArray)
	{
		let baseUrl = 'https://winningfrontmen.firebaseio.com/';
		this.playersService = $firebaseArray(new Firebase(baseUrl + 'users'));
		this.markersService = $firebaseArray(new Firebase(baseUrl + 'markers'));
		this.checkinService = $firebaseArray(new Firebase(baseUrl + 'checkin'));
	}

	getPlayers()
	{
		if(id) {
			return this.playersService.$getRecord(id);
		}
		return this.playersService.$loaded();
	}

	getMarkers(id)
	{
		if(id) {
			return this.markersService.$getRecord(id);
		}
		return this.markersService.$loaded();
	}

	setMarkers(data)
	{
		if(data) {
			return this.markersService.$add(data);
		}
		return {error: 'no data'};
	}

	checkIn(data)
	{
		if(data) {
			return this.checkinService.$add(data);
		}
		return {error: 'no data'};
	}
}

FirebaseService.$inject = ['$firebaseObject', '$firebaseArray'];

export default FirebaseService;