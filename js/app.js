app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('start', {
			controller: 'mainCtrl',
			abstract: true,
			url: '',
			templateUrl: '/views/home.html'
		})
		.state('home', {
			controller: 'mainCtrl',
			url: '/home',
			templateUrl: '/views/home.html'
		})
		.state('100L', {
			controller: 'mainCtrl',
			url: '/100L',
			templateUrl: '/views/first/100.html'
		})
}])


app.controller('mainCtrl',[ '$scope', function($scope){
	$scope.firstScore = 0;
	$scope.secondScore = 0;
	$scope.thirdScore = 0;
	$scope.fourthScore = 0;
	var teams;
	if(teams < 1){
			$('.contain').hide();
	}
	else{
		$('.contain').fadeIn('slow');
	}
	$scope.chooseTeams = function(){
		teams = $scope.teams;
		console.log(teams);
		if(teams == 1){
			$('.firstScore').show();
			$('.secondScore').hide();
			$('.thirdScore').hide();
			$('.fourthScore').hide();
		}
		else if(teams == 2){
			$('.firstScore').show();
			$('.secondScore').show();
			$('.thirdScore').hide();
			$('.fourthScore').hide();
		}
		else if(teams == 3){
			$('.firstScore').show();
			$('.secondScore').show();
			$('.thirdScore').show();
			$('.fourthScore').hide();
		}
		else if (teams == 4){
			$('.firstScore').show();
			$('.secondScore').show();
			$('.thirdScore').show();
			$('.fourthScore').show();
		}
		$('.start').hide();
		$('.reset').show();
	}
	$scope.reset = function(){
		$('.start').show();
		$('.firstScore').hide();
		$('.secondScore').hide();
		$('.thirdScore').hide();
		$('.fourthScore').hide();
		$scope.firstScore = 0;
		$scope.secondScore = 0;
		$scope.thirdScore = 0;
		$scope.fourthScore = 0;
	}
}])
