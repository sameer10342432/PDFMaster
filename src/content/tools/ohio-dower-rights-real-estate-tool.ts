import { CalculatorContent } from '@/types';

export const OHIO_DOWER_RIGHTS_REAL_ESTATE_TOOL_CONTENT: CalculatorContent = {
  title: 'Ohio Dower Rights Real Estate Tool',
  description: 'Calculate Ohio dower rights impact on real estate transactions - spousal property rights and release requirements',
  slug: 'ohio-dower-rights-real-estate-tool',
  icon: '⚖️',
  category: 'Legal Tools',
  article: {
    title: 'Understanding Ohio Dower Rights in Real Estate',
    content: `
    <h2>Ohio Dower Rights Complete Guide</h2>
    <p>Ohio is one of only three states (along with Arkansas and Kentucky) that still recognizes dower rights - an archaic but legally enforceable spousal property right that affects virtually every real estate transaction in Ohio. Understanding dower rights is essential for buying, selling, or financing Ohio real estate.</p>
    
    <h3>What are Dower Rights?</h3>
    <p>Dower rights are Ohio's statutory protection for spouses regarding real property:</p>
    <ul>
      <li><strong>Automatic Right:</strong> Non-owner spouse automatically has interest in property even if not on deed</li>
      <li><strong>1/3 Interest:</strong> Spouse entitled to 1/3 life estate in property upon owner's death</li>
      <li><strong>Cannot Be Defeated:</strong> Dower cannot be eliminated by will or other means without spouse's release</li>
      <li><strong>Applies to All Property:</strong> Covers any real property owned during marriage</li>
      <li><strong>Release Required:</strong> Non-owner spouse must sign documents to release dower for sale or mortgage</li>
    </ul>
    
    <h3>Ohio Dower Law (ORC 2103.02)</h3>
    <p>Ohio Revised Code Section 2103.02 establishes dower rights:</p>
    <ul>
      <li><strong>Surviving Spouse:</strong> Entitled to 1/3 life estate in deceased spouse's real property</li>
      <li><strong>During Marriage:</strong> Dower attaches to all property owned during marriage</li>
      <li><strong>Cannot Be Sold Without Consent:</strong> Property cannot be conveyed clear of dower without non-owner spouse's signature</li>
      <li><strong>Affects Mortgages:</strong> Lenders require dower release to have first lien position</li>
      <li><strong>Release Must Be Recorded:</strong> Dower release must be in deed or separate recorded document</li>
    </ul>
    
    <h3>How Dower Rights Affect Real Estate Transactions</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Transaction Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Dower Impact</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Property Sale</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Non-owner spouse must sign deed to release dower rights</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mortgage/Refinance</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Non-owner spouse must sign mortgage documents</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Property Transfer to Children</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Spouse must consent to transfer</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">LLC/Trust Transfer</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Dower release generally required</td>
      </tr>
    </table>
    
    <h3>Dower vs. Curtesy</h3>
    <p>Ohio law distinguishes between dower (wife's rights) and curtesy (husband's rights):</p>
    <ul>
      <li><strong>Historical Difference:</strong> Originally, curtesy required children be born of marriage; dower did not</li>
      <li><strong>Modern Ohio Law:</strong> Since 1990, both spouses have identical rights regardless of gender</li>
      <li><strong>Terminology Still Used:</strong> Legal documents may still reference "dower and curtesy"</li>
      <li><strong>Practical Effect:</strong> No functional difference in Ohio today</li>
    </ul>
    
    <h3>When Dower Rights Apply</h3>
    <p>Scenarios where dower rights are relevant:</p>
    <ul>
      <li><strong>Married Couples:</strong> One spouse on title, other not (most common scenario)</li>
      <li><strong>Property Acquired Before Marriage:</strong> Dower attaches once married</li>
      <li><strong>Inheritance:</strong> Property inherited by one spouse still subject to dower</li>
      <li><strong>Business Property:</strong> Even commercial real estate subject to dower</li>
      <li><strong>Out-of-State Owner:</strong> Ohio dower applies if property is in Ohio</li>
    </ul>
    
    <h3>How to Release Dower Rights</h3>
    <p>Methods for releasing Ohio dower rights:</p>
    <ul>
      <li><strong>Signature on Deed:</strong> Non-owner spouse signs deed as "grantor for purposes of releasing dower"</li>
      <li><strong>Mortgage Signature:</strong> Spouse signs mortgage to subordinate dower to lien</li>
      <li><strong>Separate Release:</strong> Recorded dower release document</li>
      <li><strong>Prenuptial Agreement:</strong> Can waive future dower rights (must be in writing and recorded)</li>
      <li><strong>Divorce Decree:</strong> Typically includes dower release language</li>
    </ul>
    
    <h3>Consequences of Not Releasing Dower</h3>
    <p>What happens when dower isn't properly released:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scenario</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Consequence</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Sale Without Spouse Signature</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Buyer receives unmarketable title; spouse retains 1/3 interest</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Mortgage Without Spouse</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Dower interest superior to mortgage lien</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Foreclosure</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Spouse's dower survives foreclosure if not released</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Owner's Death</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Spouse entitled to 1/3 life estate regardless of will</td>
      </tr>
    </table>
    
    <h3>Dower Rights in Divorce</h3>
    <p>How Ohio divorce affects dower:</p>
    <ul>
      <li><strong>Divorce Terminates Dower:</strong> Final divorce decree eliminates future dower rights</li>
      <li><strong>Property Division:</strong> Dower separate from marital property division</li>
      <li><strong>QDRO Not Sufficient:</strong> Qualified Domestic Relations Order doesn't automatically release dower</li>
      <li><strong>Explicit Release Needed:</strong> Decree should specifically address dower release</li>
      <li><strong>Post-Divorce Sales:</strong> May need ex-spouse signature if dower not properly released in divorce</li>
    </ul>
    
    <h3>Dower Impact on Title Insurance</h3>
    <p>How title insurance handles dower:</p>
    <ul>
      <li><strong>Required Exception:</strong> Title policies include dower exception if spouse didn't sign</li>
      <li><strong>Unmarketable Title:</strong> Missing dower release makes title unmarketable</li>
      <li><strong>Title Search:</strong> Examiner reviews marriage status and deed signatures</li>
      <li><strong>Affidavit of Marital Status:</strong> Sellers typically sign affidavit confirming single/married status</li>
      <li><strong>Claims:</strong> Title insurance covers losses from undisclosed dower rights</li>
    </ul>
    
    <h3>Special Dower Situations</h3>
    <p>Unique scenarios involving Ohio dower rights:</p>
    <ul>
      <li><strong>Separated Spouses:</strong> Legal separation doesn't terminate dower - divorce required</li>
      <li><strong>Missing Spouse:</strong> Court petition required to release dower if spouse can't be located</li>
      <li><strong>Mentally Incompetent Spouse:</strong> Guardian or court order needed for dower release</li>
      <li><strong>Same-Sex Marriage:</strong> Ohio dower applies equally to same-sex marriages</li>
      <li><strong>Common Law Marriage:</strong> Ohio doesn't recognize common law marriage (so no dower)</li>
    </ul>
    
    <h3>Dower Rights by Ohio County</h3>
    <p>Dower enforcement is consistent statewide, but some counties have specific practices:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">County</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notable Practice</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Cuyahoga (Cleveland)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Strict review of marital status affidavits</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Franklin (Columbus)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Requires notarized marital status statements</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hamilton (Cincinnati)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">May require marriage certificate for verification</td>
      </tr>
    </table>
    
    <h3>Dower Waiver in Prenuptial Agreements</h3>
    <p>How to waive dower before marriage:</p>
    <ul>
      <li><strong>Written Agreement Required:</strong> Oral waiver not enforceable</li>
      <li><strong>Must Be Recorded:</strong> Prenup with dower waiver should be recorded in county where property located</li>
      <li><strong>Specific Language:</strong> Must explicitly waive "dower and curtesy rights"</li>
      <li><strong>Independent Counsel:</strong> Each party should have separate legal representation</li>
      <li><strong>Full Disclosure:</strong> Must disclose all property subject to waiver</li>
    </ul>
    
    <h3>Calculating Dower Value</h3>
    <p>How to value dower interest for estate planning:</p>
    <ul>
      <li><strong>1/3 Life Estate:</strong> Value depends on spouse's age and life expectancy</li>
      <li><strong>Actuarial Tables:</strong> IRS life expectancy tables used for valuation</li>
      <li><strong>Property Value:</strong> Based on fair market value at owner's death</li>
      <li><strong>Income-Producing Property:</strong> Spouse entitled to 1/3 of rental income during life estate</li>
    </ul>
    
    <h3>Dower vs. Homestead Rights</h3>
    <p>Ohio homestead rights are different from dower:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Dower Rights</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Homestead Rights</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Purpose</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Protect spouse's interest in property</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Protect property from creditors</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Amount</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1/3 life estate</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Up to $145,425 (2024)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Applies To</td>
        <td style="border: 1px solid #ddd; padding: 8px;">All real property</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Primary residence only</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Waiver</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Must sign release</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Must be claimed</td>
      </tr>
    </table>
    
    <h3>Dower Rights for Investors</h3>
    <p>How dower affects Ohio real estate investors:</p>
    <ul>
      <li><strong>Married Sellers:</strong> Always verify spouse will sign deed</li>
      <li><strong>Foreclosure Purchases:</strong> Check if dower was released in foreclosure</li>
      <li><strong>Estate Sales:</strong> Surviving spouse may have dower claim even if not in will</li>
      <li><strong>Short Sales:</strong> Lender must get spouse signature on release</li>
      <li><strong>Wholesaling:</strong> Assignment contracts should require dower release at closing</li>
    </ul>
    
    <h3>Recent Ohio Dower Legislation</h3>
    <p>Legislative attempts to modify or eliminate dower:</p>
    <ul>
      <li><strong>2017 Bill (Failed):</strong> Proposed elimination of dower rights</li>
      <li><strong>Opposition:</strong> Family law attorneys and consumer advocates opposed repeal</li>
      <li><strong>Alternative Proposals:</strong> Opt-in system or automatic release after certain period</li>
      <li><strong>Current Status:</strong> Dower remains in full force in Ohio as of 2024</li>
      <li><strong>Modernization Efforts:</strong> Ongoing discussions to update archaic law</li>
    </ul>
    
    <h3>Dower Rights in Estate Planning</h3>
    <p>Integrating dower into Ohio estate plans:</p>
    <ul>
      <li><strong>Cannot Bypass with Will:</strong> Will cannot defeat dower rights</li>
      <li><strong>Trusts:</strong> Transfer to trust requires dower release</li>
      <li><strong>TOD Deeds:</strong> Transfer on Death deeds don't eliminate dower</li>
      <li><strong>Life Estate Deeds:</strong> Can preserve or waive dower depending on language</li>
      <li><strong>Planning Strategy:</strong> Joint ownership avoids dower complications</li>
    </ul>
    
    <h3>How Other States Compare</h3>
    <p>Ohio is one of few states with dower:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Dower/Curtesy Status</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Ohio</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Dower/curtesy still in effect</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Arkansas</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Dower still exists</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Kentucky</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Dower still exists</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Most Other States</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Abolished dower (use elective share or community property)</td>
      </tr>
    </table>
    
    <h3>Common Dower Mistakes</h3>
    <ul>
      <li><strong>Assuming Title Determines Rights:</strong> Spouse not on title still has dower interest</li>
      <li><strong>Ignoring Pre-Marriage Property:</strong> Dower attaches once married, regardless of when purchased</li>
      <li><strong>Thinking Divorce Automatically Releases:</strong> Explicit release language required</li>
      <li><strong>Forgetting Commercial Property:</strong> Dower applies to all real estate, not just residential</li>
      <li><strong>Relying on Quitclaim Deed:</strong> Non-spouse grantee still subject to dower interest</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'propertyValue',
        label: 'Property Value',
        type: 'currency',
        required: true,
        placeholder: '250000',
        helpText: 'Current fair market value of the property'
      },
      {
        name: 'ownershipStatus',
        label: 'Property Ownership',
        type: 'select',
        required: true,
        options: [
          { value: 'singleOwner', label: 'One Spouse on Title' },
          { value: 'jointOwners', label: 'Both Spouses on Title' },
          { value: 'singlePerson', label: 'Single Person (No Dower Issue)' },
        ],
        helpText: 'Current ownership structure'
      },
      {
        name: 'maritalStatus',
        label: 'Marital Status',
        type: 'select',
        required: true,
        options: [
          { value: 'married', label: 'Currently Married' },
          { value: 'divorced', label: 'Divorced (Dower Released in Divorce)' },
          { value: 'widowed', label: 'Widowed' },
          { value: 'single', label: 'Never Married' },
        ],
        helpText: 'Current marital status of property owner'
      },
      {
        name: 'spouseAge',
        label: 'Non-Owner Spouse Age (if applicable)',
        type: 'number',
        required: false,
        placeholder: '55',
        helpText: 'Age affects life estate valuation'
      },
      {
        name: 'transactionType',
        label: 'Transaction Type',
        type: 'select',
        required: true,
        options: [
          { value: 'sale', label: 'Property Sale' },
          { value: 'mortgage', label: 'Mortgage/Refinance' },
          { value: 'estatePlanning', label: 'Estate Planning/Transfer' },
          { value: 'divorce', label: 'Divorce Property Division' },
        ],
        helpText: 'Type of transaction requiring dower consideration'
      },
      {
        name: 'dowerReleased',
        label: 'Has Dower Been Released?',
        type: 'select',
        required: true,
        options: [
          { value: 'yes', label: 'Yes - Spouse Signed Release' },
          { value: 'no', label: 'No - Dower Still Exists' },
          { value: 'unknown', label: 'Unknown/Uncertain' },
        ],
        helpText: 'Whether non-owner spouse has released dower rights'
      }
    ],
    results: [
      {
        name: 'dowerStatus',
        label: 'Dower Rights Status',
        type: 'text',
        helpText: 'Whether dower rights exist and need to be addressed'
      },
      {
        name: 'dowerValue',
        label: 'Estimated Dower Interest Value',
        type: 'currency',
        helpText: 'Approximate value of dower life estate (if applicable)'
      },
      {
        name: 'actionRequired',
        label: 'Action Required',
        type: 'text',
        helpText: 'What needs to be done regarding dower'
      },
      {
        name: 'riskLevel',
        label: 'Transaction Risk Level',
        type: 'text',
        helpText: 'Risk if dower not properly addressed'
      },
      {
        name: 'recommendations',
        label: 'Recommendations',
        type: 'text',
        helpText: 'Next steps to address dower rights'
      },
      {
        name: 'costToClear',
        label: 'Estimated Cost to Clear Dower',
        type: 'currency',
        helpText: 'Legal and administrative costs to release dower rights'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const propertyValue = parseFloat(inputs.propertyValue) || 0;
      const ownershipStatus = inputs.ownershipStatus || 'singleOwner';
      const maritalStatus = inputs.maritalStatus || 'married';
      const spouseAge = parseFloat(inputs.spouseAge) || 55;
      const transactionType = inputs.transactionType || 'sale';
      const dowerReleased = inputs.dowerReleased || 'unknown';

      let dowerStatus = '';
      let dowerValue = 0;
      let actionRequired = '';
      let riskLevel = '';
      let recommendations = '';

      // Determine if dower exists
      const dowerExists = (ownershipStatus === 'singleOwner' && maritalStatus === 'married' && dowerReleased !== 'yes');

      if (!dowerExists) {
        if (ownershipStatus === 'jointOwners') {
          dowerStatus = 'No Dower Issue - Both spouses on title';
          actionRequired = 'None - Both spouses will sign as owners';
          riskLevel = 'None';
          recommendations = 'No dower concerns. Proceed with transaction normally.';
        } else if (maritalStatus === 'single' || maritalStatus === 'widowed') {
          dowerStatus = 'No Dower Issue - Owner not married';
          actionRequired = 'Provide affidavit of single/widowed status';
          riskLevel = 'None';
          recommendations = 'Execute marital status affidavit at closing.';
        } else if (dowerReleased === 'yes') {
          dowerStatus = 'Dower Previously Released';
          actionRequired = 'Verify release is recorded';
          riskLevel = 'Low';
          recommendations = 'Title company should verify recorded dower release.';
        }
        dowerValue = 0;
      } else {
        // Dower exists and needs to be addressed
        dowerStatus = 'DOWER RIGHTS EXIST - Spouse must sign';
        
        // Calculate dower value (1/3 life estate)
        // Using simplified actuarial calculation
        const lifeExpectancy = Math.max(1, 85 - spouseAge); // Simplified
        const oneThirdValue = propertyValue / 3;
        // Present value of life estate (simplified - actual uses IRS tables)
        const discountRate = 0.03; // 3% discount rate
        const presentValueFactor = (1 - Math.pow(1 + discountRate, -lifeExpectancy)) / discountRate;
        dowerValue = Math.round(oneThirdValue * (presentValueFactor / lifeExpectancy));

        switch (transactionType) {
          case 'sale':
            actionRequired = 'Non-owner spouse MUST sign deed to release dower';
            riskLevel = 'CRITICAL - Sale cannot close without spouse signature';
            recommendations = 'Contact spouse immediately to arrange closing attendance. Consider power of attorney if spouse cannot attend.';
            break;
          case 'mortgage':
            actionRequired = 'Non-owner spouse MUST sign mortgage documents';
            riskLevel = 'HIGH - Lender will not fund without dower release';
            recommendations = 'Spouse must sign mortgage and note. Coordinate with lender on required documents.';
            break;
          case 'estatePlanning':
            actionRequired = 'Obtain dower release or include spouse in transfer';
            riskLevel = 'MODERATE - Affects estate distribution';
            recommendations = 'Consult estate planning attorney. Consider joint ownership or trust structure.';
            break;
          case 'divorce':
            actionRequired = 'Include dower release language in divorce decree';
            riskLevel = 'HIGH - Failure to release complicates future sales';
            recommendations = 'Ensure divorce decree explicitly releases dower rights. Record decree in county where property located.';
            break;
        }
      }

      // Calculate cost to clear dower
      let costToClear = 0;
      if (dowerExists) {
        // Typical costs: attorney fees, filing fees, title work
        switch (transactionType) {
          case 'sale':
            costToClear = 0; // Usually handled at closing, no separate cost
            break;
          case 'mortgage':
            costToClear = 0; // Spouse signs at closing, no separate cost
            break;
          case 'estatePlanning':
            costToClear = 750; // Attorney fees for dower release document
            break;
          case 'divorce':
            costToClear = 500; // Included in divorce decree preparation
            break;
        }
      }

      return {
        dowerStatus,
        dowerValue,
        actionRequired,
        riskLevel,
        recommendations,
        costToClear
      };
    }
  }
};
