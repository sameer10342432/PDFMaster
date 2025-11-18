import { CalculatorContent } from '@/types';

export const CONTINUING_EDUCATION_TRACKER_CONTENT: CalculatorContent = {
  title: 'Continuing Education (CE) Tracker',
  description: 'Track your required continuing education credits, course costs, renewal dates, and certification requirements to maintain your real estate license.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'continuing-education-tracker',
  article: {
    title: 'Real Estate Continuing Education Requirements: Complete Tracking Guide',
    content: `
Staying current with continuing education requirements is essential for maintaining your real estate license and staying competitive in the market.

### Why CE Requirements Matter

**License Compliance:**
- Avoid license suspension or expiration
- Meet state board requirements
- Stay in good standing
- Maintain legal ability to practice

**Professional Development:**
- Learn new market trends
- Update on law changes
- Enhance skills and knowledge
- Improve client service

**Competitive Advantage:**
- Advanced designations (GRI, CRS, ABR)
- Specialty certifications
- Expert positioning
- Marketing differentiation

### State CE Requirements (Examples)

**California:**
- 45 hours every 4 years
- Includes ethics, fair housing, risk management
- First renewal: different requirements
- License expiration every 4 years

**Texas:**
- 18 hours every 2 years
- Includes legal updates, ethics
- Sales Agent Apprentice Education (SAE): 98 hours in first 2 years
- Broker requirements different

**Florida:**
- 14 hours every 2 years
- 3 hours core law required
- Biennial license renewal
- Online courses accepted

**New York:**
- 22.5 hours every 2 years
- Includes fair housing, agency, ethics
- License renewal every 2 years
- Approved providers required

*Note: Requirements vary significantly by state. Check your state's requirements.*

### Types of CE Courses

**Core Required Courses:**
- State law updates: $20-80 per course
- Ethics training: $20-60
- Fair housing: $20-50
- Total core costs: $60-200

**Elective Courses:**
- Marketing and technology: $30-100
- Investment property: $40-80
- Luxury home marketing: $50-150
- Commercial real estate: $50-150

**Designation Courses:**
- GRI (Graduate REALTOR Institute): $400-800
- CRS (Certified Residential Specialist): $1,000-2,000
- ABR (Accredited Buyer Representative): $300-500
- SRES (Senior Real Estate Specialist): $300-500

### CE Delivery Methods

**Online Courses:**
- Most flexible option
- Self-paced learning
- Often least expensive
- 24/7 access
- Cost: $15-50 per credit hour

**In-Person Classes:**
- Networking opportunities
- Interactive learning
- Immediate questions answered
- Professional connections
- Cost: $30-80 per credit hour

**Live Webinars:**
- Real-time interaction
- Scheduled learning
- Expert instructors
- Q&A sessions
- Cost: $20-60 per credit hour

**Association-Provided:**
- NAR member benefits
- Local board offerings
- Often discounted or free
- Relevant content
- Cost: $0-40 per credit hour

### Cost Management Strategies

**Budget Planning:**
- Annual CE budget: $200-600
- Spread costs over renewal period
- Early bird discounts
- Package deals save 20-40%

**Tax Deductions:**
- CE costs are business expenses
- Deductible on Schedule C
- Keep all receipts
- Include travel if applicable

**Free and Low-Cost Options:**
- Brokerage-provided training
- Association member benefits
- Sponsor-supported webinars
- YouTube educational content (check if qualifying)

### Tracking System

**Important Dates:**
- License expiration date
- CE deadline (often before expiration)
- Course completion dates
- Certificate expiration dates

**Required Documentation:**
- Completion certificates
- Course provider information
- Credit hours earned
- Certificate numbers
- Compliance proof

**Organization Tips:**
- Digital folder for certificates
- Spreadsheet tracker
- Calendar reminders (6 months, 3 months, 1 month before)
- Upload to state portal immediately
- Keep 5-year record

### Common Mistakes to Avoid

**Missing Deadlines:**
- License expires without renewal
- Late fees: $50-200
- Possible retesting required
- Business interruption

**Non-Approved Courses:**
- Taking courses not accepted by state
- Wasting time and money
- Still not in compliance
- Solution: Verify provider approval first

**Inadequate Record Keeping:**
- Lost certificates
- Cannot prove compliance
- Delays in renewal
- Additional verification costs

### Strategic CE Planning

**Career Development Path:**
- Year 1-2: Core requirements + buyer specialist
- Year 3-4: Luxury certification + negotiation
- Year 5+: Team building + leadership training
- Continuous: Technology and marketing updates

**Maximize Value:**
- Choose courses that grow business
- Network at in-person events
- Implement immediately
- Share knowledge with team

## How to Use This Tracker

Enter your information:
1. State license requirements (hours)
2. Renewal period (years)
3. Completed credits
4. Remaining credits needed
5. Courses planned with costs
6. License expiration date

Get organized tracking including:
- Credits remaining
- Compliance status
- Total CE costs
- Budget planning
- Deadline alerts
- Progress percentage

This tracker helps you stay compliant, budget appropriately, and strategically plan your professional development as a real estate professional.
`,
  },
  calculator: {
    fields: [
      {
        name: 'requiredHours',
        label: 'Required CE Hours',
        type: 'number',
        defaultValue: 24,
      },
      {
        name: 'completedHours',
        label: 'Completed CE Hours',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'renewalPeriod',
        label: 'Renewal Period (Years)',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'avgCostPerHour',
        label: 'Average Cost Per Credit Hour',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'monthsRemaining',
        label: 'Months Until Renewal',
        type: 'number',
        defaultValue: 8,
      },
    ],
    results: [
      { label: 'Remaining Hours Needed', isCurrency: false },
      { label: 'Estimated Total Cost', isCurrency: true },
      { label: 'Monthly CE Budget', isCurrency: true },
      { label: 'Completion Progress', isCurrency: false },
      { label: 'Hours Per Month Needed', isCurrency: false },
    ],
    calculate: (data) => {
      const { requiredHours, completedHours, renewalPeriod, avgCostPerHour, monthsRemaining } = data;
      
      const remainingHours = Math.max(0, parseFloat(requiredHours) - parseFloat(completedHours));
      const totalCost = parseFloat(requiredHours) * parseFloat(avgCostPerHour);
      const monthlyBudget = totalCost / (parseFloat(renewalPeriod) * 12);
      const completionProgress = ((parseFloat(completedHours) / parseFloat(requiredHours)) * 100).toFixed(1);
      const hoursPerMonth = parseFloat(monthsRemaining) > 0 ? (remainingHours / parseFloat(monthsRemaining)).toFixed(1) : 0;
      
      return [
        { label: 'Remaining Hours Needed', value: `${remainingHours} hours` },
        { label: 'Estimated Total Cost', value: `$${totalCost.toLocaleString()}` },
        { label: 'Monthly CE Budget', value: `$${monthlyBudget.toLocaleString('en-US', { maximumFractionDigits: 0 })}` },
        { label: 'Completion Progress', value: `${completionProgress}%` },
        { label: 'Hours Per Month Needed', value: `${hoursPerMonth} hours/month` },
      ];
    },
  },
};
