import { CalculatorContent } from "@/types";

export const downPaymentAssistanceFinder: CalculatorContent = {
  title: "Down Payment Assistance (DPA) Program Finder",
  description:
    "Find and estimate eligibility for down payment assistance programs including grants, forgivable loans, and matched savings programs based on your location and income.",
  icon: "Icon",
  category: "First-Time Homebuyer Tools",
  slug: "down-payment-assistance-finder",
  article: {
    title: "Finding Down Payment Assistance Programs",
    content:
      "Down Payment Assistance (DPA) programs provide crucial support to homebuyers struggling to save for a down payment. Over 2,000 DPA programs exist across federal, state, and local levels in the United States. These programs typically offer: outright grants ($3,000-$15,000), forgivable loans (forgiven after 5-10 years of occupancy), deferred-payment loans (repaid when you sell or refinance), matched savings programs (matching your savings dollar-for-dollar), and low-interest second mortgages. Most programs target specific buyers: first-time homebuyers, low-to-moderate income households (typically 80-120% of area median income), specific professions (teachers, police, firefighters, healthcare workers), or specific locations (rural areas, opportunity zones, revitalization districts). Some programs are property-specific, available only for homes in certain zip codes or census tracts. National programs include FHA's $100 Down Payment program, USDA Rural Development grants, and VA funding fee waivers. State housing finance agencies (HFAs) offer the most robust programs. Local programs often provide the highest grants but have stricter eligibility. Many buyers are unaware they qualify for assistance and never investigate options. Working with a DPA-experienced lender or housing counselor is essential, as program requirements, application processes, and documentation needs vary significantly. This tool helps identify potential programs based on your specific situation.",
  },
  calculator: {
    fields: [
      {
        name: "annualIncome",
        label: "Annual Household Income ($)",
        type: "number",
        defaultValue: "65000",
      },
      {
        name: "purchasePrice",
        label: "Target Purchase Price ($)",
        type: "number",
        defaultValue: "220000",
      },
      {
        name: "currentSavings",
        label: "Current Down Payment Savings ($)",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          { value: "Alabama", label: "Alabama" }, { value: "Alaska", label: "Alaska" }, { value: "Arizona", label: "Arizona" }, { value: "Arkansas", label: "Arkansas" }, { value: "California", label: "California" }, { value: "Colorado", label: "Colorado" }, { value: "Connecticut", label: "Connecticut" }, { value: "Delaware", label: "Delaware" }, { value: "Florida", label: "Florida" }, { value: "Georgia", label: "Georgia" }, { value: "Hawaii", label: "Hawaii" }, { value: "Idaho", label: "Idaho" }, { value: "Illinois", label: "Illinois" }, { value: "Indiana", label: "Indiana" }, { value: "Iowa", label: "Iowa" }, { value: "Kansas", label: "Kansas" }, { value: "Kentucky", label: "Kentucky" }, { value: "Louisiana", label: "Louisiana" }, { value: "Maine", label: "Maine" }, { value: "Maryland", label: "Maryland" }, { value: "Massachusetts", label: "Massachusetts" }, { value: "Michigan", label: "Michigan" }, { value: "Minnesota", label: "Minnesota" }, { value: "Mississippi", label: "Mississippi" }, { value: "Missouri", label: "Missouri" }, { value: "Montana", label: "Montana" }, { value: "Nebraska", label: "Nebraska" }, { value: "Nevada", label: "Nevada" }, { value: "New Hampshire", label: "New Hampshire" }, { value: "New Jersey", label: "New Jersey" }, { value: "New Mexico", label: "New Mexico" }, { value: "New York", label: "New York" }, { value: "North Carolina", label: "North Carolina" }, { value: "North Dakota", label: "North Dakota" }, { value: "Ohio", label: "Ohio" }, { value: "Oklahoma", label: "Oklahoma" }, { value: "Oregon", label: "Oregon" }, { value: "Pennsylvania", label: "Pennsylvania" }, { value: "Rhode Island", label: "Rhode Island" }, { value: "South Carolina", label: "South Carolina" }, { value: "South Dakota", label: "South Dakota" }, { value: "Tennessee", label: "Tennessee" }, { value: "Texas", label: "Texas" }, { value: "Utah", label: "Utah" }, { value: "Vermont", label: "Vermont" }, { value: "Virginia", label: "Virginia" }, { value: "Washington", label: "Washington" }, { value: "West Virginia", label: "West Virginia" }, { value: "Wisconsin", label: "Wisconsin" }, { value: "Wyoming", label: "Wyoming" }
        ],
        defaultValue: "Texas",
      },
      {
        name: "firstTimeHomebuyer",
        label: "First-Time Homebuyer?",
        type: "select",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        defaultValue: "Yes",
      },
      {
        name: "occupation",
        label: "Occupation",
        type: "select",
        options: [
          { value: "General", label: "General" },
          { value: "Teacher/Educator", label: "Teacher/Educator" },
          { value: "Healthcare Worker", label: "Healthcare Worker" },
          { value: "Public Safety (Police/Fire)", label: "Public Safety (Police/Fire)" },
          { value: "Military/Veteran", label: "Military/Veteran" }
        ],
        defaultValue: "General",
      },
    ],
    results: [
      {
        label: "Estimated DPA Eligibility",
        isCurrency: false,
      },
      {
        label: "Potential Grant Amount",
        isCurrency: true,
      },
      {
        label: "Potential Forgivable Loan",
        isCurrency: true,
      },
      {
        label: "Total Potential Assistance",
        isCurrency: true,
      },
      {
        label: "Down Payment After DPA",
        isCurrency: true,
      },
      {
        label: "Down Payment %",
        isCurrency: false,
      },
      {
        label: "Recommended Programs",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { annualIncome, purchasePrice, currentSavings, state, firstTimeHomebuyer, occupation } = values;
      const income = parseFloat(annualIncome);
      const price = parseFloat(purchasePrice);
      const savings = parseFloat(currentSavings);
      const isFirstTime = firstTimeHomebuyer === "Yes";

      let eligibility = "Potentially Eligible";
      let grantAmount = 0;
      let forgivableLoan = 0;
      let programs = [];

      if (income > 120000 || !isFirstTime) {
        eligibility = "Limited Eligibility";
      }

      if (income < 100000 && isFirstTime) {
        const stateDPA: { [key: string]: number } = {
          "Texas": 15000,
          "California": 10000,
          "Florida": 7500,
          "New York": 12000,
          "Ohio": 10000,
          "Georgia": 7500,
          "Arizona": 6500,
          "Colorado": 8000,
          "Michigan": 7500,
          "North Carolina": 8000,
          "Pennsylvania": 10000,
          "Illinois": 10000,
          "Virginia": 8500,
          "Washington": 9000,
          "Oregon": 8500,
        };

        grantAmount = stateDPA[state] || 5000;
        programs.push(`${state} Housing Finance Agency DPA`);
      }

      if (income < 80000 && isFirstTime) {
        forgivableLoan = Math.min(price * 0.05, 10000);
        programs.push("Forgivable Second Mortgage Program");
      }

      const occupationBonus: { [key: string]: number } = {
        "Teacher/Educator": 3000,
        "Healthcare Worker": 2500,
        "Public Safety (Police/Fire)": 4000,
        "Military/Veteran": 3500,
      };

      if (occupation !== "General" && occupationBonus[occupation]) {
        grantAmount += occupationBonus[occupation];
        programs.push(`${occupation} DPA Program`);
      }

      const totalAssistance = grantAmount + forgivableLoan;
      const downPaymentAfterDPA = savings + totalAssistance;
      const downPaymentPercent = ((downPaymentAfterDPA / price) * 100).toFixed(1);
      const programsList = programs.length > 0 ? programs.join(", ") : "Contact local HFA for programs";

      return [
        {
          label: "Estimated DPA Eligibility",
          value: eligibility,
          isCurrency: false,
        },
        {
          label: "Potential Grant Amount",
          value: grantAmount.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Potential Forgivable Loan",
          value: forgivableLoan.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Potential Assistance",
          value: totalAssistance.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Down Payment After DPA",
          value: downPaymentAfterDPA.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Down Payment %",
          value: `${downPaymentPercent}%`,
          isCurrency: false,
        },
        {
          label: "Recommended Programs",
          value: programsList,
          isCurrency: false,
        },
      ];
    },
  },
};
