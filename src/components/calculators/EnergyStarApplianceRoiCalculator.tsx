'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const EnergyStarApplianceRoiCalculator: React.FC = () => {
  const [standardCost, setStandardCost] = useState('');
  const [energyStarCost, setEnergyStarCost] = useState('');
  const [annualEnergyUse, setAnnualEnergyUse] = useState('');
  const [electricityRate, setElectricityRate] = useState('0.13');
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const standard = parseFloat(standardCost);
    const energyStar = parseFloat(energyStarCost);
    const energyUse = parseFloat(annualEnergyUse);
    const rate = parseFloat(electricityRate);
    if (!standard || !energyStar || !energyUse || !rate) return;

    const priceDifference = energyStar - standard;
    const energyStarUse = energyUse * 0.80; // 20% more efficient
    const standardAnnualCost = energyUse * rate;
    const energyStarAnnualCost = energyStarUse * rate;
    const annualSavings = standardAnnualCost - energyStarAnnualCost;
    const paybackYears = priceDifference / annualSavings;
    const lifespan = 13; // Average appliance lifespan
    const lifetimeSavings = annualSavings * lifespan;
    const netProfit = lifetimeSavings - priceDifference;
    const roi = (netProfit / priceDifference) * 100;

    setResults({
      priceDifference: priceDifference.toFixed(0),
      annualSavings: annualSavings.toFixed(2),
      paybackYears: paybackYears.toFixed(1),
      lifetimeSavings: lifetimeSavings.toFixed(0),
      netProfit: netProfit.toFixed(0),
      roi: roi.toFixed(0),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Appliance Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="standardCost">Standard Appliance Price ($)</Label>
            <Input
              id="standardCost"
              type="number"
              value={standardCost}
              onChange={(e) => setStandardCost(e.target.value)}
              placeholder="800"
            />
          </div>
          <div>
            <Label htmlFor="energyStarCost">Energy Star Appliance Price ($)</Label>
            <Input
              id="energyStarCost"
              type="number"
              value={energyStarCost}
              onChange={(e) => setEnergyStarCost(e.target.value)}
              placeholder="950"
            />
          </div>
          <div>
            <Label htmlFor="annualEnergyUse">Annual Energy Use (kWh)</Label>
            <Input
              id="annualEnergyUse"
              type="number"
              value={annualEnergyUse}
              onChange={(e) => setAnnualEnergyUse(e.target.value)}
              placeholder="500"
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
        </div>
        <Button onClick={calculate} className="mt-4 w-full">
          Calculate ROI
        </Button>
      </Card>

      {results && (
        <>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">ROI Analysis</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-600">Price Difference</p>
                <p className="text-2xl font-bold text-orange-600">${results.priceDifference}</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-2xl font-bold text-blue-600">${results.annualSavings}</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">Payback Period</p>
                <p className="text-2xl font-bold text-purple-600">{results.paybackYears} yrs</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="text-lg font-semibold mb-4">Lifetime Analysis (13 Years)</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Total Savings</p>
                <p className="text-2xl font-bold text-green-700">${results.lifetimeSavings}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <p className="text-2xl font-bold text-green-700">${results.netProfit}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="text-2xl font-bold text-green-700">{results.roi}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Recommendation</h3>
            <p className={`text-lg ${parseFloat(results.paybackYears) < 5 ? 'text-green-600' : parseFloat(results.paybackYears) < 10 ? 'text-blue-600' : 'text-orange-600'}`}>
              {parseFloat(results.paybackYears) < 5 && '✅ Excellent Investment - Energy Star pays for itself quickly'}
              {parseFloat(results.paybackYears) >= 5 && parseFloat(results.paybackYears) < 10 && '👍 Good Investment - Solid long-term savings'}
              {parseFloat(results.paybackYears) >= 10 && '⚠️ Marginal ROI - Consider if replacing anyway or for other benefits'}
            </p>
          </Card>
        </>
      )}
    </div>
  );
};
