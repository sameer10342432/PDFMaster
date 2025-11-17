import { CalculatorContent } from '@/types';

export const LOS_ANGELES_CA_RENT_STABILIZATION_RSO_TOOL_CONTENT: CalculatorContent = {
  title: 'Los Angeles (CA) Rent Stabilization (RSO) Tool',
  description: 'Calculate allowable rent increases under LA rent stabilization ordinance and check RSO coverage',
  slug: 'los-angeles-ca-rent-stabilization-rso-tool',
  icon: '🌴',
  category: 'Landlord Tools',
  article: {
    title: 'Los Angeles Rent Stabilization Ordinance (RSO) Guide',
    content: `
    <h2>Los Angeles Rent Stabilization Ordinance</h2>
    <p>The <strong>Los Angeles Rent Stabilization Ordinance (RSO)</strong>, enacted in 1978, limits rent increases on approximately <strong>640,000 rental units</strong> in the City of Los Angeles. Understanding RSO is essential for landlords and tenants in LA's competitive rental market.</p>
    
    <h3>Which Properties Are Covered by RSO?</h3>
    <p><strong>Covered Properties:</strong></p>
    <ul>
      <li>Buildings with <strong>2 or more units</strong></li>
      <li>Built and ready for occupancy <strong>before October 1, 1978</strong></li>
      <li>Within City of Los Angeles boundaries</li>
    </ul>
    
    <p><strong>Exempt Properties:</strong></p>
    <ul>
      <li>Single-family homes and condos</li>
      <li>Buildings constructed <strong>on or after October 1, 1978</strong></li>
      <li>Government-owned housing</li>
      <li>Properties with recorded affordability covenants</li>
      <li>Luxury units (rare - built before 1978, initial rent over threshold)</li>
    </ul>
    
    <h3>Annual Allowable Rent Increases (2024)</h3>
    <p>LA's allowable rent increase is tied to <strong>Consumer Price Index (CPI)</strong>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Effective Period</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Allowable Increase</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">July 1, 2024 - June 30, 2025</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>4.0%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">Based on CPI (capped at 8%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">July 1, 2023 - June 30, 2024</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">High inflation year</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">July 1, 2022 - June 30, 2023</td>
        <td style="border: 1px solid #ddd; padding: 8px;">4.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Post-pandemic recovery</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">July 1, 2021 - June 30, 2022</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3.0%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">COVID-19 impact</td>
      </tr>
    </table>
    <p><em>Note: Maximum allowable increase is capped at 8% annually, minimum at 3%</em></p>
    
    <h3>How the Allowable Increase is Calculated</h3>
    <p>LA Housing Department (LAHD) sets the rate annually based on:</p>
    <ul>
      <li><strong>CPI Formula:</strong> 100% of CPI for LA-Riverside-Orange County area</li>
      <li><strong>Minimum:</strong> 3% per year</li>
      <li><strong>Maximum:</strong> 8% per year</li>
      <li><strong>Effective Period:</strong> July 1 to June 30 annually</li>
    </ul>
    
    <h3>Rent Increase Timing Rules</h3>
    <p>Critical timing requirements:</p>
    <ul>
      <li><strong>12-Month Rule:</strong> At least 12 months between rent increases</li>
      <li><strong>30-Day Notice:</strong> Required for increases of 10% or less</li>
      <li><strong>60-Day Notice:</strong> Required for increases over 10%</li>
      <li><strong>Anniversary Date:</strong> Increases typically on lease anniversary or move-in date</li>
    </ul>
    
    <h3>Example: Rent Increase Calculation</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Unit Details</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Amount</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Current Monthly Rent</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$2,500</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2024-2025 Allowable Increase</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">4.0%</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Maximum Increase Amount</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$100/month</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>New Monthly Rent</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;"><strong>$2,600</strong></td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Additional Annual Revenue</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$1,200</td>
      </tr>
    </table>
    
    <h3>Additional Rent Increases Allowed</h3>
    <p>Beyond annual CPI increases, landlords can petition for:</p>
    <ul>
      <li><strong>Capital Improvements:</strong> Major building upgrades (new roof, seismic retrofit)</li>
      <li><strong>Utility Passthroughs:</strong> Documented utility cost increases</li>
      <li><strong>Increased Housing Services:</strong> Added amenities or services</li>
      <li><strong>Rehabilitation Work:</strong> Substantial renovations with permits</li>
    </ul>
    
    <h3>Capital Improvement Passthrough</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Improvement Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Passthrough Period</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Annual Cap</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Mandatory Repairs (code, safety)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Amortized over useful life</td>
        <td style="border: 1px solid #ddd; padding: 8px;">6% of gross rent</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Voluntary Improvements</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Amortized over useful life</td>
        <td style="border: 1px solid #ddd; padding: 8px;">10% of gross rent</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Utility Passthrough</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Ongoing</td>
        <td style="border: 1px solid #ddd; padding: 8px;">100% of increase</td>
      </tr>
    </table>
    
    <h3>Just Cause Eviction Protections</h3>
    <p>LA RSO requires <strong>just cause</strong> to evict RSO tenants:</p>
    <ul>
      <li><strong>At-Fault:</strong> Non-payment, lease violation, nuisance, illegal use</li>
      <li><strong>No-Fault:</strong> Owner move-in, Ellis Act, substantial rehab, demolition</li>
      <li><strong>Relocation Fees:</strong> Required for no-fault evictions</li>
    </ul>
    
    <h3>Relocation Assistance (2024)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Eviction Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Standard Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Senior/Disabled</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Owner Move-In</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,750 - $20,950</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$4,700</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ellis Act (remove from market)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,750 - $20,950</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$4,700</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Demolition / Major Rehab</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,750 - $20,950</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$4,700</td>
      </tr>
    </table>
    <p><em>Amounts vary by unit size and tenant characteristics</em></p>
    
    <h3>Vacancy Decontrol</h3>
    <p>When tenant voluntarily moves out:</p>
    <ul>
      <li>Landlord can raise rent to <strong>market rate</strong></li>
      <li>New tenant gets RSO protection once they move in</li>
      <li>Cannot evict tenant to raise rent (illegal)</li>
      <li>Cannot harass tenant to force move-out</li>
    </ul>
    
    <h3>RSO Registration Requirements</h3>
    <p>Landlords must:</p>
    <ul>
      <li><strong>Register Units:</strong> Annual registration with LAHD ($43.32/unit in 2024)</li>
      <li><strong>Provide SCEP:</strong> Summary of Combined Exemptions & Petitions to tenants</li>
      <li><strong>Maintain Records:</strong> Rent increase history, capital improvement invoices</li>
      <li><strong>Post Notices:</strong> LAHD contact info visible to tenants</li>
    </ul>
    
    <h3>Common Landlord Violations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Violation</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Penalty</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Excessive Rent Increase</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Refund + administrative fines</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Failure to Register</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000+ per unit + cannot evict</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Unlawful Eviction</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$5,000 - $10,000 + attorney fees</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Harassment</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Civil damages + criminal charges</td>
      </tr>
    </table>
    
    <h3>Tenant Rights and Resources</h3>
    <ul>
      <li><strong>LA Housing Department:</strong> 866-557-7368 (RSOUNIT)</li>
      <li><strong>Free Legal Aid:</strong> Housing Rights Center, Legal Aid Foundation</li>
      <li><strong>File Complaint:</strong> Online at housing.lacity.org</li>
      <li><strong>Rent Escrow Account:</strong> Withhold rent for uninhabitable conditions</li>
    </ul>
    
    <h3>Impact on Property Investing</h3>
    <p>For landlords and investors:</p>
    <ul>
      <li><strong>Cash Flow:</strong> Rent growth limited to 3-8% annually</li>
      <li><strong>Value:</strong> RSO properties trade at lower cap rates (7-9%)</li>
      <li><strong>Turnover Strategy:</strong> Some landlords prefer higher turnover to reset rents</li>
      <li><strong>Non-RSO Premium:</strong> Post-1978 buildings command higher prices</li>
      <li><strong>Ellis Act Risk:</strong> Can remove units from market but complex and costly</li>
    </ul>
    
    <h3>Checking RSO Status</h3>
    <p>To verify if a property is RSO-covered:</p>
    <ol>
      <li>Visit LAHD RSO Portal: housing.lacity.org</li>
      <li>Search by address</li>
      <li>Check building year and unit count</li>
      <li>Review registration status</li>
      <li>Consult property attorney if uncertain</li>
    </ol>
    `
  },
  calculator: {
    fields: [
      {
        name: 'currentRent',
        label: 'Current Monthly Rent',
        type: 'currency',
        required: true,
        placeholder: '2500',
        helpText: 'Current monthly rent amount'
      },
      {
        name: 'effectivePeriod',
        label: 'Effective Period',
        type: 'select',
        required: true,
        options: [
          { value: '2024', label: 'July 1, 2024 - June 30, 2025 (4.0%)' },
          { value: '2023', label: 'July 1, 2023 - June 30, 2024 (6.0%)' },
          { value: '2022', label: 'July 1, 2022 - June 30, 2023 (4.0%)' },
        ],
        helpText: 'RSO year runs July 1 to June 30'
      },
      {
        name: 'capitalImprovement',
        label: 'Capital Improvement Passthrough (Monthly)',
        type: 'currency',
        required: false,
        placeholder: '0',
        helpText: 'Approved capital improvement passthrough amount'
      },
      {
        name: 'utilityPassthrough',
        label: 'Utility Passthrough (Monthly)',
        type: 'currency',
        required: false,
        placeholder: '0',
        helpText: 'Documented utility cost increase'
      }
    ],
    results: [
      {
        name: 'allowableIncreasePercent',
        label: 'Allowable Increase Percentage',
        type: 'text',
        helpText: 'Annual CPI-based increase percentage'
      },
      {
        name: 'baseIncreaseAmount',
        label: 'Base Rent Increase',
        type: 'currency',
        helpText: 'Monthly increase from allowable percentage'
      },
      {
        name: 'totalMonthlyIncrease',
        label: 'Total Monthly Increase',
        type: 'currency',
        helpText: 'Base + capital improvement + utility passthroughs'
      },
      {
        name: 'newMonthlyRent',
        label: 'New Monthly Rent',
        type: 'currency',
        helpText: 'New monthly rent after all increases'
      },
      {
        name: 'annualIncreaseRevenue',
        label: 'Annual Additional Revenue',
        type: 'currency',
        helpText: 'Total additional annual rent collected'
      },
      {
        name: 'noticeRequirement',
        label: 'Required Notice Period',
        type: 'text',
        helpText: 'Legal notice period before increase'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const currentRent = parseFloat(inputs.currentRent) || 0;
      const effectivePeriod = inputs.effectivePeriod || '2024';
      const capitalImprovement = parseFloat(inputs.capitalImprovement) || 0;
      const utilityPassthrough = parseFloat(inputs.utilityPassthrough) || 0;

      const rates: Record<string, number> = {
        '2024': 0.04,
        '2023': 0.06,
        '2022': 0.04
      };

      const allowablePercent = rates[effectivePeriod] || 0.04;
      const baseIncreaseAmount = Math.round(currentRent * allowablePercent);
      const totalMonthlyIncrease = baseIncreaseAmount + capitalImprovement + utilityPassthrough;
      const newMonthlyRent = Math.round(currentRent + totalMonthlyIncrease);
      const annualIncreaseRevenue = totalMonthlyIncrease * 12;

      const totalIncreasePercent = ((totalMonthlyIncrease / currentRent) * 100).toFixed(1);
      const noticeRequirement = parseFloat(totalIncreasePercent) > 10 ? '60 days' : '30 days';

      return {
        allowableIncreasePercent: `${(allowablePercent * 100).toFixed(1)}%`,
        baseIncreaseAmount,
        totalMonthlyIncrease,
        newMonthlyRent,
        annualIncreaseRevenue,
        noticeRequirement
      };
    }
  }
};
