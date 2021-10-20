const ascii = require('./lib/ascii')
const hex = require('./lib/hex')
const utf8 = require('./lib/utf8')

function _codecFor (encoding) {
  switch (encoding) {
    case 'ascii':
      return ascii
    case 'hex':
      return hex
    case 'utf8':
    case 'utf-8':
    case undefined:
      return utf8
    default:
      throw new Error(`Unknown encoding: ${encoding}`)
  }
}

function alloc (size) {
  return new Uint8Array(size)
}

function allocUnsafe (size) {
  return new Uint8Array(size)
}

function allocUnsafeSlow (size) {
  return new Uint8Array(size)
}

function byteLength (string, encoding) {
  return _codecFor(encoding).byteLength(string)
}

function compare (a, b) {
  if (a === b) return 0

  const len = Math.min(a.byteLength, b.byteLength)
  const len32 = len >>> 2
  const a32 = new Uint32Array(a.buffer, a.byteOffset, len32)
  const b32 = new Uint32Array(b.buffer, b.byteOffset, len32)

  let i
  for (i = 0; i < len32; i++) {
    if (a32[i] !== b32[i]) break
  }

  for (let j = i << 2; j < len; j++) {
    if (a[j] < b[j]) return -1
    if (a[j] > b[j]) return 1
  }

  return a.byteLength > b.byteLength ? 1 : a.byteLength < b.byteLength ? -1 : 0
}

function concat (buffers, totalLength) {
  if (totalLength === undefined) {
    totalLength = buffers.reduce((len, buffer) => len + buffer.byteLength, 0)
  }

  const result = new Uint8Array(totalLength)

  buffers.reduce(
    (offset, buffer) => {
      result.set(buffer, offset)
      return offset + buffer.byteLength
    },
    0
  )

  return result
}

function copy (source, target, targetStart = 0, start = 0, end = source.byteLength) {
  if (end > 0 && end < start) return 0
  if (end === start) return 0
  if (source.byteLength === 0 || target.byteLength === 0) return 0

  if (targetStart < 0) throw new RangeError('targetStart is out of range')
  if (start < 0 || start >= source.byteLength) throw new RangeError('sourceStart is out of range')
  if (end < 0) throw new RangeError('sourceEnd is out of range')

  if (targetStart >= target.byteLength) targetStart = target.byteLength
  if (end > source.byteLength) end = source.byteLength
  if (target.byteLength - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (start !== 0 || end < len) source = source.subarray(start, end)

  if (source === target) {
    target.copyWithin(targetStart, start, end)
  } else {
    target.set(source, targetStart)
  }

  return len
}

function equals (a, b) {
  if (a === b) return true
  if (a.byteLength !== b.byteLength) return false

  const len = a.byteLength
  const len32 = len >>> 2
  const a32 = new Uint32Array(a.buffer, a.byteOffset, len32)
  const b32 = new Uint32Array(b.buffer, b.byteOffset, len32)

  for (let i = 0; i < len32; i++) {
    if (a32[i] !== b32[i]) return false
  }

  for (let i = len32 << 2; i < len; i++) {
    if (a[i] !== b[i]) return false
  }

  return true
}

function from (value, encodingOrOffset, length) {
  // from(string, encoding)
  if (typeof value === 'string') return _fromString(value, encodingOrOffset)

  // from(array)
  if (Array.isArray(value)) return _fromArray(value)

  // from(buffer)
  if (ArrayBuffer.isView(value)) return _fromBuffer(value)

  // from(arrayBuffer[, byteOffset[, length]])
  return _fromArrayBuffer(value, encodingOrOffset, length)
}

function _fromString (string, encoding) {
  const codec = _codecFor(encoding)
  const buffer = new Uint8Array(codec.byteLength(string))
  codec.write(buffer, string, 0, buffer.byteLength)
  return buffer
}

function _fromArray (array) {
  const buffer = new Uint8Array(array.length)
  buffer.set(array)
  return buffer
}

function _fromBuffer (buffer) {
  const copy = new Uint8Array(buffer.byteLength)
  copy.set(buffer)
  return copy
}

function _fromArrayBuffer (arrayBuffer, byteOffset, length) {
  return new Uint8Array(arrayBuffer, byteOffset, length)
}

function toBuffer (buffer) {
  return buffer
}

function toString (buffer, encoding, start = 0, end = buffer.byteLength) {
  const len = buffer.byteLength

  if (start >= len) return ''
  if (end <= start) return ''
  if (start < 0) start = 0
  if (end > len) end = len

  if (start !== 0 || end < len) buffer = buffer.subarray(start, end)

  return _codecFor(encoding).toString(buffer)
}

function write (buffer, string, offset, length, encoding) {
  // write(buffer, string)
  if (offset === undefined) {
    encoding = 'utf8'

  // write(buffer, string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    offset = undefined

  // write(buffer, string, offset, encoding)
  } else if (encoding === undefined && typeof length === 'string') {
    encoding = length
    length = undefined
  }

  return _codecFor(encoding).write(buffer, string, offset, length)
}

module.exports = {
  alloc,
  allocUnsafe,
  allocUnsafeSlow,
  byteLength,
  compare,
  concat,
  copy,
  equals,
  from,
  toBuffer,
  toString,
  write
}
