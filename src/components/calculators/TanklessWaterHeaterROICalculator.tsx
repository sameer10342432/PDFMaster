'use client';

import { TanklessWaterHeaterROICalculatorContent } from '@/content/tools';

export const TanklessWaterHeaterROICalculator = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">{TanklessWaterHeaterROICalculatorContent.title}</h2>
        <p className="text-gray-600 mb-6">{TanklessWaterHeaterROICalculatorContent.description}</p>
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: TanklessWaterHeaterROICalculatorContent.article.content }} />
        </div>
      </div>
    </div>
  );
};
