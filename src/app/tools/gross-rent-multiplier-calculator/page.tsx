
"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  propertyValue: z.number().min(1, 'Property value must be greater than 0'),
  grossRentalIncome: z.number().min(1, 'Gross rental income must be greater than 0'),
});

type FormValues = z.infer<typeof schema>;

const GrossRentMultiplierCalculator: React.FC = () => {
  const [grm, setGrm] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { propertyValue, grossRentalIncome } = data;
    const calculatedGrm = propertyValue / grossRentalIncome;
    setGrm(calculatedGrm);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Gross Rent Multiplier (GRM) Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">Property Value ($)</label>
                <input 
                  id="propertyValue" 
                  type="number" 
                  {...register('propertyValue', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.propertyValue && <p className="mt-2 text-sm text-red-600">{errors.propertyValue.message}</p>}
              </div>
              
              <div>
                <label htmlFor="grossRentalIncome" className="block text-sm font-medium text-gray-700">Gross Annual Rental Income ($)</label>
                <input 
                  id="grossRentalIncome" 
                  type="number" 
                  {...register('grossRentalIncome', { valueAsNumber: true })} 
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.grossRentalIncome && <p className="mt-2 text-sm text-red-600">{errors.grossRentalIncome.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Calculate GRM
              </button>
            </form>

            {grm !== null && (
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800">Calculation Result</h2>
                <p className="mt-2 text-lg text-gray-700">Gross Rent Multiplier (GRM): <span className="font-bold text-indigo-600">{grm.toFixed(2)}</span></p>
                <p className="mt-2 text-sm text-gray-600">A lower GRM generally indicates a better investment opportunity. However, it should be used in conjunction with other metrics for a comprehensive analysis.</p>
              </div>
            )}
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800">Understanding the Gross Rent Multiplier (GRM)</h2>
            <p>The Gross Rent Multiplier (GRM) is a simple yet effective metric used in real estate to evaluate the value of a rental property. It provides a quick comparison of property values in a given market.</p>
            
            <h3>How to Calculate GRM</h3>
            <p>The formula for GRM is straightforward:</p>
            <p><strong>GRM = Property Value / Gross Annual Rental Income</strong></p>
            <p>For example, if a property is valued at $500,000 and generates a gross annual rental income of $50,000, the GRM would be 10 ($500,000 / $50,000).</p>

            <h3>Using GRM for Investment Analysis</h3>
            <p>GRM is most useful when comparing similar properties in the same market. A lower GRM suggests that the property may be a better value, as the price is lower relative to its income-generating potential.</p>
            <ul>
              <li><strong>Comparative Analysis:</strong> Use GRM to compare multiple properties to identify which one offers a better return potential.</li>
              <li><strong>Market Benchmarking:</strong> Determine the typical GRM for a specific area to gauge whether a property is overvalued or undervalued.</li>
              <li><strong>Quick Screening:</strong> Quickly filter out less attractive investment opportunities before conducting a more detailed analysis.</li>
            </ul>

            <h3>Limitations of GRM</h3>
            <p>While GRM is a useful tool, it has its limitations because it does not account for operating expenses such as taxes, insurance, maintenance, and vacancy rates. Therefore, it should not be the sole factor in your investment decision.</p>
            <p>For a more thorough financial analysis, you should also consider metrics like the Capitalization Rate (Cap Rate) and Cash-on-Cash Return, which provide a more comprehensive view of a property's profitability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrossRentMultiplierCalculator;