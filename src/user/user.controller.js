var app = angular.module('flapperNews', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.names = [
      {userName: 'Kris'},
      {userName: 'Suzy'},
      {userName: 'Andrew'}
  ];
}]);