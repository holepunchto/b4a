const bench = require('nanobench')
const utf8 = require('../../../lib/utf8')

const buffer = Buffer.alloc(64 * 1024)
const string = buffer.toString('utf8')

bench('Buffer.prototype.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = buffer.write(string, 'utf8')
  }

  t.log(result)
  t.end()
})

bench('utf8.write', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = utf8.write(buffer, string)
  }

  t.log(result)
  t.end()
})
