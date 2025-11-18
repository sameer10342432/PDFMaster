'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';

export function AgentWebsiteCostVsBenefitCalculator() {
  const [initialCost, setInitialCost] = useState('3500');
  const [monthlyMaintenance, setMonthlyMaintenance] = useState('150');
  const [monthlySEO, setMonthlySEO] = useState('300');
  const [monthlyLeads, setMonthlyLeads] = useState('8');
  const [avgCommission, setAvgCommission] = useState('9000');
  const [conversionRate, setConversionRate] = useState('10');

  const calculate = () => {
    const totalMonthlyCost = parseFloat(monthlyMaintenance) + parseFloat(monthlySEO);
    const annualOperatingCost = totalMonthlyCost * 12;
    const totalYear1Investment = parseFloat(initialCost) + annualOperatingCost;
    
    const annualLeads = parseFloat(monthlyLeads) * 12;
    const conversionDecimal = parseFloat(conversionRate) / 100;
    const dealsPerYear = annualLeads * conversionDecimal;
    const grossRevenue = dealsPerYear * parseFloat(avgCommission);
    const netProfit = grossRevenue - totalYear1Investment;
    const roi = ((netProfit / totalYear1Investment) * 100);
    
    const costPerLead = totalYear1Investment / annualLeads;
    const costPerTransaction = dealsPerYear > 0 ? totalYear1Investment / dealsPerYear : 0;
    const breakevenMonths = dealsPerYear > 0 ? (totalYear1Investment / (grossRevenue / 12)).toFixed(1) : 0;
    
    return {
      totalYear1Investment,
      annualLeads,
      dealsPerYear,
      grossRevenue,
      netProfit,
      roi,
      costPerLead,
      costPerTransaction,
      breakevenMonths,
    };
  };

  const results = calculate();

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold mb-4">Website Investment Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Initial Website Development Cost ($)
            </label>
            <input
              type="number"
              value={initialCost}
              onChange={(e) => setInitialCost(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Maintenance & Hosting ($)
            </label>
            <input
              type="number"
              value={monthlyMaintenance}
              onChange={(e) => setMonthlyMaintenance(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly SEO/Marketing Investment ($)
            </label>
            <input
              type="number"
              value={monthlySEO}
              onChange={(e) => setMonthlySEO(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Expected Monthly Website Leads
            </label>
            <input
              type="number"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Average Commission Per Deal ($)
            </label>
            <input
              type="number"
              value={avgCommission}
              onChange={(e) => setAvgCommission(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Lead-to-Client Conversion Rate (%)
            </label>
            <input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Cost-Benefit Analysis Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Year 1 Investment</div>
            <div className="text-2xl font-bold text-blue-600">
              ${results.totalYear1Investment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600">Gross Revenue from Website</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.grossRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-sm text-gray-600">Annual Leads Generated</div>
            <div className="text-2xl font-bold text-purple-600">
              {results.annualLeads.toFixed(0)} leads
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="text-sm text-gray-600">Expected Deals Closed</div>
            <div className="text-2xl font-bold text-indigo-600">
              {results.dealsPerYear.toFixed(1)} deals
            </div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="text-sm text-gray-600">Net Profit (After Website Costs)</div>
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
          <div className="p-4 bg-cyan-50 rounded-lg">
            <div className="text-sm text-gray-600">Cost Per Lead</div>
            <div className="text-2xl font-bold text-cyan-600">
              ${results.costPerLead.toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg">
            <div className="text-sm text-gray-600">Cost Per Transaction</div>
            <div className="text-2xl font-bold text-rose-600">
              ${results.costPerTransaction.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="text-sm font-medium text-gray-700 mb-1">Break-Even Analysis</div>
          <div className="text-lg text-gray-900">
            Your website will break even in approximately <span className="font-bold text-blue-600">{results.breakevenMonths} months</span>
          </div>
          <div className="text-sm text-gray-600 mt-2">
            After break-even, each additional lead generates pure profit with no additional setup costs.
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-3">Comparison to Other Lead Sources</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Lead Source</th>
                <th className="text-right py-2">Cost Per Transaction</th>
                <th className="text-right py-2">Quality Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="py-2 font-medium">Your Website</td>
                <td className="text-right">${results.costPerTransaction.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                <td className="text-right">8-9/10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Zillow Premier Agent</td>
                <td className="text-right">$3,000-$8,000</td>
                <td className="text-right">4-6/10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Realtor.com Leads</td>
                <td className="text-right">$2,500-$6,000</td>
                <td className="text-right">5-7/10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Facebook Ads</td>
                <td className="text-right">$1,500-$4,000</td>
                <td className="text-right">5-7/10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Google Ads</td>
                <td className="text-right">$2,000-$5,000</td>
                <td className="text-right">7-8/10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
