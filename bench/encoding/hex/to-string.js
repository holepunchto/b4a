const bench = require('nanobench')
const hex = require('../../../lib/hex')

const buffer = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = buffer.toString('hex')
  }

  t.log(result.length)
  t.end()
})

bench('hex.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100; i++) {
    result = hex.toString(buffer)
  }

  t.log(result.length)
  t.end()
})
