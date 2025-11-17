
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tenant's Rights by State Finder | Renter Protection Laws & Security Deposit Rules",
    description: 'Find your tenant rights, security deposit limits, eviction protections, and renter laws specific to your state. Know your rights as a renter in all 50 states.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { tenantRightsFinderCalculator } from '@/content/tools/tenant-rights-by-state-finder';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TenantRightsFinderPage = () => {
  return (
    <CalculatorLayout content={tenantRightsFinderCalculator}>
      <EnhancedCalculator
        title={tenantRightsFinderCalculator.title}
        slug="tenant-rights-by-state-finder"
        category="Real Estate"
        description={tenantRightsFinderCalculator.description}
        inputs={tenantRightsFinderCalculator.calculator.fields}
        results={tenantRightsFinderCalculator.calculator.results}
        calculation={tenantRightsFinderCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TenantRightsFinderPage;
