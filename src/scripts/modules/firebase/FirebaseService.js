'use strict';

class FirebaseService {
  constructor($firebaseArray) {
    let baseUrl = 'https://winningfrontmen.firebaseio.com/';
    this.playersService = $firebaseArray(new Firebase(baseUrl + 'users'));
    this.markersService = $firebaseArray(new Firebase(baseUrl + 'markers'));
    this.checkinService = $firebaseArray(new Firebase(baseUrl + 'checkin'));

    //console.log(this.playersService);
  }

  getId(marker) {
    return this.markersService.$keyAt(marker);
  }

  getPlayers(id) {
    if (id) {
      return this.playersService.$getRecord(id);
    }
    return this.playersService.$loaded();
  }

  getMarkers(id) {
    if (id) {
      return this.markersService.$getRecord(id);
    }
    return this.markersService.$loaded();
  }

  setMarker(marker) {
    if (marker) {
      return this.markersService.$add(marker);
    }
    return {error: 'no data'};
  }

  checkIn(markerId, base64) {
    var userId, data;

    if (!markerId || !base64) {
      return {error: 'invalid params'};
    }

    userId = UserService.get();
    data = {
      userId: userId,
      markerId: markerId,
      picture: base64
    };

    if (data) {
      return this.checkinService.$add(data);
    }
    return {error: 'no data'};
  }

  static instance($firebaseArray) {
    return new FirebaseService($firebaseArray);
  }
}

FirebaseService.$inject = ['$firebaseArray'];

export default FirebaseService;