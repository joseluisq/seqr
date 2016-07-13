const queu = require('quek')()

module.exports = () => {
  const seqr = {}

  seqr.then = (fn) => {
    if (fn) {
      queu.enqueue({
        fn,
        lock: false
      })
    }

    next(queu.peek())
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
    const el = queu.peek()

    if (el && el.lock) {
      queu.dequeue()
      next(queu.peek())
    }
  }
}
