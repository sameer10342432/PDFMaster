import { useState, useMemo, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileUploadZone } from "@/components/FileUploadZone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { getToolIcon } from "@/lib/tool-icons";
import { getToolType, getToolConfig, getProcessingEndpoint, getMimeTypesForToolType } from "@/lib/tool-utils";
import type { Tool } from "@shared/schema";
import { Download, ArrowRight, CheckCircle2, FileText, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ToolPage() {
  const [, params] = useRoute("/tool/:id");
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [processingStatus, setProcessingStatus] = useState<string>("");
  const { toast } = useToast();

  const { data: tool, isLoading: toolLoading } = useQuery<Tool>({
    queryKey: params?.id ? ['/api/tools', params.id] : [],
    enabled: !!params?.id,
  });

  const { data: allTools = [] } = useQuery<Tool[]>({
    queryKey: ['/api/tools'],
  });

  // Determine tool type and configuration
  const toolType = useMemo(() => {
    if (!tool) return 'pdf';
    return getToolType(tool.category, tool.id);
  }, [tool]);

  const toolConfig = useMemo(() => {
    return getToolConfig(toolType);
  }, [toolType]);

  const processingEndpoint = useMemo(() => {
    if (!tool) return '/api/process-pdf';
    return getProcessingEndpoint(tool.id, toolType);
  }, [tool, toolType]);

  const mimeTypes = useMemo(() => {
    return getMimeTypesForToolType(toolType);
  }, [toolType]);

  // Determine correct maxFiles based on endpoint (not just tool type)
  // Only PDF merge allows multiple files, all other tools accept single file
  const actualMaxFiles = useMemo(() => {
    return processingEndpoint === '/api/pdf/merge' ? 10 : 1;
  }, [processingEndpoint]);

  // Simulate progress for better UX - must be before any conditional returns
  useEffect(() => {
    if (isProcessing) {
      setProcessingProgress(0);
      const interval = setInterval(() => {
        setProcessingProgress((prev) => {
          if (prev >= 90) return prev; // Stop at 90% until actual completion
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    } else {
      setProcessingProgress(0);
      setProcessingStatus("");
    }
  }, [isProcessing]);

  const isLoading = toolLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-3xl px-4">
              <div className="text-center space-y-4">
                <Skeleton className="h-16 w-16 rounded-lg mx-auto" />
                <Skeleton className="h-8 w-48 mx-auto" />
                <Skeleton className="h-12 w-full max-w-2xl mx-auto" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
        description: `Please upload at least one file to continue.`,
        variant: "destructive",
      });
      return;
    }

    // Check if tool has a valid processing endpoint
    if (!processingEndpoint || processingEndpoint === '') {
      toast({
        title: "Configuration Error",
        description: `This tool is not properly configured yet. Please contact support or try another tool.`,
        variant: "destructive",
      });
      console.error('Tool configuration error:', { toolId: tool?.id, toolType, processingEndpoint });
      return;
    }

    setIsProcessing(true);
    setProcessingStatus("Preparing files...");
    
    try {
      const formData = new FormData();
      
      // Determine field name based on the backend endpoint
      // Only PDF merge uses .array('files'), all other endpoints use .single('file')
      const isMultiFileEndpoint = processingEndpoint === '/api/pdf/merge';
      const fieldName = isMultiFileEndpoint ? 'files' : 'file';
      
      if (isMultiFileEndpoint) {
        // Multiple files upload for PDF merge
        files.forEach((file) => {
          formData.append(fieldName, file);
        });
      } else {
        // Single file upload for all other tools
        if (files.length > 0) {
          formData.append(fieldName, files[0]);
        }
      }
      
      formData.append('toolId', tool.id);

      setProcessingStatus("Uploading files...");
      const response = await fetch(processingEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = `There was an error processing your files. Please try again.`;
        
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

      setProcessingStatus("Processing files...");
      const blob = await response.blob();
      
      if (!blob || blob.size === 0) {
        toast({
          title: "Invalid file",
          description: "The downloaded file is invalid. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      setProcessingProgress(100);
      setProcessingStatus("Preparing download...");
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tool.id}-result.${toolConfig.outputFileExtension}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "✨ Success!",
        description: "Your file has been processed and downloaded.",
      });

      setFiles([]);
    } catch (error) {
      console.error('File processing error:', error);
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
                <div className="flex justify-center mb-4">
                  <div className="rounded-lg bg-primary/10 p-4 inline-block">
                    {(() => {
                      const IconComponent = getToolIcon(tool.id);
                      return <IconComponent className="w-14 h-14 text-primary" aria-label={tool.title} />;
                    })()}
                  </div>
                </div>
                <Badge variant="secondary" className="mb-2">
                  {tool.category}
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
                {tool.capability === "implemented" ? (
                  <>
                    <FileUploadZone 
                      onFilesChange={setFiles}
                      maxFiles={actualMaxFiles}
                      acceptedFileTypes={toolConfig.acceptedFileTypes}
                      uploadLabel={toolConfig.uploadLabel}
                      allowedMimeTypes={mimeTypes}
                    />

                    {files.length > 0 && (
                      <div className="space-y-6">
                        {isProcessing && (
                          <Card className="p-6 border-primary/20 bg-primary/5">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                  <div>
                                    <p className="font-semibold text-sm">Processing your files</p>
                                    <p className="text-xs text-muted-foreground">{processingStatus}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="gap-1">
                                  <Sparkles className="h-3 w-3" />
                                  {processingProgress}%
                                </Badge>
                              </div>
                              <Progress value={processingProgress} className="h-2" />
                              <p className="text-xs text-muted-foreground text-center">
                                Please wait while we process your files. This may take a moment.
                              </p>
                            </div>
                          </Card>
                        )}
                        
                        <div className="flex justify-center">
                          <Button
                            size="lg"
                            onClick={handleProcess}
                            disabled={isProcessing}
                            className="gap-2"
                            data-testid="button-process-file"
                          >
                            {isProcessing ? (
                              <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Download className="h-5 w-5" />
                                Process & Download
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center space-y-4 py-12" data-testid="coming-soon-message">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-muted p-4">
                        <FileText className="w-12 h-12 text-muted-foreground" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {tool.capability === "requires-service" ? "External Service Required" : "Coming Soon"}
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      {tool.capability === "requires-service" 
                        ? "This tool requires external API services to function. We're working on integrating the necessary services."
                        : "This tool is currently under development. We're working hard to bring it to you soon!"}
                    </p>
                    <div className="flex justify-center gap-4 pt-4">
                      <Link href="/tools">
                        <Button variant="outline">
                          Browse Other Tools
                        </Button>
                      </Link>
                    </div>
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

          {tool.article && (
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
                    {tool.article.relatedTools.map((relatedId: string) => {
                      const relatedTool = allTools.find(t => t.id === relatedId);
                      if (!relatedTool) return null;
                      const RelatedIconComponent = getToolIcon(relatedId);
                      
                      return (
                        <Link key={relatedId} href={`/tool/${relatedId}`}>
                          <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer h-full">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-primary/10 p-2 flex items-center justify-center">
                                <RelatedIconComponent className="w-5 h-5 text-primary" aria-label={relatedTool.title} />
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
          )}

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
