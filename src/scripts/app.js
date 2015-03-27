import UserService from './modules/firebase/UserService';
import MapCtrl from './modules/map/MapCtrl';
import AdminMapCtrl from './modules/map/AdminMapCtrl';
import LeaderBoardCtrl from './modules/leaderboard/LeaderBoardCtrl';
import AccountCtrl from './modules/account/AccountCtrl';
import FirebaseService from './modules/firebase/FirebaseService';
import MapService from './modules/map/MapService';
import MarkerCtrl from './modules/marker/MarkerCtrl';
import AddMarkerCtrl from './modules/map/AddMarkerCtrl';
import LoginCtrl from './modules/login/LoginCtrl';

angular.module('starter', ['ionic', 'firebase'])
  .run(($ionicPlatform) => {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .service('UserService', UserService)
  .service('FirebaseService', FirebaseService)
  .service('MapService', MapService)
  .controller('MapCtrl', MapCtrl)
  .controller('AdminMapCtrl', AdminMapCtrl)
  .controller('LeaderBoardCtrl', LeaderBoardCtrl)
  .controller('AccountCtrl', AccountCtrl)
  .controller('MarkerCtrl', MarkerCtrl)
  .controller('AddMarkerCtrl', AddMarkerCtrl)
  .controller('LoginCtrl', LoginCtrl)


  .config(function ($stateProvider, $urlRouterProvider) {

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
            controllerProvider: function (UserService) {
              if(UserService.role() === 'ADMIN'){
                return  'AdminMapCtrl as vm';
              }else {
                return  'MapCtrl as vm';
              }

            }
          }
        }
      })

      .state('tab.leaderboard', {
        url: '/leaderboard',
        views: {
          'tab-leaderboard': {
            templateUrl: 'templates/tab-leaderboard.html',
            controller: 'LeaderBoardCtrl as vm'
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
      .state('tab.login', {
        url: '/login',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-login.html',
            controller: 'LoginCtrl as lc'
          }
        }
      })

      .state('tab.marker', {
        url: '/marker/:id',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-marker.html',
            controller: 'MarkerCtrl as vm'
          }
        }
      })
      .state('tab.addMarker', {
        url: '/addmarker',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-addmarker.html',
            controller: 'AddMarkerCtrl as vm'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/login');

  });


//angular.module('starter').service('ExampleService', ExampleService);