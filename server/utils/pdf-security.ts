import { execFile } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const execFileAsync = promisify(execFile);

interface EncryptionOptions {
  userPassword?: string;
  ownerPassword?: string;
  keyLength?: 128 | 256;
  allowPrint?: 'none' | 'low' | 'full';
  allowModify?: 'none' | 'annotate' | 'form' | 'assembly' | 'all';
  allowExtract?: boolean;
  allowAnnotate?: boolean;
  allowForm?: boolean;
  allowAccessibility?: boolean;
  allowPrintHighRes?: boolean;
}

interface DecryptOptions {
  password?: string;
}

/**
 * Create a temporary file with a unique name
 */
function createTempFile(prefix: string, extension: string): string {
  const tempDir = os.tmpdir();
  const uniqueName = `${prefix}-${Date.now()}-${Math.random().toString(36).substring(7)}${extension}`;
  return path.join(tempDir, uniqueName);
}

/**
 * Clean up temporary files
 */
async function cleanupTempFiles(files: string[]): Promise<void> {
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        await fs.promises.unlink(file);
      }
    } catch (error) {
      console.error(`Failed to cleanup temp file ${file}:`, error);
    }
  }
}

/**
 * Decrypt/unlock a password-protected PDF
 * Removes user password and/or owner password from a PDF
 */
export async function decryptPDF(
  pdfBuffer: Buffer,
  options: DecryptOptions = {}
): Promise<Buffer> {
  const inputFile = createTempFile('input', '.pdf');
  const outputFile = createTempFile('output', '.pdf');

  try {
    // Write input buffer to temp file
    await fs.promises.writeFile(inputFile, pdfBuffer);

    // Build qpdf command
    const args: string[] = ['--decrypt'];
    
    if (options.password) {
      args.push(`--password=${options.password}`);
    }
    
    args.push(inputFile, outputFile);

    // Execute qpdf
    try {
      await execFileAsync('qpdf', args);
    } catch (error: any) {
      if (error.stderr && error.stderr.includes('invalid password')) {
        throw new Error('Invalid password provided. Please check your password and try again.');
      } else if (error.stderr && error.stderr.includes('not encrypted')) {
        throw new Error('PDF is not password protected.');
      } else {
        throw new Error(`Failed to decrypt PDF: ${error.message}`);
      }
    }

    // Read output file
    const resultBuffer = await fs.promises.readFile(outputFile);
    return resultBuffer;

  } finally {
    await cleanupTempFiles([inputFile, outputFile]);
  }
}

/**
 * Encrypt a PDF with password and/or permissions
 */
export async function encryptPDF(
  pdfBuffer: Buffer,
  options: EncryptionOptions = {}
): Promise<Buffer> {
  const inputFile = createTempFile('input', '.pdf');
  const outputFile = createTempFile('output', '.pdf');

  try {
    // Write input buffer to temp file
    await fs.promises.writeFile(inputFile, pdfBuffer);

    // Default passwords if not provided
    const userPassword = options.userPassword || '';
    const ownerPassword = options.ownerPassword || options.userPassword || 'owner';
    const keyLength = options.keyLength || 256;

    // Build qpdf command
    const args: string[] = [
      '--encrypt',
      userPassword,
      ownerPassword,
      keyLength.toString(),
    ];

    // Add permission flags
    if (options.allowPrint !== undefined) {
      args.push(`--print=${options.allowPrint}`);
    }
    
    if (options.allowModify !== undefined) {
      args.push(`--modify=${options.allowModify}`);
    }
    
    if (options.allowExtract === false) {
      args.push('--extract=n');
    }
    
    if (options.allowAnnotate === false) {
      args.push('--annotate=n');
    }
    
    if (options.allowForm === false) {
      args.push('--form=n');
    }
    
    if (options.allowAccessibility === false) {
      args.push('--accessibility=n');
    }
    
    if (options.allowPrintHighRes === false) {
      args.push('--print=low');
    }

    args.push('--', inputFile, outputFile);

    // Execute qpdf
    try {
      await execFileAsync('qpdf', args);
    } catch (error: any) {
      throw new Error(`Failed to encrypt PDF: ${error.message}`);
    }

    // Read output file
    const resultBuffer = await fs.promises.readFile(outputFile);
    return resultBuffer;

  } finally {
    await cleanupTempFiles([inputFile, outputFile]);
  }
}

/**
 * Set restrictions on a PDF (restrict printing, copying, editing, etc.)
 */
export async function setRestrictions(
  pdfBuffer: Buffer,
  restrictions: {
    restrictPrinting?: boolean;
    restrictCopying?: boolean;
    restrictEditing?: boolean;
    restrictAnnotations?: boolean;
    restrictForms?: boolean;
  },
  ownerPassword?: string
): Promise<Buffer> {
  const options: EncryptionOptions = {
    userPassword: '', // Empty user password allows opening
    ownerPassword: ownerPassword || 'owner', // Owner password required to change restrictions
    keyLength: 256,
  };

  if (restrictions.restrictPrinting) {
    options.allowPrint = 'none';
  }
  
  if (restrictions.restrictCopying) {
    options.allowExtract = false;
  }
  
  if (restrictions.restrictEditing) {
    options.allowModify = 'none';
  }
  
  if (restrictions.restrictAnnotations) {
    options.allowAnnotate = false;
  }
  
  if (restrictions.restrictForms) {
    options.allowForm = false;
  }

  return encryptPDF(pdfBuffer, options);
}

/**
 * Remove restrictions from a PDF (requires owner password if protected)
 */
export async function removeRestrictions(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  const inputFile = createTempFile('input', '.pdf');
  const outputFile = createTempFile('output', '.pdf');

  try {
    // Write input buffer to temp file
    await fs.promises.writeFile(inputFile, pdfBuffer);

    // Build qpdf command to decrypt and remove restrictions
    const args: string[] = ['--decrypt'];
    
    if (ownerPassword) {
      args.push(`--password=${ownerPassword}`);
    }
    
    args.push(inputFile, outputFile);

    // Execute qpdf
    try {
      await execFileAsync('qpdf', args);
    } catch (error: any) {
      if (error.stderr && error.stderr.includes('invalid password')) {
        throw new Error('Invalid owner password. Cannot remove restrictions without correct owner password.');
      } else {
        throw new Error(`Failed to remove restrictions: ${error.message}`);
      }
    }

    // Read output file
    const resultBuffer = await fs.promises.readFile(outputFile);
    return resultBuffer;

  } finally {
    await cleanupTempFiles([inputFile, outputFile]);
  }
}

/**
 * Restrict PDF printing
 */
export async function restrictPrinting(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return setRestrictions(pdfBuffer, { restrictPrinting: true }, ownerPassword);
}

/**
 * Restrict PDF copying (text/image extraction)
 */
export async function restrictCopying(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return setRestrictions(pdfBuffer, { restrictCopying: true }, ownerPassword);
}

/**
 * Restrict PDF editing
 */
export async function restrictEditing(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return setRestrictions(pdfBuffer, { restrictEditing: true }, ownerPassword);
}

/**
 * Apply advanced password protection with custom permissions
 */
export async function advancedPasswordProtection(
  pdfBuffer: Buffer,
  userPassword: string,
  ownerPassword: string,
  permissions: {
    allowPrint?: boolean;
    allowCopy?: boolean;
    allowModify?: boolean;
    allowAnnotate?: boolean;
    allowForms?: boolean;
    allowHighResPrint?: boolean;
  } = {}
): Promise<Buffer> {
  const options: EncryptionOptions = {
    userPassword,
    ownerPassword,
    keyLength: 256,
    allowPrint: permissions.allowPrint !== false ? 'full' : 'none',
    allowExtract: permissions.allowCopy !== false,
    allowModify: permissions.allowModify !== false ? 'all' : 'none',
    allowAnnotate: permissions.allowAnnotate !== false,
    allowForm: permissions.allowForms !== false,
    allowPrintHighRes: permissions.allowHighResPrint !== false,
  };

  return encryptPDF(pdfBuffer, options);
}

/**
 * Set PDF permissions with granular control
 */
export async function setPermissions(
  pdfBuffer: Buffer,
  permissions: {
    print?: 'none' | 'low' | 'full';
    modify?: 'none' | 'annotate' | 'form' | 'assembly' | 'all';
    extract?: boolean;
    annotate?: boolean;
    form?: boolean;
  },
  ownerPassword?: string
): Promise<Buffer> {
  const options: EncryptionOptions = {
    userPassword: '', // Empty user password allows opening
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowPrint: permissions.print || 'full',
    allowModify: permissions.modify || 'all',
    allowExtract: permissions.extract !== false,
    allowAnnotate: permissions.annotate !== false,
    allowForm: permissions.form !== false,
  };

  return encryptPDF(pdfBuffer, options);
}

// ========================================
// NEW SECURITY TOOLS IMPLEMENTATION
// ========================================

interface SecurityInfo {
  encrypted: boolean;
  encryptionType?: string;
  version?: string;
  keyLength?: number;
  hasUserPassword: boolean;
  hasOwnerPassword: boolean;
  permissions: {
    print?: string;
    modify?: string;
    extract?: boolean;
    annotate?: boolean;
    form?: boolean;
    accessibility?: boolean;
  };
}

interface PasswordStrength {
  score: number; // 0-4
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  crackTime: string;
}

/**
 * Check password strength
 */
export function checkPasswordStrength(password: string): PasswordStrength {
  let score = 0;
  const feedback: string[] = [];

  // Length check
  if (password.length < 8) {
    feedback.push('Password should be at least 8 characters long');
  } else if (password.length >= 8 && password.length < 12) {
    score += 1;
  } else if (password.length >= 12 && password.length < 16) {
    score += 2;
  } else {
    score += 3;
  }

  // Character variety
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const varietyCount = [hasLowercase, hasUppercase, hasNumbers, hasSpecialChars].filter(Boolean).length;

  if (varietyCount === 1) {
    feedback.push('Use a mix of uppercase, lowercase, numbers, and special characters');
  } else if (varietyCount === 2) {
    score += 1;
  } else if (varietyCount === 3) {
    score += 2;
  } else if (varietyCount === 4) {
    score += 3;
  }

  // Common patterns check
  const commonPasswords = ['password', '123456', 'qwerty', 'abc123', 'letmein', 'admin'];
  if (commonPasswords.some(common => password.toLowerCase().includes(common))) {
    score = Math.max(0, score - 2);
    feedback.push('Avoid common password patterns');
  }

  // Sequential characters check
  if (/(.)\1{2,}/.test(password)) {
    feedback.push('Avoid repeated characters');
  }

  // Determine strength
  let strength: PasswordStrength['strength'];
  let crackTime: string;

  if (score <= 1) {
    strength = 'very-weak';
    crackTime = 'Less than 1 minute';
  } else if (score === 2) {
    strength = 'weak';
    crackTime = 'Minutes to hours';
  } else if (score === 3) {
    strength = 'medium';
    crackTime = 'Days to weeks';
  } else if (score === 4) {
    strength = 'strong';
    crackTime = 'Months to years';
  } else {
    strength = 'very-strong';
    crackTime = 'Centuries';
  }

  if (feedback.length === 0) {
    feedback.push('Password strength is good');
  }

  return {
    score: Math.min(4, score),
    strength,
    feedback,
    crackTime
  };
}

/**
 * Get PDF security and encryption information
 */
export async function getSecurityInfo(pdfBuffer: Buffer): Promise<SecurityInfo> {
  const inputFile = createTempFile('input', '.pdf');

  try {
    await fs.promises.writeFile(inputFile, pdfBuffer);

    // Run qpdf --show-encryption
    try {
      const { stdout } = await execFileAsync('qpdf', ['--show-encryption', inputFile]);
      
      const info: SecurityInfo = {
        encrypted: false,
        hasUserPassword: false,
        hasOwnerPassword: false,
        permissions: {}
      };

      // Parse encryption info
      if (stdout.includes('File is not encrypted')) {
        return info;
      }

      info.encrypted = true;

      // Extract encryption version
      const versionMatch = stdout.match(/R = (\d+)/);
      if (versionMatch) {
        info.version = `R${versionMatch[1]}`;
      }

      // Extract key length
      const keyLengthMatch = stdout.match(/Key length: (\d+)/);
      if (keyLengthMatch) {
        info.keyLength = parseInt(keyLengthMatch[1]);
      }

      // Detect encryption type
      if (stdout.includes('256-bit')) {
        info.encryptionType = 'AES-256';
      } else if (stdout.includes('128-bit AES')) {
        info.encryptionType = 'AES-128';
      } else if (stdout.includes('128-bit RC4')) {
        info.encryptionType = 'RC4-128';
      } else if (stdout.includes('40-bit RC4')) {
        info.encryptionType = 'RC4-40';
      }

      // Check for passwords
      info.hasUserPassword = stdout.includes('User password = ') && !stdout.includes('User password = ""');
      info.hasOwnerPassword = stdout.includes('Owner password = ') && !stdout.includes('Owner password = ""');

      // Extract permissions
      if (stdout.includes('print: allowed')) {
        info.permissions.print = 'full';
      } else if (stdout.includes('print: low resolution')) {
        info.permissions.print = 'low';
      } else if (stdout.includes('print: not allowed')) {
        info.permissions.print = 'none';
      }

      info.permissions.extract = !stdout.includes('extract: not allowed');
      info.permissions.annotate = !stdout.includes('annotate: not allowed');
      info.permissions.form = !stdout.includes('fill forms: not allowed');
      info.permissions.accessibility = !stdout.includes('accessibility: not allowed');

      if (stdout.includes('modify: all')) {
        info.permissions.modify = 'all';
      } else if (stdout.includes('modify: annotate')) {
        info.permissions.modify = 'annotate';
      } else if (stdout.includes('modify: form')) {
        info.permissions.modify = 'form';
      } else if (stdout.includes('modify: assembly')) {
        info.permissions.modify = 'assembly';
      } else if (stdout.includes('modify: not allowed')) {
        info.permissions.modify = 'none';
      }

      return info;

    } catch (error: any) {
      // If qpdf fails, assume not encrypted
      return {
        encrypted: false,
        hasUserPassword: false,
        hasOwnerPassword: false,
        permissions: {}
      };
    }

  } finally {
    await cleanupTempFiles([inputFile]);
  }
}

/**
 * Check if PDF has a password
 */
export async function hasPassword(pdfBuffer: Buffer): Promise<boolean> {
  const inputFile = createTempFile('input', '.pdf');

  try {
    await fs.promises.writeFile(inputFile, pdfBuffer);

    // Try to check the file without password
    try {
      await execFileAsync('qpdf', ['--check', inputFile]);
      return false; // No password required
    } catch (error: any) {
      if (error.stderr && (
        error.stderr.includes('invalid password') ||
        error.stderr.includes('password required')
      )) {
        return true; // Password required
      }
      return false; // Other error, assume no password
    }

  } finally {
    await cleanupTempFiles([inputFile]);
  }
}

/**
 * Detect PDF encryption type
 */
export async function detectEncryption(pdfBuffer: Buffer): Promise<{
  encrypted: boolean;
  type?: string;
  version?: string;
  keyLength?: number;
}> {
  const info = await getSecurityInfo(pdfBuffer);
  
  return {
    encrypted: info.encrypted,
    type: info.encryptionType,
    version: info.version,
    keyLength: info.keyLength
  };
}

/**
 * Set user password (for opening the PDF)
 */
export async function setUserPassword(
  pdfBuffer: Buffer,
  userPassword: string,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword,
    ownerPassword: ownerPassword || userPassword,
    keyLength: 256
  });
}

/**
 * Set owner password (for changing permissions)
 */
export async function setOwnerPassword(
  pdfBuffer: Buffer,
  ownerPassword: string,
  userPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: userPassword || '',
    ownerPassword,
    keyLength: 256
  });
}

/**
 * Attempt password recovery with common passwords
 */
export async function attemptPasswordRecovery(
  pdfBuffer: Buffer,
  commonPasswords: string[] = []
): Promise<{ success: boolean; password?: string; attempts: number }> {
  // Default common passwords to try
  const defaultCommonPasswords = [
    '', // Empty password
    'password', '123456', '12345678', 'qwerty', 'abc123',
    'password123', 'admin', 'letmein', 'welcome', '123123',
    'Password1', 'P@ssw0rd', 'passw0rd', 'test', 'user'
  ];

  const passwordsToTry = Array.from(new Set([...commonPasswords, ...defaultCommonPasswords]));
  
  for (let i = 0; i < passwordsToTry.length; i++) {
    try {
      await decryptPDF(pdfBuffer, { password: passwordsToTry[i] });
      return {
        success: true,
        password: passwordsToTry[i],
        attempts: i + 1
      };
    } catch (error) {
      // Continue trying
    }
  }

  return {
    success: false,
    attempts: passwordsToTry.length
  };
}

/**
 * Unlock all PDF features (remove all restrictions)
 */
export async function unlockAllFeatures(
  pdfBuffer: Buffer,
  password?: string
): Promise<Buffer> {
  return decryptPDF(pdfBuffer, { password });
}

/**
 * Unlock PDF for accessibility tools
 */
export async function unlockAccessibility(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowAccessibility: true,
    allowExtract: true
  });
}

/**
 * Enable PDF printing
 */
export async function unlockPrinting(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowPrint: 'full',
    allowPrintHighRes: true
  });
}

/**
 * Enable text/content copying
 */
export async function unlockCopying(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowExtract: true
  });
}

/**
 * Enable PDF editing
 */
export async function unlockEditing(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowModify: 'all'
  });
}

/**
 * Enable form filling
 */
export async function unlockForms(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowForm: true,
    allowModify: 'form'
  });
}

/**
 * Enable page assembly (inserting, rotating, deleting pages)
 */
export async function unlockAssembly(
  pdfBuffer: Buffer,
  ownerPassword?: string
): Promise<Buffer> {
  return encryptPDF(pdfBuffer, {
    userPassword: '',
    ownerPassword: ownerPassword || 'owner',
    keyLength: 256,
    allowModify: 'assembly'
  });
}
