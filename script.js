
var app = angular.module("clockShit", []);
app.controller("clockController", function($scope){
	$scope.view={}
	$scope.view.time=moment().hour()+":"+moment().minute()


})