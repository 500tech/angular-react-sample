require('./style.css');
require('./animate.css');

var angular = require('angular');
var React = require('react/addons');

angular.module("sampleapp", []);

window.array = [];

for (var i = 0; i < 100; i++) {
  window.array.push(i);
}

window.lastUpdate = Date.now();
window.delay = 0;

function updateNumber(i) {
  window.delay = Date.now() - window.lastUpdate;
  window.lastUpdate = Date.now();

  i += 1;
  if (i > 20) 
    i = 0;
  return i
}

function SpeedController($interval) {
  var ctrl = this;
  ctrl.delay = window.delay;

  this.getNumber = function() { return window.array };

  this.number = 10;

  function tick() {
    ctrl.number = updateNumber(ctrl.number);
    ctrl.delay = window.delay;
  }

  $interval(tick, 1);
}


angular.module("sampleapp")
  .directive("sampleDirective", function() {
    return {
      restrict: 'E',
      controller: SpeedController,
      controllerAs: 'speed',
      templateUrl: "template.html"
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
  getInitialState: function() {
    return { number: 10, delay: window.delay };
  },

  componentDidMount: function() {
    function tick() {
      this.setState({ number: updateNumber(this.state.number), delay: window.delay });
    }
    setInterval(tick.bind(this), 1);
  },

  render: function() {
    var renderColumns = function(i) {
      var style = {
        'width': this.state.number + 'px',
        'height': this.state.number + 'px'
      }
      return (
        <td key={ i }>
          <div className="cell" style={ style }></div>
        </td>
      );
    }

    var renderRows = function(i) {
      return (
        <tr key={ i }>
          { window.array.map(renderColumns.bind(this)) }
        </tr>
      );
    }

    return (
      <div>
        <h2>React Component <span className='delay'>{ this.state.delay } ms</span></h2>
        <table>
          { window.array.map(renderRows.bind(this)) }
        </table>
      </div>
    );
  }
});
