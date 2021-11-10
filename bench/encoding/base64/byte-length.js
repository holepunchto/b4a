const bench = require('nanobench')
const base64 = require('../../../lib/base64')

const string = Buffer.alloc(64 * 1024).toString('base64')

bench('Buffer.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = Buffer.byteLength(string, 'base64')
  }

  t.log(result)
  t.end()
})

bench('base64.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = base64.byteLength(string)
  }

  t.log(result)
  t.end()
})
