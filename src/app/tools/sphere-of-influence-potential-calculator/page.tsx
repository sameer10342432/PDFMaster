import { SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT } from '@/content/tools/sphere-of-influence-potential-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SphereOfInfluencePotentialCalculator } from '@/components/calculators/SphereOfInfluencePotentialCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sphere of Influence (SOI) Potential Calculator | Real Estate Network Value',
    description: 'Calculate the potential business value of your sphere of influence and develop a strategy to maximize referrals and repeat business.',
  };
}

const SphereOfInfluencePotentialCalculatorPage = () => {
  return (
    <CalculatorLayout content={SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT}>
      <SphereOfInfluencePotentialCalculator />
    </CalculatorLayout>
  );
};

export default SphereOfInfluencePotentialCalculatorPage;
