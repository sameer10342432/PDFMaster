'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function SellersPacketGenerator() {
  const [estimatedValue, setEstimatedValue] = useState('500000');
  const [commissionRate, setCommissionRate] = useState('6');
  const [mortgageBalance, setMortgageBalance] = useState('350000');
  const [closingCosts, setClosingCosts] = useState('1');
  const [marketingBudget, setMarketingBudget] = useState('2000');

  const calculate = () => {
    const salePrice = parseFloat(estimatedValue);
    const commissionDecimal = parseFloat(commissionRate) / 100;
    const totalCommission = salePrice * commissionDecimal;
    const closingCostsDecimal = parseFloat(closingCosts) / 100;
    const totalClosingCosts = salePrice * closingCostsDecimal;
    const netProceeds = salePrice - totalCommission - totalClosingCosts - parseFloat(mortgageBalance);
    const marketingROI = ((salePrice - parseFloat(marketingBudget)) / parseFloat(marketingBudget) * 100);
    
    return {
      salePrice,
      totalCommission,
      totalClosingCosts,
      netProceeds,
      marketingROI,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Listing Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Estimated Property Value ($)</label>
            <input
              type="number"
              value={estimatedValue}
              onChange={(e) => setEstimatedValue(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total Commission Rate (%)</label>
            <input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Current Mortgage Balance ($)</label>
            <input
              type="number"
              value={mortgageBalance}
              onChange={(e) => setMortgageBalance(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Estimated Closing Costs (%)</label>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Marketing Investment Budget ($)</label>
            <input
              type="number"
              value={marketingBudget}
              onChange={(e) => setMarketingBudget(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Seller Net Proceeds Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Estimated Sale Price</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.salePrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Commission</div>
            <div className="text-2xl font-bold text-red-600">
              ${results.totalCommission.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-sm text-gray-600">Closing Costs</div>
            <div className="text-2xl font-bold text-orange-600">
              ${results.totalClosingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Net Proceeds to Seller</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Listing Presentation Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Professional Introduction</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Comparative Market Analysis</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Comprehensive Marketing Plan</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Pricing Strategy</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Home Preparation Guide</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Selling Timeline</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Commission Breakdown</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Market Statistics</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Client Testimonials</div>
          <div className="p-2 bg-green-50 rounded flex items-center"><span className="text-green-600 mr-2">✓</span>Success Stories</div>
        </div>
      </Card>
    </div>
  );
}
