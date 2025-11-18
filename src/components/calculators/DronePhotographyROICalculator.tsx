'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function DronePhotographyROICalculator() {
  const [droneInvestment, setDroneInvestment] = useState('0');
  const [costPerListing, setCostPerListing] = useState('350');
  const [listingsPerYear, setListingsPerYear] = useState('12');
  const [avgListingPrice, setAvgListingPrice] = useState('500000');
  const [priceIncrease, setPriceIncrease] = useState('2');
  const [daysReduction, setDaysReduction] = useState('30');

  const calculate = () => {
    const annualHiringCost = parseFloat(costPerListing) * parseFloat(listingsPerYear);
    const totalAnnualInvestment = parseFloat(droneInvestment) + annualHiringCost;
    
    const priceIncreaseDecimal = parseFloat(priceIncrease) / 100;
    const premiumPerListing = parseFloat(avgListingPrice) * priceIncreaseDecimal;
    const annualPricePremium = premiumPerListing * parseFloat(listingsPerYear);
    
    const monthlyCarryingCost = 2900;
    const savingsPerListing = (parseFloat(daysReduction) / 30) * monthlyCarryingCost;
    const totalCarryingCostSavings = savingsPerListing * parseFloat(listingsPerYear);
    
    const totalAnnualBenefit = annualPricePremium + totalCarryingCostSavings;
    const netProfit = totalAnnualBenefit - totalAnnualInvestment;
    const roi = totalAnnualInvestment > 0 ? (netProfit / totalAnnualInvestment) * 100 : 0;
    const costPerListingCalc = totalAnnualInvestment / parseFloat(listingsPerYear);
    
    return {
      totalAnnualInvestment,
      annualPricePremium,
      totalCarryingCostSavings,
      totalAnnualBenefit,
      netProfit,
      roi,
      costPerListingCalc,
      premiumPerListing,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Drone Photography Investment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Drone Equipment Investment ($ , 0 if hiring)
            </label>
            <input
              type="number"
              value={droneInvestment}
              onChange={(e) => setDroneInvestment(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Cost Per Listing if Hiring Professional ($)
            </label>
            <input
              type="number"
              value={costPerListing}
              onChange={(e) => setCostPerListing(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Listings Using Drone Photos Per Year
            </label>
            <input
              type="number"
              value={listingsPerYear}
              onChange={(e) => setListingsPerYear(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Listing Price ($)
            </label>
            <input
              type="number"
              value={avgListingPrice}
              onChange={(e) => setAvgListingPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Expected Sale Price Increase (%)
            </label>
            <input
              type="number"
              value={priceIncrease}
              onChange={(e) => setPriceIncrease(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Days on Market Reduction
            </label>
            <input
              type="number"
              value={daysReduction}
              onChange={(e) => setDaysReduction(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">ROI Analysis Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Annual Investment</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.totalAnnualInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Annual Sale Price Premium</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.annualPricePremium.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">Carrying Cost Savings</div>
            <div className="text-2xl font-bold text-purple-600">
              ${results.totalCarryingCostSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Annual Benefit</div>
            <div className="text-2xl font-bold text-indigo-600">
              ${results.totalAnnualBenefit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="text-sm text-gray-600">Net Profit</div>
            <div className="text-2xl font-bold text-emerald-600">
              ${results.netProfit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-sm text-gray-600">Return on Investment (ROI)</div>
            <div className="text-2xl font-bold text-yellow-600">
              {results.roi.toFixed(1)}%
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="text-sm font-medium text-gray-700 mb-1">Per Listing Impact</div>
          <div className="text-lg text-gray-900">
            Each drone photography session adds approximately <span className="font-bold text-green-600">${results.premiumPerListing.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span> to your sale price
          </div>
          <div className="text-sm text-gray-600 mt-2">
            At a cost of ${results.costPerListingCalc.toFixed(0)} per listing, you earn ${(results.premiumPerListing - results.costPerListingCalc).toLocaleString('en-US', { maximumFractionDigits: 0 })} net per property.
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Property Type ROI Expectations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Property Type</th>
                <th className="text-right py-2">Typical Premium</th>
                <th className="text-right py-2">Impact Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Luxury Homes ($1M+)</td>
                <td className="text-right">2-5%</td>
                <td className="text-right">Critical</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Single-Family ($300K-$1M)</td>
                <td className="text-right">1.5-3%</td>
                <td className="text-right">High</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Land & Acreage</td>
                <td className="text-right">3-7%</td>
                <td className="text-right">Essential</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Waterfront Properties</td>
                <td className="text-right">3-6%</td>
                <td className="text-right">Very High</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Commercial Properties</td>
                <td className="text-right">2-4%</td>
                <td className="text-right">Standard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
