import { CalculatorContent } from '@/types';

export const SAN_FRANCISCO_CA_RENT_CONTROL_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'San Francisco (CA) Rent Control Calculator',
  description: 'Calculate allowable rent increases under San Francisco rent control ordinance and tenant protections',
  slug: 'san-francisco-ca-rent-control-calculator',
  icon: '🌉',
  category: 'Landlord Tools',
  article: {
    title: 'San Francisco Rent Control Guide',
    content: `
    <h2>San Francisco Rent Control Ordinance</h2>
    <p>San Francisco has some of the <strong>strongest rent control laws in the United States</strong>. Understanding these regulations is critical for landlords and tenants in this high-rent market.</p>
    
    <h3>Which Properties Are Rent Controlled?</h3>
    <p><strong>Covered Properties:</strong></p>
    <ul>
      <li>Buildings constructed <strong>before June 13, 1979</strong></li>
      <li>2+ unit buildings (including condos if built pre-1979)</li>
      <li>Single-family homes if built before 1979 and not owner-occupied</li>
    </ul>
    
    <p><strong>Exempt Properties:</strong></p>
    <ul>
      <li>Buildings constructed <strong>on or after June 13, 1979</strong></li>
      <li>Single-family homes where owner lives on property</li>
      <li>Non-profit housing</li>
      <li>Government-subsidized affordable housing</li>
    </ul>
    
    <h3>Annual Rent Increase Limits (2024)</h3>
    <p>San Francisco's annual allowable rent increase is tied to <strong>60% of CPI</strong> (Consumer Price Index):</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Allowable Increase</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Effective Date</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2024</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>3.6%</strong></td>
        <td style="border: 1px solid #ddd; padding: 8px;">March 1, 2024</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2023</td>
        <td style="border: 1px solid #ddd; padding: 8px;">3.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">March 1, 2023</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">2022</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">March 1, 2022</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">2021</td>
        <td style="border: 1px solid #ddd; padding: 8px;">0.7%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">March 1, 2021</td>
      </tr>
    </table>
    <p><em>Note: Increases announced annually, typically effective March 1</em></p>
    
    <h3>Banking Unused Increases</h3>
    <p>Landlords can <strong>"bank" unused allowable increases</strong> for up to 3 years:</p>
    <ul>
      <li>If you don't raise rent in 2023, you can add 2023's increase to 2024's</li>
      <li>Maximum 3 years of banked increases (current year + 2 prior)</li>
      <li>Must provide 60-day notice for banked increases over 10%</li>
    </ul>
    
    <h3>Example: Banking Increases</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Current Rent</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Banked Increases</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">New Rent</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">No increase since 2021</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">0.7% + 2.3% + 3.7% + 3.6% = 10.3%</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,309</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Annual increases</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">3.6% only</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$3,108</td>
      </tr>
    </table>
    
    <h3>Capital Improvement Passthroughs</h3>
    <p>Landlords can petition for <strong>additional rent increases</strong> for capital improvements:</p>
    <ul>
      <li><strong>Eligible Improvements:</strong> New roof, seismic retrofitting, major systems replacement</li>
      <li><strong>Petition Required:</strong> File with Rent Board, tenant can contest</li>
      <li><strong>Passthrough Amount:</strong> Amortized over useful life (typically 10 years)</li>
      <li><strong>Limit:</strong> 10% annual rent increase cap for capital improvements</li>
    </ul>
    
    <h3>Just Cause Eviction Protections</h3>
    <p>San Francisco requires <strong>"just cause"</strong> to evict tenants:</p>
    <ul>
      <li>Non-payment of rent (with 3-day notice)</li>
      <li>Breach of lease</li>
      <li>Nuisance behavior</li>
      <li>Owner move-in (strict requirements, relocation fees apply)</li>
      <li>Ellis Act (removal from rental market)</li>
    </ul>
    
    <h3>Relocation Payments</h3>
    <p>For certain evictions, landlords must pay tenants to relocate:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Eviction Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Relocation Payment (2024)</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Owner Move-In</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,800 - $23,400</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Ellis Act (removal from market)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,800 - $23,400</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Capital Improvement (temporary)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$7,800 - $23,400</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Disabled/Seniors (additional)</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">+$4,900</td>
      </tr>
    </table>
    <p><em>Amounts vary by household size and tenant characteristics</em></p>
    
    <h3>Rent Increase Notice Requirements</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Increase Amount</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notice Period</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">10% or less</td>
        <td style="border: 1px solid #ddd; padding: 8px;">30 days</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">More than 10%</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><strong>60 days</strong></td>
      </tr>
    </table>
    
    <h3>Vacancy Decontrol ("Costa-Hawkins")</h3>
    <p>When a tenant voluntarily vacates:</p>
    <ul>
      <li>Landlord can set rent to <strong>market rate</strong> for new tenant</li>
      <li>Once new tenant moves in, unit is again subject to rent control</li>
      <li>Cannot evict tenant just to raise rent to market</li>
      <li>Owner move-in must be legitimate (owner/family lives there 36+ months)</li>
    </ul>
    
    <h3>Common Landlord Violations and Penalties</h3>
    <ul>
      <li><strong>Illegal Rent Increase:</strong> Tenant can petition, receive refund, landlord fined</li>
      <li><strong>Unlawful Eviction:</strong> $1,000 - $2,000 per violation + attorney fees</li>
      <li><strong>Harassment:</strong> $5,000+ penalties, criminal charges possible</li>
      <li><strong>Owner Move-In Fraud:</strong> 3x actual damages + punitive damages + attorney fees</li>
    </ul>
    
    <h3>Tenant Resources</h3>
    <ul>
      <li><strong>San Francisco Rent Board:</strong> 25 Van Ness Ave, Suite 320</li>
      <li><strong>Counseling:</strong> Free tenant counseling Mon-Fri, 1-4 PM</li>
      <li><strong>Petition Filing:</strong> Contest illegal rent increases or evictions</li>
      <li><strong>Phone:</strong> 415-252-4600</li>
    </ul>
    
    <h3>Impact on Investment Returns</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Annual Rent Growth</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">10-Year Value</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Rent Controlled (long-term tenant)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2-4% (CPI-based)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Below market by 30-50%</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">High Turnover Unit</td>
        <td style="border: 1px solid #ddd; padding: 8px;">5-8% (market resets)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Closer to market rate</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Post-1979 Building (exempt)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Market rate</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Full market appreciation</td>
      </tr>
    </table>
    
    <h3>Buying Rent-Controlled Property</h3>
    <p>Considerations for investors:</p>
    <ul>
      <li><strong>Below-Market Rents:</strong> Expect 20-40% below market for long-term tenants</li>
      <li><strong>Valuation Impact:</strong> Cap rates lower due to rent control</li>
      <li><strong>Exit Strategy:</strong> Difficult to increase rents without turnover</li>
      <li><strong>Owner Move-In Risk:</strong> Expensive and legally complex</li>
      <li><strong>Ellis Act:</strong> Can remove from market but 3-5 year re-rental prohibition</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'currentRent',
        label: 'Current Monthly Rent',
        type: 'currency',
        required: true,
        placeholder: '3000',
        helpText: 'Current monthly rent amount'
      },
      {
        name: 'yearsSinceLastIncrease',
        label: 'Years Since Last Rent Increase',
        type: 'select',
        required: true,
        options: [
          { value: '0', label: 'Current Year (2024 only)' },
          { value: '1', label: '1 Year (2023 + 2024)' },
          { value: '2', label: '2 Years (2022 + 2023 + 2024)' },
          { value: '3', label: '3 Years (2021 + 2022 + 2023 + 2024)' },
        ],
        helpText: 'Landlords can bank up to 3 years of allowable increases'
      },
      {
        name: 'capitalImprovement',
        label: 'Capital Improvement Passthrough',
        type: 'currency',
        required: false,
        placeholder: '0',
        helpText: 'Monthly passthrough amount (if Rent Board approved)'
      },
      {
        name: 'increaseType',
        label: 'Type of Increase',
        type: 'select',
        required: true,
        options: [
          { value: 'annual', label: 'Annual Allowable Increase Only' },
          { value: 'banked', label: 'Banked Multi-Year Increase' },
        ],
        helpText: 'Single year vs. multiple banked years'
      }
    ],
    results: [
      {
        name: 'allowableIncrease',
        label: 'Allowable Rent Increase Percentage',
        type: 'text',
        helpText: 'Total percentage increase allowed'
      },
      {
        name: 'monthlyIncreaseAmount',
        label: 'Monthly Rent Increase Amount',
        type: 'currency',
        helpText: 'Dollar amount of monthly rent increase'
      },
      {
        name: 'newMonthlyRent',
        label: 'New Monthly Rent',
        type: 'currency',
        helpText: 'New monthly rent after increase'
      },
      {
        name: 'annualIncreaseAmount',
        label: 'Annual Rent Increase',
        type: 'currency',
        helpText: 'Total additional rent collected annually'
      },
      {
        name: 'requiredNotice',
        label: 'Required Notice Period',
        type: 'text',
        helpText: 'Legal notice requirement before increase takes effect'
      },
      {
        name: 'complianceNotes',
        label: 'Compliance Notes',
        type: 'text',
        helpText: 'Important legal requirements'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const currentRent = parseFloat(inputs.currentRent) || 0;
      const yearsSinceLastIncrease = parseInt(inputs.yearsSinceLastIncrease) || 0;
      const capitalImprovement = parseFloat(inputs.capitalImprovement) || 0;
      const increaseType = inputs.increaseType || 'annual';

      const rates = {
        2024: 0.036,
        2023: 0.037,
        2022: 0.023,
        2021: 0.007
      };

      let totalIncreasePercentage = 0;

      if (yearsSinceLastIncrease === 0) {
        totalIncreasePercentage = rates[2024];
      } else if (yearsSinceLastIncrease === 1) {
        totalIncreasePercentage = rates[2023] + rates[2024];
      } else if (yearsSinceLastIncrease === 2) {
        totalIncreasePercentage = rates[2022] + rates[2023] + rates[2024];
      } else if (yearsSinceLastIncrease === 3) {
        totalIncreasePercentage = rates[2021] + rates[2022] + rates[2023] + rates[2024];
      }

      const baseIncrease = currentRent * totalIncreasePercentage;
      const monthlyIncreaseAmount = Math.round(baseIncrease + capitalImprovement);
      const newMonthlyRent = Math.round(currentRent + monthlyIncreaseAmount);
      const annualIncreaseAmount = Math.round(monthlyIncreaseAmount * 12);

      const increasePercentage = ((monthlyIncreaseAmount / currentRent) * 100).toFixed(2);
      const requiredNotice = parseFloat(increasePercentage) > 10 ? '60 days' : '30 days';

      const allowableIncreaseText = `${(totalIncreasePercentage * 100).toFixed(1)}%${capitalImprovement > 0 ? ' + Capital Improvement' : ''}`;

      const complianceNotes = parseFloat(increasePercentage) > 10 
        ? '⚠️ 60-day notice required for increases over 10%' 
        : '✓ 30-day notice sufficient';

      return {
        allowableIncrease: allowableIncreaseText,
        monthlyIncreaseAmount,
        newMonthlyRent,
        annualIncreaseAmount,
        requiredNotice,
        complianceNotes
      };
    }
  }
};
