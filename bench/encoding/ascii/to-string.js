const bench = require('nanobench')
const ascii = require('../../../lib/ascii')

const buffer = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = buffer.toString('ascii')
  }

  t.log(result.length)
  t.end()
})

bench('ascii.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = ascii.toString(buffer)
  }

  t.log(result.length)
  t.end()
})
