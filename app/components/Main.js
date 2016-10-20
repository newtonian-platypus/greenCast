var React = require('react');
var NavView = require('./NavView');


var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
         <NavView />
      </div>
    );
  }
});

module.exports = Main;
