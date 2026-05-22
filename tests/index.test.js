import { describe, it, expect } from 'vitest'
import { capitalize, reverse, wordCount } from '../src/index.js'

describe('capitalize', () => {
  it('должна делать первую букву каждого слова заглавной', () => {
    expect(capitalize('hello world')).toBe('Hello World')
  })

  it('должна приводить остальные буквы к нижнему регистру', () => {
    expect(capitalize('hELLO wORLD')).toBe('Hello World')
  })

  it('должна работать с одним словом', () => {
    expect(capitalize('javascript')).toBe('Javascript')
  })

  it('должна выбрасывать ошибку для нестроковых аргументов', () => {
    expect(() => capitalize(123)).toThrow(TypeError)
    expect(() => capitalize(null)).toThrow(TypeError)
    expect(() => capitalize(undefined)).toThrow(TypeError)
  })
})

describe('reverse', () => {
  it('должна переворачивать строку', () => {
    expect(reverse('hello')).toBe('olleh')
  })

  it('должна работать со строкой из одного символа', () => {
    expect(reverse('a')).toBe('a')
  })

  it('должна работать с пустой строкой', () => {
    expect(reverse('')).toBe('')
  })

  it('должна выбрасывать ошибку для нестроковых аргументов', () => {
    expect(() => reverse(123)).toThrow(TypeError)
  })
})

describe('wordCount', () => {
  it('должна считать количество слов в строке', () => {
    expect(wordCount('hello world')).toBe(2)
  })

  it('должна возвращать 0 для пустой строки', () => {
    expect(wordCount('')).toBe(0)
  })

  it('должна возвращать 0 для строки из пробелов', () => {
    expect(wordCount('   ')).toBe(0)
  })

  it('должна корректно обрабатывать множественные пробелы', () => {
    expect(wordCount('hello   world  again')).toBe(3)
  })

  it('должна выбрасывать ошибку для нестроковых аргументов', () => {
    expect(() => wordCount(123)).toThrow(TypeError)
  })
})
