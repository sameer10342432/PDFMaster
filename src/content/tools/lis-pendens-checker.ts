import { CalculatorContent } from '@/types';

export const LIS_PENDENS_CHECKER_CONTENT: CalculatorContent = {
  title: 'Lis Pendens (Pending Lawsuit) Checker',
  description: 'Assess the risk and impact of a lis pendens notice on a property purchase or sale',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'lis-pendens-checker',
  article: {
    title: "Understanding Lis Pendens and Property Lawsuits",
    content: `
    <h2>What is Lis Pendens?</h2>
    <p>Lis pendens (Latin for "suit pending") is a written notice that a lawsuit has been filed involving a claim on a real property. It serves as a public warning that the property's title is in dispute.</p>
    
    <h3>Common Reasons for Lis Pendens</h3>
    <ul>
      <li><strong>Foreclosure Actions:</strong> Lender filing to foreclose on mortgage</li>
      <li><strong>Divorce Proceedings:</strong> Property division disputes</li>
      <li><strong>Quiet Title Actions:</strong> Disputes over property ownership</li>
      <li><strong>Boundary Disputes:</strong> Disagreements with neighbors over property lines</li>
      <li><strong>Easement Disputes:</strong> Conflicts over rights of way or access</li>
      <li><strong>Contractor Liens:</strong> Construction payment disputes</li>
      <li><strong>HOA Disputes:</strong> Association foreclosure or fee disputes</li>
      <li><strong>Estate Disputes:</strong> Inheritance or will contests</li>
      <li><strong>Fraud Claims:</strong> Allegations of deed fraud or forgery</li>
    </ul>
    
    <h3>How Lis Pendens Affects Property</h3>
    <ul>
      <li><strong>Clouds the Title:</strong> Makes title unmarketable and unsellable</li>
      <li><strong>Blocks Sale:</strong> Most buyers and lenders won't proceed</li>
      <li><strong>Prevents Refinancing:</strong> Cannot get new loans against property</li>
      <li><strong>Public Record:</strong> Visible to anyone doing title search</li>
      <li><strong>Priority Warning:</strong> Lawsuit outcome may affect future buyers</li>
      <li><strong>Diminishes Value:</strong> Property becomes distressed asset</li>
    </ul>
    
    <h3>Timeline and Duration</h3>
    <ul>
      <li><strong>Filing:</strong> Plaintiff files lis pendens with county recorder</li>
      <li><strong>Notice:</strong> Property owner receives notification</li>
      <li><strong>Duration:</strong> Remains until lawsuit is resolved or withdrawn</li>
      <li><strong>Average Timeline:</strong> 6 months to 3+ years depending on case complexity</li>
      <li><strong>Expiration:</strong> Some states have automatic expiration (1-5 years)</li>
    </ul>
    
    <h3>Options for Property Owners</h3>
    <ul>
      <li><strong>Motion to Expunge:</strong> Request court to remove lis pendens if frivolous</li>
      <li><strong>Posting Bond:</strong> Some states allow bond to release lis pendens</li>
      <li><strong>Settle the Lawsuit:</strong> Negotiate resolution with plaintiff</li>
      <li><strong>Fight the Case:</strong> Proceed to trial and win the lawsuit</li>
      <li><strong>File Bankruptcy:</strong> Automatic stay may pause proceedings</li>
    </ul>
    
    <h3>Impact on Buyers and Sellers</h3>
    <p><strong>For Sellers:</strong></p>
    <ul>
      <li>Cannot sell property with clear title</li>
      <li>Must disclose lis pendens to potential buyers</li>
      <li>Property value significantly reduced (often 20-50%)</li>
      <li>May need to resolve lawsuit before selling</li>
      <li>Could face lawsuit judgment affecting proceeds</li>
    </ul>
    
    <p><strong>For Buyers:</strong></p>
    <ul>
      <li>Title insurance won't be issued</li>
      <li>Lenders typically won't provide financing</li>
      <li>Risk of losing property if lawsuit succeeds</li>
      <li>Opportunity for deeply discounted purchase</li>
      <li>May inherit the legal dispute</li>
    </ul>
    
    <h3>How to Check for Lis Pendens</h3>
    <ol>
      <li><strong>Title Search:</strong> Order professional title report</li>
      <li><strong>County Records:</strong> Search county recorder's office</li>
      <li><strong>Online Databases:</strong> Many counties have online property records</li>
      <li><strong>Court Records:</strong> Check civil court dockets</li>
      <li><strong>Title Company:</strong> Request preliminary title report</li>
    </ol>
    
    <h3>Red Flags and Warning Signs</h3>
    <ul>
      <li>Property priced significantly below market value</li>
      <li>Seller reluctant to provide title documents</li>
      <li>Multiple ownership changes in short period</li>
      <li>Property in foreclosure proceedings</li>
      <li>Owner in divorce or bankruptcy</li>
      <li>Recent boundary or easement disputes</li>
    </ul>
    
    <h3>Proceeding with Lis Pendens Property</h3>
    <p>If you choose to purchase a property with lis pendens:</p>
    <ul>
      <li><strong>Deep Discount:</strong> Expect 30-60% below market value</li>
      <li><strong>Cash Purchase:</strong> Lenders typically won't finance</li>
      <li><strong>Legal Review:</strong> Hire real estate attorney to review lawsuit</li>
      <li><strong>Title Insurance:</strong> Won't be available until resolved</li>
      <li><strong>Exit Strategy:</strong> Plan for how to resolve or exit</li>
      <li><strong>Hold Period:</strong> Be prepared to hold 1-3+ years</li>
      <li><strong>Legal Costs:</strong> Budget for potential litigation expenses</li>
    </ul>
    
    <h3>State-Specific Rules</h3>
    <ul>
      <li><strong>Automatic Expiration:</strong> Some states auto-expire after 1-5 years</li>
      <li><strong>Bond Requirements:</strong> Required amount varies by state</li>
      <li><strong>Frivolous Filing Penalties:</strong> Damages for improper lis pendens</li>
      <li><strong>Notice Requirements:</strong> Service rules differ by jurisdiction</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "lisPendensType",
        label: "Type of Lis Pendens",
        type: "select",
        options: [
          "Foreclosure",
          "Divorce/Property Division",
          "Quiet Title Action",
          "Boundary Dispute",
          "Mechanic's Lien",
          "HOA Dispute",
          "Estate/Inheritance Dispute",
          "Fraud Claim",
          "Other"
        ],
        defaultValue: "Foreclosure",
      },
      {
        name: "propertyValue",
        label: "Property Market Value",
        type: "number",
        placeholder: "300000",
        defaultValue: "300000",
      },
      {
        name: "monthsSinceFiling",
        label: "Months Since Lis Pendens Filed",
        type: "number",
        placeholder: "6",
        defaultValue: "6",
      },
      {
        name: "claimAmount",
        label: "Lawsuit Claim Amount (if known)",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "buyerIntent",
        label: "Your Intent",
        type: "select",
        options: [
          "Buying the Property",
          "Selling the Property",
          "Current Owner Assessing",
          "Investor/Flipper"
        ],
        defaultValue: "Buying the Property",
      },
    ],
    results: [
      { label: "Risk Level", isCurrency: false },
      { label: "Estimated Value Impact", isCurrency: false },
      { label: "Suggested Discount", isCurrency: true },
      { label: "Estimated Timeline", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const lisPendensType = data.lisPendensType || "Foreclosure";
      const propertyValue = Number(data.propertyValue) || 0;
      const monthsSinceFiling = Number(data.monthsSinceFiling) || 0;
      const claimAmount = Number(data.claimAmount) || 0;
      const buyerIntent = data.buyerIntent || "Buying the Property";
      
      // Determine risk level and impact based on type
      let riskLevel = "";
      let valueImpact = 0;
      let estimatedMonths = 0;
      
      switch (lisPendensType) {
        case "Foreclosure":
          riskLevel = "🔴 HIGH RISK";
          valueImpact = 0.40; // 40% discount
          estimatedMonths = 6 + (Math.random() * 6); // 6-12 months
          break;
        case "Divorce/Property Division":
          riskLevel = "🟠 MODERATE-HIGH RISK";
          valueImpact = 0.30;
          estimatedMonths = 12 + (Math.random() * 12); // 12-24 months
          break;
        case "Quiet Title Action":
          riskLevel = "🔴 HIGH RISK";
          valueImpact = 0.50;
          estimatedMonths = 18 + (Math.random() * 18); // 18-36 months
          break;
        case "Boundary Dispute":
          riskLevel = "🟡 MODERATE RISK";
          valueImpact = 0.20;
          estimatedMonths = 6 + (Math.random() * 12); // 6-18 months
          break;
        case "Mechanic's Lien":
          riskLevel = "🟡 MODERATE RISK";
          valueImpact = 0.25;
          estimatedMonths = 3 + (Math.random() * 9); // 3-12 months
          break;
        case "HOA Dispute":
          riskLevel = "🟢 LOW-MODERATE RISK";
          valueImpact = 0.15;
          estimatedMonths = 3 + (Math.random() * 6); // 3-9 months
          break;
        case "Estate/Inheritance Dispute":
          riskLevel = "🟠 MODERATE-HIGH RISK";
          valueImpact = 0.35;
          estimatedMonths = 12 + (Math.random() * 24); // 12-36 months
          break;
        case "Fraud Claim":
          riskLevel = "🔴 EXTREME RISK";
          valueImpact = 0.60;
          estimatedMonths = 24 + (Math.random() * 24); // 24-48 months
          break;
        default:
          riskLevel = "🟡 MODERATE RISK";
          valueImpact = 0.25;
          estimatedMonths = 12;
      }
      
      // Adjust for time already elapsed
      const remainingMonths = Math.max(1, estimatedMonths - monthsSinceFiling);
      
      // Calculate suggested discount
      const suggestedDiscount = propertyValue * valueImpact;
      const discountedValue = propertyValue - suggestedDiscount;
      
      // Calculate value impact percentage
      const impactPercent = (valueImpact * 100).toFixed(0);
      const valueImpactText = `${impactPercent}% reduction (${discountedValue.toLocaleString('en-US', {style:'currency', currency:'USD'})})`;
      
      // Timeline
      const timelineText = `${Math.ceil(remainingMonths)} months remaining (Est. total: ${Math.ceil(estimatedMonths)} months)`;
      
      // Recommendation based on intent
      let recommendation = "";
      
      if (buyerIntent === "Buying the Property") {
        if (valueImpact >= 0.50) {
          recommendation = "EXTREME CAUTION: This is a very risky purchase. Only proceed if you're an experienced investor with cash, legal team, and 2-3 year hold timeline. Negotiate 60%+ discount.";
        } else if (valueImpact >= 0.35) {
          recommendation = "HIGH RISK: Only for cash buyers with legal expertise. Budget $10K-$30K for legal fees. Negotiate 35-50% discount. No traditional financing available.";
        } else if (valueImpact >= 0.20) {
          recommendation = "MODERATE RISK: Consider if you have cash and patience. Hire real estate attorney to review lawsuit. Negotiate 20-35% discount. Plan for 1-2 year hold.";
        } else {
          recommendation = "MANAGEABLE RISK: May be viable with attorney review. Negotiate 15-25% discount. Ensure you understand the dispute before proceeding.";
        }
      } else if (buyerIntent === "Selling the Property") {
        recommendation = "URGENT: Resolve lis pendens ASAP. Options: (1) Settle lawsuit, (2) Motion to expunge if frivolous, (3) Post bond if allowed. Property is unsellable with lis pendens. Expect " + impactPercent + "% value loss if selling as-is.";
      } else if (buyerIntent === "Current Owner Assessing") {
        recommendation = "ACTION REQUIRED: Consult real estate attorney immediately. Options: (1) File motion to expunge, (2) Post bond to release, (3) Settle the lawsuit, (4) Fight and win the case. Do not ignore - this won't go away.";
      } else {
        recommendation = "INVESTOR OPPORTUNITY: Deeply discounted property but high complexity. Requires: all-cash purchase, legal team, 12-36 month timeline, risk tolerance. Potential profit if you can resolve lawsuit.";
      }

      return [
        { label: "Risk Level", value: riskLevel, isCurrency: false },
        { label: "Estimated Value Impact", value: valueImpactText, isCurrency: false },
        { label: "Suggested Discount", value: suggestedDiscount.toFixed(2), isCurrency: true },
        { label: "Estimated Timeline", value: timelineText, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
