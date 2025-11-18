import { CalculatorContent } from '@/types';

export const SPHERE_OF_INFLUENCE_POTENTIAL_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Sphere of Influence (SOI) Potential Calculator',
  description: 'Calculate the potential business value of your sphere of influence and develop a strategy to maximize referrals and repeat business.',
  icon: 'Icon',
  category: 'Agent Tools',
  slug: 'sphere-of-influence-potential-calculator',
  article: {
    title: 'Sphere of Influence Calculator: Unlock Your Network\'s Revenue Potential',
    content: `
Your Sphere of Influence (SOI) is one of the most valuable assets in real estate. Studies show that 82% of people would use their agent again, but only 12% do. This calculator helps you understand and maximize your SOI potential.

### What is Sphere of Influence?

Your Sphere of Influence includes everyone who knows you, likes you, and trusts you. These are people who would do business with you or refer you to others.

**SOI Categories:**
- Family and relatives
- Close friends
- Work colleagues
- Neighbors
- Social groups and clubs
- Former clients
- Vendors and service providers
- Social media connections

### Industry Statistics on SOI Business

**Referral and Repeat Business:**
- 82% of clients would use their agent again
- Only 12% actually do (lack of follow-up)
- 75% of people know someone buying or selling
- Average person knows 600+ people
- Each person moves every 7-9 years

**SOI Conversion Rates:**
- Active SOI (regular contact): 15-25% will do business
- Maintained SOI (periodic contact): 8-15% will do business
- Neglected SOI (no contact): 2-5% will do business

**Referral Statistics:**
- Average client knows 11 people who will buy/sell in next 2 years
- Referred clients close at 2-3× higher rate
- Referred clients are 18% more loyal
- 92% of people trust referrals from people they know

### Calculating Your SOI Potential

**Step 1: Categorize Your Contacts**
- Tier 1 (Close relationships): Family, close friends, past clients
- Tier 2 (Regular contacts): Colleagues, neighbors, acquaintances
- Tier 3 (Casual connections): Social media, distant contacts

**Step 2: Apply Transaction Probability**
- Tier 1: 20-30% will transact or refer in 2 years
- Tier 2: 10-15% will transact or refer in 2 years
- Tier 3: 3-8% will transact or refer in 2 years

**Step 3: Calculate Potential Revenue**
Total Potential = (Contacts × Transaction Probability × Average Commission)

### Maximizing Your SOI Value

**Stay Top-of-Mind Strategies:**
1. **Monthly Touchpoints**
   - Email newsletters with market updates
   - Social media engagement
   - Personal messages on special occasions

2. **Quarterly Value-Added Content**
   - Market reports
   - Home maintenance tips
   - Community event information

3. **Annual Personal Contact**
   - Birthday and holiday cards
   - Client appreciation events
   - Phone calls or coffee meetings

4. **Immediate Touchpoints**
   - "Just sold" and "just listed" announcements
   - New market developments
   - Interest rate changes

**33 Touch System:**
Industry research shows 33 touches per year is optimal:
- 12 monthly emails/newsletters
- 4 quarterly market reports
- 12 social media interactions
- 2 personal gifts/cards
- 2 events/seminars
- 1 annual personal meeting

### SOI Management Systems

**Database Organization:**
- CRM with contact categorization
- Tag by relationship strength
- Track last contact date
- Note personal details
- Set automatic reminders

**Communication Calendar:**
- January: New Year market forecast
- February: Valentine's home care tips
- March: Spring market preview
- April: Tax deadline reminders
- May: Mother's Day + summer prep
- June: Father's Day + vacation tips
- July: Mid-year market update
- August: Back-to-school checklist
- September: Fall market trends
- October: Halloween + winterization
- November: Thanksgiving + gratitude
- December: Holiday wishes + year review

**Content Mix (80/20 Rule):**
- 80% value-added, helpful content
- 20% business/promotional content
- Never be salesy
- Always provide value first

### Referral Generation Strategies

**Ask at the Right Time:**
- After successful closing
- When client expresses satisfaction
- After solving a problem
- During testimonial requests

**Make It Easy:**
- Provide referral cards
- Create simple referral process
- Offer referral rewards (where legal)
- Acknowledge all referrals

**Systematic Approach:**
- "Who do you know?" questions
- Specific scenarios (friends selling, relocating, etc.)
- Permission to use name in introduction
- Thank you process for all referrals

### Lifecycle Marketing

**Past Client Journey:**
- Day of closing: Thank you gift
- 1 week: Follow-up satisfaction check
- 1 month: "How's the new home?" call
- 3 months: Home maintenance tips
- 6 months: Market update
- Annual: Home anniversary card
- 18 months: Check-in call
- Ongoing: Monthly newsletters

**Relationship Deepening:**
- Note birthdays and anniversaries
- Remember children's names
- Track career developments
- Acknowledge achievements
- Celebrate milestones

### SOI Revenue Projection Example

**Agent with 200 Contacts:**
- Tier 1 (50 contacts): 50 × 25% × $10,000 = $125,000
- Tier 2 (100 contacts): 100 × 12% × $10,000 = $120,000
- Tier 3 (50 contacts): 50 × 5% × $10,000 = $25,000
- **Total 2-year potential: $270,000**
- **Annual potential: $135,000**

### Cost of Neglecting SOI

**Lost Opportunity:**
- 82% would use you again
- Only 12% do without follow-up
- 70% gap = lost business
- Each lost client = $10,000+ commission

**Example:**
- 50 past clients
- 70% attrition due to neglect
- Lost potential: 35 clients × $10,000 = $350,000 over 10 years

### SOI Investment vs. Return

**Annual SOI Maintenance Costs:**
- CRM system: $600-1,200
- Marketing materials: $1,000-2,000
- Events/gifts: $500-2,000
- Time investment: 5-10 hours/month
- **Total investment: $2,100-5,200**

**Expected Return:**
- 3-5 additional transactions from SOI
- Revenue: $30,000-50,000
- **ROI: 577-2,280%**

### Building a Strong SOI

**Quality Over Quantity:**
- 100 strong relationships > 1,000 weak connections
- Focus on relationship depth
- Provide consistent value
- Be genuinely helpful

**Expansion Strategies:**
- Join community organizations
- Volunteer locally
- Attend networking events
- Host educational seminars
- Engage in social media communities

## How to Use This Calculator

Enter your SOI data:
1. Number of Tier 1 contacts (close relationships)
2. Number of Tier 2 contacts (regular contacts)
3. Number of Tier 3 contacts (casual connections)
4. Average commission per transaction
5. Expected transaction rate for each tier
6. Referral rate estimates

Get comprehensive SOI potential analysis and revenue projections.
`,
  },
  calculator: {
    fields: [
      {
        name: 'tier1Contacts',
        label: 'Tier 1 Contacts (Close Relationships)',
        type: 'number',
        defaultValue: 50,
      },
      {
        name: 'tier2Contacts',
        label: 'Tier 2 Contacts (Regular Contacts)',
        type: 'number',
        defaultValue: 100,
      },
      {
        name: 'tier3Contacts',
        label: 'Tier 3 Contacts (Casual Connections)',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'avgCommission',
        label: 'Average Commission Per Transaction ($)',
        type: 'number',
        defaultValue: 10000,
      },
      {
        name: 'tier1Rate',
        label: 'Tier 1 Transaction Rate (% per year)',
        type: 'number',
        defaultValue: 12,
      },
      {
        name: 'tier2Rate',
        label: 'Tier 2 Transaction Rate (% per year)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'tier3Rate',
        label: 'Tier 3 Transaction Rate (% per year)',
        type: 'number',
        defaultValue: 2.5,
      },
      {
        name: 'maintenanceCost',
        label: 'Annual SOI Maintenance Cost ($)',
        type: 'number',
        defaultValue: 3000,
      },
    ],
    results: [
      { label: 'Total SOI Size', isCurrency: false },
      { label: 'Tier 1 Annual Potential', isCurrency: true },
      { label: 'Tier 2 Annual Potential', isCurrency: true },
      { label: 'Tier 3 Annual Potential', isCurrency: true },
      { label: 'Total Annual Revenue Potential', isCurrency: true },
      { label: 'Expected Transactions Per Year', isCurrency: false },
      { label: 'SOI Maintenance Cost', isCurrency: true },
      { label: 'Net SOI Profit', isCurrency: true },
      { label: 'SOI ROI', isCurrency: false },
    ],
    calculate: (data) => {
      const {
        tier1Contacts,
        tier2Contacts,
        tier3Contacts,
        avgCommission,
        tier1Rate,
        tier2Rate,
        tier3Rate,
        maintenanceCost,
      } = data;

      const t1 = parseInt(tier1Contacts);
      const t2 = parseInt(tier2Contacts);
      const t3 = parseInt(tier3Contacts);
      const commission = parseFloat(avgCommission);

      const totalSOI = t1 + t2 + t3;
      const tier1Potential = t1 * (parseFloat(tier1Rate) / 100) * commission;
      const tier2Potential = t2 * (parseFloat(tier2Rate) / 100) * commission;
      const tier3Potential = t3 * (parseFloat(tier3Rate) / 100) * commission;
      const totalPotential = tier1Potential + tier2Potential + tier3Potential;
      
      const expectedTransactions = 
        (t1 * parseFloat(tier1Rate) / 100) +
        (t2 * parseFloat(tier2Rate) / 100) +
        (t3 * parseFloat(tier3Rate) / 100);

      const maintenance = parseFloat(maintenanceCost);
      const netProfit = totalPotential - maintenance;
      const roi = maintenance > 0 ? (netProfit / maintenance) * 100 : 0;

      return [
        { label: 'Total SOI Size', value: `${totalSOI.toLocaleString()} contacts` },
        { label: 'Tier 1 Annual Potential', value: `$${tier1Potential.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Tier 2 Annual Potential', value: `$${tier2Potential.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Tier 3 Annual Potential', value: `$${tier3Potential.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Total Annual Revenue Potential', value: `$${totalPotential.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Expected Transactions Per Year', value: expectedTransactions.toFixed(1) },
        { label: 'SOI Maintenance Cost', value: `$${maintenance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'Net SOI Profit', value: `$${netProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` },
        { label: 'SOI ROI', value: `${roi.toFixed(0)}%` },
      ];
    },
  },
};
