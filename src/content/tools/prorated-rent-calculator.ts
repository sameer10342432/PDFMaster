import { CalculatorContent } from '@/types';

export const PRORATED_RENT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Prorated Rent Calculator',
  description: 'Calculate prorated rent for partial months, mid-month move-ins/move-outs, daily rent rates, and proportional rent adjustments.',
  slug: 'prorated-rent-calculator',
  icon: '📅',
  category: 'Rental & Income',
  metaTitle: 'Prorated Rent Calculator - Calculate Partial Month Rent Charges',
  metaDescription: 'Free prorated rent calculator. Calculate daily rent rate, partial month charges, mid-month move-in rent, and proportional rent adjustments.',
  article: {
    title: 'Understanding Prorated Rent Calculations',
    content: `
    <h2>Understanding Prorated Rent Calculations</h2>
    <p>Prorated rent is the proportional rent amount charged when a tenant moves in or out during a month rather than on the first or last day. Accurate prorated rent calculations ensure fairness to both landlords and tenants, prevent disputes, and comply with state laws governing partial-month charges.</p>
    
    <h3>What is Prorated Rent?</h3>
    <p>Prorated rent is a proportional rent charge based on the number of days a tenant occupies the property during a partial month. Key concepts include:</p>
    <ul>
      <li><strong>Mid-Month Move-In:</strong> Tenant pays only for days from move-in to month-end</li>
      <li><strong>Early Move-Out:</strong> Tenant pays only for days from month-start to move-out</li>
      <li><strong>Daily Rate:</strong> Monthly rent divided by days in month</li>
      <li><strong>Fair Allocation:</strong> Ensures tenant only pays for days of actual occupancy</li>
      <li><strong>Legal Requirement:</strong> Most states require proportional charges, not full-month rent</li>
    </ul>

    <h3>Proration Methods</h3>
    <p>Different calculation approaches:</p>
    <ul>
      <li><strong>Days in Month Method:</strong> Divide monthly rent by actual days in specific month (28, 29, 30, or 31)</li>
      <li><strong>30-Day Month Method:</strong> Divide monthly rent by 30 regardless of actual days</li>
      <li><strong>365-Day Year Method:</strong> Monthly rent × 12 ÷ 365 = daily rate (consistent across months)</li>
      <li><strong>Banking Method:</strong> Divide monthly rent by number of days, times days occupied</li>
      <li><strong>Most Common:</strong> Days in specific month (most accurate and fair)</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter the following information:</p>
    <ul>
      <li><strong>Monthly Rent Amount:</strong> Full monthly rent for the property</li>
      <li><strong>Move-In or Move-Out Date:</strong> The date tenant takes or surrenders possession</li>
      <li><strong>Month and Year:</strong> Specific month for proration</li>
      <li><strong>Calculation Method:</strong> Choose days-in-month or 30-day method</li>
    </ul>

    <h3>Key Metrics Calculated</h3>
    <ul>
      <li><strong>Daily Rent Rate:</strong> Cost per day of occupancy</li>
      <li><strong>Number of Days:</strong> Days tenant will occupy property</li>
      <li><strong>Prorated Rent Amount:</strong> Total rent owed for partial month</li>
      <li><strong>Savings vs. Full Month:</strong> Difference from full monthly rent</li>
      <li><strong>Per Day Cost:</strong> Rent amount per individual day</li>
    </ul>

    <h3>Move-In Proration Example</h3>
    <p>Tenant moves in on October 15th, monthly rent is $1,500:</p>
    <ul>
      <li>October has 31 days</li>
      <li>Daily rate: $1,500 ÷ 31 = $48.39 per day</li>
      <li>Days occupied: October 15-31 = 17 days</li>
      <li>Prorated rent: $48.39 × 17 = $822.63</li>
      <li>First full month rent due November 1st</li>
    </ul>

    <h3>Move-Out Proration Example</h3>
    <p>Tenant moves out on March 10th, monthly rent is $2,000:</p>
    <ul>
      <li>March has 31 days</li>
      <li>Daily rate: $2,000 ÷ 31 = $64.52 per day</li>
      <li>Days occupied: March 1-10 = 10 days</li>
      <li>Prorated rent: $64.52 × 10 = $645.20</li>
      <li>Refund from deposit if rent prepaid: $2,000 - $645.20 = $1,354.80</li>
    </ul>

    <h3>Month-to-Month vs. Lease-End Proration</h3>
    <ul>
      <li><strong>Lease-End Move-Out:</strong> Most states allow full-month charge if lease specifies</li>
      <li><strong>Early Termination:</strong> Proration required if tenant breaks lease early</li>
      <li><strong>Month-to-Month:</strong> Must prorate for partial month after proper notice</li>
      <li><strong>Notice Period:</strong> Count notice days separately from occupancy days</li>
    </ul>

    <h3>State Laws and Requirements</h3>
    <p>Proration rules vary by jurisdiction:</p>
    <ul>
      <li><strong>Required Proration:</strong> Most states mandate proportional charges</li>
      <li><strong>Calculation Method:</strong> Some states specify method in statute</li>
      <li><strong>Rounding:</strong> Local laws may dictate rounding to nearest dollar or cent</li>
      <li><strong>Disclosure:</strong> Some states require proration method stated in lease</li>
      <li><strong>First Month:</strong> Proration required for mid-month lease start</li>
      <li><strong>Last Month:</strong> Proration required for early departure</li>
    </ul>

    <h3>When Proration is Required</h3>
    <ul>
      <li>Lease begins mid-month (move-in after the 1st)</li>
      <li>Lease ends mid-month (move-out before month-end)</li>
      <li>Tenant provides proper notice to vacate month-to-month tenancy</li>
      <li>Eviction results in mid-month departure</li>
      <li>Rent increase takes effect mid-month</li>
      <li>Property sold and tenant moves mid-month</li>
    </ul>

    <h3>When Proration May Not Apply</h3>
    <ul>
      <li>Lease specifically states no proration for final month</li>
      <li>Tenant abandons property without notice (may owe full month)</li>
      <li>Fixed-term lease ends on specific date (full month may be due)</li>
      <li>Local law allows full-month charge in certain circumstances</li>
      <li>Tenant violates lease and is evicted</li>
    </ul>

    <h3>Best Practices for Landlords</h3>
    <ul>
      <li>Calculate proration consistently using same method for all tenants</li>
      <li>Specify proration method in written lease agreement</li>
      <li>Provide written calculation showing daily rate and days charged</li>
      <li>Prorate the first month at lease signing to avoid confusion</li>
      <li>Document move-in and move-out dates with photos and inspection reports</li>
      <li>Collect prorated rent at move-in along with full month for next month</li>
      <li>Include proration in ledger and receipts</li>
    </ul>

    <h3>First Month Rent Collection</h3>
    <p>Typical move-in payment structure:</p>
    <ul>
      <li><strong>Example:</strong> Tenant moves in October 20th, rent is $1,500</li>
      <li><strong>October (Prorated):</strong> 12 days × $48.39 = $580.68</li>
      <li><strong>November (Full Month):</strong> $1,500.00</li>
      <li><strong>Security Deposit:</strong> $1,500.00 (typically one month's rent)</li>
      <li><strong>Total Move-In Cost:</strong> $3,580.68</li>
      <li><strong>Breakdown:</strong> Clearly itemize each component for tenant</li>
    </ul>

    <h3>Handling Different Month Lengths</h3>
    <p>Daily rates vary by month:</p>
    <ul>
      <li><strong>February (28 days):</strong> $1,500 ÷ 28 = $53.57/day</li>
      <li><strong>February (Leap Year, 29 days):</strong> $1,500 ÷ 29 = $51.72/day</li>
      <li><strong>30-Day Months:</strong> $1,500 ÷ 30 = $50.00/day</li>
      <li><strong>31-Day Months:</strong> $1,500 ÷ 31 = $48.39/day</li>
      <li><strong>Fairness:</strong> Using actual days prevents tenant overcharging</li>
    </ul>

    <h3>Security Deposit Proration</h3>
    <p>Handling deposits with partial months:</p>
    <ul>
      <li><strong>No Proration:</strong> Security deposits are not prorated, always full amount</li>
      <li><strong>Move-In:</strong> Collect full deposit regardless of move-in date</li>
      <li><strong>Move-Out:</strong> Deduct prorated final rent from deposit if applicable</li>
      <li><strong>Example:</strong> $1,500 deposit, $645 final month rent, refund $855 plus interest</li>
    </ul>

    <h3>Common Proration Mistakes</h3>
    <ul>
      <li>Using 30 days for all months (penalizes tenant in 31-day months)</li>
      <li>Rounding daily rate too aggressively (compounds over days)</li>
      <li>Forgetting to prorate final month when tenant moves early</li>
      <li>Charging full month when lease requires proration</li>
      <li>Inconsistent calculation methods for different tenants</li>
      <li>Not documenting exact move-in/move-out dates</li>
      <li>Failing to provide written proration breakdown</li>
    </ul>

    <h3>Lease Language for Proration</h3>
    <p>Include clear terms in rental agreement:</p>
    <ul>
      <li>"Rent for partial months will be prorated based on actual days in the month"</li>
      <li>"Daily rate calculated as monthly rent divided by days in specific month"</li>
      <li>"First month prorated rent of $XXX covers [dates] (X days)"</li>
      <li>"If lease terminates mid-month, final rent will be prorated"</li>
      <li>"Move-out date determines final month proration calculation"</li>
    </ul>

    <h3>Notice Period Considerations</h3>
    <ul>
      <li>30-day notice doesn't always mean 30 days from notice date</li>
      <li>Some states require notice to end on last day of rental period</li>
      <li>Tenant may owe rent during notice period even after moving</li>
      <li>Clarify whether notice period rent is prorated or full month</li>
      <li>Document notice date and final occupancy date separately</li>
    </ul>

    <h3>Digital Tools and Software</h3>
    <ul>
      <li>Property management software with built-in proration calculators</li>
      <li>Online proration calculators (multiple methods available)</li>
      <li>Spreadsheet templates for consistent calculations</li>
      <li>Automated rent collection systems with proration features</li>
      <li>Accounting software that handles partial-month charges</li>
    </ul>

    <h3>Documentation for Disputes</h3>
    <p>Protect yourself with proper records:</p>
    <ul>
      <li>Keep copy of lease showing proration terms</li>
      <li>Save written calculation provided to tenant</li>
      <li>Maintain receipts showing prorated amount collected</li>
      <li>Document move-in and move-out dates with photos and inspection</li>
      <li>Retain correspondence regarding move dates</li>
      <li>Small claims court: good records often win cases</li>
    </ul>

    <h3>Rent Increases Mid-Lease</h3>
    <p>Handling rate changes during a month:</p>
    <ul>
      <li>If allowed by lease/law, prorate old and new rates</li>
      <li>Example: $1,000 rent increases to $1,100 on April 15th</li>
      <li>Days 1-14: 14 × ($1,000 ÷ 30) = $466.67</li>
      <li>Days 15-30: 16 × ($1,100 ÷ 30) = $586.67</li>
      <li>April total: $1,053.34</li>
    </ul>

    <h3>Commercial Lease Proration</h3>
    <p>Business rental differences:</p>
    <ul>
      <li>Often use more complex calculations including CAM charges</li>
      <li>May prorate base rent, taxes, insurance, common area maintenance separately</li>
      <li>Triple-net leases require proration of multiple components</li>
      <li>Business move-in timing often negotiated in lease</li>
      <li>Rent-free periods and tenant improvement allowances affect proration</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'monthlyRent',
        label: 'Monthly Rent Amount',
        type: 'number',
        defaultValue: 1500,
      },
      {
        name: 'daysInMonth',
        label: 'Days in Month',
        type: 'number',
        defaultValue: 31,
      },
      {
        name: 'daysOccupied',
        label: 'Days Occupied',
        type: 'number',
        defaultValue: 17,
      },
      {
        name: 'calculationMethod',
        label: 'Calculation Method',
        type: 'select',
        options: [
          { value: 'actual', label: 'Actual Days in Month' },
          { value: 'thirty', label: '30-Day Month' },
        ],
        defaultValue: 'actual',
      },
    ],
    results: [
      { label: 'Daily Rent Rate', isCurrency: true },
      { label: 'Prorated Rent Amount', isCurrency: true },
      { label: 'Full Month Rent', isCurrency: true },
      { label: 'Savings vs. Full Month', isCurrency: true },
      { label: 'Percentage of Month', isPercentage: true },
      { label: 'Average Daily Cost', isCurrency: true },
    ],
    calculate: (values) => {
      const { monthlyRent, daysInMonth, daysOccupied, calculationMethod } = values;
      
      const divisor = calculationMethod === 'thirty' ? 30 : daysInMonth;
      const dailyRate = monthlyRent / divisor;
      const proratedRent = dailyRate * daysOccupied;
      const savings = monthlyRent - proratedRent;
      const percentageOfMonth = (daysOccupied / daysInMonth) * 100;
      const avgDailyCost = proratedRent / daysOccupied;

      return [
        { label: 'Daily Rent Rate', value: dailyRate.toFixed(2), isCurrency: true },
        { label: 'Prorated Rent Amount', value: proratedRent.toFixed(2), isCurrency: true },
        { label: 'Full Month Rent', value: monthlyRent.toFixed(2), isCurrency: true },
        { label: 'Savings vs. Full Month', value: savings.toFixed(2), isCurrency: true },
        { label: 'Percentage of Month', value: percentageOfMonth.toFixed(2), isPercentage: true },
        { label: 'Average Daily Cost', value: avgDailyCost.toFixed(2), isCurrency: true },
      ];
    },
  },
};
