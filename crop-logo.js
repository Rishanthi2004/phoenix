const sharp = require('sharp');
const path = require('path');

async function crop() {
  const input = path.join(__dirname, 'public', 'images', 'logo_raw.jpg');
  const metadata = await sharp(input).metadata();
  console.log('Image dimensions:', metadata.width, metadata.height);

  // The screenshot is 540x1200 or similar (9:20 ratio).
  // The logo is centered in the upper-mid portion of the screen.
  // In the screenshot: top bar is ~0-12%, header is ~12-15%, logo starts around 30% and ends around 75%.
  // Let's extract the square region where the logo box is located.
  const top = Math.round(metadata.height * 0.305);
  const height = Math.round(metadata.height * 0.445);
  const left = 0;
  const width = metadata.width;

  await sharp(input)
    .extract({ left, top, width, height })
    .toFile(path.join(__dirname, 'public', 'images', 'logo.png'));

  console.log('Cropped logo saved to public/images/logo.png');
}

crop().catch(console.error);
