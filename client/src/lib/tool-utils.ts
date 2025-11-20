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
  
  if (lowerCategory.includes('text') || lowerCategory.includes('code')) {
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
  // Image tools
  if (toolId.includes('compress') && toolType === 'image') {
    return '/api/image/compress';
  }
  if (toolId.includes('resize') && toolType === 'image') {
    return '/api/image/resize';
  }
  if (toolId.includes('crop') && toolType === 'image') {
    return '/api/image/crop';
  }
  if ((toolId.includes('convert') || toolId.includes('to-')) && toolType === 'image') {
    return '/api/image/convert';
  }
  if ((toolId.includes('rotate') || toolId.includes('flip') || toolId.includes('mirror')) && toolType === 'image') {
    return '/api/image/transform';
  }
  if ((toolId.includes('filter') || toolId.includes('effect') || toolId.includes('grayscale') || toolId.includes('sepia') || toolId.includes('blur')) && toolType === 'image') {
    return '/api/image/filter';
  }
  if ((toolId.includes('brightness') || toolId.includes('contrast') || toolId.includes('saturation') || toolId.includes('enhance')) && toolType === 'image') {
    return '/api/image/enhance';
  }
  if (toolId.includes('tint') && toolType === 'image') {
    return '/api/image/tint';
  }
  if (toolId.includes('border') && toolType === 'image') {
    return '/api/image/border';
  }
  if (toolId.includes('watermark') && toolType === 'image') {
    return '/api/image/watermark';
  }
  
  // Video tools
  if (toolId.includes('convert') && toolType === 'video') {
    return '/api/video/convert';
  }
  if ((toolId.includes('trim') || toolId.includes('cut') || toolId.includes('compress') || toolId.includes('resize') || toolId.includes('speed') || toolId.includes('rotate') || toolId.includes('flip')) && toolType === 'video') {
    return '/api/video/edit';
  }
  if (toolId.includes('extract-audio') || toolId.includes('video-to-audio')) {
    return '/api/video/extract-audio';
  }
  
  // Audio tools
  if (toolId.includes('convert') && toolType === 'audio') {
    return '/api/audio/convert';
  }
  if ((toolId.includes('trim') || toolId.includes('cut') || toolId.includes('volume') || toolId.includes('normalize') || toolId.includes('fade') || toolId.includes('speed') || toolId.includes('pitch') || toolId.includes('reverse')) && toolType === 'audio') {
    return '/api/audio/edit';
  }
  if ((toolId.includes('reverb') || toolId.includes('echo') || toolId.includes('equalizer') || toolId.includes('noise')) && toolType === 'audio') {
    return '/api/audio/effects';
  }
  if (toolId.includes('metadata') && toolType === 'audio') {
    return '/api/audio/metadata';
  }
  
  // Default: PDF processing
  return '/api/process-pdf';
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
      maxFiles: 10,
    },
    video: {
      acceptedFileTypes: '.mp4,.avi,.mov,.wmv,.flv,.mkv,.webm,video/*',
      uploadLabel: 'Video Files',
      processingEndpoint: '/api/video/convert',
      outputFileExtension: 'mp4',
      maxFiles: 5,
    },
    audio: {
      acceptedFileTypes: '.mp3,.wav,.ogg,.flac,.aac,.m4a,.wma,.aiff,audio/*',
      uploadLabel: 'Audio Files',
      processingEndpoint: '/api/audio/convert',
      outputFileExtension: 'mp3',
      maxFiles: 10,
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
