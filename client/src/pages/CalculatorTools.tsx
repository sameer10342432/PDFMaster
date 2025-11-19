import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Calculator, Percent, DollarSign, Banknote, Loader2 } from "lucide-react";

// Validation Schemas
const percentageSchema = z.object({
  value: z.coerce.number().min(0, "Value must be positive"),
  total: z.coerce.number().min(0.01, "Total must be greater than 0"),
});

const discountSchema = z.object({
  originalPrice: z.coerce.number().min(0.01, "Price must be greater than 0"),
  discountPercent: z.coerce.number().min(0, "Discount cannot be negative").max(100, "Discount cannot exceed 100%"),
});

const loanSchema = z.object({
  principal: z.coerce.number().min(1, "Loan amount must be at least $1"),
  annualRate: z.coerce.number().min(0, "Rate cannot be negative").max(100, "Rate cannot exceed 100%"),
  years: z.coerce.number().min(0.1, "Term must be at least 0.1 years").max(50, "Term cannot exceed 50 years"),
});

type PercentageForm = z.infer<typeof percentageSchema>;
type DiscountForm = z.infer<typeof discountSchema>;
type LoanForm = z.infer<typeof loanSchema>;

export default function CalculatorTools() {
  const { toast } = useToast();
  const [percentageResult, setPercentageResult] = useState<string>("");
  const [discountResult, setDiscountResult] = useState<string>("");
  const [loanResult, setLoanResult] = useState<string>("");

  // Forms
  const percentageForm = useForm<PercentageForm>({
    resolver: zodResolver(percentageSchema),
    defaultValues: { value: 0, total: 0 },
  });

  const discountForm = useForm<DiscountForm>({
    resolver: zodResolver(discountSchema),
    defaultValues: { originalPrice: 0, discountPercent: 0 },
  });

  const loanForm = useForm<LoanForm>({
    resolver: zodResolver(loanSchema),
    defaultValues: { principal: 0, annualRate: 0, years: 0 },
  });

  // Mutations
  const percentageMutation = useMutation({
    mutationFn: async (values: PercentageForm) => {
      const res = await apiRequest("POST", "/api/web/calculator", {
        type: "percentage",
        values,
      });
      return res.json();
    },
    onSuccess: (data) => {
      setPercentageResult(`${data.result.percentage.toFixed(2)}%`);
      toast({ title: "Success", description: "Percentage calculated!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error", 
        description: error instanceof Error ? error.message : "Calculation failed", 
        variant: "destructive" 
      });
    },
  });

  const discountMutation = useMutation({
    mutationFn: async (values: DiscountForm) => {
      const res = await apiRequest("POST", "/api/web/calculator", {
        type: "discount",
        values,
      });
      return res.json();
    },
    onSuccess: (data) => {
      setDiscountResult(
        `Discounted Price: $${data.result.discountedPrice.toFixed(2)} | You save: $${data.result.savings.toFixed(2)}`
      );
      toast({ title: "Success", description: "Discount calculated!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error", 
        description: error instanceof Error ? error.message : "Calculation failed", 
        variant: "destructive" 
      });
    },
  });

  const loanMutation = useMutation({
    mutationFn: async (values: LoanForm) => {
      const res = await apiRequest("POST", "/api/web/calculator", {
        type: "loan",
        values,
      });
      return res.json();
    },
    onSuccess: (data) => {
      setLoanResult(
        `Monthly Payment: $${data.result.monthlyPayment.toFixed(2)} | Total: $${data.result.totalPayment.toFixed(2)} | Total Interest: $${data.result.totalInterest.toFixed(2)}`
      );
      toast({ title: "Success", description: "Loan calculated!" });
    },
    onError: (error) => {
      toast({ 
        title: "Error", 
        description: error instanceof Error ? error.message : "Calculation failed", 
        variant: "destructive" 
      });
    },
  });

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
                  Free calculators for percentage, discount, loan, and more
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="percentage">
                    <TabsList className="grid grid-cols-3 gap-2 h-auto p-1 mb-6">
                      <TabsTrigger value="percentage" data-testid="tab-percentage" className="flex items-center gap-2">
                        <Percent className="h-4 w-4" />
                        <span>Percentage</span>
                      </TabsTrigger>
                      <TabsTrigger value="discount" data-testid="tab-discount" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span>Discount</span>
                      </TabsTrigger>
                      <TabsTrigger value="loan" data-testid="tab-loan" className="flex items-center gap-2">
                        <Banknote className="h-4 w-4" />
                        <span>Loan</span>
                      </TabsTrigger>
                    </TabsList>

                    {/* Percentage Calculator */}
                    <TabsContent value="percentage" className="space-y-4">
                      <Form {...percentageForm}>
                        <form onSubmit={percentageForm.handleSubmit((data) => percentageMutation.mutate(data))} className="space-y-4">
                          <FormField
                            control={percentageForm.control}
                            name="value"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Value</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="50"
                                    {...field}
                                    data-testid="input-percent-value"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={percentageForm.control}
                            name="total"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Total</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="200"
                                    {...field}
                                    data-testid="input-percent-total"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={percentageMutation.isPending}
                            data-testid="button-calc-percentage"
                          >
                            {percentageMutation.isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                            Calculate
                          </Button>
                        </form>
                      </Form>

                      {percentageResult && (
                        <Card className="bg-primary/5">
                          <CardHeader>
                            <CardTitle>Result</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-lg font-semibold" data-testid="text-percentage-result">
                              {percentageResult}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>

                    {/* Discount Calculator */}
                    <TabsContent value="discount" className="space-y-4">
                      <Form {...discountForm}>
                        <form onSubmit={discountForm.handleSubmit((data) => discountMutation.mutate(data))} className="space-y-4">
                          <FormField
                            control={discountForm.control}
                            name="originalPrice"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Original Price ($)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="100"
                                    {...field}
                                    data-testid="input-original-price"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={discountForm.control}
                            name="discountPercent"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Discount (%)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="20"
                                    {...field}
                                    data-testid="input-discount-percent"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={discountMutation.isPending}
                            data-testid="button-calc-discount"
                          >
                            {discountMutation.isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                            Calculate
                          </Button>
                        </form>
                      </Form>

                      {discountResult && (
                        <Card className="bg-primary/5">
                          <CardHeader>
                            <CardTitle>Result</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-lg font-semibold" data-testid="text-discount-result">
                              {discountResult}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>

                    {/* Loan Calculator */}
                    <TabsContent value="loan" className="space-y-4">
                      <Form {...loanForm}>
                        <form onSubmit={loanForm.handleSubmit((data) => loanMutation.mutate(data))} className="space-y-4">
                          <FormField
                            control={loanForm.control}
                            name="principal"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Loan Amount ($)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="200000"
                                    {...field}
                                    data-testid="input-loan-principal"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={loanForm.control}
                            name="annualRate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Annual Interest Rate (%)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.01"
                                    placeholder="5.5"
                                    {...field}
                                    data-testid="input-loan-rate"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={loanForm.control}
                            name="years"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Loan Term (years)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    step="0.1"
                                    placeholder="30"
                                    {...field}
                                    data-testid="input-loan-years"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={loanMutation.isPending}
                            data-testid="button-calc-loan"
                          >
                            {loanMutation.isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
                            Calculate
                          </Button>
                        </form>
                      </Form>

                      {loanResult && (
                        <Card className="bg-primary/5">
                          <CardHeader>
                            <CardTitle>Result</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-lg font-semibold" data-testid="text-loan-result">
                              {loanResult}
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>
                  </Tabs>
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
