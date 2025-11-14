import { CalculatorContent } from "@/types";

export const TEXAS_ROBIN_HOOD_SCHOOL_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Texas \"Robin Hood\" School Tax Calculator - Recapture Analysis",
  description: "Calculate how Texas's \"Robin Hood\" school finance system (recapture) affects property taxes in property-wealthy school districts, estimating your total ISD tax burden.",
  icon: "Icon",
  category: "Tax Calculators",
  slug: "texas-robin-hood-school-tax-calculator",
  metaTitle: "Texas Robin Hood School Tax Calculator | Recapture Tax Estimator",
  metaDescription: "Calculate Texas Robin Hood recapture taxes. Estimate property-wealthy school district taxes and understand how recapture affects your ISD tax bill.",
  article: {
    title: "Texas Robin Hood School Tax Calculator: Understanding Recapture",
    content: `
Texas homeowners often hear about the "Robin Hood" school finance system but don't understand how it affects their property taxes—until they get the bill. This calculator helps you estimate the impact of Texas's school finance recapture program on your property tax burden, especially if you live in a property-wealthy school district.

## What is the "Robin Hood" Plan?

The "Robin Hood" plan (officially Chapter 49 of the Texas Education Code) is Texas's school finance equalization system. It requires property-wealthy school districts to share their local tax revenue with the state, which redistributes it to property-poor districts.

### History and Purpose

**Problem Before Robin Hood (Pre-1993):**
- School funding depended entirely on local property tax base
- Property-wealthy districts spent $10,000+ per student
- Property-poor districts spent $2,000-$3,000 per student
- Massive inequality in education quality

**Texas Supreme Court Ruling (1989):**
- Edgewood ISD v. Kirby
- Court ruled school finance system unconstitutional
- Required more equitable funding across districts

**Solution (1993): "Robin Hood" Recapture**
- Property-wealthy districts pay "recapture" to state
- Revenue redistributed to property-poor districts
- Aims to equalize funding per student statewide

## How Robin Hood Works

### Property Wealth Threshold

**Property-Wealthy District Defined:**
- Taxable property value per student > $319,500 (2024 threshold)
- Threshold adjusted annually for inflation
- Approximately 170+ districts subject to recapture

**Calculation:**
- Total taxable property value in district ÷ Number of students = Per-student property wealth
- If above threshold → District must "recapture" excess

### Recapture Methods

**Chapter 41 Options (District Choice):**

**Option 1: Purchase Credits**
- District pays cash to state
- Most common option (90%+ use this)
- Amount based on excess property wealth

**Option 2: Consolidation**
- Merge with property-poor district
- Rarely chosen (loss of local control)

**Option 3: Contract Education**
- Educate students from other districts
- Rarely used

**Option 4: Detach Property**
- Transfer property to another district
- Highly rare

**Option 5: Tax-Base Consolidation**
- Partner with property-poor district
- Share tax base but maintain separate operations
- Uncommon

### How Much is Recaptured?

**Calculation:**
1. Calculate excess property wealth: (Per-student value - $319,500) × Number of students
2. Apply recapture rate (varies, typically 30-90% of excess)
3. Result: Recapture payment owed to state

**Example: Highland Park ISD (Dallas County)**
- Property value: $16 billion
- Students: 6,800
- Per-student value: $2,353,000
- Excess per student: $2,353,000 - $319,500 = $2,033,500
- Total excess wealth: $2,033,500 × 6,800 = $13.8 billion
- Recapture payment (varies): $200-$400 million annually

## Impact on Property Taxes

### Higher Tax Rates in Recapture Districts

**Why Recapture Districts Have Higher Taxes:**
- Must raise revenue for local schools
- PLUS raise revenue for recapture payment
- Total ISD tax rate often 1.3-1.5% vs. 1.0-1.2% in non-recapture districts

### Tax Rate Components

**M&O (Maintenance & Operations) Tax:**
- Funds day-to-day school operations
- Maximum rate: $1.0681 per $100 valuation (2024)
- Subject to recapture if district is property-wealthy

**I&S (Interest & Sinking) Tax:**
- Pays for school bonds (buildings, infrastructure)
- No maximum rate (voter approved)
- NOT subject to recapture

**Total ISD Tax = M&O Rate + I&S Rate**

### Real-World Examples

**High Recapture District (Highland Park ISD):**
- Total tax rate: ~$1.40 per $100
- M&O: $0.8681
- I&S: $0.53
- Annual recapture: $380+ million

**Moderate Recapture District (Eanes ISD, Austin):**
- Total tax rate: ~$1.21 per $100
- M&O: $0.86
- I&S: $0.35
- Annual recapture: $100+ million

**No Recapture District (Typical Rural District):**
- Total tax rate: ~$1.15 per $100
- M&O: $0.95
- I&S: $0.20
- Recapture: $0

## Major Recapture Districts in Texas

### Highest Per-Student Wealth (Pay Most Recapture)

**Dallas-Fort Worth:**
- Highland Park ISD (Dallas)
- University Park (Dallas)
- Carroll ISD (Southlake)
- Lovejoy ISD (Allen)
- Coppell ISD

**Austin Area:**
- Eanes ISD (Westlake)
- Lake Travis ISD
- Dripping Springs ISD
- Leander ISD (some years)

**Houston Area:**
- Bellaire ISD
- Spring Branch ISD
- Katy ISD (some campuses)

**Other Notable:**
- Alamo Heights ISD (San Antonio)
- Argyle ISD (Denton County)
- Barbers Hill ISD (Houston area)

### Why These Districts are Property-Wealthy

**Factors:**
1. High home values (affluent suburbs)
2. Commercial property (malls, offices)
3. Industrial property (refineries, data centers)
4. Low student population relative to property value
5. Newer development with high-value homes

## How to Find If Your District Pays Recapture

### Check Texas Education Agency (TEA) Data
- Visit TEA.texas.gov
- Search "Chapter 41" or "Recapture"
- View annual list of property-wealthy districts

### Check School District Budget
- Most districts publish annual budget online
- Look for "recapture payment" or "Chapter 41 payment"
- Typically in "expenditures" section

### Ask School District
- Contact district finance office
- Public information request for recapture amount

## Tax Impact Calculator Inputs

### Property Details
**Appraised Value:** County appraisal district value
**Homestead Exemption:** Reduces taxable value (Texas offers $100,000 school exemption)
**Over-65 Exemption:** Additional $10,000 if homeowner is 65+

### School District Tax Rates
**M&O Rate:** Maintenance & operations rate (per $100 valuation)
**I&S Rate:** Interest & sinking (bond) rate
**Total ISD Rate:** Sum of M&O + I&S

### Other Taxing Entities
**County Tax:** Typical 0.20-0.50%
**City Tax:** Typical 0.30-0.80%
**Special Districts:** Hospital, college, MUD, etc.

## Understanding Your Results

### Annual School District Tax
Total ISD tax = (Taxable value after exemptions ÷ 100) × Total ISD rate

### Recapture Portion (Estimated)
In high-recapture districts, 30-50% of M&O taxes go to recapture
- Cannot be precisely allocated to individual homes
- Calculator estimates based on district-wide recapture percentage

### Total Property Tax Bill
Sum of all taxing entities:
- School district (ISD)
- County
- City (if applicable)
- Special districts

### Comparison to Non-Recapture District
Shows how much extra you pay vs. typical non-recapture district with similar services

## Pros and Cons of Living in Recapture Districts

### Advantages
✅ Excellent schools (top-rated, high-performing)
✅ Higher property values (strong appreciation)
✅ Affluent neighborhoods (low crime, good amenities)
✅ Strong community support for schools
✅ Better teacher pay and facilities

### Disadvantages
❌ Higher property taxes (often 15-30% more than similar-value home elsewhere)
❌ Recapture payments don't benefit local students
❌ Taxpayer frustration ("where's my money going?")
❌ Ongoing political controversy
❌ Pressure to increase taxes to maintain excellence despite recapture

## Strategies for Dealing with High Recapture Taxes

### Strategy 1: Homestead Exemption (Must Apply)
- $100,000 school district exemption (automatic for primary residence)
- Over-65: Additional $10,000
- Disabled veteran: Up to 100% exemption
- **Apply with county appraisal district annually (first year, then auto-renews)**

### Strategy 2: Protest Appraisal
- Protest excessive appraisal values
- Can reduce tax bill significantly
- Online protests available in most counties
- Deadline: Usually May 15

### Strategy 3: Tax Ceiling for Over-65/Disabled
- School taxes frozen at current level for life
- Even if home value increases
- Must apply with appraisal district
- Saves thousands in high-appreciation areas

### Strategy 4: Consider Non-Recapture Districts
- Strong schools exist in non-recapture districts
- Dallas: Plano ISD, Frisco ISD (some portions)
- Austin: Round Rock ISD, Pflugerville ISD
- Houston: Cy-Fair ISD, Clear Creek ISD
- May save $2,000-$5,000/year on similar home

### Strategy 5: Accept Trade-Off
- Premium for top schools is substantial
- May be worth it for children's education
- Strong resale value offsets higher taxes
- Tax deductibility helps (up to $10,000 SALT cap)

## Political Controversy and Reform Efforts

### Arguments Against Robin Hood

**Local Control:**
- "Our local taxes should benefit our local students"
- Recapture removes local control over funds

**Double Taxation:**
- "We pay high taxes but don't see the benefit locally"
- Perception of unfairness

**Inefficiency:**
- "Why punish successful districts?"
- Disincentive for economic development

### Arguments For Robin Hood

**Equity:**
- All Texas children deserve quality education
- Property wealth ≠ moral superiority

**State Responsibility:**
- State constitution requires equitable education
- Wealthier areas can afford to help

**Reality of Geography:**
- Commercial property often concentrated in specific areas
- Students everywhere need schools

### Reform Proposals

**Proposed Alternatives:**
1. State income tax (constitutionally prohibited)
2. Higher state sales tax
3. Business activity tax expansion
4. Lottery/gambling revenue
5. Different property wealth threshold

**Reality:** No consensus on alternative, Robin Hood continues

## Real-World Tax Comparison

### Example 1: $500,000 Home in Highland Park ISD (High Recapture)
**Appraised Value:** $500,000
**Homestead Exemption:** $100,000
**Taxable Value:** $400,000

**ISD Tax (1.40%):** $5,600
**County Tax (0.24%):** $960
**City Tax (0.64%):** $2,560
**Total:** $9,120/year ($760/month)

**Estimated recapture portion of ISD tax:** ~$2,500

### Example 2: $500,000 Home in Frisco ISD (No/Low Recapture)
**Appraised Value:** $500,000
**Homestead Exemption:** $100,000
**Taxable Value:** $400,000

**ISD Tax (1.21%):** $4,840
**County Tax (0.24%):** $960
**City Tax (0.38%):** $1,520
**Total:** $7,320/year ($610/month)

**Savings vs. Highland Park:** $1,800/year ($150/month)

### Example 3: $350,000 Home in Rural Non-Recapture District
**Appraised Value:** $350,000
**Homestead Exemption:** $100,000
**Taxable Value:** $250,000

**ISD Tax (1.15%):** $2,875
**County Tax (0.45%):** $1,125
**City Tax:** $0
**Total:** $4,000/year ($333/month)

## Using This Calculator

### Step 1: Find Your Appraisal Value
- Check your county appraisal district website
- Look for "Property Search" or "Appraisal"
- Note your appraised value

### Step 2: Identify Exemptions
- Check if homestead exemption is applied
- Note any over-65, disabled, or veteran exemptions

### Step 3: Find Tax Rates
- Check your property tax statement
- Or visit school district website
- Note M&O rate, I&S rate, other entity rates

### Step 4: Determine If District Pays Recapture
- Search "Texas [Your ISD] recapture"
- Check TEA Chapter 41 list
- Review district budget documents

### Step 5: Run Calculation
- Input values into calculator
- Review total tax burden
- Compare to alternative districts if considering a move

## Conclusion

Texas's "Robin Hood" school finance system adds hundreds to thousands of dollars annually to property taxes in property-wealthy districts. While these districts often offer excellent schools, homeowners effectively subsidize education statewide through recapture payments.

For a $500,000 home in a high-recapture district like Highland Park or Eanes, you might pay $1,500-$3,000 more annually compared to a similar home in a non-recapture district—money that leaves your local community.

Understanding this system is crucial for:
- Budgeting accurately for homeownership
- Choosing between school districts
- Evaluating true cost of living in "top-rated" school areas
- Protesting appraisals to minimize tax burden
- Utilizing exemptions and tax ceilings (over-65)

Use this calculator to estimate your Robin Hood recapture impact and make informed decisions about where to live in Texas.

### Next Steps
1. Find your property's appraised value (county website)
2. Check your school district's tax rates
3. Determine if your district pays recapture (TEA website)
4. Calculate your annual tax bill using this tool
5. Compare to alternative districts if considering a move
6. Apply for all available exemptions
7. Consider protesting your appraisal value

Texas property taxes are high—especially in recapture districts. Know the facts, plan accordingly, and maximize your exemptions to reduce the burden.
    `,
  },
  calculator: {
    fields: [
      { name: "appraisedValue", label: "Property Appraised Value ($)", type: "number", defaultValue: "500000" },
      { name: "homesteadExemption", label: "Homestead Exemption ($)", type: "number", defaultValue: "100000" },
      { name: "over65Exemption", label: "Over-65 Exemption ($)", type: "number", defaultValue: "0" },
      { name: "isdMORate", label: "ISD M&O Tax Rate (per $100)", type: "number", defaultValue: "0.8681" },
      { name: "isdISRate", label: "ISD I&S Tax Rate (per $100)", type: "number", defaultValue: "0.40" },
      { name: "countyRate", label: "County Tax Rate (per $100)", type: "number", defaultValue: "0.24" },
      { name: "cityRate", label: "City Tax Rate (per $100)", type: "number", defaultValue: "0.50" },
      { name: "recapturePercentage", label: "Est. Recapture % of M&O (0-60%)", type: "number", defaultValue: "40" },
    ],
    results: [
      { label: "Taxable Value", isCurrency: true },
      { label: "ISD M&O Tax", isCurrency: true },
      { label: "ISD I&S Tax", isCurrency: true },
      { label: "Total ISD Tax", isCurrency: true },
      { label: "Estimated Recapture Portion", isCurrency: true },
      { label: "County Tax", isCurrency: true },
      { label: "City Tax", isCurrency: true },
      { label: "Total Annual Property Tax", isCurrency: true },
      { label: "Monthly Property Tax", isCurrency: true },
    ],
    calculate: (values) => {
      const taxableValue = values.appraisedValue - values.homesteadExemption - values.over65Exemption;
      
      const isdMOTax = (taxableValue / 100) * values.isdMORate;
      const isdISTax = (taxableValue / 100) * values.isdISRate;
      const totalISDTax = isdMOTax + isdISTax;
      
      const estimatedRecapture = isdMOTax * (values.recapturePercentage / 100);
      
      const countyTax = (taxableValue / 100) * values.countyRate;
      const cityTax = (taxableValue / 100) * values.cityRate;
      
      const totalAnnualTax = totalISDTax + countyTax + cityTax;
      const monthlyTax = totalAnnualTax / 12;

      return [
        { label: "Taxable Value", value: Math.max(taxableValue, 0).toFixed(2), isCurrency: true },
        { label: "ISD M&O Tax", value: isdMOTax.toFixed(2), isCurrency: true },
        { label: "ISD I&S Tax", value: isdISTax.toFixed(2), isCurrency: true },
        { label: "Total ISD Tax", value: totalISDTax.toFixed(2), isCurrency: true },
        { label: "Estimated Recapture Portion", value: estimatedRecapture.toFixed(2), isCurrency: true },
        { label: "County Tax", value: countyTax.toFixed(2), isCurrency: true },
        { label: "City Tax", value: cityTax.toFixed(2), isCurrency: true },
        { label: "Total Annual Property Tax", value: totalAnnualTax.toFixed(2), isCurrency: true },
        { label: "Monthly Property Tax", value: monthlyTax.toFixed(2), isCurrency: true },
      ];
    },
  },
};
