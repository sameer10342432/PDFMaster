import { CalculatorContent } from "@/types";

export const conformingLoanLimitChecker: CalculatorContent = {
  title: "Conforming Loan Limit Checker",
  description:
    "Check 2024 conforming loan limits by county to determine if you need a jumbo loan or qualify for conventional financing.",
  icon: "Icon",
  category: "Calculators",
  slug: "conforming-loan-limit-checker",
  metaTitle: "2024 Conforming Loan Limits by County - FHFA Loan Limit Checker",
  metaDescription: "Check 2024 conforming loan limits for your county. Find FHFA conventional loan limits ($766,550 standard, up to $1,149,825 high-cost areas). Determine if you need a jumbo loan instantly.",
  article: {
    title: "Understanding Conforming Loan Limits in 2024",
    content: `
      <h2>What are Conforming Loan Limits?</h2>
      <p>Conforming loan limits are the maximum loan amounts that Fannie Mae and Freddie Mac can purchase or guarantee. These limits are set annually by the Federal Housing Finance Agency (FHFA) and vary by county based on local median home prices.</p>

      <h2>2024 Conforming Loan Limits</h2>
      <h3>Standard Counties</h3>
      <p>For most U.S. counties, the 2024 conforming loan limit is:</p>
      <ul>
        <li><strong>Single-family home:</strong> $766,550</li>
        <li><strong>2-unit property:</strong> $981,500</li>
        <li><strong>3-unit property:</strong> $1,186,350</li>
        <li><strong>4-unit property:</strong> $1,474,400</li>
      </ul>

      <h3>High-Cost Areas</h3>
      <p>In designated high-cost areas (expensive markets like San Francisco, New York, Los Angeles), limits can go up to 150% of the baseline:</p>
      <ul>
        <li><strong>Single-family home:</strong> Up to $1,149,825</li>
        <li><strong>2-unit property:</strong> Up to $1,472,250</li>
        <li><strong>3-unit property:</strong> Up to $1,779,525</li>
        <li><strong>4-unit property:</strong> Up to $2,211,600</li>
      </ul>

      <h3>Alaska, Hawaii, Guam, U.S. Virgin Islands</h3>
      <p>These areas have special limits at 150% of standard limits across all counties.</p>

      <h2>Why Conforming Loan Limits Matter</h2>
      <h3>Lower Interest Rates</h3>
      <p>Conforming loans typically offer lower interest rates than jumbo loans because they're backed by Fannie Mae and Freddie Mac, reducing lender risk.</p>

      <h3>Easier Qualification</h3>
      <p>Conforming loans have more relaxed qualification requirements:</p>
      <ul>
        <li>Lower credit score requirements (typically 620+ vs 700+ for jumbo)</li>
        <li>Lower down payment options (as low as 3%)</li>
        <li>Less stringent documentation requirements</li>
        <li>Higher debt-to-income ratios allowed</li>
      </ul>

      <h3>More Lender Options</h3>
      <p>Nearly all mortgage lenders offer conforming loans, while fewer lenders offer jumbo loans, giving you more options to shop for the best rates and terms.</p>

      <h2>What Happens if You Exceed the Limit?</h2>
      <p>If your loan amount exceeds the conforming limit for your county, you'll need a jumbo loan, which means:</p>
      <ul>
        <li>Higher interest rates (typically 0.25% - 0.50% higher)</li>
        <li>Larger down payment required (typically 10-20% minimum)</li>
        <li>Stricter credit requirements (usually 700+ score needed)</li>
        <li>More extensive documentation</li>
        <li>Larger cash reserves required (6-12 months)</li>
        <li>Potentially two appraisals needed</li>
      </ul>

      <h2>Strategies if You're Over the Limit</h2>
      <h3>1. Increase Your Down Payment</h3>
      <p>A larger down payment can bring your loan amount below the conforming limit. For example, if you want a $900,000 home in a standard county, a down payment of $133,450 (15%) would give you a conforming loan of $766,550.</p>

      <h3>2. Piggyback Loan (80-10-10)</h3>
      <p>Take a first mortgage at the conforming limit, a second mortgage for 10%, and pay 10% down. This strategy avoids jumbo loan requirements entirely.</p>

      <h3>3. Consider High-Cost Areas</h3>
      <p>If you're near a high-cost county, you might find suitable properties with higher conforming limits.</p>

      <h3>4. ARM Options</h3>
      <p>Jumbo adjustable-rate mortgages often have lower initial rates than fixed-rate jumbos if you plan to sell or refinance within a few years.</p>

      <h2>How Limits are Determined</h2>
      <p>FHFA sets conforming loan limits based on:</p>
      <ul>
        <li>Changes in median home prices nationwide</li>
        <li>Local median home prices by county</li>
        <li>House Price Index (HPI) data</li>
        <li>Economic conditions and housing market trends</li>
      </ul>
      <p>Limits are typically announced each November for the following year and generally increase in rising markets but rarely decrease.</p>

      <h2>Top High-Cost Counties (2024)</h2>
      <p>Counties with the maximum $1,149,825 limit include:</p>
      <ul>
        <li>San Francisco County, CA</li>
        <li>San Mateo County, CA</li>
        <li>Santa Clara County, CA (Silicon Valley)</li>
        <li>Marin County, CA</li>
        <li>New York County, NY (Manhattan)</li>
        <li>Kings County, NY (Brooklyn)</li>
        <li>Queens County, NY</li>
        <li>Nassau County, NY</li>
        <li>Orange County, CA</li>
        <li>Los Angeles County, CA</li>
      </ul>

      <h2>Impact on Different Loan Types</h2>
      <h3>Conventional Loans</h3>
      <p>Must adhere to conforming limits to be purchased by Fannie Mae or Freddie Mac.</p>

      <h3>FHA Loans</h3>
      <p>Have their own limits (typically lower than conforming limits) set at 65% of conforming limits in low-cost areas and up to 150% in high-cost areas.</p>

      <h3>VA Loans</h3>
      <p>No maximum loan amount, but the VA guarantee is limited to 25% of the conforming loan limit, affecting zero-down purchasing power.</p>

      <h3>USDA Loans</h3>
      <p>No specific maximum, but subject to income limits and area restrictions.</p>

      <h2>Future Limit Changes</h2>
      <p>Conforming loan limits have generally increased over time:</p>
      <ul>
        <li>2020: $510,400 (standard)</li>
        <li>2021: $548,250</li>
        <li>2022: $647,200</li>
        <li>2023: $726,200</li>
        <li>2024: $766,550</li>
      </ul>
      <p>The consistent increases reflect rising home prices nationally. Future increases depend on continued home price appreciation.</p>

      <h2>How to Use This Tool</h2>
      <p>Enter your loan amount and select your county or state. The tool will tell you whether your loan is conforming or jumbo, show you the exact limit for your area, and explain your financing options. This helps you plan your home purchase strategy and understand your mortgage options before house hunting.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "loanAmount",
        label: "Desired Loan Amount ($)",
        type: "number",
        defaultValue: "500000",
      },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          { value: "CA-high", label: "California (High-Cost County)" },
          { value: "CA-standard", label: "California (Standard County)" },
          { value: "NY-high", label: "New York (High-Cost County)" },
          { value: "NY-standard", label: "New York (Standard County)" },
          { value: "TX", label: "Texas" },
          { value: "FL", label: "Florida" },
          { value: "standard", label: "Other State (Standard)" },
          { value: "AK-HI", label: "Alaska/Hawaii" },
        ],
        defaultValue: "standard",
      },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          { value: "1", label: "Single Family (1 unit)" },
          { value: "2", label: "2 Units" },
          { value: "3", label: "3 Units" },
          { value: "4", label: "4 Units" },
        ],
        defaultValue: "1",
      },
    ],
    results: [
      {
        label: "Conforming Loan Limit for Your Area",
        isCurrency: true,
      },
      {
        label: "Your Loan Amount",
        isCurrency: true,
      },
      {
        label: "Loan Status",
        isCurrency: false,
      },
      {
        label: "Amount Over/Under Limit",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const loanAmount = parseFloat(values.loanAmount);
      const state = values.state;
      const propertyType = parseInt(values.propertyType);

      // 2024 Conforming Limits
      const standardLimits = {
        1: 766550,
        2: 981500,
        3: 1186350,
        4: 1474400,
      };

      const highCostLimits = {
        1: 1149825,
        2: 1472250,
        3: 1779525,
        4: 2211600,
      };

      let limit = standardLimits[propertyType as keyof typeof standardLimits];
      
      if (state.includes("high") || state === "AK-HI") {
        limit = highCostLimits[propertyType as keyof typeof highCostLimits];
      }

      const isConforming = loanAmount <= limit;
      const difference = Math.abs(loanAmount - limit);
      
      const status = isConforming 
        ? "✅ Conforming Loan - You qualify for conventional financing" 
        : "⚠️ Jumbo Loan - Exceeds conforming limit";

      let recommendation = "";
      if (isConforming) {
        recommendation = `Great! Your loan qualifies for conventional financing with easier qualification, lower rates, and more lender options. You're $${difference.toFixed(0)} below the limit.`;
      } else {
        recommendation = `You'll need a jumbo loan. Consider: (1) Increase down payment by $${difference.toFixed(0)} to reach conforming limit, (2) Look at properties in high-cost counties if nearby, (3) Consider piggyback loans, or (4) Explore jumbo loan options with 20%+ down payment.`;
      }

      return [
        {
          label: "Conforming Loan Limit for Your Area",
          value: limit.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Your Loan Amount",
          value: loanAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Loan Status",
          value: status,
          isCurrency: false,
        },
        {
          label: "Amount Over/Under Limit",
          value: difference.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Recommendation",
          value: recommendation,
          isCurrency: false,
        },
      ];
    },
  },
};
