'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const GoSolarSavingsCalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [electricityRate, setElectricityRate] = useState('0.13');
  const [systemSize, setSystemSize] = useState('6');
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const bill = parseFloat(monthlyBill);
    const rate = parseFloat(electricityRate);
    const size = parseFloat(systemSize);
    if (!bill || !rate || !size) return;

    const monthlyUsage = bill / rate;
    const solarProduction = size * 130; // kWh per month (average)
    const offsetPercent = Math.min((solarProduction / monthlyUsage) * 100, 100);
    const monthlySavings = (bill * offsetPercent) / 100;
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings = annualSavings * 25;

    setResults({
      monthlyUsage: monthlyUsage.toFixed(0),
      solarProduction: solarProduction.toFixed(0),
      offsetPercent: offsetPercent.toFixed(0),
      monthlySavings: monthlySavings.toFixed(2),
      annualSavings: annualSavings.toFixed(0),
      lifetimeSavings: lifetimeSavings.toFixed(0),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Your Current Electricity Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="monthlyBill">Monthly Electric Bill ($)</Label>
            <Input
              id="monthlyBill"
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              placeholder="150"
            />
          </div>
          <div>
            <Label htmlFor="electricityRate">Electricity Rate ($/kWh)</Label>
            <Input
              id="electricityRate"
              type="number"
              step="0.01"
              value={electricityRate}
              onChange={(e) => setElectricityRate(e.target.value)}
              placeholder="0.13"
            />
          </div>
          <div>
            <Label htmlFor="systemSize">Solar System Size (kW)</Label>
            <Input
              id="systemSize"
              type="number"
              value={systemSize}
              onChange={(e) => setSystemSize(e.target.value)}
              placeholder="6"
            />
          </div>
        </div>
        <Button onClick={calculate} className="mt-4 w-full">
          Calculate Savings
        </Button>
      </Card>

      {results && (
        <>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Solar Savings Analysis</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Usage</p>
                <p className="text-2xl font-bold text-blue-600">{results.monthlyUsage} kWh</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Solar Production</p>
                <p className="text-2xl font-bold text-green-600">{results.solarProduction} kWh</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">Utility Offset</p>
                <p className="text-2xl font-bold text-purple-600">{results.offsetPercent}%</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Savings</p>
                <p className="text-2xl font-bold text-orange-600">${results.monthlySavings}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="text-lg font-semibold mb-4">Long-Term Savings</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Annual Savings</p>
                <p className="text-4xl font-bold text-green-700">${results.annualSavings}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">25-Year Lifetime Savings</p>
                <p className="text-4xl font-bold text-green-700">${results.lifetimeSavings}</p>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};
