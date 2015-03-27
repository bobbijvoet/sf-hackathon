'use strict';

class LeaderBoardCtrl
{

    constructor(FirebaseService)
    {
        this.FirebaseService = FirebaseService;

        this.init();
    }

    init() {
        var self = this;
        this.FirebaseService.getPlayers().then(function(data) {
            self.players = data;
        });
    }

}

LeaderBoardCtrl.$inject = ['FirebaseService'];

export default LeaderBoardCtrl;