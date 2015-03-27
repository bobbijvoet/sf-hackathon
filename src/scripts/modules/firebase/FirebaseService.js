'use strict';

class FirebaseService
{
    constructor($firebaseArray)
    {
        let baseUrl = 'https://winningfrontmen.firebaseio.com/';
        this.playersService = $firebaseArray(new Firebase(baseUrl + 'users'));
    }

    getPlayers()
    {
        return this.playersService.$loaded();
    }
}

FirebaseService.$inject = ['$firebaseObject', '$firebaseArray'];

export default FirebaseService;
