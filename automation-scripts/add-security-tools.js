import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, '..', 'shared', 'schema.ts');

// Read the schema file
let schemaContent = fs.readFileSync(schemaPath, 'utf8');

// Define the 16 new security tools
const newTools = [
  {
    id: "pdf-password-strength-checker",
    title: "PDF Password Strength Checker",
    category: "Security",
    tags: ["password", "strength", "security", "check"],
    capability: "implemented",
    metaTitle: "PDF Password Strength Checker - Check Password Security",
    metaDescription: "Check the strength of your PDF passwords. Analyze password security with our free online password strength checker tool.",
    description: "Analyze password strength and get security recommendations",
    icon: "shield-check",
    howTo: [
      "Enter the password you want to check",
      "Click 'Check Strength' to analyze",
      "Review the strength score and recommendations",
      "Improve your password based on feedback"
    ]
  },
  {
    id: "pdf-owner-password-setter",
    title: "PDF Owner Password Setter",
    category: "Security",
    tags: ["owner", "password", "protect", "security"],
    capability: "implemented",
    metaTitle: "Set PDF Owner Password - Protect PDF Permissions",
    metaDescription: "Set an owner password for your PDF to control permissions and restrictions. Secure your PDF documents online free.",
    description: "Set owner password to control PDF permissions",
    icon: "key",
    howTo: [
      "Upload your PDF file",
      "Enter the owner password",
      "Optionally set a user password",
      "Download the protected PDF"
    ]
  },
  {
    id: "pdf-user-password-setter",
    title: "PDF User Password Setter",
    category: "Security",
    tags: ["user", "password", "protect", "security"],
    capability: "implemented",
    metaTitle: "Set PDF User Password - Password Protect PDF Files",
    metaDescription: "Set a user password to protect your PDF files. Require password to open PDF documents. Free online PDF password protection.",
    description: "Set user password to require password for opening PDF",
    icon: "lock",
    howTo: [
      "Upload your PDF file",
      "Enter the user password",
      "Optionally set an owner password",
      "Download the password-protected PDF"
    ]
  },
  {
    id: "pdf-password-recovery",
    title: "PDF Password Recovery",
    category: "Security",
    tags: ["password", "recovery", "crack", "unlock"],
    capability: "implemented",
    metaTitle: "PDF Password Recovery - Recover Lost PDF Passwords",
    metaDescription: "Attempt to recover lost PDF passwords using common password lists. Free online PDF password recovery tool.",
    description: "Attempt to recover or crack PDF passwords",
    icon: "unlock",
    howTo: [
      "Upload your password-protected PDF",
      "Optionally provide custom passwords to try",
      "Click 'Attempt Recovery' to start",
      "View the results if password is found"
    ]
  },
  {
    id: "pdf-security-analyzer",
    title: "PDF Security Analyzer",
    category: "Security",
    tags: ["security", "analyze", "scan", "check"],
    capability: "implemented",
    metaTitle: "PDF Security Analyzer - Analyze PDF Security Settings",
    metaDescription: "Analyze PDF security settings and encryption. Get detailed security information about your PDF documents online free.",
    description: "Analyze and report on PDF security settings",
    icon: "shield-alert",
    howTo: [
      "Upload your PDF file",
      "Click 'Analyze Security' to scan",
      "Review comprehensive security report",
      "Get recommendations for improvement"
    ]
  },
  {
    id: "pdf-security-info",
    title: "PDF Security Info",
    category: "Security",
    tags: ["security", "info", "details", "encryption"],
    capability: "implemented",
    metaTitle: "Get PDF Security Information - View PDF Encryption Details",
    metaDescription: "Get detailed security information about PDF files. View encryption type, passwords, and permissions online free.",
    description: "Get detailed security and encryption information",
    icon: "info",
    howTo: [
      "Upload your PDF file",
      "Click 'Get Security Info'",
      "View encryption and permission details",
      "Export security information if needed"
    ]
  },
  {
    id: "check-pdf-password",
    title: "Check PDF Password",
    category: "Security",
    tags: ["check", "password", "verify", "protected"],
    capability: "implemented",
    metaTitle: "Check if PDF Has Password - Verify PDF Protection",
    metaDescription: "Check if a PDF file is password protected. Verify PDF security status online free without opening the file.",
    description: "Check if PDF file is password protected",
    icon: "shield-question",
    howTo: [
      "Upload your PDF file",
      "Click 'Check Password' to verify",
      "View password protection status",
      "Get details about protection type"
    ]
  },
  {
    id: "detect-pdf-encryption",
    title: "Detect PDF Encryption",
    category: "Security",
    tags: ["detect", "encryption", "type", "security"],
    capability: "implemented",
    metaTitle: "Detect PDF Encryption Type - Identify PDF Security",
    metaDescription: "Detect the encryption type used in PDF files. Identify AES-256, AES-128, RC4 encryption and more online free.",
    description: "Detect and identify PDF encryption type",
    icon: "scan",
    howTo: [
      "Upload your PDF file",
      "Click 'Detect Encryption'",
      "View encryption type and details",
      "Understand the security level"
    ]
  },
  {
    id: "pdf-encryption-info",
    title: "PDF Encryption Info",
    category: "Security",
    tags: ["encryption", "info", "details", "security"],
    capability: "implemented",
    metaTitle: "PDF Encryption Information - Get Encryption Details",
    metaDescription: "Get detailed encryption information about PDF files. View encryption algorithm, key length, and version online free.",
    description: "Get detailed PDF encryption information",
    icon: "file-lock",
    howTo: [
      "Upload your PDF file",
      "Click 'Get Encryption Info'",
      "Review encryption algorithm details",
      "Check encryption key length and version"
    ]
  },
  {
    id: "unlock-all-pdf-features",
    title: "Unlock All PDF Features",
    category: "Security",
    tags: ["unlock", "features", "remove", "restrictions"],
    capability: "implemented",
    metaTitle: "Unlock All PDF Features - Remove All PDF Restrictions",
    metaDescription: "Unlock all PDF features and remove all restrictions. Enable printing, copying, editing, and more online free.",
    description: "Remove all restrictions and unlock all PDF features",
    icon: "unlock-keyhole",
    howTo: [
      "Upload your restricted PDF",
      "Enter password if required",
      "Click 'Unlock All Features'",
      "Download fully unlocked PDF"
    ]
  },
  {
    id: "pdf-accessibility-unlock",
    title: "PDF Accessibility Unlock",
    category: "Security",
    tags: ["accessibility", "unlock", "screen reader", "enable"],
    capability: "implemented",
    metaTitle: "Unlock PDF for Accessibility - Enable Screen Readers",
    metaDescription: "Unlock PDF for accessibility tools and screen readers. Make PDFs accessible online free.",
    description: "Unlock PDF for accessibility tools and screen readers",
    icon: "accessibility",
    howTo: [
      "Upload your PDF file",
      "Enter owner password if required",
      "Click 'Unlock Accessibility'",
      "Download accessibility-enabled PDF"
    ]
  },
  {
    id: "pdf-print-unlock",
    title: "PDF Print Unlock",
    category: "Security",
    tags: ["print", "unlock", "enable", "printing"],
    capability: "implemented",
    metaTitle: "Unlock PDF Printing - Enable PDF Print Permission",
    metaDescription: "Unlock PDF printing restrictions. Enable printing on restricted PDF files online free.",
    description: "Enable printing on restricted PDF files",
    icon: "printer",
    howTo: [
      "Upload your restricted PDF",
      "Enter owner password if required",
      "Click 'Unlock Printing'",
      "Download print-enabled PDF"
    ]
  },
  {
    id: "pdf-copy-unlock",
    title: "PDF Copy Unlock",
    category: "Security",
    tags: ["copy", "unlock", "text", "extract"],
    capability: "implemented",
    metaTitle: "Unlock PDF Copying - Enable Text Copy from PDF",
    metaDescription: "Unlock PDF text copying restrictions. Enable copying and content extraction from restricted PDFs online free.",
    description: "Enable text copying and content extraction",
    icon: "copy",
    howTo: [
      "Upload your restricted PDF",
      "Enter owner password if required",
      "Click 'Unlock Copying'",
      "Download copy-enabled PDF"
    ]
  },
  {
    id: "pdf-edit-unlock",
    title: "PDF Edit Unlock",
    category: "Security",
    tags: ["edit", "unlock", "modify", "enable"],
    capability: "implemented",
    metaTitle: "Unlock PDF Editing - Enable PDF Modification",
    metaDescription: "Unlock PDF editing restrictions. Enable modification and editing on restricted PDF files online free.",
    description: "Enable editing and modification permissions",
    icon: "edit",
    howTo: [
      "Upload your restricted PDF",
      "Enter owner password if required",
      "Click 'Unlock Editing'",
      "Download editable PDF"
    ]
  },
  {
    id: "pdf-form-unlock",
    title: "PDF Form Unlock",
    category: "Security",
    tags: ["form", "unlock", "fill", "enable"],
    capability: "implemented",
    metaTitle: "Unlock PDF Form Filling - Enable PDF Forms",
    metaDescription: "Unlock PDF form filling restrictions. Enable form fields on restricted PDF files online free.",
    description: "Enable form filling on restricted PDFs",
    icon: "file-input",
    howTo: [
      "Upload your restricted PDF",
      "Enter owner password if required",
      "Click 'Unlock Form Filling'",
      "Download form-enabled PDF"
    ]
  },
  {
    id: "pdf-assembly-unlock",
    title: "PDF Assembly Unlock",
    category: "Security",
    tags: ["assembly", "unlock", "pages", "enable"],
    capability: "implemented",
    metaTitle: "Unlock PDF Page Assembly - Enable Page Operations",
    metaDescription: "Unlock PDF page assembly restrictions. Enable inserting, rotating, and deleting pages in restricted PDFs online free.",
    description: "Enable page assembly operations (insert, rotate, delete pages)",
    icon: "layers",
    howTo: [
      "Upload your restricted PDF",
      "Enter owner password if required",
      "Click 'Unlock Assembly'",
      "Download assembly-enabled PDF"
    ]
  }
];

// Find the last Security category tool in the schema
const securityToolRegex = /category:\s*"Security"\s+as\s+ToolCategory[^}]*}/gs;
const matches = [...schemaContent.matchAll(securityToolRegex)];

if (matches.length === 0) {
  console.error('No Security category tools found in schema');
  process.exit(1);
}

// Get the position after the last Security tool
const lastMatch = matches[matches.length - 1];
const insertPosition = lastMatch.index + lastMatch[0].length;

// Find the next tool after the last Security tool to insert before it
const beforeInsertText = schemaContent.substring(insertPosition, insertPosition + 100);
const nextToolMatch = beforeInsertText.match(/},\s*{/);

if (!nextToolMatch) {
  console.error('Could not find insertion point');
  process.exit(1);
}

const actualInsertPosition = insertPosition + nextToolMatch.index + nextToolMatch[0].indexOf('{');

// Generate the tool definitions
const toolDefinitions = newTools.map(tool => {
  return `  {
    id: "${tool.id}",
    title: "${tool.title}",
    category: "${tool.category}" as ToolCategory,
    tags: ${JSON.stringify(tool.tags)},
    capability: "${tool.capability}" as ToolCapability,
    metaTitle: "${tool.metaTitle}",
    metaDescription: "${tool.metaDescription}",
    description: "${tool.description}",
    icon: "${tool.icon}",
    howTo: ${JSON.stringify(tool.howTo, null, 6).replace(/\n/g, '\n    ')}
  },
  `;
}).join('\n');

// Insert the new tools
const updatedSchema = 
  schemaContent.substring(0, actualInsertPosition) +
  toolDefinitions +
  schemaContent.substring(actualInsertPosition);

// Write the updated schema
fs.writeFileSync(schemaPath, updatedSchema);

console.log(`Successfully added ${newTools.length} security tools to schema.ts`);
console.log('Tool IDs added:');
newTools.forEach(tool => console.log(`  - ${tool.id}`));
