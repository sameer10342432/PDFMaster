
import { BUYERS_PACKET_GENERATOR_CONTENT } from '@/content/tools/buyers-packet-generator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BuyersPacketGenerator } from '@/components/calculators/BuyersPacketGenerator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Buyer\'s Packet Generator | Home Buying Guide & Educational Materials',
    description: 'Create comprehensive buyer packets with process guides, financing information, checklists, and market data to educate and guide home buyers through their purchase journey.',
  };
}

const BuyersPacketGeneratorPage = () => {
  return (
    <CalculatorLayout content={BUYERS_PACKET_GENERATOR_CONTENT}>
      <BuyersPacketGenerator />
    </CalculatorLayout>
  );
};

export default BuyersPacketGeneratorPage;
