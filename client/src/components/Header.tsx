import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { FileText, ChevronDown, BookOpen, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PDFTool } from "@shared/schema";

export function Header() {
  const { data: tools = [] } = useQuery<PDFTool[]>({
    queryKey: ['/api/tools'],
  });

  const toolsWithArticles = tools.filter(tool => tool.article);
  const popularTools = toolsWithArticles.slice(0, 8);

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
                    View All Tools ({tools.length})
                  </DropdownMenuItem>
                </Link>
                <Link href="/articles">
                  <DropdownMenuItem data-testid="dropdown-item-all-articles">
                    <Newspaper className="h-4 w-4 mr-2" />
                    Browse All Articles
                  </DropdownMenuItem>
                </Link>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Popular Tools with Articles
                </DropdownMenuLabel>
                
                {popularTools.map((tool) => (
                  <Link key={tool.id} href={`/tool/${tool.id}`}>
                    <DropdownMenuItem data-testid={`dropdown-item-tool-${tool.id}`}>
                      <div className="flex items-start gap-2 w-full">
                        <BookOpen className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                          <span className="font-medium text-sm">{tool.title}</span>
                          <span className="text-xs text-muted-foreground truncate">
                            {tool.description}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
                
                <DropdownMenuSeparator />
                
                <Link href="/tools">
                  <DropdownMenuItem className="text-primary" data-testid="dropdown-item-view-more">
                    <FileText className="h-4 w-4 mr-2" />
                    View All {tools.length} Tools
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
