import { Calculator } from '@/types/calculators';
import { DollarSign } from 'lucide-react';

export const fhaLoanLimitFinder: Calculator = {
  title: 'FHA Loan Limit Finder',
  description: 'Find current FHA loan limits for your county and property type to determine maximum borrowing capacity.',
  icon: DollarSign,
  category: 'Basic Calculators',
  slug: 'fha-loan-limit-finder',
  metaTitle: 'FHA Loan Limit Calculator 2024 | Find Maximum FHA Loan Amounts by County',
  metaDescription: 'Discover FHA loan limits for your area with our 2024 loan limit finder. Check maximum borrowing amounts for single-family homes, multi-unit properties, and high-cost areas.',
  
  article: {
    introduction: `
      <p>FHA loan limits determine the maximum amount you can borrow with an FHA-insured mortgage. These limits vary by county and property type, adjusting annually based on housing market conditions. Our FHA Loan Limit Finder helps you quickly identify the maximum loan amount available in your area.</p>
      
      <p>Understanding FHA loan limits is crucial for homebuyers planning their purchase, especially in high-cost areas where limits can significantly exceed the national baseline.</p>
    `,
    
    sections: [
      {
        title: 'Understanding FHA Loan Limits',
        content: `
          <p>FHA loan limits are the maximum mortgage amounts that can be insured by the Federal Housing Administration. These limits are set annually and vary based on:</p>
          
          <ul>
            <li><strong>Geographic Location:</strong> County-specific limits based on local median home prices</li>
            <li><strong>Property Type:</strong> Different limits for 1, 2, 3, and 4-unit properties</li>
            <li><strong>Cost Area:</strong> Low-cost, standard, and high-cost area designations</li>
          </ul>
          
          <h3>2024 FHA Loan Limits Overview</h3>
          <p><strong>Floor (Low-Cost Areas):</strong> $498,257 (single-family)</p>
          <p><strong>Standard Limit:</strong> $498,257 - $766,550 (varies by county)</p>
          <p><strong>Ceiling (High-Cost Areas):</strong> $1,149,825 (single-family)</p>
          
          <p>These limits are indexed to 115% of the median home price in each area, with a national floor and ceiling.</p>
        `
      },
      {
        title: 'FHA Limits by Property Type (2024)',
        content: `
          <h3>Low-Cost Area Limits</h3>
          <ul>
            <li><strong>1-Unit:</strong> $498,257</li>
            <li><strong>2-Unit:</strong> $638,100</li>
            <li><strong>3-Unit:</strong> $771,400</li>
            <li><strong>4-Unit:</strong> $958,350</li>
          </ul>
          
          <h3>High-Cost Area Limits (Maximum)</h3>
          <ul>
            <li><strong>1-Unit:</strong> $1,149,825</li>
            <li><strong>2-Unit:</strong> $1,472,250</li>
            <li><strong>3-Unit:</strong> $1,779,525</li>
            <li><strong>4-Unit:</strong> $2,211,600</li>
          </ul>
          
          <h3>Most County Limits</h3>
          <p>Most U.S. counties fall between these floor and ceiling limits, with the exact amount determined by local housing market conditions and median home prices.</p>
        `
      },
      {
        title: 'High-Cost Areas',
        content: `
          <p>High-cost areas have significantly higher FHA loan limits due to elevated local housing costs. Common high-cost areas include:</p>
          
          <h3>California High-Cost Counties</h3>
          <ul>
            <li>Los Angeles County: $1,149,825</li>
            <li>San Francisco County: $1,149,825</li>
            <li>Orange County: $1,149,825</li>
            <li>San Diego County: $1,149,825</li>
            <li>Santa Clara County: $1,149,825</li>
          </ul>
          
          <h3>Other High-Cost Markets</h3>
          <ul>
            <li>New York, NY (Manhattan, Brooklyn, Queens): $1,149,825</li>
            <li>Washington, DC: $1,089,300</li>
            <li>Seattle, WA (King County): $1,089,300</li>
            <li>Boston, MA (Suffolk County): $1,089,300</li>
            <li>Denver, CO: $766,550</li>
            <li>Miami, FL: $766,550</li>
          </ul>
          
          <p><strong>Note:</strong> Limits change annually, typically announced in November for the following year.</p>
        `
      },
      {
        title: 'How FHA Loan Limits Are Determined',
        content: `
          <p>HUD (Department of Housing and Urban Development) calculates FHA loan limits annually using this methodology:</p>
          
          <h3>Calculation Process</h3>
          <ol>
            <li><strong>Median Home Price:</strong> HUD identifies the median home price for each county</li>
            <li><strong>115% Factor:</strong> The limit is set at 115% of the median price</li>
            <li><strong>Floor Application:</strong> Limits cannot go below the national floor ($498,257)</li>
            <li><strong>Ceiling Application:</strong> Limits cannot exceed the national ceiling ($1,149,825)</li>
            <li><strong>Conforming Loan Correlation:</strong> Limits are linked to conforming loan limits set by FHFA</li>
          </ol>
          
          <h3>Annual Adjustments</h3>
          <p>Limits adjust annually based on:</p>
          <ul>
            <li>Changes in national median home prices</li>
            <li>Housing Price Index (HPI) data</li>
            <li>Conforming loan limit changes</li>
            <li>Local market conditions</li>
          </ul>
        `
      },
      {
        title: 'FHA Loan Limits vs. Conforming Loan Limits',
        content: `
          <table>
            <tr>
              <th>Aspect</th>
              <th>FHA Limits</th>
              <th>Conforming Limits</th>
            </tr>
            <tr>
              <td>2024 Base Limit</td>
              <td>$498,257</td>
              <td>$766,550</td>
            </tr>
            <tr>
              <td>High-Cost Max</td>
              <td>$1,149,825</td>
              <td>$1,149,825</td>
            </tr>
            <tr>
              <td>Down Payment</td>
              <td>3.5% minimum</td>
              <td>3-20% typical</td>
            </tr>
            <tr>
              <td>Credit Score</td>
              <td>580+ (500-579 with 10% down)</td>
              <td>620+ typically</td>
            </tr>
            <tr>
              <td>Mortgage Insurance</td>
              <td>Required (1.75% upfront + annual)</td>
              <td>Required if <20% down (PMI)</td>
            </tr>
          </table>
          
          <p><strong>Key Difference:</strong> FHA limits in high-cost areas match conforming limits at the ceiling, but FHA's base floor is lower, making FHA more restrictive in standard-cost areas.</p>
        `
      },
      {
        title: 'What If You Need More Than the FHA Limit?',
        content: `
          <p>If the property price exceeds FHA limits in your county, you have several options:</p>
          
          <h3>1. Make a Larger Down Payment</h3>
          <p>You can purchase a home above the FHA limit by increasing your down payment. The FHA loan covers up to the limit, and you pay the difference.</p>
          <p><strong>Example:</strong> Home price $600,000, FHA limit $500,000<br/>
          FHA loan: $500,000 | Your down payment: $100,000 (16.7%)</p>
          
          <h3>2. Consider a Conventional Loan</h3>
          <p>Conventional loans often have higher limits ($766,550 baseline, $1,149,825 high-cost) and may be a better fit for higher-priced homes.</p>
          
          <h3>3. Look for Properties Within Limit</h3>
          <p>Adjust your home search to properties priced within your county's FHA limit to maximize FHA benefits.</p>
          
          <h3>4. Check Neighboring Counties</h3>
          <p>Adjacent counties may have different limits. A nearby area might have a higher limit that accommodates your price range.</p>
          
          <h3>5. Jumbo Loan</h3>
          <p>For properties exceeding conforming limits, jumbo loans are available but typically require:</p>
          <ul>
            <li>20% down payment minimum</li>
            <li>Excellent credit (700+)</li>
            <li>Lower debt-to-income ratios</li>
            <li>Substantial cash reserves</li>
          </ul>
        `
      },
      {
        title: 'How to Use This Loan Limit Finder',
        content: `
          <p>To find FHA loan limits for your area:</p>
          
          <ol>
            <li><strong>Select Your State:</strong> Choose from the dropdown menu</li>
            <li><strong>Select Your County:</strong> Pick the county where you're buying</li>
            <li><strong>Property Type:</strong> Select 1, 2, 3, or 4-unit property</li>
            <li><strong>View Results:</strong> See your county's FHA loan limit</li>
            <li><strong>Compare:</strong> View limits for neighboring counties</li>
            <li><strong>Calculate Affordability:</strong> Use the limit to estimate purchasing power</li>
          </ol>
          
          <h3>Understanding Your Results</h3>
          <p>The calculator shows:</p>
          <ul>
            <li>Maximum FHA loan amount for your property type</li>
            <li>Minimum down payment required (3.5% or 10%)</li>
            <li>Maximum purchase price with minimum down payment</li>
            <li>Whether your county is designated high-cost</li>
            <li>Historical limit changes for your county</li>
          </ul>
        `
      }
    ],
    
    faqs: [
      {
        question: 'Do FHA loan limits change every year?',
        answer: 'Yes, FHA loan limits are typically adjusted annually, usually announced in November for the following year. Limits can increase based on housing market appreciation but rarely decrease.'
      },
      {
        question: 'Can I get an FHA loan above the county limit?',
        answer: 'No, the FHA will not insure loans above the county limit. However, you can purchase a more expensive home by making a larger down payment to cover the difference, or consider a conventional loan with higher limits.'
      },
      {
        question: 'Are FHA loan limits the same as FHA loan approval amounts?',
        answer: 'No. The loan limit is the maximum FHA will insure. Your actual approval amount depends on your income, credit score, debt-to-income ratio, and other qualifying factors. You may be approved for less than the limit.'
      },
      {
        question: 'Do different lenders have different FHA limits?',
        answer: 'No, FHA limits are set by HUD and apply uniformly across all FHA-approved lenders. However, individual lenders may have their own maximum loan amounts or "overlays" that are more restrictive.'
      },
      {
        question: 'Can I use an FHA loan for a multi-family property?',
        answer: 'Yes, FHA loans can finance properties up to 4 units, as long as you live in one of the units as your primary residence. Multi-unit properties have higher loan limits than single-family homes.'
      }
    ]
  }
};
