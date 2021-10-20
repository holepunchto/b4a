const bench = require('nanobench')
const utf8 = require('../../../lib/utf8')

const buffer = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = buffer.toString('utf8')
  }

  t.log(result.length)
  t.end()
})

bench('utf8.toString', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = utf8.toString(buffer)
  }

  t.log(result.length)
  t.end()
})
