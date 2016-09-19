(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var APP_NAME = 'frontend-dog';
var APP_VERSION = '0.0.1';

exports.default = {
  APP_NAME: APP_NAME,
  APP_VERSION: APP_VERSION
};

},{}],2:[function(require,module,exports){
'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Hello ' + _config2.default.APP_NAME + '!'; /*
                                                        * The Entry file
                                                        */

// import 'babel-polyfill'

document.getElementById('title').innerHTML = title;

},{"./config":1}]},{},[2]);

//# sourceMappingURL=bundle.js.map
