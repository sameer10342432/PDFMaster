import { useState } from "react";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileUploadZone } from "@/components/FileUploadZone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { pdfTools } from "@shared/schema";
import { Download, ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ToolPage() {
  const [, params] = useRoute("/tool/:id");
  const tool = pdfTools.find(t => t.id === params?.id);
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Tool Not Found</h1>
            <p className="text-muted-foreground">The requested tool could not be found.</p>
            <Link href="/tools">
              <Button>Browse All Tools</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleProcess = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one PDF file to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });
      formData.append('toolId', tool.id);

      const response = await fetch('/api/process-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = 'There was an error processing your PDF files. Please try again.';
        
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        
        toast({
          title: "Processing failed",
          description: errorMessage,
          variant: "destructive",
        });
        
        return;
      }

      const blob = await response.blob();
      
      if (!blob || blob.size === 0 || blob.type !== 'application/pdf') {
        toast({
          title: "Invalid PDF",
          description: "The downloaded file is not a valid PDF. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tool.id}-result.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Success!",
        description: "Your PDF has been processed and downloaded.",
      });

      setFiles([]);
    } catch (error) {
      console.error('PDF processing error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
      
      toast({
        title: "Processing failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{tool.metaTitle}</title>
        <meta name="description" content={tool.metaDescription} />
        <meta property="og:title" content={tool.metaTitle} />
        <meta property="og:description" content={tool.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/favicon.png` : ''} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-3xl px-4">
              <div className="text-center space-y-4">
                <Badge variant="secondary" className="mb-2">
                  PDF Tool
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {tool.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto max-w-3xl px-4">
              <Card className="p-8 space-y-8">
                <FileUploadZone onFilesChange={setFiles} />

                {files.length > 0 && (
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      onClick={handleProcess}
                      disabled={isProcessing}
                      className="gap-2"
                      data-testid="button-process-pdf"
                    >
                      {isProcessing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Download className="h-5 w-5" />
                          Process & Download PDF
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </section>

          <section className="py-12 bg-muted/30">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                How to Use {tool.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tool.howTo.map((step, index) => (
                  <div key={index} className="flex gap-4" data-testid={`step-${index}`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
              <article className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-3xl font-semibold mb-6">{tool.article.title}</h2>
                
                <div 
                  className="space-y-6 text-base leading-relaxed text-foreground"
                  dangerouslySetInnerHTML={{ 
                    __html: tool.article.content.replace(/\n\n/g, '</p><p>').replace(/##/g, '<h3 class="text-2xl font-semibold mt-8 mb-4">').replace(/\n/g, '<br/>') 
                  }}
                />
              </article>

              <Separator className="my-12" />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Related Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tool.article.relatedTools.map((relatedId) => {
                    const relatedTool = pdfTools.find(t => t.id === relatedId);
                    if (!relatedTool) return null;
                    
                    return (
                      <Link key={relatedId} href={`/tool/${relatedId}`}>
                        <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer h-full">
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-primary/10 p-2">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm">{relatedTool.title}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-primary/5">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold">Ready to process your PDFs?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Start using our free {tool.title.toLowerCase()} tool now. Fast, secure, and completely free.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>No Registration</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Files Deleted After 1 Hour</span>
                  </div>
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
