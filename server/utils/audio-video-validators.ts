import { z } from 'zod';

// Audio conversion validation
export const audioConversionSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  outputFormat: z.enum(['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a', 'wma', 'aiff']).optional().default('mp3'),
  bitrate: z.string().regex(/^\d+k$/, 'Bitrate must be in format like "192k"').optional().default('192k'),
  quality: z.coerce.number().min(0).max(10).optional().default(5),
});

// Audio editing validation
export const audioEditingSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  startTime: z.string().regex(/^\d+(\.\d+)?$/, 'Start time must be a valid number').optional(),
  duration: z.string().regex(/^\d+(\.\d+)?$/, 'Duration must be a valid number').optional(),
  volume: z.coerce.number().min(0).max(10, 'Volume must be between 0 and 10').optional(),
  speed: z.coerce.number().min(0.5).max(2, 'Speed must be between 0.5 and 2').optional(),
  semitones: z.coerce.number().min(-12).max(12, 'Semitones must be between -12 and 12').optional(),
  outputFormat: z.enum(['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a']).optional().default('mp3'),
});

// Audio effects validation
export const audioEffectsSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  roomSize: z.coerce.number().min(0).max(100, 'Room size must be between 0 and 100').optional().default(50),
  delay: z.coerce.number().min(0).max(5000, 'Delay must be between 0 and 5000ms').optional().default(1000),
  decay: z.coerce.number().min(0).max(1, 'Decay must be between 0 and 1').optional().default(0.5),
  bass: z.coerce.number().min(-20).max(20, 'Bass must be between -20 and 20dB').optional().default(0),
  mid: z.coerce.number().min(-20).max(20, 'Mid must be between -20 and 20dB').optional().default(0),
  treble: z.coerce.number().min(-20).max(20, 'Treble must be between -20 and 20dB').optional().default(0),
  outputFormat: z.enum(['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a']).optional().default('mp3'),
});

// Video conversion validation
export const videoConversionSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  quality: z.enum(['low', 'medium', 'high']).optional().default('medium'),
  outputFormat: z.enum(['mp4', 'avi', 'mov', 'webm', 'mkv', 'flv', 'mpeg', 'asf']).optional().default('mp4'),
});

// Video editing validation
export const videoEditingSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  startTime: z.string().regex(/^\d+(\.\d+)?$/, 'Start time must be a valid number').optional(),
  duration: z.string().regex(/^\d+(\.\d+)?$/, 'Duration must be a valid number').optional(),
  width: z.coerce.number().min(1).max(7680, 'Width must be between 1 and 7680').optional(),
  height: z.coerce.number().min(1).max(4320, 'Height must be between 1 and 4320').optional(),
  speed: z.coerce.number().min(0.5).max(2, 'Speed must be between 0.5 and 2').optional(),
  angle: z.coerce.number().refine((val) => [90, 180, 270].includes(val), {
    message: 'Angle must be 90, 180, or 270',
  }).optional(),
  direction: z.enum(['horizontal', 'vertical']).optional().default('horizontal'),
  quality: z.enum(['low', 'medium', 'high']).optional().default('medium'),
  outputFormat: z.enum(['mp4', 'avi', 'mov', 'webm', 'mkv', 'flv']).optional().default('mp4'),
});

// Video-to-audio extraction validation
export const videoToAudioSchema = z.object({
  toolId: z.string().min(1, 'Tool ID is required'),
  outputFormat: z.enum(['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a']).optional().default('mp3'),
  bitrate: z.string().regex(/^\d+k$/, 'Bitrate must be in format like "192k"').optional().default('192k'),
});

// Tool-specific validation helpers
export function validateTrimOperation(toolId: string, startTime?: string, duration?: string) {
  if (toolId.includes('trim') || toolId.includes('cut') || toolId.includes('clip')) {
    if (!startTime || !duration) {
      throw new Error('Start time and duration are required for trim/cut/clip operations');
    }
  }
}

export function validateResizeOperation(toolId: string, width?: number, height?: number) {
  if (toolId.includes('resize') || toolId.includes('scale')) {
    if (!width || !height || isNaN(width) || isNaN(height)) {
      throw new Error('Valid width and height are required for resize/scale operations');
    }
  }
}

export function validateVolumeOperation(toolId: string, volume?: number) {
  if (toolId.includes('volume') || toolId.includes('increase') || toolId.includes('decrease')) {
    if (volume === undefined || isNaN(volume)) {
      throw new Error('Volume parameter is required for volume adjustment operations');
    }
  }
}

export function validateSpeedOperation(toolId: string, speed?: number) {
  if (toolId.includes('speed')) {
    if (speed === undefined || isNaN(speed)) {
      throw new Error('Speed parameter is required for speed adjustment operations');
    }
  }
}

export function validateRotateOperation(toolId: string, angle?: number) {
  if (toolId.includes('rotate')) {
    if (angle === undefined || isNaN(angle) || ![90, 180, 270].includes(angle)) {
      throw new Error('Angle must be 90, 180, or 270 for rotate operations');
    }
  }
}

export function validatePitchOperation(toolId: string, semitones?: number) {
  if (toolId.includes('pitch')) {
    if (semitones === undefined || isNaN(semitones)) {
      throw new Error('Semitones parameter is required for pitch operations');
    }
  }
}

export function validateFadeOperation(toolId: string, startTime?: number, duration?: number) {
  if (toolId.includes('fade')) {
    if (duration === undefined || isNaN(duration)) {
      throw new Error('Duration parameter is required for fade operations');
    }
    if (toolId.includes('fade-out') && (startTime === undefined || isNaN(startTime))) {
      throw new Error('Start time is required for fade-out operations');
    }
  }
}
