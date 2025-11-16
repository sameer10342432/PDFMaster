import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Tool } from "@shared/schema";
import { Search } from "lucide-react";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const { data: tools = [], isLoading: toolsLoading } = useQuery<Tool[]>({
    queryKey: ['/api/tools'],
  });

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<string[]>({
    queryKey: ['/api/categories'],
  });

  const isLoading = toolsLoading || categoriesLoading;

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toolsByCategory = categories.reduce((acc, category) => {
    acc[category] = tools.filter(tool => tool.category === category);
    return acc;
  }, {} as Record<string, Tool[]>);

  return (
    <>
      <Helmet>
        <title>All PDF, Video & Archive Tools - 693+ Free Online Utilities</title>
        <meta name="description" content="Browse all 693+ free PDF, video, audio, image, and archive tools. Merge PDFs, edit videos, extract archives, compress images, and more. Fast, secure, and easy to use." />
        <meta property="og:title" content="All PDF, Video & Archive Tools - 693+ Free Online Utilities" />
        <meta property="og:description" content="Complete collection of 693+ free tools for PDFs, videos, audio, images, and archives. All your file needs including editing, conversion, compression, and AI enhancements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/favicon.png` : ''} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  All 693+ PDF, Audio & Video Tools
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our complete collection of 693+ free tools for PDFs, videos, audio, images, and archives
                </p>
                
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tools..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    data-testid="input-search-tools"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container mx-auto max-w-7xl px-4">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="flex flex-wrap h-auto gap-2 mb-8 justify-start bg-transparent">
                  {isLoading ? (
                    <Skeleton className="h-10 w-32" />
                  ) : (
                    <>
                      <TabsTrigger 
                        value="all"
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        data-testid="tab-all"
                      >
                        All Tools ({tools.length})
                      </TabsTrigger>
                      {categories.map((category) => (
                        <TabsTrigger 
                          key={category}
                          value={category}
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                          data-testid={`tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {category} ({toolsByCategory[category]?.length || 0})
                        </TabsTrigger>
                      ))}
                    </>
                  )}
                </TabsList>

                <TabsContent value={activeCategory} className="mt-0">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="space-y-4 p-6">
                          <Skeleton className="h-12 w-12 rounded-lg" />
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-5/6" />
                        </div>
                      ))}
                    </div>
                  ) : filteredTools.length > 0 ? (
                    <>
                      <div className="mb-8">
                        <p className="text-sm text-muted-foreground">
                          Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredTools.map((tool) => (
                          <ToolCard
                            key={tool.id}
                            id={tool.id}
                            title={tool.title}
                            description={tool.description}
                            icon={tool.icon}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No tools found matching your search.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
