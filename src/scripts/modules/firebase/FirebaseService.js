'use strict';

class FirebaseService
{
    constructor($firebaseObject, $firebaseArray)
    {
        let baseUrl = 'https://winningfrontmen.firebaseio.com/';
        this.players = $firebaseArray(new Firebase(baseUrl + 'users'))
    }

    getPlayers()
    {
        return this.players;
    }
}

FirebaseService.$inject = ['$firebaseObject', '$firebaseArray'];

export default FirebaseService;
