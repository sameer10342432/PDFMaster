'use client';

import React from 'react';
import { AdvancedCharts } from './AdvancedCharts';

interface ResultsVisualizationProps {
  calculatorType: string;
  inputs: Record<string, any>;
  results: any[];
}

export const ResultsVisualization: React.FC<ResultsVisualizationProps> = ({
  calculatorType,
  inputs,
  results,
}) => {
  // For mortgage/loan calculators
  if (calculatorType.includes('mortgage') || calculatorType.includes('loan') || calculatorType.includes('amortization')) {
    const loanAmount = parseFloat(inputs.loanAmount || inputs.propertyPrice || 0);
    const interestRate = parseFloat(inputs.interestRate || inputs.rate || 0);
    const term = parseFloat(inputs.term || inputs.loanTerm || 0);
    const monthlyPayment = parseFloat(String(results.find(r => r.label.toLowerCase().includes('monthly'))?.value || '0').replace(/[^0-9.-]/g, ''));
    
    if (loanAmount && interestRate && term && monthlyPayment) {
      const data: any[] = [];
      let balance = loanAmount;
      const monthlyRate = interestRate / 100 / 12;
      const termMonths = term * 12;
      
      for (let year = 0; year <= term; year += Math.max(1, Math.floor(term / 10))) {
        const monthsPassed = year * 12;
        if (monthsPassed <= termMonths) {
          const monthlyInterest = balance * monthlyRate;
          const monthlyPrincipal = monthlyPayment - monthlyInterest;
          
          data.push({
            name: `Year ${year}`,
            Principal: Math.round(monthlyPrincipal * 12),
            Interest: Math.round(monthlyInterest * 12),
            Balance: Math.round(balance),
          });
          
          // Update balance for next year
          for (let m = 0; m < 12 && balance > 0; m++) {
            const interest = balance * monthlyRate;
            const principal = monthlyPayment - interest;
            balance = Math.max(0, balance - principal);
          }
        }
      }
      
      return (
        <div className="space-y-6">
          <AdvancedCharts
            data={data}
            type="area"
            title="Loan Balance Over Time"
            dataKeys={['Balance']}
            colors={['#3b82f6']}
          />
          <AdvancedCharts
            data={data}
            type="bar"
            title="Annual Principal vs Interest Payments"
            dataKeys={['Principal', 'Interest']}
            colors={['#10b981', '#ef4444']}
          />
        </div>
      );
    }
  }
  
  // For investment/ROI calculators
  if (calculatorType.includes('roi') || calculatorType.includes('investment') || calculatorType.includes('rental')) {
    const purchasePrice = parseFloat(inputs.purchasePrice || inputs.propertyValue || inputs.initialInvestment || 0);
    const appreciationRate = parseFloat(inputs.appreciationRate || inputs.growthRate || 3);
    
    if (purchasePrice) {
      const projectionData: any[] = [];
      for (let year = 0; year <= 10; year++) {
        const value = purchasePrice * Math.pow(1 + appreciationRate / 100, year);
        projectionData.push({
          name: `Year ${year}`,
          value: Math.round(value),
        });
      }
      
      return (
        <AdvancedCharts
          data={projectionData}
          type="line"
          title="Property Value Projection (10 Years)"
          dataKeys={['value']}
          colors={['#10b981']}
        />
      );
    }
  }
  
  // For cash flow calculators
  if (calculatorType.includes('cash-flow') || calculatorType.includes('rental')) {
    const monthlyRent = parseFloat(inputs.monthlyRent || inputs.rentalIncome || 0);
    const expenses = parseFloat(inputs.expenses || inputs.operatingExpenses || 0);
    
    if (monthlyRent || expenses) {
      const data = [
        { name: 'Monthly Rent', value: monthlyRent },
        { name: 'Expenses', value: expenses },
        { name: 'Net Income', value: Math.max(0, monthlyRent - expenses) },
      ].filter(item => item.value > 0);
      
      return (
        <AdvancedCharts
          data={data}
          type="bar"
          title="Monthly Income Breakdown"
          dataKeys={['value']}
          colors={['#3b82f6', '#ef4444', '#10b981']}
        />
      );
    }
  }
  
  return null;
};
