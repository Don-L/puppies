var React = require('react');
var ReactDOM = require('react-dom');
var PuppiesBox = require('./components/PuppiesBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <PuppiesBox url="http://localhost:5000/puppies" />,
    document.getElementById('app')
  );
}
