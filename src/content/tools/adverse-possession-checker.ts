import { CalculatorContent } from '@/types';

export const ADVERSE_POSSESSION_CHECKER_CONTENT: CalculatorContent = {
  title: 'Adverse Possession (Squatter\'s Rights) Checker',
  description: 'Analyze potential adverse possession claims and understand squatter\'s rights laws by state',
  icon: 'Icon',
  category: 'Legal & Compliance',
  slug: 'adverse-possession-checker',
  article: {
    title: "Understanding Adverse Possession and Squatter's Rights",
    content: `
    <h2>What is Adverse Possession?</h2>
    <p>Adverse possession is a legal doctrine that allows a person who possesses someone else's land for an extended period of time to claim legal ownership of that land. This is commonly referred to as "squatter's rights."</p>
    
    <h3>Requirements for Adverse Possession</h3>
    <p>To successfully claim adverse possession, the occupation must typically be:</p>
    <ul>
      <li><strong>Continuous:</strong> Uninterrupted possession for the statutory period (varies by state, typically 5-30 years)</li>
      <li><strong>Hostile:</strong> Without permission from the legal owner</li>
      <li><strong>Actual:</strong> Physical presence and use of the property</li>
      <li><strong>Open and Notorious:</strong> Visible and obvious, not hidden</li>
      <li><strong>Exclusive:</strong> Not sharing possession with the owner or public</li>
    </ul>
    
    <h3>State-Specific Variations</h3>
    <p>Each state has different requirements:</p>
    <ul>
      <li><strong>Statutory Period:</strong> Ranges from 5 years (California with tax payment) to 30 years (Louisiana)</li>
      <li><strong>Tax Payment Requirement:</strong> Some states require the adverse possessor to pay property taxes</li>
      <li><strong>Color of Title:</strong> Some states have reduced time periods if possession is under "color of title"</li>
      <li><strong>Good Faith:</strong> Some states require the possessor to believe they have rightful ownership</li>
    </ul>
    
    <h3>Protecting Your Property</h3>
    <p>Property owners can prevent adverse possession claims by:</p>
    <ul>
      <li>Regularly inspecting and maintaining their property</li>
      <li>Posted "No Trespassing" signs</li>
      <li>Fencing and securing boundaries</li>
      <li>Granting written permission for any use (breaks hostility requirement)</li>
      <li>Taking legal action against trespassers immediately</li>
      <li>Paying property taxes on time</li>
    </ul>
    
    <h3>Common Scenarios</h3>
    <ul>
      <li><strong>Boundary Disputes:</strong> Neighbor uses part of your land (fence, driveway, garden)</li>
      <li><strong>Abandoned Properties:</strong> Squatters occupy vacant homes or land</li>
      <li><strong>Easement Claims:</strong> Someone uses a path across your property</li>
      <li><strong>Vacation Properties:</strong> Infrequently visited properties are vulnerable</li>
    </ul>
    
    <h3>Legal Remedies</h3>
    <p>If you discover unauthorized use of your property:</p>
    <ul>
      <li>Document the trespass with photos and dates</li>
      <li>Send a formal cease and desist letter</li>
      <li>File for eviction or ejectment</li>
      <li>Consult with a real estate attorney</li>
      <li>Consider filing a quiet title action</li>
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
          "Alabama (10 years)",
          "Alaska (10 years)",
          "Arizona (10 years)",
          "Arkansas (7 years)",
          "California (5 years with taxes)",
          "Colorado (18 years)",
          "Connecticut (15 years)",
          "Delaware (20 years)",
          "Florida (7 years)",
          "Georgia (20 years)",
          "Hawaii (20 years)",
          "Idaho (20 years)",
          "Illinois (20 years)",
          "Indiana (10 years)",
          "Iowa (10 years)",
          "Kansas (15 years)",
          "Kentucky (15 years)",
          "Louisiana (30 years)",
          "Maine (20 years)",
          "Maryland (20 years)",
          "Massachusetts (20 years)",
          "Michigan (15 years)",
          "Minnesota (15 years)",
          "Mississippi (10 years)",
          "Missouri (10 years)",
          "Montana (5 years with taxes)",
          "Nebraska (10 years)",
          "Nevada (15 years)",
          "New Hampshire (20 years)",
          "New Jersey (30 years)",
          "New Mexico (10 years)",
          "New York (10 years)",
          "North Carolina (20 years)",
          "North Dakota (20 years)",
          "Ohio (21 years)",
          "Oklahoma (15 years)",
          "Oregon (10 years)",
          "Pennsylvania (21 years)",
          "Rhode Island (10 years)",
          "South Carolina (10 years)",
          "South Dakota (20 years)",
          "Tennessee (7 years)",
          "Texas (10 years)",
          "Utah (7 years)",
          "Vermont (15 years)",
          "Virginia (15 years)",
          "Washington (10 years)",
          "West Virginia (10 years)",
          "Wisconsin (20 years)",
          "Wyoming (10 years)"
        ],
        defaultValue: "California (5 years with taxes)",
      },
      {
        name: "yearsOccupied",
        label: "Years of Continuous Occupation",
        type: "number",
        placeholder: "5",
        defaultValue: "3",
      },
      {
        name: "taxesPaid",
        label: "Property Taxes Paid by Occupant?",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "No",
      },
      {
        name: "hasPermission",
        label: "Owner Gave Permission?",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "No",
      },
      {
        name: "colorOfTitle",
        label: "Possession Under Color of Title?",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "Required Years in State", isCurrency: false },
      { label: "Years Remaining", isCurrency: false },
      { label: "Tax Payment Required?", isCurrency: false },
      { label: "Risk Level", isCurrency: false },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const stateText = data.state || "California (5 years with taxes)";
      const yearsOccupied = Number(data.yearsOccupied) || 0;
      const taxesPaid = data.taxesPaid === "Yes";
      const hasPermission = data.hasPermission === "Yes";
      const colorOfTitle = data.colorOfTitle === "Yes";
      
      // Extract years from state text
      const match = stateText.match(/(\d+)\s+years/);
      const requiredYears = match ? parseInt(match[1]) : 10;
      
      // Check if state requires tax payment
      const taxRequired = stateText.includes("with taxes");
      
      // Calculate years remaining
      const yearsRemaining = Math.max(0, requiredYears - yearsOccupied);
      
      // Determine risk level
      let riskLevel = "";
      let recommendation = "";
      
      if (hasPermission) {
        riskLevel = "🟢 No Risk - Permission Given";
        recommendation = "No adverse possession risk. Permission breaks the 'hostile' requirement.";
      } else if (yearsOccupied >= requiredYears) {
        if (taxRequired && !taxesPaid) {
          riskLevel = "🟡 Moderate Risk - Taxes Not Paid";
          recommendation = "Claim may fail due to unpaid taxes requirement. Consult attorney immediately.";
        } else {
          riskLevel = "🔴 HIGH RISK - Statutory Period Met";
          recommendation = "URGENT: Adverse possession claim possible. Consult real estate attorney immediately.";
        }
      } else if (yearsOccupied >= requiredYears * 0.75) {
        riskLevel = "🟠 Elevated Risk - Nearing Deadline";
        recommendation = "Take action soon. File eviction, send cease and desist, or grant written permission.";
      } else if (yearsOccupied >= requiredYears * 0.5) {
        riskLevel = "🟡 Moderate Risk - Halfway There";
        recommendation = "Monitor situation closely. Consider legal action to interrupt possession.";
      } else {
        riskLevel = "🟢 Low Risk - Early Stage";
        recommendation = "Act now to prevent future claims. Post signs, send notice, or take legal action.";
      }

      return [
        { label: "Required Years in State", value: `${requiredYears} years`, isCurrency: false },
        { label: "Years Remaining", value: yearsRemaining > 0 ? `${yearsRemaining} years` : "0 years (Period Met!)", isCurrency: false },
        { label: "Tax Payment Required?", value: taxRequired ? "Yes" : "No", isCurrency: false },
        { label: "Risk Level", value: riskLevel, isCurrency: false },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};
