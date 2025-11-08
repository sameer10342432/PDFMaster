'use client';

import React from 'react';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function MortgageCalculatorEnhancedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EnhancedCalculator
          slug="mortgage-calculator-enhanced"
          title="Enhanced Mortgage Calculator"
          description="Calculate your monthly mortgage payments with advanced features including scenario comparison, smart insights, and what-if analysis."
          category="Basic Calculators"
          inputs={[
            {
              name: 'loanAmount',
              label: 'Loan Amount ($)',
              type: 'number',
              defaultValue: '300000',
              placeholder: 'Enter loan amount',
            },
            {
              name: 'downPayment',
              label: 'Down Payment ($)',
              type: 'number',
              defaultValue: '60000',
              placeholder: 'Enter down payment',
            },
            {
              name: 'interestRate',
              label: 'Interest Rate (%)',
              type: 'number',
              defaultValue: '6.5',
              placeholder: 'Enter interest rate',
            },
            {
              name: 'term',
              label: 'Loan Term (years)',
              type: 'number',
              defaultValue: '30',
              placeholder: 'Enter loan term',
            },
          ]}
          results={[
            {
              label: 'Monthly Payment',
              isCurrency: true,
            },
            {
              label: 'Total Payment',
              isCurrency: true,
            },
            {
              label: 'Total Interest',
              isCurrency: true,
            },
            {
              label: 'Down Payment %',
              isCurrency: false,
            },
          ]}
          calculation={(values) => {
            const principal = parseFloat(values.loanAmount) - parseFloat(values.downPayment);
            const monthlyRate = parseFloat(values.interestRate) / 100 / 12;
            const numberOfPayments = parseFloat(values.term) * 12;
            
            const monthlyPayment =
              (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
              (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            
            const totalPayment = monthlyPayment * numberOfPayments;
            const totalInterest = totalPayment - principal;
            const downPaymentPercent = (parseFloat(values.downPayment) / parseFloat(values.loanAmount)) * 100;
            
            return {
              'monthly payment': monthlyPayment.toFixed(2),
              'total payment': totalPayment.toFixed(2),
              'total interest': totalInterest.toFixed(2),
              'down payment %': downPaymentPercent.toFixed(2) + '%',
            };
          }}
        />
      </div>
    </div>
  );
}
