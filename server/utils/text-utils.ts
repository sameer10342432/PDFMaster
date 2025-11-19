// Text Processing Utilities

// Text Case Conversion
export function convertToUpperCase(text: string): string {
  return text.toUpperCase();
}

export function convertToLowerCase(text: string): string {
  return text.toLowerCase();
}

export function convertToTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function convertToSentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function convertToCamelCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
}

export function convertToSnakeCase(text: string): string {
  return text
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
}

export function convertToKebabCase(text: string): string {
  return text
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-');
}

// Text Generators
export function generateLoremIpsum(paragraphs: number = 1, wordsPerPara: number = 50): string {
  const loremText = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
  const words = loremText.split(' ');
  const result: string[] = [];
  
  for (let i = 0; i < paragraphs; i++) {
    const para: string[] = [];
    for (let j = 0; j < wordsPerPara; j++) {
      para.push(words[Math.floor(Math.random() * words.length)]);
    }
    result.push(para.join(' ') + '.');
  }
  
  return result.join('\n\n');
}

export function generateRandomText(length: number, includeNumbers: boolean = false, includeSpecial: boolean = false): string {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) chars += '0123456789';
  if (includeSpecial) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generatePassword(length: number = 12, options: {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
} = {}): string {
  const {
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true
  } = options;
  
  let chars = '';
  if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) chars += '0123456789';
  if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  if (chars.length === 0) chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Text Analysis
export function analyzeText(text: string): {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  averageWordLength: number;
} {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
  const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute
  const averageWordLength = charactersNoSpaces / words;
  
  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime,
    averageWordLength
  };
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

export function countCharacters(text: string, excludeSpaces: boolean = false): number {
  if (excludeSpaces) {
    return text.replace(/\s/g, '').length;
  }
  return text.length;
}

// Text Manipulation
export function removeLineBreaks(text: string): string {
  return text.replace(/\n/g, ' ').replace(/\s+/g, ' ');
}

export function removeExtraSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

export function sortLinesAlphabetically(text: string, ascending: boolean = true): string {
  const lines = text.split('\n');
  lines.sort((a, b) => ascending ? a.localeCompare(b) : b.localeCompare(a));
  return lines.join('\n');
}

export function removeDuplicateLines(text: string): string {
  const lines = text.split('\n');
  const uniqueLines = Array.from(new Set(lines));
  return uniqueLines.join('\n');
}

export function addLineNumbers(text: string, startNumber: number = 1): string {
  const lines = text.split('\n');
  return lines.map((line, index) => `${startNumber + index}. ${line}`).join('\n');
}

// Text Encoding/Decoding
export function encodeBase64(text: string): string {
  return Buffer.from(text, 'utf-8').toString('base64');
}

export function decodeBase64(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}

export function encodeURL(text: string): string {
  return encodeURIComponent(text);
}

export function decodeURL(encoded: string): string {
  return decodeURIComponent(encoded);
}

export function encodeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function decodeHTML(encoded: string): string {
  return encoded
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Text Find & Replace
export function findAndReplace(text: string, find: string, replace: string, caseSensitive: boolean = true): string {
  if (caseSensitive) {
    return text.split(find).join(replace);
  } else {
    const regex = new RegExp(find, 'gi');
    return text.replace(regex, replace);
  }
}

// Text Diff/Comparison
export function compareTexts(text1: string, text2: string): {
  similarity: number;
  differences: number;
} {
  const words1 = text1.toLowerCase().split(/\s+/);
  const words2 = text2.toLowerCase().split(/\s+/);
  
  const commonWords = words1.filter(word => words2.includes(word));
  const totalWords = Math.max(words1.length, words2.length);
  const similarity = (commonWords.length / totalWords) * 100;
  const differences = Math.abs(words1.length - words2.length);
  
  return { similarity, differences };
}

// Markdown/HTML Conversion (basic)
export function markdownToHTML(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/\n/gim, '<br>');
}

// Text Statistics
export function getWordFrequency(text: string): Map<string, number> {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const frequency = new Map<string, number>();
  
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });
  
  return frequency;
}

export function getMostCommonWords(text: string, count: number = 10): Array<{word: string, frequency: number}> {
  const frequency = getWordFrequency(text);
  return Array.from(frequency.entries())
    .map(([word, freq]) => ({ word, frequency: freq }))
    .sort((a, b) => b.frequency - a.frequency)
    .slice(0, count);
}

// Crypto & Hashing
import crypto from 'crypto';

export function generateUUID(): string {
  return crypto.randomUUID();
}

export function hashText(text: string, algorithm: 'md5' | 'sha1' | 'sha256' | 'sha512' = 'sha256'): string {
  return crypto.createHash(algorithm).update(text).digest('hex');
}

// JSON Formatting
export function formatJSON(text: string, indent: number = 2): string {
  const parsed = JSON.parse(text);
  return JSON.stringify(parsed, null, indent);
}

export function minifyJSON(text: string): string {
  const parsed = JSON.parse(text);
  return JSON.stringify(parsed);
}

export function validateJSON(text: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(text);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error instanceof Error ? error.message : 'Invalid JSON' };
  }
}

// XML Formatting
export function formatXML(text: string, indent: number = 2): string {
  const PADDING = ' '.repeat(indent);
  const reg = /(>)(<)(\/*)/g;
  let formatted = '';
  let pad = 0;

  text = text.replace(reg, '$1\n$2$3');
  const lines = text.split('\n');

  for (let line of lines) {
    let indentLevel = 0;
    if (line.match(/.+<\/\w[^>]*>$/)) {
      indentLevel = 0;
    } else if (line.match(/^<\/\w/) && pad > 0) {
      pad -= 1;
    } else if (line.match(/^<\w[^>]*[^\/]>.*$/)) {
      indentLevel = 1;
    } else {
      indentLevel = 0;
    }

    formatted += PADDING.repeat(pad) + line + '\n';
    pad += indentLevel;
  }

  return formatted.trim();
}

export function minifyXML(text: string): string {
  return text.replace(/>\s+</g, '><').trim();
}

// HTML Formatting
export function formatHTML(text: string, indent: number = 2): string {
  return formatXML(text, indent);
}

export function minifyHTML(text: string): string {
  return minifyXML(text);
}

// CSS Formatting
export function formatCSS(text: string, indent: number = 2): string {
  const PADDING = ' '.repeat(indent);
  let formatted = '';
  let pad = 0;

  text = text.replace(/\s*{\s*/g, ' {\n');
  text = text.replace(/\s*}\s*/g, '\n}\n');
  text = text.replace(/\s*;\s*/g, ';\n');

  const lines = text.split('\n').filter(line => line.trim());

  for (let line of lines) {
    line = line.trim();
    if (line.endsWith('}')) {
      pad = Math.max(0, pad - 1);
      formatted += PADDING.repeat(pad) + line + '\n';
    } else if (line.endsWith('{')) {
      formatted += PADDING.repeat(pad) + line + '\n';
      pad += 1;
    } else {
      formatted += PADDING.repeat(pad) + line + '\n';
    }
  }

  return formatted.trim();
}

export function minifyCSS(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .trim();
}
