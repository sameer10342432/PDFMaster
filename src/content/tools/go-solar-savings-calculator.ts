import { CalculatorContent } from '@/types';

export const GO_SOLAR_SAVINGS_CALCULATOR_CONTENT: CalculatorContent = {
  title: '"Go Solar" Savings Calculator',
  description: 'Calculate monthly and lifetime savings from switching to solar energy. Compare current electricity costs vs solar panel savings with federal tax credits and state incentives.',
  icon: 'Icon',
  category: 'Energy & Sustainability',
  slug: 'go-solar-savings-calculator',
  article: {
    title: 'Go Solar Savings Calculator: Calculate Your Solar Energy Savings',
    content: `
Switching to solar energy can dramatically reduce your electricity bills while increasing home value and supporting environmental sustainability. This calculator helps you understand your potential savings.

### Understanding Your Current Electricity Costs

**Average Monthly Electric Bill by Region:**

**High-Cost States:**
- Hawaii: $180-$250/month ($0.30-$0.40/kWh)
- California: $120-$180/month ($0.22-$0.28/kWh)
- Connecticut: $135-$175/month ($0.21-$0.25/kWh)
- Massachusetts: $130-$170/month ($0.22-$0.26/kWh)
- New York: $120-$165/month ($0.18-$0.24/kWh)

**Medium-Cost States:**
- Florida: $100-$140/month ($0.11-$0.13/kWh)
- Texas: $90-$130/month ($0.10-$0.13/kWh)
- Georgia: $110-$145/month ($0.11-$0.13/kWh)
- Arizona: $105-$145/month ($0.11-$0.13/kWh)

**Low-Cost States:**
- Washington: $80-$110/month ($0.08-$0.10/kWh)
- Oregon: $85-$115/month ($0.09-$0.11/kWh)
- Louisiana: $75-$105/month ($0.08-$0.10/kWh)
- Idaho: $70-$100/month ($0.08-$0.10/kWh)

**National Average:**
- Monthly bill: $115-$135
- Usage: 877 kWh/month (10,500 kWh/year)
- Rate: $0.13-$0.15/kWh

### Solar Production Estimates

**System Production by Size:**

**3 kW System (Small home/low usage):**
- Annual production: 3,600-4,800 kWh
- Monthly production: 300-400 kWh
- Best for: 1-2 person households
- Utility offset: 40-60%

**5 kW System (Average home):**
- Annual production: 6,000-8,000 kWh
- Monthly production: 500-665 kWh
- Best for: 2-4 person households
- Utility offset: 60-85%

**8 kW System (Large home):**
- Annual production: 9,600-12,800 kWh
- Monthly production: 800-1,065 kWh
- Best for: 4+ person households
- Utility offset: 90-100%+

**10 kW System (Very large home/high usage):**
- Annual production: 12,000-16,000 kWh
- Monthly production: 1,000-1,335 kWh
- Best for: 5+ person households, EVs
- Utility offset: 100%+

**Production Factors:**
- Geographic location (sun hours/day)
- Roof orientation (south is best)
- Roof angle/pitch
- Shading from trees/buildings
- Panel efficiency rating
- Seasonal variation

### Monthly Savings Calculation

**Example 1: California Homeowner**

**Current Situation:**
- Monthly usage: 850 kWh
- Electricity rate: $0.25/kWh
- Monthly bill: $212.50

**With 6 kW Solar System:**
- System production: 800 kWh/month
- Grid usage: 50 kWh/month
- New monthly bill: $12.50
- **Monthly savings: $200**
- **Annual savings: $2,400**

**Example 2: Texas Homeowner**

**Current Situation:**
- Monthly usage: 1,200 kWh
- Electricity rate: $0.12/kWh
- Monthly bill: $144

**With 8 kW Solar System:**
- System production: 1,000 kWh/month
- Grid usage: 200 kWh/month
- New monthly bill: $24
- **Monthly savings: $120**
- **Annual savings: $1,440**

**Example 3: Hawaii Homeowner**

**Current Situation:**
- Monthly usage: 600 kWh
- Electricity rate: $0.35/kWh
- Monthly bill: $210

**With 5 kW Solar System:**
- System production: 625 kWh/month
- Grid usage: 0 kWh (surplus exported)
- New monthly bill: $0
- **Monthly savings: $210**
- **Annual savings: $2,520**

### Lifetime Savings Projection

**25-Year Savings (Solar panel lifespan):**

**Without Rate Escalation:**
- Annual savings: $2,000
- 25-year total: $50,000

**With 3% Annual Rate Increase:**
- Year 1: $2,000
- Year 5: $2,250
- Year 10: $2,600
- Year 15: $3,000
- Year 20: $3,500
- Year 25: $4,000
- **25-year total: $68,000**

**Net Profit After System Cost:**
- System cost: $18,000 (after 30% tax credit)
- 25-year savings: $68,000
- **Net profit: $50,000**
- **ROI: 278%**

### Federal Solar Tax Credit (ITC)

**Current Credit Amount:**
- 2024-2032: 30% of total cost
- 2033: 26% of total cost  
- 2034: 22% of total cost
- 2035+: Expires (unless extended)

**What Qualifies:**
- Solar panels
- Installation labor
- Mounting equipment
- Inverters
- Electrical work
- Permitting fees
- Battery storage (if charged by solar)

**Example Tax Credit:**
- Total system cost: $25,000
- Federal tax credit (30%): $7,500
- **Net cost: $17,500**

**How to Claim:**
- File IRS Form 5695
- Claim on tax return for installation year
- Can carry forward to future years if needed
- No income limits
- Applies to primary and secondary homes

### State and Local Incentives

**Common State Incentives:**

**Cash Rebates:**
- California: $0-$3,000 (income-based)
- New York: $1,000-$5,000
- Massachusetts: $1,000-$6,000
- Oregon: $0-$5,000 (income-based)

**Performance-Based Incentives:**
- Solar Renewable Energy Certificates (SRECs)
- Payment per kWh produced
- Varies by state: $50-$300 per SREC
- Can add $200-$1,500/year

**Property Tax Exemptions:**
- Added solar value exempt from property tax
- Saves $200-$600/year
- Permanent benefit

**Sales Tax Exemptions:**
- No sales tax on solar equipment
- Saves 4-10% on purchase
- Upfront savings: $800-$2,500

**Local Utility Rebates:**
- $500-$2,000 per system
- Varies by provider
- Limited funds (first-come basis)

### Net Metering Benefits

**What Is Net Metering:**
- Sell excess solar production to grid
- Receive credit on utility bill
- 1:1 credit in many states
- Bank credits for future use

**Example:**
- Monthly production: 1,000 kWh
- Monthly usage: 800 kWh
- Excess: 200 kWh
- Credit: 200 kWh @ $0.20 = $40

**Best Net Metering States:**
- California, New Jersey, Massachusetts
- Nevada, Arizona, Maryland
- Connecticut, New York, Rhode Island
- 1:1 crediting or better

**Limited Net Metering:**
- Some states pay wholesale rate for excess
- Others don't credit excess at all
- May require battery storage for optimization

### Time-of-Use (TOU) Rate Savings

**What Are TOU Rates:**
- Electricity costs more during peak hours
- Lower rates during off-peak hours
- Solar produces during peak (highest value)

**Typical TOU Schedule:**

**Peak Hours (4 PM - 9 PM):**
- Rate: $0.30-$0.45/kWh
- Highest demand time
- Solar + battery optimal

**Mid-Peak (12 PM - 4 PM, 9 PM - 11 PM):**
- Rate: $0.18-$0.25/kWh
- Moderate demand

**Off-Peak (11 PM - 7 AM):**
- Rate: $0.10-$0.15/kWh
- Lowest demand time
- Good time to charge battery

**TOU Savings Strategy:**
- Solar produces during peak rates
- Use solar power instead of grid
- Battery stores for evening peak
- Extra savings: 20-40% beyond standard rates

### Additional Financial Benefits

**Increased Home Value:**
- Average increase: 4.1% of home value
- $400,000 home: +$16,400 value
- Homes sell 20% faster
- Premium in green-conscious markets

**Hedge Against Rate Increases:**
- Lock in energy costs
- Immune to utility rate hikes
- Predictable expenses
- 25+ years of stability

**Environmental Credits:**
- SREC income: $200-$1,500/year
- Carbon offset credits (some markets)
- Green energy incentives
- Tax benefits

**Energy Independence:**
- Reduced grid reliance
- Power during outages (with battery)
- Self-sufficiency
- Peace of mind value

### Savings by Household Type

**Small Apartment/Condo (400-600 kWh/month):**
- System size: 2-3 kW
- Monthly savings: $50-$80
- Annual savings: $600-$960
- 25-year savings: $20,000-$30,000

**Medium Home (800-1,000 kWh/month):**
- System size: 5-6 kW
- Monthly savings: $100-$180
- Annual savings: $1,200-$2,160
- 25-year savings: $40,000-$70,000

**Large Home (1,200-1,500 kWh/month):**
- System size: 8-10 kW
- Monthly savings: $150-$280
- Annual savings: $1,800-$3,360
- 25-year savings: $60,000-$110,000

**Very Large/Pool/EV (1,800+ kWh/month):**
- System size: 12-15 kW
- Monthly savings: $250-$450
- Annual savings: $3,000-$5,400
- 25-year savings: $100,000-$175,000

### Real-World Savings Examples

**Case Study 1: Southern California**
- Home: 2,400 sq ft
- Usage: 950 kWh/month
- Rate: $0.26/kWh
- System: 7.5 kW
- Cost: $21,000 ($14,700 after credit)
- Monthly savings: $215
- Payback: 5.7 years
- 25-year profit: $54,000

**Case Study 2: Arizona**
- Home: 3,200 sq ft
- Usage: 1,400 kWh/month
- Rate: $0.13/kWh
- System: 10 kW
- Cost: $26,000 ($18,200 after credit)
- Monthly savings: $165
- Payback: 9.2 years
- 25-year profit: $39,000

**Case Study 3: New Jersey**
- Home: 2,800 sq ft
- Usage: 1,000 kWh/month
- Rate: $0.16/kWh
- System: 8 kW
- Cost: $22,000 ($15,400 after credit)
- Monthly savings: $150
- SREC income: $1,000/year
- Total savings: $280/month
- Payback: 4.6 years
- 25-year profit: $66,000

### Maximizing Your Solar Savings

**Optimization Strategies:**

1. **Right-Size Your System**
   - Match your annual usage
   - Account for future EV charging
   - Don't oversize (waste in some markets)
   - Consider planned expansions

2. **Energy Efficiency First**
   - LED bulbs: 75% less energy
   - Energy Star appliances
   - Better insulation
   - Smart thermostats
   - Smaller system needed = lower cost

3. **Timing Your Installation**
   - Install before incentive reductions
   - Avoid rate increase announcements
   - Off-season installation (lower prices)
   - Current 30% credit through 2032

4. **Battery Storage**
   - Maximize TOU savings
   - Backup power during outages
   - Better payback with high peak rates
   - Store when producing more than using

5. **Monitor and Maintain**
   - Track production daily
   - Clean panels 1-2x/year
   - Address shading issues
   - Maximize efficiency

### Savings Calculator Formula

**Monthly Savings:**
```
Current Monthly Bill = (Monthly kWh Usage × Rate per kWh)
Solar Production = (System kW × 4-5 hours × 30 days)
Remaining Grid Usage = Monthly Usage - Solar Production
New Monthly Bill = Remaining Usage × Rate
Monthly Savings = Current Bill - New Bill
```

**Annual Savings:**
```
Annual Savings = Monthly Savings × 12
```

**Lifetime Savings (with 3% escalation):**
```
Year 1: Annual Savings
Year 2: Annual Savings × 1.03
Year 3: Annual Savings × 1.03²
...
Year 25: Annual Savings × 1.03²⁴
Lifetime Total = Sum of all years
```

**Net Profit:**
```
System Cost = Total Cost
Federal Credit = System Cost × 0.30
State Incentives = Rebates + Credits
Net Cost = System Cost - Federal Credit - State Incentives
Lifetime Savings = 25-year total
Net Profit = Lifetime Savings - Net Cost
ROI = (Net Profit ÷ Net Cost) × 100%
```

### What Affects Your Savings

**Increases Savings:**
- High electricity rates (>$0.18/kWh)
- Excellent sun exposure (southwest)
- Net metering at 1:1
- Time-of-use rates
- SREC availability
- Low system cost per watt
- Long-term ownership

**Decreases Savings:**
- Low electricity rates (<$0.12/kWh)
- Significant shading
- Poor net metering
- Flat rate billing
- High system cost
- Short ownership period
- Frequent moves

### Going Beyond Savings

**Environmental Impact:**
- Carbon footprint reduction: 6-8 tons CO2/year
- Equivalent to: 150 trees planted annually
- Clean energy generation
- Reduced fossil fuel dependence
- Sustainability legacy

**Energy Independence:**
- Grid outage protection (with battery)
- No rate shock from utility increases
- Control over energy source
- Self-sufficiency satisfaction
- Community resilience

Switching to solar provides immediate and long-term savings, increases home value, protects against rising electricity rates, and supports environmental sustainability. With the 30% federal tax credit and improving technology, there's never been a better time to go solar.
    `,
  },
};
