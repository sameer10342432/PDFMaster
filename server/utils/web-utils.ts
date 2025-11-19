// Web & SEO Utilities

// URL Utilities
export function parseURL(url: string): {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  params: Record<string, string>;
} {
  try {
    const parsed = new URL(url);
    const params: Record<string, string> = {};
    
    parsed.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    
    return {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      params
    };
  } catch (error) {
    throw new Error('Invalid URL');
  }
}

export function buildURL(base: string, params: Record<string, string>): string {
  const url = new URL(base);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export function shortenURL(longURL: string): string {
  // Simple hash-based shortener (in real app, would store in database)
  const hash = Buffer.from(longURL).toString('base64').substring(0, 8);
  return `https://short.link/${hash}`;
}

// Color Utilities
export function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Invalid hex color');
  
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function hexToHSL(hex: string): { h: number; s: number; l: number } {
  const rgb = hexToRGB(hex);
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function generateColorPalette(baseColor: string, count: number = 5): string[] {
  const hsl = hexToHSL(baseColor);
  const palette: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const newHue = (hsl.h + (360 / count) * i) % 360;
    palette.push(`hsl(${newHue}, ${hsl.s}%, ${hsl.l}%)`);
  }
  
  return palette;
}

// CSS Utilities
export function generateBoxShadow(options: {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  inset?: boolean;
}): string {
  const { x, y, blur, spread, color, inset = false } = options;
  return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

export function generateGradient(type: 'linear' | 'radial', colors: string[], angle: number = 90): string {
  const colorStops = colors.join(', ');
  
  if (type === 'linear') {
    return `linear-gradient(${angle}deg, ${colorStops})`;
  } else {
    return `radial-gradient(circle, ${colorStops})`;
  }
}

export function generateBorderRadius(radius: number | { tl: number; tr: number; br: number; bl: number }): string {
  if (typeof radius === 'number') {
    return `${radius}px`;
  }
  return `${radius.tl}px ${radius.tr}px ${radius.br}px ${radius.bl}px`;
}

// Unit Converters
export function pxToRem(px: number, baseFontSize: number = 16): number {
  return px / baseFontSize;
}

export function remToPx(rem: number, baseFontSize: number = 16): number {
  return rem * baseFontSize;
}

export function pxToEm(px: number, parentFontSize: number = 16): number {
  return px / parentFontSize;
}

export function emToPx(em: number, parentFontSize: number = 16): number {
  return em * parentFontSize;
}

// SEO Meta Tag Generator
export function generateMetaTags(options: {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}): string {
  const { title, description, keywords, author, ogImage, ogUrl, twitterCard = 'summary_large_image' } = options;
  
  let tags = `<title>${title}</title>\n`;
  tags += `<meta name="description" content="${description}">\n`;
  
  if (keywords && keywords.length > 0) {
    tags += `<meta name="keywords" content="${keywords.join(', ')}">\n`;
  }
  
  if (author) {
    tags += `<meta name="author" content="${author}">\n`;
  }
  
  // Open Graph
  tags += `<meta property="og:title" content="${title}">\n`;
  tags += `<meta property="og:description" content="${description}">\n`;
  
  if (ogImage) {
    tags += `<meta property="og:image" content="${ogImage}">\n`;
  }
  
  if (ogUrl) {
    tags += `<meta property="og:url" content="${ogUrl}">\n`;
  }
  
  // Twitter
  tags += `<meta name="twitter:card" content="${twitterCard}">\n`;
  tags += `<meta name="twitter:title" content="${title}">\n`;
  tags += `<meta name="twitter:description" content="${description}">\n`;
  
  if (ogImage) {
    tags += `<meta name="twitter:image" content="${ogImage}">\n`;
  }
  
  return tags;
}

// Sitemap Generator
export function generateSitemap(urls: Array<{
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}>): string {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    if (url.changefreq) sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    if (url.priority !== undefined) sitemap += `    <priority>${url.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

// Robots.txt Generator
export function generateRobotsTxt(options: {
  userAgent?: string;
  allow?: string[];
  disallow?: string[];
  sitemap?: string;
}): string {
  const { userAgent = '*', allow = [], disallow = [], sitemap } = options;
  
  let robots = `User-agent: ${userAgent}\n`;
  
  allow.forEach(path => {
    robots += `Allow: ${path}\n`;
  });
  
  disallow.forEach(path => {
    robots += `Disallow: ${path}\n`;
  });
  
  if (sitemap) {
    robots += `\nSitemap: ${sitemap}\n`;
  }
  
  return robots;
}

// JSON-LD Schema Generator
export function generateJSONLD(type: string, data: Record<string, any>): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(schema, null, 2);
}

// Hash Generators
export function generateMD5(text: string): string {
  const crypto = require('crypto');
  return crypto.createHash('md5').update(text).digest('hex');
}

export function generateSHA256(text: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(text).digest('hex');
}

// QR Code Data (placeholder - would use a QR library in production)
export function generateQRCodeData(text: string, size: number = 200): {
  data: string;
  size: number;
} {
  return {
    data: text,
    size
  };
}

// Calculators
export function calculatePercentage(value: number, total: number): number {
  return (value / total) * 100;
}

export function calculateDiscount(originalPrice: number, discountPercent: number): {
  discountAmount: number;
  finalPrice: number;
} {
  const discountAmount = (originalPrice * discountPercent) / 100;
  return {
    discountAmount,
    finalPrice: originalPrice - discountAmount
  };
}

export function calculateTip(billAmount: number, tipPercent: number, splitBy: number = 1): {
  tipAmount: number;
  totalAmount: number;
  perPerson: number;
} {
  const tipAmount = (billAmount * tipPercent) / 100;
  const totalAmount = billAmount + tipAmount;
  const perPerson = totalAmount / splitBy;
  
  return {
    tipAmount,
    totalAmount,
    perPerson
  };
}

// Time & Date Utilities
export function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

export function calculateDaysBetween(date1: string, date2: string): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}
