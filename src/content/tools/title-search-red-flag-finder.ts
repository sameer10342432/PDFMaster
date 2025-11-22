import { CalculatorContent } from '@/types';

export const TITLE_SEARCH_RED_FLAG_FINDER_CONTENT: CalculatorContent = {
  title: 'Title Search "Red Flag" Finder',
  description: 'Identify potential title issues, liens, encumbrances, and ownership problems before closing to protect your real estate investment',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'title-search-red-flag-finder',
  article: {
    title: "Title Search Red Flags and Warning Signs",
    content: `
    <h2>What is a Title Search?</h2>
    <p>A title search examines public records to verify a property's legal ownership and uncover any claims, liens, or encumbrances that could affect your ownership rights. Title issues can delay closings, cost thousands in legal fees, or even invalidate the sale.</p>
    
    <h3>Common Title Red Flags</h3>
    <ul>
      <li><strong>Outstanding Liens:</strong> Tax liens, mechanic's liens, HOA liens, judgment liens</li>
      <li><strong>Ownership Disputes:</strong> Unclear chain of title, missing heirs, forged documents</li>
      <li><strong>Encumbrances:</strong> Easements, restrictions, covenants affecting property use</li>
      <li><strong>Survey Issues:</strong> Boundary disputes, encroachments, incorrect legal descriptions</li>
      <li><strong>Unpaid Debts:</strong> Property taxes, special assessments, utility liens</li>
      <li><strong>Legal Claims:</strong> Pending lawsuits, bankruptcy, divorce proceedings</li>
      <li><strong>Errors:</strong> Recording mistakes, clerical errors, incorrect transfers</li>
    </ul>
    
    <h3>Types of Liens (by severity)</h3>
    <table>
      <tr>
        <th>Lien Type</th>
        <th>Priority</th>
        <th>Typical Cost</th>
        <th>Resolution Time</th>
      </tr>
      <tr>
        <td>IRS Tax Lien</td>
        <td>Highest</td>
        <td>Varies widely</td>
        <td>30-90 days</td>
      </tr>
      <tr>
        <td>Property Tax Lien</td>
        <td>Very High</td>
        <td>$500-$50,000+</td>
        <td>At closing</td>
      </tr>
      <tr>
        <td>Mechanic's Lien</td>
        <td>High</td>
        <td>$2,000-$50,000</td>
        <td>14-60 days</td>
      </tr>
      <tr>
        <td>HOA Lien</td>
        <td>Medium-High</td>
        <td>$500-$20,000</td>
        <td>7-30 days</td>
      </tr>
      <tr>
        <td>Judgment Lien</td>
        <td>Medium</td>
        <td>$1,000-$100,000+</td>
        <td>30-120 days</td>
      </tr>
      <tr>
        <td>Mortgage Lien</td>
        <td>Varies</td>
        <td>Loan balance</td>
        <td>Paid at closing</td>
      </tr>
    </table>
    
    <h3>Easement Issues</h3>
    <p>Easements grant others rights to use your property. Common types:</p>
    <ul>
      <li><strong>Utility Easements:</strong> Power, water, sewer access (usually benign)</li>
      <li><strong>Access Easements:</strong> Neighbor's driveway/path through property (can limit use)</li>
      <li><strong>Conservation Easements:</strong> Restrict development permanently (major impact)</li>
      <li><strong>Prescriptive Easements:</strong> Established by long-term use (hard to remove)</li>
      <li><strong>Negative Easements:</strong> Prohibit certain activities (view, light, air restrictions)</li>
    </ul>
    
    <h3>Chain of Title Problems</h3>
    <ul>
      <li><strong>Missing Links:</strong> Gaps in ownership history raise questions</li>
      <li><strong>Forged Deeds:</strong> Fraudulent transfers discovered years later</li>
      <li><strong>Unknown Heirs:</strong> Claims from previously unknown relatives</li>
      <li><strong>Errors in Records:</strong> Misspelled names, wrong property descriptions</li>
      <li><strong>Undisclosed Divorces:</strong> Ex-spouse may have ownership claims</li>
    </ul>
    
    <h3>Title Insurance Protection</h3>
    <p>Title insurance protects against covered title defects:</p>
    <ul>
      <li><strong>Owner's Policy:</strong> Protects buyer (one-time premium: $500-$3,500)</li>
      <li><strong>Lender's Policy:</strong> Protects mortgage lender (required for financing)</li>
      <li><strong>Coverage Duration:</strong> Owner's policy lasts as long as you own property</li>
      <li><strong>What's Covered:</strong> Pre-existing defects, forgery, fraud, liens</li>
      <li><strong>What's NOT Covered:</strong> Known defects, environmental issues, zoning violations</li>
    </ul>
    
    <h3>Resolution Strategies</h3>
    <ul>
      <li><strong>Lien Payoff:</strong> Paid from sale proceeds at closing</li>
      <li><strong>Title Curative:</strong> Legal work to clear title defects ($500-$5,000+)</li>
      <li><strong>Quiet Title Action:</strong> Lawsuit to establish clear ownership ($2,000-$10,000+)</li>
      <li><strong>Seller Negotiation:</strong> Delay closing until resolved or reduce price</li>
      <li><strong>Escrow Holdback:</strong> Hold funds until issue resolved</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchasePrice",
        label: "Purchase Price ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "hasPropertyTaxLien",
        label: "Outstanding Property Tax Lien?",
        type: "select",
        options: [
          { label: "No", value: "no" },
          { label: "Yes - Amount Known", value: "yes" },
          { label: "Yes - Amount Unknown", value: "unknown" },
        ],
        defaultValue: "no",
      },
      {
        name: "taxLienAmount",
        label: "Property Tax Lien Amount ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "0",
      },
      {
        name: "hasMechanicLien",
        label: "Mechanic's Lien Present?",
        type: "select",
        options: [
          { label: "No", value: "no" },
          { label: "Yes", value: "yes" },
        ],
        defaultValue: "no",
      },
      {
        name: "hasJudgmentLien",
        label: "Judgment Lien Present?",
        type: "select",
        options: [
          { label: "No", value: "no" },
          { label: "Yes", value: "yes" },
        ],
        defaultValue: "no",
      },
      {
        name: "easementType",
        label: "Easements Discovered",
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Standard Utility Only", value: "utility" },
          { label: "Access Easement", value: "access" },
          { label: "Conservation Easement", value: "conservation" },
        ],
        defaultValue: "none",
      },
      {
        name: "chainOfTitleIssue",
        label: "Chain of Title Issues?",
        type: "select",
        options: [
          { label: "Clear Title", value: "clear" },
          { label: "Minor Gaps", value: "minor" },
          { label: "Significant Issues", value: "significant" },
        ],
        defaultValue: "clear",
      },
      {
        name: "hasTitleInsurance",
        label: "Purchasing Title Insurance?",
        type: "select",
        options: [
          { label: "Yes - Owner's Policy", value: "yes" },
          { label: "No", value: "no" },
        ],
        defaultValue: "yes",
      },
    ],
    results: [
      { label: "Title Risk Level", isCurrency: false },
      { label: "Identified Red Flags", isCurrency: false },
      { label: "Estimated Resolution Cost", isCurrency: true },
      { label: "Closing Delay Risk", isCurrency: false },
      { label: "Recommended Title Insurance", isCurrency: true },
      { label: "Next Steps", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const hasPropertyTaxLien = data.hasPropertyTaxLien || "no";
      const taxLienAmount = Number(data.taxLienAmount) || 0;
      const hasMechanicLien = data.hasMechanicLien === "yes";
      const hasJudgmentLien = data.hasJudgmentLien === "yes";
      const easementType = data.easementType || "none";
      const chainOfTitleIssue = data.chainOfTitleIssue || "clear";
      const hasTitleInsurance = data.hasTitleInsurance === "yes";
      
      let riskScore = 0;
      const redFlags = [];
      let estimatedCost = 0;
      let delayDays = 0;
      
      // Property tax lien analysis
      if (hasPropertyTaxLien === "yes") {
        riskScore += 20;
        redFlags.push("Property tax lien");
        estimatedCost += taxLienAmount;
        delayDays += 7;
      } else if (hasPropertyTaxLien === "unknown") {
        riskScore += 30;
        redFlags.push("Unknown property tax lien");
        estimatedCost += 5000; // estimate
        delayDays += 14;
      }
      
      // Mechanic's lien
      if (hasMechanicLien) {
        riskScore += 25;
        redFlags.push("Mechanic's lien");
        estimatedCost += 15000; // average
        delayDays += 30;
      }
      
      // Judgment lien
      if (hasJudgmentLien) {
        riskScore += 20;
        redFlags.push("Judgment lien");
        estimatedCost += 10000; // average
        delayDays += 45;
      }
      
      // Easement analysis
      if (easementType === "access") {
        riskScore += 15;
        redFlags.push("Access easement (verify impact)");
        estimatedCost += 1500; // legal review
      } else if (easementType === "conservation") {
        riskScore += 30;
        redFlags.push("⚠️ Conservation easement (major restriction)");
        estimatedCost += 3000; // legal review
        delayDays += 14;
      }
      
      // Chain of title
      if (chainOfTitleIssue === "minor") {
        riskScore += 10;
        redFlags.push("Minor title gaps");
        estimatedCost += 1000; // curative work
        delayDays += 7;
      } else if (chainOfTitleIssue === "significant") {
        riskScore += 35;
        redFlags.push("⚠️ Significant chain of title issues");
        estimatedCost += 5000; // extensive curative or quiet title
        delayDays += 60;
      }
      
      // No title insurance
      if (!hasTitleInsurance) {
        riskScore += 25;
        redFlags.push("⚠️ No title insurance planned");
      }
      
      // Risk level
      let riskLevel = "Low Risk";
      if (riskScore >= 60) {
        riskLevel = "🚨 CRITICAL RISK - Do Not Proceed";
      } else if (riskScore >= 40) {
        riskLevel = "⚠️ HIGH RISK - Resolve Before Closing";
      } else if (riskScore >= 20) {
        riskLevel = "⚠️ MODERATE RISK - Monitor Closely";
      } else if (riskScore > 0) {
        riskLevel = "✓ Low Risk - Minor Issues";
      } else {
        riskLevel = "✓ Clean Title - No Issues Found";
      }
      
      const identifiedFlags = redFlags.length > 0 ? redFlags.join("; ") : "✓ No red flags identified";
      
      const closingDelay = delayDays > 0 ? `${delayDays}+ days potential delay` : "No expected delay";
      
      // Title insurance recommendation
      const titleInsuranceCost = purchasePrice * 0.006; // ~0.6% of purchase price
      
      let nextSteps = "";
      if (riskScore >= 40) {
        nextSteps = "URGENT: Retain real estate attorney immediately; Do not proceed to closing; Demand seller resolution";
      } else if (riskScore >= 20) {
        nextSteps = "Consult real estate attorney; Request seller address issues; Consider escrow holdback";
      } else if (riskScore > 0) {
        nextSteps = "Review with title company; Verify standard resolution at closing; Ensure title insurance coverage";
      } else {
        nextSteps = "✓ Proceed with standard title insurance; Continue to closing as planned";
      }

      return [
        { label: "Title Risk Level", value: riskLevel, isCurrency: false },
        { label: "Identified Red Flags", value: identifiedFlags, isCurrency: false },
        { label: "Estimated Resolution Cost", value: estimatedCost.toFixed(2), isCurrency: true },
        { label: "Closing Delay Risk", value: closingDelay, isCurrency: false },
        { label: "Recommended Title Insurance", value: titleInsuranceCost.toFixed(2), isCurrency: true },
        { label: "Next Steps", value: nextSteps, isCurrency: false },
      ];
    },
  },
};
