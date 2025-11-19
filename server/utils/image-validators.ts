import { z } from 'zod';

// Image format enums
const imageFormats = ['jpeg', 'png', 'webp', 'avif', 'tiff', 'gif'] as const;
const compressibleFormats = ['jpeg', 'png', 'webp'] as const;

// Common validation schemas
export const imageConversionSchema = z.object({
  toolId: z.string(),
  outputFormat: z.enum(imageFormats),
  quality: z.string().optional().transform(val => {
    if (!val) return 90;
    const num = parseInt(val);
    return isNaN(num) ? 90 : Math.max(1, Math.min(100, num));
  })
});

export const imageCompressionSchema = z.object({
  toolId: z.string(),
  quality: z.string().optional().transform(val => {
    if (!val) return 80;
    const num = parseInt(val);
    return isNaN(num) ? 80 : Math.max(1, Math.min(100, num));
  }),
  format: z.enum(compressibleFormats).optional()
});

export const imageResizeSchema = z.object({
  toolId: z.string(),
  width: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseInt(val);
    return isNaN(num) || num <= 0 ? undefined : Math.min(10000, num);
  }),
  height: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseInt(val);
    return isNaN(num) || num <= 0 ? undefined : Math.min(10000, num);
  }),
  fit: z.enum(['cover', 'contain', 'fill', 'inside', 'outside']).optional().default('cover')
});

export const imageCropSchema = z.object({
  toolId: z.string(),
  left: z.string().transform(val => {
    const num = parseInt(val);
    return isNaN(num) ? 0 : Math.max(0, num);
  }),
  top: z.string().transform(val => {
    const num = parseInt(val);
    return isNaN(num) ? 0 : Math.max(0, num);
  }),
  width: z.string().transform(val => {
    const num = parseInt(val);
    if (isNaN(num) || num <= 0) throw new Error('Width must be a positive number');
    return Math.min(10000, num);
  }),
  height: z.string().transform(val => {
    const num = parseInt(val);
    if (isNaN(num) || num <= 0) throw new Error('Height must be a positive number');
    return Math.min(10000, num);
  })
});

export const imageRotateSchema = z.object({
  toolId: z.string(),
  angle: z.string().transform(val => {
    const num = parseInt(val);
    if (isNaN(num)) return 90;
    return num % 360;
  })
});

export const imageFlipSchema = z.object({
  toolId: z.string(),
  direction: z.enum(['horizontal', 'vertical', 'both']).optional().default('horizontal')
});

export const imageFilterSchema = z.object({
  toolId: z.string(),
  sigma: z.string().optional().transform(val => {
    if (!val) return 5;
    const num = parseFloat(val);
    return isNaN(num) ? 5 : Math.max(0.3, Math.min(1000, num));
  })
});

export const imageEnhanceSchema = z.object({
  toolId: z.string(),
  brightness: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseFloat(val);
    return isNaN(num) ? undefined : Math.max(0.1, Math.min(3, num));
  }),
  saturation: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseFloat(val);
    return isNaN(num) ? undefined : Math.max(0, Math.min(3, num));
  }),
  hue: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseInt(val);
    return isNaN(num) ? undefined : num % 360;
  }),
  contrast: z.string().optional().transform(val => {
    if (!val) return undefined;
    const num = parseFloat(val);
    return isNaN(num) ? undefined : Math.max(0.1, Math.min(3, num));
  })
});

export const imageTintSchema = z.object({
  toolId: z.string(),
  r: z.string().transform(val => {
    const num = parseInt(val);
    return isNaN(num) ? 0 : Math.max(0, Math.min(255, num));
  }),
  g: z.string().transform(val => {
    const num = parseInt(val);
    return isNaN(num) ? 0 : Math.max(0, Math.min(255, num));
  }),
  b: z.string().transform(val => {
    const num = parseInt(val);
    return isNaN(num) ? 0 : Math.max(0, Math.min(255, num));
  })
});

export const imageBorderSchema = z.object({
  toolId: z.string(),
  width: z.string().transform(val => {
    const num = parseInt(val);
    if (isNaN(num) || num < 0) return 10;
    return Math.min(500, num);
  }),
  color: z.string().optional().default('#000000')
});

export const imageWatermarkSchema = z.object({
  toolId: z.string(),
  position: z.enum(['center', 'top-left', 'top-right', 'bottom-left', 'bottom-right']).optional().default('bottom-right'),
  opacity: z.string().optional().transform(val => {
    if (!val) return 0.5;
    const num = parseFloat(val);
    return isNaN(num) ? 0.5 : Math.max(0, Math.min(1, num));
  })
});

// Validation helpers
export function validateResizeOperation(toolId: string, width?: number, height?: number) {
  if (!width && !height) {
    throw new Error('At least one dimension (width or height) must be specified for resize operations');
  }
}

export function validateCropOperation(toolId: string, left: number, top: number, width: number, height: number) {
  if (width <= 0 || height <= 0) {
    throw new Error('Crop width and height must be positive numbers');
  }
}

export function validateColorValue(value: number, name: string) {
  if (value < 0 || value > 255) {
    throw new Error(`${name} must be between 0 and 255`);
  }
}
