/* global test, expect */

import Seqr from '../src/seqr.js'

test('Test Suite', () => {
  const seq = Seqr()

  seq
    .then(done => {
      setTimeout(() => {
        expect(1).toBeTruthy()
        done()
      }, 1000)
    })
    .then(done => {
      setTimeout(() => {
        expect(1).toBeTruthy()
        done()
      }, 2000)
    })

  seq.then(done => {
    setTimeout(() => {
      expect(1).toBeTruthy()
      done()
    }, 1500)
  })

  seq.then(done => {
    expect(1).toBeTruthy()
    done()
  })
})
