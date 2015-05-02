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
  
angular.module("sampleapp")
  .directive("reactContainer", function() {
    return {
      restrict: 'E',
      template: '<div></div>',
      link: function(scope, element, attrs) {
        return React.render(<MyComponent />, element[0]);
      }
    }
  });


var MyComponent = React.createClass({
  render: function() {
    return (
      <h2>React Component</h2>
    );
  }
});
