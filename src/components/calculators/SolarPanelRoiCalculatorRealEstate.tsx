'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SolarPanelRoiCalculatorRealEstate: React.FC = () => {
  const [systemCost, setSystemCost] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const cost = parseFloat(systemCost);
    const bill = parseFloat(monthlyBill);
    if (!cost || !bill) return;

    const federalCredit = cost * 0.30;
    const netCost = cost - federalCredit;
    const annualSavings = bill * 12 * 0.85; // 85% offset
    const paybackYears = netCost / annualSavings;
    const savings25Years = annualSavings * 25;
    const netProfit = savings25Years - netCost;
    const roi = (netProfit / netCost) * 100;

    setResults({
      federalCredit: federalCredit.toFixed(0),
      netCost: netCost.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      paybackYears: paybackYears.toFixed(1),
      savings25Years: savings25Years.toFixed(0),
      netProfit: netProfit.toFixed(0),
      roi: roi.toFixed(0),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Solar System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="systemCost">Total System Cost ($)</Label>
            <Input
              id="systemCost"
              type="number"
              value={systemCost}
              onChange={(e) => setSystemCost(e.target.value)}
              placeholder="25000"
            />
          </div>
          <div>
            <Label htmlFor="monthlyBill">Current Monthly Electric Bill ($)</Label>
            <Input
              id="monthlyBill"
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              placeholder="150"
            />
          </div>
        </div>
        <Button onClick={calculate} className="mt-4 w-full">
          Calculate ROI
        </Button>
      </Card>

      {results && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">ROI Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Federal Tax Credit</p>
              <p className="text-2xl font-bold text-blue-600">${results.federalCredit}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Net Cost</p>
              <p className="text-2xl font-bold text-green-600">${results.netCost}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Annual Savings</p>
              <p className="text-2xl font-bold text-purple-600">${results.annualSavings}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Payback Period</p>
              <p className="text-2xl font-bold text-orange-600">{results.paybackYears} yrs</p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <h4 className="font-semibold mb-3">25-Year Projection</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Total Savings</p>
                <p className="text-xl font-bold text-green-700">${results.savings25Years}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="text-xl font-bold text-green-700">${results.netProfit}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="text-xl font-bold text-green-700">{results.roi}%</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
