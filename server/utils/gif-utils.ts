import { createCanvas, loadImage } from 'canvas';
import GIFEncoder from 'gifencoder';
import sharp from 'sharp';
import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

// Create animated GIF from multiple images
export async function createGifFromImages(
  imageBuffers: Buffer[],
  options: {
    delay?: number; // Delay between frames in milliseconds
    repeat?: number; // 0 = loop forever, -1 = no loop, n = loop n times
    quality?: number; // 1-20, where 1 is best quality
    width?: number;
    height?: number;
  } = {}
): Promise<Buffer> {
  const {
    delay = 500,
    repeat = 0,
    quality = 10,
    width: targetWidth,
    height: targetHeight
  } = options;

  if (imageBuffers.length === 0) {
    throw new Error('At least one image is required to create a GIF');
  }

  // Load first image to get dimensions
  const firstImage = await sharp(imageBuffers[0]).metadata();
  const width = targetWidth || firstImage.width || 800;
  const height = targetHeight || firstImage.height || 600;

  // Create canvas and encoder
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const encoder = new GIFEncoder(width, height);

  // Collect GIF data
  const chunks: Buffer[] = [];
  // @ts-ignore - GIFEncoder has 'on' method but types are incomplete
  encoder.on('data', (chunk: Buffer) => chunks.push(chunk));

  // Configure encoder
  encoder.start();
  encoder.setRepeat(repeat);
  encoder.setDelay(delay);
  encoder.setQuality(quality);

  // Process each image
  for (const imageBuffer of imageBuffers) {
    try {
      // Resize image to target dimensions
      const resizedBuffer = await sharp(imageBuffer)
        .resize(width, height, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .toBuffer();

      // Load image to canvas
      const img = await loadImage(resizedBuffer);
      
      // Clear canvas and draw image
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      
      // Add frame
      // @ts-ignore - Canvas context type mismatch between node-canvas and browser types
      encoder.addFrame(ctx);
    } catch (error) {
      console.error('Error processing image frame:', error);
      throw new Error(`Failed to process image frame: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  encoder.finish();

  // Wait for all chunks to be collected
  await new Promise(resolve => setTimeout(resolve, 100));

  return Buffer.concat(chunks);
}

// Optimize existing GIF
export async function optimizeGif(
  gifBuffer: Buffer,
  options: {
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
  } = {}
): Promise<Buffer> {
  const { quality = 80, maxWidth = 800, maxHeight = 600 } = options;

  // Use sharp to resize and optimize
  let image = sharp(gifBuffer, { animated: true });

  // Get metadata to check dimensions
  const metadata = await image.metadata();
  
  if (metadata.width && metadata.width > maxWidth || metadata.height && metadata.height > maxHeight) {
    image = image.resize(maxWidth, maxHeight, { fit: 'inside' });
  }

  // Convert to GIF format
  return await image
    .gif()
    .toBuffer();
}

// Convert video to GIF using FFmpeg
export async function convertVideoToGif(
  videoBuffer: Buffer,
  options: {
    startTime?: number; // in seconds
    duration?: number; // in seconds
    fps?: number; // frames per second
    width?: number;
    quality?: 'high' | 'medium' | 'low';
  } = {}
): Promise<Buffer> {
  const {
    startTime = 0,
    duration = 3,
    fps = 10,
    width = 480,
    quality = 'medium'
  } = options;

  // Create temporary files
  const tempDir = os.tmpdir();
  const inputPath = path.join(tempDir, `input-${Date.now()}.mp4`);
  const outputPath = path.join(tempDir, `output-${Date.now()}.gif`);

  try {
    // Write video buffer to temp file
    await writeFile(inputPath, videoBuffer);

    // Build FFmpeg command
    const qualityMap = {
      high: '1',
      medium: '5',
      low: '10'
    };

    const ffmpegCmd = `ffmpeg -ss ${startTime} -t ${duration} -i "${inputPath}" ` +
      `-vf "fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer:bayer_scale=${qualityMap[quality]}" ` +
      `-loop 0 "${outputPath}"`;

    // Execute FFmpeg command
    await execAsync(ffmpegCmd);

    // Read output GIF
    const { readFile } = await import('fs/promises');
    const gifBuffer = await readFile(outputPath);

    return gifBuffer;
  } catch (error) {
    console.error('Video to GIF conversion error:', error);
    throw new Error(`Failed to convert video to GIF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  } finally {
    // Cleanup temp files
    try {
      await unlink(inputPath).catch(() => {});
      await unlink(outputPath).catch(() => {});
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
  }
}

// Resize GIF
export async function resizeGif(
  gifBuffer: Buffer,
  width?: number,
  height?: number,
  fit: 'cover' | 'contain' | 'fill' | 'inside' | 'outside' = 'inside'
): Promise<Buffer> {
  return await sharp(gifBuffer, { animated: true })
    .resize(width, height, { fit })
    .gif()
    .toBuffer();
}

// Crop GIF
export async function cropGif(
  gifBuffer: Buffer,
  left: number,
  top: number,
  width: number,
  height: number
): Promise<Buffer> {
  return await sharp(gifBuffer, { animated: true })
    .extract({ left, top, width, height })
    .gif()
    .toBuffer();
}

// Rotate GIF
export async function rotateGif(gifBuffer: Buffer, angle: number): Promise<Buffer> {
  return await sharp(gifBuffer, { animated: true })
    .rotate(angle)
    .gif()
    .toBuffer();
}

// Flip/Mirror GIF
export async function flipGif(
  gifBuffer: Buffer,
  horizontal: boolean = false,
  vertical: boolean = false
): Promise<Buffer> {
  let image = sharp(gifBuffer, { animated: true });
  
  if (horizontal) image = image.flop();
  if (vertical) image = image.flip();
  
  return await image.gif().toBuffer();
}

// Reverse GIF frames
export async function reverseGif(gifBuffer: Buffer): Promise<Buffer> {
  // This requires extracting frames, reversing them, and recreating
  // For now, we'll return a basic implementation using sharp
  // A full implementation would need frame extraction
  return gifBuffer; // Placeholder - would need frame-by-frame processing
}

// Add watermark to GIF
export async function addGifWatermark(
  gifBuffer: Buffer,
  watermarkBuffer: Buffer,
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right',
  opacity: number = 0.5
): Promise<Buffer> {
  const tempDir = os.tmpdir();
  const gifPath = path.join(tempDir, `gif-${Date.now()}.gif`);
  const watermarkPath = path.join(tempDir, `watermark-${Date.now()}.png`);
  const outputPath = path.join(tempDir, `watermarked-${Date.now()}.gif`);

  try {
    // Write files to temp directory
    await writeFile(gifPath, gifBuffer);
    await writeFile(watermarkPath, watermarkBuffer);

    // Get GIF metadata to calculate watermark size and position
    const metadata = await sharp(gifBuffer).metadata();
    const gifWidth = metadata.width || 400;
    const gifHeight = metadata.height || 300;
    
    // Resize watermark to 20% of GIF width
    const watermarkWidth = Math.floor(gifWidth * 0.2);
    const resizedWatermark = await sharp(watermarkBuffer)
      .resize(watermarkWidth)
      .toBuffer();
    await writeFile(watermarkPath, resizedWatermark);
    
    // Get watermark dimensions
    const wmMetadata = await sharp(resizedWatermark).metadata();
    const wmWidth = wmMetadata.width || 50;
    const wmHeight = wmMetadata.height || 50;
    
    // Calculate overlay position for FFmpeg
    let overlayX = '10';
    let overlayY = '10';
    
    switch (position) {
      case 'center':
        overlayX = `(main_w-overlay_w)/2`;
        overlayY = `(main_h-overlay_h)/2`;
        break;
      case 'top-left':
        overlayX = '10';
        overlayY = '10';
        break;
      case 'top-right':
        overlayX = `main_w-overlay_w-10`;
        overlayY = '10';
        break;
      case 'bottom-left':
        overlayX = '10';
        overlayY = `main_h-overlay_h-10`;
        break;
      case 'bottom-right':
        overlayX = `main_w-overlay_w-10`;
        overlayY = `main_h-overlay_h-10`;
        break;
    }

    // Use FFmpeg to overlay watermark on all GIF frames
    const ffmpegCmd = `ffmpeg -i "${gifPath}" -i "${watermarkPath}" ` +
      `-filter_complex "[1:v]format=rgba,colorchannelmixer=aa=${opacity}[wm];` +
      `[0:v][wm]overlay=${overlayX}:${overlayY}:format=auto,split[s0][s1];` +
      `[s0]palettegen[p];[s1][p]paletteuse" ` +
      `"${outputPath}"`;

    await execAsync(ffmpegCmd);

    // Read output GIF
    const { readFile } = await import('fs/promises');
    const watermarkedGif = await readFile(outputPath);

    return watermarkedGif;
  } catch (error) {
    console.error('GIF watermark error:', error);
    throw new Error(`Failed to add watermark to GIF: ${error instanceof Error ? error.message : 'Unknown error'}`);
  } finally {
    // Cleanup temp files
    try {
      await unlink(gifPath).catch(() => {});
      await unlink(watermarkPath).catch(() => {});
      await unlink(outputPath).catch(() => {});
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
  }
}

// Get GIF metadata
export async function getGifMetadata(gifBuffer: Buffer) {
  const metadata = await sharp(gifBuffer, { animated: true }).metadata();
  
  return {
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    pages: metadata.pages, // Number of frames
    pageHeight: metadata.pageHeight,
    delay: metadata.delay, // Delay between frames
    loop: metadata.loop,
    size: gifBuffer.length,
    hasAlpha: metadata.hasAlpha
  };
}
