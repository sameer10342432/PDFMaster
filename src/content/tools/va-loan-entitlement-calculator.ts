import { Calculator } from '@/types/calculators';
import { Shield } from 'lucide-react';

export const vaLoanEntitlementCalculator: Calculator = {
  title: 'VA Loan Entitlement Calculator',
  description: 'Calculate your available VA loan entitlement and determine maximum purchase price with no down payment.',
  icon: Shield,
  category: 'Basic Calculators',
  slug: 'va-loan-entitlement-calculator',
  metaTitle: 'VA Loan Entitlement Calculator | Calculate Your VA Home Loan Benefits',
  metaDescription: 'Determine your VA loan entitlement and borrowing power with our calculator. Check remaining entitlement, maximum loan amounts, and eligibility for multiple VA loans.',
  
  article: {
    introduction: `
      <p>VA loan entitlement is the amount the Department of Veterans Affairs will guarantee on your home loan, which determines how much you can borrow with no down payment. Our VA Loan Entitlement Calculator helps veterans and active military members understand their available entitlement, remaining benefits after previous VA loans, and maximum purchase price without a down payment.</p>
      
      <p>Understanding your entitlement is crucial for planning your home purchase and knowing if you can use your VA benefits multiple times.</p>
    `,
    
    sections: [
      {
        title: 'What is VA Loan Entitlement?',
        content: `
          <p>VA loan entitlement is the amount the VA guarantees to the lender if you default on your loan. This guarantee allows lenders to offer competitive terms with no down payment. There are two levels of entitlement:</p>
          
          <h3>Basic Entitlement</h3>
          <p><strong>$36,000</strong> - This is the minimum guarantee available to all eligible veterans.</p>
          
          <h3>Bonus Entitlement</h3>
          <p>Additional entitlement beyond the basic $36,000, calculated as:</p>
          <ul>
            <li>25% of the county loan limit</li>
            <li>Minus the $36,000 basic entitlement already used</li>
            <li>In most counties: Up to $115,638 in additional entitlement</li>
            <li>In high-cost counties: Up to $251,206 in additional entitlement</li>
          </ul>
          
          <h3>Total Available Entitlement</h3>
          <p><strong>Standard Counties:</strong> $151,638 ($36,000 + $115,638)</p>
          <p><strong>High-Cost Counties:</strong> $287,206 ($36,000 + $251,206)</p>
        `
      },
      {
        title: 'How Entitlement Affects Loan Amount',
        content: `
          <p>Your entitlement directly impacts how much you can borrow with no down payment:</p>
          
          <h3>No Down Payment Purchase Formula</h3>
          <p>Maximum loan with $0 down = Total Entitlement × 4</p>
          
          <h3>Examples by County Type</h3>
          <p><strong>Standard County Example:</strong></p>
          <ul>
            <li>Total Entitlement: $151,638</li>
            <li>Maximum No-Down Loan: $606,552 (4 × $151,638)</li>
          </ul>
          
          <p><strong>High-Cost County Example (LA, San Francisco, NYC):</strong></p>
          <ul>
            <li>Total Entitlement: $287,206</li>
            <li>Maximum No-Down Loan: $1,148,824 (4 × $287,206)</li>
          </ul>
          
          <h3>Why 4x?</h3>
          <p>The VA guarantees 25% of the loan amount. Since lenders require the VA guarantee to cover 25%, your total entitlement (which is 25% of max loan) is multiplied by 4 to determine the maximum loan amount.</p>
        `
      },
      {
        title: 'Using VA Entitlement Multiple Times',
        content: `
          <p>You can use your VA loan benefits multiple times in your lifetime. Here's how it works:</p>
          
          <h3>Full Entitlement Restoration</h3>
          <p>Your entitlement is <strong>fully restored</strong> when you:</p>
          <ol>
            <li>Pay off your existing VA loan in full</li>
            <li>Sell the property or transfer it</li>
            <li>Have another eligible veteran assume the loan</li>
          </ol>
          <p>After restoration, you can use your full entitlement again for a new purchase.</p>
          
          <h3>Partial Entitlement (Second VA Loan)</h3>
          <p>You can get a second VA loan even with entitlement in use if:</p>
          <ul>
            <li>You have remaining/unused entitlement</li>
            <li>Your remaining entitlement is sufficient for the new loan</li>
            <li>The new property will be your primary residence</li>
          </ul>
          
          <h3>Example: Second VA Loan</h3>
          <p><strong>Scenario:</strong></p>
          <ul>
            <li>First VA loan: $200,000 (used $50,000 entitlement)</li>
            <li>Total entitlement available: $151,638</li>
            <li>Remaining entitlement: $101,638 ($151,638 - $50,000)</li>
            <li>Second loan maximum (0% down): $406,552 ($101,638 × 4)</li>
          </ul>
          
          <p>If you want to buy a more expensive home, you can make a down payment to cover the difference.</p>
        `
      },
      {
        title: 'Entitlement by County Loan Limits (2024)',
        content: `
          <p>Bonus entitlement varies by county based on conforming loan limits:</p>
          
          <h3>Standard Counties (Most U.S. Counties)</h3>
          <ul>
            <li><strong>County Loan Limit:</strong> $766,550</li>
            <li><strong>Bonus Entitlement:</strong> $115,638</li>
            <li><strong>Total Entitlement:</strong> $151,638</li>
            <li><strong>Max Loan (0% down):</strong> $606,552</li>
          </ul>
          
          <h3>High-Cost Counties</h3>
          <ul>
            <li><strong>County Loan Limit:</strong> $1,149,825</li>
            <li><strong>Bonus Entitlement:</strong> $251,206</li>
            <li><strong>Total Entitlement:</strong> $287,206</li>
            <li><strong>Max Loan (0% down):</strong> $1,148,824</li>
          </ul>
          
          <h3>Common High-Cost Counties</h3>
          <ul>
            <li>Los Angeles County, CA</li>
            <li>San Francisco Bay Area, CA</li>
            <li>Orange County, CA</li>
            <li>San Diego County, CA</li>
            <li>New York County (Manhattan), NY</li>
            <li>King County (Seattle), WA</li>
            <li>Washington, DC</li>
            <li>Boston, MA (Suffolk County)</li>
          </ul>
        `
      },
      {
        title: 'Calculating Remaining Entitlement',
        content: `
          <p>If you have an existing VA loan, calculate remaining entitlement:</p>
          
          <h3>Step-by-Step Calculation</h3>
          <ol>
            <li><strong>Find Current Loan Balance:</strong> Check your mortgage statement</li>
            <li><strong>Calculate Entitlement Used:</strong> Current balance ÷ 4 = Entitlement used</li>
            <li><strong>Determine Total Available:</strong> Based on your county ($151,638 or higher)</li>
            <li><strong>Calculate Remaining:</strong> Total available - Entitlement used</li>
            <li><strong>Find Max New Loan:</strong> Remaining entitlement × 4</li>
          </ol>
          
          <h3>Real Example</h3>
          <p><strong>Situation:</strong> Veteran in standard county with existing VA loan</p>
          <ul>
            <li>Current VA loan balance: $180,000</li>
            <li>Entitlement used: $180,000 ÷ 4 = $45,000</li>
            <li>Total entitlement available: $151,638</li>
            <li>Remaining entitlement: $151,638 - $45,000 = $106,638</li>
            <li>New max loan (0% down): $106,638 × 4 = $426,552</li>
          </ul>
          
          <p>This veteran can purchase a home up to $426,552 with no down payment while keeping the existing VA loan.</p>
        `
      },
      {
        title: 'Exceeding Your Entitlement',
        content: `
          <p>What if you want to buy a home that exceeds your available entitlement?</p>
          
          <h3>Option 1: Make a Down Payment</h3>
          <p>You can exceed your entitlement by making a down payment equal to 25% of the amount over your max no-down purchase price.</p>
          
          <p><strong>Example:</strong></p>
          <ul>
            <li>Max no-down loan: $600,000</li>
            <li>Desired home price: $700,000</li>
            <li>Excess amount: $100,000</li>
            <li>Required down payment: $25,000 (25% of $100,000)</li>
          </ul>
          
          <h3>Option 2: Restore Full Entitlement</h3>
          <p>Sell your current home and pay off the existing VA loan to restore 100% of your entitlement.</p>
          
          <h3>Option 3: Refinance Existing Loan</h3>
          <p>Refinance your current VA loan into a conventional loan to free up your entitlement.</p>
        `
      },
      {
        title: 'How to Use This Calculator',
        content: `
          <p>To calculate your VA loan entitlement and borrowing power:</p>
          
          <ol>
            <li><strong>Select Your County:</strong> Choose your state and county</li>
            <li><strong>Current VA Loan Status:</strong> Indicate if you have an existing VA loan</li>
            <li><strong>Current Loan Balance:</strong> Enter balance if you have an existing VA loan</li>
            <li><strong>Review Results:</strong> See your available entitlement and maximum loan amount</li>
            <li><strong>Scenario Planning:</strong> Test different purchase prices to see down payment requirements</li>
          </ol>
          
          <h3>Calculator Results Include</h3>
          <ul>
            <li>Total entitlement available in your county</li>
            <li>Entitlement currently in use (if applicable)</li>
            <li>Remaining available entitlement</li>
            <li>Maximum purchase price with $0 down</li>
            <li>Down payment required for higher purchase prices</li>
            <li>Comparison with conventional loan requirements</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'Can I get my entitlement back if I sold my home but still have a VA loan?',
        answer: 'No, your entitlement is tied to the loan, not the property. You must pay off the VA loan completely to restore your entitlement, even if you no longer own the home. Refinancing to a conventional loan or having someone assume your VA loan can free up your entitlement.'
      },
      {
        question: 'Is there a lifetime limit on VA loan usage?',
        answer: 'No, there is no lifetime limit. You can use your VA loan benefits multiple times as long as you meet eligibility requirements and have sufficient entitlement available. Your entitlement restores fully each time you pay off a VA loan.'
      },
      {
        question: 'What happens to my entitlement if I foreclosed on a VA loan?',
        answer: 'Your entitlement remains tied up until the VA is repaid for its losses on the foreclosure. You may regain partial entitlement if the property sells for enough to cover the loss, but typically you must wait and repay the VA before restoring full entitlement.'
      },
      {
        question: 'Can my spouse use my VA entitlement?',
        answer: 'If you're an eligible veteran, your spouse benefits from your entitlement when you purchase together. However, a non-veteran spouse cannot use VA entitlement on their own. Surviving spouses of veterans who died in service or from service-connected disabilities may have separate VA loan eligibility.'
      },
      {
        question: 'Does a VA loan assumption affect my entitlement?',
        answer: 'If a non-veteran assumes your VA loan, your entitlement remains tied to that loan until it\'s paid off. If an eligible veteran assumes your loan and substitutes their entitlement for yours, your entitlement is fully restored.'
      }
    ]
  }
};
