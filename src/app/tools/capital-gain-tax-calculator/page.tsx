
'use client';

import { FormProvider } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Landmark, FileText, TrendingDown } from 'lucide-react';
import { useCapitalGainsTaxCalculator } from '@/components/capital-gain-tax-calculator/hooks/useCapitalGainsTaxCalculator';
import { CalculatorForm } from '@/components/capital-gain-tax-calculator/components/CalculatorForm';
import { Results } from '@/components/capital-gain-tax-calculator/components/Results';

const CapitalGainsTaxCalculator = () => {
  const { form, onSubmit, analysis }: { form: any, onSubmit: (data: any) => void, analysis: any } = useCapitalGainsTaxCalculator();

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Landmark className="mr-2" />
            Capital Gains Tax Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <CalculatorForm />
                <Button type="submit" className="w-full">
                  Calculate Tax
                </Button>
              </form>
            </Form>
          </FormProvider>
          <Results analysis={analysis} />
        </CardContent>
      </Card>

      <article className="prose dark:prose-invert max-w-4xl mx-auto mt-12">
        <h2 className="flex items-center"><FileText className="mr-2" /> Understanding Capital Gains Tax on Property</h2>
        <p>
          Capital gains tax is a tax on the profit (gain) you make from selling an asset that has increased in value. For real estate, this is the difference between the selling price and your 'basis' in the property (usually the purchase price plus improvement costs).
        </p>

        <h3 className="flex items-center"><TrendingDown className="mr-2" /> Short-Term vs. Long-Term Capital Gains</h3>
        <p>
          The amount of tax you pay depends on how long you held the property:
        </p>
        <ul>
          <li><strong>Short-Term Capital Gains:</strong> If you sell the property after holding it for one year or less, the gain is considered short-term. It is taxed at your ordinary income tax rate, which is typically higher.</li>
          <li><strong>Long-Term Capital Gains:</strong> If you sell the property after holding it for more than one year, the gain is considered long-term. It is taxed at lower, more favorable rates (0%, 15%, or 20% depending on your income).</li>
        </ul>

        <h4>Why It Matters for Investors</h4>
        <p>
          Understanding the difference is crucial for real estate investors. A long-term hold can result in significant tax savings. This calculator uses simplified 2023 tax brackets for demonstration purposes. Tax laws are complex and change, so it's essential to consult with a tax professional for specific advice.
        </p>

        <h4>Disclaimer</h4>
        <p>
          This calculator is for informational and educational purposes only and should not be considered financial or tax advice. The tax calculations are based on simplified assumptions and may not reflect your individual tax situation. Always consult with a qualified professional before making any financial decisions.
        </p>
      </article>
    </div>
  );
};

export default CapitalGainsTaxCalculator;