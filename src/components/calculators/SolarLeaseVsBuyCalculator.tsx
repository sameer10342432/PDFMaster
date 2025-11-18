'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SolarLeaseVsBuyCalculator: React.FC = () => {
  const [systemCost, setSystemCost] = useState('25000');
  const [monthlyBill, setMonthlyBill] = useState('150');
  const [leasePayment, setLeasePayment] = useState('100');
  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const cost = parseFloat(systemCost);
    const bill = parseFloat(monthlyBill);
    const lease = parseFloat(leasePayment);
    if (!cost || !bill || !lease) return;

    // Buy scenario
    const federalCredit = cost * 0.30;
    const netCost = cost - federalCredit;
    const annualSavings = bill * 12 * 0.85;
    const buyPayback = netCost / annualSavings;
    const buy25YearSavings = annualSavings * 25;
    const buyNetProfit = buy25YearSavings - netCost;

    // Lease scenario
    const lease25YearCost = lease * 12 * 25 * 1.25; // Including 2.5% escalator average
    const leaseSavings = (bill - lease) * 12;
    const lease25YearSavings = leaseSavings * 25;
    const leaseEffectiveCost = lease25YearCost - lease25YearSavings;

    setResults({
      buyNetCost: netCost.toFixed(0),
      buyAnnualSavings: annualSavings.toFixed(0),
      buyPayback: buyPayback.toFixed(1),
      buyNetProfit: buyNetProfit.toFixed(0),
      lease25YearCost: lease25YearCost.toFixed(0),
      leaseMonthlySavings: leaseSavings.toFixed(0) / 12,
      leaseEffectiveCost: leaseEffectiveCost.toFixed(0),
      difference: (buyNetProfit - (-leaseEffectiveCost)).toFixed(0),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Solar System Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="systemCost">System Cost ($)</Label>
            <Input
              id="systemCost"
              type="number"
              value={systemCost}
              onChange={(e) => setSystemCost(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="monthlyBill">Monthly Electric Bill ($)</Label>
            <Input
              id="monthlyBill"
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="leasePayment">Monthly Lease Payment ($)</Label>
            <Input
              id="leasePayment"
              type="number"
              value={leasePayment}
              onChange={(e) => setLeasePayment(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={calculate} className="mt-4 w-full">
          Compare Options
        </Button>
      </Card>

      {results && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-semibold mb-4">Buy with Cash/Loan</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Net Cost (after credits)</span>
                  <span className="font-bold">${results.buyNetCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings</span>
                  <span className="font-bold text-green-600">${results.buyAnnualSavings}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payback Period</span>
                  <span className="font-bold">{results.buyPayback} years</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-semibold">25-Year Net Profit</span>
                  <span className="font-bold text-2xl text-green-600">${results.buyNetProfit}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-orange-50">
              <h3 className="text-lg font-semibold mb-4">Lease</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>25-Year Total Payments</span>
                  <span className="font-bold text-red-600">${results.lease25YearCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Savings vs Utility</span>
                  <span className="font-bold">${results.leaseMonthlySavings}</span>
                </div>
                <div className="flex justify-between">
                  <span>No Ownership</span>
                  <span className="font-bold">$0 equity</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-semibold">25-Year Effective Cost</span>
                  <span className="font-bold text-2xl text-red-600">-${results.leaseEffectiveCost}</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Winner: Buying</h3>
              <p className="text-3xl font-bold text-green-700 mb-2">${results.difference}</p>
              <p className="text-gray-600">More profit over 25 years by buying vs leasing</p>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};
