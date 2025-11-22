import { CalculatorContent } from '@/types';

export const CLOUD_ON_TITLE_RISK_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Cloud on Title Risk Calculator',
  description: 'Assess the financial and legal risk of purchasing property with a "cloud on title" - defects that impair clear ownership',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'cloud-on-title-risk-calculator',
  article: {
    title: "Understanding Cloud on Title Risks",
    content: `
    <h2>What is a Cloud on Title?</h2>
    <p>A "cloud on title" is any irregularity, claim, lien, or encumbrance that casts doubt on the property's ownership or marketability. Clouds can range from minor clerical errors to serious legal disputes that make the property unmarketable or uninsurable.</p>
    
    <h3>Common Types of Title Clouds</h3>
    <ul>
      <li><strong>Unresolved Liens:</strong> Old mortgages, tax liens, judgment liens not properly released</li>
      <li><strong>Errors in Records:</strong> Misspelled names, incorrect legal descriptions, recording mistakes</li>
      <li><strong>Missing Heirs:</strong> Unknown or unlocated heirs who may have inheritance claims</li>
      <li><strong>Forgery/Fraud:</strong> Fraudulent deeds, forged signatures in chain of title</li>
      <li><strong>Easement Disputes:</strong> Unclear or conflicting easement rights</li>
      <li><strong>Boundary Issues:</strong> Survey discrepancies, encroachments, adverse possession claims</li>
      <li><strong>Divorce Claims:</strong> Ex-spouse claims from improperly handled divorce proceedings</li>
      <li><strong>Estate Issues:</strong> Probate irregularities, missing estate administration</li>
    </ul>
    
    <h3>Risk Severity Levels</h3>
    <table>
      <tr>
        <th>Cloud Type</th>
        <th>Severity</th>
        <th>Typical Cost</th>
        <th>Resolution Time</th>
      </tr>
      <tr>
        <td>Clerical Errors</td>
        <td>Low</td>
        <td>$500-$2,000</td>
        <td>2-4 weeks</td>
      </tr>
      <tr>
        <td>Released Lien Still Recorded</td>
        <td>Low-Medium</td>
        <td>$1,000-$3,000</td>
        <td>4-8 weeks</td>
      </tr>
      <tr>
        <td>Boundary Disputes</td>
        <td>Medium</td>
        <td>$3,000-$15,000</td>
        <td>2-6 months</td>
      </tr>
      <tr>
        <td>Easement Conflicts</td>
        <td>Medium-High</td>
        <td>$5,000-$25,000</td>
        <td>3-12 months</td>
      </tr>
      <tr>
        <td>Missing Heir Claims</td>
        <td>High</td>
        <td>$10,000-$50,000+</td>
        <td>6-24 months</td>
      </tr>
      <tr>
        <td>Fraud/Forgery</td>
        <td>Critical</td>
        <td>$25,000-$100,000+</td>
        <td>12-36 months</td>
      </tr>
    </table>
    
    <h3>Financial Risks</h3>
    <ul>
      <li><strong>Legal Fees:</strong> Attorney costs to clear title ($2,000-$50,000+)</li>
      <li><strong>Quiet Title Action:</strong> Court proceeding to establish ownership ($5,000-$20,000)</li>
      <li><strong>Settlement Costs:</strong> Paying off disputed claims to clear title (highly variable)</li>
      <li><strong>Lost Deal Costs:</strong> Inspection fees, appraisal, opportunity cost if deal fails</li>
      <li><strong>Unmarketable Property:</strong> Cannot sell or refinance until cloud is resolved</li>
      <li><strong>Title Insurance Exclusions:</strong> Known defects excluded from coverage</li>
    </ul>
    
    <h3>Clearing a Cloud on Title</h3>
    <p>Methods to resolve title clouds:</p>
    <ul>
      <li><strong>Corrective Deeds:</strong> Fix errors with new properly executed documents</li>
      <li><strong>Release of Lien:</strong> Obtain official release from lien holder</li>
      <li><strong>Quitclaim Deed:</strong> Get parties to release potential claims</li>
      <li><strong>Affidavits:</strong> Sworn statements clarifying facts or identity</li>
      <li><strong>Quiet Title Lawsuit:</strong> Court action to establish clear ownership</li>
      <li><strong>Title Curative Work:</strong> Professional resolution by title company attorneys</li>
    </ul>
    
    <h3>When to Walk Away</h3>
    <p>Consider terminating the purchase if:</p>
    <ul>
      <li>Cloud involves fraud or forgery (extremely complex and risky)</li>
      <li>Multiple unknown heirs with potential claims</li>
      <li>Seller unwilling to resolve or pay for resolution</li>
      <li>Resolution timeline exceeds your needs or financing deadlines</li>
      <li>Estimated cost to clear exceeds 5-10% of purchase price</li>
      <li>Title insurance company refuses to insure even with exclusions</li>
    </ul>
    
    <h3>Negotiation Strategies</h3>
    <ul>
      <li><strong>Price Reduction:</strong> Discount equal to estimated resolution cost + risk premium</li>
      <li><strong>Seller Resolution:</strong> Require seller clear title before closing</li>
      <li><strong>Escrow Holdback:</strong> Hold back funds until cloud is cleared</li>
      <li><strong>Extended Closing:</strong> Allow additional time for resolution</li>
      <li><strong>Indemnification Agreement:</strong> Seller legally responsible for future claims</li>
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
        name: "cloudType",
        label: "Type of Cloud on Title",
        type: "select",
        options: [
          { label: "Clerical Error", value: "clerical" },
          { label: "Unreleased Lien", value: "unreleased_lien" },
          { label: "Boundary Dispute", value: "boundary" },
          { label: "Easement Conflict", value: "easement" },
          { label: "Missing Heir Claim", value: "missing_heir" },
          { label: "Fraud/Forgery Suspected", value: "fraud" },
        ],
        defaultValue: "unreleased_lien",
      },
      {
        name: "estimatedResolutionCost",
        label: "Estimated Resolution Cost ($)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "sellerWillingToResolve",
        label: "Is Seller Willing to Resolve?",
        type: "select",
        options: [
          { label: "Yes - Will Handle", value: "yes" },
          { label: "Partial - Will Share Cost", value: "partial" },
          { label: "No - As-Is Sale", value: "no" },
        ],
        defaultValue: "partial",
      },
      {
        name: "titleInsuranceAvailable",
        label: "Title Insurance Available?",
        type: "select",
        options: [
          { label: "Yes - Full Coverage", value: "full" },
          { label: "Yes - With Exclusions", value: "exclusions" },
          { label: "No - Uninsurable", value: "no" },
        ],
        defaultValue: "exclusions",
      },
      {
        name: "timelineFlexibility",
        label: "Your Timeline Flexibility",
        type: "select",
        options: [
          { label: "Flexible (6+ months)", value: "flexible" },
          { label: "Moderate (3-6 months)", value: "moderate" },
          { label: "Tight (< 3 months)", value: "tight" },
        ],
        defaultValue: "moderate",
      },
      {
        name: "dealInvestedCosts",
        label: "Already Invested in Deal ($)",
        type: "number",
        placeholder: "2000",
        defaultValue: "2000",
      },
    ],
    results: [
      { label: "Cloud Severity Level", isCurrency: false },
      { label: "Total Financial Risk", isCurrency: true },
      { label: "Recommended Action", isCurrency: false },
      { label: "Price Adjustment Needed", isCurrency: true },
      { label: "Deal Viability Score", isCurrency: false },
      { label: "Key Considerations", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchasePrice = Number(data.purchasePrice) || 0;
      const cloudType = data.cloudType || "unreleased_lien";
      const estimatedResolutionCost = Number(data.estimatedResolutionCost) || 0;
      const sellerWillingToResolve = data.sellerWillingToResolve || "partial";
      const titleInsuranceAvailable = data.titleInsuranceAvailable || "exclusions";
      const timelineFlexibility = data.timelineFlexibility || "moderate";
      const dealInvestedCosts = Number(data.dealInvestedCosts) || 0;
      
      // Severity assessment
      let severityLevel = "";
      let baseSeverityScore = 0;
      let typicalResolutionMonths = 0;
      
      if (cloudType === "clerical") {
        severityLevel = "Low Severity";
        baseSeverityScore = 20;
        typicalResolutionMonths = 1;
      } else if (cloudType === "unreleased_lien") {
        severityLevel = "Low-Medium Severity";
        baseSeverityScore = 35;
        typicalResolutionMonths = 2;
      } else if (cloudType === "boundary") {
        severityLevel = "Medium Severity";
        baseSeverityScore = 50;
        typicalResolutionMonths = 4;
      } else if (cloudType === "easement") {
        severityLevel = "Medium-High Severity";
        baseSeverityScore = 65;
        typicalResolutionMonths = 6;
      } else if (cloudType === "missing_heir") {
        severityLevel = "⚠️ High Severity";
        baseSeverityScore = 80;
        typicalResolutionMonths = 12;
      } else if (cloudType === "fraud") {
        severityLevel = "🚨 CRITICAL SEVERITY";
        baseSeverityScore = 95;
        typicalResolutionMonths = 18;
      }
      
      // Calculate total risk
      let totalRisk = estimatedResolutionCost + dealInvestedCosts;
      
      // Add risk premium for uncertainty
      const uncertaintyPremium = estimatedResolutionCost * 0.5; // 50% buffer
      totalRisk += uncertaintyPremium;
      
      // Add opportunity cost if timeline is tight
      if (timelineFlexibility === "tight" && typicalResolutionMonths > 3) {
        totalRisk += 5000; // opportunity cost of delayed purchase
      }
      
      // Adjust based on seller cooperation
      let buyerResponsibility = estimatedResolutionCost;
      if (sellerWillingToResolve === "yes") {
        buyerResponsibility = 0;
      } else if (sellerWillingToResolve === "partial") {
        buyerResponsibility = estimatedResolutionCost * 0.5;
      }
      
      // Title insurance impact
      let insuranceRisk = 0;
      if (titleInsuranceAvailable === "no") {
        insuranceRisk = 50;
        totalRisk += purchasePrice * 0.05; // add 5% for uninsured risk
      } else if (titleInsuranceAvailable === "exclusions") {
        insuranceRisk = 25;
        totalRisk += estimatedResolutionCost; // full exposure on excluded issue
      }
      
      // Calculate viability score (0-100)
      let viabilityScore = 100;
      viabilityScore -= baseSeverityScore;
      viabilityScore -= insuranceRisk;
      if (sellerWillingToResolve === "no") viabilityScore -= 20;
      if (timelineFlexibility === "tight" && typicalResolutionMonths > 3) viabilityScore -= 15;
      if (estimatedResolutionCost > purchasePrice * 0.05) viabilityScore -= 20;
      viabilityScore = Math.max(0, viabilityScore);
      
      // Recommended action
      let recommendedAction = "";
      if (viabilityScore >= 60) {
        recommendedAction = "✓ PROCEED with caution - Negotiate resolution terms";
      } else if (viabilityScore >= 40) {
        recommendedAction = "⚠️ RISKY - Require seller resolution or significant price reduction";
      } else if (viabilityScore >= 20) {
        recommendedAction = "⚠️ HIGH RISK - Consider walking away unless exceptional circumstances";
      } else {
        recommendedAction = "🚨 WALK AWAY - Risk exceeds potential benefit";
      }
      
      // Price adjustment calculation
      const priceAdjustment = buyerResponsibility + uncertaintyPremium;
      
      // Key considerations
      let considerations = "";
      if (cloudType === "fraud") {
        considerations = "🚨 Fraud involves complex legal issues - strongly recommend walking away";
      } else if (titleInsuranceAvailable === "no") {
        considerations = "No title insurance = unacceptable risk for most buyers";
      } else if (estimatedResolutionCost > purchasePrice * 0.1) {
        considerations = "Resolution cost exceeds 10% of purchase price - excessive";
      } else {
        considerations = `Timeline: ~${typicalResolutionMonths} months; Ensure written seller commitments`;
      }

      return [
        { label: "Cloud Severity Level", value: severityLevel, isCurrency: false },
        { label: "Total Financial Risk", value: totalRisk.toFixed(2), isCurrency: true },
        { label: "Recommended Action", value: recommendedAction, isCurrency: false },
        { label: "Price Adjustment Needed", value: priceAdjustment.toFixed(2), isCurrency: true },
        { label: "Deal Viability Score", value: `${viabilityScore}/100`, isCurrency: false },
        { label: "Key Considerations", value: considerations, isCurrency: false },
      ];
    },
  },
};
