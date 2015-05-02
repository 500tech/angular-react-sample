require('./style.css');
require('./animate.css');

var angular = require('angular');
var React = require('react/addons');

angular.module("sampleapp", []);

angular.module("sampleapp")
  .directive("sampleDirective", function() {
    return {
      restrict: 'E',
      template: "<h2>Angular directive</h2>"
    }
  });
  
