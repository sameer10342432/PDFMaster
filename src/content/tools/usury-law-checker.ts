import { CalculatorContent } from '@/types';

export const USURY_LAW_CHECKER_CONTENT: CalculatorContent = {
  title: 'Usury Law (Loan Shark) Checker by State',
  description: 'Check if an interest rate violates usury laws and maximum legal rates by state',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'usury-law-checker',
  article: {
    title: "Understanding Usury Laws and Maximum Interest Rates",
    content: `
    <h2>What are Usury Laws?</h2>
    <p>Usury laws are state regulations that cap the maximum interest rate that can be charged on loans. They're designed to protect borrowers from predatory lending practices and "loan shark" behavior.</p>
    
    <h3>Purpose of Usury Laws</h3>
    <ul>
      <li><strong>Consumer Protection:</strong> Prevent excessive interest charges</li>
      <li><strong>Fair Lending:</strong> Ensure reasonable borrowing costs</li>
      <li><strong>Market Stability:</strong> Prevent predatory lending collapse</li>
      <li><strong>Economic Fairness:</strong> Protect vulnerable borrowers</li>
      <li><strong>Prevent Loan Sharks:</strong> Criminalize excessive rates</li>
    </ul>
    
    <h3>Common Usury Rate Limits by State</h3>
    <p><strong>Most Restrictive States:</strong></p>
    <ul>
      <li><strong>Colorado:</strong> 12% (civil), 45% (criminal)</li>
      <li><strong>Nebraska:</strong> 16%</li>
      <li><strong>Arkansas:</strong> 17%</li>
      <li><strong>New York:</strong> 16% (civil), 25% (criminal)</li>
      <li><strong>Pennsylvania:</strong> 6% (written contracts)</li>
    </ul>
    
    <p><strong>Moderate Restriction States:</strong></p>
    <ul>
      <li><strong>California:</strong> 10% (individuals), higher for licensed lenders</li>
      <li><strong>Texas:</strong> 18% (non-contracted), 28% (contracted)</li>
      <li><strong>Florida:</strong> 18% (under $500k), 25% (over $500k)</li>
      <li><strong>Georgia:</strong> 7% simple, 16% combined</li>
    </ul>
    
    <p><strong>Lenient or No Cap States:</strong></p>
    <ul>
      <li><strong>Utah:</strong> No limit</li>
      <li><strong>South Dakota:</strong> No limit</li>
      <li><strong>Nevada:</strong> No limit</li>
      <li><strong>New Hampshire:</strong> No limit above $10,000</li>
    </ul>
    
    <h3>Exemptions from Usury Laws</h3>
    <p>These loans often have exemptions:</p>
    <ul>
      <li><strong>First Lien Mortgages:</strong> Usually exempt (Federal preemption)</li>
      <li><strong>Business Loans:</strong> Often exempt or have higher limits</li>
      <li><strong>Licensed Lenders:</strong> Banks, credit unions, finance companies</li>
      <li><strong>Credit Cards:</strong> Exempt under federal law (1978 Supreme Court)</li>
      <li><strong>Pawn Shop Loans:</strong> Special state regulations</li>
      <li><strong>Title Loans:</strong> May have separate caps (often 25-36% monthly!)</li>
      <li><strong>Payday Loans:</strong> Special rules, often 300-400% APR allowed</li>
      <li><strong>Real Estate Broker Loans:</strong> May be exempt in some states</li>
    </ul>
    
    <h3>Types of Usury Violations</h3>
    <ul>
      <li><strong>Civil Usury:</strong> Rate exceeds legal maximum - contract voidable</li>
      <li><strong>Criminal Usury:</strong> Extremely high rates - criminal charges possible</li>
      <li><strong>Corporate Usury:</strong> Different rules for business entities</li>
    </ul>
    
    <h3>Consequences of Usurious Loans</h3>
    <p><strong>For Lenders:</strong></p>
    <ul>
      <li><strong>Contract Void:</strong> Loan agreement unenforceable</li>
      <li><strong>Forfeit Interest:</strong> Lose all interest (in some states)</li>
      <li><strong>Return Interest Paid:</strong> Must refund excess interest</li>
      <li><strong>Penalties:</strong> 2-3x the interest charged</li>
      <li><strong>Attorney Fees:</strong> Pay borrower's legal costs</li>
      <li><strong>Criminal Charges:</strong> For egregious violations</li>
      <li><strong>License Revocation:</strong> Lose lending license</li>
    </ul>
    
    <p><strong>For Borrowers:</strong></p>
    <ul>
      <li><strong>Legal Defense:</strong> Can refuse to pay usurious interest</li>
      <li><strong>Refund Claims:</strong> Sue to recover excess interest paid</li>
      <li><strong>Principal Only:</strong> May only owe principal amount</li>
      <li><strong>Damages:</strong> May receive statutory damages</li>
    </ul>
    
    <h3>How to Calculate Effective Interest Rate</h3>
    <p>Lenders sometimes disguise high rates with fees:</p>
    <ul>
      <li><strong>Add All Costs:</strong> Points, fees, charges, interest</li>
      <li><strong>Include Hidden Fees:</strong> Processing, document, origination</li>
      <li><strong>Calculate True APR:</strong> Total cost ÷ loan amount ÷ years</li>
      <li><strong>Watch for:</strong> "Interest-only" teaser rates that reset high</li>
    </ul>
    
    <p><strong>Example:</strong></p>
    <ul>
      <li>Loan Amount: $10,000</li>
      <li>Stated Interest: 20% ($2,000/year)</li>
      <li>Origination Fee: $1,000 (10%)</li>
      <li>Processing Fee: $500</li>
      <li>True Rate: $3,500 ÷ $10,000 = 35% (may violate usury law!)</li>
    </ul>
    
    <h3>Common Usury Law Violations</h3>
    <ul>
      <li><strong>Hard Money Loans:</strong> 12-18% + 5-10 points = Often 20-30% APR</li>
      <li><strong>Private Lending:</strong> Unlicensed individuals charging high rates</li>
      <li><strong>Seller Financing:</strong> Owner carries note at excessive rate</li>
      <li><strong>Payday Loans:</strong> $15-$20 per $100 = 300-500% APR annualized</li>
      <li><strong>Title Loans:</strong> 25% monthly = 300% APR</li>
      <li><strong>Rent-to-Own:</strong> Effective rates often 50-100%</li>
    </ul>
    
    <h3>Special Rules for Different Loan Types</h3>
    <p><strong>Real Estate Loans:</strong></p>
    <ul>
      <li>First mortgages usually exempt</li>
      <li>Junior liens may have usury caps</li>
      <li>Bridge loans often exempt</li>
      <li>Varies significantly by state</li>
    </ul>
    
    <p><strong>Business Loans:</strong></p>
    <ul>
      <li>Higher caps or no caps</li>
      <li>Different rules if business entity borrower</li>
      <li>Personal guarantees may trigger personal usury caps</li>
    </ul>
    
    <p><strong>Personal Loans:</strong></p>
    <ul>
      <li>Strictest usury protections</li>
      <li>Lower rate caps</li>
      <li>Consumer protection laws apply</li>
    </ul>
    
    <h3>Federal Preemption</h3>
    <p>Federal laws override state usury laws for:</p>
    <ul>
      <li><strong>National Banks:</strong> Can "export" home state rates</li>
      <li><strong>Federal Credit Unions:</strong> 15% cap or state cap + 3%, whichever higher</li>
      <li><strong>FHA/VA Loans:</strong> No usury limits</li>
      <li><strong>Interstate Commerce:</strong> Depository Institutions Deregulation Act</li>
    </ul>
    
    <h3>What to Do If Charged Usurious Rate</h3>
    <ol>
      <li><strong>Document Everything:</strong> Loan agreement, payment history, communications</li>
      <li><strong>Calculate True APR:</strong> Include all fees and charges</li>
      <li><strong>Research State Law:</strong> Check your state's usury caps</li>
      <li><strong>Consult Attorney:</strong> Consumer protection or banking law specialist</li>
      <li><strong>Stop Payments:</strong> May have legal right to stop paying interest</li>
      <li><strong>File Complaint:</strong> State attorney general, consumer protection bureau</li>
      <li><strong>Sue for Damages:</strong> Recover excess interest + penalties</li>
      <li><strong>Report to Authorities:</strong> If criminal usury suspected</li>
    </ol>
    
    <h3>Defenses Against Usury Claims</h3>
    <p>Lenders may argue:</p>
    <ul>
      <li>Loan is exempt (business, real estate, licensed lender)</li>
      <li>Rate is legal in state where lender is based</li>
      <li>Federal preemption applies</li>
      <li>Borrower is sophisticated party who waived protection</li>
      <li>Contract has choice of law provision</li>
    </ul>
    
    <h3>How to Protect Yourself</h3>
    <ul>
      <li><strong>Know Your State's Laws:</strong> Research before signing</li>
      <li><strong>Calculate True Cost:</strong> APR including all fees</li>
      <li><strong>Get Legal Review:</strong> Attorney review for large loans</li>
      <li><strong>Compare Rates:</strong> Shop multiple lenders</li>
      <li><strong>Read Fine Print:</strong> Understand all terms</li>
      <li><strong>Watch for Red Flags:</strong> Pressure tactics, hidden fees</li>
      <li><strong>Licensed Lenders Only:</strong> Verify state licensing</li>
      <li><strong>Document Issues:</strong> Keep records if rate seems excessive</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          "Alabama (8%)",
          "Alaska (10.5%)",
          "Arizona (10%)",
          "Arkansas (17%)",
          "California (10% or 7%+5)",
          "Colorado (12% civil, 45% criminal)",
          "Connecticut (12%)",
          "Delaware (No limit over $100k)",
          "Florida (18% under $500k, 25% over)",
          "Georgia (7% simple, 16% combined)",
          "Hawaii (12%)",
          "Idaho (No statutory limit)",
          "Illinois (9%)",
          "Indiana (6-21% depending on amount)",
          "Iowa (12%)",
          "Kansas (15%)",
          "Kentucky (8%)",
          "Louisiana (12%)",
          "Maine (No limit)",
          "Maryland (6-24% depending on amount)",
          "Massachusetts (20%)",
          "Michigan (7%)",
          "Minnesota (8%)",
          "Mississippi (10%)",
          "Missouri (9%)",
          "Montana (15%)",
          "Nebraska (16%)",
          "Nevada (No limit)",
          "New Hampshire (10%)",
          "New Jersey (30% over $50k)",
          "New Mexico (15%)",
          "New York (16% civil, 25% criminal)",
          "North Carolina (8%)",
          "North Dakota (5.5%)",
          "Ohio (8%)",
          "Oklahoma (10%)",
          "Oregon (9%)",
          "Pennsylvania (6%)",
          "Rhode Island (21%)",
          "South Carolina (8.75%)",
          "South Dakota (No limit)",
          "Tennessee (10%)",
          "Texas (18% or 28% if contracted)",
          "Utah (No limit)",
          "Vermont (12%)",
          "Virginia (12%)",
          "Washington (12%)",
          "West Virginia (8%)",
          "Wisconsin (12%)",
          "Wyoming (7%)"
        ],
        defaultValue: "California (10% or 7%+5)",
      },
      {
        name: "interestRate",
        label: "Proposed Interest Rate (%)",
        type: "number",
        placeholder: "15",
        defaultValue: "15",
      },
      {
        name: "loanAmount",
        label: "Loan Amount",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "fees",
        label: "Total Fees (points, origination, etc.)",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "loanType",
        label: "Loan Type",
        type: "select",
        options: [
          "Personal Loan",
          "First Mortgage (Real Estate)",
          "Second Mortgage/HELOC",
          "Business Loan",
          "Hard Money Loan",
          "Private Party Loan"
        ],
        defaultValue: "Personal Loan",
      },
      {
        name: "lenderType",
        label: "Lender Type",
        type: "select",
        options: [
          "Individual/Private Party",
          "Licensed Finance Company",
          "Bank/Credit Union",
          "Hard Money Lender",
          "Payday Lender"
        ],
        defaultValue: "Individual/Private Party",
      },
    ],
    results: [
      { label: "State Legal Maximum", isCurrency: false },
      { label: "True APR (with fees)", isCurrency: false },
      { label: "Usury Violation?", isCurrency: false },
      { label: "Potential Penalties", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const state = data.state || "California (10% or 7%+5)";
      const interestRate = Number(data.interestRate) || 0;
      const loanAmount = Number(data.loanAmount) || 0;
      const fees = Number(data.fees) || 0;
      const loanType = data.loanType || "Personal Loan";
      const lenderType = data.lenderType || "Individual/Private Party";
      
      // Extract max rate from state text
      const match = state.match(/(\d+(?:\.\d+)?)\s*%/);
      const stateMaxRate = match ? parseFloat(match[1]) : 10;
      
      // Calculate true APR
      const trueInterestCost = (loanAmount * (interestRate / 100)) + fees;
      const trueAPR = loanAmount > 0 ? (trueInterestCost / loanAmount) * 100 : 0;
      
      // Determine if exempt
      let isExempt = false;
      let exemptReason = "";
      
      if (loanType === "First Mortgage (Real Estate)") {
        isExempt = true;
        exemptReason = "First mortgages are typically exempt from usury laws";
      } else if (lenderType === "Bank/Credit Union") {
        isExempt = true;
        exemptReason = "Federally-regulated banks often have federal preemption";
      } else if (loanType === "Business Loan") {
        isExempt = true;
        exemptReason = "Business loans often have higher caps or exemptions";
      }
      
      // Determine if usurious
      let isUsurious = false;
      let violationSeverity = "";
      
      if (!isExempt) {
        if (trueAPR > stateMaxRate * 2.5) {
          isUsurious = true;
          violationSeverity = "🔴 SEVERE VIOLATION - Potentially Criminal Usury";
        } else if (trueAPR > stateMaxRate * 1.5) {
          isUsurious = true;
          violationSeverity = "🟠 MAJOR VIOLATION - Civil Usury";
        } else if (trueAPR > stateMaxRate) {
          isUsurious = true;
          violationSeverity = "🟡 VIOLATION - Exceeds State Cap";
        } else {
          violationSeverity = "✅ LEGAL - Within State Limits";
        }
      } else {
        violationSeverity = "ℹ️ EXEMPT - Usury Laws May Not Apply";
      }
      
      // Legal maximum text
      let legalMaxText = `${stateMaxRate}% (State Cap)`;
      if (isExempt) {
        legalMaxText += ` - EXEMPT: ${exemptReason}`;
      }
      
      // True APR text
      const trueAPRText = `${trueAPR.toFixed(2)}% (Rate: ${interestRate}% + Fees: ${((fees / loanAmount) * 100).toFixed(2)}%)`;
      
      // Potential penalties
      let penalties = "";
      if (isUsurious) {
        const excessInterest = trueInterestCost - (loanAmount * (stateMaxRate / 100));
        const statutoryDamages = excessInterest * 2; // Many states allow 2x damages
        
        penalties = `Lender may forfeit $${trueInterestCost.toFixed(2)} in interest, pay $${excessInterest.toFixed(2)} refund, plus $${statutoryDamages.toFixed(2)} statutory damages`;
      } else if (isExempt) {
        penalties = "N/A - Exempt from usury laws";
      } else {
        penalties = "None - Rate is legal";
      }
      
      // Recommendation
      let recommendation = "";
      
      if (isUsurious) {
        if (violationSeverity.includes("SEVERE")) {
          recommendation = "🚨 DANGER: This rate is potentially criminal usury. DO NOT ACCEPT THIS LOAN. The lender could face criminal charges and you may not owe any interest. Consult attorney if you already signed - you may be able to void the contract and recover all interest paid plus damages.";
        } else {
          recommendation = "⚠️ WARNING: This rate violates your state's usury laws. The loan contract may be void or voidable. You could refuse to pay interest and sue for return of excess payments plus penalties. Consult a consumer protection attorney before proceeding.";
        }
      } else if (isExempt) {
        if (trueAPR > 20) {
          recommendation = "ℹ️ HIGH RATE: While this loan type may be exempt from usury laws, " + trueAPR.toFixed(1) + "% is very high. Shop around for better rates. For real estate: hard money rates are typically 10-15%. For business: SBA loans are 6-13%. Only accept if you have no alternatives.";
        } else {
          recommendation = "✅ REASONABLE: This loan type is exempt from usury laws, and the " + trueAPR.toFixed(1) + "% rate is within normal market range for this product. Still shop around for better rates.";
        }
      } else {
        recommendation = "✅ LEGAL: This " + trueAPR.toFixed(1) + "% rate is within your state's legal limits of " + stateMaxRate + "%. While legal, still compare with other lenders to ensure you're getting competitive terms.";
      }

      return [
        { label: "State Legal Maximum", value: legalMaxText, isCurrency: false },
        { label: "True APR (with fees)", value: trueAPRText, isCurrency: false },
        { label: "Usury Violation?", value: violationSeverity, isCurrency: false },
        { label: "Potential Penalties", value: penalties, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
