import { CalculatorContent } from '@/types';

export const AIRBNB_HOST_FEE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Airbnb Host Fee Calculator - Calculate Service Fees & Net Income',
  description: 'Calculate Airbnb host service fees, guest fees, and your actual net income after all platform charges',
  icon: 'Icon',
  slug: 'airbnb-host-fee-calculator',
  category: 'Rental & Income',
  article: {
    title: 'Understanding Airbnb Host Fees and How to Calculate Your Net Income',
    content: `
    <h2>What is the Airbnb Host Fee Calculator?</h2>
    <p>The Airbnb Host Fee Calculator helps short-term rental hosts accurately calculate their net income after deducting all Airbnb platform fees, including host service fees, guest fees, and payment processing charges. Understanding these costs is crucial for accurate profit projections and pricing strategies.</p>

    <h3>Airbnb Fee Structure Explained</h3>
    <p>Airbnb uses different fee models depending on your hosting type and location:</p>
    <ul>
      <li><strong>Host-Only Fee (3%):</strong> Most common model where hosts pay 3% service fee on each booking. Guests typically pay 14-20% on top of the listing price.</li>
      <li><strong>Split Fee (14-16%):</strong> In some cases, Airbnb charges guests 14-16% and hosts pay 3% service fee.</li>
      <li><strong>Simplified Pricing:</strong> In certain markets, Airbnb uses simplified pricing where the host service fee can range from 14-16%.</li>
      <li><strong>Payment Processing:</strong> Additional 0-3% payment processing fee may apply depending on payment method.</li>
    </ul>

    <h3>How Host Fees Impact Your Bottom Line</h3>
    <p>Understanding fee impact is critical for profitability:</p>
    <ul>
      <li><strong>Revenue Planning:</strong> A 3% host fee on a $150/night property costs $4.50 per night, or $1,350 annually at 60% occupancy.</li>
      <li><strong>Pricing Strategy:</strong> Many hosts increase their nightly rate to offset platform fees without discouraging bookings.</li>
      <li><strong>Competitive Analysis:</strong> Factor in fees when comparing Airbnb to other platforms like VRBO (which charges 8% host fee).</li>
      <li><strong>Tax Implications:</strong> Platform fees are business expenses you can deduct from rental income taxes.</li>
    </ul>

    <h3>Strategies to Minimize Fee Impact</h3>
    <ul>
      <li><strong>Encourage Direct Bookings:</strong> Use Airbnb to market your property, then move repeat guests to direct bookings (check local regulations).</li>
      <li><strong>Optimize Pricing:</strong> Use dynamic pricing to maximize revenue per booking, offsetting percentage-based fees.</li>
      <li><strong>Longer Stays:</strong> Fees apply per booking, so longer stays result in fewer fee transactions.</li>
      <li><strong>Professional Host Program:</strong> High-volume hosts may qualify for reduced fees through Airbnb's professional hosting programs.</li>
      <li><strong>Multi-Platform Strategy:</strong> List on multiple platforms to compare fee structures and increase booking volume.</li>
    </ul>

    <h3>Additional Costs to Consider</h3>
    <ul>
      <li><strong>Cleaning Fees:</strong> You set these, but they're separate from nightly rate and help cover turnover costs.</li>
      <li><strong>Local Taxes:</strong> Many jurisdictions require you to collect and remit occupancy taxes (8-15% typically).</li>
      <li><strong>Payment Processing:</strong> Credit card and international payment fees can add 1-3% to your costs.</li>
      <li><strong>Cancellation Policies:</strong> Strict policies may reduce fees paid on cancelled bookings.</li>
      <li><strong>Damage Protection:</strong> Optional AirCover for Hosts is free, but you may want additional insurance.</li>
    </ul>

    <h3>How to Use This Calculator</h3>
    <p>Enter your nightly rate, average monthly bookings, cleaning fee, and host service fee percentage. The calculator shows your gross income, total platform fees, payment processing costs, and your actual net income after all Airbnb charges. Use this to accurately forecast cash flow and profitability.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: 'nightlyRate',
        label: 'Average Nightly Rate ($)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'monthlyBookings',
        label: 'Monthly Bookings',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'avgNightsPerBooking',
        label: 'Average Nights per Booking',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'cleaningFee',
        label: 'Cleaning Fee per Booking ($)',
        type: 'number',
        defaultValue: 75,
      },
      {
        name: 'hostServiceFee',
        label: 'Host Service Fee (%)',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'paymentProcessingFee',
        label: 'Payment Processing Fee (%)',
        type: 'number',
        defaultValue: 1.5,
      },
    ],
    results: [],
    calculate: (values) => {
      const { nightlyRate, monthlyBookings, avgNightsPerBooking, cleaningFee, hostServiceFee, paymentProcessingFee } = values;
      
      const monthlyNights = monthlyBookings * avgNightsPerBooking;
      const grossNightlyIncome = nightlyRate * monthlyNights;
      const totalCleaningFees = cleaningFee * monthlyBookings;
      const grossMonthlyIncome = grossNightlyIncome + totalCleaningFees;
      
      const hostFees = grossMonthlyIncome * (hostServiceFee / 100);
      const processingFees = grossMonthlyIncome * (paymentProcessingFee / 100);
      const totalFees = hostFees + processingFees;
      
      const netMonthlyIncome = grossMonthlyIncome - totalFees;
      const annualGrossIncome = grossMonthlyIncome * 12;
      const annualNetIncome = netMonthlyIncome * 12;
      const annualTotalFees = totalFees * 12;
      
      const effectiveFeeRate = (totalFees / grossMonthlyIncome) * 100;

      return [
        { label: 'Total Nights Booked per Month', value: monthlyNights.toString() },
        { label: 'Gross Monthly Income', value: grossMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Host Service Fees', value: hostFees.toFixed(2), isCurrency: true },
        { label: 'Payment Processing Fees', value: processingFees.toFixed(2), isCurrency: true },
        { label: 'Total Monthly Fees', value: totalFees.toFixed(2), isCurrency: true },
        { label: 'Net Monthly Income', value: netMonthlyIncome.toFixed(2), isCurrency: true },
        { label: 'Effective Fee Rate', value: `${effectiveFeeRate.toFixed(2)}%` },
        { label: 'Annual Gross Income', value: annualGrossIncome.toFixed(2), isCurrency: true },
        { label: 'Annual Total Fees', value: annualTotalFees.toFixed(2), isCurrency: true },
        { label: 'Annual Net Income', value: annualNetIncome.toFixed(2), isCurrency: true },
      ];
    },
  },
};
