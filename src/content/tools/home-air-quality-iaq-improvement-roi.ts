import { CalculatorContent } from '@/types';

export const HOME_AIR_QUALITY_IAQ_IMPROVEMENT_ROI_CONTENT: CalculatorContent = {
  title: 'Home Air Quality (IAQ) Improvement ROI Calculator',
  description: 'Calculate the return on investment for improving indoor air quality with air purifiers, HVAC upgrades, and ventilation systems',
  icon: 'Icon',
  category: 'Green & Sustainable',
  slug: 'home-air-quality-iaq-improvement-roi',
  article: {
    title: "Indoor Air Quality Improvement ROI",
    content: `
    <h2>Why Indoor Air Quality Matters</h2>
    <p>Indoor Air Quality (IAQ) directly impacts health, productivity, and home value. Poor air quality can cause respiratory issues, allergies, and decreased concentration. Improving IAQ through strategic upgrades can provide significant health benefits while increasing property value.</p>
    
    <h3>IAQ Improvement Options</h3>
    <ul>
      <li><strong>HEPA Air Purifiers:</strong> Remove 99.97% of airborne particles including dust, pollen, and pet dander</li>
      <li><strong>HVAC System Upgrades:</strong> Modern systems with better filtration and humidity control</li>
      <li><strong>UV-C Light Systems:</strong> Kill airborne bacteria, viruses, and mold spores in HVAC ducts</li>
      <li><strong>Energy Recovery Ventilators (ERV):</strong> Fresh air exchange without energy loss</li>
      <li><strong>Air Quality Monitors:</strong> Track PM2.5, VOCs, CO2, and humidity levels in real-time</li>
    </ul>
    
    <h3>Health Benefits</h3>
    <p>Studies show improved IAQ can reduce:</p>
    <ul>
      <li>Asthma and allergy symptoms by 30-50%</li>
      <li>Sick days by 20-40% annually</li>
      <li>Respiratory infections and illnesses</li>
      <li>Headaches and fatigue related to poor air quality</li>
    </ul>
    
    <h3>Financial Impact</h3>
    <p>IAQ improvements can increase home value by 2-5% and reduce healthcare costs significantly. Homes with documented air quality systems sell faster in health-conscious markets.</p>
    
    <h3>ROI Considerations</h3>
    <ul>
      <li><strong>Initial Investment:</strong> Ranges from $200 for portable purifiers to $5,000+ for whole-home systems</li>
      <li><strong>Operating Costs:</strong> Filter replacements, electricity usage</li>
      <li><strong>Health Savings:</strong> Reduced medical expenses and sick days</li>
      <li><strong>Home Value:</strong> Premium for verified healthy home certification</li>
      <li><strong>Energy Efficiency:</strong> Modern systems often reduce HVAC energy costs</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "homeValue",
        label: "Current Home Value ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "improvementCost",
        label: "Total IAQ Improvement Cost ($)",
        type: "number",
        placeholder: "3500",
        defaultValue: "3500",
      },
      {
        name: "annualFilterCost",
        label: "Annual Filter/Maintenance Cost ($)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "annualEnergySavings",
        label: "Annual Energy Savings ($)",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "annualHealthSavings",
        label: "Annual Health Cost Savings ($)",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "valueIncrease",
        label: "Expected Home Value Increase (%)",
        type: "number",
        placeholder: "2.5",
        defaultValue: "2.5",
      },
      {
        name: "yearsInHome",
        label: "Expected Years in Home",
        type: "number",
        placeholder: "7",
        defaultValue: "7",
      },
    ],
    results: [
      { label: "Home Value Increase", isCurrency: true },
      { label: "Total Annual Savings", isCurrency: true },
      { label: "Total Savings Over Period", isCurrency: true },
      { label: "Total ROI", isCurrency: false },
      { label: "Payback Period", isCurrency: false },
      { label: "Net Benefit", isCurrency: true },
    ],
    calculate: (data: any) => {
      const homeValue = Number(data.homeValue) || 0;
      const improvementCost = Number(data.improvementCost) || 0;
      const annualFilterCost = Number(data.annualFilterCost) || 0;
      const annualEnergySavings = Number(data.annualEnergySavings) || 0;
      const annualHealthSavings = Number(data.annualHealthSavings) || 0;
      const valueIncrease = Number(data.valueIncrease) || 0;
      const yearsInHome = Number(data.yearsInHome) || 0;
      
      const homeValueIncrease = homeValue * (valueIncrease / 100);
      const totalAnnualSavings = annualEnergySavings + annualHealthSavings - annualFilterCost;
      const totalSavingsOverPeriod = totalAnnualSavings * yearsInHome;
      const totalBenefit = homeValueIncrease + totalSavingsOverPeriod;
      const totalROI = improvementCost > 0 ? ((totalBenefit - improvementCost) / improvementCost) * 100 : 0;
      const paybackPeriod = totalAnnualSavings > 0 ? improvementCost / totalAnnualSavings : 0;
      const netBenefit = totalBenefit - improvementCost;

      return [
        { label: "Home Value Increase", value: homeValueIncrease.toFixed(2), isCurrency: true },
        { label: "Total Annual Savings", value: totalAnnualSavings.toFixed(2), isCurrency: true },
        { label: "Total Savings Over Period", value: totalSavingsOverPeriod.toFixed(2), isCurrency: true },
        { label: "Total ROI", value: `${totalROI.toFixed(2)}%`, isCurrency: false },
        { label: "Payback Period", value: `${paybackPeriod.toFixed(1)} years`, isCurrency: false },
        { label: "Net Benefit", value: netBenefit.toFixed(2), isCurrency: true },
      ];
    },
  },
};
