/*! seqr v1.0.3 | MIT (c) 2016 José Luis Quintana */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('Seqr', ['module', 'quek'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('quek'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Quek);
    global.Seqr = mod.exports;
  }
})(this, function (module, Quek) {
  'use strict';

  module.exports = function () {
    var api = {};
    var quek = Quek();

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
  };
});

