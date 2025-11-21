export interface ExtractionResult {
  items: string[];
  count: number;
}

export function extractEmails(text: string): ExtractionResult {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const items = text.match(emailRegex) || [];
  
  const uniqueEmails = Array.from(new Set(items));
  
  return {
    items: uniqueEmails,
    count: uniqueEmails.length
  };
}

export function extractUrls(text: string): ExtractionResult {
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,})/g;
  const items = text.match(urlRegex) || [];
  
  const uniqueUrls = Array.from(new Set(items));
  
  return {
    items: uniqueUrls,
    count: uniqueUrls.length
  };
}

export function extractPhoneNumbers(text: string): ExtractionResult {
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/g;
  const items = text.match(phoneRegex) || [];
  
  const uniquePhones = Array.from(new Set(items));
  
  return {
    items: uniquePhones,
    count: uniquePhones.length
  };
}

export function removeHtmlTags(text: string): string {
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export function extractNumbers(text: string): ExtractionResult {
  const numberRegex = /-?\d+\.?\d*/g;
  const items = text.match(numberRegex) || [];
  
  return {
    items: items,
    count: items.length
  };
}

export function extractHashtags(text: string): ExtractionResult {
  const hashtagRegex = /#[a-zA-Z0-9_]+/g;
  const items = text.match(hashtagRegex) || [];
  
  const uniqueHashtags = Array.from(new Set(items));
  
  return {
    items: uniqueHashtags,
    count: uniqueHashtags.length
  };
}

export function extractMentions(text: string): ExtractionResult {
  const mentionRegex = /@[a-zA-Z0-9_]+/g;
  const items = text.match(mentionRegex) || [];
  
  const uniqueMentions = Array.from(new Set(items));
  
  return {
    items: uniqueMentions,
    count: uniqueMentions.length
  };
}

export function textDiff(text1: string, text2: string): {
  added: string[];
  removed: string[];
  unchanged: string[];
} {
  const lines1 = text1.split('\n');
  const lines2 = text2.split('\n');
  
  const set1 = new Set(lines1);
  const set2 = new Set(lines2);
  
  const added = lines2.filter(line => !set1.has(line));
  const removed = lines1.filter(line => !set2.has(line));
  const unchanged = lines1.filter(line => set2.has(line));
  
  return {
    added,
    removed,
    unchanged
  };
}

export function calculateTextSimilarity(text1: string, text2: string): {
  similarity: number;
  method: string;
} {
  const words1 = text1.toLowerCase().split(/\s+/);
  const words2 = text2.toLowerCase().split(/\s+/);
  
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  
  const intersection = new Set(Array.from(set1).filter(x => set2.has(x)));
  const union = new Set([...Array.from(set1), ...Array.from(set2)]);
  
  const jaccardSimilarity = intersection.size / union.size;
  
  return {
    similarity: Math.round(jaccardSimilarity * 100),
    method: 'Jaccard Index'
  };
}

export function csvToJson(csvText: string, delimiter: string = ','): any[] {
  const lines = csvText.trim().split('\n');
  
  if (lines.length === 0) {
    return [];
  }
  
  const headers = lines[0].split(delimiter).map(h => h.trim());
  
  const jsonArray = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(delimiter).map(v => v.trim());
    const obj: any = {};
    
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    
    jsonArray.push(obj);
  }
  
  return jsonArray;
}

export function jsonToCsv(jsonArray: any[], delimiter: string = ','): string {
  if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
    return '';
  }
  
  const headers = Object.keys(jsonArray[0]);
  
  const csvLines = [headers.join(delimiter)];
  
  for (const obj of jsonArray) {
    const values = headers.map(header => {
      const value = obj[header]?.toString() || '';
      if (value.includes(delimiter) || value.includes('\n') || value.includes('"')) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvLines.push(values.join(delimiter));
  }
  
  return csvLines.join('\n');
}

export function removeSpecialCharacters(text: string, keepSpaces: boolean = true): string {
  if (keepSpaces) {
    return text.replace(/[^a-zA-Z0-9\s]/g, '');
  } else {
    return text.replace(/[^a-zA-Z0-9]/g, '');
  }
}

export function extractSentences(text: string): ExtractionResult {
  const sentenceRegex = /[^.!?]+[.!?]+/g;
  const items = text.match(sentenceRegex) || [];
  
  const cleanedSentences = items.map(s => s.trim());
  
  return {
    items: cleanedSentences,
    count: cleanedSentences.length
  };
}

export function extractParagraphs(text: string): ExtractionResult {
  const items = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  
  return {
    items: items.map(p => p.trim()),
    count: items.length
  };
}
