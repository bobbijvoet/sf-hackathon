/**
 * Created by bob on 27-3-15.
 */

import leafletMapDiretiveCtrl from './LeafletMapCtrl'

angular.module('starter').directive('leafletMap', () => {
  return {
    restrict: 'A',
    controller: leafletMapDiretiveCtrl.instance,
    controllerAs: 'vm',
    bindToController: true,
    scope: {star: '='},
    link: ($scope) => {
      console.log('hai', $scope);
    }
  }
});