import sharp from 'sharp';
import { readFileSync } from 'fs';

const faviconSvg = readFileSync('public/favicon.svg');
const ogSvg = readFileSync('public/og-image.svg');

await sharp(faviconSvg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(faviconSvg).resize(192, 192).png().toFile('public/icon-192.png');
await sharp(faviconSvg).resize(512, 512).png().toFile('public/icon-512.png');
await sharp(faviconSvg).resize(32, 32).png().toFile('public/favicon.ico');
await sharp(ogSvg).resize(1200, 630).png().toFile('public/og-image.png');

console.log('Icons generated successfully');
