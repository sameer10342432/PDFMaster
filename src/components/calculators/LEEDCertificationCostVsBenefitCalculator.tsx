'use client';

import { LEEDCertificationCostVsBenefitContent } from '@/content/tools';

export const LEEDCertificationCostVsBenefitCalculator = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">{LEEDCertificationCostVsBenefitContent.title}</h2>
        <p className="text-gray-600 mb-6">{LEEDCertificationCostVsBenefitContent.description}</p>
        
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: LEEDCertificationCostVsBenefitContent.article.content }} />
        </div>
      </div>
    </div>
  );
};
