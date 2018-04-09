'use strict';

var myApp = angular.module('dsApp', ['ngRoute','ngResource']).run(function($rootScope, $location) {
    $rootScope.location = $location;
});

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/', 
    	{
    		templateUrl: 'partials/home.html', 
    		controller: 'HeaderController'
    	});
    $routeProvider.when(
    	'/projects', 
    	{
    		templateUrl: 'partials/projects.html', 
    		controller: 'ProjectsController'
    	});
    $routeProvider.when(
    	'/services', 
    	{
    		templateUrl: 'partials/services.html', 
    		controller: 'ServicesController'
    	});
    $routeProvider.when(
    	'/contact', 
    	{
    		templateUrl: 'partials/contact.html', 
    		controller: 'IndexController'
    	});
    $routeProvider.when(
    	'/ivoteforbetterindia', 
    	{
    		templateUrl: 'partials/ivfbi.html', 
    		controller: 'IndexController'
    	});    
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        });
});
