import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Percent, DollarSign, TrendingUp, Calendar as CalendarIcon, Ruler, Banknote } from "lucide-react";

export default function CalculatorTools() {
  const { toast } = useToast();
  const [result, setResult] = useState<string>("");

  const calculatePercentage = async (value: string, total: string) => {
    try {
      const res = await fetch("/api/web/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "percentage", values: { value: parseFloat(value), total: parseFloat(total) } }),
      });
      const data = await res.json();
      setResult(`${data.result.percentage.toFixed(2)}%`);
      toast({ title: "Success", description: "Calculation complete!" });
    } catch (error) {
      toast({ title: "Error", description: "Calculation failed", variant: "destructive" });
    }
  };

  const calculateDiscount = async (price: string, discount: string) => {
    try {
      const res = await fetch("/api/web/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "discount", values: { originalPrice: parseFloat(price), discountPercent: parseFloat(discount) } }),
      });
      const data = await res.json();
      setResult(`Discounted Price: $${data.result.discountedPrice.toFixed(2)} (You save: $${data.result.savings.toFixed(2)})`);
      toast({ title: "Success", description: "Discount calculated!" });
    } catch (error) {
      toast({ title: "Error", description: "Calculation failed", variant: "destructive" });
    }
  };

  const calculateLoan = async (principal: string, rate: string, years: string) => {
    try {
      const res = await fetch("/api/web/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "loan", values: { principal: parseFloat(principal), annualRate: parseFloat(rate), years: parseFloat(years) } }),
      });
      const data = await res.json();
      setResult(`Monthly Payment: $${data.result.monthlyPayment.toFixed(2)} | Total: $${data.result.totalPayment.toFixed(2)}`);
      toast({ title: "Success", description: "Loan calculated!" });
    } catch (error) {
      toast({ title: "Error", description: "Calculation failed", variant: "destructive" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Online Calculators - Percentage, Discount, Loan & More</title>
        <meta name="description" content="Free online calculators for percentage, discount, tip, loan, mortgage, age, and more. Fast, accurate calculations for everyday needs." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="text-center space-y-4 mb-8">
                <div className="flex justify-center mb-4">
                  <div className="rounded-lg bg-primary/10 p-4">
                    <Calculator className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Online Calculators
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Free calculators for percentage, discount, loan, tip, and more
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="percentage">
                    <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 mb-6">
                      <TabsTrigger value="percentage" data-testid="tab-percentage">
                        <Percent className="h-4 w-4 mr-2" />
                        Percentage
                      </TabsTrigger>
                      <TabsTrigger value="discount" data-testid="tab-discount">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Discount
                      </TabsTrigger>
                      <TabsTrigger value="loan" data-testid="tab-loan">
                        <Banknote className="h-4 w-4 mr-2" />
                        Loan
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="percentage" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="percent-value">Value</Label>
                        <Input id="percent-value" type="number" placeholder="50" data-testid="input-percent-value" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="percent-total">Total</Label>
                        <Input id="percent-total" type="number" placeholder="200" data-testid="input-percent-total" />
                      </div>
                      <Button onClick={() => {
                        const value = (document.getElementById("percent-value") as HTMLInputElement).value;
                        const total = (document.getElementById("percent-total") as HTMLInputElement).value;
                        calculatePercentage(value, total);
                      }} className="w-full" data-testid="button-calc-percentage">Calculate</Button>
                    </TabsContent>

                    <TabsContent value="discount" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="original-price">Original Price ($)</Label>
                        <Input id="original-price" type="number" placeholder="100" data-testid="input-original-price" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discount-percent">Discount (%)</Label>
                        <Input id="discount-percent" type="number" placeholder="20" data-testid="input-discount-percent" />
                      </div>
                      <Button onClick={() => {
                        const price = (document.getElementById("original-price") as HTMLInputElement).value;
                        const discount = (document.getElementById("discount-percent") as HTMLInputElement).value;
                        calculateDiscount(price, discount);
                      }} className="w-full" data-testid="button-calc-discount">Calculate</Button>
                    </TabsContent>

                    <TabsContent value="loan" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loan-principal">Loan Amount ($)</Label>
                        <Input id="loan-principal" type="number" placeholder="200000" data-testid="input-loan-principal" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loan-rate">Annual Interest Rate (%)</Label>
                        <Input id="loan-rate" type="number" step="0.01" placeholder="5.5" data-testid="input-loan-rate" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loan-years">Loan Term (years)</Label>
                        <Input id="loan-years" type="number" placeholder="30" data-testid="input-loan-years" />
                      </div>
                      <Button onClick={() => {
                        const principal = (document.getElementById("loan-principal") as HTMLInputElement).value;
                        const rate = (document.getElementById("loan-rate") as HTMLInputElement).value;
                        const years = (document.getElementById("loan-years") as HTMLInputElement).value;
                        calculateLoan(principal, rate, years);
                      }} className="w-full" data-testid="button-calc-loan">Calculate</Button>
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
