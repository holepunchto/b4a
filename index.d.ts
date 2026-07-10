import Buffer, { type BufferEncoding } from 'bare-buffer'

export function isBuffer(value: unknown): value is Buffer | Uint8Array

export function isEncoding(encoding: unknown): encoding is BufferEncoding

export function alloc(size: number, fill: string, encoding?: BufferEncoding): Buffer
export function alloc(size: number, fill?: Buffer | Uint8Array | number | boolean): Buffer

export function allocUnsafe(size: number): Buffer

export function allocUnsafeSlow(size: number): Buffer

export function byteLength(
  string: ArrayBufferView | ArrayBufferLike | string,
  encoding?: BufferEncoding
): number

export function compare(a: Buffer | Uint8Array, b: Buffer | Uint8Array): number

export function concat(buffers: (Buffer | Uint8Array)[], totalLength?: number): Buffer

export function copy(
  source: Buffer | Uint8Array,
  target: Buffer | Uint8Array,
  targetStart?: number,
  start?: number,
  end?: number
): number

export function equals(a: Buffer | Uint8Array, b: Buffer | Uint8Array): boolean

export function fill(buffer: Buffer | Uint8Array, value: string, encoding?: BufferEncoding): Buffer
export function fill(
  buffer: Buffer | Uint8Array,
  value: string,
  offset?: number,
  encoding?: BufferEncoding
): Buffer
export function fill(
  buffer: Buffer | Uint8Array,
  value: string,
  offset?: number,
  end?: number,
  encoding?: BufferEncoding
): Buffer

export function fill(
  buffer: Buffer | Uint8Array,
  value: Buffer | Uint8Array | number | boolean,
  offset?: number,
  end?: number
): Buffer

export function from(value: Iterable<number>): Buffer
export function from(value: ArrayLike<number>): Buffer
export function from(value: string, encodingOrOffset?: BufferEncoding): Buffer
export function from(value: ArrayBufferLike, encodingOrOffset?: number, length?: number): Buffer

export function includes(
  buffer: Buffer | Uint8Array,
  value: string,
  encoding?: BufferEncoding
): boolean
export function includes(
  buffer: Buffer | Uint8Array,
  value: string,
  offset?: number,
  encoding?: BufferEncoding
): boolean
export function includes(
  buffer: Buffer | Uint8Array,
  value: Buffer | Uint8Array | number | boolean,
  offset?: number
): boolean

export function indexOf(
  buffer: Buffer | Uint8Array,
  value: string,
  encoding?: BufferEncoding
): number
export function indexOf(
  buffer: Buffer | Uint8Array,
  value: string,
  byfeOffset?: number,
  encoding?: BufferEncoding
): number
export function indexOf(
  buffer: Buffer | Uint8Array,
  value: Buffer | Uint8Array | number | boolean,
  byfeOffset?: number
): number

export function lastIndexOf(
  buffer: Buffer | Uint8Array,
  value: string,
  encoding?: BufferEncoding
): number
export function lastIndexOf(
  buffer: Buffer | Uint8Array,
  value: string,
  offset?: number,
  encoding?: BufferEncoding
): number
export function lastIndexOf(
  buffer: Buffer | Uint8Array,
  value: Buffer | Uint8Array | number | boolean,
  offset?: number
): number

export function swap16(buffer: Buffer | Uint8Array): Buffer
export function swap32(buffer: Buffer | Uint8Array): Buffer
export function swap64(buffer: Buffer | Uint8Array): Buffer

export function toBuffer(buffer: Buffer | Uint8Array): Buffer

export function toString(
  buffer: Buffer | Uint8Array,
  encoding?: BufferEncoding,
  start?: number,
  end?: number
): string

export function write(
  buffer: Buffer | Uint8Array,
  string: string,
  encoding?: BufferEncoding
): number
export function write(
  buffer: Buffer | Uint8Array,
  string: string,
  offset?: number,
  encoding?: BufferEncoding
): number
export function write(
  buffer: Buffer | Uint8Array,
  string: string,
  offset?: number,
  length?: number,
  encoding?: BufferEncoding
): number

export function readDoubleBE(buffer: Buffer | Uint8Array, offset?: number): number
export function readDoubleLE(buffer: Buffer | Uint8Array, offset?: number): number
export function readFloatBE(buffer: Buffer | Uint8Array, offset?: number): number
export function readFloatLE(buffer: Buffer | Uint8Array, offset?: number): number
export function readInt32BE(buffer: Buffer | Uint8Array, offset?: number): number
export function readInt32LE(buffer: Buffer | Uint8Array, offset?: number): number
export function readUInt32BE(buffer: Buffer | Uint8Array, offset?: number): number
export function readUInt32LE(buffer: Buffer | Uint8Array, offset?: number): number

export function writeDoubleBE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeDoubleLE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeFloatBE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeFloatLE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeInt32BE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeInt32LE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeUInt32BE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
export function writeUInt32LE(buffer: Buffer | Uint8Array, value: number, offset?: number): number
