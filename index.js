const quek = require('quek')()

module.exports = () => {
  const seqr = {}

  seqr.then = (fn) => {
    if (fn) {
      quek.enqueue({
        fn,
        lock: false
      })
    }

    next(quek.peek())

    return seqr
  }

  return seqr

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
