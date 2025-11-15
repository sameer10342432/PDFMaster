import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pdfTools, toolCategories, toolEmojis } from "@shared/schema";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = pdfTools.filter(tool =>
    (tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     tool.article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     tool.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (!selectedCategory || tool.category === selectedCategory)
  );

  const categoryCounts = toolCategories.map(category => ({
    category,
    count: pdfTools.filter(tool => tool.category === category).length
  }));

  return (
    <>
      <Helmet>
        <title>PDF Tool Articles & Guides - Free Learning Resources</title>
        <meta name="description" content="Browse comprehensive articles and guides for all our PDF tools. Learn how to merge, compress, convert, and manipulate PDFs effectively." />
        <meta property="og:title" content="PDF Tool Articles & Guides" />
        <meta property="og:description" content="Free learning resources for PDF manipulation tools." />
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
                  PDF Tool Articles & Guides
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Learn how to use our PDF tools effectively with comprehensive guides and tutorials
                </p>
                
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    data-testid="input-search-articles"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="flex gap-2 flex-wrap justify-center mb-8">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  data-testid="button-category-all"
                >
                  All Articles ({pdfTools.length})
                </Button>
                {categoryCounts.map(({ category, count }) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category} ({count})
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-4 md:py-8">
            <div className="container mx-auto max-w-7xl px-4">
              {filteredTools.length > 0 ? (
                <>
                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground">
                      Showing {filteredTools.length} {filteredTools.length === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map((tool) => {
                      const emoji = toolEmojis[tool.id] || "📄";
                      return (
                        <Link key={tool.id} href={`/tool/${tool.id}`}>
                          <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-article-${tool.id}`}>
                            <CardHeader className="gap-2">
                              <div className="flex items-start justify-between gap-2">
                                <div className="rounded-lg bg-primary/10 p-2">
                                  <span className="text-3xl" role="img" aria-label={tool.title}>
                                    {emoji}
                                  </span>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {tool.category}
                                </Badge>
                              </div>
                              <CardTitle className="text-lg leading-tight">
                                {tool.article.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
                                {tool.description}
                              </CardDescription>
                              <div className="flex items-center gap-1 text-sm text-primary pt-2">
                                Read Article <ChevronRight className="h-4 w-4" />
                              </div>
                            </CardHeader>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
