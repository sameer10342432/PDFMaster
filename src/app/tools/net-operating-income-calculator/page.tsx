'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  grossRentalIncome: z.number().min(0, { message: 'Gross rental income must be a positive number.' }),
  operatingExpenses: z.number().min(0, { message: 'Operating expenses must be a positive number.' }),
});

export default function NOICalculatorPage() {
  const [noi, setNoi] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grossRentalIncome: 0,
      operatingExpenses: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const noiValue = values.grossRentalIncome - values.operatingExpenses;
    setNoi(noiValue);
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Net Operating Income (NOI) Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="grossRentalIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gross Rental Income</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="operatingExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Operating Expenses</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Calculate NOI</Button>
            </form>
          </Form>
          {noi !== null && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Your Net Operating Income (NOI) is: ${noi.toLocaleString()}</h2>
            </div>
          )}
        </CardContent>
      </Card>

      <article className="prose lg:prose-xl mt-8">
        <h2>Understanding Net Operating Income (NOI)</h2>
        <p>
          Net Operating Income (NOI) is a calculation used to analyze the profitability of income-generating real estate investments. NOI equals all revenue from the property, minus all reasonably necessary operating expenses.
        </p>
        <h3>How to Calculate NOI</h3>
        <p>
          The formula for NOI is:
        </p>
        <pre><code>NOI = Gross Rental Income - Operating Expenses</code></pre>
        <h3>What are Operating Expenses?</h3>
        <p>
          Operating expenses are the costs required to run and maintain the property. They typically include property taxes, insurance, maintenance, repairs, and property management fees. Debt service (principal and interest payments on a loan) and income taxes are not included in operating expenses.
        </p>
        <h3>Why NOI is Important</h3>
        <p>
          NOI is a key figure in real estate analysis. It helps investors determine a property's value, calculate the cap rate, and assess its cash flow potential. A higher NOI indicates a more profitable investment.
        </p>
      </article>
    </div>
  );
}