const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const folder = './public/photos'

function processFolder(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processFolder(fullPath)
    } else if (entry.name.match(/\.(webp|jpg|jpeg|png)$/i)) {
      sharp(fullPath)
        .rotate()
        .withMetadata({ orientation: 8 })
        .resize({
          width: null,
          height: null,
          fastShrinkOnLoad: true,
        })
        .toSharpImage()

      // Get original dimensions then resize by 50%
      sharp(fullPath)
        .metadata()
        .then(meta => {
          return sharp(fullPath)
            .rotate()
            .withMetadata({ orientation: 1 })
            .resize(Math.round(meta.width * 0.5)) // ← 50% of original width
            .toFormat('webp', { quality: 80 })
            .toBuffer()
        })
        .then(buffer => {
          fs.writeFileSync(fullPath, buffer)
          console.log(`Fixed + resized: ${fullPath}`)
        })
        .catch(err => console.error(`Error: ${fullPath}`, err))
    }
  })
}

processFolder(folder)