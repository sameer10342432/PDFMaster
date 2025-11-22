import { CalculatorContent } from '@/types';

export const REAL_ESTATE_CONTRACT_REVIEW_CHECKLIST_CONTENT: CalculatorContent = {
  title: 'Real Estate Contract Review Checklist',
  description: 'Comprehensive checklist to review purchase agreements, spot red flags, and ensure all critical contract elements are properly addressed before signing',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'real-estate-contract-review-checklist',
  article: {
    title: "Essential Real Estate Contract Review Guide",
    content: `
    <h2>Why Contract Review is Critical</h2>
    <p>A real estate purchase agreement is one of the most important legal documents you'll sign. Missing crucial details or unfavorable terms can cost tens of thousands of dollars. Professional review is essential, but understanding key elements yourself provides critical protection.</p>
    
    <h3>Critical Contract Elements</h3>
    <ul>
      <li><strong>Purchase Price & Terms:</strong> Exact amount, deposit structure, financing contingencies</li>
      <li><strong>Property Description:</strong> Legal description, address, included/excluded items</li>
      <li><strong>Contingencies:</strong> Inspection, financing, appraisal, title, HOA review periods</li>
      <li><strong>Closing Date:</strong> Timeline, possession date, rent-back arrangements</li>
      <li><strong>Disclosures:</strong> Seller disclosures, property condition, material defects</li>
      <li><strong>Earnest Money:</strong> Amount, holder, refund conditions</li>
    </ul>
    
    <h3>Common Contract Red Flags</h3>
    <ul>
      <li>Unusually short inspection periods (less than 10 days is suspicious)</li>
      <li>"As-is" clauses with no inspection contingency</li>
      <li>Vague property descriptions or boundary disputes</li>
      <li>Missing or waived financing contingency when financing needed</li>
      <li>Unreasonable default remedies or liquidated damages</li>
      <li>Seller's right to cancel without cause</li>
      <li>Missing HOA documents or excessive HOA restrictions</li>
      <li>Unusual closing cost allocations</li>
    </ul>
    
    <h3>Contingency Periods (Typical Timeframes)</h3>
    <table>
      <tr>
        <th>Contingency Type</th>
        <th>Standard Period</th>
        <th>Purpose</th>
      </tr>
      <tr>
        <td>Home Inspection</td>
        <td>10-17 days</td>
        <td>Uncover defects, renegotiate or cancel</td>
      </tr>
      <tr>
        <td>Financing</td>
        <td>21-30 days</td>
        <td>Secure loan approval, protect deposit</td>
      </tr>
      <tr>
        <td>Appraisal</td>
        <td>17-21 days</td>
        <td>Ensure property value supports loan</td>
      </tr>
      <tr>
        <td>Title Review</td>
        <td>30-45 days</td>
        <td>Clear title, resolve liens/encumbrances</td>
      </tr>
      <tr>
        <td>HOA Review</td>
        <td>3-7 days</td>
        <td>Review docs, special assessments, rules</td>
      </tr>
    </table>
    
    <h3>Items Typically Included/Excluded</h3>
    <p><strong>Usually Included (fixtures):</strong></p>
    <ul>
      <li>Built-in appliances (dishwasher, range, microwave)</li>
      <li>Light fixtures, ceiling fans</li>
      <li>Window coverings (blinds, shutters)</li>
      <li>Attached shelving, mirrors</li>
      <li>Landscaping, plants, trees</li>
    </ul>
    <p><strong>Often Excluded (personal property):</strong></p>
    <ul>
      <li>Refrigerator, washer, dryer (unless specified)</li>
      <li>Furniture, artwork, decorations</li>
      <li>Portable appliances</li>
      <li>Custom window treatments</li>
      <li>Shed or playsets (verify if attached)</li>
    </ul>
    
    <h3>Professional Review Recommendations</h3>
    <ul>
      <li><strong>Real Estate Attorney:</strong> Required in some states, recommended in all ($500-$1,500)</li>
      <li><strong>Real Estate Agent:</strong> Experienced representation on both sides</li>
      <li><strong>Home Inspector:</strong> Professional property evaluation ($300-$600)</li>
      <li><strong>Title Company:</strong> Title search and insurance ($800-$2,000)</li>
      <li><strong>Mortgage Broker:</strong> Financing terms and feasibility review</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        placeholder: "400000",
        defaultValue: "400000",
      },
      {
        name: "earnestMoney",
        label: "Earnest Money Deposit ($)",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "inspectionPeriod",
        label: "Inspection Period (days)",
        type: "number",
        placeholder: "14",
        defaultValue: "14",
      },
      {
        name: "financingPeriod",
        label: "Financing Contingency Period (days)",
        type: "number",
        placeholder: "30",
        defaultValue: "30",
      },
      {
        name: "closingDays",
        label: "Days to Closing",
        type: "number",
        placeholder: "45",
        defaultValue: "45",
      },
      {
        name: "hasInspectionContingency",
        label: "Has Inspection Contingency?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        defaultValue: "yes",
      },
      {
        name: "hasFinancingContingency",
        label: "Has Financing Contingency?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        defaultValue: "yes",
      },
      {
        name: "hasAppraisalContingency",
        label: "Has Appraisal Contingency?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        defaultValue: "yes",
      },
      {
        name: "hasAttorneyReview",
        label: "Attorney Reviewed Contract?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No - Plan to", value: "planned" },
          { label: "No - Skipping", value: "no" },
        ],
        defaultValue: "planned",
      },
    ],
    results: [
      { label: "Earnest Money at Risk", isCurrency: true },
      { label: "Contract Risk Level", isCurrency: false },
      { label: "Critical Issues Found", isCurrency: false },
      { label: "Recommended Actions", isCurrency: false },
      { label: "Timeline Assessment", isCurrency: false },
      { label: "Protection Score", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const earnestMoney = Number(data.earnestMoney) || 0;
      const inspectionPeriod = Number(data.inspectionPeriod) || 0;
      const financingPeriod = Number(data.financingPeriod) || 0;
      const closingDays = Number(data.closingDays) || 0;
      const hasInspectionContingency = data.hasInspectionContingency === "yes";
      const hasFinancingContingency = data.hasFinancingContingency === "yes";
      const hasAppraisalContingency = data.hasAppraisalContingency === "yes";
      const hasAttorneyReview = data.hasAttorneyReview || "no";
      
      let riskScore = 0;
      const issues = [];
      const recommendations = [];
      
      // Analyze contingencies
      if (!hasInspectionContingency) {
        riskScore += 25;
        issues.push("No inspection contingency");
        recommendations.push("Add inspection contingency or proceed with caution");
      } else if (inspectionPeriod < 10) {
        riskScore += 15;
        issues.push("Short inspection period");
      }
      
      if (!hasFinancingContingency && purchasePrice > 100000) {
        riskScore += 30;
        issues.push("No financing contingency");
        recommendations.push("Add financing contingency if using a loan");
      }
      
      if (!hasAppraisalContingency) {
        riskScore += 20;
        issues.push("No appraisal contingency");
        recommendations.push("Consider adding appraisal contingency");
      }
      
      if (hasAttorneyReview === "no") {
        riskScore += 20;
        issues.push("No attorney review");
        recommendations.push("Strongly recommend attorney review ($500-$1,500)");
      }
      
      if (closingDays < 30) {
        riskScore += 10;
        issues.push("Tight closing timeline");
      }
      
      if (earnestMoney > purchasePrice * 0.05) {
        riskScore += 5;
        issues.push("High earnest money deposit");
      }
      
      // Risk level assessment
      let riskLevel = "Low Risk";
      if (riskScore > 50) {
        riskLevel = "⚠️ HIGH RISK - Review Immediately";
      } else if (riskScore > 25) {
        riskLevel = "⚠️ MODERATE RISK - Address Issues";
      } else if (riskScore > 10) {
        riskLevel = "✓ Low Risk - Minor Concerns";
      } else {
        riskLevel = "✓ Very Low Risk - Well Protected";
      }
      
      // Calculate protection score
      const protectionScore = Math.max(0, 100 - riskScore);
      
      // Timeline assessment
      let timelineAssessment = "";
      if (closingDays < 30) {
        timelineAssessment = "⚠️ Aggressive timeline";
      } else if (closingDays >= 30 && closingDays <= 60) {
        timelineAssessment = "✓ Standard timeline";
      } else {
        timelineAssessment = "Extended timeline";
      }
      
      const criticalIssues = issues.length > 0 ? issues.join("; ") : "✓ No critical issues identified";
      const recommendedActions = recommendations.length > 0 ? recommendations.join("; ") : "✓ Contract appears adequately protected";

      return [
        { label: "Earnest Money at Risk", value: earnestMoney.toFixed(2), isCurrency: true },
        { label: "Contract Risk Level", value: riskLevel, isCurrency: false },
        { label: "Critical Issues Found", value: criticalIssues, isCurrency: false },
        { label: "Recommended Actions", value: recommendedActions, isCurrency: false },
        { label: "Timeline Assessment", value: timelineAssessment, isCurrency: false },
        { label: "Protection Score", value: `${protectionScore}/100`, isCurrency: false },
      ];
    },
  },
};
