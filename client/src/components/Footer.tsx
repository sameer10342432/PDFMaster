import { Link } from "wouter";
import { pdfTools } from "@shared/schema";
import { FileText, Shield, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">PDF Tools</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free online PDF tools for all your document needs. Fast, secure, and easy to use.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-sm">
              {pdfTools.slice(0, 5).map((tool) => (
                <li key={tool.id}>
                  <Link href={`/tool/${tool.id}`} className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${tool.id}`}>
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More Tools</h3>
            <ul className="space-y-2 text-sm">
              {pdfTools.slice(5, 10).map((tool) => (
                <li key={tool.id}>
                  <Link href={`/tool/${tool.id}`} className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${tool.id}`}>
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 PDF Tools. All rights reserved. Files are automatically deleted after 1 hour.</p>
        </div>
      </div>
    </footer>
  );
}
