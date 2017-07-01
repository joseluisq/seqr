import test from 'ava'
import Seqr from './'

test.cb('Test suite', t => {
  t.plan(4)

  const seq = Seqr()

  seq
    .then(done => {
      setTimeout(() => {
        t.pass('step 1')
        done()
      }, 1000)
    })
    .then(done => {
      setTimeout(() => {
        t.pass('step 2')
        done()
      }, 2000)
    })

  seq.then(done => {
    setTimeout(() => {
      t.pass('step 3')
      done()
    }, 1500)
  })

  seq.then(done => {
    t.pass('step 4')
    t.end()
    done()
  })
})
