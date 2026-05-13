const fs = require('fs');
const path = require('path');

function generateIcon(color, outputPath) {
  const width = 81;
  const height = 81;
  const size = width * height * 4;
  const data = Buffer.alloc(size);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      
      if (x < 20 || x >= 61 || y < 20 || y >= 61) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = 0;
      } else {
        const cx = 40.5;
        const cy = 40.5;
        const r = 20.5;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist <= r) {
          data[idx] = parseInt(color.slice(1, 3), 16);
          data[idx + 1] = parseInt(color.slice(3, 5), 16);
          data[idx + 2] = parseInt(color.slice(5, 7), 16);
          data[idx + 3] = 255;
        } else {
          data[idx] = 255;
          data[idx + 1] = 255;
          data[idx + 2] = 255;
          data[idx + 3] = 0;
        }
      }
    }
  }
  
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.from([
    0, 0, 0, 13,
    73, 72, 68, 82,
    0, 0, 0, 81,
    0, 0, 0, 81,
    8, 6, 0, 0, 0,
    0, 0, 0, 0, 0
  ]);
  
  const idat = Buffer.alloc(0);
  const iend = Buffer.from([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
  
  const png = Buffer.concat([signature, ihdr, idat, iend]);
  fs.writeFileSync(outputPath, png);
}

const imagesDir = path.join(__dirname, '../images');
generateIcon('#DDDDDD', path.join(imagesDir, 'community.png'));
generateIcon('#FF9BB3', path.join(imagesDir, 'community-active.png'));
console.log('Icons generated successfully!');