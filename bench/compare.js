const bench = require('nanobench')
const { compare } = require('../browser')

const a = Buffer.alloc(64 * 1024)
const b = Buffer.alloc(64 * 1024)

bench('Buffer.compare', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = Buffer.compare(a, b)
  }

  t.log(result)
  t.end()
})

bench('compare', (t) => {
  t.start()

  let result

  for (let i = 0; i < 100000; i++) {
    result = compare(a, b)
  }

  t.log(result)
  t.end()
})
