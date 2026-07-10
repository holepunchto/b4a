type BufferEncoding =
  | 'ascii'
  | 'base64'
  | 'binary'
  | 'hex'
  | 'latin1'
  | 'ucs-2'
  | 'ucs2'
  | 'utf-16le'
  | 'utf-8'
  | 'utf16le'
  | 'utf8'

interface Buffer {
  compare(
    target: Buffer,
    targetStart?: number,
    targetEnd?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number

  copy(target: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number

  equals(target: Buffer): boolean

  fill(value: string, encoding?: BufferEncoding): this
  fill(value: string, offset?: number, encoding?: BufferEncoding): this
  fill(value: string, offset?: number, end?: number, encoding?: BufferEncoding): this
  fill(value: Buffer | number | boolean, offset?: number, end?: number): this

  includes(value: string, encoding?: BufferEncoding): boolean
  includes(value: string, offset?: number, encoding?: BufferEncoding): boolean
  includes(value: Buffer | number | boolean, offset?: number): boolean

  indexOf(value: string, encoding?: BufferEncoding): number
  indexOf(value: string, offset?: number, encoding?: BufferEncoding): number
  indexOf(value: Buffer | number | boolean, offset?: number): number

  lastIndexOf(value: string, encoding?: BufferEncoding): number
  lastIndexOf(value: string, offset?: number, encoding?: BufferEncoding): number
  lastIndexOf(value: Buffer | number | boolean, offset?: number): number

  swap16(): this
  swap32(): this
  swap64(): this

  toString(encoding?: BufferEncoding, start?: number, end?: number): string

  toJSON(): number[] | { type: 'Buffer'; data: number[] }

  readDoubleBE(offset?: number): number
  readDoubleLE(offset?: number): number

  readFloatBE(offset?: number): number
  readFloatLE(offset?: number): number

  readInt8(offset?: number): number

  readInt16BE(offset?: number): number
  readInt16LE(offset?: number): number

  readInt32BE(offset?: number): number
  readInt32LE(offset?: number): number

  readIntBE(offset: number, byteLength: number): number
  readIntLE(offset: number, byteLength: number): number

  readBigInt64BE(offset?: number): bigint
  readBigInt64LE(offset?: number): bigint

  readUInt8(offset?: number): number
  readUint8(offset?: number): number

  readUInt16BE(offset?: number): number
  readUint16BE(offset?: number): number
  readUInt16LE(offset?: number): number
  readUint16LE(offset?: number): number

  readUInt32BE(offset?: number): number
  readUint32BE(offset?: number): number
  readUInt32LE(offset?: number): number
  readUint32LE(offset?: number): number

  readUIntBE(offset: number, byteLength: number): number
  readUintBE(offset: number, byteLength: number): number
  readUIntLE(offset: number, byteLength: number): number
  readUintLE(offset: number, byteLength: number): number

  readBigUInt64BE(offset?: number): bigint
  readBigUint64BE(offset?: number): bigint
  readBigUInt64LE(offset?: number): bigint
  readBigUint64LE(offset?: number): bigint

  write(string: string, encoding?: BufferEncoding): number
  write(string: string, offset?: number, encoding?: BufferEncoding): number
  write(string: string, offset?: number, length?: number, encoding?: BufferEncoding): number

  writeDoubleBE(value: number, offset?: number): number
  writeDoubleLE(value: number, offset?: number): number

  writeFloatBE(value: number, offset?: number): number
  writeFloatLE(value: number, offset?: number): number

  writeInt8(value: number, offset?: number): number

  writeInt16BE(value: number, offset?: number): number
  writeInt16LE(value: number, offset?: number): number

  writeInt32BE(value: number, offset?: number): number
  writeInt32LE(value: number, offset?: number): number

  writeIntBE(value: number, offset: number, byteLength: number): number
  writeIntLE(value: number, offset: number, byteLength: number): number

  writeBigInt64BE(value: bigint, offset?: number): number
  writeBigInt64LE(value: bigint, offset?: number): number

  writeUInt8(value: number, offset?: number): number
  writeUint8(value: number, offset?: number): number

  writeUInt16BE(value: number, offset?: number): number
  writeUint16BE(value: number, offset?: number): number
  writeUInt16LE(value: number, offset?: number): number
  writeUint16LE(value: number, offset?: number): number

  writeUInt32BE(value: number, offset?: number): number
  writeUint32BE(value: number, offset?: number): number
  writeUInt32LE(value: number, offset?: number): number
  writeUint32LE(value: number, offset?: number): number

  writeUIntBE(value: number, offset: number, byteLength: number): number
  writeUintBE(value: number, offset: number, byteLength: number): number
  writeUIntLE(value: number, offset: number, byteLength: number): number
  writeUintLE(value: number, offset: number, byteLength: number): number

  writeBigUint64BE(value: bigint, offset?: number): number
  writeBigUInt64BE(value: bigint, offset?: number): number
  writeBigUint64LE(value: bigint, offset?: number): number
  writeBigUInt64LE(value: bigint, offset?: number): number
}

export { Buffer, BufferEncoding }
