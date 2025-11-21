import os from 'os';

export interface BrowserInfo {
  userAgent: string;
  ip?: string;
  screenWidth?: number;
  screenHeight?: number;
  language?: string;
  platform?: string;
  online?: boolean;
}

export interface WorldClockInfo {
  timezone: string;
  currentTime: string;
  offset: string;
  isDST: boolean;
}

export function getBrowserInfo(req: any): BrowserInfo {
  const userAgent = req.headers['user-agent'] || '';
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
  
  return {
    userAgent,
    ip: Array.isArray(ip) ? ip[0] : ip,
    platform: req.headers['sec-ch-ua-platform'] || 'unknown',
    language: req.headers['accept-language']?.split(',')[0] || 'unknown'
  };
}

export function getMyIP(req: any): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  return req.connection.remoteAddress || req.socket.remoteAddress || 'unknown';
}

export function getScreenResolution(width?: number, height?: number) {
  return {
    width: width || 1920,
    height: height || 1080,
    aspectRatio: width && height ? (width / height).toFixed(2) : '16:9',
    category: getScreenCategory(width, height)
  };
}

function getScreenCategory(width?: number, height?: number): string {
  if (!width || !height) return 'Unknown';
  
  const pixels = width * height;
  
  if (pixels >= 3840 * 2160) return '4K UHD';
  if (pixels >= 2560 * 1440) return '2K QHD';
  if (pixels >= 1920 * 1080) return 'Full HD';
  if (pixels >= 1280 * 720) return 'HD';
  return 'SD';
}

export function getWorldClock(timezone?: string): WorldClockInfo {
  const tz = timezone || 'UTC';
  const now = new Date();
  
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    
    const currentTime = formatter.format(now);
    const offset = getTimezoneOffset(tz);
    
    return {
      timezone: tz,
      currentTime,
      offset,
      isDST: isDaylightSavingTime(tz)
    };
  } catch (error) {
    throw new Error(`Invalid timezone: ${tz}`);
  }
}

function getTimezoneOffset(timezone: string): string {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  const offset = (tzDate.getTime() - utcDate.getTime()) / 1000 / 60 / 60;
  
  const sign = offset >= 0 ? '+' : '-';
  const hours = Math.floor(Math.abs(offset));
  const minutes = Math.abs((offset % 1) * 60);
  
  return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function isDaylightSavingTime(timezone: string): boolean {
  const now = new Date();
  const jan = new Date(now.getFullYear(), 0, 1);
  const jul = new Date(now.getFullYear(), 6, 1);
  
  const janOffset = new Date(jan.toLocaleString('en-US', { timeZone: timezone })).getTimezoneOffset();
  const julOffset = new Date(jul.toLocaleString('en-US', { timeZone: timezone })).getTimezoneOffset();
  const nowOffset = new Date(now.toLocaleString('en-US', { timeZone: timezone })).getTimezoneOffset();
  
  return nowOffset < Math.max(janOffset, julOffset);
}

export function checkHttpStatus(url: string): Promise<{ status: number; statusText: string; time: number }> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const https = require('https');
    const http = require('http');
    
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res: any) => {
      resolve({
        status: res.statusCode,
        statusText: res.statusMessage,
        time: Date.now() - startTime
      });
      res.resume();
    }).on('error', (error: Error) => {
      reject(error);
    });
  });
}

export function validateEmail(email: string): { valid: boolean; reason?: string } {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { valid: false, reason: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { valid: false, reason: 'Invalid email format' };
  }
  
  const [local, domain] = email.split('@');
  
  if (local.length > 64) {
    return { valid: false, reason: 'Local part too long (max 64 characters)' };
  }
  
  if (domain.length > 255) {
    return { valid: false, reason: 'Domain too long (max 255 characters)' };
  }
  
  return { valid: true };
}

export function validateIBAN(iban: string): { valid: boolean; country?: string; reason?: string } {
  const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]+$/;
  const cleanIban = iban.replace(/\s/g, '').toUpperCase();
  
  if (!ibanRegex.test(cleanIban)) {
    return { valid: false, reason: 'Invalid IBAN format' };
  }
  
  const rearranged = cleanIban.slice(4) + cleanIban.slice(0, 4);
  const numericIban = rearranged.replace(/[A-Z]/g, (char) => 
    String(char.charCodeAt(0) - 55)
  );
  
  const mod = BigInt(numericIban) % BigInt(97);
  
  if (mod !== BigInt(1)) {
    return { valid: false, reason: 'IBAN checksum validation failed' };
  }
  
  return { 
    valid: true,
    country: cleanIban.slice(0, 2)
  };
}
