'use client';

import { CoolRoofReflectiveROICalculatorContent } from '@/content/tools';

export const CoolRoofReflectiveROICalculator = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">{CoolRoofReflectiveROICalculatorContent.title}</h2>
        <p className="text-gray-600 mb-6">{CoolRoofReflectiveROICalculatorContent.description}</p>
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: CoolRoofReflectiveROICalculatorContent.article.content }} />
        </div>
      </div>
    </div>
  );
};
