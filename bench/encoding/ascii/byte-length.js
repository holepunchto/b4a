const bench = require('nanobench')
const ascii = require('../../../lib/ascii')

const string = Buffer.alloc(64 * 1024).toString('ascii')

bench('Buffer.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = Buffer.byteLength(string, 'ascii')
  }

  t.log(result)
  t.end()
})

bench('ascii.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 1000000; i++) {
    result = ascii.byteLength(string)
  }

  t.log(result)
  t.end()
})
