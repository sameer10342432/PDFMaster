import { Calculator } from '@/types/calculators';
import { Home } from 'lucide-react';

export const usdaLoanEligibilityChecker: Calculator = {
  title: 'USDA Loan Eligibility Checker',
  description: 'Check your eligibility for USDA rural development home loans based on income, location, and property requirements.',
  icon: Home,
  category: 'Basic Calculators',
  slug: 'usda-loan-eligibility-checker',
  metaTitle: 'USDA Loan Eligibility Calculator | Check Rural Home Loan Qualification',
  metaDescription: 'Determine if you qualify for a USDA rural development loan with our eligibility checker. Verify income limits, property location requirements, and credit qualifications for 0% down financing.',
  
  article: {
    introduction: `
      <p>USDA loans offer one of the best home financing options available, providing 100% financing with no down payment required for eligible rural and suburban homebuyers. Our USDA Loan Eligibility Checker helps you determine if you qualify based on income limits, property location, household size, and credit requirements.</p>
      
      <p>Understanding USDA loan eligibility can open the door to homeownership with minimal upfront costs and competitive interest rates.</p>
    `,
    
    sections: [
      {
        title: 'What is a USDA Loan?',
        content: `
          <p>USDA loans are mortgages backed by the U.S. Department of Agriculture's Rural Development program. They're designed to promote homeownership in rural and suburban areas. Key benefits include:</p>
          
          <ul>
            <li><strong>100% Financing:</strong> No down payment required</li>
            <li><strong>Low Interest Rates:</strong> Competitive rates, often lower than conventional loans</li>
            <li><strong>Flexible Credit Requirements:</strong> More lenient than conventional loans</li>
            <li><strong>Low Mortgage Insurance:</strong> Lower insurance premiums than FHA loans</li>
            <li><strong>Seller Concessions:</strong> Seller can pay up to 6% of sale price toward closing costs</li>
            <li><strong>Gift Funds Allowed:</strong> Down payment assistance and gifts permitted</li>
          </ul>
        `
      },
      {
        title: 'Income Eligibility Requirements',
        content: `
          <p>USDA loans have specific income limits that vary by county and household size. Your household income must not exceed 115% of the area median income (AMI).</p>
          
          <h3>2024 Income Limits (Examples)</h3>
          <ul>
            <li><strong>Family of 1-4:</strong> Typically $90,300 - $110,650 (varies by location)</li>
            <li><strong>Family of 5-8:</strong> Typically $119,200 - $146,100 (varies by location)</li>
            <li><strong>Additional Member:</strong> Add approximately $8,950 per person</li>
          </ul>
          
          <h3>Income Calculation</h3>
          <p>USDA considers all adult household income, including:</p>
          <ul>
            <li>Wages and salaries from all adult household members</li>
            <li>Self-employment income</li>
            <li>Social Security and retirement income</li>
            <li>Child support and alimony</li>
            <li>Investment and dividend income</li>
          </ul>
          
          <p><strong>Note:</strong> Children's income is typically not counted unless they're working full-time.</p>
        `
      },
      {
        title: 'Property Location Requirements',
        content: `
          <p>The property must be located in a USDA-eligible rural area. However, "rural" is defined broadly and includes many suburban areas.</p>
          
          <h3>Eligible Areas Include:</h3>
          <ul>
            <li>Communities with populations under 35,000</li>
            <li>Rural areas not within a metropolitan area</li>
            <li>Many suburban areas on the outskirts of major cities</li>
            <li>Approximately 97% of U.S. geographic area</li>
          </ul>
          
          <h3>How to Check Property Eligibility:</h3>
          <p>Use the USDA's online property eligibility map at eligibility.sc.egov.usda.gov to verify if a specific address qualifies. Enter the property address to get instant results.</p>
          
          <p><strong>Tip:</strong> Many homes in areas you might not consider "rural" actually qualify, including properties in small towns and suburban developments.</p>
        `
      },
      {
        title: 'Credit Score Requirements',
        content: `
          <h3>Minimum Credit Scores</h3>
          <ul>
            <li><strong>Automated Approval:</strong> 640+ credit score recommended</li>
            <li><strong>Manual Underwriting:</strong> Available for scores between 580-639</li>
            <li><strong>Below 580:</strong> Possible but requires exceptional compensating factors</li>
          </ul>
          
          <h3>Credit History Requirements</h3>
          <p>Beyond credit scores, USDA examines:</p>
          <ul>
            <li>No bankruptcies in the past 3 years</li>
            <li>No foreclosures in the past 3 years</li>
            <li>No collections or charge-offs in the past 12 months</li>
            <li>Consistent payment history on current obligations</li>
            <li>Debt-to-income ratio typically below 41%</li>
          </ul>
        `
      },
      {
        title: 'Property Requirements',
        content: `
          <p>The property must meet USDA standards for safety, security, and soundness:</p>
          
          <h3>Eligible Property Types</h3>
          <ul>
            <li>Single-family detached homes</li>
            <li>Condominiums (if USDA-approved)</li>
            <li>Townhomes and PUDs</li>
            <li>Manufactured homes (if on permanent foundation)</li>
            <li>New construction homes</li>
          </ul>
          
          <h3>Property Must:</h3>
          <ul>
            <li>Be the borrower's primary residence</li>
            <li>Be in move-in ready condition</li>
            <li>Have adequate and safe water supply</li>
            <li>Have proper sewage disposal</li>
            <li>Have adequate heating system</li>
            <li>Have safe and structurally sound roof</li>
            <li>Be accessible by all-weather road</li>
            <li>Have clear, marketable title</li>
          </ul>
          
          <h3>Not Eligible:</h3>
          <ul>
            <li>Investment properties</li>
            <li>Vacation homes or second homes</li>
            <li>Income-producing properties</li>
            <li>Properties with in-ground swimming pools (in some areas)</li>
          </ul>
        `
      },
      {
        title: 'USDA Loan Costs and Fees',
        content: `
          <h3>Upfront Guarantee Fee</h3>
          <p>1% of the loan amount, can be rolled into the mortgage</p>
          
          <h3>Annual Fee</h3>
          <p>0.35% of the outstanding loan balance, divided into monthly payments</p>
          
          <h3>Comparison with Other Loan Types</h3>
          <table>
            <tr>
              <th>Feature</th>
              <th>USDA</th>
              <th>FHA</th>
              <th>Conventional</th>
            </tr>
            <tr>
              <td>Down Payment</td>
              <td>0%</td>
              <td>3.5%</td>
              <td>3-20%</td>
            </tr>
            <tr>
              <td>Upfront Fee</td>
              <td>1%</td>
              <td>1.75%</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Annual Insurance</td>
              <td>0.35%</td>
              <td>0.55%-0.85%</td>
              <td>0.5%-1.5% (if <20% down)</td>
            </tr>
          </table>
        `
      },
      {
        title: 'How to Use This Eligibility Checker',
        content: `
          <p>To check your USDA loan eligibility:</p>
          
          <ol>
            <li><strong>Enter Household Income:</strong> Include all adult income sources</li>
            <li><strong>Select County/State:</strong> Choose your property location</li>
            <li><strong>Household Size:</strong> Number of people living in the home</li>
            <li><strong>Credit Score:</strong> Your current credit score</li>
            <li><strong>Property Address (Optional):</strong> To verify location eligibility</li>
            <li><strong>Review Results:</strong> See if you meet income, location, and credit requirements</li>
          </ol>
          
          <p>The checker will show you:</p>
          <ul>
            <li>Whether you meet income limits for your area</li>
            <li>If your property location is USDA-eligible</li>
            <li>Credit score qualification status</li>
            <li>Estimated maximum loan amount</li>
            <li>Next steps to apply</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'What is considered "rural" for USDA loans?',
        answer: 'USDA defines rural as areas with populations under 35,000. This includes many suburban areas and small towns. Approximately 97% of U.S. land area qualifies. Use the USDA eligibility map to check specific addresses.'
      },
      {
        question: 'Can I use a USDA loan to build a home?',
        answer: 'Yes, USDA offers construction loans through the Single Family Housing Construction Loan program. You can finance both the land purchase and construction costs with one loan.'
      },
      {
        question: 'Do I have to be a first-time homebuyer?',
        answer: 'No, USDA loans are available to both first-time and repeat homebuyers. However, you cannot own another adequate dwelling, and the USDA property must be your primary residence.'
      },
      {
        question: 'How long does USDA loan approval take?',
        answer: 'Initial lender approval takes 1-2 weeks. USDA final approval (after conditional approval) typically takes 2-7 days. Total timeline from application to closing averages 30-45 days.'
      },
      {
        question: 'Can I refinance a USDA loan?',
        answer: 'Yes, USDA offers streamlined refinancing options for existing USDA borrowers, as well as standard refinancing. You can refinance into a conventional loan at any time without penalty.'
      }
    ]
  }
};
