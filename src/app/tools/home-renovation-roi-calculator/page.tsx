
'use client';

import { useHomeRenovationRoiCalculator } from '@/hooks/home-renovation-roi-calculator/useHomeRenovationRoiCalculator';
import { CalculatorForm } from '@/components/home-renovation-roi-calculator/CalculatorForm';
import { Results } from '@/components/home-renovation-roi-calculator/Results';

const HomeRenovationRoiCalculatorPage = () => {
  const { form, roi } = useHomeRenovationRoiCalculator();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Home Renovation ROI Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <CalculatorForm form={form} />
        </div>
        <div>
          <Results roi={roi} />
        </div>
      </div>
    </div>
  );
};

export default HomeRenovationRoiCalculatorPage;