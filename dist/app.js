(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesResponsiveTabs = require("./modules/responsiveTabs");

var _modulesResponsiveTabs2 = _interopRequireDefault(_modulesResponsiveTabs);

console.log('From module tabs >>> ', _modulesResponsiveTabs2["default"]);

},{"./modules/responsiveTabs":2}],2:[function(require,module,exports){
/*!
 * Tabs
 * Copyright (c) 2015 Hemerson Vianna
 * Licensed under the MIT license
 */
"use strict";
var _tabs = function _tabs(element, options) {
  if (!options) {
    options = {};
  }

  this.addEventListeners();
};

_tabs.prototype.addEventListeners = function () {};

exports["default"] = _tabs;

},{}]},{},[1]);
