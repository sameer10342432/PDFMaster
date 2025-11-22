import { CalculatorContent } from '@/types';

export const MECHANICS_LIEN_RISK_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Mechanic\'s Lien Risk Analyzer',
  description: 'Assess the risk of mechanic\'s liens on property and calculate potential exposure',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'mechanics-lien-risk-analyzer',
  article: {
    title: "Understanding Mechanic's Liens and How to Protect Yourself",
    content: `
    <h2>What is a Mechanic's Lien?</h2>
    <p>A mechanic's lien (also called construction lien or materialman's lien) is a legal claim against a property by contractors, subcontractors, or suppliers who performed work or provided materials but weren't paid.</p>
    
    <h3>Who Can File a Mechanic's Lien?</h3>
    <ul>
      <li><strong>General Contractors:</strong> Main contractor on the project</li>
      <li><strong>Subcontractors:</strong> Electricians, plumbers, HVAC, framers, etc.</li>
      <li><strong>Material Suppliers:</strong> Lumber yards, concrete companies, hardware stores</li>
      <li><strong>Equipment Rental:</strong> Companies renting construction equipment</li>
      <li><strong>Designers/Architects:</strong> In some states, for design services</li>
      <li><strong>Landscapers:</strong> For landscaping improvements</li>
    </ul>
    
    <h3>How Mechanic's Liens Work</h3>
    <p>The typical process:</p>
    <ol>
      <li><strong>Work Performed:</strong> Contractor/supplier provides service or materials</li>
      <li><strong>Non-Payment:</strong> Property owner fails to pay</li>
      <li><strong>Preliminary Notice:</strong> In many states, notice must be sent (20-60 days after work starts)</li>
      <li><strong>Lien Filing:</strong> File with county recorder (typically 30-120 days after job completion)</li>
      <li><strong>Enforcement:</strong> File lawsuit to foreclose on lien (usually within 1 year)</li>
      <li><strong>Property Sale:</strong> Lien must be paid off or property can be foreclosed</li>
    </ol>
    
    <h3>Timeline Requirements (Varies by State)</h3>
    <ul>
      <li><strong>Preliminary Notice:</strong> 20-60 days after starting work (required in many states)</li>
      <li><strong>Filing Deadline:</strong> 30-120 days after completion/last work date</li>
      <li><strong>Enforcement Deadline:</strong> 90 days to 2 years after filing</li>
      <li><strong>Priority:</strong> Often takes precedence over mortgages (even if mortgage was first!)</li>
    </ul>
    
    <h3>Common Scenarios Leading to Liens</h3>
    <ul>
      <li><strong>Unpaid General Contractor:</strong> You paid contractor, but they didn't pay subs</li>
      <li><strong>Disputed Work Quality:</strong> Withholding payment due to defects</li>
      <li><strong>Change Orders:</strong> Additional work performed but not properly documented</li>
      <li><strong>Contractor Bankruptcy:</strong> Contractor goes out of business before paying subs</li>
      <li><strong>Property Sale:</strong> Undisclosed liens discovered during title search</li>
      <li><strong>HOA Projects:</strong> Association work where individual owners become liable</li>
    </ul>
    
    <h3>Protecting Yourself as Property Owner</h3>
    <ul>
      <li><strong>Conditional Lien Waivers:</strong> Get before making each progress payment</li>
      <li><strong>Unconditional Final Waiver:</strong> Get after final payment clears</li>
      <li><strong>Joint Checks:</strong> Pay contractor and subcontractors jointly</li>
      <li><strong>Verify Payments:</strong> Require proof subs/suppliers were paid</li>
      <li><strong>Preliminary Notices:</strong> Track all notices received</li>
      <li><strong>Withhold Final Payment:</strong> Hold 10% for 30-90 days after completion</li>
      <li><strong>Title Insurance:</strong> Get extended coverage for mechanic's liens</li>
      <li><strong>Notice of Completion:</strong> File when project done to start lien deadline clock</li>
    </ul>
    
    <h3>Removing or Disputing a Mechanic's Lien</h3>
    <ul>
      <li><strong>Payment:</strong> Pay the amount due plus interest/fees</li>
      <li><strong>Lien Bond:</strong> Post bond to release property (amount varies by state)</li>
      <li><strong>Settlement:</strong> Negotiate reduced payment</li>
      <li><strong>Lawsuit:</strong> File to remove frivolous or improper lien</li>
      <li><strong>Wait for Expiration:</strong> If not enforced within deadline, lien expires</li>
      <li><strong>Bankruptcy:</strong> May discharge or delay lien enforcement</li>
    </ul>
    
    <h3>Impact on Property Sale/Refinance</h3>
    <ul>
      <li><strong>Title Problem:</strong> Clouds title and prevents sale</li>
      <li><strong>Must Pay at Closing:</strong> Lien paid from sale proceeds</li>
      <li><strong>Buyer Protection:</strong> Title search should reveal liens</li>
      <li><strong>Reduced Proceeds:</strong> Seller receives less money</li>
      <li><strong>Refinance Block:</strong> Lenders won't refinance with active lien</li>
    </ul>
    
    <h3>State-Specific Variations</h3>
    <ul>
      <li><strong>California:</strong> 90 days to file, 90 days to enforce</li>
      <li><strong>Texas:</strong> 4th month after work, 2 years to enforce</li>
      <li><strong>Florida:</strong> 90 days to file, 1 year to enforce</li>
      <li><strong>New York:</strong> 8 months to file, 1 year to enforce</li>
      <li><strong>Illinois:</strong> 90 days to file, 2 years to enforce</li>
    </ul>
    
    <h3>Warning Signs of Potential Lien Risk</h3>
    <ul>
      <li>Receiving preliminary lien notices in mail</li>
      <li>Subcontractors asking if they've been paid</li>
      <li>Contractor asking for payment before work completed</li>
      <li>Contractor having financial problems</li>
      <li>Disputes about work quality or scope</li>
      <li>Change orders without written agreements</li>
      <li>Material suppliers contacting you directly</li>
    </ul>
    
    <h3>Costs Associated with Mechanic's Liens</h3>
    <ul>
      <li><strong>Lien Amount:</strong> Original unpaid balance</li>
      <li><strong>Interest:</strong> Accrued interest (varies by state)</li>
      <li><strong>Filing Fees:</strong> County recorder fees</li>
      <li><strong>Attorney Fees:</strong> Legal costs (sometimes recoverable)</li>
      <li><strong>Title Work:</strong> $500-$2,000 to clear title</li>
      <li><strong>Bond Costs:</strong> If posting bond, typically 110-150% of lien amount</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "projectCost",
        label: "Total Project Cost",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "unpaidAmount",
        label: "Unpaid Amount",
        type: "number",
        placeholder: "10000",
        defaultValue: "10000",
      },
      {
        name: "monthsSinceCompletion",
        label: "Months Since Project Completion",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "receivedNotices",
        label: "Received Preliminary Lien Notices?",
        type: "select",
        options: ["No Notices", "1 Notice", "2-3 Notices", "4+ Notices"],
        defaultValue: "No Notices",
      },
      {
        name: "hasWaivers",
        label: "Have Lien Waivers from Contractor?",
        type: "select",
        options: ["Yes - All Payments", "Partial Waivers", "No Waivers"],
        defaultValue: "Partial Waivers",
      },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          "California (90 days)",
          "Texas (120 days)",
          "Florida (90 days)",
          "New York (240 days)",
          "Illinois (90 days)",
          "Pennsylvania (120 days)",
          "Ohio (75 days)",
          "Georgia (90 days)",
          "Other State (90-120 days)"
        ],
        defaultValue: "California (90 days)",
      },
    ],
    results: [
      { label: "Lien Filing Window", isCurrency: false },
      { label: "Risk Level", isCurrency: false },
      { label: "Estimated Total Exposure", isCurrency: true },
      { label: "Number of Potential Liens", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const projectCost = Number(data.projectCost) || 0;
      const unpaidAmount = Number(data.unpaidAmount) || 0;
      const monthsSinceCompletion = Number(data.monthsSinceCompletion) || 0;
      const receivedNotices = data.receivedNotices || "No Notices";
      const hasWaivers = data.hasWaivers || "Partial Waivers";
      const state = data.state || "California (90 days)";
      
      // Extract filing window from state
      const match = state.match(/(\d+)\s+days/);
      const filingDays = match ? parseInt(match[1]) : 90;
      const filingMonths = Math.ceil(filingDays / 30);
      
      // Calculate remaining time
      const monthsRemaining = Math.max(0, filingMonths - monthsSinceCompletion);
      const daysRemaining = monthsRemaining * 30;
      
      // Determine risk based on notices
      let noticeCount = 0;
      if (receivedNotices === "1 Notice") noticeCount = 1;
      else if (receivedNotices === "2-3 Notices") noticeCount = 2.5;
      else if (receivedNotices === "4+ Notices") noticeCount = 5;
      
      // Calculate risk level
      let riskLevel = "";
      let riskPoints = 0;
      
      // Unpaid amount risk
      const unpaidPercent = projectCost > 0 ? (unpaidAmount / projectCost) : 0;
      if (unpaidPercent > 0.30) riskPoints += 3;
      else if (unpaidPercent > 0.15) riskPoints += 2;
      else if (unpaidPercent > 0) riskPoints += 1;
      
      // Notice risk
      riskPoints += Math.min(noticeCount, 3);
      
      // Waiver risk
      if (hasWaivers === "No Waivers") riskPoints += 3;
      else if (hasWaivers === "Partial Waivers") riskPoints += 1;
      
      // Time risk
      if (monthsRemaining <= 1) riskPoints += 3;
      else if (monthsRemaining <= 2) riskPoints += 2;
      
      // Determine risk level
      if (riskPoints >= 8) {
        riskLevel = "🔴 CRITICAL RISK - Immediate Action Required";
      } else if (riskPoints >= 5) {
        riskLevel = "🟠 HIGH RISK - Take Action Soon";
      } else if (riskPoints >= 3) {
        riskLevel = "🟡 MODERATE RISK - Monitor Closely";
      } else if (riskPoints >= 1) {
        riskLevel = "🟢 LOW RISK - Basic Precautions";
      } else {
        riskLevel = "✅ MINIMAL RISK - Well Protected";
      }
      
      // Calculate total exposure (unpaid + interest + fees)
      const estimatedInterest = unpaidAmount * 0.10; // 10% interest estimate
      const estimatedFees = 2000; // Legal and filing fees
      const totalExposure = unpaidAmount + estimatedInterest + estimatedFees;
      
      // Filing window text
      let filingWindowText = "";
      if (daysRemaining > 0) {
        filingWindowText = `${daysRemaining} days remaining (${filingDays} day window)`;
      } else {
        filingWindowText = `Window CLOSED - Liens should be expired if not filed`;
      }
      
      // Potential lien count
      const potentialLiens = noticeCount > 0 ? Math.ceil(noticeCount) : Math.ceil(unpaidAmount / 10000);
      const lienCountText = `${potentialLiens} potential lien(s)`;
      
      // Recommendation
      let recommendation = "";
      
      if (monthsRemaining === 0) {
        recommendation = "Filing window has closed. If no liens filed, you're likely safe. Still get final unconditional lien waivers from all parties for protection.";
      } else if (riskPoints >= 8) {
        recommendation = "URGENT: " + daysRemaining + " days left! (1) Pay all amounts due immediately, (2) Get unconditional final lien waivers, (3) File Notice of Completion to start clock, (4) Consult attorney NOW.";
      } else if (riskPoints >= 5) {
        recommendation = "HIGH PRIORITY: " + daysRemaining + " days remaining. (1) Resolve all payment disputes ASAP, (2) Obtain lien waivers from everyone, (3) Consider posting notice of completion, (4) Keep records of all payments.";
      } else if (riskPoints >= 3) {
        recommendation = "TAKE ACTION: (1) Get lien waivers for all payments made, (2) Confirm contractor paid all subs/suppliers, (3) Withhold final 10% until waivers received, (4) Document everything.";
      } else if (riskPoints >= 1) {
        recommendation = "STANDARD PROTECTION: (1) Obtain conditional waivers before each payment, (2) Get unconditional final waiver with last payment, (3) Keep copies of all checks and waivers.";
      } else {
        recommendation = "LOW RISK: You appear well-protected. Continue good practices: get waivers with each payment, verify payments to subs, maintain documentation.";
      }

      return [
        { label: "Lien Filing Window", value: filingWindowText, isCurrency: false },
        { label: "Risk Level", value: riskLevel, isCurrency: false },
        { label: "Estimated Total Exposure", value: totalExposure.toFixed(2), isCurrency: true },
        { label: "Number of Potential Liens", value: lienCountText, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
