import sharp from 'sharp';

// Image Compression Utilities
export async function compressImage(
  buffer: Buffer,
  quality: number = 80,
  format?: 'jpeg' | 'png' | 'webp'
): Promise<Buffer> {
  let image = sharp(buffer);
  
  const metadata = await image.metadata();
  const outputFormat = format || metadata.format as 'jpeg' | 'png' | 'webp';
  
  switch (outputFormat) {
    case 'jpeg':
      image = image.jpeg({ quality, mozjpeg: true });
      break;
    case 'png':
      image = image.png({ quality, compressionLevel: 9 });
      break;
    case 'webp':
      image = image.webp({ quality });
      break;
  }
  
  return await image.toBuffer();
}

// Image Resize Utilities
export async function resizeImage(
  buffer: Buffer,
  width?: number,
  height?: number,
  fit: 'cover' | 'contain' | 'fill' | 'inside' | 'outside' = 'cover'
): Promise<Buffer> {
  return await sharp(buffer)
    .resize(width, height, { fit })
    .toBuffer();
}

// Image Crop Utilities
export async function cropImage(
  buffer: Buffer,
  left: number,
  top: number,
  width: number,
  height: number
): Promise<Buffer> {
  return await sharp(buffer)
    .extract({ left, top, width, height })
    .toBuffer();
}

// Image Rotation
export async function rotateImage(buffer: Buffer, angle: number): Promise<Buffer> {
  return await sharp(buffer)
    .rotate(angle)
    .toBuffer();
}

// Image Flip/Mirror
export async function flipImage(buffer: Buffer, horizontal: boolean = false, vertical: boolean = false): Promise<Buffer> {
  let image = sharp(buffer);
  
  if (horizontal) image = image.flop();
  if (vertical) image = image.flip();
  
  return await image.toBuffer();
}

// Image Format Conversion
export async function convertImageFormat(
  buffer: Buffer,
  format: 'jpeg' | 'png' | 'webp' | 'gif' | 'tiff' | 'avif'
): Promise<Buffer> {
  return await sharp(buffer)
    .toFormat(format)
    .toBuffer();
}

// Image Filters
export async function applyGrayscale(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .grayscale()
    .toBuffer();
}

export async function applyBlur(buffer: Buffer, sigma: number = 5): Promise<Buffer> {
  return await sharp(buffer)
    .blur(sigma)
    .toBuffer();
}

export async function applySharpen(buffer: Buffer, sigma: number = 2): Promise<Buffer> {
  return await sharp(buffer)
    .sharpen(sigma)
    .toBuffer();
}

export async function applyNegate(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .negate()
    .toBuffer();
}

// Image Enhancement
export async function enhanceImage(
  buffer: Buffer,
  options: {
    brightness?: number;
    saturation?: number;
    hue?: number;
    contrast?: number;
  }
): Promise<Buffer> {
  let image = sharp(buffer);
  
  if (options.brightness !== undefined || options.saturation !== undefined || options.hue !== undefined) {
    image = image.modulate({
      brightness: options.brightness,
      saturation: options.saturation,
      hue: options.hue,
    });
  }
  
  if (options.contrast !== undefined) {
    image = image.linear(options.contrast, -(128 * options.contrast) + 128);
  }
  
  return await image.toBuffer();
}

// Image Effects
export async function applyTint(buffer: Buffer, r: number, g: number, b: number): Promise<Buffer> {
  return await sharp(buffer)
    .tint({ r, g, b })
    .toBuffer();
}

// Image Border
export async function addBorder(
  buffer: Buffer,
  width: number,
  color: { r: number; g: number; b: number; alpha?: number } = { r: 0, g: 0, b: 0 }
): Promise<Buffer> {
  return await sharp(buffer)
    .extend({
      top: width,
      bottom: width,
      left: width,
      right: width,
      background: color
    })
    .toBuffer();
}

// Image Watermark
export async function addImageWatermark(
  baseBuffer: Buffer,
  watermarkBuffer: Buffer,
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right',
  opacity: number = 0.5
): Promise<Buffer> {
  const base = sharp(baseBuffer);
  const baseMetadata = await base.metadata();
  
  const watermark = sharp(watermarkBuffer)
    .resize(Math.floor((baseMetadata.width || 800) * 0.2));
  
  const watermarkMetadata = await watermark.metadata();
  
  let left = 0;
  let top = 0;
  
  if (baseMetadata.width && baseMetadata.height && watermarkMetadata.width && watermarkMetadata.height) {
    switch (position) {
      case 'center':
        left = Math.floor((baseMetadata.width - watermarkMetadata.width) / 2);
        top = Math.floor((baseMetadata.height - watermarkMetadata.height) / 2);
        break;
      case 'top-left':
        left = 10;
        top = 10;
        break;
      case 'top-right':
        left = baseMetadata.width - watermarkMetadata.width - 10;
        top = 10;
        break;
      case 'bottom-left':
        left = 10;
        top = baseMetadata.height - watermarkMetadata.height - 10;
        break;
      case 'bottom-right':
        left = baseMetadata.width - watermarkMetadata.width - 10;
        top = baseMetadata.height - watermarkMetadata.height - 10;
        break;
    }
  }
  
  const watermarkWithOpacity = await watermark
    .composite([{
      input: Buffer.from([255, 255, 255, Math.floor(opacity * 255)]),
      raw: { width: 1, height: 1, channels: 4 },
      tile: true,
      blend: 'dest-in'
    }])
    .toBuffer();
  
  return await base
    .composite([{
      input: watermarkWithOpacity,
      left,
      top
    }])
    .toBuffer();
}

// Thumbnail Generation
export async function generateThumbnail(
  buffer: Buffer,
  width: number = 200,
  height: number = 200
): Promise<Buffer> {
  return await sharp(buffer)
    .resize(width, height, { fit: 'cover' })
    .toBuffer();
}

// Image Metadata
export async function getImageMetadata(buffer: Buffer) {
  return await sharp(buffer).metadata();
}

// Image Optimization
export async function optimizeImage(buffer: Buffer): Promise<Buffer> {
  const metadata = await sharp(buffer).metadata();
  
  return await sharp(buffer)
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toBuffer();
}
