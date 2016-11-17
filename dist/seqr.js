/*! seqr v1.0.2 | MIT (c) 2016 José Luis Quintana */
'use strict';

var quek = require('quek')();

module.exports = function () {
  var seqr = {};

  seqr.then = function (fn) {
    if (fn && typeof fn === 'function') {
      quek.enqueue({
        fn: fn,
        lock: false
      });
    }

    next(quek.peek());

    return seqr;
  };

  return seqr;

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

