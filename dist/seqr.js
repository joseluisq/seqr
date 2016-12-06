(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Seqr"] = factory();
	else
		root["Seqr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _quek = __webpack_require__(1);

	var _quek2 = _interopRequireDefault(_quek);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  var quek = (0, _quek2.default)();
	  var api = {};

	  api.then = function (fn) {
	    if (fn && typeof fn === 'function') {
	      quek.append({
	        fn: fn,
	        lock: false
	      });
	    }

	    next(quek.first());

	    return api;
	  };

	  return api;

	  function next(el) {
	    if (el && !el.lock) {
	      el.lock = true;
	      el.fn(done);
	    }
	  }

	  function done() {
	    var el = quek.first();

	    if (el && el.lock) {
	      quek.shift();
	      next(quek.first());
	    }
	  }
	}; /* global module */

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/* global module */

	module.exports = function () {
	  var que = [];

	  return {
	    append: function append(e) {
	      return que.push(e);
	    },
	    prepend: function prepend(e) {
	      return que.unshift(e);
	    },

	    pop: function pop() {
	      return que.pop();
	    },
	    shift: function shift() {
	      return que.shift();
	    },

	    first: function first() {
	      return que[0];
	    },
	    last: function last() {
	      return que.slice(-1)[0];
	    },

	    all: function all() {
	      return que;
	    },
	    length: function length() {
	      return que.length;
	    }
	  };
	};

/***/ }
/******/ ])
});
;