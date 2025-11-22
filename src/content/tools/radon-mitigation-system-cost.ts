import { CalculatorContent } from '@/types';

export const RADON_MITIGATION_SYSTEM_COST_CONTENT: CalculatorContent = {
  title: 'Radon Mitigation System Cost Calculator',
  description: 'Estimate the cost of installing a radon mitigation system and calculate long-term health benefits and home value impact',
  icon: 'Icon',
  category: 'Green & Sustainable',
  slug: 'radon-mitigation-system-cost',
  article: {
    title: "Radon Mitigation System Cost Analysis",
    content: `
    <h2>Understanding Radon and Its Risks</h2>
    <p>Radon is a colorless, odorless radioactive gas that causes over 21,000 lung cancer deaths annually in the US. It's the second leading cause of lung cancer after smoking. The EPA recommends mitigation for radon levels above 4 pCi/L.</p>
    
    <h3>Types of Radon Mitigation Systems</h3>
    <ul>
      <li><strong>Sub-Slab Depressurization:</strong> Most common and effective method ($800-$2,500)</li>
      <li><strong>Active Soil Depressurization:</strong> Uses fans to create negative pressure ($1,000-$3,000)</li>
      <li><strong>Passive Systems:</strong> No mechanical components, relies on natural pressure ($500-$1,500)</li>
      <li><strong>Crawl Space Ventilation:</strong> For homes with crawl spaces ($1,500-$3,500)</li>
      <li><strong>Block Wall Suction:</strong> For hollow block foundations ($1,200-$2,800)</li>
    </ul>
    
    <h3>System Components</h3>
    <p>A typical radon mitigation system includes:</p>
    <ul>
      <li>PVC piping (3-4 inch diameter)</li>
      <li>Radon fan (40-90 watts continuous operation)</li>
      <li>Manometer for pressure monitoring</li>
      <li>Sealing compounds for cracks and openings</li>
      <li>Warning labels and electrical work</li>
    </ul>
    
    <h3>Cost Factors</h3>
    <ul>
      <li><strong>Foundation Type:</strong> Slab, basement, or crawl space affects complexity</li>
      <li><strong>Home Size:</strong> Larger homes may need multiple suction points</li>
      <li><strong>Radon Levels:</strong> Higher levels may require more powerful systems</li>
      <li><strong>Aesthetic Requirements:</strong> Interior vs. exterior routing affects cost</li>
      <li><strong>Local Labor Costs:</strong> Vary by region ($500-$1,500 for installation)</li>
    </ul>
    
    <h3>Operating and Maintenance Costs</h3>
    <p>Annual costs typically include:</p>
    <ul>
      <li>Electricity: $50-$150/year (fan runs 24/7)</li>
      <li>Fan replacement: Every 5-10 years ($200-$400)</li>
      <li>Annual radon testing: $20-$150</li>
    </ul>
    
    <h3>Home Value Impact</h3>
    <p>A professionally installed radon mitigation system can:</p>
    <ul>
      <li>Increase marketability and buyer confidence</li>
      <li>Prevent deal cancellations (15% of buyers walk away from high radon)</li>
      <li>Provide peace of mind and health protection</li>
      <li>May be required for home sales in high-radon areas</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "foundationType",
        label: "Foundation Type",
        type: "select",
        options: [
          { label: "Basement", value: "basement" },
          { label: "Slab", value: "slab" },
          { label: "Crawl Space", value: "crawl" },
        ],
        defaultValue: "basement",
      },
      {
        name: "radonLevel",
        label: "Current Radon Level (pCi/L)",
        type: "number",
        placeholder: "8",
        defaultValue: "8",
      },
      {
        name: "homeSize",
        label: "Home Size (sq ft)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "systemType",
        label: "System Type",
        type: "select",
        options: [
          { label: "Active (with fan)", value: "active" },
          { label: "Passive", value: "passive" },
        ],
        defaultValue: "active",
      },
      {
        name: "laborRate",
        label: "Local Labor Rate ($/hour)",
        type: "number",
        placeholder: "100",
        defaultValue: "100",
      },
      {
        name: "electricityCost",
        label: "Electricity Cost ($/kWh)",
        type: "number",
        placeholder: "0.12",
        defaultValue: "0.12",
      },
      {
        name: "yearsInHome",
        label: "Expected Years in Home",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
    ],
    results: [
      { label: "Equipment Cost", isCurrency: true },
      { label: "Installation Labor Cost", isCurrency: true },
      { label: "Total Installation Cost", isCurrency: true },
      { label: "Annual Operating Cost", isCurrency: true },
      { label: "Total 10-Year Cost", isCurrency: true },
      { label: "Health Risk Reduction", isCurrency: false },
    ],
    calculate: (data: any) => {
      const foundationType = data.foundationType || "basement";
      const radonLevel = Number(data.radonLevel) || 0;
      const homeSize = Number(data.homeSize) || 0;
      const systemType = data.systemType || "active";
      const laborRate = Number(data.laborRate) || 0;
      const electricityCost = Number(data.electricityCost) || 0;
      const yearsInHome = Number(data.yearsInHome) || 0;
      
      // Equipment cost calculation
      let equipmentCost = 0;
      if (systemType === "active") {
        equipmentCost = foundationType === "basement" ? 1500 : foundationType === "crawl" ? 1800 : 1200;
      } else {
        equipmentCost = foundationType === "basement" ? 800 : foundationType === "crawl" ? 1000 : 600;
      }
      
      // Add cost for larger homes
      if (homeSize > 2500) equipmentCost += 500;
      if (homeSize > 4000) equipmentCost += 500;
      
      // Labor cost (8-12 hours typical)
      const laborHours = foundationType === "crawl" ? 12 : 10;
      const laborCost = laborHours * laborRate;
      
      const totalInstallation = equipmentCost + laborCost;
      
      // Annual operating cost
      const fanWatts = systemType === "active" ? 65 : 0;
      const annualElectricity = (fanWatts * 24 * 365 / 1000) * electricityCost;
      const annualTesting = 75;
      const annualOperating = annualElectricity + annualTesting;
      
      // 10-year total cost
      const fanReplacement = systemType === "active" ? 300 : 0;
      const totalTenYear = totalInstallation + (annualOperating * 10) + fanReplacement;
      
      // Health risk reduction
      const riskReduction = radonLevel > 4 ? `${Math.min(90, radonLevel * 10).toFixed(0)}% lung cancer risk reduction` : "Minimal risk - no mitigation needed";

      return [
        { label: "Equipment Cost", value: equipmentCost.toFixed(2), isCurrency: true },
        { label: "Installation Labor Cost", value: laborCost.toFixed(2), isCurrency: true },
        { label: "Total Installation Cost", value: totalInstallation.toFixed(2), isCurrency: true },
        { label: "Annual Operating Cost", value: annualOperating.toFixed(2), isCurrency: true },
        { label: "Total 10-Year Cost", value: totalTenYear.toFixed(2), isCurrency: true },
        { label: "Health Risk Reduction", value: riskReduction, isCurrency: false },
      ];
    },
  },
};
