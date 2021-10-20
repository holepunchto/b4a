function byteLength (string) {
  return string.length >>> 1
}

function toString (buffer) {
  const len = buffer.byteLength
  const len32 = len >>> 2
  const buffer32 = new Uint32Array(buffer.buffer, buffer.byteOffset, len32)

  let result = ''

  for (let i = 0; i < len32; i++) {
    result += buffer32[i].toString(16).padStart(8, '0')
  }

  for (let i = len32 << 2; i < len; i++) {
    result += buffer[i].toString(16).padStart(2, '0')
  }

  return result
}

function write (buffer, string, offset = 0, length = byteLength(string)) {
  const len = Math.min(length, buffer.byteLength - offset)

  for (let i = 0; i < len; i++) {
    const a = hexValue(string.charCodeAt(i * 2))
    const b = hexValue(string.charCodeAt(i * 2 + 1))

    if (a === undefined || b === undefined) {
      return buffer.subarray(0, i)
    }

    buffer[offset + i] = (a << 4) | b
  }

  return len
}

module.exports = {
  byteLength,
  toString,
  write
}

function hexValue (char) {
  if (char >= 0x30 && char <= 0x39) return char - 0x30
  if (char >= 0x41 && char <= 0x46) return char - 0x41 + 10
  if (char >= 0x61 && char <= 0x66) return char - 0x61 + 10
}
