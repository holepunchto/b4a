const bench = require('nanobench')
const ascii = require('../../../lib/ascii')

const buffer = Buffer.alloc(64 * 1024)
const string = buffer.toString('ascii')

bench('Buffer.prototype.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = buffer.write(string, 'ascii')
  }

  t.log(result)
  t.end()
})

bench('ascii.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = ascii.write(buffer, string)
  }

  t.log(result)
  t.end()
})
