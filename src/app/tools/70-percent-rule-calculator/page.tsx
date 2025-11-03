
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  afterRepairValue: z.number().min(1, 'After-repair value must be greater than 0'),
  repairCosts: z.number().min(0, 'Repair costs must be a positive number'),
});

type FormValues = z.infer<typeof schema>;

const SeventyPercentRuleCalculator: React.FC = () => {
  const [maxPurchasePrice, setMaxPurchasePrice] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { afterRepairValue, repairCosts } = data;
    const maxPurchase = (afterRepairValue * 0.70) - repairCosts;
    setMaxPurchasePrice(maxPurchase);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">70% Rule Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="afterRepairValue" className="block text-sm font-medium text-gray-700">After-Repair Value (ARV) ($)</label>
                <input 
                  id="afterRepairValue" 
                  type="number" 
                  {...register('afterRepairValue', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.afterRepairValue && <p className="mt-2 text-sm text-red-600">{errors.afterRepairValue.message}</p>}
              </div>
              
              <div>
                <label htmlFor="repairCosts" className="block text-sm font-medium text-gray-700">Repair Costs ($)</label>
                <input 
                  id="repairCosts" 
                  type="number" 
                  {...register('repairCosts', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.repairCosts && <p className="mt-2 text-sm text-red-600">{errors.repairCosts.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate
              </button>
            </form>

            {maxPurchasePrice !== null && (
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800">Calculation Result</h2>
                <p className="mt-2 text-lg text-gray-700">Maximum Purchase Price: <span className="font-bold text-indigo-600">${maxPurchasePrice.toLocaleString()}</span></p>
              </div>
            )}
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800">Understanding the 70% Rule</h2>
            <p>The 70% rule is a guideline used by real estate investors, particularly those who fix and flip properties. It states that an investor should pay no more than 70% of the after-repair value (ARV) of a property, minus the cost of repairs.</p>
            
            <h3>How to Apply the 70% Rule</h3>
            <p>The formula is as follows:</p>
            <p><strong>Maximum Purchase Price = (ARV * 0.70) - Repair Costs</strong></p>
            <p>For example, if a property has an ARV of $300,000 and requires $40,000 in repairs, the maximum purchase price according to the 70% rule would be $170,000 (($300,000 * 0.70) - $40,000).</p>

            <h3>Using the 70% Rule for Investment Analysis</h3>
            <p>This rule helps investors determine a reasonable offer price for a property that needs renovation. The 30% margin is intended to cover holding costs, closing costs, and a profit margin.</p>
            <ul>
              <li><strong>Quick Offer Calculation:</strong> Helps in quickly determining a maximum offer price for a potential flip.</li>
              <li><strong>Risk Management:</strong> Provides a buffer to account for unexpected costs and to ensure a profit.</li>
            </ul>

            <h3>Limitations of the 70% Rule</h3>
            <p>The 70% rule is a general guideline and may not be applicable in all markets or for all types of properties. In highly competitive markets, investors may need to adjust the percentage. It is also highly dependent on accurate estimates of both the ARV and repair costs.</p>
            <p>For a more thorough analysis, investors should conduct detailed due diligence, including a comprehensive repair estimate and a conservative ARV based on comparable sales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventyPercentRuleCalculator;