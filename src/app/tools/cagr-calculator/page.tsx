'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  beginningValue: z.number().min(0, { message: 'Beginning value must be a positive number.' }),
  endingValue: z.number().min(0, { message: 'Ending value must be a positive number.' }),
  years: z.number().min(1, { message: 'Years must be at least 1.' }),
});

const CagrCalculator = () => {
  const [cagr, setCagr] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      beginningValue: 0,
      endingValue: 0,
      years: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { beginningValue, endingValue, years } = values;
    const calculatedCagr = (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
    setCagr(calculatedCagr);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>CAGR Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="beginningValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beginning Value</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endingValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ending Value</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="years"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Years</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Calculate CAGR</Button>
            </form>
          </Form>
          {cagr !== null && (
            <div className="mt-4 p-4 border rounded-md">
              <h3 className="text-lg font-semibold">Your CAGR is: {cagr.toFixed(2)}%</h3>
            </div>
          )}
        </CardContent>
      </Card>

      <article className="prose lg:prose-xl mx-auto mt-8">
        <h2>Understanding Compound Annual Growth Rate (CAGR)</h2>
        <p>
          The Compound Annual Growth Rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance, assuming the profits were reinvested at the end of each year of the investment’s lifespan.
        </p>
        <h3>How to Calculate CAGR</h3>
        <p>
          The formula for CAGR is:
        </p>
        <p>
          <strong>CAGR = [(Ending Value / Beginning Value)^(1 / Number of Years)] - 1</strong>
        </p>
        <p>
          Where:
        </p>
        <ul>
          <li><strong>Ending Value:</strong> The value of the investment at the end of the period.</li>
          <li><strong>Beginning Value:</strong> The value of the investment at the beginning of the period.</li>
          <li><strong>Number of Years:</strong> The total number of years the investment has grown.</li>
        </ul>
        <h3>Why is CAGR Important?</h3>
        <p>
          CAGR is one of the most accurate ways to calculate the return for an investment that has risen and fallen in value over time. It provides a smoothed annualized gain, which helps to understand the true growth of an investment. This is particularly useful for comparing the performance of different investments.
        </p>
      </article>
    </div>
  );
};

export default CagrCalculator;