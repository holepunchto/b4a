const bench = require('nanobench')
const hex = require('../../../lib/hex')

const string = Buffer.alloc(64 * 1024).toString('hex')

bench('Buffer.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = Buffer.byteLength(string, 'hex')
  }

  t.log(result)
  t.end()
})

bench('hex.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = hex.byteLength(string)
  }

  t.log(result)
  t.end()
})
