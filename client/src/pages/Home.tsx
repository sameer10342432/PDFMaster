import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Tool } from "@shared/schema";
import { Shield, Zap, Lock, Users, ArrowRight } from "lucide-react";

export default function Home() {
  const { data: tools = [], isLoading } = useQuery<Tool[]>({
    queryKey: ['/api/tools'],
  });

  const allTools = tools;

  return (
    <>
      <Helmet>
        <title>Free PDF, Audio & Video Tools Online - 693+ Tools for All Your Needs</title>
        <meta name="description" content="Free online PDF, audio, video, and archive tools. Merge PDFs, convert audio, edit videos, compress files, extract archives, and more. 693+ professional tools. Fast, secure, and easy to use. No registration required." />
        <meta property="og:title" content="Free PDF, Audio & Video Tools Online - 693+ Professional Tools" />
        <meta property="og:description" content="Professional PDF, audio, video, and archive tools for all your media needs. Convert, edit, compress, merge, enhance, and manage files. 693+ tools available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/favicon.png` : ''} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-20 md:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Free PDF, Audio & Video Tools Online
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional-grade PDF, audio, and video tools for converting, editing, compressing, and merging. 
                  Fast, secure, and completely free. No registration required.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% Free</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="h-4 w-4 text-primary" />
                    <span>No Registration</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Secure & Private</span>
                  </div>
                </div>
                <div>
                  <Link href="/tools">
                    <Button size="lg" className="gap-2" data-testid="button-view-all-tools">
                      View All Tools
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  All {tools.length}+ PDF, Audio & Video Tools
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from our comprehensive collection of {tools.length} professional tools for PDF, audio, and video including conversion, editing, compression, merging, and more
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {isLoading ? (
                  Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="space-y-4 p-6">
                      <Skeleton className="h-12 w-12 rounded-lg" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  ))
                ) : (
                  allTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      id={tool.id}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                    />
                  ))
                )}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Why Choose Our PDF, Audio & Video Tools?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">100% Free</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All tools are completely free to use with no hidden charges or limitations
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure & Private</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your files are encrypted and automatically deleted after processing
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Process your PDFs in seconds with our optimized tools
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">No Signup Required</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Start using our tools immediately without creating an account
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
