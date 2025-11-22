import { CalculatorContent } from '@/types';

export const SUSTAINABLE_HOME_FEATURE_VALUE_ADD_CONTENT: CalculatorContent = {
  title: 'Sustainable Home Feature Value-Add Calculator',
  description: 'Calculate how much green and sustainable home features add to your property value including solar, smart tech, and energy-efficient upgrades',
  icon: 'Icon',
  category: 'Green & Sustainable',
  slug: 'sustainable-home-feature-value-add',
  article: {
    title: "Sustainable Features and Home Value",
    content: `
    <h2>The Green Premium in Real Estate</h2>
    <p>Sustainable homes command price premiums of 2-15% depending on location and features. Studies show certified green homes sell 20% faster and attract quality buyers willing to pay more for lower operating costs and environmental benefits.</p>
    
    <h3>High-Value Sustainable Features</h3>
    <ul>
      <li><strong>Solar Panels:</strong> Add $15,000-$25,000+ in value (often exceeding installation cost)</li>
      <li><strong>Energy Star Certification:</strong> 3-5% value premium, faster sales</li>
      <li><strong>LEED Certification:</strong> 5-10% value premium, especially in urban markets</li>
      <li><strong>High-Efficiency HVAC:</strong> $3,000-$8,000 value add, lower operating costs</li>
      <li><strong>Smart Home Systems:</strong> $5,000-$15,000 value add, modern appeal</li>
      <li><strong>Energy-Efficient Windows:</strong> $4,000-$12,000 value add, comfort improvements</li>
    </ul>
    
    <h3>Market Variations</h3>
    <p>Green feature premiums vary significantly by location:</p>
    <ul>
      <li><strong>West Coast (CA, OR, WA):</strong> Highest premiums (5-15%), strong eco-consciousness</li>
      <li><strong>Northeast (MA, NY, CT):</strong> Moderate premiums (3-8%), energy cost awareness</li>
      <li><strong>Southwest (AZ, NV, TX):</strong> Growing premiums (2-6%), water/energy scarcity focus</li>
      <li><strong>Southeast/Midwest:</strong> Emerging premiums (1-4%), cost-savings driven</li>
    </ul>
    
    <h3>Green Certifications</h3>
    <table>
      <tr>
        <th>Certification</th>
        <th>Cost</th>
        <th>Value Add</th>
        <th>Key Benefits</th>
      </tr>
      <tr>
        <td>LEED</td>
        <td>$3,000-$15,000</td>
        <td>5-10%</td>
        <td>Recognized nationally, comprehensive</td>
      </tr>
      <tr>
        <td>Energy Star</td>
        <td>$500-$2,000</td>
        <td>3-5%</td>
        <td>Government-backed, efficiency focus</td>
      </tr>
      <tr>
        <td>NGBS Green</td>
        <td>$2,000-$8,000</td>
        <td>4-7%</td>
        <td>Builder-focused, flexible</td>
      </tr>
      <tr>
        <td>Passive House</td>
        <td>$5,000-$20,000</td>
        <td>7-12%</td>
        <td>Ultra-efficient, premium positioning</td>
      </tr>
    </table>
    
    <h3>Buyer Demographics</h3>
    <p>Sustainable features strongly appeal to:</p>
    <ul>
      <li>Millennials and Gen Z (80% willing to pay premium for green homes)</li>
      <li>High-income professionals ($150K+ households)</li>
      <li>Families with children (health and future-focused)</li>
      <li>Retirees seeking lower fixed costs</li>
      <li>Environmentally conscious communities</li>
    </ul>
    
    <h3>Quantifying the Value</h3>
    <p>Appraisers use several methods to value green features:</p>
    <ul>
      <li><strong>Cost Approach:</strong> Depreciated replacement cost of features</li>
      <li><strong>Income Approach:</strong> Capitalized value of energy savings</li>
      <li><strong>Sales Comparison:</strong> Premium analysis vs. comparable homes</li>
      <li><strong>Green MLS Data:</strong> Certified appraiser with green designation</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "baseHomeValue",
        label: "Base Home Value ($)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "solarSystem",
        label: "Solar Panel System ($)",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
      {
        name: "smartHome",
        label: "Smart Home Features ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "hvacUpgrade",
        label: "High-Efficiency HVAC ($)",
        type: "number",
        placeholder: "8000",
        defaultValue: "8000",
      },
      {
        name: "windows",
        label: "Energy-Efficient Windows ($)",
        type: "number",
        placeholder: "12000",
        defaultValue: "12000",
      },
      {
        name: "insulation",
        label: "Premium Insulation ($)",
        type: "number",
        placeholder: "4000",
        defaultValue: "4000",
      },
      {
        name: "waterFeatures",
        label: "Water Conservation Features ($)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
      {
        name: "greenCertification",
        label: "Green Certification",
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Energy Star", value: "energystar" },
          { label: "LEED", value: "leed" },
          { label: "NGBS Green", value: "ngbs" },
          { label: "Passive House", value: "passivehouse" },
        ],
        defaultValue: "energystar",
      },
      {
        name: "marketLocation",
        label: "Market Location",
        type: "select",
        options: [
          { label: "West Coast (High Premium)", value: "westcoast" },
          { label: "Northeast (Moderate Premium)", value: "northeast" },
          { label: "Southwest (Growing Premium)", value: "southwest" },
          { label: "Southeast/Midwest (Emerging)", value: "other" },
        ],
        defaultValue: "westcoast",
      },
    ],
    results: [
      { label: "Total Green Investment", isCurrency: true },
      { label: "Base Feature Value Add", isCurrency: true },
      { label: "Certification Premium", isCurrency: true },
      { label: "Market Location Multiplier", isCurrency: false },
      { label: "Total Estimated Value Add", isCurrency: true },
      { label: "New Home Value Estimate", isCurrency: true },
      { label: "Value Recovery Percentage", isCurrency: false },
    ],
    calculate: (data: any) => {
      const baseHomeValue = Number(data.baseHomeValue) || 0;
      const solarSystem = Number(data.solarSystem) || 0;
      const smartHome = Number(data.smartHome) || 0;
      const hvacUpgrade = Number(data.hvacUpgrade) || 0;
      const windows = Number(data.windows) || 0;
      const insulation = Number(data.insulation) || 0;
      const waterFeatures = Number(data.waterFeatures) || 0;
      const greenCertification = data.greenCertification || "none";
      const marketLocation = data.marketLocation || "westcoast";
      
      const totalInvestment = solarSystem + smartHome + hvacUpgrade + windows + insulation + waterFeatures;
      
      // Calculate base value add (solar often exceeds cost, others at 60-90% recovery)
      const solarValueAdd = solarSystem * 1.1; // 110% recovery
      const smartHomeValueAdd = smartHome * 0.75; // 75% recovery
      const hvacValueAdd = hvacUpgrade * 0.7; // 70% recovery
      const windowsValueAdd = windows * 0.8; // 80% recovery
      const insulationValueAdd = insulation * 0.6; // 60% recovery
      const waterValueAdd = waterFeatures * 0.65; // 65% recovery
      
      const baseFeatureValue = solarValueAdd + smartHomeValueAdd + hvacValueAdd + 
                              windowsValueAdd + insulationValueAdd + waterValueAdd;
      
      // Certification premium
      let certificationPremium = 0;
      let certPremiumPercent = 0;
      if (greenCertification === "energystar") {
        certPremiumPercent = 3;
        certificationPremium = baseHomeValue * 0.03;
      } else if (greenCertification === "leed") {
        certPremiumPercent = 7;
        certificationPremium = baseHomeValue * 0.07;
      } else if (greenCertification === "ngbs") {
        certPremiumPercent = 5;
        certificationPremium = baseHomeValue * 0.05;
      } else if (greenCertification === "passivehouse") {
        certPremiumPercent = 9;
        certificationPremium = baseHomeValue * 0.09;
      }
      
      // Market location multiplier
      let locationMultiplier = 1.0;
      let locationName = "";
      if (marketLocation === "westcoast") {
        locationMultiplier = 1.3;
        locationName = "1.3x (West Coast Premium)";
      } else if (marketLocation === "northeast") {
        locationMultiplier = 1.15;
        locationName = "1.15x (Northeast)";
      } else if (marketLocation === "southwest") {
        locationMultiplier = 1.1;
        locationName = "1.1x (Southwest)";
      } else {
        locationMultiplier = 1.0;
        locationName = "1.0x (Standard)";
      }
      
      const totalValueAdd = (baseFeatureValue + certificationPremium) * locationMultiplier;
      const newHomeValue = baseHomeValue + totalValueAdd;
      const valueRecoveryPercentage = totalInvestment > 0 ? (totalValueAdd / totalInvestment) * 100 : 0;

      return [
        { label: "Total Green Investment", value: totalInvestment.toFixed(2), isCurrency: true },
        { label: "Base Feature Value Add", value: baseFeatureValue.toFixed(2), isCurrency: true },
        { label: "Certification Premium", value: `${certificationPremium.toFixed(2)} (${certPremiumPercent}%)`, isCurrency: true },
        { label: "Market Location Multiplier", value: locationName, isCurrency: false },
        { label: "Total Estimated Value Add", value: totalValueAdd.toFixed(2), isCurrency: true },
        { label: "New Home Value Estimate", value: newHomeValue.toFixed(2), isCurrency: true },
        { label: "Value Recovery Percentage", value: `${valueRecoveryPercentage.toFixed(1)}%`, isCurrency: false },
      ];
    },
  },
};
