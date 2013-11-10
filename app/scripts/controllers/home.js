'use strict';

angular.module('anselstein.comApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.sections = {};

    $scope.sections.backend = {
    	title: "Java",
		skills : [	'Play Framework',
					'RESTfull API']
    };

    $scope.sections.databases = {
    	title: "Databases",
		skills : [	'MongoDB',
					'MySql',
					'Solr',
					'Memcache']
    };

    $scope.sections.frontend = {
    	title: "Front End",
		skills : [	'Javascript',
					'HTML5',
					'CSS3']
    };

    $scope.sections.servers = {
    	title: "Server Related",
		skills : [	'Apache/HTTPD',
					'Init.d Scripts',
					'AWS management']
    };

  });
