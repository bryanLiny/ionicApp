/**
*  meihun
*
* Description
* 
*/
var ctrl = angular.module('starter.controllers', []);

ctrl.controller('SearchCtrl', ['$scope','ChatsServcie',function($scope,ChatsServcie) {
  $scope.chats = ChatsServcie.all();
  $scope.remove = function(chat) {
    ChatsServcie.remove(chat);
  };
}]);