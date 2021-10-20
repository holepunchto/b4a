const bench = require('nanobench')
const { copy } = require('../browser')

const a = Buffer.alloc(64 * 1024)
const b = Buffer.alloc(64 * 1024)

bench('Buffer.prototype.copy', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = a.copy(b)
  }

  t.log(result)
  t.end()
})

bench('copy', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = copy(a, b)
  }

  t.log(result)
  t.end()
})
