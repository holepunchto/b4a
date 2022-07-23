import test from 'brittle'

import b from '../index.js'

test('writeDoubleLE', (t) => {
  const value = 123.456

  const expectedBuffer = Buffer.alloc(8)
  expectedBuffer.writeDoubleLE(value, 0)

  const buffer = Buffer.alloc(8)
  const bufferOffset = b.writeDoubleLE(buffer, value, 0)
  t.is(bufferOffset, 8)
  t.alike(buffer, expectedBuffer)

  const array = new Uint8Array(8)
  const arrayOffset = b.writeDoubleLE(array, value, 0)
  t.is(arrayOffset, 8)
  t.alike(Buffer.from(array), expectedBuffer)
})

test('writeFloatLE', (t) => {
  const value = 0xcafebabe

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeFloatLE(value, 0)

  const buffer = Buffer.alloc(4)
  const bufferOffset = b.writeFloatLE(buffer, value, 0)
  t.is(bufferOffset, 4)
  t.alike(buffer, expectedBuffer)

  const array = new Uint8Array(4)
  const arrayOffset = b.writeFloatLE(array, value, 0)
  t.is(arrayOffset, 4)
  t.alike(Buffer.from(array), expectedBuffer)
})

test('writeUInt32LE', (t) => {
  const value = 0xfeedface

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeUInt32LE(value, 0)

  const buffer = Buffer.alloc(4)
  const bufferOffset = b.writeUInt32LE(buffer, value, 0)
  t.is(bufferOffset, 4)
  t.alike(buffer, expectedBuffer)

  const array = new Uint8Array(4)
  const arrayOffset = b.writeUInt32LE(array, value, 0)
  t.is(arrayOffset, 4)
  t.alike(Buffer.from(array), expectedBuffer)
})

test('writeInt32LE', (t) => {
  const value = 0x05060708

  const expectedBuffer = Buffer.alloc(4)
  expectedBuffer.writeInt32LE(value, 0)

  const buffer = Buffer.alloc(4)
  const bufferOffset = b.writeInt32LE(buffer, value, 0)
  t.is(bufferOffset, 4)
  t.alike(buffer, expectedBuffer)

  const array = new Uint8Array(4)
  const arrayOffset = b.writeInt32LE(array, value, 0)
  t.is(arrayOffset, 4)
  t.alike(Buffer.from(array), expectedBuffer)
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
