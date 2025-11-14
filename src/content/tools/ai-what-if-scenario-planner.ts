import { CalculatorContent } from '@/types';

export const AiWhatIfScenarioPlannerContent: CalculatorContent = {
  title: 'AI "What If" Scenario Planner (Investment)',
  description: 'Model and compare multiple investment scenarios with AI-powered projections, risk analysis, and recommendations',
  icon: '🎯',
  category: 'Investment Analysis',
  slug: 'ai-what-if-scenario-planner',
  
  metaTitle: 'AI What If Scenario Planner for Real Estate Investment | Property Tools',
  metaDescription: 'Model multiple real estate investment scenarios, compare outcomes, analyze risks, and make data-driven decisions with AI-powered projections.',
  
  article: {
    title: 'Model Investment Scenarios and Make Better Decisions with AI',
    content: `
      <h2>What is the AI "What If" Scenario Planner?</h2>
      <p>The AI "What If" Scenario Planner helps real estate investors model and compare multiple investment scenarios side-by-side. By changing variables like purchase price, rent, expenses, appreciation, and holding period, you can see how different decisions impact your returns and make data-driven investment choices with confidence.</p>

      <h3>Why Scenario Planning Matters</h3>
      <p>Real estate investing involves many unknowns and variables. Making decisions based on a single set of assumptions is risky because:</p>
      <ul>
        <li>Markets don't always perform as expected</li>
        <li>Expenses can be higher than projected</li>
        <li>Vacancy rates fluctuate</li>
        <li>Interest rates change</li>
        <li>Renovation costs exceed estimates</li>
        <li>Market conditions shift during your hold period</li>
      </ul>
      <p>Scenario planning helps you understand the range of possible outcomes and prepare for different futures.</p>

      <h3>Types of Scenarios to Model</h3>
      
      <h4>1. Market Condition Scenarios</h4>
      <ul>
        <li><strong>Best Case:</strong> Strong appreciation, low vacancy, increasing rents</li>
        <li><strong>Base Case:</strong> Moderate appreciation, average vacancy, steady rents</li>
        <li><strong>Worst Case:</strong> Flat or negative appreciation, high vacancy, decreasing rents</li>
        <li><strong>Recession Scenario:</strong> Market downturn impacts</li>
      </ul>

      <h4>2. Investment Strategy Scenarios</h4>
      <ul>
        <li><strong>Buy & Hold Long-Term:</strong> 10-30 year hold projections</li>
        <li><strong>Medium-Term Hold:</strong> 5-10 year exit strategy</li>
        <li><strong>Value-Add Flip:</strong> 1-2 year renovation and sale</li>
        <li><strong>BRRRR:</strong> Buy, rehab, rent, refinance timeline</li>
      </ul>

      <h4>3. Financing Scenarios</h4>
      <ul>
        <li><strong>Conventional 20% Down:</strong> Standard financing</li>
        <li><strong>Low Down Payment:</strong> 3-5% down with PMI</li>
        <li><strong>All Cash:</strong> No financing costs</li>
        <li><strong>Creative Financing:</strong> Seller financing, partnerships</li>
      </ul>

      <h4>4. Exit Strategy Scenarios</h4>
      <ul>
        <li><strong>Sale After Appreciation:</strong> Capture equity gains</li>
        <li><strong>Cash-Out Refinance:</strong> Pull equity, keep property</li>
        <li><strong>1031 Exchange:</strong> Defer taxes, trade up</li>
        <li><strong>Hold Forever:</strong> Lifetime cash flow and legacy asset</li>
      </ul>

      <h3>Key Variables to Test</h3>
      
      <h4>Purchase Variables</h4>
      <ul>
        <li>Purchase price (offer $10k-$50k less)</li>
        <li>Down payment percentage (5%, 10%, 20%, 25%)</li>
        <li>Interest rate (current, +1%, +2%)</li>
        <li>Loan term (15, 20, 30 years)</li>
        <li>Closing costs (2-5% of price)</li>
      </ul>

      <h4>Income Variables</h4>
      <ul>
        <li>Monthly rent (current market, +5%, +10%)</li>
        <li>Annual rent increases (0%, 2%, 3%, 5%)</li>
        <li>Vacancy rate (0%, 5%, 8%, 10%)</li>
        <li>Additional income (laundry, parking, storage)</li>
      </ul>

      <h4>Expense Variables</h4>
      <ul>
        <li>Property tax increases (2-4% annually)</li>
        <li>Insurance costs (base, +10%, +20%)</li>
        <li>Maintenance budget (1%, 1.5%, 2% of value)</li>
        <li>Property management (0%, 8%, 10%)</li>
        <li>CapEx reserves ($100, $200, $300/mo)</li>
      </ul>

      <h4>Market Variables</h4>
      <ul>
        <li>Annual appreciation (0%, 2%, 3%, 5%, 7%)</li>
        <li>Holding period (1, 3, 5, 10, 20, 30 years)</li>
        <li>Exit cap rate (current, +1%, +2%)</li>
        <li>Sale costs (6%, 8%, 10%)</li>
      </ul>

      <h3>How to Use the Scenario Planner</h3>
      
      <p><strong>Step 1: Define Your Base Case</strong></p>
      <p>Enter realistic assumptions based on current market data, property condition, and your experience. This is your "most likely" scenario.</p>

      <p><strong>Step 2: Create Optimistic Scenario</strong></p>
      <p>Model best-case assumptions: strong appreciation, low expenses, minimal vacancy. This shows your upside potential.</p>

      <p><strong>Step 3: Create Conservative Scenario</strong></p>
      <p>Model worst-case assumptions: minimal appreciation, higher expenses, elevated vacancy. This reveals your downside risk.</p>

      <p><strong>Step 4: Test Specific Variables</strong></p>
      <p>Change one variable at a time to see which factors most impact your returns. This identifies where to focus due diligence.</p>

      <p><strong>Step 5: Compare & Decide</strong></p>
      <p>Review all scenarios side-by-side. Can you live with the worst case? Is the best case worth the risk?</p>

      <h3>Key Metrics to Compare</h3>
      
      <h4>Cash Flow Analysis</h4>
      <ul>
        <li><strong>Monthly Cash Flow:</strong> Income - Expenses - Debt Service</li>
        <li><strong>Annual Cash Flow:</strong> Total yearly profit/loss</li>
        <li><strong>Cumulative Cash Flow:</strong> Total over holding period</li>
        <li><strong>Cash-on-Cash Return:</strong> Annual cash flow ÷ cash invested</li>
      </ul>

      <h4>Return Analysis</h4>
      <ul>
        <li><strong>Total ROI:</strong> Total profit ÷ total investment</li>
        <li><strong>Annualized ROI:</strong> Average yearly return</li>
        <li><strong>IRR:</strong> Internal Rate of Return (time value of money)</li>
        <li><strong>Equity Multiple:</strong> Total return ÷ invested capital</li>
      </ul>

      <h4>Risk Metrics</h4>
      <ul>
        <li><strong>Break-Even Occupancy:</strong> Minimum occupancy to cover costs</li>
        <li><strong>Debt Coverage Ratio:</strong> NOI ÷ debt service</li>
        <li><strong>Worst-Case Cash Flow:</strong> Can you survive it?</li>
        <li><strong>Time to Break Even:</strong> Years to recover investment</li>
      </ul>

      <h3>Example Scenario Comparison</h3>
      
      <h4>Scenario A: Conservative Long-Term Hold</h4>
      <p>20% down, 30-year loan, 2% appreciation, 8% vacancy, hold 20 years
      <ul>
        <li>Total Return: $385,000 (178% ROI)</li>
        <li>Annualized Return: 8.9%</li>
        <li>Monthly Cash Flow: $175</li>
        <li>Risk: Low - positive cash flow even with high vacancy</li>
      </ul>

      <h4>Scenario B: Moderate Medium-Term</h4>
      <p>15% down, 30-year loan, 3% appreciation, 5% vacancy, hold 7 years
      <ul>
        <li>Total Return: $142,000 (189% ROI)</li>
        <li>Annualized Return: 15.2%</li>
        <li>Monthly Cash Flow: $285</li>
        <li>Risk: Moderate - depends on sustained appreciation</li>
      </ul>

      <h4>Scenario C: Aggressive Value-Add</h4>
      <p>10% down, renovate $30k, 4% appreciation, 3% vacancy, hold 3 years
      <ul>
        <li>Total Return: $89,000 (223% ROI)</li>
        <li>Annualized Return: 30.1%</li>
        <li>Monthly Cash Flow: $450</li>
        <li>Risk: High - depends on forced appreciation from renovations</li>
      </ul>

      <h3>Sensitivity Analysis</h3>
      <p>Test which variables most impact your returns:</p>

      <h4>Most Impactful Variables (Typical)</h4>
      <ol>
        <li><strong>Purchase Price:</strong> Every $10k less adds ~2-3% to ROI</li>
        <li><strong>Rent Amount:</strong> Every $100/mo more adds ~15% to cash-on-cash</li>
        <li><strong>Interest Rate:</strong> Every 1% higher reduces cash flow ~$50-75/mo</li>
        <li><strong>Vacancy Rate:</strong> Every 5% vacancy reduces returns ~8-12%</li>
        <li><strong>Appreciation Rate:</strong> Each 1% appreciation adds ~$3-5k per year equity</li>
      </ol>

      <h3>Decision Framework</h3>
      
      <h4>Green Light Criteria (Proceed)</h4>
      <ul>
        <li>Positive cash flow in all scenarios</li>
        <li>Acceptable return even in worst case (>6%)</li>
        <li>Clear path to your target ROI in base case</li>
        <li>Manageable risk exposure</li>
        <li>Multiple exit strategies available</li>
      </ul>

      <h4>Yellow Light (Proceed with Caution)</h4>
      <ul>
        <li>Negative cash flow only in worst case</li>
        <li>Acceptable returns only in best/base case</li>
        <li>Heavy reliance on appreciation</li>
        <li>Limited exit flexibility</li>
        <li>Requires perfect execution</li>
      </ul>

      <h4>Red Light (Avoid or Restructure)</h4>
      <ul>
        <li>Negative cash flow in base case</li>
        <li>Poor returns even in best case</li>
        <li>Excessive risk for potential reward</li>
        <li>Limited recovery options if things go wrong</li>
        <li>Deal only works with unrealistic assumptions</li>
      </ul>

      <h3>Common Planning Mistakes</h3>
      
      <h4>1. Overly Optimistic Assumptions</h4>
      <p>Don't assume: zero vacancy, maximum rent, minimal repairs, strong appreciation. Real estate is messy.</p>

      <h4>2. Ignoring Hidden Costs</h4>
      <p>Account for: tenant turnover, periodic major repairs, property management time, legal fees, evictions.</p>

      <h4>3. Forgetting About Taxes</h4>
      <p>Include: capital gains on sale, depreciation recapture, state taxes, loss of deductions after sale.</p>

      <h4>4. Single-Point Estimates</h4>
      <p>Use ranges, not single numbers. Model high/low for key variables.</p>

      <h4>5. Not Stress Testing</h4>
      <p>Ask: "What if I'm wrong?" Model job loss, major repair, extended vacancy, recession.</p>

      <h3>Advanced Scenario Types</h3>
      
      <h4>Monte Carlo Simulation</h4>
      <p>Run thousands of scenarios with random variables to see probability distribution of outcomes.</p>

      <h4>Sensitivity Tables</h4>
      <p>Matrix showing how combinations of two variables (price vs. rent) affect returns.</p>

      <h4>Tornado Diagrams</h4>
      <p>Visual ranking of which variables have the biggest impact on your outcome.</p>

      <h4>Scenario Trees</h4>
      <p>Branch different possible futures and decision points over time.</p>

      <h3>Integration with Other Analysis</h3>
      <p>Combine scenario planning with:</p>
      <ul>
        <li><strong>Market Research:</strong> Use local data to inform assumptions</li>
        <li><strong>Property Inspection:</strong> Adjust repair estimates based on findings</li>
        <li><strong>Due Diligence:</strong> Refine scenarios as you learn more</li>
        <li><strong>Financing Quotes:</strong> Update with actual rate offers</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Always model at least 3 scenarios (best, base, worst)</li>
        <li>Be conservative in your base case</li>
        <li>Test the impact of single variable changes</li>
        <li>Document your assumptions for each scenario</li>
        <li>Update scenarios as you get new information</li>
        <li>Share scenarios with partners or advisors</li>
        <li>Revisit scenarios annually for existing investments</li>
      </ul>

      <p><strong>Don't invest based on hope. Model multiple futures, understand your risks, and make data-driven decisions with confidence.</strong></p>
    `,
  },

  calculator: {
    fields: [
      {
        name: 'purchasePrice',
        label: 'Purchase Price',
        type: 'number',
        defaultValue: 300000,
      },
      {
        name: 'downPaymentPercent',
        label: 'Down Payment (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'interestRate',
        label: 'Interest Rate (%)',
        type: 'number',
        defaultValue: 7.0,
      },
      {
        name: 'monthlyRent',
        label: 'Monthly Rent',
        type: 'number',
        defaultValue: 2400,
      },
      {
        name: 'vacancyRate',
        label: 'Vacancy Rate (%)',
        type: 'number',
        defaultValue: 5,
      },
      {
        name: 'annualExpenses',
        label: 'Annual Operating Expenses',
        type: 'number',
        defaultValue: 6000,
      },
      {
        name: 'appreciationRate',
        label: 'Annual Appreciation Rate (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'holdingPeriod',
        label: 'Holding Period (years)',
        type: 'number',
        defaultValue: 10,
      },
      {
        name: 'scenarioType',
        label: 'Scenario Type',
        type: 'select',
        defaultValue: 'base',
        options: [
          { value: 'optimistic', label: 'Optimistic (Best Case)' },
          { value: 'base', label: 'Base Case (Most Likely)' },
          { value: 'conservative', label: 'Conservative (Worst Case)' },
          { value: 'custom', label: 'Custom Scenario' },
        ],
      },
    ],
    results: [
      { 
        label: 'Scenario Summary', 
        isCurrency: false 
      },
      { 
        label: 'Cash Flow Projection', 
        isCurrency: false 
      },
      { 
        label: 'Return on Investment', 
        isCurrency: false 
      },
      { 
        label: 'Risk Assessment', 
        isCurrency: false 
      },
    ],
    calculate: (values) => {
      const { 
        purchasePrice, 
        downPaymentPercent, 
        interestRate, 
        monthlyRent, 
        vacancyRate, 
        annualExpenses, 
        appreciationRate, 
        holdingPeriod,
        scenarioType 
      } = values;
      
      const downPayment = purchasePrice * (downPaymentPercent / 100);
      const loanAmount = purchasePrice - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = 30 * 12;
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const effectiveRent = monthlyRent * (1 - vacancyRate / 100);
      const annualRent = effectiveRent * 12;
      const annualDebtService = monthlyPayment * 12;
      const annualCashFlow = annualRent - annualExpenses - annualDebtService;
      const monthlyCashFlow = annualCashFlow / 12;
      
      const futureValue = purchasePrice * Math.pow(1 + appreciationRate / 100, holdingPeriod);
      const remainingBalance = loanAmount * (Math.pow(1 + monthlyRate, numPayments) - Math.pow(1 + monthlyRate, holdingPeriod * 12)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      const equityAtSale = futureValue - remainingBalance;
      const totalCashFlow = annualCashFlow * holdingPeriod;
      const totalReturn = equityAtSale + totalCashFlow - downPayment;
      const totalROI = (totalReturn / downPayment) * 100;
      const annualizedROI = (Math.pow(1 + totalROI / 100, 1 / holdingPeriod) - 1) * 100;
      const cashOnCash = (annualCashFlow / downPayment) * 100;

      let scenarioDesc = '';
      if (scenarioType === 'optimistic') {
        scenarioDesc = 'Best case with strong market performance';
      } else if (scenarioType === 'conservative') {
        scenarioDesc = 'Worst case with challenging conditions';
      } else if (scenarioType === 'base') {
        scenarioDesc = 'Most likely outcome based on current trends';
      } else {
        scenarioDesc = 'Custom scenario with your specific assumptions';
      }

      return [
        { 
          label: 'Scenario Summary', 
          value: `📊 ${scenarioType.toUpperCase()} SCENARIO
${scenarioDesc}

💰 Total Investment: $${downPayment.toLocaleString()}
🏠 Property Value: $${purchasePrice.toLocaleString()} → $${futureValue.toLocaleString()}
📅 Holding Period: ${holdingPeriod} years
📈 Total Projected Return: $${totalReturn.toLocaleString()}

Key Assumptions:
• ${appreciationRate}% annual appreciation
• ${vacancyRate}% vacancy rate
• ${interestRate}% interest rate
• $${monthlyRent.toLocaleString()}/mo rent
• $${(annualExpenses/12).toLocaleString()}/mo expenses`, 
          isCurrency: false 
        },
        { 
          label: 'Cash Flow Projection', 
          value: `💵 CASH FLOW ANALYSIS

Monthly Cash Flow: $${monthlyCashFlow.toLocaleString()}
${monthlyCashFlow > 0 ? '✅ Positive cash flow' : '❌ Negative cash flow'}

Annual Breakdown:
• Rental Income: $${annualRent.toLocaleString()}
• Operating Expenses: -$${annualExpenses.toLocaleString()}
• Debt Service: -$${annualDebtService.toLocaleString()}
• Net Annual Cash Flow: $${annualCashFlow.toLocaleString()}

${holdingPeriod}-Year Totals:
• Total Cash Flow: $${totalCashFlow.toLocaleString()}
• Equity Buildup: $${(equityAtSale - downPayment).toLocaleString()}
• Total Profit: $${totalReturn.toLocaleString()}`, 
          isCurrency: false 
        },
        { 
          label: 'Return on Investment', 
          value: `📈 RETURN METRICS

Cash-on-Cash Return: ${cashOnCash.toFixed(2)}%
${cashOnCash > 8 ? '✅ Strong annual return' : cashOnCash > 5 ? '✓ Acceptable return' : '⚠️ Low return'}

Total ROI: ${totalROI.toFixed(1)}%
Annualized ROI: ${annualizedROI.toFixed(2)}%

Equity Position at Year ${holdingPeriod}:
• Property Value: $${futureValue.toLocaleString()}
• Remaining Loan: $${remainingBalance.toLocaleString()}
• Total Equity: $${equityAtSale.toLocaleString()}

Compared to S&P 500 (~10% annually):
${annualizedROI > 10 ? '✅ Outperforming stock market' : annualizedROI > 7 ? '✓ Competitive returns' : '⚠️ Consider stock alternatives'}`, 
          isCurrency: false 
        },
        { 
          label: 'Risk Assessment', 
          value: `⚠️ RISK ANALYSIS

Scenario Type: ${scenarioType.toUpperCase()}

Break-Even Analysis:
• Break-Even Rent: $${((annualDebtService + annualExpenses)/12/(1-vacancyRate/100)).toLocaleString()}/mo
• Current Rent Buffer: ${((monthlyRent - (annualDebtService + annualExpenses)/12/(1-vacancyRate/100)) / monthlyRent * 100).toFixed(1)}%

Sensitivity Warnings:
${cashOnCash < 5 ? '⚠️ Low cash-on-cash return leaves little margin for error\n' : ''}${monthlyCashFlow < 200 ? '⚠️ Thin monthly cash flow vulnerable to unexpected costs\n' : ''}${vacancyRate < 5 ? '⚠️ Low vacancy assumption may be optimistic\n' : ''}${appreciationRate > 4 ? '⚠️ High appreciation assumption carries risk\n' : ''}
${monthlyCashFlow > 0 && cashOnCash > 6 && totalROI > 100 ? '✅ STRONG SCENARIO - Positive cash flow with good returns\n' : ''}${monthlyCashFlow > 0 && totalROI > 50 ? '✓ ACCEPTABLE SCENARIO - Viable investment with managed risk\n' : ''}${monthlyCashFlow < 0 || totalROI < 30 ? '❌ WEAK SCENARIO - Consider passing or restructuring\n' : ''}
💡 Recommendation:
${scenarioType === 'base' ? 'Create OPTIMISTIC and CONSERVATIVE scenarios to see full range of outcomes' : 'Compare this to BASE CASE scenario to understand best/worst possibilities'}`, 
          isCurrency: false 
        },
      ];
    },
  },
};
