'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function NetSheetGenerator() {
  const [salePrice, setSalePrice] = useState('500000');
  const [mortgageBalance, setMortgageBalance] = useState('350000');
  const [commissionRate, setCommissionRate] = useState('6');
  const [closingCosts, setClosingCosts] = useState('5000');
  const [repairConcessions, setRepairConcessions] = useState('2000');
  const [propertyTaxCredit, setPropertyTaxCredit] = useState('1500');

  const calculate = () => {
    const grossSalePrice = parseFloat(salePrice);
    const commissionDecimal = parseFloat(commissionRate) / 100;
    const totalCommission = grossSalePrice * commissionDecimal;
    const totalClosingCosts = parseFloat(closingCosts) + parseFloat(repairConcessions) + parseFloat(propertyTaxCredit);
    const totalPayoffs = parseFloat(mortgageBalance);
    const netProceeds = grossSalePrice - totalCommission - totalClosingCosts - totalPayoffs;
    
    return {
      grossSalePrice,
      totalCommission,
      totalClosingCosts,
      totalPayoffs,
      netProceeds,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Net Sheet Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Expected Sale Price ($)</label>
            <input
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mortgage Balance ($)</label>
            <input
              type="number"
              value={mortgageBalance}
              onChange={(e) => setMortgageBalance(e.target.value)}
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
            <label className="block text-sm font-medium mb-1">Other Closing Costs ($)</label>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Repair Concessions ($)</label>
            <input
              type="number"
              value={repairConcessions}
              onChange={(e) => setRepairConcessions(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Property Tax Credit ($)</label>
            <input
              type="number"
              value={propertyTaxCredit}
              onChange={(e) => setPropertyTaxCredit(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Estimated Net Proceeds</h3>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
            <span className="font-medium">Gross Sale Price:</span>
            <span className="font-bold text-blue-600">${results.grossSalePrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between p-3 bg-red-50 rounded-lg">
            <span className="font-medium">Total Commission:</span>
            <span className="font-bold text-red-600">-${results.totalCommission.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
            <span className="font-medium">Total Closing Costs:</span>
            <span className="font-bold text-orange-600">-${results.totalClosingCosts.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
            <span className="font-medium">Total Payoffs:</span>
            <span className="font-bold text-purple-600">-${results.totalPayoffs.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between p-4 bg-green-100 rounded-lg border-2 border-green-300">
            <span className="font-bold text-lg">Net Proceeds to Seller:</span>
            <span className="font-bold text-2xl text-green-600">${results.netProceeds.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> This is an estimate. Actual costs will be determined at closing. Consult with your title company for precise figures.
          </p>
        </div>
      </Card>
    </div>
  );
}
