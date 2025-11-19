import { z } from "zod";

export const textInputSchema = z.object({
  text: z.string().min(1, "Text is required").max(1000000, "Text is too large (max 1MB)"),
});

export const findReplaceSchema = z.object({
  text: z.string().min(1, "Text is required").max(1000000, "Text is too large"),
  find: z.string().min(1, "Find text is required"),
  replace: z.string(),
  caseSensitive: z.boolean().optional().default(false),
  wholeWord: z.boolean().optional().default(false),
});

export const loremIpsumSchema = z.object({
  paragraphs: z.number().int().min(1).max(100).optional().default(3),
  wordsPerParagraph: z.number().int().min(10).max(500).optional().default(50),
});

export const passwordGeneratorSchema = z.object({
  length: z.number().int().min(4).max(128).optional().default(16),
  includeUppercase: z.boolean().optional().default(true),
  includeLowercase: z.boolean().optional().default(true),
  includeNumbers: z.boolean().optional().default(true),
  includeSymbols: z.boolean().optional().default(true),
});

export const hashInputSchema = z.object({
  text: z.string().min(1, "Text is required"),
  algorithm: z.enum(["md5", "sha1", "sha256", "sha512"]).optional().default("sha256"),
});

export const base64Schema = z.object({
  text: z.string().min(1, "Text is required"),
});

export const urlEncodeSchema = z.object({
  text: z.string().min(1, "Text is required"),
});

export const jsonFormatSchema = z.object({
  text: z.string().min(1, "JSON is required"),
  indent: z.number().int().min(0).max(8).optional().default(2),
});

export const xmlFormatSchema = z.object({
  text: z.string().min(1, "XML is required"),
  indent: z.number().int().min(0).max(8).optional().default(2),
});

export const caseConvertSchema = z.object({
  text: z.string().min(1, "Text is required").max(1000000, "Text is too large"),
  caseType: z.enum(["uppercase", "lowercase", "titlecase", "sentencecase", "camelcase", "snakecase", "kebabcase"]),
});

export const textGeneratorSchema = z.object({
  type: z.enum(["lorem", "random", "password"]),
  options: z.any().optional(),
});

export const textManipulateSchema = z.object({
  text: z.string().min(1).max(1000000),
  operation: z.enum(["remove-linebreaks", "remove-spaces", "reverse", "sort-lines", "remove-duplicates", "add-line-numbers", "find-replace"]),
  options: z.any().optional(),
});

export const encodeDecodeSchema = z.object({
  text: z.string().min(1, "Text is required"),
  type: z.enum(["base64", "url", "html"]),
  action: z.enum(["encode", "decode"]),
});

export const uuidGeneratorSchema = z.object({
  count: z.number().int().min(1).max(100).optional().default(1),
});

export const formatSchema = z.object({
  text: z.string().min(1, "Text is required").max(1000000, "Text is too large"),
  type: z.enum(["json", "xml", "html", "css"]),
  action: z.enum(["format", "minify", "validate"]).optional().default("format"),
  indent: z.number().int().min(0).max(8).optional().default(2),
});
