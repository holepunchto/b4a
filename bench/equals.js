const bench = require('nanobench')
const { equals } = require('../browser')

const a = Buffer.alloc(64 * 1024)
const b = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.equals', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = a.equals(b)
  }

  t.log(result)
  t.end()
})

bench('equals', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = equals(a, b)
  }

  t.log(result)
  t.end()
})
