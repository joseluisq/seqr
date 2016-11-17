(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['quek'], quek => {
      return (root.Seqr = factory(quek()))
    })
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('quek')())
  } else {
    // Browser globals
    root.Seqr = factory(root.Quek())
  }
}(this, quek => {
  return () => {
    const api = {}

    api.then = fn => {
      if (fn && typeof fn === 'function') {
        quek.enqueue({
          fn,
          lock: false
        })
      }

      next(quek.peek())

      return api
    }

    return api

    function next (el) {
      if (el && !el.lock) {
        el.lock = true
        el.fn(done)
      }
    }

    function done () {
      const el = quek.peek()

      if (el && el.lock) {
        quek.dequeue()
        next(quek.peek())
      }
    }
  }
}))
