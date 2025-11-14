import { CalculatorContent } from '@/types';

export const REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT: CalculatorContent = {
  title: 'Real Estate Portfolio Diversification Score',
  description: 'Assess your real estate portfolio risk and diversification across property types, locations, and tenant classes',
  icon: 'Icon',
  category: 'Investment Analysis',
  slug: 'real-estate-portfolio-diversification-score',
  metaTitle: 'Real Estate Portfolio Diversification Calculator - Analyze Investment Risk & Balance',
  metaDescription: 'Calculate your real estate portfolio diversification score. Assess risk across property types, geographic locations, tenant classes, and price ranges. Get recommendations to improve portfolio balance.',
  article: {
    title: "Real Estate Portfolio Diversification: Reduce Risk, Maximize Returns",
    content: `
    <h2>Real Estate Portfolio Diversification: Reduce Risk, Maximize Returns</h2>
    <p>Diversification is crucial in real estate investing to protect against market downturns, local economic shifts, and sector-specific challenges. This calculator helps you assess and improve your portfolio balance.</p>
    
    <h3>Why Diversification Matters in Real Estate</h3>
    <ul>
      <li><strong>Market Cycle Protection:</strong> Different sectors peak at different times</li>
      <li><strong>Geographic Risk Mitigation:</strong> Local disasters or economic downturns won't crush your portfolio</li>
      <li><strong>Tenant Type Balance:</strong> Mix of residential, commercial, industrial spreads risk</li>
      <li><strong>Income Stability:</strong> When one property is vacant, others generate cash flow</li>
      <li><strong>Regulatory Protection:</strong> Different areas have different landlord laws</li>
    </ul>
    
    <h3>Dimensions of Diversification</h3>
    
    <h4>1. Property Type Diversification</h4>
    <ul>
      <li><strong>Residential:</strong> Single-family, multi-family, condos</li>
      <li><strong>Commercial:</strong> Office buildings, retail centers</li>
      <li><strong>Industrial:</strong> Warehouses, manufacturing</li>
      <li><strong>Specialty:</strong> Self-storage, mobile home parks, hotels</li>
    </ul>
    
    <h4>2. Geographic Diversification</h4>
    <ul>
      <li><strong>Multiple Cities:</strong> Don't concentrate in one metro area</li>
      <li><strong>Different Regions:</strong> Coastal vs inland, Sun Belt vs Rust Belt</li>
      <li><strong>Economic Diversity:</strong> Mix tech hubs, manufacturing, tourism</li>
      <li><strong>Market Stages:</strong> Combine emerging, stable, and mature markets</li>
    </ul>
    
    <h4>3. Tenant Class Diversification</h4>
    <ul>
      <li><strong>Class A:</strong> High-income tenants, newer properties</li>
      <li><strong>Class B:</strong> Middle-income, stable workforce</li>
      <li><strong>Class C:</strong> Lower-income, higher cash flow</li>
    </ul>
    
    <h4>4. Price Point Diversification</h4>
    <ul>
      <li><strong>Entry Level:</strong> $50k-150k properties</li>
      <li><strong>Mid-Range:</strong> $150k-500k properties</li>
      <li><strong>High-End:</strong> $500k+ properties</li>
    </ul>
    
    <h3>Ideal Portfolio Allocation</h3>
    <p>There's no one-size-fits-all, but here's a balanced starting point:</p>
    <ul>
      <li><strong>Property Types:</strong> 60% residential, 30% commercial, 10% specialty</li>
      <li><strong>Geography:</strong> No more than 40% in one metro area</li>
      <li><strong>Tenant Class:</strong> 50% Class B, 30% Class A, 20% Class C</li>
      <li><strong>Vintages:</strong> Mix of new, 10-20 years old, value-add properties</li>
    </ul>
    
    <h3>Concentration Risk Warning Signs</h3>
    <ul>
      <li>🚨 More than 50% of portfolio in one city</li>
      <li>🚨 Single property represents 30%+ of total value</li>
      <li>🚨 All properties are same type (e.g., all single-family)</li>
      <li>🚨 All tenants in same industry (e.g., all retail)</li>
      <li>🚨 All properties purchased in same year/market cycle</li>
    </ul>
    
    <h3>Diversification Score Breakdown</h3>
    <ul>
      <li><strong>90-100:</strong> Excellent diversification, minimal concentration risk</li>
      <li><strong>70-89:</strong> Good balance, minor improvements recommended</li>
      <li><strong>50-69:</strong> Moderate risk, consider expanding diversity</li>
      <li><strong>Below 50:</strong> High concentration risk, diversify soon</li>
    </ul>
    
    <h3>How to Improve Your Diversification Score</h3>
    <ol>
      <li><strong>Identify Gaps:</strong> Which categories are you missing?</li>
      <li><strong>Next Purchase Strategy:</strong> Buy properties that fill gaps</li>
      <li><strong>Use REITs:</strong> Add exposure to property types you can't buy directly</li>
      <li><strong>Syndications:</strong> Access commercial deals with smaller capital</li>
      <li><strong>Geographic Expansion:</strong> Invest in out-of-state markets</li>
    </ol>
    
    <h3>Common Diversification Mistakes</h3>
    <ul>
      <li><strong>Buying Only Local:</strong> Limits opportunities and increases risk</li>
      <li><strong>Chasing High Cash Flow:</strong> Often leads to Class C concentration</li>
      <li><strong>Same Property Type:</strong> "I only buy single-family" is risky</li>
      <li><strong>Ignoring Market Cycles:</strong> All properties in same cycle stage</li>
      <li><strong>Over-Diversification:</strong> Too many small positions = management nightmare</li>
    </ul>
    
    <h3>Balancing Diversification with Expertise</h3>
    <p>While diversification reduces risk, specialization builds expertise. Best practice:</p>
    <ul>
      <li>Start with one property type and master it</li>
      <li>Expand to 2-3 metro areas you understand</li>
      <li>Gradually add complementary property types</li>
      <li>Use syndications/REITs for sectors outside expertise</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "numProperties",
        label: "Total Number of Properties",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
      {
        name: "numCities",
        label: "Number of Different Cities",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "percentResidential",
        label: "% Residential Properties",
        type: "number",
        placeholder: "60",
        defaultValue: "60",
      },
      {
        name: "percentCommercial",
        label: "% Commercial Properties",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "percentSpecialty",
        label: "% Specialty Properties",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
      {
        name: "largestPropertyPercent",
        label: "Largest Property (% of Total Value)",
        type: "number",
        placeholder: "25",
        defaultValue: "25",
      },
      {
        name: "percentClassA",
        label: "% Class A Properties",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "percentClassB",
        label: "% Class B Properties",
        type: "number",
        placeholder: "50",
        defaultValue: "50",
      },
      {
        name: "percentClassC",
        label: "% Class C Properties",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
    ],
    results: [
      { label: "Diversification Score", isCurrency: false },
      { label: "Geographic Diversity Score", isCurrency: false },
      { label: "Property Type Diversity Score", isCurrency: false },
      { label: "Tenant Class Balance Score", isCurrency: false },
      { label: "Concentration Risk Level", isCurrency: false },
      { label: "Overall Assessment", isCurrency: false },
      { label: "Primary Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const numProperties = Number(data.numProperties) || 0;
      const numCities = Number(data.numCities) || 0;
      const percentResidential = Number(data.percentResidential) || 0;
      const percentCommercial = Number(data.percentCommercial) || 0;
      const percentSpecialty = Number(data.percentSpecialty) || 0;
      const largestPropertyPercent = Number(data.largestPropertyPercent) || 0;
      const percentClassA = Number(data.percentClassA) || 0;
      const percentClassB = Number(data.percentClassB) || 0;
      const percentClassC = Number(data.percentClassC) || 0;
      
      // Geographic diversity (0-30 points)
      let geoScore = 0;
      if (numCities >= 5) geoScore = 30;
      else if (numCities >= 4) geoScore = 25;
      else if (numCities >= 3) geoScore = 20;
      else if (numCities >= 2) geoScore = 12;
      else geoScore = 5;
      
      // Property type diversity (0-30 points)
      let typeScore = 0;
      const hasResidential = percentResidential > 0;
      const hasCommercial = percentCommercial > 0;
      const hasSpecialty = percentSpecialty > 0;
      const typesCount = [hasResidential, hasCommercial, hasSpecialty].filter(Boolean).length;
      
      if (typesCount === 3) typeScore = 30;
      else if (typesCount === 2) typeScore = 20;
      else typeScore = 10;
      
      // Tenant class balance (0-25 points)
      const classBalance = Math.abs(50 - percentClassB) + Math.abs(30 - percentClassA) + Math.abs(20 - percentClassC);
      const tenantClassScore = Math.max(0, 25 - (classBalance / 4));
      
      // Concentration risk (0-15 points)
      let concentrationScore = 15;
      if (largestPropertyPercent > 50) concentrationScore = 3;
      else if (largestPropertyPercent > 40) concentrationScore = 6;
      else if (largestPropertyPercent > 30) concentrationScore = 9;
      else if (largestPropertyPercent > 20) concentrationScore = 12;
      
      // Total diversification score
      const totalScore = geoScore + typeScore + tenantClassScore + concentrationScore;
      
      // Assessment
      let assessment = "";
      if (totalScore >= 90) assessment = "Excellent ✅";
      else if (totalScore >= 70) assessment = "Good 👍";
      else if (totalScore >= 50) assessment = "Moderate ⚠️";
      else assessment = "Needs Improvement 🚨";
      
      // Risk level
      let riskLevel = "";
      if (totalScore >= 80) riskLevel = "Low Risk";
      else if (totalScore >= 60) riskLevel = "Medium Risk";
      else riskLevel = "High Risk";
      
      // Recommendation
      let recommendation = "";
      if (numCities < 3) recommendation = "Expand to more cities";
      else if (typesCount < 2) recommendation = "Add different property types";
      else if (largestPropertyPercent > 30) recommendation = "Reduce concentration in single property";
      else recommendation = "Continue balanced growth strategy";

      return [
        { label: "Diversification Score", value: `${totalScore.toFixed(0)}/100`, isCurrency: false },
        { label: "Geographic Diversity Score", value: `${geoScore.toFixed(0)}/30`, isCurrency: false },
        { label: "Property Type Diversity Score", value: `${typeScore.toFixed(0)}/30`, isCurrency: false },
        { label: "Tenant Class Balance Score", value: `${tenantClassScore.toFixed(0)}/25`, isCurrency: false },
        { label: "Concentration Risk Level", value: riskLevel, isCurrency: false },
        { label: "Overall Assessment", value: assessment, isCurrency: false },
        { label: "Primary Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};