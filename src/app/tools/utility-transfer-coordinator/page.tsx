import { UTILITY_TRANSFER_COORDINATOR_CONTENT } from '@/content/tools/utility-transfer-coordinator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { UtilityTransferCoordinator } from '@/components/calculators/UtilityTransferCoordinator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Utility Transfer Coordinator',
    description: 'Coordinate and track utility transfers for your new home. Complete checklist for electricity, water, gas, internet, and all essential services.',
  };
}

const UtilityTransferCoordinatorPage = () => {
  return (
    <CalculatorLayout content={UTILITY_TRANSFER_COORDINATOR_CONTENT}>
      <UtilityTransferCoordinator />
    </CalculatorLayout>
  );
};

export default UtilityTransferCoordinatorPage;
