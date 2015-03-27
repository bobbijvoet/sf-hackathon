'use strict';

class LeaderBoardCtrl
{

    constructor(FirebaseService)
    {
        this.FirebaseService = FirebaseService;
    }

    getPlayers() {

        return this.FirebaseService.getPlayers();
    }

}

LeaderBoardCtrl.$inject = ['FirebaseService'];

export default LeaderBoardCtrl;