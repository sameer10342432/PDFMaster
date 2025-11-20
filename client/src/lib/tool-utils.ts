// Utility functions for tool handling

export type ToolType = 'pdf' | 'image' | 'video' | 'audio' | 'text' | 'qr' | 'web' | 'archive' | 'other';

export interface ToolConfig {
  acceptedFileTypes: string;
  uploadLabel: string;
  processingEndpoint: string;
  outputFileExtension: string;
  maxFiles: number;
}

// Determine tool type from category and toolId
export function getToolType(category: string, toolId?: string): ToolType {
  const lowerCategory = category.toLowerCase();
  const lowerToolId = toolId?.toLowerCase() || '';
  
  // Check toolId first for PDF tools - many PDF tools have category names like "Merge & Combine" that don't contain "pdf"
  if (lowerToolId.includes('pdf') || lowerToolId.includes('-pdf-')) {
    return 'pdf';
  }
  
  // Special cases: Video-to-X converters (input is video, even if category says audio/image)
  // Handles: video-to-mp3, mp4-to-mp3, avi-to-wav, mkv-to-audio, etc.
  const videoFormats = ['video', 'mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv', 'webm', 'm4v', 'mpg', 'mpeg'];
  const isVideoToAudioConverter = videoFormats.some(format => 
    lowerToolId.startsWith(`${format}-to-`) || lowerToolId.includes(`${format}-to-mp3`) || lowerToolId.includes(`${format}-to-wav`)
  );
  
  if (isVideoToAudioConverter || 
      lowerToolId.includes('extract-audio-from-video') ||
      lowerToolId.includes('remove-audio-from-video') ||
      lowerToolId.includes('add-audio-to-video') ||
      lowerToolId.includes('mute-video')) {
    return 'video';
  }
  
  // GIF tools - check if converting TO/FROM GIF
  if (lowerCategory.includes('gif')) {
    // If converting TO GIF from video, input is video
    if (lowerToolId.includes('video-to-gif') || lowerToolId.includes('mp4-to-gif')) {
      return 'video';
    }
    // If converting FROM GIF to video, input is GIF (image)
    if (lowerToolId.includes('gif-to-mp4') || lowerToolId.includes('gif-to-video')) {
      return 'image';
    }
    // Default GIF tools to image
    return 'image';
  }
  
  if (lowerCategory.includes('pdf') || lowerCategory.includes('document')) {
    return 'pdf';
  }
  
  if (lowerCategory.includes('image') || lowerCategory.includes('photo') || lowerCategory.includes('picture') || lowerCategory.includes('icon')) {
    return 'image';
  }
  
  if (lowerCategory.includes('video') || lowerCategory.includes('movie') || lowerCategory.includes('mp4') || lowerCategory.includes('avi')) {
    return 'video';
  }
  
  if (lowerCategory.includes('audio') || lowerCategory.includes('music') || lowerCategory.includes('sound') || lowerCategory.includes('voice')) {
    return 'audio';
  }
  
  if (lowerCategory.includes('text') || lowerCategory.includes('code') || lowerCategory.includes('encoding') || lowerCategory.includes('decoding')) {
    return 'text';
  }
  
  if (lowerCategory.includes('qr')) {
    return 'qr';
  }
  
  if (lowerCategory.includes('archive') || lowerCategory.includes('zip') || lowerCategory.includes('compression')) {
    return 'archive';
  }
  
  if (lowerCategory.includes('web') || lowerCategory.includes('seo') || lowerCategory.includes('color') || lowerCategory.includes('css') || lowerCategory.includes('calculator') || lowerCategory.includes('converter') || lowerCategory.includes('unit')) {
    return 'web';
  }
  
  return 'other';
}

// Get endpoint from tool ID and type
export function getProcessingEndpoint(toolId: string, toolType: ToolType): string {
  const lowerToolId = toolId.toLowerCase();
  
  // ========================================
  // IMAGE TOOLS
  // ========================================
  if (toolType === 'image') {
    if (lowerToolId.includes('image-to-text') || lowerToolId.includes('extract-text')) {
      return '/api/image/ocr';
    }
    if (lowerToolId.includes('compress')) {
      return '/api/image/compress';
    }
    if (lowerToolId.includes('resize')) {
      return '/api/image/resize';
    }
    if (lowerToolId.includes('crop')) {
      return '/api/image/crop';
    }
    if (lowerToolId.includes('convert') || lowerToolId.includes('to-')) {
      return '/api/image/convert';
    }
    if (lowerToolId.includes('rotate') || lowerToolId.includes('flip') || lowerToolId.includes('mirror')) {
      return '/api/image/transform';
    }
    if (lowerToolId.includes('sharpen') || lowerToolId.includes('brightness') || lowerToolId.includes('contrast') || lowerToolId.includes('saturation') || lowerToolId.includes('enhance')) {
      return '/api/image/enhance';
    }
    if (lowerToolId.includes('invert') || lowerToolId.includes('filter') || lowerToolId.includes('effect') || lowerToolId.includes('grayscale') || lowerToolId.includes('sepia') || lowerToolId.includes('blur')) {
      return '/api/image/filter';
    }
    if (lowerToolId.includes('tint')) {
      return '/api/image/tint';
    }
    if (lowerToolId.includes('border')) {
      return '/api/image/border';
    }
    if (lowerToolId.includes('watermark')) {
      return '/api/image/watermark';
    }
    return '/api/image/convert';
  }
  
  // ========================================
  // VIDEO TOOLS
  // ========================================
  if (toolType === 'video') {
    // Video to audio extraction
    if (lowerToolId.includes('extract-audio') || lowerToolId.includes('video-to-audio') || lowerToolId.includes('video-to-mp3') || lowerToolId.includes('mp4-to-mp3') || lowerToolId.includes('avi-to-mp3') || lowerToolId.includes('mov-to-mp3') || lowerToolId.includes('mkv-to-mp3')) {
      return '/api/video/extract-audio';
    }
    // Video format conversion
    if (lowerToolId.includes('convert') || lowerToolId.includes('-to-mp4') || lowerToolId.includes('-to-avi') || lowerToolId.includes('-to-mov') || lowerToolId.includes('-to-mkv') || lowerToolId.includes('-to-webm') || lowerToolId.includes('-to-flv') || lowerToolId.includes('-to-mpeg')) {
      return '/api/video/convert';
    }
    // Video editing
    if (lowerToolId.includes('trim') || lowerToolId.includes('cut') || lowerToolId.includes('compress') || lowerToolId.includes('resize') || lowerToolId.includes('speed') || lowerToolId.includes('rotate') || lowerToolId.includes('flip') || lowerToolId.includes('crop') || lowerToolId.includes('join') || lowerToolId.includes('reverse')) {
      return '/api/video/edit';
    }
    return '/api/video/convert';
  }
  
  // ========================================
  // AUDIO TOOLS
  // ========================================
  if (toolType === 'audio') {
    // Audio format conversion
    if (lowerToolId.includes('convert') || lowerToolId.includes('-to-mp3') || lowerToolId.includes('-to-m4a') || lowerToolId.includes('-to-flac') || lowerToolId.includes('-to-ogg') || lowerToolId.includes('-to-aac') || lowerToolId.includes('-to-wav')) {
      return '/api/audio/convert';
    }
    // Audio editing
    if (lowerToolId.includes('trim') || lowerToolId.includes('cut') || lowerToolId.includes('volume') || lowerToolId.includes('normalize') || lowerToolId.includes('fade') || lowerToolId.includes('speed') || lowerToolId.includes('pitch') || lowerToolId.includes('reverse') || lowerToolId.includes('join')) {
      return '/api/audio/edit';
    }
    // Audio effects
    if (lowerToolId.includes('reverb') || lowerToolId.includes('echo') || lowerToolId.includes('equalizer') || lowerToolId.includes('noise')) {
      return '/api/audio/effects';
    }
    if (lowerToolId.includes('metadata')) {
      return '/api/audio/metadata';
    }
    return '/api/audio/convert';
  }
  
  // ========================================
  // PDF TOOLS
  // ========================================
  if (toolType === 'pdf') {
    // PDF merge
    if (lowerToolId.includes('merge') || lowerToolId.includes('combine') || lowerToolId.includes('join') || lowerToolId.includes('append') || lowerToolId.includes('add-pdf') || lowerToolId.includes('interleave') || lowerToolId.includes('binder')) {
      return '/api/pdf/merge';
    }
    // PDF split
    if (lowerToolId.includes('split') || lowerToolId.includes('divide') || lowerToolId.includes('break') || lowerToolId.includes('extract-pdf-pages') || lowerToolId.includes('delete-pdf-pages') || lowerToolId.includes('page-extractor')) {
      return '/api/pdf/split';
    }
    // PDF compress
    if (lowerToolId.includes('compress') || lowerToolId.includes('reduce') || lowerToolId.includes('optimize')) {
      return '/api/pdf/compress';
    }
    // PDF to Image conversions (pdf-to-jpg, pdf-to-png, pdf-to-webp, etc.)
    if (lowerToolId.startsWith('pdf-to-') && (lowerToolId.includes('jpg') || lowerToolId.includes('png') || lowerToolId.includes('bmp') || lowerToolId.includes('tiff') || lowerToolId.includes('webp') || lowerToolId.includes('svg') || lowerToolId.includes('gif') || lowerToolId.includes('images') || lowerToolId.includes('image'))) {
      return '/api/pdf/to-images';
    }
    // PDF extract images
    if (lowerToolId.includes('extract') && lowerToolId.includes('images')) {
      return '/api/pdf/to-images';
    }
    // PDF edit operations
    if (lowerToolId.includes('reorder') || lowerToolId.includes('reverse')) {
      return '/api/pdf/edit';
    }
    // PDF OCR operations
    if (lowerToolId.includes('ocr') || lowerToolId.includes('searchable') || lowerToolId.includes('scanned')) {
      if (lowerToolId.includes('searchable') || lowerToolId.includes('pdf-to-searchable')) {
        return '/api/pdf/ocr-searchable';
      }
      return '/api/pdf/ocr';
    }
    // PDF to text extraction
    if (lowerToolId.includes('pdf-to-text') || lowerToolId.includes('pdf-to-txt') || (lowerToolId.includes('extract') && lowerToolId.includes('text'))) {
      return '/api/pdf/ocr';
    }
    // PDF unlock and decrypt - CHECK FIRST before password/protect
    if (lowerToolId.includes('unlock') || lowerToolId.includes('decrypt') || lowerToolId.includes('remove-password') || lowerToolId.includes('unlocker')) {
      return '/api/pdf/decrypt';
    }
    // PDF security and password protection
    if (lowerToolId.includes('password') || lowerToolId.includes('protect') || lowerToolId.includes('encrypt') || lowerToolId.includes('secure')) {
      return '/api/pdf/encrypt';
    }
    // Unmapped PDF tool - configuration error
    console.error(`[Tool Routing] No endpoint mapping found for PDF tool: ${toolId}. Tool configuration is incomplete.`);
    return '';
  }
  
  // ========================================
  // TEXT TOOLS
  // ========================================
  if (toolType === 'text') {
    // Code formatting
    if (lowerToolId.includes('json') || lowerToolId.includes('xml') || lowerToolId.includes('html') || lowerToolId.includes('css') || lowerToolId.includes('formatter') || lowerToolId.includes('minifier') || lowerToolId.includes('beautifier')) {
      return '/api/text/format';
    }
    // Encoding/decoding - more specific matching
    if (lowerToolId.includes('base64-encode') || lowerToolId.includes('base64-decode') || lowerToolId.includes('url-encode') || lowerToolId.includes('url-decode')) {
      return '/api/text/encode';
    }
    // Case conversion
    if (lowerToolId.includes('uppercase') || lowerToolId.includes('lowercase') || lowerToolId.includes('title-case') || lowerToolId.includes('sentence-case') || lowerToolId.includes('case-converter')) {
      return '/api/text/convert-case';
    }
    // Text generators
    if (lowerToolId.includes('lorem') || lowerToolId.includes('uuid') || lowerToolId.includes('password') || lowerToolId.includes('generator')) {
      return '/api/text/generate';
    }
    // Text analysis
    if (lowerToolId.includes('analyze') || lowerToolId.includes('count') || lowerToolId.includes('word-counter')) {
      return '/api/text/analyze';
    }
    // Text manipulation
    if (lowerToolId.includes('manipulate') || lowerToolId.includes('replace') || lowerToolId.includes('trim')) {
      return '/api/text/manipulate';
    }
    return '/api/text/format';
  }
  
  // ========================================
  // QR CODE TOOLS
  // ========================================
  if (toolType === 'qr') {
    if (lowerToolId.includes('generate') || lowerToolId.includes('create')) {
      return '/api/qr/generate';
    }
    if (lowerToolId.includes('scan') || lowerToolId.includes('read') || lowerToolId.includes('decode')) {
      return '/api/qr/read';
    }
    return '/api/qr/generate';
  }
  
  // ========================================
  // ARCHIVE TOOLS
  // ========================================
  if (toolType === 'archive') {
    // ZIP operations
    if (lowerToolId.includes('zip')) {
      if (lowerToolId.includes('extract') || lowerToolId.includes('unzip') || lowerToolId.includes('decompress')) {
        return '/api/archive/extract-zip';
      }
      if (lowerToolId.includes('create') || lowerToolId.includes('compress')) {
        return '/api/archive/create-zip';
      }
      return '/api/archive/extract-zip';
    }
    // TAR operations
    if (lowerToolId.includes('tar')) {
      if (lowerToolId.includes('extract') || lowerToolId.includes('untar') || lowerToolId.includes('decompress')) {
        return '/api/archive/extract-tar';
      }
      if (lowerToolId.includes('create') || lowerToolId.includes('compress')) {
        return '/api/archive/create-tar';
      }
      return '/api/archive/extract-tar';
    }
    // 7Z operations
    if (lowerToolId.includes('7z') || lowerToolId.includes('seven')) {
      if (lowerToolId.includes('extract') || lowerToolId.includes('un-7z') || lowerToolId.includes('decompress')) {
        return '/api/archive/extract-7z';
      }
      if (lowerToolId.includes('create') || lowerToolId.includes('compress')) {
        return '/api/archive/create-7z';
      }
      return '/api/archive/extract-7z';
    }
    // Default to ZIP if no specific format
    if (lowerToolId.includes('extract') || lowerToolId.includes('unzip') || lowerToolId.includes('decompress')) {
      return '/api/archive/extract-zip';
    }
    if (lowerToolId.includes('create') || lowerToolId.includes('compress')) {
      return '/api/archive/create-zip';
    }
    return '/api/archive/extract-zip';
  }
  
  // ========================================
  // WEB/SEO TOOLS
  // ========================================
  if (toolType === 'web') {
    if (lowerToolId.includes('color')) {
      return '/api/web/color-convert';
    }
    if (lowerToolId.includes('css')) {
      return '/api/web/css-generator';
    }
    if (lowerToolId.includes('seo') || lowerToolId.includes('meta') || lowerToolId.includes('sitemap') || lowerToolId.includes('robots')) {
      return '/api/web/seo/meta-tags';
    }
    if (lowerToolId.includes('calculator') || lowerToolId.includes('calc')) {
      return '/api/web/calculator';
    }
    if (lowerToolId.includes('convert') || lowerToolId.includes('unit')) {
      return '/api/web/convert-unit';
    }
    if (lowerToolId.includes('time') || lowerToolId.includes('date')) {
      return '/api/web/time-date';
    }
    return '/api/web/calculator';
  }
  
  // Unmapped tool - configuration error
  console.error(`[Tool Routing] No endpoint mapping found for toolId: ${toolId}, toolType: ${toolType}. Tool configuration is incomplete.`);
  return '';
}

// Get tool configuration based on type
export function getToolConfig(toolType: ToolType): ToolConfig {
  const configs: Record<ToolType, ToolConfig> = {
    pdf: {
      acceptedFileTypes: '.pdf,application/pdf',
      uploadLabel: 'PDF Files',
      processingEndpoint: '/api/process-pdf',
      outputFileExtension: 'pdf',
      maxFiles: 10,
    },
    image: {
      acceptedFileTypes: '.jpg,.jpeg,.png,.gif,.bmp,.webp,.tiff,.svg,image/*',
      uploadLabel: 'Image Files',
      processingEndpoint: '/api/image/compress',
      outputFileExtension: 'png',
      maxFiles: 1,
    },
    video: {
      acceptedFileTypes: '.mp4,.avi,.mov,.wmv,.flv,.mkv,.webm,video/*',
      uploadLabel: 'Video Files',
      processingEndpoint: '/api/video/convert',
      outputFileExtension: 'mp4',
      maxFiles: 1,
    },
    audio: {
      acceptedFileTypes: '.mp3,.wav,.ogg,.flac,.aac,.m4a,.wma,.aiff,audio/*',
      uploadLabel: 'Audio Files',
      processingEndpoint: '/api/audio/convert',
      outputFileExtension: 'mp3',
      maxFiles: 1,
    },
    archive: {
      acceptedFileTypes: '.zip,.rar,.7z,.tar,.gz',
      uploadLabel: 'Archive Files',
      processingEndpoint: '/api/archive/extract-zip',
      outputFileExtension: 'zip',
      maxFiles: 5,
    },
    text: {
      acceptedFileTypes: '.txt,.doc,.docx,.rtf,.md',
      uploadLabel: 'Text Files',
      processingEndpoint: '/api/text/convert-case',
      outputFileExtension: 'txt',
      maxFiles: 10,
    },
    qr: {
      acceptedFileTypes: '.jpg,.jpeg,.png,image/*',
      uploadLabel: 'QR Code Images',
      processingEndpoint: '/api/qr/read',
      outputFileExtension: 'png',
      maxFiles: 5,
    },
    web: {
      acceptedFileTypes: '*',
      uploadLabel: 'Files',
      processingEndpoint: '/api/web/calculator',
      outputFileExtension: 'json',
      maxFiles: 1,
    },
    other: {
      acceptedFileTypes: '*',
      uploadLabel: 'Files',
      processingEndpoint: '/api/process-pdf',
      outputFileExtension: 'pdf',
      maxFiles: 10,
    },
  };
  
  return configs[toolType];
}

// Get MIME type for file validation
export function getMimeTypesForToolType(toolType: ToolType): string[] {
  const mimeTypes: Record<ToolType, string[]> = {
    pdf: ['application/pdf'],
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/tiff', 'image/svg+xml'],
    video: ['video/mp4', 'video/avi', 'video/quicktime', 'video/x-ms-wmv', 'video/x-flv', 'video/x-matroska', 'video/webm'],
    audio: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac', 'audio/aac', 'audio/x-m4a', 'audio/x-ms-wma', 'audio/aiff'],
    archive: ['application/zip', 'application/x-rar-compressed', 'application/x-7z-compressed', 'application/x-tar', 'application/gzip'],
    text: ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf', 'text/markdown'],
    qr: ['image/jpeg', 'image/png'],
    web: ['*'],
    other: ['*'],
  };
  
  return mimeTypes[toolType];
}
