/**
 * Преобразует строку в заглавный регистр (каждое слово с большой буквы)
 * @param {string} str - входная строка
 * @returns {string} преобразованная строка
 */
export function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой')
  }
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Переворачивает строку
 * @param {string} str - входная строка
 * @returns {string} перевернутая строка
 */
export function reverse(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой')
  }
  return str.split('').reverse().join('')
}

/**
 * Подсчитывает количество слов в строке
 * @param {string} str - входная строка
 * @returns {number} количество слов
 */
export function wordCount(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Аргумент должен быть строкой')
  }
  const trimmed = str.trim()
  if (trimmed === '') {
    return 0
  }
  return trimmed.split(/\s+/).length
}
