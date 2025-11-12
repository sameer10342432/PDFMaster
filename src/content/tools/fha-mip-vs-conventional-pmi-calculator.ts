import { CalculatorContent } from "@/types";

export const fhaMipVsConventionalPmiCalculator: CalculatorContent = {
  title: "FHA MIP vs. Conventional PMI Calculator",
  description:
    "Compare FHA mortgage insurance premium (MIP) costs against conventional PMI to find the most cost-effective option.",
  icon: "Icon",
  category: "Calculators",
  slug: "fha-mip-vs-conventional-pmi-calculator",
  metaTitle: "FHA MIP vs PMI Calculator - Compare Mortgage Insurance Costs",
  metaDescription: "Compare FHA mortgage insurance (MIP) vs conventional PMI costs. Calculate which loan type saves you more money with our side-by-side comparison calculator. Find the best mortgage insurance option.",
  article: {
    title: "FHA MIP vs. Conventional PMI: Complete Comparison Guide",
    content: `
      <h2>Understanding Mortgage Insurance</h2>
      <p>Mortgage insurance protects lenders when borrowers make down payments less than 20%. Both FHA and conventional loans require mortgage insurance, but they work differently and have different cost structures.</p>

      <h2>FHA Mortgage Insurance Premium (MIP)</h2>
      <h3>Upfront MIP</h3>
      <p>FHA loans require an upfront mortgage insurance premium of 1.75% of the base loan amount. This is typically financed into the loan rather than paid at closing.</p>

      <h3>Annual MIP</h3>
      <p>FHA annual MIP rates (2024):</p>
      <ul>
        <li><strong>Loan term >15 years, LTV ≤95%:</strong> 0.50% annually</li>
        <li><strong>Loan term >15 years, LTV >95%:</strong> 0.55% annually</li>
        <li><strong>Loan term ≤15 years, LTV ≤90%:</strong> 0.15% annually</li>
        <li><strong>Loan term ≤15 years, LTV >90%:</strong> 0.40% annually</li>
      </ul>

      <h3>FHA MIP Duration</h3>
      <ul>
        <li><strong>Down payment <10%:</strong> MIP for life of loan (cannot be removed)</li>
        <li><strong>Down payment ≥10%:</strong> MIP for 11 years</li>
        <li><strong>15-year term, LTV ≤78%:</strong> No annual MIP required</li>
      </ul>

      <h2>Conventional PMI</h2>
      <h3>PMI Rates</h3>
      <p>Conventional PMI rates vary based on:</p>
      <ul>
        <li>Credit score (620-850 range)</li>
        <li>Loan-to-value ratio</li>
        <li>Loan amount</li>
        <li>Property type</li>
        <li>Occupancy (primary, second home, investment)</li>
      </ul>
      <p>Typical PMI rates range from 0.3% to 1.5% annually, with most borrowers paying 0.5% to 1%.</p>

      <h3>PMI Removal</h3>
      <p>Conventional PMI can be removed when:</p>
      <ul>
        <li><strong>Automatic removal:</strong> When LTV reaches 78% of original value</li>
        <li><strong>Borrower-requested:</strong> When LTV reaches 80% and you've made 24 on-time payments</li>
        <li><strong>Home appreciation:</strong> If home value increases, you can request removal earlier with new appraisal</li>
      </ul>

      <h2>Key Differences: FHA MIP vs. Conventional PMI</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr style="background-color:#f0f0f0;">
          <th style="padding:8px; border:1px solid #ddd;">Feature</th>
          <th style="padding:8px; border:1px solid #ddd;">FHA MIP</th>
          <th style="padding:8px; border:1px solid #ddd;">Conventional PMI</th>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Upfront Cost</td>
          <td style="padding:8px; border:1px solid #ddd;">1.75% upfront (financed)</td>
          <td style="padding:8px; border:1px solid #ddd;">None</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Annual Rate</td>
          <td style="padding:8px; border:1px solid #ddd;">0.15% to 0.55%</td>
          <td style="padding:8px; border:1px solid #ddd;">0.3% to 1.5%</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Rate Varies By</td>
          <td style="padding:8px; border:1px solid #ddd;">LTV & loan term</td>
          <td style="padding:8px; border:1px solid #ddd;">Credit score, LTV, loan amount</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Removal</td>
          <td style="padding:8px; border:1px solid #ddd;">11 years or life of loan</td>
          <td style="padding:8px; border:1px solid #ddd;">When LTV reaches 78-80%</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Minimum Credit</td>
          <td style="padding:8px; border:1px solid #ddd;">580-620</td>
          <td style="padding:8px; border:1px solid #ddd;">620-640</td>
        </tr>
        <tr>
          <td style="padding:8px; border:1px solid #ddd;">Min. Down Payment</td>
          <td style="padding:8px; border:1px solid #ddd;">3.5%</td>
          <td style="padding:8px; border:1px solid #ddd;">3%</td>
        </tr>
      </table>

      <h2>When FHA MIP is Better</h2>
      <ul>
        <li><strong>Lower credit scores:</strong> FHA accepts 580+ scores with 3.5% down</li>
        <li><strong>Higher DTI ratios:</strong> FHA allows up to 50% DTI in some cases</li>
        <li><strong>Recent credit issues:</strong> More lenient on past bankruptcies/foreclosures</li>
        <li><strong>Lower annual rates:</strong> FHA MIP at 0.55% beats high PMI rates for lower-credit borrowers</li>
        <li><strong>Short-term ownership:</strong> If selling within 5-7 years, lifetime MIP less impactful</li>
      </ul>

      <h2>When Conventional PMI is Better</h2>
      <ul>
        <li><strong>Good credit (700+):</strong> Qualify for lower PMI rates (0.3-0.5%)</li>
        <li><strong>Long-term ownership:</strong> Can remove PMI, saving thousands over life of loan</li>
        <li><strong>Rapid equity growth:</strong> Can remove PMI as home appreciates</li>
        <li><strong>No upfront cost:</strong> Avoid the 1.75% upfront MIP</li>
        <li><strong>Higher loan amounts:</strong> Conventional loans have higher limits in some areas</li>
      </ul>

      <h2>Real-World Comparison Examples</h2>
      <h3>Example 1: $300,000 home, 5% down, 700 credit score</h3>
      <p><strong>FHA:</strong></p>
      <ul>
        <li>Upfront MIP: $4,988 (financed)</li>
        <li>Monthly MIP: $132</li>
        <li>Lifetime cost: $47,520 (if kept 30 years)</li>
      </ul>
      <p><strong>Conventional:</strong></p>
      <ul>
        <li>Upfront PMI: $0</li>
        <li>Monthly PMI: $119 (0.5% rate)</li>
        <li>Total PMI: ~$9,500 (removed after ~6.5 years)</li>
      </ul>
      <p><strong>Winner:</strong> Conventional saves ~$38,000 over loan life</p>

      <h3>Example 2: $200,000 home, 3.5% down, 620 credit score</h3>
      <p><strong>FHA:</strong></p>
      <ul>
        <li>Upfront MIP: $3,386</li>
        <li>Monthly MIP: $89</li>
        <li>Lifetime cost: $32,040</li>
      </ul>
      <p><strong>Conventional:</strong></p>
      <ul>
        <li>Upfront PMI: $0</li>
        <li>Monthly PMI: $160 (1% rate due to lower credit)</li>
        <li>Total PMI: ~$13,000 (removed after ~6.5 years)</li>
      </ul>
      <p><strong>Winner:</strong> FHA better in short term, conventional better long term if PMI is removed</p>

      <h2>Strategies to Minimize Mortgage Insurance</h2>
      <ul>
        <li><strong>Save for 20% down:</strong> Avoid all mortgage insurance</li>
        <li><strong>Improve credit score:</strong> Lower PMI rates with conventional loans</li>
        <li><strong>Consider piggyback loans:</strong> 80-10-10 structure avoids PMI</li>
        <li><strong>Lender-paid PMI:</strong> Higher rate but no monthly PMI payment</li>
        <li><strong>Request PMI removal:</strong> Monitor home value and request removal when eligible</li>
      </ul>

      <h2>How to Use This Calculator</h2>
      <p>Enter your home price, down payment, credit score, and interest rates for both loan types. The calculator compares total costs including upfront fees and monthly insurance over different timeframes, helping you make an informed decision about which loan type is best for your situation.</p>
    `,
  },
  calculator: {
    fields: [
      {
        name: "homePrice",
        label: "Home Price ($)",
        type: "number",
        defaultValue: "300000",
      },
      {
        name: "downPayment",
        label: "Down Payment ($)",
        type: "number",
        defaultValue: "15000",
      },
      {
        name: "creditScore",
        label: "Credit Score",
        type: "number",
        defaultValue: "680",
      },
      {
        name: "fhaInterestRate",
        label: "FHA Interest Rate (%)",
        type: "number",
        defaultValue: "6.5",
      },
      {
        name: "conventionalInterestRate",
        label: "Conventional Interest Rate (%)",
        type: "number",
        defaultValue: "6.75",
      },
      {
        name: "loanTerm",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: "30",
      },
    ],
    results: [
      {
        label: "FHA - Upfront MIP (1.75%)",
        isCurrency: true,
      },
      {
        label: "FHA - Monthly MIP",
        isCurrency: true,
      },
      {
        label: "FHA - Total Monthly Payment",
        isCurrency: true,
      },
      {
        label: "FHA - Lifetime MIP Cost",
        isCurrency: true,
      },
      {
        label: "Conventional - Monthly PMI",
        isCurrency: true,
      },
      {
        label: "Conventional - Total Monthly Payment",
        isCurrency: true,
      },
      {
        label: "Conventional - Total PMI (until 78% LTV)",
        isCurrency: true,
      },
      {
        label: "Savings with Conventional (Long-term)",
        isCurrency: true,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const homePrice = parseFloat(values.homePrice);
      const downPayment = parseFloat(values.downPayment);
      const creditScore = parseFloat(values.creditScore);
      const fhaRate = parseFloat(values.fhaInterestRate);
      const convRate = parseFloat(values.conventionalInterestRate);
      const loanTerm = parseInt(values.loanTerm);

      const baseLoan = homePrice - downPayment;
      const ltv = (baseLoan / homePrice) * 100;

      // FHA Calculations
      const upfrontMIP = baseLoan * 0.0175;
      const fhaLoanAmount = baseLoan + upfrontMIP;
      const fhaAnnualMIPRate = ltv > 95 ? 0.0055 : 0.005;
      const fhaMonthlyMIP = (fhaLoanAmount * fhaAnnualMIPRate) / 12;
      
      const fhaMonthlyRate = fhaRate / 100 / 12;
      const fhaPayments = loanTerm * 12;
      const fhaMonthlyPI =
        (fhaLoanAmount * fhaMonthlyRate * Math.pow(1 + fhaMonthlyRate, fhaPayments)) /
        (Math.pow(1 + fhaMonthlyRate, fhaPayments) - 1);
      const fhaTotalMonthly = fhaMonthlyPI + fhaMonthlyMIP;
      const fhaLifetimeMIP = fhaMonthlyMIP * fhaPayments;

      // Conventional Calculations
      let convPMIRate = 0.005; // 0.5% default
      if (creditScore >= 740) convPMIRate = 0.003;
      else if (creditScore >= 700) convPMIRate = 0.004;
      else if (creditScore >= 680) convPMIRate = 0.005;
      else if (creditScore >= 660) convPMIRate = 0.007;
      else if (creditScore >= 640) convPMIRate = 0.009;
      else convPMIRate = 0.012;

      const convMonthlyPMI = (baseLoan * convPMIRate) / 12;
      const convMonthlyRate = convRate / 100 / 12;
      const convPayments = loanTerm * 12;
      const convMonthlyPI =
        (baseLoan * convMonthlyRate * Math.pow(1 + convMonthlyRate, convPayments)) /
        (Math.pow(1 + convMonthlyRate, convPayments) - 1);
      const convTotalMonthly = convMonthlyPI + convMonthlyPMI;

      // Estimate when PMI is removed (78% LTV)
      const targetEquity = homePrice * 0.22;
      const monthsTo78LTV = Math.ceil((targetEquity / convMonthlyPI) * 12);
      const convTotalPMI = convMonthlyPMI * Math.min(monthsTo78LTV, convPayments);

      const savings = fhaLifetimeMIP - convTotalPMI;

      let recommendation = "FHA is better for short-term (1-5 years)";
      if (savings > 5000) {
        recommendation = "Conventional is significantly better long-term - save $" + savings.toFixed(0);
      } else if (savings > 0) {
        recommendation = "Conventional is slightly better - save $" + savings.toFixed(0);
      } else if (savings < -2000) {
        recommendation = "FHA is better for your situation";
      }

      return [
        {
          label: "FHA - Upfront MIP (1.75%)",
          value: upfrontMIP.toFixed(2),
          isCurrency: true,
        },
        {
          label: "FHA - Monthly MIP",
          value: fhaMonthlyMIP.toFixed(2),
          isCurrency: true,
        },
        {
          label: "FHA - Total Monthly Payment",
          value: fhaTotalMonthly.toFixed(2),
          isCurrency: true,
        },
        {
          label: "FHA - Lifetime MIP Cost",
          value: fhaLifetimeMIP.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Conventional - Monthly PMI",
          value: convMonthlyPMI.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Conventional - Total Monthly Payment",
          value: convTotalMonthly.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Conventional - Total PMI (until 78% LTV)",
          value: convTotalPMI.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Savings with Conventional (Long-term)",
          value: Math.abs(savings).toFixed(2),
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
