import { CalculatorContent } from '@/types';

export const HOA_CCRS_RED_FLAG_FINDER_CONTENT: CalculatorContent = {
  title: 'HOA Document (CC&Rs) Red Flag Finder',
  description: 'Identify potential red flags and restrictive covenants in HOA CC&Rs before you buy',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'hoa-ccrs-red-flag-finder',
  article: {
    title: "Understanding HOA CC&Rs and Red Flags",
    content: `
    <h2>What are CC&Rs?</h2>
    <p>CC&Rs (Covenants, Conditions & Restrictions) are the governing documents that establish the rules, regulations, and restrictions for properties within an HOA. They're legally binding and can significantly impact your property rights and lifestyle.</p>
    
    <h3>Critical Red Flags to Watch For</h3>
    <ul>
      <li><strong>Rental Restrictions:</strong> Limits on short-term rentals (Airbnb), minimum lease periods, or total rental bans</li>
      <li><strong>Transfer Fees:</strong> Fees charged when selling your property (often 1-3% of sale price)</li>
      <li><strong>Right of First Refusal:</strong> HOA can purchase your property before you sell to others</li>
      <li><strong>Mandatory Membership Fees:</strong> Required country club or amenity memberships</li>
      <li><strong>Broad Amendment Powers:</strong> Board can change rules with minimal owner approval</li>
      <li><strong>Unlimited Assessment Authority:</strong> No cap on special assessments</li>
      <li><strong>Foreclosure Rights:</strong> HOA can foreclose for unpaid fees</li>
      <li><strong>Architectural Control:</strong> Requires approval for minor changes (paint colors, landscaping)</li>
    </ul>
    
    <h3>Common Restrictions to Review</h3>
    <ul>
      <li><strong>Pet Restrictions:</strong> Size limits, breed restrictions, number of pets allowed</li>
      <li><strong>Parking Rules:</strong> Guest parking limits, RV/boat storage bans, garage requirements</li>
      <li><strong>Exterior Modifications:</strong> Satellite dishes, solar panels, fence heights, mailboxes</li>
      <li><strong>Business Use:</strong> Home-based business restrictions, commercial vehicle bans</li>
      <li><strong>Age Restrictions:</strong> 55+ communities, children limitations</li>
      <li><strong>Use Restrictions:</strong> Vacation rentals, timeshare prohibitions</li>
      <li><strong>Maintenance Requirements:</strong> Lawn care standards, exterior painting schedules</li>
    </ul>
    
    <h3>Financial Red Flags</h3>
    <ul>
      <li><strong>Rising HOA Fees:</strong> Fees increasing 10%+ annually</li>
      <li><strong>Low Reserves:</strong> Reserve fund below 25% of annual budget</li>
      <li><strong>Pending Litigation:</strong> Lawsuits against HOA or management</li>
      <li><strong>High Delinquency Rate:</strong> Many owners behind on payments</li>
      <li><strong>No Reserve Study:</strong> No professional analysis of future capital needs</li>
      <li><strong>Special Assessments:</strong> History of frequent surprise charges</li>
    </ul>
    
    <h3>Governance Red Flags</h3>
    <ul>
      <li><strong>Low Quorum Requirements:</strong> Few owners needed to pass major changes</li>
      <li><strong>Developer Control:</strong> Builder retains voting majority</li>
      <li><strong>Broad Fining Authority:</strong> Excessive fines for minor violations</li>
      <li><strong>Limited Owner Rights:</strong> No recall provisions, no owner vote requirements</li>
      <li><strong>Vague Language:</strong> Ambiguous rules subject to interpretation</li>
      <li><strong>Discriminatory Provisions:</strong> Outdated illegal restrictions</li>
    </ul>
    
    <h3>Questions to Ask Before Buying</h3>
    <ol>
      <li>Can I rent out my property? Are there Airbnb restrictions?</li>
      <li>What are the current HOA fees and 5-year history?</li>
      <li>Have there been special assessments in the last 5 years?</li>
      <li>What is the reserve fund balance and adequacy?</li>
      <li>Are there pending lawsuits or insurance claims?</li>
      <li>What percentage of owners are current on dues?</li>
      <li>What exterior changes require approval?</li>
      <li>Are there transfer fees when selling?</li>
      <li>What are the parking and pet restrictions?</li>
      <li>Can the HOA foreclose for unpaid dues?</li>
    </ol>
    
    <h3>How to Review CC&Rs</h3>
    <ul>
      <li><strong>Request Documents:</strong> Get CC&Rs, bylaws, rules, and recent meeting minutes</li>
      <li><strong>Read Everything:</strong> Don't rely on summaries - read the full documents</li>
      <li><strong>Check Amendments:</strong> Look for recent changes and amendment history</li>
      <li><strong>Attorney Review:</strong> Have a real estate lawyer review for complex associations</li>
      <li><strong>Talk to Residents:</strong> Ask current owners about their experience</li>
      <li><strong>Attend Meetings:</strong> Observe an HOA board meeting if possible</li>
    </ul>
    
    <h3>Deal Breakers vs. Manageable Issues</h3>
    <p><strong>Potential Deal Breakers:</strong></p>
    <ul>
      <li>Total rental bans (if you plan to rent)</li>
      <li>High transfer fees (1%+ of sale price)</li>
      <li>Severe financial distress</li>
      <li>Ongoing major litigation</li>
      <li>Unreasonable restrictions on your lifestyle</li>
    </ul>
    <p><strong>Manageable Issues:</strong></p>
    <ul>
      <li>Reasonable architectural approval process</li>
      <li>Standard pet restrictions</li>
      <li>Normal parking rules</li>
      <li>Typical maintenance standards</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "rentalRestrictions",
        label: "Rental Restrictions Present?",
        type: "select",
        options: ["None", "Minimum Lease Term (6-12 months)", "No Short-term Rentals", "Total Rental Ban"],
        defaultValue: "None",
      },
      {
        name: "transferFee",
        label: "Transfer Fee When Selling?",
        type: "select",
        options: ["None", "Flat Fee ($500-$2000)", "1-2% of Sale Price", "3%+ of Sale Price"],
        defaultValue: "None",
      },
      {
        name: "amendmentPower",
        label: "Amendment Approval Required",
        type: "select",
        options: ["67%+ Owner Vote", "50-66% Owner Vote", "Board Only with <50% Vote", "Board Only No Vote"],
        defaultValue: "67%+ Owner Vote",
      },
      {
        name: "assessmentCap",
        label: "Cap on Special Assessments?",
        type: "select",
        options: ["Yes - Capped Amount", "Yes - Requires Owner Vote", "No - Unlimited Board Power"],
        defaultValue: "Yes - Requires Owner Vote",
      },
      {
        name: "foreclosureRight",
        label: "HOA Can Foreclose for Unpaid Dues?",
        type: "select",
        options: ["No", "Yes - After 1 Year", "Yes - After 6 Months", "Yes - Immediately"],
        defaultValue: "Yes - After 1 Year",
      },
      {
        name: "rightFirstRefusal",
        label: "HOA Right of First Refusal?",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No",
      },
      {
        name: "architecturalControl",
        label: "Architectural Approval Scope",
        type: "select",
        options: ["Major Changes Only", "Exterior Changes", "Everything Including Paint/Landscaping"],
        defaultValue: "Major Changes Only",
      },
      {
        name: "petRestrictions",
        label: "Pet Restrictions",
        type: "select",
        options: ["None/Minimal", "Size/Number Limits", "Breed Restrictions", "No Pets Allowed"],
        defaultValue: "None/Minimal",
      },
    ],
    results: [
      { label: "Red Flag Count", isCurrency: false },
      { label: "Severity Rating", isCurrency: false },
      { label: "Investment Risk", isCurrency: false },
      { label: "Rental Impact", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const rentalRestrictions = data.rentalRestrictions || "None";
      const transferFee = data.transferFee || "None";
      const amendmentPower = data.amendmentPower || "67%+ Owner Vote";
      const assessmentCap = data.assessmentCap || "Yes - Requires Owner Vote";
      const foreclosureRight = data.foreclosureRight || "Yes - After 1 Year";
      const rightFirstRefusal = data.rightFirstRefusal || "No";
      const architecturalControl = data.architecturalControl || "Major Changes Only";
      const petRestrictions = data.petRestrictions || "None/Minimal";
      
      let redFlagCount = 0;
      let severityPoints = 0;
      const issues = [];
      
      // Rental restrictions
      if (rentalRestrictions === "Total Rental Ban") {
        redFlagCount++;
        severityPoints += 3;
        issues.push("🚨 Total rental ban severely limits investment options");
      } else if (rentalRestrictions === "No Short-term Rentals") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ No Airbnb/VRBO allowed");
      } else if (rentalRestrictions === "Minimum Lease Term (6-12 months)") {
        redFlagCount++;
        severityPoints += 1;
        issues.push("ℹ️ Minimum lease terms restrict flexibility");
      }
      
      // Transfer fee
      if (transferFee === "3%+ of Sale Price") {
        redFlagCount++;
        severityPoints += 3;
        issues.push("🚨 HIGH transfer fee (3%+) reduces sale proceeds");
      } else if (transferFee === "1-2% of Sale Price") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ Significant transfer fee when selling");
      } else if (transferFee === "Flat Fee ($500-$2000)") {
        redFlagCount++;
        severityPoints += 1;
        issues.push("ℹ️ Flat transfer fee applies");
      }
      
      // Amendment power
      if (amendmentPower === "Board Only No Vote") {
        redFlagCount++;
        severityPoints += 3;
        issues.push("🚨 Board can change rules without owner vote");
      } else if (amendmentPower === "Board Only with <50% Vote") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ Rules can change with minority owner approval");
      }
      
      // Assessment cap
      if (assessmentCap === "No - Unlimited Board Power") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ No cap on special assessments");
      }
      
      // Foreclosure
      if (foreclosureRight === "Yes - Immediately") {
        redFlagCount++;
        severityPoints += 3;
        issues.push("🚨 HOA can foreclose immediately for unpaid dues");
      } else if (foreclosureRight === "Yes - After 6 Months") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ Fast foreclosure timeline (6 months)");
      }
      
      // Right of first refusal
      if (rightFirstRefusal === "Yes") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ HOA can purchase before you sell to others");
      }
      
      // Architectural control
      if (architecturalControl === "Everything Including Paint/Landscaping") {
        redFlagCount++;
        severityPoints += 1;
        issues.push("ℹ️ Extensive approval required for minor changes");
      }
      
      // Pet restrictions
      if (petRestrictions === "No Pets Allowed") {
        redFlagCount++;
        severityPoints += 2;
        issues.push("⚠️ No pets allowed");
      }
      
      // Determine severity
      let severity = "";
      if (severityPoints >= 10) {
        severity = "🔴 HIGH SEVERITY - Major Concerns";
      } else if (severityPoints >= 5) {
        severity = "🟠 MODERATE SEVERITY - Notable Issues";
      } else if (severityPoints >= 1) {
        severity = "🟡 LOW SEVERITY - Minor Concerns";
      } else {
        severity = "🟢 MINIMAL CONCERNS - Standard HOA";
      }
      
      // Investment risk
      let investmentRisk = "";
      if (rentalRestrictions === "Total Rental Ban" || transferFee.includes("3%+")) {
        investmentRisk = "🔴 HIGH RISK for Investors";
      } else if (rentalRestrictions !== "None" || severityPoints >= 5) {
        investmentRisk = "🟠 MODERATE RISK for Investors";
      } else {
        investmentRisk = "🟢 LOW RISK for Investors";
      }
      
      // Rental impact
      let rentalImpact = "";
      if (rentalRestrictions === "Total Rental Ban") {
        rentalImpact = "❌ Cannot Rent Property";
      } else if (rentalRestrictions === "No Short-term Rentals") {
        rentalImpact = "⚠️ Long-term Rentals Only";
      } else if (rentalRestrictions === "Minimum Lease Term (6-12 months)") {
        rentalImpact = "ℹ️ Minimum Lease Terms Apply";
      } else {
        rentalImpact = "✅ Full Rental Flexibility";
      }
      
      // Recommendation
      let recommendation = "";
      if (severityPoints >= 10) {
        recommendation = "CAUTION: Multiple serious red flags detected. Consider walking away or negotiate lower purchase price. Consult real estate attorney before proceeding.";
      } else if (severityPoints >= 5) {
        recommendation = "REVIEW CAREFULLY: Several concerning provisions found. Have an attorney review CC&Rs. Understand restrictions before buying.";
      } else if (severityPoints >= 1) {
        recommendation = "ACCEPTABLE: Some standard restrictions present. Read full CC&Rs and confirm you can live with limitations.";
      } else {
        recommendation = "GOOD: Standard HOA with minimal restrictive covenants. Still review all documents before purchase.";
      }

      return [
        { label: "Red Flag Count", value: `${redFlagCount} issues identified`, isCurrency: false },
        { label: "Severity Rating", value: severity, isCurrency: false },
        { label: "Investment Risk", value: investmentRisk, isCurrency: false },
        { label: "Rental Impact", value: rentalImpact, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
