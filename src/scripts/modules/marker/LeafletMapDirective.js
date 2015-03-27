/**
 * Created by bob on 27-3-15.
 */
angular.module('myApp').directive('starDirective', () => {
  return {
    restrict: 'A',
    controller: directiveCtrl.instance,
    controllerAs: 'starItemCtrl',
    bindToController: true,
    scope: {star: '='},
    template: myText,
    link: ($scope) => {
      //console.log($scope.starItemCtrl.star.stargazers_count, 'eee');
    }
  }
});