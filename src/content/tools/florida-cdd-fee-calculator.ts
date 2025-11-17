import { CalculatorContent } from '@/types';

export const FLORIDA_CDD_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Florida CDD Fee Calculator',
  description: 'Calculate Community Development District (CDD) fees for Florida properties - bonds, assessments, and annual costs',
  slug: 'florida-cdd-fee-calculator',
  icon: '🏘️',
  category: 'Fee Calculators',
  article: {
    title: 'Understanding Florida Community Development District (CDD) Fees',
    content: `
    <h2>Florida CDD Fee Complete Guide</h2>
    <p>Community Development Districts (CDDs) are special-purpose government units that finance infrastructure in new residential developments across Florida. CDD fees can add $2,000-$5,000+ annually to your housing costs, making them a critical factor when buying a home in Florida.</p>
    
    <h3>What is a Community Development District (CDD)?</h3>
    <p>A CDD is a special taxing district authorized under Florida law (Chapter 190) that:</p>
    <ul>
      <li><strong>Finances Infrastructure:</strong> Roads, water/sewer, drainage, amenities</li>
      <li><strong>Issues Bonds:</strong> Developer sells bonds to raise infrastructure capital</li>
      <li><strong>Homeowners Pay Back:</strong> Property owners repay bonds through annual assessments</li>
      <li><strong>30-Year Term:</strong> Most CDD bonds run 25-40 years</li>
      <li><strong>Governed by Board:</strong> Initially developer-controlled, transitions to homeowner control</li>
    </ul>
    
    <h3>CDD vs. HOA Fees</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">CDD Fee</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">HOA Fee</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">What It Covers</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Infrastructure debt + public services</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Community amenities + maintenance</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Legal Status</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Government tax assessment</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Private contract</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Payment</td>
        <td style="border: 1px solid #ddd; padding: 8px;">On property tax bill</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Separate invoice</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Duration</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Usually 25-40 years</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Perpetual (as long as you own)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax Deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Yes (as property tax)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">No</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Non-Payment Consequence</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tax lien/foreclosure</td>
        <td style="border: 1px solid #ddd; padding: 8px;">HOA lien/foreclosure</td>
      </tr>
    </table>
    
    <h3>Two Types of CDD Assessments</h3>
    <p>Understanding the difference between bond debt and O&M is critical:</p>
    <ul>
      <li><strong>Debt Service Assessment:</strong> Repayment of infrastructure bonds
        <ul>
          <li>Fixed amount per year based on bond schedule</li>
          <li>Typically $1,500-$4,000 annually</li>
          <li>Ends after 25-40 years when bonds paid off</li>
          <li>Cannot be prepaid early in most cases</li>
        </ul>
      </li>
      <li><strong>Operations & Maintenance (O&M):</strong> Ongoing services
        <ul>
          <li>Landscaping, lighting, common area maintenance</li>
          <li>Typically $300-$1,500 annually</li>
          <li>Continues perpetually</li>
          <li>Can increase annually like property taxes</li>
        </ul>
      </li>
    </ul>
    
    <h3>Average CDD Fees by Florida Region</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Region</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical Annual CDD</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Common Developments</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Central Florida (Orlando area)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800 - $4,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Reunion, Champions Gate, Celebration</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Tampa Bay Area</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,500 - $3,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Fishhawk Ranch, Lakewood Ranch</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Southwest Florida (Naples, Fort Myers)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,000 - $5,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Ave Maria, Babcock Ranch</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Jacksonville Area</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200 - $3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Nocatee, Durbin Crossing</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Southeast Florida (Palm Beach, Broward)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800 - $4,500</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Tradition, Westlake</td>
      </tr>
    </table>
    
    <h3>What CDD Fees Fund</h3>
    <p>CDD assessments typically finance and maintain:</p>
    <ul>
      <li><strong>Infrastructure:</strong> Roads, water lines, sewer systems, drainage</li>
      <li><strong>Stormwater Management:</strong> Retention ponds, drainage systems</li>
      <li><strong>Landscaping:</strong> Common areas, medians, entry features</li>
      <li><strong>Amenities:</strong> Recreation centers, pools, parks, fitness centers</li>
      <li><strong>Lighting:</strong> Street lights, pathway lighting</li>
      <li><strong>Security:</strong> Gated entry systems (in some communities)</li>
    </ul>
    
    <h3>CDD Impact on Property Value</h3>
    <p>How CDDs affect Florida home values:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Factor</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Impact on Value</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">High CDD fees ($3,000+/year)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">May reduce value 5-10% vs. similar non-CDD homes</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">CDD nearing payoff (5-10 years left)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Premium vs. new CDDs (buyers see end in sight)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Well-maintained CDD amenities</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Can add 5-15% value vs. older communities</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Resort-style CDD amenities</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Justifies higher fees, attracts buyers</td>
      </tr>
    </table>
    
    <h3>Finding Out CDD Fees Before Buying</h3>
    <p>How to research CDD fees on a property:</p>
    <ul>
      <li><strong>MLS Listing:</strong> Should disclose annual CDD amount</li>
      <li><strong>Seller's Disclosure:</strong> Required to disclose CDD status in Florida</li>
      <li><strong>Property Appraiser Website:</strong> Search property tax records for non-ad valorem assessments</li>
      <li><strong>CDD District Website:</strong> Many districts publish budgets and assessment schedules</li>
      <li><strong>Title Search:</strong> CDD liens appear in preliminary title report</li>
      <li><strong>Ask Seller's Agent:</strong> Request last year's tax bill showing CDD breakdown</li>
    </ul>
    
    <h3>Can You Prepay CDD Fees?</h3>
    <p>Prepayment options vary by district:</p>
    <ul>
      <li><strong>Prepayment Allowed:</strong> Some CDDs allow early payoff at discounted present value</li>
      <li><strong>Typical Prepayment Cost:</strong> 80-95% of remaining balance</li>
      <li><strong>Savings:</strong> Avoid future interest payments (4-6% typically)</li>
      <li><strong>No Prepayment Penalty:</strong> Florida law prohibits prepayment penalties on CDDs</li>
      <li><strong>Process:</strong> Contact CDD manager or county tax collector</li>
      <li><strong>Limitations:</strong> Some bonds prohibit prepayment in first 10 years</li>
    </ul>
    
    <h3>CDD Fees and Mortgages</h3>
    <p>How lenders treat CDD fees:</p>
    <ul>
      <li><strong>Included in DTI:</strong> CDD fees count toward debt-to-income ratio calculations</li>
      <li><strong>Escrow Required:</strong> Most lenders require escrowing CDD fees like property taxes</li>
      <li><strong>Impact on Loan Amount:</strong> High CDDs may reduce how much you can borrow</li>
      <li><strong>FHA Limits:</strong> FHA may limit loans in communities with very high CDDs</li>
      <li><strong>Appraisal Consideration:</strong> Appraiser notes CDD fees in comparable analysis</li>
    </ul>
    
    <h3>CDD Control Transition</h3>
    <p>How CDD governance changes over time:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Phase</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Control</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Timeline</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Developer Control</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Developer appoints all board members</td>
        <td style="border: 1px solid #ddd; padding: 8px;">First 3-8 years typically</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Transition Period</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Mix of developer and homeowner-elected members</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Gradual transition</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Homeowner Control</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Resident homeowners elect all board members</td>
        <td style="border: 1px solid #ddd; padding: 8px;">After development substantially complete</td>
      </tr>
    </table>
    
    <h3>CDD Special Assessments</h3>
    <p>Beyond regular fees, CDDs can levy special assessments:</p>
    <ul>
      <li><strong>Major Repairs:</strong> Unexpected infrastructure failures (roads, drainage)</li>
      <li><strong>Additional Amenities:</strong> If residents vote to add new features</li>
      <li><strong>Emergency Situations:</strong> Hurricane damage, flood repairs</li>
      <li><strong>Typical Amount:</strong> $500-$5,000 one-time assessment</li>
      <li><strong>Voting Rights:</strong> Homeowners typically vote on non-emergency special assessments</li>
    </ul>
    
    <h3>CDD Benefits vs. Drawbacks</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Benefits</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Drawbacks</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">✓ Newer infrastructure</td>
        <td style="border: 1px solid #ddd; padding: 8px;">✗ Adds $1,500-$5,000/year housing cost</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">✓ Premium amenities</td>
        <td style="border: 1px solid #ddd; padding: 8px;">✗ Fees last 25-40 years</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">✓ Tax deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">✗ May reduce home resale value</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">✓ Professional maintenance</td>
        <td style="border: 1px solid #ddd; padding: 8px;">✗ Limited homeowner control initially</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">✓ Consistent community standards</td>
        <td style="border: 1px solid #ddd; padding: 8px;">✗ Often combined with HOA fees</td>
      </tr>
    </table>
    
    <h3>Alternatives to CDD Communities</h3>
    <p>Options for avoiding CDD fees in Florida:</p>
    <ul>
      <li><strong>Older Established Communities:</strong> Pre-2000 developments rarely have CDDs</li>
      <li><strong>Non-Amenitized Neighborhoods:</strong> Basic subdivisions without community features</li>
      <li><strong>City/County Infrastructure:</strong> Developments where municipality funded infrastructure</li>
      <li><strong>Rural Areas:</strong> Less likely to have CDDs</li>
      <li><strong>Condo Developments:</strong> May have HOA but not CDD</li>
    </ul>
    
    <h3>CDD Disclosure Requirements</h3>
    <p>Florida law requires sellers to disclose:</p>
    <ul>
      <li><strong>CDD Existence:</strong> Must inform buyer property is in a CDD</li>
      <li><strong>Assessment Amount:</strong> Provide current year CDD fees</li>
      <li><strong>CDD Documents:</strong> Disclosure of public facilities report</li>
      <li><strong>Bond Maturity:</strong> When CDD debt will be paid off</li>
      <li><strong>Failure to Disclose:</strong> Buyer may have legal recourse against seller</li>
    </ul>
    
    <h3>Notable Florida CDD Communities</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Community</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Location</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Typical CDD Fee</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">The Villages</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Central Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200-$2,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Lakewood Ranch</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Sarasota/Bradenton</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,800-$3,500</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ave Maria</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Southwest Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500-$4,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Babcock Ranch</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Charlotte County</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000-$5,500</td>
      </tr>
    </table>
    
    <h3>CDD Tax Deduction</h3>
    <p>CDD fees provide tax benefits:</p>
    <ul>
      <li><strong>Fully Deductible:</strong> CDD assessments deductible as property taxes (pre-TCJA unlimited, post-TCJA subject to $10K SALT cap)</li>
      <li><strong>Schedule A:</strong> Itemize deductions to claim CDD fees</li>
      <li><strong>Documentation:</strong> Use property tax bill showing CDD assessment</li>
      <li><strong>SALT Cap:</strong> Since 2018, state and local tax (SALT) deduction capped at $10,000 total</li>
      <li><strong>HOA Not Deductible:</strong> Unlike CDDs, HOA fees are not tax deductible</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Home Purchase Price',
        type: 'currency',
        required: true,
        placeholder: '350000',
        helpText: 'Your home purchase price or market value'
      },
      {
        name: 'region',
        label: 'Florida Region',
        type: 'select',
        required: true,
        options: [
          { value: 'centralFlorida', label: 'Central Florida (Orlando area)' },
          { value: 'tampaBay', label: 'Tampa Bay Area' },
          { value: 'southwestFlorida', label: 'Southwest Florida (Naples, Ft. Myers)' },
          { value: 'jacksonville', label: 'Jacksonville Area' },
          { value: 'southeastFlorida', label: 'Southeast Florida (Palm Beach, Broward)' },
        ],
        helpText: 'Region affects typical CDD assessment levels'
      },
      {
        name: 'cddDebtService',
        label: 'Annual CDD Debt Service',
        type: 'currency',
        required: true,
        placeholder: '2500',
        helpText: 'Annual bond debt payment (check tax bill or MLS listing)'
      },
      {
        name: 'cddOM',
        label: 'Annual CDD O&M (Operations & Maintenance)',
        type: 'currency',
        required: true,
        placeholder: '800',
        helpText: 'Annual operations and maintenance assessment'
      },
      {
        name: 'yearsRemaining',
        label: 'Years Until CDD Bond Payoff',
        type: 'number',
        required: true,
        placeholder: '25',
        helpText: 'How many years left on CDD debt (typically 20-35 years)'
      },
      {
        name: 'hoaFees',
        label: 'Monthly HOA Fees (if applicable)',
        type: 'currency',
        required: false,
        placeholder: '150',
        helpText: 'Many CDD communities also have separate HOA fees'
      }
    ],
    results: [
      {
        name: 'totalAnnualCDD',
        label: 'Total Annual CDD Fees',
        type: 'currency',
        helpText: 'Debt service + O&M combined annual cost'
      },
      {
        name: 'monthlyWithCDD',
        label: 'Monthly Cost (CDD + HOA)',
        type: 'currency',
        helpText: 'Total monthly CDD and HOA fees'
      },
      {
        name: 'lifetimeCDDCost',
        label: 'Total CDD Cost Over Remaining Term',
        type: 'currency',
        helpText: 'What you\'ll pay in CDD fees until bonds are paid off'
      },
      {
        name: 'prepaymentAmount',
        label: 'Estimated CDD Prepayment Amount',
        type: 'currency',
        helpText: 'Approximate cost to prepay CDD debt (if allowed)'
      },
      {
        name: 'annualTaxDeduction',
        label: 'Annual Tax Deduction (if itemizing)',
        type: 'currency',
        helpText: 'CDD fees are tax-deductible as property taxes'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const cddDebtService = parseFloat(inputs.cddDebtService) || 0;
      const cddOM = parseFloat(inputs.cddOM) || 0;
      const yearsRemaining = parseFloat(inputs.yearsRemaining) || 25;
      const hoaFees = parseFloat(inputs.hoaFees) || 0;

      const totalAnnualCDD = cddDebtService + cddOM;
      const monthlyWithCDD = Math.round((totalAnnualCDD / 12) + hoaFees);
      
      // Lifetime CDD cost (debt service ends, but O&M continues)
      const lifetimeCDDCost = Math.round((cddDebtService * yearsRemaining) + (cddOM * yearsRemaining));
      
      // Estimated prepayment (typically 85-90% of remaining balance)
      // Assuming 5% interest rate for calculation
      const presentValue = cddDebtService * ((1 - Math.pow(1 + 0.05, -yearsRemaining)) / 0.05);
      const prepaymentAmount = Math.round(presentValue * 0.88);
      
      const annualTaxDeduction = totalAnnualCDD;

      return {
        totalAnnualCDD: Math.round(totalAnnualCDD),
        monthlyWithCDD,
        lifetimeCDDCost,
        prepaymentAmount,
        annualTaxDeduction: Math.round(annualTaxDeduction)
      };
    }
  }
};
