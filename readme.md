# seqr [![Build Status](https://travis-ci.org/joseluisq/seqr.svg?branch=master)](https://travis-ci.org/joseluisq/seqr) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/seqr/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/seqr?branch=master) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> A small [ES6](https://babeljs.io/docs/learn-es2015/) package for execute functions sequentially.

## Install

#### CommonJS

```sh
npm install seqr --save-dev
```

#### AMD

```js
requirejs(['seqr'], Seqr => {

})
```

#### Browser

#### Bower
```sh
bower install seqr --save
```

##### CDN
[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/seqr/dist/seqr.min.js"></script>
```

You can use the library via `window.Seqr`.

## Usage

```js
const seqr = require('seqr')()
const time = () => new Date().getTime()

seqr
  .then(done => {
    setTimeout(() => {
      console.log('Seq 1:', time())
      done()
    }, 1000)
  })
  .then(done => {
    setTimeout(() => {
      console.log('Seq 2:', time())
      done()
    }, 2000)
  })

seqr.then(done => {
  console.log('Seq 3:', time())
  done()
})

// Seq 1: 1468388509127
// Seq 2: 1468388511132
// Seq 3: 1468388511133
```

## Contributions
[Pull requests](https://github.com/joseluisq/seqr/pulls) and [issues](https://github.com/joseluisq/seqr/issues) are welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
