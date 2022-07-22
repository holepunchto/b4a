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
