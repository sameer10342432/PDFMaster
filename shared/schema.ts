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
  },
  {
    id: "interleave-pdf",
    title: "Interleave PDF",
    metaTitle: "Interleave PDF Pages Online Free - Mix PDF Documents",
    metaDescription: "Interleave PDF pages from multiple documents online for free. Mix pages from different PDFs in alternating pattern. Simple and secure PDF interleaving.",
    description: "Mix pages from multiple PDF files in alternating patterns",
    icon: "layers-2",
    howTo: [
      "Upload two or more PDF files to interleave",
      "Select your interleaving pattern (alternating, custom ratio)",
      "Preview how pages will be mixed together",
      "Download your interleaved PDF document"
    ],
    article: {
      title: "Interleave PDF Files for Professional Documents",
      content: `Interleaving PDF pages creates documents where content from multiple PDFs is mixed in specific patterns. This technique is essential for creating bilingual documents, comparative analyses, and educational materials.

## What is PDF Interleaving?

PDF interleaving arranges pages from multiple documents in alternating sequences. For example, taking page 1 from PDF A, then page 1 from PDF B, then page 2 from PDF A, and so on. This creates a unified document with content from different sources perfectly synchronized.

## Common Uses for Interleaved PDFs

Interleaving is particularly valuable for:
- Creating bilingual documents with original and translation on facing pages
- Building comparison documents showing before and after versions
- Producing study materials with questions and answers on alternating pages
- Developing training guides with instruction pages alternating with practice exercises

## Flexible Interleaving Patterns

Our tool supports various interleaving patterns beyond simple 1:1 alternation. Create custom ratios like 2:1 or 3:2 to match your specific document needs. The tool handles PDFs with different page counts gracefully, ensuring all content is preserved.

## Professional Quality Output

Interleaved PDFs maintain the original quality of all source documents. Text remains searchable, images stay crisp, and all formatting is preserved. The resulting document is fully compatible with standard PDF readers and professional printing services.`,
      relatedTools: ["merge-pdf-alternately", "combine-pdf", "pdf-binder"]
    }
  },
  {
    id: "pdf-binder",
    title: "PDF Binder",
    metaTitle: "PDF Binder Online Free - Bind Multiple PDFs Together",
    metaDescription: "Bind multiple PDF files together online for free. Professional PDF binding tool to create organized document collections. Fast, secure, no registration.",
    description: "Bind multiple PDF documents together into organized collections",
    icon: "book-open",
    howTo: [
      "Upload all PDF files you want to bind together",
      "Organize documents in your preferred binding order",
      "Add optional section markers or separators",
      "Download your professionally bound PDF collection"
    ],
    article: {
      title: "Professional PDF Binding for Document Collections",
      content: `PDF binding creates organized collections from multiple documents, similar to how a physical binder organizes papers. Our free online PDF binder helps you create professional document collections for any purpose.

## Why Bind PDF Documents?

Binding PDFs together creates cohesive document packages that are easy to navigate and share. Unlike simple merging, binding implies organization and structure, making it perfect for:
- Creating comprehensive training manuals from multiple modules
- Organizing complete project documentation packages
- Building structured reference libraries
- Assembling multi-section reports with clear divisions

## Organized Document Management

Our PDF binder tool helps maintain document organization. Upload all your PDFs, arrange them in logical order, and create a bound collection that flows naturally from section to section. Perfect for professionals who need to present organized information packages.

## Enterprise-Ready Features

The tool handles large document collections efficiently, processing dozens of PDFs into a single bound collection. All original formatting, bookmarks, and metadata are preserved, ensuring your bound document maintains professional quality throughout.

## Secure and Private Binding

Your documents are processed securely with encryption during transfer. All files are automatically deleted after binding, and we never access or store your content. Enjoy professional PDF binding with complete privacy.`,
      relatedTools: ["merge-pdf", "combine-pdf", "pdf-merger"]
    }
  },
  {
    id: "merge-pdf-bookmarks",
    title: "Merge PDF with Bookmarks",
    metaTitle: "Merge PDF with Bookmarks Online - Preserve Navigation Structure",
    metaDescription: "Merge PDF files while preserving bookmarks and navigation structure online for free. Keep table of contents intact when combining PDFs. Professional PDF merger.",
    description: "Combine PDFs while preserving bookmarks and navigation structure",
    icon: "bookmark",
    howTo: [
      "Upload PDF files with existing bookmarks",
      "Choose whether to merge or organize bookmarks hierarchically",
      "Preview the combined bookmark structure",
      "Download your merged PDF with organized navigation"
    ],
    article: {
      title: "Merge PDFs While Preserving Bookmarks",
      content: `When merging PDF documents that contain bookmarks or tables of contents, preserving the navigation structure is crucial. Our specialized PDF merger maintains all bookmarks, creating a comprehensive navigation system for your combined document.

## Importance of Bookmark Preservation

Bookmarks in PDFs provide essential navigation for large documents. When merging multiple PDFs with bookmarks, our tool:
- Preserves all original bookmark hierarchies
- Maintains bookmark destinations accurately
- Organizes bookmarks from multiple sources logically
- Creates a unified navigation structure

## Professional Document Navigation

For technical manuals, legal documents, and academic papers, bookmarks are essential. Our tool ensures that when you merge PDFs, readers can still navigate efficiently through the combined document using the preserved bookmark structure.

## Hierarchical Bookmark Organization

When merging multiple PDFs, you can choose to keep bookmarks flat or organize them hierarchically. Create top-level bookmarks for each source document with nested bookmarks underneath, or maintain a unified bookmark structure across all content.

## Enhanced Reader Experience

Merged PDFs with proper bookmarks provide superior reading experience. Users can jump directly to specific sections, navigate complex documents efficiently, and find information quickly using the comprehensive bookmark navigation system.`,
      relatedTools: ["merge-pdf", "pdf-binder", "combine-pdf"]
    }
  },
  {
    id: "combine-pdf-images",
    title: "Combine PDF and Images",
    metaTitle: "Combine PDF and Images Online Free - Merge PDFs with Pictures",
    metaDescription: "Combine PDF files with images online for free. Merge PDFs and pictures (JPG, PNG) into a single document. Easy PDF and image combining tool.",
    description: "Merge PDF files with images (JPG, PNG) into unified documents",
    icon: "image-plus",
    howTo: [
      "Upload your PDF files and image files (JPG, PNG, etc.)",
      "Arrange PDFs and images in your desired sequence",
      "Adjust image sizing and positioning options",
      "Download your combined PDF with embedded images"
    ],
    article: {
      title: "Combine PDF Files with Images Seamlessly",
      content: `Combining PDF documents with images creates comprehensive files that include both formatted documents and visual content. Our free tool makes it easy to merge PDFs with JPG, PNG, and other image formats.

## Why Combine PDFs with Images?

Many workflows require mixing PDF documents with image files:
- Adding scanned signatures or stamps to contracts
- Incorporating photos into reports and presentations
- Inserting diagrams or charts into documentation
- Creating portfolios with both documents and artwork

## Supported Image Formats

Our tool supports all common image formats including JPG, JPEG, PNG, GIF, and BMP. Each image is automatically converted to a PDF page and inserted at your specified position, maintaining optimal quality and resolution.

## Flexible Image Integration

Control how images are integrated into your PDF. Choose whether images should fill entire pages, maintain aspect ratio, or fit within standard page dimensions. Our tool automatically optimizes image quality for professional results.

## Professional Mixed-Media Documents

Create polished documents that seamlessly blend PDFs and images. All content is properly formatted, maintaining consistent page sizes and professional appearance throughout the combined document.`,
      relatedTools: ["merge-pdf", "combine-pdf", "pdf-binder"]
    }
  },
  {
    id: "merge-pdf-word",
    title: "Merge PDF and Word",
    metaTitle: "Merge PDF and Word Documents Online Free - Combine DOC with PDF",
    metaDescription: "Merge PDF and Word documents online for free. Combine DOC, DOCX files with PDFs into a single document. Fast, secure PDF and Word merger.",
    description: "Combine PDF and Word documents (DOC, DOCX) into single files",
    icon: "file-type",
    howTo: [
      "Upload your PDF and Word documents (DOC, DOCX)",
      "Arrange documents in your preferred merge order",
      "Choose output format and conversion options",
      "Download your merged document combining both formats"
    ],
    article: {
      title: "Merge PDF and Word Documents Together",
      content: `Combining PDF and Word documents into a single file simplifies document management and sharing. Our free online tool converts and merges these different formats seamlessly.

## Combining Different Document Formats

Many projects involve both PDF and Word documents. Our merger tool handles:
- Converting Word documents to PDF during merge
- Preserving formatting from both document types
- Maintaining headers, footers, and page numbers
- Keeping images and tables properly formatted

## Common Use Cases

Merging PDFs with Word documents is essential for:
- Creating comprehensive reports from multiple sources
- Combining editable documents with finalized PDFs
- Building complete proposal packages
- Assembling mixed-format documentation

## Automatic Format Conversion

When merging Word documents with PDFs, our tool automatically converts Word files to PDF format, ensuring consistent output. All formatting, fonts, and layout elements are preserved during conversion.

## Professional Output Quality

The merged document maintains professional quality throughout. Fonts are embedded properly, page sizes are standardized, and all content appears exactly as intended. Perfect for business documents, academic papers, and professional communications.`,
      relatedTools: ["combine-pdf-images", "merge-pdf", "pdf-combiner"]
    }
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    metaTitle: "Split PDF Online Free - Separate PDF Pages Instantly",
    metaDescription: "Split PDF files online for free. Extract pages from PDFs, separate documents by page ranges. Fast and secure PDF splitting tool, no registration required.",
    description: "Split PDF files into separate documents or extract specific pages",
    icon: "scissors",
    howTo: [
      "Upload the PDF file you want to split",
      "Choose split method: by page range, extract pages, or split into equal parts",
      "Preview the splitting result before processing",
      "Download your split PDF files as separate documents"
    ],
    article: {
      title: "Split PDF Files into Separate Documents",
      content: `Splitting PDF files allows you to extract specific pages or divide large documents into manageable sections. Our free online PDF splitter makes this process quick and easy.

## Why Split PDF Files?

PDF splitting is essential for:
- Extracting specific pages from large documents
- Dividing lengthy reports into separate chapters
- Removing unwanted pages from documents
- Creating smaller files for easier sharing

## Flexible Splitting Options

Our tool offers multiple splitting methods:
- Split by specific page ranges (pages 1-5, 10-15, etc.)
- Extract individual pages as separate PDFs
- Divide document into equal parts
- Remove and separate specific pages

## Batch Page Extraction

Need multiple sections from a PDF? Extract several page ranges in one operation. Specify which pages or page ranges you want, and receive individual PDF files for each section.

## Maintain Document Quality

All split PDFs maintain the original quality, formatting, and properties of the source document. Text remains searchable, images stay crisp, and all interactive elements are preserved in the split files.`,
      relatedTools: ["pdf-splitter", "divide-pdf", "break-pdf"]
    }
  },
  {
    id: "pdf-splitter",
    title: "PDF Splitter",
    metaTitle: "PDF Splitter Tool Online Free - Split PDF Documents Fast",
    metaDescription: "Free online PDF splitter to separate your documents. Split PDFs by page, range, or size. Professional PDF splitting tool with no file limits.",
    description: "Advanced PDF splitting tool for dividing documents efficiently",
    icon: "split",
    howTo: [
      "Upload your PDF document to split",
      "Select splitting criteria: pages, ranges, or file size",
      "Configure split settings for optimal results",
      "Download all split PDF files in one archive"
    ],
    article: {
      title: "Professional PDF Splitting Made Simple",
      content: `The PDF splitter tool provides advanced options for dividing documents with precision. Whether you need to separate pages, extract sections, or split by file size, our tool handles it all.

## Advanced Splitting Capabilities

Our PDF splitter offers sophisticated features:
- Split by custom page ranges
- Divide into equal-sized chunks
- Extract even or odd pages only
- Split when file size exceeds threshold

## Bulk PDF Splitting

Need to split multiple PDFs? Upload several documents and apply the same splitting rules to all of them. Save time by processing batch operations efficiently.

## Smart Page Organization

The tool intelligently organizes split files with clear naming conventions. Each resulting PDF is properly labeled, making it easy to identify and organize your split documents.

## Professional Document Management

Perfect for businesses handling large PDF documents. Split invoices, contracts, reports, or any PDF document type while maintaining professional quality and proper formatting throughout all split files.`,
      relatedTools: ["split-pdf", "divide-pdf", "split-pdf-by-pages"]
    }
  },
  {
    id: "divide-pdf",
    title: "Divide PDF",
    metaTitle: "Divide PDF Online Free - Separate PDF into Parts Instantly",
    metaDescription: "Divide PDF files into multiple parts online for free. Separate large PDFs into smaller documents. Easy PDF division tool, no software installation needed.",
    description: "Divide large PDF files into multiple smaller documents",
    icon: "divide",
    howTo: [
      "Upload the large PDF you want to divide",
      "Specify how many parts to divide it into",
      "Choose whether to split evenly or by custom page counts",
      "Download all divided PDF parts together"
    ],
    article: {
      title: "Divide Large PDF Files into Manageable Parts",
      content: `Dividing large PDF files into smaller parts makes them easier to share, email, and manage. Our free PDF division tool splits documents quickly while preserving all content and formatting.

## When to Divide PDFs

Dividing PDFs is useful for:
- Breaking large files into email-friendly sizes
- Creating separate sections from long documents
- Distributing different parts to different recipients
- Managing storage more efficiently

## Flexible Division Methods

Choose how to divide your PDF:
- Split into a specific number of equal parts
- Divide by custom page counts for each section
- Separate by chapter or section markers
- Create parts based on file size limits

## Efficient Large File Handling

Our tool handles even very large PDFs efficiently. Divide hundreds of pages into manageable chunks without quality loss or processing delays. Perfect for academic papers, technical manuals, and comprehensive reports.

## Organized Output Files

Divided PDF files are automatically named with clear numbering (part 1, part 2, etc.) making them easy to organize and share. Each part maintains the quality and formatting of the original document.`,
      relatedTools: ["split-pdf", "pdf-splitter", "break-pdf"]
    }
  },
  {
    id: "break-pdf",
    title: "Break PDF",
    metaTitle: "Break PDF Online Free - Separate PDF Pages Quickly",
    metaDescription: "Break PDF files into separate pages online for free. Extract and separate individual pages from PDF documents. Fast PDF breaking tool.",
    description: "Break PDF files into individual pages or separate sections",
    icon: "file-break",
    howTo: [
      "Upload the PDF file you want to break apart",
      "Choose to break into individual pages or custom sections",
      "Select which pages or sections to extract",
      "Download extracted pages as separate PDF files"
    ],
    article: {
      title: "Break PDF Files into Individual Pages",
      content: `Breaking PDF files allows you to separate documents into individual pages or sections for easier management. Our free PDF breaking tool makes this process simple and efficient.

## PDF Breaking vs Splitting

Breaking a PDF typically means separating it into individual pages, while splitting may create larger sections. Our tool offers both capabilities:
- Break into individual one-page PDFs
- Separate specific page selections
- Extract pages while removing others
- Create customized document sections

## Individual Page Extraction

Extract any page from a PDF as a standalone document. Perfect for:
- Sharing single pages without the entire document
- Creating page-by-page presentations
- Removing and isolating specific content
- Building new documents from selected pages

## Selective Page Breaking

Choose exactly which pages to break out from your PDF. Extract pages 2, 5, and 9 as separate files, or break out page ranges like 10-15. Complete flexibility in how you break apart your documents.

## Quality Preservation

Each broken PDF page maintains full quality with all fonts, images, and formatting intact. The resulting individual PDFs are ready to use, share, or combine with other documents as needed.`,
      relatedTools: ["split-pdf", "divide-pdf", "split-pdf-by-pages"]
    }
  },
  {
    id: "split-pdf-by-pages",
    title: "Split PDF by Pages",
    metaTitle: "Split PDF by Pages Online Free - Custom Page Range Splitting",
    metaDescription: "Split PDF by specific pages online for free. Extract custom page ranges from PDF documents. Flexible PDF page splitting tool with preview.",
    description: "Split PDFs by specific page numbers or custom page ranges",
    icon: "file-stack",
    howTo: [
      "Upload your PDF document",
      "Enter specific page numbers or ranges to split (e.g., 1-5, 10, 15-20)",
      "Preview split sections before processing",
      "Download each page range as a separate PDF file"
    ],
    article: {
      title: "Split PDF by Custom Page Ranges",
      content: `Splitting PDFs by specific pages gives you precise control over document division. Our tool lets you extract exactly the pages you need, creating custom PDF sections from any source document.

## Precision Page Selection

Define exactly which pages to extract:
- Individual pages (page 5, page 12, page 20)
- Page ranges (pages 1-10, 15-25)
- Multiple selections in one operation (1-5, 10-15, 20-25)
- Complex combinations of pages and ranges

## Common Page Splitting Scenarios

This tool excels at:
- Extracting specific chapters from books or manuals
- Separating forms or sections from multi-part documents
- Creating custom document compilations
- Removing unwanted pages while keeping specific sections

## Intelligent Range Handling

The tool validates your page selections, ensuring all specified pages exist in the source document. It handles overlapping ranges gracefully and creates properly organized output files.

## Bulk Page Extraction

Extract multiple different page ranges in a single operation. Each range becomes a separate PDF file, all processed together and delivered as a convenient package ready to download.`,
      relatedTools: ["split-pdf", "pdf-splitter", "break-pdf"]
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
