import { CalculatorContent } from '@/types';

export const HOA_SPECIAL_ASSESSMENT_RISK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'HOA Special Assessment Risk Calculator',
  description: 'Evaluate the risk of unexpected HOA special assessments and estimate potential costs',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'hoa-special-assessment-risk-calculator',
  article: {
    title: "Understanding HOA Special Assessments",
    content: `
    <h2>What is an HOA Special Assessment?</h2>
    <p>An HOA special assessment is a one-time fee charged to homeowners by the Homeowners Association to cover unexpected expenses or major projects that exceed the regular HOA budget and reserve funds.</p>
    
    <h3>Common Reasons for Special Assessments</h3>
    <ul>
      <li><strong>Emergency Repairs:</strong> Roof damage, foundation issues, plumbing failures</li>
      <li><strong>Natural Disasters:</strong> Hurricane, earthquake, flood damage not covered by insurance</li>
      <li><strong>Deferred Maintenance:</strong> Years of inadequate reserve funding catching up</li>
      <li><strong>Major Improvements:</strong> Pool renovation, clubhouse remodel, landscaping upgrade</li>
      <li><strong>Legal Costs:</strong> Lawsuits, litigation, regulatory compliance</li>
      <li><strong>Infrastructure Upgrades:</strong> New roofs, parking lot resurfacing, elevator replacement</li>
    </ul>
    
    <h3>Warning Signs of Potential Special Assessments</h3>
    <ul>
      <li><strong>Low Reserve Funds:</strong> HOA reserves below 30% of annual budget</li>
      <li><strong>Aging Infrastructure:</strong> Buildings or amenities over 20-30 years old</li>
      <li><strong>Deferred Maintenance:</strong> Visible neglect, deteriorating conditions</li>
      <li><strong>Recent Insurance Claims:</strong> Multiple claims or rising premiums</li>
      <li><strong>High Turnover:</strong> Many owners selling, could indicate known issues</li>
      <li><strong>Board Conflicts:</strong> Management disputes, frequent board changes</li>
      <li><strong>Rising HOA Fees:</strong> Significantly increasing monthly dues</li>
    </ul>
    
    <h3>How Special Assessments Work</h3>
    <p>The process typically involves:</p>
    <ol>
      <li><strong>Board Vote:</strong> HOA board identifies need and votes to approve assessment</li>
      <li><strong>Owner Notification:</strong> Written notice sent to all homeowners (30-60 days advance)</li>
      <li><strong>Payment Terms:</strong> Lump sum or installment payment options</li>
      <li><strong>Enforcement:</strong> Liens or foreclosure for non-payment</li>
    </ol>
    
    <h3>Legal Protections for Homeowners</h3>
    <ul>
      <li><strong>Review CC&Rs:</strong> Check voting requirements and assessment limits</li>
      <li><strong>Owner Vote:</strong> Some states require homeowner approval for large assessments</li>
      <li><strong>Budget Transparency:</strong> Request detailed project bids and financial statements</li>
      <li><strong>Payment Plans:</strong> Negotiate extended payment terms if needed</li>
      <li><strong>Legal Recourse:</strong> Challenge unreasonable or improperly approved assessments</li>
    </ul>
    
    <h3>Protecting Yourself from Special Assessments</h3>
    <ul>
      <li><strong>Pre-Purchase Review:</strong> Request reserve study and recent meeting minutes before buying</li>
      <li><strong>Reserve Study:</strong> Review the HOA's reserve fund adequacy</li>
      <li><strong>Attend Meetings:</strong> Stay informed about HOA finances and planned projects</li>
      <li><strong>Build Emergency Fund:</strong> Save 3-6 months of HOA fees for unexpected costs</li>
      <li><strong>Insurance Check:</strong> Verify HOA has adequate insurance coverage</li>
      <li><strong>Ask Questions:</strong> Request 5-year capital improvement plan</li>
    </ul>
    
    <h3>Typical Special Assessment Amounts</h3>
    <ul>
      <li><strong>Minor Repairs:</strong> $500 - $2,000 per unit</li>
      <li><strong>Major Projects:</strong> $5,000 - $15,000 per unit</li>
      <li><strong>Catastrophic Events:</strong> $20,000 - $50,000+ per unit</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Property Value",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "hoaReserves",
        label: "HOA Reserve Fund Balance",
        type: "number",
        placeholder: "100000",
        defaultValue: "50000",
      },
      {
        name: "annualBudget",
        label: "HOA Annual Budget",
        type: "number",
        placeholder: "200000",
        defaultValue: "150000",
      },
      {
        name: "buildingAge",
        label: "Building/Community Age (years)",
        type: "number",
        placeholder: "20",
        defaultValue: "15",
      },
      {
        name: "totalUnits",
        label: "Total Units in HOA",
        type: "number",
        placeholder: "50",
        defaultValue: "40",
      },
      {
        name: "deferredMaintenance",
        label: "Visible Deferred Maintenance?",
        type: "select",
        options: ["None", "Minor", "Moderate", "Significant"],
        defaultValue: "Minor",
      },
      {
        name: "recentAssessments",
        label: "Special Assessments in Last 5 Years?",
        type: "select",
        options: ["None", "One", "Multiple"],
        defaultValue: "None",
      },
    ],
    results: [
      { label: "Reserve Adequacy", isCurrency: false },
      { label: "Risk Score", isCurrency: false },
      { label: "Estimated Potential Assessment", isCurrency: true },
      { label: "Assessment Per Unit", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const hoaReserves = Number(data.hoaReserves) || 0;
      const annualBudget = Number(data.annualBudget) || 0;
      const buildingAge = Number(data.buildingAge) || 0;
      const totalUnits = Number(data.totalUnits) || 1;
      const deferredMaintenance = data.deferredMaintenance || "None";
      const recentAssessments = data.recentAssessments || "None";
      
      // Calculate reserve adequacy
      const reservePercentage = annualBudget > 0 ? (hoaReserves / annualBudget) * 100 : 0;
      let adequacy = "";
      let riskPoints = 0;
      
      if (reservePercentage >= 70) {
        adequacy = "🟢 Excellent (70%+)";
      } else if (reservePercentage >= 50) {
        adequacy = "🟡 Good (50-69%)";
        riskPoints += 1;
      } else if (reservePercentage >= 30) {
        adequacy = "🟠 Fair (30-49%)";
        riskPoints += 2;
      } else {
        adequacy = "🔴 Poor (<30%)";
        riskPoints += 3;
      }
      
      // Age risk
      if (buildingAge > 30) riskPoints += 3;
      else if (buildingAge > 20) riskPoints += 2;
      else if (buildingAge > 10) riskPoints += 1;
      
      // Deferred maintenance risk
      if (deferredMaintenance === "Significant") riskPoints += 3;
      else if (deferredMaintenance === "Moderate") riskPoints += 2;
      else if (deferredMaintenance === "Minor") riskPoints += 1;
      
      // Recent assessments risk
      if (recentAssessments === "Multiple") riskPoints += 2;
      else if (recentAssessments === "One") riskPoints += 1;
      
      // Determine risk level
      let riskLevel = "";
      let estimatedAssessment = 0;
      let recommendation = "";
      
      if (riskPoints >= 8) {
        riskLevel = "🔴 HIGH RISK (Score: " + riskPoints + "/11)";
        estimatedAssessment = propertyValue * 0.10; // 10% of property value
        recommendation = "CAUTION: High risk of special assessment. Review reserve study and attend HOA meetings. Consider setting aside $10,000+ emergency fund.";
      } else if (riskPoints >= 5) {
        riskLevel = "🟠 MODERATE RISK (Score: " + riskPoints + "/11)";
        estimatedAssessment = propertyValue * 0.05; // 5% of property value
        recommendation = "Moderate risk. Request recent reserve study and 5-year capital plan. Build emergency fund of $5,000-$10,000.";
      } else if (riskPoints >= 3) {
        riskLevel = "🟡 LOW-MODERATE RISK (Score: " + riskPoints + "/11)";
        estimatedAssessment = propertyValue * 0.02; // 2% of property value
        recommendation = "Some risk exists. Stay informed by attending meetings. Consider saving $2,000-$5,000 as precaution.";
      } else {
        riskLevel = "🟢 LOW RISK (Score: " + riskPoints + "/11)";
        estimatedAssessment = propertyValue * 0.01; // 1% of property value
        recommendation = "Low risk of special assessment. HOA appears well-managed. Maintain 3-month HOA fee emergency fund.";
      }
      
      const assessmentPerUnit = estimatedAssessment / totalUnits;

      return [
        { label: "Reserve Adequacy", value: `${adequacy} (${reservePercentage.toFixed(1)}%)`, isCurrency: false },
        { label: "Risk Score", value: riskLevel, isCurrency: false },
        { label: "Estimated Potential Assessment", value: estimatedAssessment.toFixed(2), isCurrency: true },
        { label: "Assessment Per Unit", value: assessmentPerUnit.toFixed(2), isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
