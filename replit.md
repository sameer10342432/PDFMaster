# Overview

Property Tools is a comprehensive Next.js web application providing 487 interactive calculators and educational content for real estate professionals, investors, and homebuyers. It covers a wide array of real estate facets including mortgage analysis, investment evaluation, tax calculations, seller tools, agent tools, land development, opportunity zones, market analysis, closing costs, estate planning, lifestyle & housing, location-specific tools, and AI-powered content. The platform features an admin panel for content management, a centralized tools data system, client-side calculation storage, scenario comparison, export capabilities, and smart insights. The project aims to be a leading resource in real estate analytics and decision-making, with a business vision to empower informed real estate decisions and capture a significant market share in property tech.

# Recent Changes

**November 18, 2025**: Added 10 new real estate agent calculators, expanding the Agent Tools category from 10 to 20 tools (total platform count: 487):
- CRM ROI Calculator - Calculate ROI for CRM systems with cost savings and productivity analysis
- Cost Per Lead (CPL) Calculator - Optimize marketing budget by tracking lead generation costs
- Cost Per Acquisition (CPA) Calculator - Calculate client acquisition costs across marketing channels
- Lead Conversion Rate Calculator - Analyze conversion rates through sales funnel stages
- Sphere of Influence (SOI) Potential Calculator - Calculate business value from referral networks
- Client Lifetime Value (CLV) Calculator - Calculate long-term client value including referrals
- Agent Team (Split vs. Salary) Calculator - Compare compensation models for team building
- Buyer's Agent Commission Calculator - Calculate buyer agent earnings with splits and fees
- Listing Agent Commission Calculator - Calculate listing agent earnings with co-broke splits
- Transaction Coordinator (TC) Cost vs. Benefit Calculator - Analyze ROI of hiring TC services

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend
- **Framework**: Next.js 15 (App Router) with React 18 and TypeScript.
- **UI**: Shadcn/ui + Radix UI components, Tailwind CSS for styling, CVA for variants, with dark mode support.
- **State Management**: Zustand with local storage persistence for user-specific data (saved scenarios, history, favorites).
- **Form Handling**: React Hook Form with Zod for validation.
- **Visualization**: Recharts for data visualization.

## Backend
- **Framework**: Next.js API Routes for server-side logic and authentication.
- **Database**: PostgreSQL accessed via Drizzle ORM for type-safe queries.
- **Authentication**: Custom session-based authentication using signed cookies, HMAC-SHA256, and bcryptjs for password hashing.

## Content Management
- **Blog System**: Admin panel includes a block-based rich text editor for articles, supporting multimedia, draft/publish workflow, and SEO metadata.
- **Calculator Content**: Centralized data system (`src/content/tools/`) acts as a single source of truth for all 487 calculators across various categories, including specialized tools for commercial real estate, state-specific taxes, location intelligence, estate planning, agent tools (E&O insurance, MLS fees, marketing ROI, lead generation, CRM ROI, cost per lead, commission calculators), and AI-powered content. Each calculator entry includes title, description, icon, category, slug, article, and calculation logic.

## Core Features
- **Calculator System**: Modular architecture supporting 487 professional tools with features like what-if analysis, real-time updates, search/filter, and responsive UI. Supports text-based results for qualitative assessments.
- **Enhancement Features**: Scenario Manager for comparisons, export utilities (CSV, JSON, PDF), shareable links, smart insights, calculation history, notes, favorites, and goals tracking.
- **Client Storage**: Custom `StorageManager` handles localStorage with quota management (5MB limit) and usage monitoring.

## System Design Choices
- The application is configured for Replit autoscale deployment, running on port 5000 with 0.0.0.0 binding.
- Database management uses `drizzle-kit` for migrations and seeding.
- Code quality is maintained through ESLint, Prettier, and TypeScript strict mode.

# External Dependencies

## Database
- **PostgreSQL**: Primary database for all application data.

## Third-Party Libraries
- **UI & Styling**: Tailwind CSS, Heroicons, Lucide React, React Icons, Framer Motion, Tremor React.
- **Maps & Geospatial**: Leaflet, React Leaflet.
- **Document Generation**: jsPDF, jsPDF-autoTable, html2canvas.
- **Rich Text Editing**: React Quill.
- **Form & Validation**: Zod, React Hook Form, @hookform/resolvers.
- **Database & ORM**: Drizzle ORM, Drizzle Kit, postgres.
- **Utilities**: bcryptjs, clsx, tailwind-merge.

## External Services
- **OpenAI**: Utilized for AI-powered calculator features via `OPENAI_API_KEY`.