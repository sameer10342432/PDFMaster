import { CalculatorContent } from '@/types';

export const SEASONING_REQUIREMENT_CHECKER_CONTENT: CalculatorContent = {
  title: 'Seasoning Requirement (Flipping) Checker',
  description: 'Check seasoning requirements for property flips and rapid resales to avoid lending issues',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'seasoning-requirement-checker',
  article: {
    title: "Understanding Property Seasoning Requirements for Flips",
    content: `
    <h2>What are Seasoning Requirements?</h2>
    <p>Seasoning requirements are minimum time periods that must pass between when you purchase a property and when you can resell it with traditional financing. They're designed to prevent mortgage fraud and artificially inflated property flips.</p>
    
    <h3>Why Seasoning Requirements Exist</h3>
    <ul>
      <li><strong>Fraud Prevention:</strong> Stop illegal flipping schemes with inflated appraisals</li>
      <li><strong>Market Stability:</strong> Prevent artificial price inflation</li>
      <li><strong>Lender Protection:</strong> Reduce risk of overpaying for properties</li>
      <li><strong>Buyer Protection:</strong> Ensure legitimate property values</li>
      <li><strong>Historical Response:</strong> Created after 2008 housing crisis flip fraud</li>
    </ul>
    
    <h3>FHA Seasoning Requirements (Most Restrictive)</h3>
    <p><strong>90-Day Flip Rule:</strong></p>
    <ul>
      <li><strong>Property Held:</strong> Less than 90 days</li>
      <li><strong>Rule:</strong> FHA financing NOT allowed</li>
      <li><strong>Exception:</strong> Inherited properties, employer relocations, government sales</li>
      <li><strong>Impact:</strong> Flip must be all-cash or alternative financing</li>
    </ul>
    
    <p><strong>91-180 Day Rule:</strong></p>
    <ul>
      <li><strong>Property Held:</strong> 91-180 days</li>
      <li><strong>Price Increase:</strong> 20%+ over purchase price</li>
      <li><strong>Requirement:</strong> Second appraisal required</li>
      <li><strong>Lender Option:</strong> May decline if suspicious</li>
    </ul>
    
    <p><strong>181+ Days:</strong></p>
    <ul>
      <li><strong>Status:</strong> Fully seasoned for FHA</li>
      <li><strong>Restrictions:</strong> None (standard FHA rules apply)</li>
    </ul>
    
    <h3>Conventional Loan Seasoning</h3>
    <p><strong>Fannie Mae/Freddie Mac:</strong></p>
    <ul>
      <li><strong>No Formal Requirement:</strong> No set seasoning period</li>
      <li><strong>Lender Discretion:</strong> Individual lenders may impose overlays</li>
      <li><strong>Common Overlay:</strong> Many require 90 days</li>
      <li><strong>Price Scrutiny:</strong> Large increases (50%+) trigger additional review</li>
      <li><strong>Second Appraisal:</strong> May be required for rapid increases</li>
    </ul>
    
    <h3>VA Loan Seasoning</h3>
    <ul>
      <li><strong>Official Rule:</strong> No seasoning requirement</li>
      <li><strong>Reality:</strong> Many lenders impose 90-day minimum</li>
      <li><strong>Fraud Prevention:</strong> VA scrutinizes rapid flips</li>
      <li><strong>Price Increases:</strong> 20%+ trigger second appraisal</li>
    </ul>
    
    <h3>Cash and Alternative Financing</h3>
    <ul>
      <li><strong>All-Cash Buyers:</strong> No seasoning requirements</li>
      <li><strong>Hard Money Loans:</strong> No seasoning requirements</li>
      <li><strong>Portfolio Lenders:</strong> Set own rules (often waive seasoning)</li>
      <li><strong>Private Money:</strong> No restrictions</li>
      <li><strong>Owner Financing:</strong> No restrictions</li>
    </ul>
    
    <h3>Strategies for Short Seasoning Periods</h3>
    <p><strong>Option 1: Target Cash Buyers</strong></p>
    <ul>
      <li>Market to investors and flippers</li>
      <li>Accept lower price for quick sale</li>
      <li>No financing restrictions</li>
      <li>Smaller buyer pool</li>
    </ul>
    
    <p><strong>Option 2: Owner Financing</strong></p>
    <ul>
      <li>You carry the note</li>
      <li>Buyer pays you directly</li>
      <li>No seasoning issues</li>
      <li>Requires you to hold paper</li>
    </ul>
    
    <p><strong>Option 3: Hard Money Bridge</strong></p>
    <ul>
      <li>Buyer gets hard money loan</li>
      <li>Refinances to conventional after seasoning</li>
      <li>Higher buyer costs</li>
      <li>Two closings required</li>
    </ul>
    
    <p><strong>Option 4: Wait for Seasoning</strong></p>
    <ul>
      <li>Hold property 90-180 days</li>
      <li>Maximize buyer pool</li>
      <li>Higher holding costs</li>
      <li>Safest approach</li>
    </ul>
    
    <p><strong>Option 5: Rent-to-Own</strong></p>
    <ul>
      <li>Lease with option to purchase</li>
      <li>Buyer rents while seasoning expires</li>
      <li>Exercise option after 90-180 days</li>
      <li>Complex legal structure</li>
    </ul>
    
    <h3>How Seasoning is Calculated</h3>
    <ul>
      <li><strong>Start Date:</strong> Date you take title (closing date)</li>
      <li><strong>End Date:</strong> Date buyer's purchase contract is signed</li>
      <li><strong>Not Construction Time:</strong> Rehab time doesn't count - only ownership</li>
      <li><strong>Calendar Days:</strong> Not business days</li>
      <li><strong>Example:</strong> Bought Jan 1, sign contract April 2 = 91 days (clears 90-day rule)</li>
    </ul>
    
    <h3>Exceptions to Seasoning Requirements</h3>
    <ul>
      <li><strong>Inherited Properties:</strong> FHA allows immediate resale</li>
      <li><strong>Employer Relocations:</strong> Corporate transfers exempt</li>
      <li><strong>Government Sales:</strong> HUD homes, foreclosures, tax sales</li>
      <li><strong>Court-Ordered Sales:</strong> Divorce, bankruptcy, estate</li>
      <li><strong>Builder New Construction:</strong> Spec homes exempt</li>
      <li><strong>Non-Profit Sales:</strong> Habitat for Humanity, etc.</li>
    </ul>
    
    <h3>Red Flags That Trigger Extra Scrutiny</h3>
    <ul>
      <li><strong>Large Price Increase:</strong> 50%+ over purchase in under 6 months</li>
      <li><strong>Multiple Flips:</strong> Property sold 3+ times in 12 months</li>
      <li><strong>Same Parties:</strong> Seller/buyer/agent relationships</li>
      <li><strong>Inflated Appraisals:</strong> Much higher than comps</li>
      <li><strong>Cosmetic-Only Rehab:</strong> Minor work, major price jump</li>
      <li><strong>Straw Buyers:</strong> Suspicious ownership chains</li>
      <li><strong>Quick Succession:</strong> Multiple flips by same flipper</li>
    </ul>
    
    <h3>Documentation to Overcome Seasoning Issues</h3>
    <ul>
      <li><strong>Detailed Rehab Records:</strong> Before/after photos, receipts, permits</li>
      <li><strong>Contractor Invoices:</strong> Paid receipts for all work</li>
      <li><strong>Comparable Sales:</strong> Support new value with recent comps</li>
      <li><strong>Building Permits:</strong> Evidence of legitimate improvements</li>
      <li><strong>Cost Breakdown:</strong> Purchase + rehab + holding = reasonable profit</li>
      <li><strong>Professional Appraisal:</strong> Independent valuation</li>
    </ul>
    
    <h3>Impact on Flip Profitability</h3>
    <p><strong>Holding Costs During Seasoning (Per Month):</strong></p>
    <ul>
      <li>Mortgage/Hard Money Interest: $1,000-$3,000</li>
      <li>Property Taxes: $200-$500</li>
      <li>Insurance: $100-$200</li>
      <li>Utilities: $150-$300</li>
      <li>HOA Fees: $0-$500</li>
      <li><strong>Total:</strong> $1,500-$4,500/month</li>
    </ul>
    
    <p><strong>90-Day Wait Cost:</strong> $4,500-$13,500 in holding costs</p>
    <p><strong>180-Day Wait Cost:</strong> $9,000-$27,000 in holding costs</p>
    
    <h3>Lender Overlay Policies</h3>
    <ul>
      <li><strong>Conservative Lenders:</strong> May require 180 days even for conventional</li>
      <li><strong>Portfolio Lenders:</strong> Often waive seasoning entirely</li>
      <li><strong>Credit Unions:</strong> Typically follow FHA rules even on conventional</li>
      <li><strong>National Banks:</strong> Usually stick to minimum (90 days)</li>
      <li><strong>Online Lenders:</strong> More flexible, case-by-case</li>
    </ul>
    
    <h3>Best Practices for Flippers</h3>
    <ul>
      <li><strong>Plan for 90 Days:</strong> Build into budget and timeline</li>
      <li><strong>Document Everything:</strong> Photos, receipts, permits</li>
      <li><strong>Justify Value:</strong> Major improvements, not just paint/carpet</li>
      <li><strong>Use Licensed Contractors:</strong> Legitimate invoices and permits</li>
      <li><strong>Reasonable Margins:</strong> 20-30% profit is defensible, 100%+ raises flags</li>
      <li><strong>Build Relationships:</strong> Work with experienced flip-friendly agents</li>
      <li><strong>Disclose Flip:</strong> Don't try to hide recent purchase</li>
      <li><strong>Price Appropriately:</strong> Don't overprice and get stuck</li>
    </ul>
    
    <h3>State-Specific Considerations</h3>
    <ul>
      <li><strong>Most States:</strong> Follow federal guidelines</li>
      <li><strong>Some States:</strong> Additional anti-flipping disclosure laws</li>
      <li><strong>Local Ordinances:</strong> Some cities have flip restrictions</li>
      <li><strong>Transfer Taxes:</strong> May increase with rapid resale</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "purchaseDate",
        label: "Purchase Date",
        type: "text",
        placeholder: "YYYY-MM-DD",
        defaultValue: "2024-01-01",
      },
      {
        name: "intendedListDate",
        label: "Intended List/Contract Date",
        type: "text",
        placeholder: "YYYY-MM-DD",
        defaultValue: "2024-03-15",
      },
      {
        name: "purchasePrice",
        label: "Purchase Price",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "intendedSalePrice",
        label: "Intended Sale Price",
        type: "number",
        placeholder: "280000",
        defaultValue: "280000",
      },
      {
        name: "rehabCost",
        label: "Rehab/Improvement Costs",
        type: "number",
        placeholder: "40000",
        defaultValue: "40000",
      },
      {
        name: "buyerFinancing",
        label: "Expected Buyer Financing",
        type: "select",
        options: [
          "FHA Loan",
          "Conventional Loan",
          "VA Loan",
          "Cash Buyer",
          "Hard Money/Private",
          "Unknown/Mixed"
        ],
        defaultValue: "FHA Loan",
      },
    ],
    results: [
      { label: "Days of Ownership", isCurrency: false },
      { label: "Seasoning Status", isCurrency: false },
      { label: "Price Increase", isCurrency: false },
      { label: "Financing Risk", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const purchaseDate = data.purchaseDate || "2024-01-01";
      const intendedListDate = data.intendedListDate || "2024-03-15";
      const purchasePrice = Number(data.purchasePrice) || 0;
      const intendedSalePrice = Number(data.intendedSalePrice) || 0;
      const rehabCost = Number(data.rehabCost) || 0;
      const buyerFinancing = data.buyerFinancing || "FHA Loan";
      
      // Calculate days between dates
      const purchase = new Date(purchaseDate);
      const list = new Date(intendedListDate);
      const daysDiff = Math.floor((list.getTime() - purchase.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate price increase
      const priceIncrease = intendedSalePrice - purchasePrice;
      const percentIncrease = purchasePrice > 0 ? (priceIncrease / purchasePrice) * 100 : 0;
      
      // Determine seasoning status
      let seasoningStatus = "";
      let statusColor = "";
      
      if (daysDiff < 90) {
        seasoningStatus = "🔴 NOT SEASONED - Under 90 Days";
        statusColor = "red";
      } else if (daysDiff < 180) {
        seasoningStatus = "🟡 PARTIALLY SEASONED - 90-180 Days";
        statusColor = "yellow";
      } else {
        seasoningStatus = "✅ FULLY SEASONED - Over 180 Days";
        statusColor = "green";
      }
      
      // Price increase text
      const priceIncreaseText = `${percentIncrease.toFixed(1)}% increase ($${priceIncrease.toLocaleString()})`;
      
      // Determine financing risk
      let financingRisk = "";
      let riskLevel = 0;
      
      if (buyerFinancing === "Cash Buyer" || buyerFinancing === "Hard Money/Private") {
        financingRisk = "✅ NO RISK - Cash/Alternative Financing";
      } else {
        // FHA risk
        if (buyerFinancing === "FHA Loan") {
          if (daysDiff < 90) {
            financingRisk = "🔴 BLOCKED - FHA Not Allowed Under 90 Days";
            riskLevel = 4;
          } else if (daysDiff < 180 && percentIncrease >= 20) {
            financingRisk = "🟠 HIGH RISK - Second Appraisal Required";
            riskLevel = 3;
          } else {
            financingRisk = "✅ LOW RISK - FHA Seasoned";
            riskLevel = 1;
          }
        }
        // VA risk
        else if (buyerFinancing === "VA Loan") {
          if (daysDiff < 90) {
            financingRisk = "🟠 MODERATE RISK - Many VA Lenders Require 90 Days";
            riskLevel = 3;
          } else if (percentIncrease >= 20) {
            financingRisk = "🟡 SOME RISK - May Require Second Appraisal";
            riskLevel = 2;
          } else {
            financingRisk = "✅ LOW RISK - Likely Acceptable";
            riskLevel = 1;
          }
        }
        // Conventional risk
        else if (buyerFinancing === "Conventional Loan") {
          if (daysDiff < 90) {
            financingRisk = "🟡 MODERATE RISK - Lender Overlays May Apply";
            riskLevel = 2;
          } else if (percentIncrease >= 50) {
            financingRisk = "🟡 SOME RISK - Large Increase May Trigger Review";
            riskLevel = 2;
          } else {
            financingRisk = "✅ LOW RISK - Generally Acceptable";
            riskLevel = 1;
          }
        }
        // Mixed
        else {
          if (daysDiff < 90) {
            financingRisk = "🔴 HIGH RISK - Most Lenders Require 90+ Days";
            riskLevel = 3;
          } else if (daysDiff < 180 && percentIncrease >= 20) {
            financingRisk = "🟡 MODERATE RISK - Some Lenders May Hesitate";
            riskLevel = 2;
          } else {
            financingRisk = "✅ LOW RISK - Most Lenders Will Accept";
            riskLevel = 1;
          }
        }
      }
      
      // Days of ownership text
      const daysText = `${daysDiff} days (${(daysDiff / 30).toFixed(1)} months)`;
      
      // Calculate recommendation
      let recommendation = "";
      const daysNeeded = Math.max(0, 90 - daysDiff);
      const monthlyHoldingCost = 2500; // Average estimate
      const additionalCost = daysNeeded * (monthlyHoldingCost / 30);
      
      if (buyerFinancing === "Cash Buyer" || buyerFinancing === "Hard Money/Private") {
        recommendation = "✅ PROCEED: No seasoning restrictions for cash/alternative buyers. You can list and sell immediately. Still document your rehab work to justify the " + percentIncrease.toFixed(1) + "% price increase.";
      } else if (riskLevel >= 4) {
        recommendation = "🛑 WAIT: You need " + daysNeeded + " more days for FHA eligibility. Options: (1) Wait " + daysNeeded + " days (cost ~$" + additionalCost.toFixed(0) + "), (2) Target cash buyers only, (3) Offer owner financing, (4) Use rent-to-own structure. Holding 90 days opens up full buyer pool.";
      } else if (riskLevel >= 3) {
        recommendation = "⚠️ DECISION POINT: You're at " + daysDiff + " days. Options: (1) Wait " + daysNeeded + " more days to reach 90-day mark and maximize buyer pool, (2) List now but market primarily to cash buyers and conventional loans, (3) Be prepared for second appraisal requirements. Waiting costs ~$" + additionalCost.toFixed(0) + " but expands buyers significantly.";
      } else if (riskLevel >= 2) {
        recommendation = "✅ PROCEED WITH CAUTION: You're past major restrictions but the " + percentIncrease.toFixed(1) + "% price increase may trigger lender scrutiny. Prepare documentation: before/after photos, all receipts ($" + rehabCost.toLocaleString() + " rehab documented), permits, contractor invoices. This justifies your increase and speeds approval.";
      } else {
        recommendation = "✅ PROCEED CONFIDENTLY: Fully seasoned property with justifiable " + percentIncrease.toFixed(1) + "% increase. Your rehab investment of $" + rehabCost.toLocaleString() + " supports the value. All financing types should work. Still maintain good documentation for appraisers.";
      }

      return [
        { label: "Days of Ownership", value: daysText, isCurrency: false },
        { label: "Seasoning Status", value: seasoningStatus, isCurrency: false },
        { label: "Price Increase", value: priceIncreaseText, isCurrency: false },
        { label: "Financing Risk", value: financingRisk, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
