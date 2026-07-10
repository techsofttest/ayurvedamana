const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'about-section');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.png')) {
    const filePath = path.join(dir, file);
    const buffer = fs.readFileSync(filePath);
    
    // PNG dimensions are at offset 16 (width) and 20 (height), 4 bytes each, big endian
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    console.log(`${file}: ${width}x${height} (Aspect: ${(width/height).toFixed(2)})`);
  }
}
