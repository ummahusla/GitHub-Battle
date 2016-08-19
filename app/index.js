var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '805bb6b2e41a4f85854e7d75dae99ea5';
var sentryApp = '93121';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'GitHub Battle',
  branch: 'master',
  version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
    }
}).install();

ReactDOM.render(routes, document.getElementById('app'));
