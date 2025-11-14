import { Link } from "wouter";
import { FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { pdfTools } from "@shared/schema";

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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1" data-testid="button-nav-tools-dropdown">
                  Tools
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 max-h-96 overflow-y-auto">
                <Link href="/tools">
                  <DropdownMenuItem data-testid="dropdown-item-all-tools">
                    <FileText className="h-4 w-4 mr-2" />
                    View All Tools ({pdfTools.length})
                  </DropdownMenuItem>
                </Link>
                <Link href="/articles">
                  <DropdownMenuItem data-testid="dropdown-item-all-articles">
                    <FileText className="h-4 w-4 mr-2" />
                    Browse Articles
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
