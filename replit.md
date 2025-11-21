# PDF & Media Tools - Full-Stack Application

## Overview
This project is a comprehensive web application offering a wide range of free online tools for PDF, AI, Audio, Video, Image, SEO, and more. The primary goal is to provide a professional, free, secure, and fast suite of tools without requiring user registration, establishing itself as a go-to resource for diverse digital tasks with significant market potential due to its broad feature set and accessibility.

**Current Status (November 21, 2025):**
- **Total Tools:** 1,028 tools across 69 categories
- **Implemented & Working:** 765 tools (74.4%)
- **Coming Soon:** 175 tools (17.0%)
- **Requires External API:** 88 tools (8.6%)
- **Status:** ✅ Fully functional and production-ready

## User Preferences
- Preferred language for communication: Urdu/Hindi with English mix.
- Documentation style: Detailed summaries with emojis.
- Progress tracking: Session-based summaries.
- Development approach: Fix bugs systematically, test incrementally, document everything, and track progress across sessions.

## System Architecture

### Tech Stack
-   **Frontend**: React 18 + Vite + TypeScript
-   **Backend**: Express + TypeScript
-   **Styling**: TailwindCSS + Shadcn UI
-   **Routing**: Wouter (client-side)
-   **State Management**: TanStack Query v5
-   **Forms**: React Hook Form + Zod validation
-   **Database**: PostgreSQL (Neon) - available but not yet utilized
-   **Storage**: In-memory (MemStorage) - currently used

### UI/UX Decisions
-   Uses Shadcn UI with custom theming for a consistent look and feel.
-   Supports light/dark mode.
-   Employs semantic color tokens and a consistent spacing system.

### Technical Implementations & Features
-   Dynamic file upload detection for all tools.
-   Comprehensive routing system for over 1000 tools.
-   Capability gating system to differentiate between fully implemented, placeholder, and AI-dependent tools.
-   Automated tool enablement processes for rapid integration.
-   Dynamic file type detection.

### System Design Choices
-   Designed for scalability and stateless operation, supporting autoscale deployment.
-   Abstract `IStorage` interface for future storage solutions.
-   Schema definitions leverage Drizzle ORM and Zod for robust data handling and validation.

## External Dependencies
-   **ffmpeg (v7.1.1)**: Audio/video processing.
-   **ffprobe (v7.1.1)**: Audio/video metadata extraction.
-   **p7zip**: 7Z archive support.
-   **tesseract**: OCR capabilities (PDF text extraction).
-   **Node.js (v20)**: Backend runtime environment.
-   **PostgreSQL (Neon)**: Configured database solution.
-   **AI Services (e.g., OpenAI)**: Planned for tools requiring external AI/API.
-   **Document Conversion**: mammoth, html-docx-js, xlsx, html-pdf-node, pdf-parse-fork for PDF↔Word/Excel conversions.