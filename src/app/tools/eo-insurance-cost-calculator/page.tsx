import { EO_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/eo-insurance-cost-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { EOInsuranceCostCalculator } from '@/components/calculators/EOInsuranceCostCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'E&O Insurance Cost Calculator for Real Estate Agents | Property Tools',
    description: 'Calculate Errors & Omissions insurance costs for real estate agents. Compare coverage levels, deductibles, and get accurate premium estimates based on your experience and claims history.',
  };
}

const EOInsuranceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={EO_INSURANCE_COST_CALCULATOR_CONTENT}>
      <EOInsuranceCostCalculator />
    </CalculatorLayout>
  );
};

export default EOInsuranceCostCalculatorPage;
