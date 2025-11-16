import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { FileText, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Tool } from "@shared/schema";

export function Header() {
  const { data: tools = [] } = useQuery<Tool[]>({
    queryKey: ['/api/tools'],
  });

  const { data: categories = [] } = useQuery<string[]>({
    queryKey: ['/api/categories'],
  });

  const toolsByCategory = categories.reduce((acc, category) => {
    acc[category] = tools.filter(tool => tool.category === category);
    return acc;
  }, {} as Record<string, Tool[]>);

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
              <DropdownMenuContent align="end" className="w-80 max-h-[32rem] overflow-y-auto">
                <Link href="/tools">
                  <DropdownMenuItem data-testid="dropdown-item-all-tools">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="font-semibold">View All Tools ({tools.length})</span>
                  </DropdownMenuItem>
                </Link>
                
                <Link href="/articles">
                  <DropdownMenuItem data-testid="dropdown-item-articles">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Articles</span>
                  </DropdownMenuItem>
                </Link>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                  Browse by Category
                </DropdownMenuLabel>
                
                {categories.slice(0, 15).map((category) => (
                  <Link key={category} href="/tools">
                    <DropdownMenuItem data-testid={`dropdown-item-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm">{category}</span>
                        <span className="text-xs text-muted-foreground">
                          {toolsByCategory[category]?.length || 0}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
                
                {categories.length > 15 && (
                  <>
                    <DropdownMenuSeparator />
                    <Link href="/tools">
                      <DropdownMenuItem className="text-primary justify-center" data-testid="dropdown-item-view-all-categories">
                        <span className="text-sm font-medium">
                          View All {categories.length} Categories
                        </span>
                      </DropdownMenuItem>
                    </Link>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
