app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			controller: 'mainCtrl',
			url: '/',
			templateUrl: '/views/home.html'
		})
		.state('100L', {
			controller: 'mainCtrl',
			url: '/100L',
			templateUrl: '/views/first/100.html'
		})
}])

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.test = 'testing, brah';

}])
