import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const size = 512; // Large size for crisp rendering

// Create a circular SVG mask
const circle = Buffer.from(
  `<svg><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" /></svg>`
);

const inputPath = './public/Developer.png';
const outputPath = './public/favicon-round.png';

// Get image metadata to find face center (top portion of image)
const meta = await sharp(inputPath).metadata();
const { width, height } = meta;

// Crop to a square focusing on the face (top-center)
const cropSize = Math.min(width, height);
const left = Math.round((width - cropSize) / 2);
// Offset top to focus on face (roughly top 60% of image)
const top = 0;

await sharp(inputPath)
  .extract({ left, top, width: cropSize, height: cropSize })
  .resize(size, size)
  .composite([{ input: circle, blend: 'dest-in' }])
  .png()
  .toFile(outputPath);

console.log(`✅ Round favicon saved to ${outputPath} (${size}x${size}px)`);
