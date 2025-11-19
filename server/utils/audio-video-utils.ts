import ffmpeg from 'fluent-ffmpeg';
import { parseBuffer } from 'music-metadata';
import { PassThrough, Readable } from 'stream';

// Helper function to convert buffer to stream
function bufferToStream(buffer: Buffer): Readable {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

// Helper function to process with ffmpeg and return buffer
async function processFFmpeg(
  inputBuffer: Buffer,
  outputFormat: string,
  options?: (command: ffmpeg.FfmpegCommand) => ffmpeg.FfmpegCommand
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const outputStream = new PassThrough();

    outputStream.on('data', (chunk) => chunks.push(chunk));
    outputStream.on('end', () => resolve(Buffer.concat(chunks)));

    let command = ffmpeg(bufferToStream(inputBuffer))
      .format(outputFormat)
      .on('error', reject);

    if (options) {
      command = options(command);
    }

    command.pipe(outputStream, { end: true });
  });
}

// ========================================
// AUDIO CONVERSION
// ========================================

export async function convertAudioToMP3(inputBuffer: Buffer, bitrate: string = '192k'): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'mp3', (cmd) =>
    cmd.audioBitrate(bitrate).audioCodec('libmp3lame')
  );
}

export async function convertAudioToWAV(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'wav', (cmd) =>
    cmd.audioCodec('pcm_s16le').audioChannels(2).audioFrequency(44100)
  );
}

export async function convertAudioToAAC(inputBuffer: Buffer, bitrate: string = '192k'): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'aac', (cmd) =>
    cmd.audioBitrate(bitrate).audioCodec('aac')
  );
}

export async function convertAudioToFLAC(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'flac', (cmd) =>
    cmd.audioCodec('flac')
  );
}

export async function convertAudioToOGG(inputBuffer: Buffer, quality: number = 5): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'ogg', (cmd) =>
    cmd.audioCodec('libvorbis').audioQuality(quality)
  );
}

export async function convertAudioToM4A(inputBuffer: Buffer, bitrate: string = '192k'): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'ipod', (cmd) =>
    cmd.audioBitrate(bitrate).audioCodec('aac')
  );
}

export async function convertAudioToWMA(inputBuffer: Buffer, bitrate: string = '192k'): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'asf', (cmd) =>
    cmd.audioBitrate(bitrate).audioCodec('wmav2')
  );
}

export async function convertAudioToAIFF(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'aiff', (cmd) =>
    cmd.audioCodec('pcm_s16be')
  );
}

// ========================================
// VIDEO CONVERSION
// ========================================

export async function convertVideoToMP4(inputBuffer: Buffer, quality: string = 'medium'): Promise<Buffer> {
  const crf = quality === 'high' ? '18' : quality === 'medium' ? '23' : '28';
  return processFFmpeg(inputBuffer, 'mp4', (cmd) =>
    cmd.videoCodec('libx264').audioCodec('aac').outputOptions([`-crf ${crf}`, '-preset medium'])
  );
}

export async function convertVideoToAVI(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'avi', (cmd) =>
    cmd.videoCodec('mpeg4').audioCodec('libmp3lame')
  );
}

export async function convertVideoToMOV(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'mov', (cmd) =>
    cmd.videoCodec('libx264').audioCodec('aac')
  );
}

export async function convertVideoToWebM(inputBuffer: Buffer, quality: string = 'medium'): Promise<Buffer> {
  const crf = quality === 'high' ? '10' : quality === 'medium' ? '20' : '30';
  return processFFmpeg(inputBuffer, 'webm', (cmd) =>
    cmd.videoCodec('libvpx-vp9').audioCodec('libvorbis').outputOptions([`-crf ${crf}`, '-b:v 0'])
  );
}

export async function convertVideoToMKV(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'matroska', (cmd) =>
    cmd.videoCodec('libx264').audioCodec('aac')
  );
}

export async function convertVideoToFLV(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'flv', (cmd) =>
    cmd.videoCodec('libx264').audioCodec('aac')
  );
}

export async function convertVideoToMPEG(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'mpeg', (cmd) =>
    cmd.videoCodec('mpeg2video').audioCodec('mp2')
  );
}

export async function convertVideoToWMV(inputBuffer: Buffer): Promise<Buffer> {
  return processFFmpeg(inputBuffer, 'asf', (cmd) =>
    cmd.videoCodec('wmv2').audioCodec('wmav2')
  );
}

// ========================================
// VIDEO-TO-AUDIO EXTRACTION
// ========================================

export async function extractAudioFromVideo(inputBuffer: Buffer, format: string = 'mp3', bitrate: string = '192k'): Promise<Buffer> {
  const formatMap: { [key: string]: string } = {
    'mp3': 'mp3',
    'wav': 'wav',
    'aac': 'aac',
    'flac': 'flac',
    'ogg': 'ogg',
    'm4a': 'ipod'
  };

  return processFFmpeg(inputBuffer, formatMap[format] || 'mp3', (cmd) =>
    cmd.noVideo().audioBitrate(bitrate)
  );
}

// ========================================
// AUDIO EDITING
// ========================================

export async function trimAudio(
  inputBuffer: Buffer,
  startTime: string,
  duration: string,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.setStartTime(startTime).setDuration(duration)
  );
}

export async function adjustAudioVolume(
  inputBuffer: Buffer,
  volumeMultiplier: number,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`volume=${volumeMultiplier}`)
  );
}

export async function normalizeAudio(
  inputBuffer: Buffer,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters('loudnorm')
  );
}

export async function fadeInAudio(
  inputBuffer: Buffer,
  duration: number,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`afade=t=in:st=0:d=${duration}`)
  );
}

export async function fadeOutAudio(
  inputBuffer: Buffer,
  startTime: number,
  duration: number,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`afade=t=out:st=${startTime}:d=${duration}`)
  );
}

export async function changeAudioSpeed(
  inputBuffer: Buffer,
  speed: number,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`atempo=${speed}`)
  );
}

export async function changePitch(
  inputBuffer: Buffer,
  semitones: number,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  const cents = semitones * 100;
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`asetrate=44100*2^(${cents}/1200),aresample=44100`)
  );
}

export async function reverseAudio(
  inputBuffer: Buffer,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters('areverse')
  );
}

// ========================================
// VIDEO EDITING
// ========================================

export async function trimVideo(
  inputBuffer: Buffer,
  startTime: string,
  duration: string,
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.setStartTime(startTime).setDuration(duration)
  );
}

export async function compressVideo(
  inputBuffer: Buffer,
  quality: 'low' | 'medium' | 'high' = 'medium'
): Promise<Buffer> {
  const crf = quality === 'high' ? '23' : quality === 'medium' ? '28' : '35';
  const preset = quality === 'high' ? 'slow' : 'medium';
  
  return processFFmpeg(inputBuffer, 'mp4', (cmd) =>
    cmd.videoCodec('libx264').audioCodec('aac').outputOptions([`-crf ${crf}`, `-preset ${preset}`])
  );
}

export async function resizeVideo(
  inputBuffer: Buffer,
  width: number,
  height: number,
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.size(`${width}x${height}`)
  );
}

export async function changeVideoSpeed(
  inputBuffer: Buffer,
  speed: number,
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.videoFilters(`setpts=${1/speed}*PTS`).audioFilters(`atempo=${speed}`)
  );
}

export async function rotateVideo(
  inputBuffer: Buffer,
  angle: 90 | 180 | 270,
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  const transposeMap: { [key: number]: string } = {
    90: 'transpose=1',
    180: 'transpose=2,transpose=2',
    270: 'transpose=2'
  };
  
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.videoFilters(transposeMap[angle])
  );
}

export async function flipVideo(
  inputBuffer: Buffer,
  direction: 'horizontal' | 'vertical',
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  const filter = direction === 'horizontal' ? 'hflip' : 'vflip';
  
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.videoFilters(filter)
  );
}

export async function addWatermarkToVideo(
  inputBuffer: Buffer,
  watermarkBuffer: Buffer,
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' = 'bottom-right',
  outputFormat: string = 'mp4'
): Promise<Buffer> {
  const positionMap: { [key: string]: string } = {
    'top-left': '10:10',
    'top-right': 'W-w-10:10',
    'bottom-left': '10:H-h-10',
    'bottom-right': 'W-w-10:H-h-10',
    'center': '(W-w)/2:(H-h)/2'
  };
  
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const outputStream = new PassThrough();

    outputStream.on('data', (chunk) => chunks.push(chunk));
    outputStream.on('end', () => resolve(Buffer.concat(chunks)));

    ffmpeg(bufferToStream(inputBuffer))
      .input(bufferToStream(watermarkBuffer))
      .complexFilter([
        `[1:v]scale=100:100[watermark]`,
        `[0:v][watermark]overlay=${positionMap[position]}`
      ])
      .format(outputFormat)
      .on('error', reject)
      .pipe(outputStream, { end: true });
  });
}

// ========================================
// AUDIO METADATA
// ========================================

export async function getAudioMetadata(inputBuffer: Buffer) {
  try {
    const metadata = await parseBuffer(inputBuffer);
    return {
      format: metadata.format.container,
      duration: metadata.format.duration,
      bitrate: metadata.format.bitrate,
      sampleRate: metadata.format.sampleRate,
      channels: metadata.format.numberOfChannels,
      codec: metadata.format.codec,
      title: metadata.common.title,
      artist: metadata.common.artist,
      album: metadata.common.album,
      year: metadata.common.year,
      genre: metadata.common.genre
    };
  } catch (error) {
    throw new Error(`Failed to read audio metadata: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// ========================================
// AUDIO EFFECTS
// ========================================

export async function addReverbToAudio(
  inputBuffer: Buffer,
  roomSize: number = 50,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`aecho=0.8:0.88:${roomSize}:0.4`)
  );
}

export async function addEchoToAudio(
  inputBuffer: Buffer,
  delay: number = 1000,
  decay: number = 0.5,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters(`aecho=1:0.7:${delay}:${decay}`)
  );
}

export async function applyEqualizerToAudio(
  inputBuffer: Buffer,
  bass: number = 0,
  mid: number = 0,
  treble: number = 0,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters([
      `equalizer=f=100:width_type=o:width=2:g=${bass}`,
      `equalizer=f=1000:width_type=o:width=2:g=${mid}`,
      `equalizer=f=10000:width_type=o:width=2:g=${treble}`
    ].join(','))
  );
}

export async function removeNoiseFromAudio(
  inputBuffer: Buffer,
  outputFormat: string = 'mp3'
): Promise<Buffer> {
  return processFFmpeg(inputBuffer, outputFormat, (cmd) =>
    cmd.audioFilters('highpass=f=200,lowpass=f=3000')
  );
}
