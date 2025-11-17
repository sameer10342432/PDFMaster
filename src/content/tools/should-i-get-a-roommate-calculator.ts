import { CalculatorContent } from '@/types';

export const SHOULD_I_GET_A_ROOMMATE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Should I Get a Roommate? Calculator',
  description: 'Analyze the financial and lifestyle tradeoffs of living with a roommate to make an informed decision',
  icon: 'Icon',
  category: 'Renter Tools',
  slug: 'should-i-get-a-roommate-calculator',
  article: {
    title: "Complete Guide to Deciding Whether to Get a Roommate",
    content: `
    <h2>The Roommate Decision: Financial and Lifestyle Analysis</h2>
    <p>Deciding whether to live with a roommate is about more than just splitting rent. This guide helps you weigh the financial benefits against the lifestyle tradeoffs.</p>
    
    <h3>Financial Benefits of Having a Roommate</h3>
    <ul>
      <li><strong>Rent Savings:</strong> Typically 30-50% reduction in housing costs</li>
      <li><strong>Utility Split:</strong> Share electricity, gas, water, internet</li>
      <li><strong>Shared Supplies:</strong> Cleaning products, toilet paper, kitchen items</li>
      <li><strong>Lower Security Deposit:</strong> Often split between roommates</li>
      <li><strong>Furniture Sharing:</strong> No need to furnish entire place yourself</li>
      <li><strong>Better Location:</strong> Afford nicer neighborhood by splitting costs</li>
      <li><strong>More Space:</strong> Larger apartment for same or less money</li>
    </ul>
    
    <h3>Financial Costs of Having a Roommate</h3>
    <ul>
      <li><strong>Shared Liability:</strong> Risk if roommate doesn't pay their share</li>
      <li><strong>Move-Out Flexibility:</strong> Harder to break lease if only you want to leave</li>
      <li><strong>Potential Damage:</strong> Both liable for security deposit deductions</li>
      <li><strong>Replacement Costs:</strong> Finding new roommate if they leave</li>
    </ul>
    
    <h3>Lifestyle Benefits of Having a Roommate</h3>
    <ul>
      <li><strong>Social Connection:</strong> Built-in companionship and social life</li>
      <li><strong>Safety:</strong> Someone else home, especially at night</li>
      <li><strong>Shared Responsibilities:</strong> Chores and errands can be divided</li>
      <li><strong>Package Receiving:</strong> Someone home to accept deliveries</li>
      <li><strong>Pet Care:</strong> Help with feeding, walking, vet visits</li>
      <li><strong>Emergency Help:</strong> Someone available if you're sick or injured</li>
      <li><strong>Networking:</strong> Meet their friends, expand social circle</li>
    </ul>
    
    <h3>Lifestyle Costs of Having a Roommate</h3>
    <ul>
      <li><strong>Privacy Loss:</strong> Shared common areas, noise concerns</li>
      <li><strong>Lifestyle Conflicts:</strong> Different schedules, cleanliness standards</li>
      <li><strong>Guest Policy:</strong> Negotiate visitors, overnight guests</li>
      <li><strong>Kitchen Sharing:</strong> Fridge space, cooking time conflicts</li>
      <li><strong>Bathroom Sharing:</strong> Morning routine coordination</li>
      <li><strong>Personality Conflicts:</strong> Risk of disagreements and tension</li>
      <li><strong>Less Control:</strong> Can't make unilateral decisions about space</li>
    </ul>
    
    <h3>When a Roommate Makes Sense</h3>
    <ul>
      <li>You're paying >40% of income on housing alone</li>
      <li>You're new to an area and want to build social connections</li>
      <li>You travel frequently and want someone to watch your place</li>
      <li>You're saving for a specific goal (house, business, debt payoff)</li>
      <li>You enjoy social interaction and shared living</li>
      <li>You're young professional or recent graduate</li>
      <li>You want to live in a better neighborhood</li>
      <li>You have friends or known contacts interested in rooming</li>
    </ul>
    
    <h3>When Living Alone Makes Sense</h3>
    <ul>
      <li>You can comfortably afford rent (less than 30% of income)</li>
      <li>You work from home and need quiet, private space</li>
      <li>You highly value privacy and personal space</li>
      <li>You have specific lifestyle needs (early riser, night owl, etc.)</li>
      <li>You've had negative roommate experiences before</li>
      <li>You're in a serious relationship (partner stays over frequently)</li>
      <li>You have pets with special needs</li>
      <li>You're over 30 and established in your career</li>
    </ul>
    
    <h3>How to Find a Compatible Roommate</h3>
    <ul>
      <li><strong>Friends or Acquaintances:</strong> Easiest but risk friendship</li>
      <li><strong>Social Networks:</strong> Post in local Facebook groups</li>
      <li><strong>Roommate Matching Sites:</strong> Roommates.com, SpareRoom, Roomi</li>
      <li><strong>Work Connections:</strong> Coworkers or industry contacts</li>
      <li><strong>School/University:</strong> Alumni networks, student housing boards</li>
      <li><strong>Professional Matching:</strong> Services that screen and match roommates</li>
    </ul>
    
    <h3>Essential Roommate Compatibility Questions</h3>
    <ul>
      <li>What's your typical schedule? (sleep, work hours)</li>
      <li>How clean/messy are you? Cleaning frequency expectations?</li>
      <li>Do you have guests often? Overnight guests?</li>
      <li>Are you an introvert or extrovert?</li>
      <li>Do you smoke or drink?</li>
      <li>What are your deal-breakers?</li>
      <li>How do you handle conflict?</li>
      <li>What temperature do you like the apartment?</li>
      <li>Are you allergic to anything?</li>
      <li>What's your financial situation? (stable income?)</li>
    </ul>
    
    <h3>Roommate Agreement Essentials</h3>
    <p>Always create a written agreement covering:</p>
    <ul>
      <li>Rent and utility split (50/50 or based on room size)</li>
      <li>Payment due dates and methods</li>
      <li>Security deposit responsibilities</li>
      <li>Guest and overnight visitor policy</li>
      <li>Quiet hours</li>
      <li>Cleaning schedule and chore division</li>
      <li>Shared supplies purchasing rotation</li>
      <li>Kitchen and bathroom usage rules</li>
      <li>Temperature/thermostat preferences</li>
      <li>Exit strategy if someone wants to leave early</li>
    </ul>
    
    <h3>Red Flags When Choosing a Roommate</h3>
    <ul>
      <li>Unwilling to discuss financial situation or show proof of income</li>
      <li>Vague about previous living situations</li>
      <li>Seems to have frequent conflicts with others</li>
      <li>Won't sign roommate agreement</li>
      <li>Different cleanliness standards (visit their current place)</li>
      <li>Incompatible schedules (night shift vs. day shift)</li>
      <li>Pet allergies or preferences don't align</li>
      <li>Can't provide references from previous roommates</li>
    </ul>
    
    <h3>Financial Breakdown: Solo vs. Roommate</h3>
    <p>Example: $1,800 studio vs. $2,400 two-bedroom</p>
    <ul>
      <li><strong>Living Alone:</strong> $1,800 rent + $150 utilities = $1,950/month</li>
      <li><strong>With Roommate:</strong> $1,200 rent + $75 utilities = $1,275/month</li>
      <li><strong>Annual Savings:</strong> $8,100 per year with roommate</li>
      <li><strong>5-Year Savings:</strong> $40,500 (down payment on a house!)</li>
    </ul>
    
    <h3>Trial Period Strategy</h3>
    <ul>
      <li>Start with 6-month lease if possible</li>
      <li>Set 30-day check-in to discuss what's working/not working</li>
      <li>Have exit strategy in roommate agreement</li>
      <li>Be honest about issues early before they become big problems</li>
    </ul>
    
    <h3>Alternative Options</h3>
    <ul>
      <li><strong>Studio vs. 1BR:</strong> Studios often cheaper than splitting 2BR</li>
      <li><strong>Different Neighborhood:</strong> Move to more affordable area</li>
      <li><strong>House Hacking:</strong> Buy property and rent out rooms</li>
      <li><strong>Co-Living Spaces:</strong> Furnished rooms with community events</li>
      <li><strong>Temporary Roommate:</strong> Short-term while saving for solo place</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "currentRent",
        label: "Solo Rent Cost",
        type: "number",
        placeholder: "1800",
        defaultValue: "1800",
      },
      {
        name: "sharedRent",
        label: "Shared Apartment Rent (Total)",
        type: "number",
        placeholder: "2400",
        defaultValue: "2400",
      },
      {
        name: "currentUtilities",
        label: "Solo Utility Costs",
        type: "number",
        placeholder: "150",
        defaultValue: "150",
      },
      {
        name: "sharedUtilities",
        label: "Shared Utility Costs (Total)",
        type: "number",
        placeholder: "200",
        defaultValue: "200",
      },
      {
        name: "monthlyIncome",
        label: "Monthly Gross Income",
        type: "number",
        placeholder: "5000",
        defaultValue: "5000",
      },
      {
        name: "privacyValue",
        label: "How Much Do You Value Privacy?",
        type: "select",
        options: [{ value: "Low", label: "Low" }, { value: "Medium", label: "Medium" }, { value: "High", label: "High" }, { value: "Very High", label: "Very High" }],
        defaultValue: "Medium",
      },
      {
        name: "savingsGoal",
        label: "Active Savings Goal?",
        type: "select",
        options: [{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }],
        defaultValue: "No",
      },
    ],
    results: [
      { label: "Monthly Savings with Roommate", isCurrency: true },
      { label: "Annual Savings with Roommate", isCurrency: true },
      { label: "5-Year Savings Potential", isCurrency: true },
      { label: "Solo Housing Cost % of Income", isCurrency: false },
      { label: "Roommate Housing Cost % of Income", isCurrency: false },
      { label: "Financial Recommendation", isCurrency: false },
      { label: "Lifestyle Recommendation", isCurrency: false },
      { label: "Overall Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const currentRent = Number(data.currentRent) || 0;
      const sharedRent = Number(data.sharedRent) || 0;
      const currentUtilities = Number(data.currentUtilities) || 0;
      const sharedUtilities = Number(data.sharedUtilities) || 0;
      const monthlyIncome = Number(data.monthlyIncome) || 1;
      const privacyValue = data.privacyValue || "Medium";
      const savingsGoal = data.savingsGoal === "Yes";
      
      // Calculate costs
      const soloCost = currentRent + currentUtilities;
      const roommateShare = (sharedRent / 2) + (sharedUtilities / 2);
      
      const monthlySavings = soloCost - roommateShare;
      const annualSavings = monthlySavings * 12;
      const fiveYearSavings = annualSavings * 5;
      
      // Calculate housing cost percentages
      const soloPercent = (soloCost / monthlyIncome) * 100;
      const roommatePercent = (roommateShare / monthlyIncome) * 100;
      
      // Financial recommendation
      let financialRec = "";
      if (soloPercent > 40) {
        financialRec = "🔴 Strong Financial Case for Roommate (housing >40% income)";
      } else if (soloPercent > 30) {
        financialRec = "🟡 Roommate Would Help (housing 30-40% income)";
      } else if (monthlySavings > 500) {
        financialRec = "🟢 Roommate = Significant Savings but not essential";
      } else {
        financialRec = "✅ Financially stable living alone";
      }
      
      // Lifestyle recommendation
      let lifestyleRec = "";
      if (privacyValue === "Very High") {
        lifestyleRec = "🏠 Privacy Priority: Live Alone";
      } else if (privacyValue === "High") {
        lifestyleRec = "⚖️ Privacy Important: Consider if worth the cost";
      } else if (privacyValue === "Medium") {
        lifestyleRec = "👥 Flexible: Roommate could work well";
      } else {
        lifestyleRec = "🎉 Social Preference: Roommate recommended";
      }
      
      // Overall recommendation
      let overallRec = "";
      const financialNeed = soloPercent > 35;
      const strongPrivacy = privacyValue === "Very High" || privacyValue === "High";
      
      if (financialNeed && !strongPrivacy) {
        overallRec = "✅ GET ROOMMATE - Financial benefits outweigh lifestyle costs";
      } else if (financialNeed && strongPrivacy && savingsGoal) {
        overallRec = "🤔 CONSIDER ROOMMATE TEMPORARILY - Save aggressively then go solo";
      } else if (!financialNeed && strongPrivacy) {
        overallRec = "✅ LIVE ALONE - You can afford your privacy preference";
      } else if (!financialNeed && !strongPrivacy) {
        overallRec = savingsGoal ? 
          "💰 ROOMMATE FOR GOALS - Fast-track savings, then reassess" :
          "⚖️ YOUR CHOICE - Either option works financially";
      } else {
        overallRec = "🤔 BORDERLINE - Try roommate for 6-12 months, evaluate";
      }

      return [
        { label: "Monthly Savings with Roommate", value: `${monthlySavings.toFixed(2)}`, isCurrency: true },
        { label: "Annual Savings with Roommate", value: `${annualSavings.toFixed(2)}`, isCurrency: true },
        { label: "5-Year Savings Potential", value: `${fiveYearSavings.toFixed(2)}`, isCurrency: true },
        { label: "Solo Housing Cost % of Income", value: `${soloPercent.toFixed(1)}%`, isCurrency: false },
        { label: "Roommate Housing Cost % of Income", value: `${roommatePercent.toFixed(1)}%`, isCurrency: false },
        { label: "Financial Recommendation", value: financialRec, isCurrency: false },
        { label: "Lifestyle Recommendation", value: lifestyleRec, isCurrency: false },
        { label: "Overall Recommendation", value: overallRec, isCurrency: false },
      ];
    },
  },
};
