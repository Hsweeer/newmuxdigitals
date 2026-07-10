import sharp from "sharp";

// MuxDigital-2.png: logo mark on white background, 2000x2000.
// Crop the mark region, then knock out near-white pixels to transparency.
const input = "public/MuxDigital-2.png";

const { data, info } = await sharp(input)
  .extract({ left: 760, top: 600, width: 380, height: 260 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  // luminance-based knockout of the white background
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  if (lum > 240) {
    data[i + 3] = 0;
  } else if (lum > 200) {
    data[i + 3] = Math.round(255 * (240 - lum) / 40);
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile("public/logo-mark.png");

console.log("wrote public/logo-mark.png", info.width, "x", info.height);
