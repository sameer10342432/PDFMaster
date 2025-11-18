'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function MatterportTourROICalculator() {
  const [tourCost, setTourCost] = useState('350');
  const [equipmentCost, setEquipmentCost] = useState('0');
  const [listingsPerYear, setListingsPerYear] = useState('10');
  const [avgListingPrice, setAvgListingPrice] = useState('450000');
  const [priceIncrease, setPriceIncrease] = useState('3');
  const [daysReduction, setDaysReduction] = useState('25');

  const calculate = () => {
    const annualTourCost = parseFloat(tourCost) * parseFloat(listingsPerYear);
    const totalInvestment = parseFloat(equipmentCost) + annualTourCost;
    
    const priceIncreaseDecimal = parseFloat(priceIncrease) / 100;
    const premiumPerListing = parseFloat(avgListingPrice) * priceIncreaseDecimal;
    const annualPricePremium = premiumPerListing * parseFloat(listingsPerYear);
    
    const monthlyCarryingCost = 2900;
    const savingsPerListing = (parseFloat(daysReduction) / 30) * monthlyCarryingCost;
    const carryingCostSavings = savingsPerListing * parseFloat(listingsPerYear);
    
    const totalBenefit = annualPricePremium + carryingCostSavings;
    const netProfit = totalBenefit - totalInvestment;
    const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;
    
    return {
      totalInvestment,
      annualPricePremium,
      carryingCostSavings,
      totalBenefit,
      netProfit,
      roi,
      premiumPerListing,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">3D Virtual Tour Investment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Cost Per 3D Tour if Hiring ($)
            </label>
            <input
              type="number"
              value={tourCost}
              onChange={(e) => setTourCost(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Equipment Cost if Buying ($, 0 if hiring)
            </label>
            <input
              type="number"
              value={equipmentCost}
              onChange={(e) => setEquipmentCost(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Listings with 3D Tours Per Year
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
              Days on Market Reduction
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Annual Investment</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.totalInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
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
              ${results.carryingCostSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Annual Benefit</div>
            <div className="text-2xl font-bold text-indigo-600">
              ${results.totalBenefit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="text-sm text-gray-600">Net Profit</div>
            <div className="text-2xl font-bold text-emerald-600">
              ${results.netProfit.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="text-sm text-gray-600">ROI</div>
            <div className="text-2xl font-bold text-yellow-600">
              {results.roi.toFixed(1)}%
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Impact by Property Segment</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Luxury Homes ($1M+)</span>
            <span className="font-semibold">3-9% premium - Essential</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Upper-Middle ($500K-$1M)</span>
            <span className="font-semibold">2-5% premium - Significant</span>
          </div>
          <div className="flex justify-between p-2 bg-gray-50 rounded">
            <span>Middle Market ($300K-$500K)</span>
            <span className="font-semibold">2-4% premium - Very Positive</span>
          </div>
          <div className="flex justify-between p-2">
            <span>Vacation/Second Homes</span>
            <span className="font-semibold">4-8% premium - Critical</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
