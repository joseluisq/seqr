/* global module */

import Quek from 'quek'

module.exports = () => {
  const quek = Quek()
  const api = {}

  api.then = fn => {
    /* istanbul ignore else */
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

  /* istanbul ignore next */
  function done () {
    const el = quek.first()

    if (el && el.lock) {
      quek.shift()
      next(quek.first())
    }
  }
}
