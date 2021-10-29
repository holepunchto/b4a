function isBuffer (value) {
  return Buffer.isBuffer(value) || value instanceof Uint8Array
}

function alloc (size) {
  return Buffer.alloc(size)
}

function allocUnsafe (size) {
  return Buffer.allocUnsafe(size)
}

function allocUnsafeSlow (size) {
  return Buffer.allocUnsafeSlow(size)
}

function byteLength (string, encoding) {
  return Buffer.byteLength(string, encoding)
}

function compare (a, b) {
  return Buffer.compare(a, b)
}

function concat (buffers, totalLength) {
  return Buffer.concat(buffers, totalLength)
}

function copy (source, target, targetStart, start, end) {
  return toBuffer(source).copy(target, targetStart, start, end)
}

function equals (a, b) {
  return toBuffer(a).equals(b)
}

function from (value, encodingOrOffset, length) {
  return Buffer.from(value, encodingOrOffset, length)
}

function toBuffer (buffer) {
  if (Buffer.isBuffer(buffer)) return buffer
  return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength)
}

function toString (buffer, encoding, start, end) {
  return toBuffer(buffer).toString(encoding, start, end)
}

function write (buffer, string, offset, length, encoding) {
  return toBuffer(buffer).write(string, offset, length, encoding)
}

module.exports = {
  isBuffer,
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
