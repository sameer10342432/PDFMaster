
import { SELLERS_PACKET_GENERATOR_CONTENT } from '@/content/tools/sellers-packet-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SellersPacketGenerator } from '@/components/calculators/SellersPacketGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Seller\'s Packet Generator | Listing Presentation Materials',
    description: 'Create professional listing presentation packets for sellers with market analysis, pricing strategies, marketing plans, and comprehensive selling guides to win more listings.',
  };
}

const SellersPacketGeneratorPage = () => {
  return (
    <CalculatorLayout content={SELLERS_PACKET_GENERATOR_CONTENT}>
      <SellersPacketGenerator />
    </CalculatorLayout>
  );
};

export default SellersPacketGeneratorPage;
