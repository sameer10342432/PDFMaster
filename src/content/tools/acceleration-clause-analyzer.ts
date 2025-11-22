import { CalculatorContent } from '@/types';

export const ACCELERATION_CLAUSE_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Acceleration Clause Analyzer',
  description: 'Understand acceleration clauses in mortgages and how they affect default scenarios',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'acceleration-clause-analyzer',
  article: {
    title: "Understanding Acceleration Clauses in Mortgages",
    content: `
    <h2>What is an Acceleration Clause?</h2>
    <p>An acceleration clause is a mortgage provision that allows the lender to demand immediate payment of the entire remaining loan balance if certain conditions occur, typically when the borrower defaults on payments.</p>
    
    <h3>How Acceleration Clauses Work</h3>
    <p>Normal situation:</p>
    <ul>
      <li>You make monthly payments over 15-30 years</li>
      <li>Loan is gradually paid down</li>
      <li>Property eventually owned free and clear</li>
    </ul>
    
    <p>After acceleration:</p>
    <ul>
      <li>Entire loan balance becomes immediately due</li>
      <li>No more monthly payments accepted</li>
      <li>Must pay full amount or face foreclosure</li>
      <li>Typically triggered by default or covenant breach</li>
    </ul>
    
    <h3>Common Triggers for Acceleration</h3>
    <ul>
      <li><strong>Payment Default:</strong> Missing 1-3 monthly payments (most common)</li>
      <li><strong>Property Tax Default:</strong> Failing to pay property taxes</li>
      <li><strong>Insurance Lapse:</strong> Letting homeowner's insurance expire</li>
      <li><strong>Property Damage:</strong> Not maintaining or repairing property</li>
      <li><strong>Unauthorized Transfer:</strong> Transferring title without consent (due-on-sale)</li>
      <li><strong>Bankruptcy Filing:</strong> Filing for bankruptcy protection</li>
      <li><strong>Second Mortgage:</strong> Taking unauthorized junior lien (rare)</li>
      <li><strong>Rental Without Permission:</strong> Renting property if prohibited</li>
      <li><strong>Fraud/Misrepresentation:</strong> Material false statements on loan application</li>
    </ul>
    
    <h3>Timeline of Acceleration Process</h3>
    <ol>
      <li><strong>Day 1-15:</strong> Payment missed, grace period</li>
      <li><strong>Day 16-30:</strong> Late fees assessed</li>
      <li><strong>Day 31-60:</strong> Multiple collection attempts</li>
      <li><strong>Day 61-90:</strong> Formal default notice sent</li>
      <li><strong>Day 91-120:</strong> Acceleration notice / Demand for full payment</li>
      <li><strong>Day 121+:</strong> Foreclosure proceedings begin</li>
    </ol>
    
    <h3>Types of Acceleration Clauses</h3>
    <ul>
      <li><strong>Automatic Acceleration:</strong> Loan automatically accelerates upon default</li>
      <li><strong>Optional Acceleration:</strong> Lender chooses whether to accelerate</li>
      <li><strong>Partial Acceleration:</strong> Only portion of loan accelerated (rare)</li>
      <li><strong>Immediate Acceleration:</strong> No cure period provided</li>
      <li><strong>Curable Acceleration:</strong> Opportunity to reinstate loan</li>
    </ul>
    
    <h3>Your Rights After Acceleration</h3>
    <ul>
      <li><strong>Cure Period:</strong> Some states mandate 30-60 day cure period</li>
      <li><strong>Reinstatement Right:</strong> Pay arrears and fees to restore loan</li>
      <li><strong>Redemption Right:</strong> Pay full balance before foreclosure sale</li>
      <li><strong>Challenge Acceleration:</strong> Contest if improperly triggered</li>
      <li><strong>Loan Modification:</strong> Negotiate new terms with lender</li>
      <li><strong>Bankruptcy Protection:</strong> File Chapter 13 to force repayment plan</li>
      <li><strong>Sell Property:</strong> List and sell before foreclosure</li>
    </ul>
    
    <h3>Options After Acceleration Notice</h3>
    <p><strong>Option 1: Pay in Full</strong></p>
    <ul>
      <li>Pay entire loan balance immediately</li>
      <li>Eliminates foreclosure risk</li>
      <li>Requires significant cash or refinancing</li>
      <li>Timeline: Typically 30 days</li>
    </ul>
    
    <p><strong>Option 2: Reinstate the Loan</strong></p>
    <ul>
      <li>Pay all missed payments plus fees</li>
      <li>Resume normal monthly payments</li>
      <li>Not always available after acceleration</li>
      <li>State laws vary on reinstatement rights</li>
    </ul>
    
    <p><strong>Option 3: Loan Modification</strong></p>
    <ul>
      <li>Negotiate new payment terms</li>
      <li>Extend loan term or reduce rate</li>
      <li>Add arrears to principal balance</li>
      <li>Requires lender approval</li>
    </ul>
    
    <p><strong>Option 4: Short Sale</strong></p>
    <ul>
      <li>Sell property for less than owed</li>
      <li>Requires lender approval</li>
      <li>Damages credit less than foreclosure</li>
      <li>May owe deficiency depending on state</li>
    </ul>
    
    <p><strong>Option 5: Deed in Lieu</strong></p>
    <ul>
      <li>Voluntarily surrender property to lender</li>
      <li>Avoid foreclosure proceedings</li>
      <li>Less credit damage than foreclosure</li>
      <li>Releases you from mortgage debt</li>
    </ul>
    
    <p><strong>Option 6: Bankruptcy Filing</strong></p>
    <ul>
      <li>Chapter 13: Force repayment plan over 3-5 years</li>
      <li>Automatic stay stops foreclosure temporarily</li>
      <li>Can strip second mortgages if underwater</li>
      <li>Significant credit impact</li>
    </ul>
    
    <h3>Preventing Acceleration</h3>
    <ul>
      <li><strong>Communication:</strong> Contact lender immediately if struggling</li>
      <li><strong>Forbearance:</strong> Request temporary payment reduction</li>
      <li><strong>Partial Payments:</strong> Pay what you can (may not prevent acceleration)</li>
      <li><strong>Hardship Programs:</strong> Apply for lender assistance programs</li>
      <li><strong>Government Programs:</strong> FHA/VA have special assistance</li>
      <li><strong>Housing Counselor:</strong> Free HUD-approved counseling</li>
    </ul>
    
    <h3>State-Specific Protections</h3>
    <ul>
      <li><strong>Right to Cure:</strong> Some states mandate cure periods (15-60 days)</li>
      <li><strong>Mediation Programs:</strong> Required foreclosure mediation in some states</li>
      <li><strong>Notice Requirements:</strong> Specific acceleration notice procedures</li>
      <li><strong>Judicial Foreclosure:</strong> Court oversight in some states</li>
      <li><strong>Anti-Deficiency Laws:</strong> Limits on post-foreclosure collection</li>
    </ul>
    
    <h3>Impact on Credit and Future</h3>
    <ul>
      <li><strong>Acceleration Notice:</strong> Not reported to credit bureaus</li>
      <li><strong>Late Payments:</strong> Damage credit (30, 60, 90 day lates)</li>
      <li><strong>Foreclosure:</strong> Severe credit damage (7 years)</li>
      <li><strong>Short Sale:</strong> Moderate credit damage (2-4 years)</li>
      <li><strong>Deed in Lieu:</strong> Similar to short sale impact</li>
      <li><strong>Bankruptcy:</strong> Severe damage (7-10 years)</li>
    </ul>
    
    <h3>Costs Associated with Acceleration</h3>
    <ul>
      <li><strong>Missed Payments:</strong> All back payments owed</li>
      <li><strong>Late Fees:</strong> 3-5% of payment × number of late payments</li>
      <li><strong>Attorney Fees:</strong> Lender's legal costs (often $2,000-$5,000)</li>
      <li><strong>Inspection Fees:</strong> Property inspection costs</li>
      <li><strong>Interest:</strong> Accrued interest on unpaid balance</li>
      <li><strong>Foreclosure Costs:</strong> If proceeding to foreclosure ($5,000-$15,000)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "loanBalance",
        label: "Current Loan Balance",
        type: "number",
        placeholder: "200000",
        defaultValue: "200000",
      },
      {
        name: "monthlyPayment",
        label: "Monthly Payment",
        type: "number",
        placeholder: "1500",
        defaultValue: "1500",
      },
      {
        name: "missedPayments",
        label: "Number of Missed Payments",
        type: "number",
        placeholder: "3",
        defaultValue: "3",
      },
      {
        name: "propertyValue",
        label: "Current Property Value",
        type: "number",
        placeholder: "250000",
        defaultValue: "250000",
      },
      {
        name: "situation",
        label: "Current Situation",
        type: "select",
        options: [
          "Missed Payments",
          "Unpaid Property Taxes",
          "Insurance Lapse",
          "Property Damage/Neglect",
          "Received Acceleration Notice",
          "Bankruptcy Filed",
          "Just Worried/Planning"
        ],
        defaultValue: "Missed Payments",
      },
      {
        name: "canPayArrears",
        label: "Can You Pay All Arrears?",
        type: "select",
        options: ["Yes - Full Amount", "Yes - With Help", "Partial Amount", "No"],
        defaultValue: "Partial Amount",
      },
    ],
    results: [
      { label: "Status", isCurrency: false },
      { label: "Total Amount Owed", isCurrency: true },
      { label: "Available Options", isCurrency: false },
      { label: "Timeline to Act", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const loanBalance = Number(data.loanBalance) || 0;
      const monthlyPayment = Number(data.monthlyPayment) || 0;
      const missedPayments = Number(data.missedPayments) || 0;
      const propertyValue = Number(data.propertyValue) || 0;
      const situation = data.situation || "Missed Payments";
      const canPayArrears = data.canPayArrears || "Partial Amount";
      
      // Calculate total owed
      const missedPaymentsAmount = monthlyPayment * missedPayments;
      const lateFees = missedPaymentsAmount * 0.05; // 5% late fee estimate
      const legalFees = missedPayments >= 3 ? 2000 : 0;
      const totalArrears = missedPaymentsAmount + lateFees + legalFees;
      const totalOwed = loanBalance + totalArrears;
      
      // Determine status
      let status = "";
      let urgency = 0;
      
      if (situation === "Received Acceleration Notice") {
        status = "🔴 CRITICAL - Full Loan Balance Due Now";
        urgency = 4;
      } else if (situation === "Bankruptcy Filed") {
        status = "🟠 PROTECTED - Automatic Stay in Effect";
        urgency = 2;
      } else if (missedPayments >= 3) {
        status = "🔴 HIGH RISK - Acceleration Likely Soon";
        urgency = 3;
      } else if (missedPayments >= 1) {
        status = "🟡 AT RISK - Default Status";
        urgency = 2;
      } else {
        status = "🟢 CURRENT - No Acceleration Risk";
        urgency = 1;
      }
      
      // Determine available options
      let options = [];
      if (canPayArrears === "Yes - Full Amount") {
        options.push("✅ Reinstate Loan");
        options.push("✅ Pay in Full");
      } else if (canPayArrears === "Yes - With Help") {
        options.push("✅ Reinstate with Assistance");
      }
      
      // Always available options
      options.push("📋 Loan Modification");
      options.push("🏠 Sell Property");
      
      if (propertyValue < loanBalance) {
        options.push("💰 Short Sale");
      }
      
      options.push("🤝 Deed in Lieu");
      options.push("⚖️ Bankruptcy (Chapter 13)");
      
      const optionsText = options.join(", ");
      
      // Timeline to act
      let timeline = "";
      if (situation === "Received Acceleration Notice") {
        timeline = "⏰ 30 days or less to respond";
      } else if (missedPayments >= 3) {
        timeline = "⏰ 30-60 days before acceleration";
      } else if (missedPayments >= 1) {
        timeline = "⏰ 60-90 days before serious risk";
      } else {
        timeline = "✅ No immediate deadline";
      }
      
      // Recommendation
      let recommendation = "";
      
      if (situation === "Received Acceleration Notice") {
        if (canPayArrears.includes("Yes")) {
          recommendation = "URGENT ACTION REQUIRED: Contact lender immediately to reinstate loan. You have limited time (~30 days). Gather funds and submit payment ASAP. Consider attorney if lender won't cooperate.";
        } else {
          recommendation = "CRITICAL SITUATION: Options: (1) Emergency loan modification request, (2) List property for quick sale, (3) Consult bankruptcy attorney for Chapter 13, (4) Negotiate deed in lieu. Act within days, not weeks.";
        }
      } else if (situation === "Bankruptcy Filed") {
        recommendation = "BANKRUPTCY PROTECTION: You have temporary breathing room. Work with bankruptcy attorney to: (1) Propose Chapter 13 repayment plan, (2) Catch up arrears over 3-5 years, (3) Strip second mortgage if underwater. Stay current on new payments.";
      } else if (missedPayments >= 3) {
        recommendation = "HIGH URGENCY: Acceleration notice likely coming soon. Immediate steps: (1) Contact lender TODAY for forbearance/modification, (2) Apply for state hardship programs, (3) Consult HUD housing counselor (free), (4) Consider selling before foreclosure. You have weeks, not months.";
      } else if (missedPayments >= 1) {
        recommendation = "TAKE ACTION NOW: You're in default but not critical yet. Steps: (1) Contact lender to discuss hardship programs, (2) Request forbearance or payment plan, (3) Get current ASAP if possible, (4) Seek housing counseling. Don't ignore this - it only gets worse.";
      } else {
        recommendation = "GOOD POSITION: No immediate risk. If worried about future payments: (1) Contact lender about options before missing payments, (2) Research hardship programs, (3) Consider selling if long-term unaffordable, (4) Build emergency fund for mortgage payments.";
      }

      return [
        { label: "Status", value: status, isCurrency: false },
        { label: "Total Amount Owed", value: totalArrears.toFixed(2), isCurrency: true },
        { label: "Available Options", value: optionsText, isCurrency: false },
        { label: "Timeline to Act", value: timeline, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
