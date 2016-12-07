/**
*  meihun
*
* Description
* 
*/
var ctrl = angular.module('starter.controllers', []);

ctrl.controller('ChatDetailCtrl', ['$scope','$stateParams','ChatsServcie',
	function($scope, $stateParams, ChatsServcie) {
  
	$scope.chat = ChatsServcie.get($stateParams.chatId);
  
}]);