/*! seqr v1.0.3 | MIT (c) 2016 José Luis Quintana */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['quek'], function (quek) {
      return root.Seqr = factory(quek());
    });
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('quek')());
  } else {
    // Browser globals
    root.Seqr = factory(root.Quek());
  }
})(undefined, function (quek) {
  return function () {
    var api = {};

    api.then = function (fn) {
      if (fn && typeof fn === 'function') {
        quek.enqueue({
          fn: fn,
          lock: false
        });
      }

      next(quek.peek());

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
      var el = quek.peek();

      if (el && el.lock) {
        quek.dequeue();
        next(quek.peek());
      }
    }
  };
});

