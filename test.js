const test = require('tape')
const seqr = require('./')()

test('Test Suite', t => {
  t.plan(4)

  seqr
    .then(done => {
      setTimeout(() => {
        t.ok(1, 'Seq 1 is done.')
        done()
      }, 1000)
    })
    .then(done => {
      setTimeout(() => {
        t.ok(1, 'Seq 2 is done.')
        done()
      }, 2000)
    })

  seqr.then(done => {
    setTimeout(() => {
      t.ok(1, 'Seq 3 is done.')
      done()
    }, 1500)
  })

  seqr.then(done => {
    t.ok(1, 'Seq 4 is done.')
    done()
  })
})
