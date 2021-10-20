const bench = require('nanobench')
const { concat } = require('../browser')

const a = Buffer.alloc(64 * 1024)
const b = Buffer.alloc(64 * 1024)

bench('Buffer.concat', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = Buffer.concat([a, b])
  }

  t.log(result.length)
  t.end()
})

bench('concat', (t) => {
  t.start()

  let result

  for (let i = 0; i < 10000; i++) {
    result = concat([a, b])
  }

  t.log(result.length)
  t.end()
})
