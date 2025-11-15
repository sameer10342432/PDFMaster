# PDF Tools Web Application

## Overview

This is a free online PDF manipulation platform that provides users with various tools to merge, combine, join, and process PDF files. The application is built as a full-stack web application with a React frontend and Express backend, focusing on simplicity, security, and user privacy. All PDF processing happens without requiring user registration, emphasizing a frictionless user experience.

**Current Status (November 2025):**
- **200 total PDF tools** including 124+ conversion tools
- All tools feature proper SEO metadata (meta titles and descriptions)
- Comprehensive how-to articles with use cases and related tool recommendations
- Enhanced navigation with dropdown menus showcasing popular tools
- Responsive design with search and category filtering
- Recent additions include advanced conversion tools (PDF/A, XML, CSV, CAD formats), OCR tools, editing tools, and specialized converters

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React with TypeScript, using Vite as the build tool
- **Routing:** Wouter for lightweight client-side routing
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **Styling:** Tailwind CSS with custom design system
- **State Management:** TanStack Query (React Query) for server state management
- **Form Handling:** React Hook Form with Zod validation

**Design System:**
- Clean, modern utility design inspired by PDF tool platforms (Smallpdf, iLovePDF)
- Typography using Inter/DM Sans fonts from Google Fonts
- Consistent spacing using Tailwind units (2, 4, 6, 8, 12, 16, 20)
- Component-based architecture with reusable UI elements
- Responsive design with mobile-first approach
- Custom color scheme with light/dark mode support via CSS variables

**Key Pages:**
- Home page with hero section and tools grid
- Tools listing page with search/filter functionality
- Individual tool pages with file upload and processing interface
- 404 not found page

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **PDF Processing:** pdf-lib library for PDF manipulation
- **File Upload:** Multer middleware for multipart/form-data handling
- **Build Tool:** esbuild for production builds

**API Design:**
- RESTful API endpoints under `/api` prefix
- Single main endpoint `/api/process-pdf` handling multiple PDF operations
- File size limit: 50MB per file, up to 100 files per request
- File validation: Only PDF files (application/pdf) accepted
- Tool operations differentiated by `toolId` parameter

**PDF Operations Supported:**
- Merge PDF: Combine multiple PDFs into one
- Combine PDF: Join PDF documents
- Append PDF: Add PDFs to base document (requires minimum 2 files)
- Batch merge: Process multiple PDFs together

**Development Setup:**
- Development mode with Vite middleware integration
- Hot module replacement (HMR) for frontend development
- Custom logging middleware for API requests
- Request/response timing and JSON logging

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using MemStorage class
- User schema defined but not actively used (prepared for future authentication)
- No persistent database currently required for core PDF operations
- File processing happens in-memory using buffers

**Database Schema (Prepared):**
- Drizzle ORM configured for PostgreSQL
- Connection via Neon serverless driver
- User table schema defined with id, username fields
- Schema location: `shared/schema.ts`
- Migration directory: `./migrations`

**Rationale:**
The application prioritizes user privacy by not storing uploaded files or requiring user accounts. PDF operations are stateless and completed entirely in-memory. The database schema is prepared for potential future features (user accounts, file history) but not currently utilized.

### External Dependencies

**Core Libraries:**
- **pdf-lib:** Client-side and server-side PDF manipulation and merging
- **multer:** Handling multipart/form-data for file uploads
- **@neondatabase/serverless:** PostgreSQL connection for future database needs
- **drizzle-orm:** Type-safe ORM for database operations
- **zod:** Schema validation and type inference

**UI Component Libraries:**
- **@radix-ui/*:** Unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- **class-variance-authority:** Creating variant-based component APIs
- **tailwind-merge & clsx:** Utility for merging Tailwind classes

**Development Tools:**
- **@replit/vite-plugin-*:** Replit-specific development plugins (runtime error overlay, cartographer, dev banner)
- **react-helmet:** Managing document head for SEO
- **wouter:** Lightweight routing library
- **nanoid:** Unique ID generation

**TypeScript Configuration:**
- Strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)
- ESNext module system with bundler resolution

**Build & Deployment:**
- Development: tsx for running TypeScript directly
- Production: Vite for frontend build, esbuild for backend bundling
- Output: Static files in `dist/public`, server bundle in `dist/`

**Fonts:**
- Google Fonts: Inter and DM Sans loaded from CDN
- Preconnect optimization for faster font loading