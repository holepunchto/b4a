const bench = require('nanobench')
const base64 = require('../../../lib/base64')

const buffer = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = buffer.toString('base64')
  }

  t.log(result.length)
  t.end()
})

bench('base64.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = base64.toString(buffer)
  }

  t.log(result.length)
  t.end()
})
