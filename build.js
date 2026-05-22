import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.join(__dirname, 'dist')

// Создаем папку dist, если её нет
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir)
}

// Копируем src/index.js в dist с дополнительной оберткой
const source = fs.readFileSync(path.join(__dirname, 'src', 'index.js'), 'utf-8')
const bundle = `// Text Utils v1.0.0
// Собрано: ${new Date().toISOString()}
'use strict';

${source}

// Экспорт для CommonJS совместимости
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { capitalize, reverse, wordCount };
}
`

fs.writeFileSync(path.join(distDir, 'index.js'), bundle)

// Создаем package.json для дистрибутива
const distPackage = {
  name: 'text-utils',
  version: '1.0.0',
  main: 'index.js',
  type: 'commonjs'
}

fs.writeFileSync(
  path.join(distDir, 'package.json'),
  JSON.stringify(distPackage, null, 2)
)

console.log('✅ Сборка завершена! Артефакты в папке dist/')
