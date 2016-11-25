const Quek = require('quek')

module.exports = () => {
  const api = {}
  const quek = Quek()

  api.then = fn => {
    if (fn && typeof fn === 'function') {
      quek.append({
        fn,
        lock: false
      })
    }

    next(quek.first())

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
    const el = quek.first()

    if (el && el.lock) {
      quek.shift()
      next(quek.first())
    }
  }
}
