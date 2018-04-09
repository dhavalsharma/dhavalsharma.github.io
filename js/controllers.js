'use strict';

//myApp.controller("HeaderController" ,function ($scope, UtilSrvc) {
myApp.controller("HeaderController" ,function ($scope, $rootScope, $location, GotoService) {
    //$scope.aVariable = 'anExampleValueWithinScope';
    //$scope.valueFromService = UtilSrvc.helloWorld("Amy");
    $scope.isActive = function (viewLocation) { 
        //console.log(viewLocation +"==="+ $location.path());
        return viewLocation === $location.path();
    };
    
    $scope.gotoHash = GotoService.gotoHash;
});

myApp.controller("IndexController" ,function ($scope, $rootScope) {
});

// you may add more controllers below
myApp.controller("ProjectsController" ,function ($scope, JsonService) {
    JsonService.query(function(results){
        console.log("JsonService.query ");
        console.dir(results);
        $scope.projects = results;    
    });
});

myApp.controller("HomeController" ,function ($scope, GotoService) {
    $scope.gotoHash = GotoService.gotoHash;
});

myApp.controller("ServicesController" ,function ($scope, GotoService) {
    $scope.gotoHash = GotoService.gotoHash;
});