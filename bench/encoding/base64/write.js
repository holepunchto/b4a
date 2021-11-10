const bench = require('nanobench')
const base64 = require('../../../lib/base64')

const buffer = Buffer.alloc(64 * 1024)
const string = buffer.toString('base64')

bench('Buffer.prototype.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = buffer.write(string, 'base64')
  }

  t.log(result)
  t.end()
})

bench('base64.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = base64.write(buffer, string)
  }

  t.log(result)
  t.end()
})
