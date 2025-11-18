import { LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/listing-agent-commission-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ListingAgentCommissionCalculator } from '@/components/calculators/ListingAgentCommissionCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Listing Agent Commission Calculator | Seller Side Earnings Calculator",
    description: "Calculate listing agent commission earnings including co-broke splits, brokerage fees, transaction costs, and net proceeds from seller representation.",
  };
}

const ListingAgentCommissionCalculatorPage = () => {
  return (
    <CalculatorLayout content={LISTING_AGENT_COMMISSION_CALCULATOR_CONTENT}>
      <ListingAgentCommissionCalculator />
    </CalculatorLayout>
  );
};

export default ListingAgentCommissionCalculatorPage;
