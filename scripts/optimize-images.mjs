import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const images = path.join(root, "images");

await sharp(path.join(images, "fenching-hero-1920x600.jpg"))
  .webp({ quality: 82 })
  .toFile(path.join(images, "fenching-hero-1920x600.webp"));

await sharp(path.join(images, "fenching-hero-1920x600.jpg"))
  .resize(1280, 400, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile(path.join(images, "fenching-hero-1280x400.webp"));

for (const name of ["diplomat-fencing.png", "security-fencing.png"]) {
  const base = path.join(images, name.replace(/\.png$/, ""));
  await sharp(path.join(images, name))
    .webp({ quality: 85 })
    .toFile(`${base}.webp`);
  const tmp = path.join(images, `.tmp-${name}`);
  await sharp(path.join(images, name))
    .png({ compressionLevel: 9, palette: true })
    .toFile(tmp);
  await import("fs/promises").then((fs) => fs.rename(tmp, path.join(images, name)));
}

console.log("Images optimized.");
