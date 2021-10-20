const encoder = new TextEncoder()
const decoder = new TextDecoder()

function byteLength (string) {
  let length = 0

  for (let i = 0, n = string.length; i < n; i++) {
    const code = string.charCodeAt(i)

    if (code >= 0xd800 && code <= 0xdbff && i + 1 < n) {
      const code = string.charCodeAt(i + 1)

      if (code >= 0xdc00 && code <= 0xdfff) {
        length += 4
        i++
        continue
      }
    }

    if (code <= 0x7f) length += 1
    else if (code <= 0x7ff) length += 2
    else length += 3
  }

  return length
}

function toString (buffer) {
  return decoder.decode(buffer)
}

function write (buffer, string, offset = 0, length = byteLength(string)) {
  const len = Math.min(length, buffer.byteLength - offset)
  encoder.encodeInto(string, buffer.subarray(offset, offset + len))
  return len
}

module.exports = {
  byteLength,
  toString,
  write
}
