# PDF Tools Website - Design Guidelines

## Design Approach
**System-Based Approach** using clean, modern utility design inspired by successful PDF tool platforms like Smallpdf and iLovePDF. Focus on clarity, efficiency, and trust-building for users uploading sensitive documents.

## Typography Hierarchy
- **Primary Font**: Inter or DM Sans via Google Fonts (clean, modern sans-serif)
- **Headings**: 
  - H1: text-4xl md:text-5xl font-bold
  - H2: text-3xl md:text-4xl font-semibold
  - H3: text-2xl font-semibold
  - Tool cards: text-xl font-semibold
- **Body Text**: text-base leading-relaxed
- **Metadata/descriptions**: text-sm text-gray-600

## Layout System
Use Tailwind spacing units: **2, 4, 6, 8, 12, 16, 20** for consistent rhythm
- Container: max-w-7xl mx-auto px-4
- Section padding: py-16 md:py-24
- Card spacing: gap-6 md:gap-8
- Component spacing: space-y-6

## Component Library

### Homepage Structure
1. **Hero Section** (py-20)
   - Centered headline emphasizing "Free PDF Tools Online"
   - Subheadline highlighting security and ease
   - Primary CTA leading to tools grid
   - Trust indicators: "100% Free • No Registration • Secure"

2. **Tools Grid** (3-column on desktop, 1 on mobile)
   - grid-cols-1 md:grid-cols-2 lg:grid-cols-3
   - Each tool card: rounded-xl border shadow-sm p-8 hover:shadow-lg transition
   - Icon (64px) + Tool name + Short description
   - Subtle hover lift effect

3. **Features Section** (4 columns)
   - Why choose us: Free, Secure, Fast, No signup
   - Icons with brief text

4. **Footer**
   - All tools quick links
   - Privacy policy, Terms
   - Social proof elements

### Tools Page
- Similar grid layout as homepage
- Prominent search/filter functionality
- Category badges for tool types

### Individual Tool Pages
1. **Tool Interface** (max-w-3xl centered)
   - Large upload area with drag-and-drop zone (border-2 border-dashed rounded-lg p-12)
   - File type indicator and size limits
   - Upload button (primary CTA)
   - File list with remove options
   - Process/Download button (secondary CTA)

2. **How-to Section** (below tool, max-w-4xl)
   - Step-by-step numbered guide (3-4 steps)
   - Visual hierarchy with icons

3. **Article Section** (max-w-prose)
   - SEO-optimized content
   - Headings, paragraphs, lists
   - Related tools suggestions

## Interactive Elements
- **Primary Button**: Solid fill, rounded-lg px-8 py-3, font-semibold
- **Upload Zone**: Dashed border, hover state with slight background change
- **Tool Cards**: Clickable entire card with subtle shadow increase on hover
- **File Items**: Removable with X button, display filename and size

## Spacing & Density
- Tool cards: Generous padding (p-8) for easy clicking
- Upload areas: Large target zones (min-h-64)
- Article text: max-w-prose for readability
- Grid gaps: gap-8 on desktop, gap-6 on mobile

## Security & Trust Elements
- Lock icons near upload areas
- "Files deleted after 1 hour" messaging
- "No registration required" badges
- SSL/HTTPS indicators

## Images
**Hero Section**: Abstract illustration or icon-based graphic showing PDF documents being merged/combined. Modern, geometric style showing documents flowing together. Position centered, approximately 400-500px wide on desktop. Alternative: Clean vector illustration of PDF files with directional arrows.

**Tool Icons**: Use Font Awesome or Heroicons for consistent iconography across all 10 tools (merge, combine, join symbols).

No large hero background images needed - keep focus on functionality and trust.

## Navigation
- Simple header: Logo + "Tools" + "Home" links
- Sticky on scroll for easy tool access
- Mobile: Hamburger menu

## Key Principles
1. **Clarity over creativity**: Users need to accomplish tasks quickly
2. **Trust through minimalism**: Clean design reduces anxiety about file security
3. **Generous click targets**: Large upload zones and buttons
4. **Progressive disclosure**: Show advanced options only when needed
5. **Immediate feedback**: Show upload progress, file details clearly