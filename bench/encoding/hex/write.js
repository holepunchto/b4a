const bench = require('nanobench')
const hex = require('../../../lib/hex')

const buffer = Buffer.alloc(64 * 1024)
const string = buffer.toString('hex')

bench('Buffer.prototype.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = buffer.write(string, 'hex')
  }

  t.log(result)
  t.end()
})

bench('hex.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = hex.write(buffer, string)
  }

  t.log(result)
  t.end()
})
