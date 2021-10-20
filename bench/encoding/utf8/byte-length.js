const bench = require('nanobench')
const utf8 = require('../../../lib/utf8')

const string = Buffer.alloc(64 * 1024).toString('utf8')

bench('Buffer.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = Buffer.byteLength(string, 'utf8')
  }

  t.log(result)
  t.end()
})

bench('utf8.byteLength', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = utf8.byteLength(string)
  }

  t.log(result)
  t.end()
})
