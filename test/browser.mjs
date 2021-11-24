import test from 'brittle'

import b from '../browser.js'

test('alloc', (t) => {
  t.is(b.alloc(42).byteLength, 42)
})

test('allocUnsafe', (t) => {
  t.is(b.allocUnsafe(42).byteLength, 42)
})

test('allocUnsafeSlow', (t) => {
  t.is(b.allocUnsafeSlow(42).byteLength, 42)
})

test('byteLength', (t) => {
  t.is(b.byteLength('1234ab'), 6)
  t.is(b.byteLength('1234ab', 'utf8'), 6)
  t.is(b.byteLength('1234ab', 'ascii'), 6)
  t.is(b.byteLength('1234ab', 'hex'), 3)
})

test('compare', (t) => {
  t.is(b.compare(b.from([1, 2, 3]), b.from([1, 2, 3])), 0)
  t.is(b.compare(b.from([1, 3, 2]), b.from([1, 2, 3])), 1)
  t.is(b.compare(b.from([1, 2, 3]), b.from([1, 3, 2])), -1)
  t.is(b.compare(b.from([1, 2, 3, 4]), b.from([1, 2, 3])), 1)
  t.is(b.compare(b.from([1, 2, 3]), b.from([1, 2, 3, 4])), -1)

  t.test('varying lengths', (t) => {
    for (let i = 0; i < 10; i++) {
      t.is(b.compare(b.alloc(i), b.alloc(i)), 0, `length ${i}`)
    }
  })

  t.test('varying alignment', (t) => {
    for (let i = 0; i < 10; i++) {
      t.is(b.compare(b.alloc(i).subarray(i), b.alloc(i).subarray(i)), 0, `offset ${i}`)
    }
  })
})

test('concat', (t) => {
  t.alike(b.concat([b.from([1, 2, 3]), b.from([4, 5, 6])]), b.from([1, 2, 3, 4, 5, 6]))
})

test('copy', (t) => {
  const x = b.from([1, 2, 3])
  const y = b.alloc(3)

  t.is(b.copy(x, y), 3)
  t.alike(y, x)

  t.test('within self', (t) => {
    const x = b.from([1, 2, 3, 0, 0, 0])

    t.is(b.copy(x, x, 3), 3)
    t.alike(x, b.from([1, 2, 3, 1, 2, 3]))
  })
})

test('equals', (t) => {
  t.is(b.equals(b.from([1, 2, 3]), b.from([1, 2, 3])), true)
  t.is(b.equals(b.from([1, 3, 2]), b.from([1, 2, 3])), false)
  t.is(b.equals(b.from([1, 2, 3, 4]), b.from([1, 2, 3])), false)

  t.test('varying lengths', (t) => {
    for (let i = 0; i < 10; i++) {
      t.is(b.equals(b.alloc(i), b.alloc(i)), true, `length ${i}`)
    }
  })

  t.test('varying alignment', (t) => {
    for (let i = 0; i < 10; i++) {
      t.is(b.equals(b.alloc(i).subarray(i), b.alloc(i).subarray(i)), true, `offset ${i}`)
    }
  })
})

test('fill', (t) => {
  t.alike(b.fill(b.alloc(3), 1), b.from([1, 1, 1]))
  t.alike(b.fill(b.alloc(3), 1, 1), b.from([0, 1, 1]))
  t.alike(b.fill(b.alloc(3), 1, 1, 2), b.from([0, 1, 0]))
  t.alike(b.fill(b.alloc(3), 'ab'), b.from([0x61, 0x62, 0x61]))
  t.alike(b.fill(b.alloc(3), 'abcd', 'hex'), b.from([0xab, 0xcd, 0xab]))
  t.alike(b.fill(b.alloc(3), 'abcd', 1, 'hex'), b.from([0, 0xab, 0xcd]))
  t.alike(b.fill(b.alloc(3), 'ab', 1, 2, 'hex'), b.from([0, 0xab, 0]))
})

test('swap16', (t) => {
  t.alike(
    b.swap16(b.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])),
    b.from([0x2, 0x1, 0x4, 0x3, 0x6, 0x5, 0x8, 0x7])
  )
})

test('swap32', (t) => {
  t.alike(
    b.swap32(b.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])),
    b.from([0x4, 0x3, 0x2, 0x1, 0x8, 0x7, 0x6, 0x5])
  )
})

test('swap64', (t) => {
  t.alike(
    b.swap64(b.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])),
    b.from([0x8, 0x7, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1])
  )
})

test('toString', (t) => {
  const buffer = b.from([1, 2, 3, 4])

  t.test('ascii', (t) => {
    t.is(b.toString(buffer, 'ascii'), '\x01\x02\x03\x04')
  })

  t.test('base64', (t) => {
    t.is(b.toString(buffer, 'base64'), 'AQIDBA==')
  })

  t.test('hex', (t) => {
    t.is(b.toString(buffer, 'hex'), '01020304')
  })

  t.test('utf8', (t) => {
    t.is(b.toString(buffer, 'utf8'), '\x01\x02\x03\x04')
  })

  t.test('utf16le', (t) => {
    t.is(b.toString(buffer, 'utf16le'), '\u0201\u0403')
  })
})
