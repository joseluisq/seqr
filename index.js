import quesk from 'quesk'

export default function seqr () {
  const queue = quesk()
  const api = {}

  api.then = fn => {
    if (fn && typeof fn === 'function') {
      queue.append({
        fn,
        lock: false
      })
    }

    next(queue.first())

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
    const el = queue.first()

    if (el && el.lock) {
      queue.shift()
      next(queue.first())
    }
  }
}
