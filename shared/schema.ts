import { z } from "zod";

// PDF Tool definitions with SEO metadata
export const pdfTools = [
  {
    id: "merge-pdf",
    title: "Merge PDF",
    metaTitle: "Merge PDF Files Online Free - Combine Multiple PDFs Into One",
    metaDescription: "Merge multiple PDF files into a single document online for free. Fast, secure, and easy-to-use PDF merger tool. No registration required.",
    description: "Combine multiple PDF files into a single document quickly and easily",
    icon: "merge",
    howTo: [
      "Upload your PDF files by clicking or dragging them into the upload zone",
      "Arrange the PDFs in your desired order",
      "Click 'Merge PDFs' to combine them into one file",
      "Download your merged PDF instantly"
    ],
    article: {
      title: "How to Merge PDF Files Online",
      content: `Merging PDF files is a common task for combining documents like reports, invoices, or presentations into one organized file. Our free online PDF merger makes this process simple and secure.

## Why Merge PDF Files?

Combining multiple PDFs into a single document helps you:
- Keep related documents together for easy sharing
- Reduce email attachments from multiple files to one
- Create comprehensive reports from separate sections
- Organize your digital documents efficiently

## Features of Our PDF Merger

Our tool offers professional-grade PDF merging with no cost or registration required. All files are processed securely in your browser, ensuring complete privacy. The merged document maintains the original quality and formatting of all your PDFs.

## Best Practices for Merging PDFs

When combining PDF files, ensure they are properly ordered before merging. Check that all documents are in the correct orientation and that page sizes are compatible for the best results. Our tool automatically handles different page sizes while preserving document quality.`,
      relatedTools: ["combine-pdf", "join-pdf-files", "pdf-merger"]
    }
  },
  {
    id: "combine-pdf",
    title: "Combine PDF",
    metaTitle: "Combine PDF Documents Online - Free PDF Combiner Tool",
    metaDescription: "Combine PDF documents into one file online for free. Simple, fast, and secure PDF combining tool with no file size limits. Start combining now!",
    description: "Join multiple PDF documents into one cohesive file with ease",
    icon: "layers",
    howTo: [
      "Select all PDF files you want to combine",
      "Preview and reorder your documents as needed",
      "Click 'Combine PDFs' to create your unified file",
      "Save your combined PDF to your device"
    ],
    article: {
      title: "Combine PDF Files Effortlessly",
      content: `Combining PDF documents is essential for creating unified reports, portfolios, or documentation packages. Our free online tool makes PDF combination simple and efficient.

## Benefits of Combining PDFs

Create professional document packages by combining multiple PDFs into one file. This is perfect for:
- Building comprehensive project proposals
- Creating complete training manuals
- Assembling legal document packages
- Organizing research papers and references

## Secure PDF Combination

Your privacy is our priority. All PDF files are processed securely, and we never store your documents on our servers. Files are automatically deleted after processing, ensuring your sensitive information stays private.

## Professional Results

Our PDF combiner maintains the integrity of your original documents, preserving fonts, images, links, and formatting. The resulting combined PDF is fully compatible with all PDF readers and maintains professional quality throughout.`,
      relatedTools: ["merge-pdf", "append-pdf", "merge-multiple-pdfs"]
    }
  },
  {
    id: "join-pdf-files",
    title: "Join PDF Files",
    metaTitle: "Join PDF Files Online Free - Fast PDF File Joiner",
    metaDescription: "Join PDF files together online for free. Quick and easy PDF joining tool with drag-and-drop support. No installation or signup needed.",
    description: "Seamlessly join separate PDF files into a unified document",
    icon: "link",
    howTo: [
      "Drag and drop your PDF files into the upload area",
      "Organize files in the sequence you prefer",
      "Click 'Join PDFs' to unite your documents",
      "Download your joined PDF file immediately"
    ],
    article: {
      title: "Join PDF Files in Seconds",
      content: `Joining PDF files allows you to create comprehensive documents from separate files. Whether you're compiling reports, creating portfolios, or organizing documents, our free tool makes PDF joining effortless.

## When to Join PDF Files

Joining PDFs is useful for many scenarios:
- Combining chapters of a book or thesis
- Creating complete project documentation
- Assembling multiple invoices or receipts
- Building comprehensive client presentations

## Fast and Efficient Processing

Our PDF joining tool is optimized for speed, processing multiple files in seconds. The intuitive interface makes it easy to add, remove, or reorder files before joining them together.

## Quality Preservation

When you join PDF files with our tool, the original quality is maintained. All text remains searchable, images stay sharp, and interactive elements like links and forms continue to work perfectly in the joined document.`,
      relatedTools: ["merge-pdf", "pdf-combiner", "add-pdf-to-pdf"]
    }
  },
  {
    id: "pdf-merger",
    title: "PDF Merger",
    metaTitle: "PDF Merger Tool Online Free - Merge PDFs Instantly",
    metaDescription: "Free online PDF merger to combine your documents. Merge unlimited PDFs with our easy-to-use tool. Fast, secure, and completely free forever.",
    description: "Professional PDF merging tool for combining documents efficiently",
    icon: "file-merge",
    howTo: [
      "Upload multiple PDF files from your computer",
      "Arrange them in your preferred merge order",
      "Process your PDFs with one click",
      "Download the merged result instantly"
    ],
    article: {
      title: "Professional PDF Merger Solution",
      content: `Our PDF merger tool provides professional-quality document combining without the need for expensive software. Merge unlimited PDFs completely free with enterprise-level security.

## Professional Document Management

PDF merging is essential for modern document management. Our tool helps professionals:
- Create comprehensive client deliverables
- Combine contract documents efficiently
- Build complete proposal packages
- Organize research and reference materials

## Enterprise-Level Security

We use industry-standard encryption to protect your files during processing. All documents are automatically deleted from our servers after one hour, and we never access or store your content permanently.

## No Limitations

Unlike many online tools, we don't limit file sizes or the number of PDFs you can merge. Combine as many documents as you need, whether it's 2 files or 200, all completely free.`,
      relatedTools: ["pdf-combiner", "merge-multiple-pdfs", "combine-pdf"]
    }
  },
  {
    id: "pdf-combiner",
    title: "PDF Combiner",
    metaTitle: "PDF Combiner Online - Combine PDF Files Free & Secure",
    metaDescription: "Online PDF combiner to merge your documents securely. Combine PDFs for free with no registration. Fast, safe, and easy to use.",
    description: "Advanced PDF combining solution for all your document needs",
    icon: "combine",
    howTo: [
      "Choose all PDF files you want to combine",
      "Preview and adjust the order of your documents",
      "Click the combine button to merge them",
      "Access your combined PDF right away"
    ],
    article: {
      title: "Advanced PDF Combining Made Simple",
      content: `The PDF combiner tool offers advanced features for combining documents while maintaining simplicity. Perfect for both personal and professional use.

## Versatile PDF Combining

Our combiner works with PDFs of all types:
- Scanned documents and digital files
- Different page sizes and orientations
- Password-protected PDFs (after unlocking)
- Multi-language documents

## Smart Document Handling

The tool intelligently handles various PDF formats and sizes, automatically adjusting for optimal results. Mixed orientation pages are preserved, and different page sizes are handled gracefully.

## Time-Saving Features

Save time with our efficient combining process. Batch upload multiple files, quickly reorder them with drag-and-drop, and process everything with a single click. Perfect for busy professionals who need results fast.`,
      relatedTools: ["pdf-merger", "merge-pdf", "combine-pdf-pages"]
    }
  },
  {
    id: "append-pdf",
    title: "Append PDF",
    metaTitle: "Append PDF Files Online - Add PDFs to Existing Documents",
    metaDescription: "Append PDF files to existing documents online for free. Add pages from multiple PDFs to your main document. Simple and secure PDF appending.",
    description: "Add PDF pages to existing documents with precision",
    icon: "file-plus",
    howTo: [
      "Upload your main PDF document first",
      "Add additional PDFs to append to it",
      "Review the combined document structure",
      "Download your updated PDF with appended content"
    ],
    article: {
      title: "Append PDFs to Existing Documents",
      content: `Appending PDF files allows you to add new content to existing documents without recreating them. This is essential for updating reports, adding sections, or incorporating new information.

## Common Uses for PDF Appending

Appending is particularly useful for:
- Adding new sections to existing reports
- Incorporating additional documentation
- Updating contracts with addendums
- Building documents progressively over time

## Maintain Document Integrity

When you append PDFs, the original document structure is preserved. All bookmarks, links, and metadata remain intact while new content is seamlessly added to the end of your document.

## Flexible Document Building

Our append tool gives you control over how documents are combined. Add content to the end of existing PDFs, or build up complex documents by appending multiple files in sequence.`,
      relatedTools: ["add-pdf-to-pdf", "merge-pdf", "combine-pdf"]
    }
  },
  {
    id: "add-pdf-to-pdf",
    title: "Add PDF to PDF",
    metaTitle: "Add PDF to PDF Online - Insert PDFs into Documents Free",
    metaDescription: "Add PDF files to other PDFs online for free. Insert pages from one PDF into another. Easy PDF addition tool with no software required.",
    description: "Insert PDF content into other documents seamlessly",
    icon: "file-add",
    howTo: [
      "Select your base PDF document",
      "Choose the PDF files you want to add",
      "Specify where to insert the new content",
      "Generate and download your enhanced PDF"
    ],
    article: {
      title: "Add PDFs to Your Documents",
      content: `Adding PDF content to existing documents is a powerful way to enhance and update your files. Our tool makes it simple to insert pages from one PDF into another.

## Flexible PDF Addition

Add content anywhere in your document:
- Insert pages at the beginning
- Add content in the middle
- Append pages to the end
- Combine multiple insertions in one operation

## Preserve Formatting

When adding PDFs to existing documents, all formatting, fonts, and images are preserved. The resulting document looks professional and maintains consistency throughout.

## Practical Applications

This tool is perfect for:
- Adding cover pages to reports
- Inserting signatures or approval pages
- Incorporating supplementary materials
- Building comprehensive documentation packages`,
      relatedTools: ["append-pdf", "merge-pdf", "join-pdf-files"]
    }
  },
  {
    id: "merge-multiple-pdfs",
    title: "Merge Multiple PDFs",
    metaTitle: "Merge Multiple PDF Files Online - Bulk PDF Merger Free",
    metaDescription: "Merge multiple PDF files at once online for free. Bulk PDF merging tool with unlimited file support. Fast, secure, and easy to use.",
    description: "Bulk merge unlimited PDF files in one operation",
    icon: "files",
    howTo: [
      "Upload all your PDF files at once",
      "Organize them in your desired sequence",
      "Click 'Merge All' to combine everything",
      "Download your single merged PDF file"
    ],
    article: {
      title: "Merge Multiple PDFs at Once",
      content: `When working with numerous PDF files, merging them individually is time-consuming. Our bulk merge tool lets you combine dozens of PDFs in a single operation.

## Bulk Processing Power

Handle large-scale PDF merging efficiently:
- Merge 10, 20, or even 100+ PDFs at once
- No file size limits on individual documents
- Fast processing even with large files
- Maintain quality across all merged content

## Organized Document Management

Our tool helps you manage multiple PDFs effectively. Upload all files at once, use drag-and-drop to organize them, and merge everything with a single click. Perfect for creating comprehensive archives or compilations.

## Business-Ready Performance

Designed for professional use, our multiple PDF merger handles business documents with ease. Combine invoices, reports, presentations, and contracts into organized packages for clients or internal use.`,
      relatedTools: ["pdf-merger", "combine-pdf", "pdf-combiner"]
    }
  },
  {
    id: "combine-pdf-pages",
    title: "Combine PDF Pages",
    metaTitle: "Combine PDF Pages Online - Organize Multiple PDFs Free",
    metaDescription: "Combine pages from multiple PDF documents into a single organized file online for free. Simple PDF page combining tool with no registration required.",
    description: "Combine pages from multiple documents into a single organized file",
    icon: "file-text",
    howTo: [
      "Upload your source PDF files",
      "Arrange the documents in your preferred order",
      "Click 'Combine Pages' to merge all pages",
      "Download your organized combined PDF"
    ],
    article: {
      title: "Combine PDF Pages into One File",
      content: `Combining pages from multiple PDF documents helps you create organized, comprehensive files. Our free online tool makes it easy to bring all your PDF pages together into a single, well-structured document.

## Organize Multiple Documents

Combine pages from various PDFs to create:
- Consolidated reports from different sources
- Complete project documentation packages
- Organized collections of related materials
- Unified document archives

## Streamlined Page Assembly

Our tool simplifies the process of assembling pages from multiple PDFs. Upload all your documents, arrange them in the order you need, and combine them with a single click. All pages are preserved in their original quality.

## Professional Document Organization

Perfect for creating organized document packages for:
- Client presentations with multiple deliverables
- Academic submissions combining research materials
- Business reports gathering data from various sources
- Archive creation from scattered documents`,
      relatedTools: ["merge-pdf", "combine-pdf", "join-pdf-files"]
    }
  },
  {
    id: "merge-pdf-alternately",
    title: "Merge PDF Alternately",
    metaTitle: "Merge PDF Alternately Online - Interleave PDF Pages Free",
    metaDescription: "Merge PDF files alternately online for free. Interleave pages from multiple PDFs. Perfect for creating combined documents with alternating content.",
    description: "Interleave pages from multiple PDFs in alternating sequence",
    icon: "shuffle",
    howTo: [
      "Upload two or more PDF files to interleave",
      "Choose your alternating pattern (1:1, 2:1, etc.)",
      "Preview the alternating page sequence",
      "Download your interleaved PDF document"
    ],
    article: {
      title: "Merge PDFs with Alternating Pages",
      content: `Alternate merging creates documents where pages from different PDFs are interleaved. This unique merging style is perfect for specific document needs like bilingual materials or comparative analyses.

## Alternating Merge Patterns

Create sophisticated document layouts:
- 1:1 alternating (page from PDF1, page from PDF2, repeat)
- 2:1 patterns for different content ratios
- Custom sequences for complex documents
- Perfect page-by-page comparisons

## Specialized Applications

Alternate PDF merging is ideal for:
- Creating bilingual documents (English page, translation page)
- Side-by-side comparison documents
- Before/after documentation
- Dual-version educational materials

## Smart Page Matching

Our tool intelligently handles PDFs with different page counts, ensuring all content is included even when documents have unequal lengths. Create professional interleaved documents with ease.`,
      relatedTools: ["merge-pdf", "combine-pdf-pages", "pdf-merger"]
    }
  }
] as const;

export type PDFTool = typeof pdfTools[number];

// File upload schema
export const fileUploadSchema = z.object({
  files: z.array(z.instanceof(File)).min(1, "At least one PDF file is required"),
});

export type FileUpload = z.infer<typeof fileUploadSchema>;

// Processed file metadata
export interface ProcessedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  order: number;
}

// API response types
export interface MergeResponse {
  success: boolean;
  filename: string;
  downloadUrl?: string;
  error?: string;
}
