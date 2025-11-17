import { CalculatorContent } from "@/types";

export const BREAK_LEASE_COST_CALCULATOR_CONTENT: CalculatorContent = {
  title: "Should I Break My Lease? Cost Calculator | Breaking Lease Penalty Calculator",
  description:
    "Calculate the total cost of breaking your lease early including penalties, remaining rent, forfeited deposits, and relocation costs. Make an informed decision about lease termination.",
  icon: "Icon",
  category: "Calculators",
  slug: "break-lease-cost-calculator",
  article: {
    title: "Should You Break Your Lease? Understanding the True Costs",
    content: `
# Should I Break My Lease? Complete Cost Analysis

Breaking a lease is a significant financial decision that requires careful consideration. This calculator helps you understand all the costs involved in lease termination to make an informed choice.

## Common Reasons for Breaking a Lease

- **Job Relocation**: New employment opportunity in a different city
- **Financial Hardship**: Unable to afford current rent payments
- **Living Situation Changes**: Relationship changes, family needs
- **Property Issues**: Unresolved maintenance or safety concerns
- **Military Deployment**: Active duty orders requiring relocation

## Costs to Consider When Breaking a Lease

### 1. Early Termination Fee
Most leases include a specific penalty for early termination, typically:
- 1-2 months' rent as a flat fee
- Percentage of remaining lease value
- Forfeited security deposit

### 2. Remaining Rent Obligation
Depending on your state and lease terms:
- You may owe rent until a new tenant is found
- Some states require landlords to "mitigate damages"
- You might be responsible for the full lease term

### 3. Lost Security Deposit
- Original security deposit (often 1-2 months' rent)
- Cleaning fees
- Repair costs beyond normal wear and tear

### 4. Relocation Costs
- Moving company or truck rental
- Packing supplies
- Storage fees (if needed)
- New security deposit and first month's rent
- Application fees for new rental

### 5. Lost Prepaid Rent
- Any rent paid in advance that won't be refunded
- Prepaid utilities or services

## State-Specific Considerations

### Tenant-Friendly States
Some states have laws protecting tenants who break leases:
- **California**: Landlords must make reasonable effort to re-rent
- **New York**: Similar mitigation requirements
- **Illinois**: Specific provisions for domestic violence victims

### Landlord-Friendly States
Other states give more power to landlords:
- **Texas**: May hold tenant responsible for entire lease
- **Florida**: Stricter enforcement of lease terms
- **Georgia**: Limited tenant protections

## Legal Ways to Break a Lease Without Penalty

1. **Military Deployment**: SCRA protection for active duty
2. **Uninhabitable Conditions**: Serious health/safety violations
3. **Landlord Harassment**: Privacy violations or illegal entry
4. **Domestic Violence**: Protection available in many states
5. **Lease Violation by Landlord**: Material breach of contract
6. **Early Termination Clause**: If included in your lease

## How to Minimize Breaking Lease Costs

### 1. Review Your Lease Agreement
- Look for early termination clauses
- Check notice requirements
- Understand penalty structure

### 2. Negotiate with Landlord
- Explain your situation honestly
- Offer to help find replacement tenant
- Propose payment plan for penalties

### 3. Find a Replacement Tenant
- Advertise the unit yourself
- Screen qualified applicants
- Present options to landlord

### 4. Document Everything
- Take photos of unit condition
- Keep copies of all communications
- Get everything in writing

### 5. Check State Laws
- Research tenant rights in your state
- Understand landlord obligations
- Know your legal protections

## When It Makes Sense to Break Your Lease

Breaking your lease might be financially justified if:
- **New job salary** > lease break costs + relocation
- **Current rent** is significantly above market rate
- **Living situation** is causing health or safety issues
- **Financial hardship** will only worsen by staying
- **Legal protections** apply to your situation

## Calculation Example

**Scenario**: Breaking lease with 8 months remaining
- Monthly rent: $1,500
- Early termination fee: 2 months' rent ($3,000)
- Lost security deposit: $1,500
- Relocation costs: $2,000
- New deposit + first month: $3,000

**Total Cost**: $9,500

**vs. New Opportunity**:
- New job pays $20,000 more annually
- Break-even in: ~6 months

## Tips for a Smooth Lease Break

1. **Give Proper Notice**: Follow lease requirements (usually 30-60 days)
2. **Clean Thoroughly**: Maximize security deposit return
3. **Document Condition**: Photos/videos of unit before leaving
4. **Be Professional**: Maintain good relationship with landlord
5. **Get Written Agreement**: All terms of lease break in writing
6. **Forward Mail**: Set up forwarding with USPS
7. **Keep Records**: Save all documents for potential disputes

## Red Flags to Watch Out For

- **Excessive Penalties**: Far beyond actual landlord losses
- **Refusal to Mitigate**: Landlord won't try to re-rent
- **Security Deposit Disputes**: Unreasonable deductions
- **Illegal Fees**: Charges not in original lease
- **Credit Reporting Threats**: Used as intimidation tactic

## Alternative Options to Consider

Before breaking your lease, explore these alternatives:

### 1. Subletting
- Find someone to take over your lease
- Must get landlord approval
- You may remain responsible if subtenant defaults

### 2. Lease Transfer
- Completely transfer lease to new tenant
- Removes your liability
- Requires landlord consent

### 3. Month-to-Month Conversion
- Ask to switch to month-to-month
- May involve rent increase
- Provides flexibility with minimal penalty

### 4. Lease Buyout
- Negotiate one-time payment with landlord
- Often cheaper than full penalties
- Get agreement in writing

## Using This Calculator

Enter your lease details to see:
1. Total cost of breaking your lease
2. Comparison with staying through lease term
3. Break-even analysis for new opportunities
4. Recommendation based on your situation

**Important**: This calculator provides estimates. Always review your specific lease agreement and consult with a tenant rights attorney if needed.

## Final Checklist Before Breaking Your Lease

- [ ] Read entire lease agreement
- [ ] Calculate total costs (use this calculator)
- [ ] Research state tenant laws
- [ ] Contact landlord to discuss options
- [ ] Explore alternatives (sublet, transfer)
- [ ] Get all agreements in writing
- [ ] Document unit condition
- [ ] Set up mail forwarding
- [ ] Cancel utilities and services
- [ ] Request security deposit walkthrough

Breaking a lease is a serious decision with financial and legal implications. Use this calculator to understand the true costs and make the choice that's best for your situation.
    `,
  },
  calculator: {
    fields: [
      {
        name: "monthlyRent",
        label: "Monthly Rent ($)",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "monthsRemaining",
        label: "Months Remaining on Lease",
        type: "number",
        defaultValue: "8",
      },
      {
        name: "earlyTerminationFee",
        label: "Early Termination Fee (months of rent)",
        type: "number",
        defaultValue: "2",
      },
      {
        name: "securityDeposit",
        label: "Security Deposit ($)",
        type: "number",
        defaultValue: "1500",
      },
      {
        name: "relocationCosts",
        label: "Estimated Relocation Costs ($)",
        type: "number",
        defaultValue: "2000",
      },
      {
        name: "newDepositAndRent",
        label: "New Apartment (Deposit + First Month) ($)",
        type: "number",
        defaultValue: "3000",
      },
      {
        name: "newJobSalaryIncrease",
        label: "New Job Annual Salary Increase ($ - optional)",
        type: "number",
        defaultValue: "0",
      },
    ],
    results: [
      {
        label: "Total Cost to Break Lease",
        isCurrency: true,
      },
      {
        label: "Cost to Stay Through Lease",
        isCurrency: true,
      },
      {
        label: "Net Financial Impact",
        isCurrency: true,
      },
      {
        label: "Break-Even Period (months)",
        isCurrency: false,
      },
      {
        label: "Recommendation",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const {
        monthlyRent,
        monthsRemaining,
        earlyTerminationFee,
        securityDeposit,
        relocationCosts,
        newDepositAndRent,
        newJobSalaryIncrease,
      } = values;

      const rent = parseFloat(monthlyRent);
      const months = parseInt(monthsRemaining);
      const terminationFeeMonths = parseFloat(earlyTerminationFee);
      const deposit = parseFloat(securityDeposit);
      const relocation = parseFloat(relocationCosts);
      const newPlace = parseFloat(newDepositAndRent);
      const salaryIncrease = parseFloat(newJobSalaryIncrease) || 0;

      const terminationFee = rent * terminationFeeMonths;
      const totalBreakCost = terminationFee + deposit + relocation + newPlace;
      const costToStay = rent * months;
      const netImpact = totalBreakCost - costToStay;
      
      let breakEvenMonths = "N/A";
      let recommendation = "";

      if (salaryIncrease > 0) {
        const monthlyIncrease = salaryIncrease / 12;
        breakEvenMonths = (totalBreakCost / monthlyIncrease).toFixed(1);
        
        if (parseFloat(breakEvenMonths) < 12) {
          recommendation = `✅ BREAK LEASE - You'll recover costs in ${breakEvenMonths} months with your salary increase. The new opportunity is worth it!`;
        } else if (parseFloat(breakEvenMonths) < 24) {
          recommendation = `⚠️ CONSIDER CAREFULLY - Break-even period is ${breakEvenMonths} months. Evaluate non-financial factors too.`;
        } else {
          recommendation = `❌ STAY - It will take ${breakEvenMonths} months to recover costs. Consider alternatives like subletting.`;
        }
      } else {
        if (netImpact < 0) {
          recommendation = `✅ FINANCIALLY BENEFICIAL - Breaking lease saves you $${Math.abs(netImpact).toFixed(2)} compared to staying.`;
        } else if (netImpact < rent * 2) {
          recommendation = `⚠️ MODERATE COST - Breaking lease costs $${netImpact.toFixed(2)} more. Consider if non-financial factors justify this.`;
        } else {
          recommendation = `❌ EXPENSIVE - Breaking lease costs $${netImpact.toFixed(2)} more than staying. Explore alternatives first.`;
        }
      }

      return [
        {
          label: "Total Cost to Break Lease",
          value: totalBreakCost.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Cost to Stay Through Lease",
          value: costToStay.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Net Financial Impact",
          value: netImpact.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Break-Even Period (months)",
          value: breakEvenMonths,
          isCurrency: false,
        },
        {
          label: "Recommendation",
          value: recommendation,
          isCurrency: false,
        },
      ];
    },
  },
};
