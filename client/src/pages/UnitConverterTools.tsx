import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Ruler } from "lucide-react";

export default function UnitConverterTools() {
  const { toast } = useToast();
  const [result, setResult] = useState<string>("");

  const convert = async (value: string, from: string, to: string, category: string) => {
    try {
      const res = await fetch("/api/web/convert-unit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: parseFloat(value), from, to, category }),
      });
      const data = await res.json();
      setResult(`${data.result.toFixed(4)} ${to}`);
      toast({ title: "Success", description: "Conversion complete!" });
    } catch (error) {
      toast({ title: "Error", description: "Conversion failed", variant: "destructive" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Unit Converter - Length, Weight, Temperature & More</title>
        <meta name="description" content="Free online unit converter for length, weight, temperature, area, and volume. Convert between meters, feet, kilograms, pounds, and more." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-4 mb-8">
                <div className="flex justify-center mb-4">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <Ruler className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Unit Converter</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Convert between different units of measurement
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="length">
                    <TabsList className="grid grid-cols-3 lg:grid-cols-5 gap-2 h-auto p-1 mb-6">
                      <TabsTrigger value="length" data-testid="tab-length">Length</TabsTrigger>
                      <TabsTrigger value="weight" data-testid="tab-weight">Weight</TabsTrigger>
                      <TabsTrigger value="temperature" data-testid="tab-temperature">Temperature</TabsTrigger>
                      <TabsTrigger value="area" data-testid="tab-area">Area</TabsTrigger>
                      <TabsTrigger value="volume" data-testid="tab-volume">Volume</TabsTrigger>
                    </TabsList>

                    <TabsContent value="length" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="length-value">Value</Label>
                        <Input id="length-value" type="number" placeholder="100" data-testid="input-length-value" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="length-from">From</Label>
                          <Select defaultValue="meter">
                            <SelectTrigger id="length-from" data-testid="select-length-from">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="meter">Meter</SelectItem>
                              <SelectItem value="kilometer">Kilometer</SelectItem>
                              <SelectItem value="centimeter">Centimeter</SelectItem>
                              <SelectItem value="mile">Mile</SelectItem>
                              <SelectItem value="foot">Foot</SelectItem>
                              <SelectItem value="inch">Inch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="length-to">To</Label>
                          <Select defaultValue="foot">
                            <SelectTrigger id="length-to" data-testid="select-length-to">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="meter">Meter</SelectItem>
                              <SelectItem value="kilometer">Kilometer</SelectItem>
                              <SelectItem value="centimeter">Centimeter</SelectItem>
                              <SelectItem value="mile">Mile</SelectItem>
                              <SelectItem value="foot">Foot</SelectItem>
                              <SelectItem value="inch">Inch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button onClick={() => {
                        const value = (document.getElementById("length-value") as HTMLInputElement).value;
                        const from = (document.getElementById("length-from") as HTMLButtonElement).textContent?.toLowerCase() || "meter";
                        const to = (document.getElementById("length-to") as HTMLButtonElement).textContent?.toLowerCase() || "foot";
                        convert(value, from, to, "length");
                      }} className="w-full" data-testid="button-convert-length">Convert</Button>
                    </TabsContent>

                    <TabsContent value="weight" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="weight-value">Value</Label>
                        <Input id="weight-value" type="number" placeholder="100" data-testid="input-weight-value" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="weight-from">From</Label>
                          <Select defaultValue="kilogram">
                            <SelectTrigger id="weight-from" data-testid="select-weight-from">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kilogram">Kilogram</SelectItem>
                              <SelectItem value="gram">Gram</SelectItem>
                              <SelectItem value="pound">Pound</SelectItem>
                              <SelectItem value="ounce">Ounce</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight-to">To</Label>
                          <Select defaultValue="pound">
                            <SelectTrigger id="weight-to" data-testid="select-weight-to">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kilogram">Kilogram</SelectItem>
                              <SelectItem value="gram">Gram</SelectItem>
                              <SelectItem value="pound">Pound</SelectItem>
                              <SelectItem value="ounce">Ounce</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button onClick={() => {
                        const value = (document.getElementById("weight-value") as HTMLInputElement).value;
                        const from = (document.getElementById("weight-from") as HTMLButtonElement).textContent?.toLowerCase() || "kilogram";
                        const to = (document.getElementById("weight-to") as HTMLButtonElement).textContent?.toLowerCase() || "pound";
                        convert(value, from, to, "weight");
                      }} className="w-full" data-testid="button-convert-weight">Convert</Button>
                    </TabsContent>

                    <TabsContent value="temperature" className="space-y-4">
                      <p className="text-sm text-muted-foreground">Convert between Celsius, Fahrenheit, and Kelvin</p>
                    </TabsContent>

                    <TabsContent value="area" className="space-y-4">
                      <p className="text-sm text-muted-foreground">Convert between square meters, acres, hectares, and more</p>
                    </TabsContent>

                    <TabsContent value="volume" className="space-y-4">
                      <p className="text-sm text-muted-foreground">Convert between liters, gallons, milliliters, and more</p>
                    </TabsContent>
                  </Tabs>

                  {result && (
                    <Card className="mt-6 bg-primary/5">
                      <CardHeader>
                        <CardTitle>Result</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg font-semibold" data-testid="text-result">{result}</p>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
