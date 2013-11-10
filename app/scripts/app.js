'use strict';

angular.module('anselstein.comApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize'
	])
	.config(function ($routeProvider,$locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
