import MapCtrl from './modules/map/MapCtrl';
import LeaderBoardCtrl from './modules/leaderboard/LeaderBoardCtrl';
import AccountCtrl from './modules/account/AccountCtrl';
import FirebaseService from './modules/firebase/FirebaseService';
import MarkerCtrl from './modules/marker/MarkerCtrl';

angular.module('starter', ['ionic'])
    .run(($ionicPlatform) => {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
  })
  .service('FirebaseService', FirebaseService)
  .controller('MapCtrl', MapCtrl)
  .controller('LeaderBoardCtrl', LeaderBoardCtrl)
  .controller('AccountCtrl', AccountCtrl)
  .controller('MarkerCtrl', MarkerCtrl)


    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.

        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

              .state('tab.map', {
                url: '/map',
                views: {
                  'tab-map': {
                    templateUrl: 'templates/tab-map.html',
                    controller: 'MapCtrl as vm'
                  }
                }
              })

              .state('tab.leaderboard', {
                url: '/leaderboard',
                views: {
                  'tab-leaderboard': {
                    templateUrl: 'templates/tab-leaderboard.html',
                    controller: 'LeaderBoardCtrl'
                  }
                }
              })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
      .state('tab.marker', {
        url: '/marker',
        views: {
          'tab-marker': {
            templateUrl: 'templates/marker.html',
            controller: 'MarkerCtrl'
          }
        }
      });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/map');

    });


//angular.module('starter').service('ExampleService', ExampleService);