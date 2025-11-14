import { Link } from "wouter";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-home">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PDF Tools</span>
          </Link>
          
          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" data-testid="button-nav-home">
                Home
              </Button>
            </Link>
            <Link href="/tools">
              <Button variant="ghost" data-testid="button-nav-tools">
                All Tools
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
