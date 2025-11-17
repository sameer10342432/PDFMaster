import { CalculatorContent } from '@/types';

export const RENTERS_INSURANCE_COST_ESTIMATOR_CONTENT: CalculatorContent = {
  title: 'Renter\'s Insurance Cost Estimator',
  description: 'Estimate the cost of renter\'s insurance based on coverage amount, location, deductible, and personal factors',
  icon: '🛡️',
  category: 'Renter Tools',
  slug: 'renters-insurance-cost-estimator',
  article: {
    title: "Complete Guide to Renter's Insurance Costs",
    content: `
    <h2>Understanding Renter's Insurance</h2>
    <p>Renter's insurance is one of the most affordable and valuable types of insurance, yet many renters skip it. This guide helps you understand coverage options and estimate your costs.</p>
    
    <h3>What Renter's Insurance Covers</h3>
    <ul>
      <li><strong>Personal Property:</strong> Furniture, electronics, clothing, and belongings</li>
      <li><strong>Liability Protection:</strong> If someone is injured in your rental</li>
      <li><strong>Additional Living Expenses:</strong> Hotel costs if your rental becomes uninhabitable</li>
      <li><strong>Medical Payments:</strong> Guest injuries in your unit</li>
      <li><strong>Theft and Vandalism:</strong> Both at home and away from home</li>
    </ul>
    
    <h3>Average Costs by Coverage Amount</h3>
    <ul>
      <li><strong>$15,000 Coverage:</strong> $12-$15/month</li>
      <li><strong>$25,000 Coverage:</strong> $15-$18/month</li>
      <li><strong>$35,000 Coverage:</strong> $18-$22/month</li>
      <li><strong>$50,000 Coverage:</strong> $22-$30/month</li>
    </ul>
    <p>Most renters pay between $15-$30 per month, or $180-$360 annually.</p>
    
    <h3>Factors Affecting Your Premium</h3>
    <ul>
      <li><strong>Location:</strong> High-crime areas or disaster-prone regions cost more</li>
      <li><strong>Coverage Amount:</strong> More coverage = higher premium</li>
      <li><strong>Deductible:</strong> Higher deductible = lower premium</li>
      <li><strong>Claims History:</strong> Previous claims increase rates</li>
      <li><strong>Credit Score:</strong> Better credit often means lower rates</li>
      <li><strong>Safety Features:</strong> Smoke detectors, deadbolts, security systems lower costs</li>
      <li><strong>Building Type:</strong> Newer buildings with safety features cost less</li>
      <li><strong>Bundling:</strong> Combining with auto insurance saves 10-25%</li>
    </ul>
    
    <h3>Replacement Cost vs. Actual Cash Value</h3>
    <ul>
      <li><strong>Replacement Cost:</strong> Pays to replace items at current prices (recommended, slightly higher premium)</li>
      <li><strong>Actual Cash Value:</strong> Pays depreciated value (lower premium, but less coverage)</li>
    </ul>
    <p>Replacement cost coverage is worth the extra $2-5/month.</p>
    
    <h3>How Much Coverage Do You Need?</h3>
    <p>To calculate your coverage needs:</p>
    <ul>
      <li>Take inventory of all your belongings</li>
      <li>Estimate replacement costs for furniture, electronics, clothing, etc.</li>
      <li>Add 20-30% buffer for items you might forget</li>
      <li>Most renters need $25,000-$35,000 in coverage</li>
    </ul>
    
    <h3>Liability Coverage Recommendations</h3>
    <ul>
      <li><strong>Minimum:</strong> $100,000 (often included in base policy)</li>
      <li><strong>Recommended:</strong> $300,000 for most renters</li>
      <li><strong>High Net Worth:</strong> $500,000+ or umbrella policy</li>
    </ul>
    
    <h3>Ways to Save on Renter's Insurance</h3>
    <ul>
      <li>Bundle with auto insurance (10-25% discount)</li>
      <li>Install smoke detectors and deadbolts</li>
      <li>Choose a higher deductible ($500-$1,000)</li>
      <li>Pay annually instead of monthly</li>
      <li>Maintain good credit score</li>
      <li>Ask about discounts (student, military, loyalty)</li>
      <li>Shop around and compare quotes from 3-5 companies</li>
      <li>Consider usage-based or group policies</li>
    </ul>
    
    <h3>Common Exclusions</h3>
    <p>Standard renter's insurance typically doesn't cover:</p>
    <ul>
      <li>Floods (need separate flood insurance)</li>
      <li>Earthquakes (need separate earthquake insurance)</li>
      <li>Roommate's belongings (they need their own policy)</li>
      <li>Business equipment (need business insurance)</li>
      <li>High-value jewelry (need scheduled personal property rider)</li>
      <li>Expensive collectibles or art (need special coverage)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "coverageAmount",
        label: "Personal Property Coverage",
        type: "number",
        placeholder: "30000",
        defaultValue: "30000",
      },
      {
        name: "deductible",
        label: "Deductible Amount",
        type: "number",
        placeholder: "500",
        defaultValue: "500",
      },
      {
        name: "location",
        label: "Location Risk Level",
        type: "select",
        options: [{ value: "Low Risk", label: "Low Risk" }, { value: "Average Risk", label: "Average Risk" }, { value: "High Risk", label: "High Risk" }],
        defaultValue: "Average Risk",
      },
      {
        name: "coverageType",
        label: "Coverage Type",
        type: "select",
        options: [{ value: "Actual Cash Value", label: "Actual Cash Value" }, { value: "Replacement Cost", label: "Replacement Cost" }],
        defaultValue: "Replacement Cost",
      },
      {
        name: "liabilityCoverage",
        label: "Liability Coverage",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "hasSafetyFeatures",
        label: "Has Safety Features?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "Yes",
      },
      {
        name: "bundledWithAuto",
        label: "Bundle with Auto Insurance?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "Estimated Monthly Premium", isCurrency: true },
      { label: "Estimated Annual Premium", isCurrency: true },
      { label: "Coverage per Dollar Spent", isCurrency: false },
      { label: "Liability Coverage Included", isCurrency: true },
      { label: "Your Deductible", isCurrency: true },
      { label: "Potential Annual Savings Tips", isCurrency: false },
    ],
    calculate: (data: any) => {
      const coverageAmount = Number(data.coverageAmount) || 30000;
      const deductible = Number(data.deductible) || 500;
      const location = data.location || "Average Risk";
      const coverageType = data.coverageType || "Replacement Cost";
      const liabilityCoverage = Number(data.liabilityCoverage) || 300000;
      const hasSafetyFeatures = data.hasSafetyFeatures === "Yes";
      const bundledWithAuto = data.bundledWithAuto === "Yes";
      
      // Base rate: $0.50 per $1,000 of coverage
      let monthlyPremium = (coverageAmount / 1000) * 0.50;
      
      // Location adjustment
      if (location === "High Risk") monthlyPremium *= 1.4;
      else if (location === "Low Risk") monthlyPremium *= 0.8;
      
      // Coverage type adjustment
      if (coverageType === "Replacement Cost") {
        monthlyPremium *= 1.15;
      }
      
      // Deductible adjustment
      if (deductible >= 1000) monthlyPremium *= 0.85;
      else if (deductible >= 500) monthlyPremium *= 0.95;
      else monthlyPremium *= 1.05;
      
      // Liability coverage adjustment
      if (liabilityCoverage > 300000) monthlyPremium += 3;
      else if (liabilityCoverage > 100000) monthlyPremium += 1;
      
      // Safety features discount
      if (hasSafetyFeatures) monthlyPremium *= 0.9;
      
      // Bundling discount
      if (bundledWithAuto) monthlyPremium *= 0.80;
      
      // Ensure minimum premium
      monthlyPremium = Math.max(monthlyPremium, 10);
      
      const annualPremium = monthlyPremium * 12;
      const coveragePerDollar = coverageAmount / annualPremium;
      
      // Savings tips
      let savingsTips = "";
      if (!bundledWithAuto) savingsTips += "Bundle with auto (-20%), ";
      if (deductible < 500) savingsTips += "Increase deductible (-10%), ";
      if (!hasSafetyFeatures) savingsTips += "Add safety features (-10%), ";
      if (savingsTips) savingsTips = savingsTips.slice(0, -2);
      else savingsTips = "You're already optimized!";

      return [
        { label: "Estimated Monthly Premium", value: `${monthlyPremium.toFixed(2)}`, isCurrency: true },
        { label: "Estimated Annual Premium", value: `${annualPremium.toFixed(2)}`, isCurrency: true },
        { label: "Coverage per Dollar Spent", value: `$${coveragePerDollar.toFixed(0)} coverage per $1`, isCurrency: false },
        { label: "Liability Coverage Included", value: `${liabilityCoverage.toFixed(0)}`, isCurrency: true },
        { label: "Your Deductible", value: `${deductible.toFixed(0)}`, isCurrency: true },
        { label: "Potential Annual Savings Tips", value: savingsTips, isCurrency: false },
      ];
    },
  },
};
