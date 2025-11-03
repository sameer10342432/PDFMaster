
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  purchasePrice: z.number().min(1, 'Purchase price must be greater than 0'),
  monthlyRent: z.number().min(1, 'Monthly rent must be greater than 0'),
});

type FormValues = z.infer<typeof schema>;

const OnePercentRuleCalculator: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { purchasePrice, monthlyRent } = data;
    const onePercentOfPrice = purchasePrice * 0.01;
    if (monthlyRent >= onePercentOfPrice) {
      setResult(`The property meets the 1% rule. The monthly rent of $${monthlyRent.toLocaleString()} is greater than or equal to 1% of the purchase price ($${onePercentOfPrice.toLocaleString()}).`);
    } else {
      setResult(`The property does not meet the 1% rule. The monthly rent of $${monthlyRent.toLocaleString()} is less than 1% of the purchase price ($${onePercentOfPrice.toLocaleString()}).`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">1% Rule Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">Purchase Price ($)</label>
                <input 
                  id="purchasePrice" 
                  type="number" 
                  {...register('purchasePrice', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.purchasePrice && <p className="mt-2 text-sm text-red-600">{errors.purchasePrice.message}</p>}
              </div>
              
              <div>
                <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700">Monthly Rent ($)</label>
                <input 
                  id="monthlyRent" 
                  type="number" 
                  {...register('monthlyRent', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.monthlyRent && <p className="mt-2 text-sm text-red-600">{errors.monthlyRent.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate
              </button>
            </form>

            {result && (
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800">Calculation Result</h2>
                <p className="mt-2 text-lg text-gray-700">{result}</p>
              </div>
            )}
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800">Understanding the 1% Rule</h2>
            <p>The 1% rule is a guideline used by real estate investors to quickly screen potential investment properties. It states that the gross monthly rent should be at least 1% of the property's purchase price.</p>
            
            <h3>How to Apply the 1% Rule</h3>
            <p>The formula is simple:</p>
            <p><strong>Monthly Rent ≥ Purchase Price * 0.01</strong></p>
            <p>For example, if a property costs $200,000, the monthly rent should be at least $2,000 to meet the 1% rule.</p>

            <h3>Using the 1% Rule for Investment Analysis</h3>
            <p>The 1% rule is a useful starting point for evaluating a rental property's potential cash flow. If a property meets this rule, it is more likely to generate positive cash flow after accounting for expenses.</p>
            <ul>
              <li><strong>Quick Screening:</strong> Easily filter out properties that are unlikely to be profitable.</li>
              <li><strong>Initial Assessment:</strong> Provides a quick check on the relationship between rental income and property cost.</li>
            </ul>

            <h3>Limitations of the 1% Rule</h3>
            <p>The 1% rule is a heuristic, not a comprehensive financial analysis. It does not account for operating expenses, property taxes, insurance, or vacancy rates. Therefore, it should be used as a preliminary screening tool, not as the sole basis for an investment decision.</p>
            <p>For a more detailed analysis, you should consider other metrics like the cap rate, cash-on-cash return, and a full breakdown of expenses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePercentRuleCalculator;