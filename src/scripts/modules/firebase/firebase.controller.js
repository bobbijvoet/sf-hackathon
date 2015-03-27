(function() {
    'use strict';

    angular.module('starter.firebase').controller('FirebaseController', function($scope, FirebaseService) {
        $scope.users = FirebaseService.users;
    });
})();