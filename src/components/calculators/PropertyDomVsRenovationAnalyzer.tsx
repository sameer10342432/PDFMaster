'use client';

import { PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT } from '@/content/tools/property-dom-vs-renovation-analyzer';
import { Calculator } from '@/components/calculators';

export const PropertyDomVsRenovationAnalyzer = () => {
  return (
    <Calculator
      title={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT.title}
      description={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT.description}
      inputs={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT.calculator.fields}
      results={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT.calculator.results}
      calculation={PROPERTY_DOM_VS_RENOVATION_ANALYZER_CONTENT.calculator.calculate}
    />
  );
};
