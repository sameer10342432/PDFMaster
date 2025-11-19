import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Type, Hash, Sparkles, BarChart, Shuffle, Loader2, Copy, Download } from "lucide-react";

export default function TextTools() {
  const [activeTab, setActiveTab] = useState("case-converter");
  const { toast } = useToast();

  // Case Converter
  const [caseInputText, setCaseInputText] = useState("");
  const [caseType, setCaseType] = useState("uppercase");
  const [caseResult, setCaseResult] = useState("");
  const [isConverting, setIsConverting] = useState(false);

  // Text Generator
  const [generatorType, setGeneratorType] = useState("lorem");
  const [paragraphs, setParagraphs] = useState("3");
  const [wordsPerPara, setWordsPerPara] = useState("50");
  const [passwordLength, setPasswordLength] = useState("16");
  const [randomLength, setRandomLength] = useState("100");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedText, setGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Text Analysis
  const [analysisText, setAnalysisText] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Text Manipulation
  const [manipulateText, setManipulateText] = useState("");
  const [manipulateOperation, setManipulateOperation] = useState("reverse");
  const [manipulateResult, setManipulateResult] = useState("");
  const [isManipulating, setIsManipulating] = useState(false);

  const convertCase = async () => {
    if (!caseInputText.trim()) {
      toast({ title: "Error", description: "Please enter text to convert", variant: "destructive" });
      return;
    }

    setIsConverting(true);
    try {
      const formData = new FormData();
      formData.append("text", caseInputText);
      formData.append("caseType", caseType);

      const res = await fetch("/api/text/convert-case", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to convert case");
      }

      const response = await res.json();
      setCaseResult(response.result);
      toast({ title: "Success", description: "Text converted successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to convert text", variant: "destructive" });
    } finally {
      setIsConverting(false);
    }
  };

  const generateText = async () => {
    setIsGenerating(true);
    try {
      const formData = new FormData();
      formData.append("type", generatorType);
      
      const options: Record<string, any> = {};
      if (generatorType === "lorem") {
        options.paragraphs = paragraphs;
        options.wordsPerPara = wordsPerPara;
      } else if (generatorType === "random") {
        options.length = randomLength;
        options.includeNumbers = includeNumbers;
        options.includeSpecial = includeSymbols;
      } else if (generatorType === "password") {
        options.length = passwordLength;
        options.uppercase = true;
        options.lowercase = true;
        options.numbers = includeNumbers;
        options.symbols = includeSymbols;
      }
      formData.append("options", JSON.stringify(options));

      const res = await fetch("/api/text/generate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to generate text");
      }

      const response = await res.json();
      setGeneratedText(response.result);
      toast({ title: "Success", description: "Text generated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to generate text", variant: "destructive" });
    } finally {
      setIsGenerating(false);
    }
  };

  const analyzeText = async () => {
    if (!analysisText.trim()) {
      toast({ title: "Error", description: "Please enter text to analyze", variant: "destructive" });
      return;
    }

    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("text", analysisText);

      const res = await fetch("/api/text/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to analyze text");
      }

      const response = await res.json();
      setAnalysisResult(response.result);
      toast({ title: "Success", description: "Text analyzed successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to analyze text", variant: "destructive" });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const performManipulation = async () => {
    if (!manipulateText.trim()) {
      toast({ title: "Error", description: "Please enter text to manipulate", variant: "destructive" });
      return;
    }

    setIsManipulating(true);
    try {
      const formData = new FormData();
      formData.append("text", manipulateText);
      formData.append("operation", manipulateOperation);
      formData.append("options", JSON.stringify({}));

      const res = await fetch("/api/text/manipulate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to manipulate text");
      }

      const response = await res.json();
      setManipulateResult(response.result);
      toast({ title: "Success", description: "Text manipulated successfully!" });
    } catch (error) {
      toast({ title: "Error", description: error instanceof Error ? error.message : "Failed to manipulate text", variant: "destructive" });
    } finally {
      setIsManipulating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied", description: "Text copied to clipboard!" });
  };

  return (
    <>
      <Helmet>
        <title>Text Tools - Case Converter, Generators & Analysis</title>
        <meta name="description" content="Free online text tools including case converter, text generators, analysis, and manipulation tools. Convert text case, generate Lorem Ipsum, analyze text statistics, and more." />
        <meta property="og:title" content="Text Tools - Case Converter, Generators & Analysis" />
        <meta property="og:description" content="Professional text manipulation tools for case conversion, text generation, analysis, and more. Fast, free, and easy to use." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="text-center space-y-4 mb-8">
                <div className="inline-block rounded-full bg-primary/10 p-4">
                  <Type className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Text Tools</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Convert text case, generate Lorem Ipsum and passwords, analyze text statistics, and manipulate text. Free, fast, and secure.
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto mb-8">
                  <TabsTrigger value="case-converter" className="flex items-center gap-2" data-testid="tab-case-converter">
                    <Type className="h-4 w-4" />
                    <span>Case Converter</span>
                  </TabsTrigger>
                  <TabsTrigger value="generator" className="flex items-center gap-2" data-testid="tab-generator">
                    <Sparkles className="h-4 w-4" />
                    <span>Generator</span>
                  </TabsTrigger>
                  <TabsTrigger value="analysis" className="flex items-center gap-2" data-testid="tab-analysis">
                    <BarChart className="h-4 w-4" />
                    <span>Analysis</span>
                  </TabsTrigger>
                  <TabsTrigger value="manipulate" className="flex items-center gap-2" data-testid="tab-manipulate">
                    <Shuffle className="h-4 w-4" />
                    <span>Manipulate</span>
                  </TabsTrigger>
                </TabsList>

                {/* Case Converter Tab */}
                <TabsContent value="case-converter">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card data-testid="card-case-input">
                      <CardHeader>
                        <CardTitle>Convert Text Case</CardTitle>
                        <CardDescription>Enter text and choose conversion type</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="case-type">Case Type</Label>
                          <Select value={caseType} onValueChange={setCaseType}>
                            <SelectTrigger id="case-type" data-testid="select-case-type">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uppercase">UPPERCASE</SelectItem>
                              <SelectItem value="lowercase">lowercase</SelectItem>
                              <SelectItem value="titlecase">Title Case</SelectItem>
                              <SelectItem value="sentencecase">Sentence case</SelectItem>
                              <SelectItem value="camelcase">camelCase</SelectItem>
                              <SelectItem value="snakecase">snake_case</SelectItem>
                              <SelectItem value="kebabcase">kebab-case</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="case-input">Text Input</Label>
                          <Textarea
                            id="case-input"
                            placeholder="Enter text to convert..."
                            value={caseInputText}
                            onChange={(e) => setCaseInputText(e.target.value)}
                            className="min-h-[200px]"
                            data-testid="textarea-case-input"
                          />
                        </div>

                        <Button 
                          onClick={convertCase} 
                          disabled={isConverting}
                          className="w-full"
                          data-testid="button-convert-case"
                        >
                          {isConverting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Convert Case
                        </Button>
                      </CardContent>
                    </Card>

                    <Card data-testid="card-case-result">
                      <CardHeader>
                        <CardTitle>Result</CardTitle>
                        <CardDescription>Your converted text</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder="Converted text will appear here..."
                          value={caseResult}
                          readOnly
                          className="min-h-[200px]"
                          data-testid="textarea-case-result"
                        />
                        
                        {caseResult && (
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              onClick={() => copyToClipboard(caseResult)}
                              className="flex-1"
                              data-testid="button-copy-result"
                            >
                              <Copy className="mr-2 h-4 w-4" />
                              Copy
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Text Generator Tab */}
                <TabsContent value="generator">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card data-testid="card-generator-input">
                      <CardHeader>
                        <CardTitle>Generate Text</CardTitle>
                        <CardDescription>Create Lorem Ipsum, random text, or passwords</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="generator-type">Generator Type</Label>
                          <Select value={generatorType} onValueChange={setGeneratorType}>
                            <SelectTrigger id="generator-type" data-testid="select-generator-type">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lorem">Lorem Ipsum</SelectItem>
                              <SelectItem value="random">Random Text</SelectItem>
                              <SelectItem value="password">Password</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {generatorType === "lorem" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="paragraphs">Paragraphs</Label>
                              <Input
                                id="paragraphs"
                                type="number"
                                value={paragraphs}
                                onChange={(e) => setParagraphs(e.target.value)}
                                min="1"
                                max="100"
                                data-testid="input-paragraphs"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="words-per-para">Words per Paragraph</Label>
                              <Input
                                id="words-per-para"
                                type="number"
                                value={wordsPerPara}
                                onChange={(e) => setWordsPerPara(e.target.value)}
                                min="10"
                                max="500"
                                data-testid="input-words-per-para"
                              />
                            </div>
                          </>
                        )}

                        {generatorType === "random" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="random-length">Length</Label>
                              <Input
                                id="random-length"
                                type="number"
                                value={randomLength}
                                onChange={(e) => setRandomLength(e.target.value)}
                                min="1"
                                max="10000"
                                data-testid="input-random-length"
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="include-numbers">Include Numbers</Label>
                              <Switch
                                id="include-numbers"
                                checked={includeNumbers}
                                onCheckedChange={setIncludeNumbers}
                                data-testid="switch-include-numbers"
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="include-symbols">Include Symbols</Label>
                              <Switch
                                id="include-symbols"
                                checked={includeSymbols}
                                onCheckedChange={setIncludeSymbols}
                                data-testid="switch-include-symbols"
                              />
                            </div>
                          </>
                        )}

                        {generatorType === "password" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="password-length">Password Length</Label>
                              <Input
                                id="password-length"
                                type="number"
                                value={passwordLength}
                                onChange={(e) => setPasswordLength(e.target.value)}
                                min="4"
                                max="128"
                                data-testid="input-password-length"
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="pwd-numbers">Include Numbers</Label>
                              <Switch
                                id="pwd-numbers"
                                checked={includeNumbers}
                                onCheckedChange={setIncludeNumbers}
                                data-testid="switch-pwd-numbers"
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="pwd-symbols">Include Symbols</Label>
                              <Switch
                                id="pwd-symbols"
                                checked={includeSymbols}
                                onCheckedChange={setIncludeSymbols}
                                data-testid="switch-pwd-symbols"
                              />
                            </div>
                          </>
                        )}

                        <Button 
                          onClick={generateText} 
                          disabled={isGenerating}
                          className="w-full"
                          data-testid="button-generate-text"
                        >
                          {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Generate Text
                        </Button>
                      </CardContent>
                    </Card>

                    <Card data-testid="card-generator-result">
                      <CardHeader>
                        <CardTitle>Generated Text</CardTitle>
                        <CardDescription>Your generated content</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder="Generated text will appear here..."
                          value={generatedText}
                          readOnly
                          className="min-h-[300px]"
                          data-testid="textarea-generated-text"
                        />
                        
                        {generatedText && (
                          <Button 
                            variant="outline" 
                            onClick={() => copyToClipboard(generatedText)}
                            className="w-full"
                            data-testid="button-copy-generated"
                          >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Text Analysis Tab */}
                <TabsContent value="analysis">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card data-testid="card-analysis-input">
                      <CardHeader>
                        <CardTitle>Analyze Text</CardTitle>
                        <CardDescription>Get detailed statistics about your text</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="analysis-input">Text to Analyze</Label>
                          <Textarea
                            id="analysis-input"
                            placeholder="Enter text to analyze..."
                            value={analysisText}
                            onChange={(e) => setAnalysisText(e.target.value)}
                            className="min-h-[300px]"
                            data-testid="textarea-analysis-input"
                          />
                        </div>

                        <Button 
                          onClick={analyzeText} 
                          disabled={isAnalyzing}
                          className="w-full"
                          data-testid="button-analyze-text"
                        >
                          {isAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Analyze Text
                        </Button>
                      </CardContent>
                    </Card>

                    <Card data-testid="card-analysis-result">
                      <CardHeader>
                        <CardTitle>Analysis Results</CardTitle>
                        <CardDescription>Text statistics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {analysisResult ? (
                          <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Characters:</span>
                              <span className="font-semibold" data-testid="stat-characters">{analysisResult.characters}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Characters (no spaces):</span>
                              <span className="font-semibold" data-testid="stat-characters-no-spaces">{analysisResult.charactersNoSpaces}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Words:</span>
                              <span className="font-semibold" data-testid="stat-words">{analysisResult.words}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Sentences:</span>
                              <span className="font-semibold" data-testid="stat-sentences">{analysisResult.sentences}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Paragraphs:</span>
                              <span className="font-semibold" data-testid="stat-paragraphs">{analysisResult.paragraphs}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                              <span className="text-muted-foreground">Reading Time:</span>
                              <span className="font-semibold" data-testid="stat-reading-time">{analysisResult.readingTime} min</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-muted-foreground">Avg Word Length:</span>
                              <span className="font-semibold" data-testid="stat-avg-word-length">{analysisResult.averageWordLength.toFixed(2)}</span>
                            </div>
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-center py-12">
                            Analysis results will appear here
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Text Manipulation Tab */}
                <TabsContent value="manipulate">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card data-testid="card-manipulate-input">
                      <CardHeader>
                        <CardTitle>Manipulate Text</CardTitle>
                        <CardDescription>Transform your text in various ways</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="manipulate-operation">Operation</Label>
                          <Select value={manipulateOperation} onValueChange={setManipulateOperation}>
                            <SelectTrigger id="manipulate-operation" data-testid="select-manipulate-operation">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="reverse">Reverse Text</SelectItem>
                              <SelectItem value="remove-linebreaks">Remove Line Breaks</SelectItem>
                              <SelectItem value="remove-spaces">Remove Extra Spaces</SelectItem>
                              <SelectItem value="sort-lines">Sort Lines</SelectItem>
                              <SelectItem value="remove-duplicates">Remove Duplicate Lines</SelectItem>
                              <SelectItem value="add-line-numbers">Add Line Numbers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="manipulate-input">Text Input</Label>
                          <Textarea
                            id="manipulate-input"
                            placeholder="Enter text to manipulate..."
                            value={manipulateText}
                            onChange={(e) => setManipulateText(e.target.value)}
                            className="min-h-[200px]"
                            data-testid="textarea-manipulate-input"
                          />
                        </div>

                        <Button 
                          onClick={performManipulation} 
                          disabled={isManipulating}
                          className="w-full"
                          data-testid="button-manipulate-text"
                        >
                          {isManipulating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Transform Text
                        </Button>
                      </CardContent>
                    </Card>

                    <Card data-testid="card-manipulate-result">
                      <CardHeader>
                        <CardTitle>Result</CardTitle>
                        <CardDescription>Your transformed text</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder="Transformed text will appear here..."
                          value={manipulateResult}
                          readOnly
                          className="min-h-[200px]"
                          data-testid="textarea-manipulate-result"
                        />
                        
                        {manipulateResult && (
                          <Button 
                            variant="outline" 
                            onClick={() => copyToClipboard(manipulateResult)}
                            className="w-full"
                            data-testid="button-copy-manipulated"
                          >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
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
