import { CalculatorContent } from '@/types';

export const GIFTS_FOR_DOWN_PAYMENT_TAX_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Gifts for Down Payment Tax Calculator',
  description: 'Calculate federal gift tax implications when receiving monetary gifts for a home down payment',
  icon: 'Icon',
  category: 'Homeownership Planning',
  slug: 'gifts-for-down-payment-tax-calculator',
  article: {
    title: "Understanding Gift Tax for Down Payment Assistance",
    content: `
    <h2>Gift Tax Rules for Down Payment Gifts</h2>
    <p>Family members often help first-time buyers with down payment gifts. Understanding federal gift tax rules ensures you stay compliant and maximize benefits.</p>
    
    <h3>Federal Gift Tax Basics (2024-2025)</h3>
    <ul>
      <li><strong>Annual Exclusion:</strong> $18,000 per person per year (2024), $19,000 (2025)</li>
      <li><strong>Lifetime Exemption:</strong> $13.61 million (2024), $13.99 million (2025)</li>
      <li><strong>Who Pays:</strong> The donor (giver), not the recipient</li>
      <li><strong>Form 709:</strong> Required for gifts exceeding annual exclusion</li>
      <li><strong>Married Couples:</strong> Can give double the annual exclusion</li>
    </ul>
    
    <h3>How the Annual Exclusion Works</h3>
    <p><strong>Example 1:</strong> Parent gives child $18,000 in 2024 → No gift tax, no Form 709 needed</p>
    <p><strong>Example 2:</strong> Parent gives child $50,000 in 2024 → $32,000 exceeds exclusion, Form 709 required, but no tax due (applies to lifetime exemption)</p>
    <p><strong>Example 3:</strong> Both parents give child $18,000 each (total $36,000) → No gift tax, no Form 709</p>
    
    <h3>Strategies to Maximize Tax-Free Gifts</h3>
    <p><strong>1. Split Gifts Across Tax Years</strong></p>
    <ul>
      <li>Give $18,000 in December 2024 + $19,000 in January 2025 = $37,000 tax-free</li>
    </ul>
    
    <p><strong>2. Multiple Donors</strong></p>
    <ul>
      <li>Mom: $18,000, Dad: $18,000, Grandma: $18,000 = $54,000 tax-free</li>
    </ul>
    
    <p><strong>3. Married Couple Recipients</strong></p>
    <ul>
      <li>Parent can give $18,000 to child + $18,000 to child's spouse = $36,000 total</li>
    </ul>
    
    <p><strong>4. Gift Splitting (Married Donors)</strong></p>
    <ul>
      <li>Married couple elects gift splitting on Form 709 → $36,000 per recipient</li>
    </ul>
    
    <h3>Lender Requirements for Gift Funds</h3>
    <p>While gift tax may not apply, lenders require documentation:</p>
    <ul>
      <li><strong>Gift Letter:</strong> States amount, relationship, no repayment expected</li>
      <li><strong>Proof of Transfer:</strong> Bank statements showing donor's funds</li>
      <li><strong>Recipient's Account:</strong> Gift must be deposited and seasoned (30-60 days)</li>
      <li><strong>Acceptable Donors:</strong> Family members, fiancé, domestic partner (lender-specific)</li>
      <li><strong>Unacceptable Sources:</strong> Friends, employers, sellers (with exceptions)</li>
    </ul>
    
    <h3>State Gift Tax Considerations</h3>
    <p>Only Connecticut and Minnesota have separate state gift taxes:</p>
    <ul>
      <li><strong>Connecticut:</strong> Gifts over $9.1M (2024) subject to state tax</li>
      <li><strong>Minnesota:</strong> Gifts over $3M (2024) subject to state tax</li>
    </ul>
    
    <h3>When to File Form 709</h3>
    <p>Donors must file Form 709 if:</p>
    <ul>
      <li>Total gifts to one person exceed annual exclusion ($18,000 in 2024)</li>
      <li>Electing gift splitting with spouse</li>
      <li>Giving future interest gifts (trusts)</li>
    </ul>
    <p><strong>Deadline:</strong> April 15 of year following the gift</p>
    
    <h3>Common Myths Debunked</h3>
    <p><strong>Myth:</strong> "Recipients pay tax on gift money"</p>
    <p><strong>Truth:</strong> Recipients never pay federal gift tax; it's always the donor's responsibility.</p>
    
    <p><strong>Myth:</strong> "I can't accept more than $18,000"</p>
    <p><strong>Truth:</strong> You can receive unlimited gifts; the donor just needs to file Form 709 for amounts over exclusion.</p>
    
    <p><strong>Myth:</strong> "My parents will owe taxes on a $50,000 gift"</p>
    <p><strong>Truth:</strong> Likely no tax due; it reduces their lifetime exemption ($13.61M), and Form 709 is required.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "giftAmount",
        label: "Total Gift Amount",
        type: "number",
        placeholder: "50000",
        defaultValue: "50000",
      },
      {
        name: "numberOfDonors",
        label: "Number of Donors (Individuals)",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "marriedDonors",
        label: "Are Donors Married? (1 = Yes, 0 = No)",
        type: "number",
        placeholder: "1",
        defaultValue: "1",
      },
      {
        name: "annualExclusion",
        label: "Annual Gift Tax Exclusion (per person)",
        type: "number",
        placeholder: "18000",
        defaultValue: "18000",
      },
      {
        name: "lifetimeExemption",
        label: "Lifetime Gift Tax Exemption",
        type: "number",
        placeholder: "13610000",
        defaultValue: "13610000",
      },
    ],
    results: [
      { label: "Total Annual Exclusion Available", isCurrency: true },
      { label: "Amount Covered by Annual Exclusion", isCurrency: true },
      { label: "Taxable Gift (Exceeds Exclusion)", isCurrency: true },
      { label: "Lifetime Exemption Used", isCurrency: true },
      { label: "Remaining Lifetime Exemption", isCurrency: true },
      { label: "Gift Tax Owed", isCurrency: true },
      { label: "Form 709 Required?", isCurrency: false },
      { label: "Summary", isCurrency: false },
    ],
    calculate: (data: any) => {
      const giftAmount = Number(data.giftAmount) || 0;
      const numberOfDonors = Number(data.numberOfDonors) || 1;
      const marriedDonors = Number(data.marriedDonors) || 0;
      const annualExclusion = Number(data.annualExclusion) || 18000;
      const lifetimeExemption = Number(data.lifetimeExemption) || 13610000;
      
      // Calculate total exclusion
      let totalAnnualExclusion = 0;
      if (marriedDonors === 1 && numberOfDonors === 2) {
        totalAnnualExclusion = annualExclusion * 2;
      } else {
        totalAnnualExclusion = annualExclusion * numberOfDonors;
      }
      
      const amountCoveredByExclusion = Math.min(giftAmount, totalAnnualExclusion);
      const taxableGift = Math.max(0, giftAmount - totalAnnualExclusion);
      
      // Gift tax is rarely owed due to lifetime exemption
      const lifetimeExemptionUsed = Math.min(taxableGift, lifetimeExemption);
      const remainingLifetimeExemption = Math.max(0, lifetimeExemption - lifetimeExemptionUsed);
      const giftTaxOwed = Math.max(0, taxableGift - lifetimeExemption) * 0.40; // 40% tax rate above exemption
      
      const form709Required = taxableGift > 0 ? "✅ Yes - Donor must file Form 709" : "❌ No - Gift is within annual exclusion";
      
      let summary = "";
      if (giftTaxOwed > 0) {
        summary = "⚠️ Gift tax likely owed - Consult tax professional immediately";
      } else if (taxableGift > 0) {
        summary = `✅ No tax owed, but Form 709 required. Uses $${lifetimeExemptionUsed.toFixed(0)} of lifetime exemption.`;
      } else {
        summary = "✅ Gift fully covered by annual exclusion. No tax, no Form 709 needed.";
      }

      return [
        { label: "Total Annual Exclusion Available", value: `${totalAnnualExclusion.toFixed(2)}`, isCurrency: true },
        { label: "Amount Covered by Annual Exclusion", value: `${amountCoveredByExclusion.toFixed(2)}`, isCurrency: true },
        { label: "Taxable Gift (Exceeds Exclusion)", value: `${taxableGift.toFixed(2)}`, isCurrency: true },
        { label: "Lifetime Exemption Used", value: `${lifetimeExemptionUsed.toFixed(2)}`, isCurrency: true },
        { label: "Remaining Lifetime Exemption", value: `${remainingLifetimeExemption.toFixed(2)}`, isCurrency: true },
        { label: "Gift Tax Owed", value: `${giftTaxOwed.toFixed(2)}`, isCurrency: true },
        { label: "Form 709 Required?", value: form709Required, isCurrency: false },
        { label: "Summary", value: summary, isCurrency: false },
      ];
    },
  },
};
