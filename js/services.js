"use strict";

/*
 * Services can be defined as : "value", "service", "factory", "provider", or "constant".
 *
 * For simplicity only example of "value" and "service" are shown here. 
 */

// EXAMPLE OF CORRECT DECLARATION OF SERVICE AS A VALUE
myApp.value('version', '0.1');

// EXAMPLE OF CORRECT DECLARATION OF SERVICE
// here is a declaration of simple utility function to know if an given param is a String.
myApp.service("UtilSrvc", function () {
    return {
        isAString: function(o) {
            return typeof o == "string" || (typeof o == "object" && o.constructor === String);
        },
        helloWorld : function(name) {
        	var result = "Hum, Hello you, but your name is too weird...";
        	if (this.isAString(name)) {
        		result = "Hello, " + name;
        	}
        	return result;
        }
    }
});

myApp.factory('JsonService', function($resource) {
  return $resource('data/resume_raw.json');
});

myApp.factory('GotoService', function($location, $anchorScroll) {
  var gotoHashVar = function (hashString){
      console.log("gotoHashVar");
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash(hashString);
    
    // call $anchorScroll()
    $anchorScroll();
  }
  return {gotoHash : gotoHashVar};
});