# PDF & Media Tools - Full-Stack Application

## Overview
This project is a comprehensive web application offering over 1004 free online tools for PDF, AI, Audio, Video, Image, SEO, and more. The vision is to provide a professional-grade suite of tools that are completely free, secure, and fast, requiring no registration. The application aims to be a go-to resource for a wide range of digital tasks, with significant market potential due to its breadth of features and accessibility.

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

### Project Structure
-   `client/`: Frontend React application using Shadcn UI components and Wouter for routing.
-   `server/`: Backend Express application handling API endpoints and storage.
-   `shared/`: Contains shared TypeScript types and Zod validation schemas.
-   `attached_assets/`: Static assets.

### UI/UX Decisions
-   Uses Shadcn UI with custom theming for a consistent look and feel.
-   Supports light/dark mode.
-   Employs semantic color tokens and a consistent spacing system.
-   Custom components are developed following established elevation and interaction patterns.

### Technical Implementations & Features
-   Dynamic file upload detection for all tools.
-   Comprehensive routing system for 1004 tools, ensuring correct backend endpoint connection.
-   Capability gating system to differentiate between fully implemented, placeholder, and AI-dependent tools.
-   Automated tool enablement processes to rapidly integrate new functionalities.
-   Dynamic file type detection to ensure correct prompts for users.

### System Design Choices
-   The application is designed for scalability and stateless operation, supporting autoscale deployment.
-   An abstract `IStorage` interface is defined for future storage solutions, currently using in-memory storage.
-   Schema definitions leverage Drizzle ORM and Zod for robust data handling and validation.

## External Dependencies
-   **ffmpeg (v7.1.1)**: Used for audio/video processing.
-   **ffprobe (v7.1.1)**: Used for audio/video metadata extraction.
-   **p7zip**: Provides 7Z archive support.
-   **tesseract**: Integrated for OCR capabilities (PDF text extraction).
-   **Node.js (v20)**: Runtime environment for the backend.
-   **PostgreSQL (Neon)**: Database solution, configured but not actively used for persistent storage yet.
-   **AI Services (e.g., OpenAI)**: Planned integration for 88 tools requiring external AI/API services.