import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { pdfTools } from "@shared/schema";
import { Search } from "lucide-react";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = pdfTools.filter(tool =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>All PDF Tools - Free Online PDF Utilities</title>
        <meta name="description" content="Browse all our free PDF tools. Merge, combine, join, append, and manipulate PDFs online. Fast, secure, and easy to use." />
        <meta property="og:title" content="All PDF Tools - Free Online PDF Utilities" />
        <meta property="og:description" content="Complete collection of free PDF tools for all your document needs." />
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
                  All PDF Tools
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our complete collection of free PDF manipulation tools
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
              {filteredTools.length > 0 ? (
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
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
