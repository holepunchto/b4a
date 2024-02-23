import test from 'brittle'

import b from '../index.js'

test('writeDoubleLE', (t) => {
  const value = 123.456

  const expectedBuffer = Buffer.alloc(8)
  expectedBuffer.writeDoubleLE(value, 0)

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(8)
    const bufferOffset = b.writeDoubleLE(buffer, value, 0)
    t.is(bufferOffset, 8)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(8)
    const arrayOffset = b.writeDoubleLE(array, value, 0)
    t.is(arrayOffset, 8)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeFloatLE', (t) => {
  const value = 0xcafebabe

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeFloatLE(value, 0)

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeFloatLE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeFloatLE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeUInt32LE', (t) => {
  const value = 0xfeedface

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeUInt32LE(value, 0)

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeUInt32LE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeUInt32LE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeInt32LE', (t) => {
  const value = 0x05060708

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeInt32LE(value, 0)

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeInt32LE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeInt32LE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('readDoubleLE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8])

    const actual = b.readDoubleLE(buffer)
    const expected = 5.447603722011605e-270
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])

    const actual = b.readDoubleLE(buffer)
    const expected = 5.447603722011605e-270
    t.is(actual, expected)
  })
})

test('readFloatLE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([1, 2, 3, 4])

    const actual = b.readFloatLE(buffer)
    const expected = 1.539989614439558e-36
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([1, 2, 3, 4])

    const actual = b.readFloatLE(buffer)
    const expected = 1.539989614439558e-36
    t.is(actual, expected)
  })
})

test('readUInt32LE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([0x12, 0x34, 0x56, 0x78])

    const actual = b.readUInt32LE(buffer).toString(16)
    const expected = '78563412'
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([0x12, 0x34, 0x56, 0x78])

    const actual = b.readUInt32LE(buffer).toString(16)
    const expected = '78563412'
    t.is(actual, expected)
  })
})

test('readInt32LE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([0, 0, 0, 5])

    const actual = b.readInt32LE(buffer)
    const expected = 83886080
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([0, 0, 0, 5])

    const actual = b.readInt32LE(buffer)
    const expected = 83886080
    t.is(actual, expected)
  })
})

test('writeDoubleBE', (t) => {
  const value = 123.456

  const expectedBuffer = Buffer.from('405edd2f1a9fbe77', 'hex')

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(8)
    const bufferOffset = b.writeDoubleBE(buffer, value, 0)
    t.is(bufferOffset, 8)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(8)
    const arrayOffset = b.writeDoubleBE(array, value, 0)
    t.is(arrayOffset, 8)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeFloatBE', (t) => {
  const value = 0xcafebabe

  const expectedBuffer = Buffer.from('4f4afebb', 'hex')

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeFloatBE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeFloatBE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeUInt32BE', (t) => {
  const value = 0xfeedface

  const expectedBuffer = Buffer.from('feedface', 'hex')

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeUInt32BE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeUInt32BE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeInt32BE', (t) => {
  const value = 0x05060708

  const expectedBuffer = Buffer.from('05060708', 'hex')

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)
    const bufferOffset = b.writeInt32BE(buffer, value, 0)
    t.is(bufferOffset, 4)
    t.alike(buffer, expectedBuffer)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)
    const arrayOffset = b.writeInt32BE(array, value, 0)
    t.is(arrayOffset, 4)
    t.alike(Buffer.from(array), expectedBuffer)
  })
})

test('writeInt32BE - top bit set', (t) => {
  const minus1 = -1
  const minusMax = -1 * 0x80000000
  const minusMaxSub1 = -1 * 0x7fffffff

  const expectedBuffer = Buffer.from('ffffffff', 'hex')
  const expectedMax = Buffer.from('80000000', 'hex')
  const expectedMaxSub1 = Buffer.from('80000001', 'hex')

  t.test('from buffer', (t) => {
    const buffer = Buffer.alloc(4)

    t.is(b.writeInt32BE(buffer, minus1, 0), 4)
    t.alike(buffer, expectedBuffer)

    t.is(b.writeInt32BE(buffer, minusMaxSub1, 0), 4)
    t.alike(buffer, expectedMaxSub1)

    t.is(b.writeInt32BE(buffer, minusMax, 0), 4)
    t.alike(buffer, expectedMax)
  })

  t.test('from array', (t) => {
    const array = new Uint8Array(4)

    t.is(b.writeInt32BE(array, minus1, 0), 4)
    t.alike(Buffer.from(array), expectedBuffer)

    t.is(b.writeInt32BE(array, minusMaxSub1, 0), 4)
    t.alike(Buffer.from(array), expectedMaxSub1)

    t.is(b.writeInt32BE(array, minusMax, 0), 4)
    t.alike(Buffer.from(array), expectedMax)
  })
})

test('readDoubleBE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([8, 7, 6, 5, 4, 3, 2, 1])

    const actual = b.readDoubleBE(buffer)
    const expected = 5.447603722011605e-270
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([8, 7, 6, 5, 4, 3, 2, 1])

    const actual = b.readDoubleBE(buffer)
    const expected = 5.447603722011605e-270
    t.is(actual, expected)
  })
})

test('readFloatBE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([4, 3, 2, 1])

    const actual = b.readFloatBE(buffer)
    const expected = 1.539989614439558e-36
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([4, 3, 2, 1])

    const actual = b.readFloatBE(buffer)
    const expected = 1.539989614439558e-36
    t.is(actual, expected)
  })
})

test('readUInt32BE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([0x78, 0x56, 0x34, 0x12])

    const actual = b.readUInt32BE(buffer)
    const expected = 0x78563412
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([0x78, 0x56, 0x34, 0x12])

    const actual = b.readUInt32BE(buffer)
    const expected = 0x78563412
    t.is(actual, expected)
  })
})

test('readInt32BE', (t) => {
  t.test('from buffer', (t) => {
    const buffer = Buffer.from([5, 0, 0, 0])

    const actual = b.readInt32BE(buffer)
    const expected = 83886080
    t.is(actual, expected)
  })

  t.test('from uint8Array', (t) => {
    const buffer = new Uint8Array([5, 0, 0, 0])

    const actual = b.readInt32BE(buffer)
    const expected = 83886080
    t.is(actual, expected)
  })
})

test('readInt32BE - top bit set', (t) => {
  t.test('from buffer', (t) => {
    const bufferMinus1 = Buffer.from([0xff, 0xff, 0xff, 0xff])
    const bufferMax = Buffer.from([0x80, 0, 0, 0])
    const bufferMaxSub1 = Buffer.from([0x80, 0, 0, 1])

    t.is(b.readInt32BE(bufferMinus1), -1)
    t.is(b.readInt32BE(bufferMaxSub1), -1 * 0x7fffffff)
    t.is(b.readInt32BE(bufferMax), -1 * 0x80000000)
  })

  t.test('from array', (t) => {
    const bufferMinus1 = new Uint8Array([0xff, 0xff, 0xff, 0xff])
    const bufferMax = new Uint8Array([0x80, 0, 0, 0])
    const bufferMaxSub1 = new Uint8Array([0x80, 0, 0, 1])

    t.is(b.readInt32BE(bufferMinus1), -1)
    t.is(b.readInt32BE(bufferMaxSub1), -1 * 0x7fffffff)
    t.is(b.readInt32BE(bufferMax), -1 * 0x80000000)
  })
})

test('browser.js and index.js export same functions', async (t) => {
  const { default: browser } = await import('../browser.js')

  t.alike(Object.keys(browser).sort(), Object.keys(b).sort())
})
