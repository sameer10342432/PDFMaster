import { CalculatorContent } from "@/types";

export const firstTimeHomebuyerTaxCreditFinder: CalculatorContent = {
  title: "First-Time Home Buyer Tax Credit Finder",
  description:
    "Find available first-time home buyer tax credits and incentives based on your income, location, and property details to maximize tax savings.",
  icon: "Icon",
  category: "First-Time Homebuyer Tools",
  slug: "first-time-homebuyer-tax-credit-finder",
  article: {
    title: "Understanding First-Time Home Buyer Tax Credits and Incentives",
    content:
      "First-time home buyers have access to various federal, state, and local tax credits and incentives designed to make homeownership more affordable. While the federal First-Time Homebuyer Tax Credit from 2008-2010 has expired, many states and local governments offer their own programs. These can include: Mortgage Credit Certificates (MCCs) that provide annual federal tax credits worth up to $2,000/year; state-specific tax credits ranging from $500 to $5,000; property tax abatements for new homeowners; and various rebate programs. Many states define 'first-time homebuyer' as someone who hasn't owned a home in the past 3 years, not necessarily buying for the first time ever. Income limits typically apply, often set at 80-120% of area median income. Some programs are targeted to specific areas (opportunity zones, rural areas, revitalization districts) or specific buyers (teachers, public safety workers, veterans). These credits can reduce your federal income tax liability dollar-for-dollar, making them more valuable than deductions. This tool helps identify which programs you may qualify for based on your specific situation and location.",
  },
  calculator: {
    fields: [
      {
        name: "income",
        label: "Annual Household Income ($)",
        type: "number",
        defaultValue: "75000",
      },
      {
        name: "purchasePrice",
        label: "Home Purchase Price ($)",
        type: "number",
        defaultValue: "250000",
      },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          { value: "Alabama", label: "Alabama" }, { value: "Alaska", label: "Alaska" }, { value: "Arizona", label: "Arizona" }, { value: "Arkansas", label: "Arkansas" }, { value: "California", label: "California" }, { value: "Colorado", label: "Colorado" }, { value: "Connecticut", label: "Connecticut" }, { value: "Delaware", label: "Delaware" }, { value: "Florida", label: "Florida" }, { value: "Georgia", label: "Georgia" }, { value: "Hawaii", label: "Hawaii" }, { value: "Idaho", label: "Idaho" }, { value: "Illinois", label: "Illinois" }, { value: "Indiana", label: "Indiana" }, { value: "Iowa", label: "Iowa" }, { value: "Kansas", label: "Kansas" }, { value: "Kentucky", label: "Kentucky" }, { value: "Louisiana", label: "Louisiana" }, { value: "Maine", label: "Maine" }, { value: "Maryland", label: "Maryland" }, { value: "Massachusetts", label: "Massachusetts" }, { value: "Michigan", label: "Michigan" }, { value: "Minnesota", label: "Minnesota" }, { value: "Mississippi", label: "Mississippi" }, { value: "Missouri", label: "Missouri" }, { value: "Montana", label: "Montana" }, { value: "Nebraska", label: "Nebraska" }, { value: "Nevada", label: "Nevada" }, { value: "New Hampshire", label: "New Hampshire" }, { value: "New Jersey", label: "New Jersey" }, { value: "New Mexico", label: "New Mexico" }, { value: "New York", label: "New York" }, { value: "North Carolina", label: "North Carolina" }, { value: "North Dakota", label: "North Dakota" }, { value: "Ohio", label: "Ohio" }, { value: "Oklahoma", label: "Oklahoma" }, { value: "Oregon", label: "Oregon" }, { value: "Pennsylvania", label: "Pennsylvania" }, { value: "Rhode Island", label: "Rhode Island" }, { value: "South Carolina", label: "South Carolina" }, { value: "South Dakota", label: "South Dakota" }, { value: "Tennessee", label: "Tennessee" }, { value: "Texas", label: "Texas" }, { value: "Utah", label: "Utah" }, { value: "Vermont", label: "Vermont" }, { value: "Virginia", label: "Virginia" }, { value: "Washington", label: "Washington" }, { value: "West Virginia", label: "West Virginia" }, { value: "Wisconsin", label: "Wisconsin" }, { value: "Wyoming", label: "Wyoming" }
        ],
        defaultValue: "California",
      },
      {
        name: "firstTimeOwner",
        label: "First-Time Buyer? (No ownership in 3 years)",
        type: "select",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        defaultValue: "Yes",
      },
      {
        name: "veteranStatus",
        label: "Veteran or Active Military?",
        type: "select",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        defaultValue: "No",
      },
    ],
    results: [
      {
        label: "Estimated Qualification",
        isCurrency: false,
      },
      {
        label: "Potential Annual MCC Credit",
        isCurrency: true,
      },
      {
        label: "Potential State Tax Credit",
        isCurrency: true,
      },
      {
        label: "Total First-Year Tax Benefits",
        isCurrency: true,
      },
      {
        label: "10-Year MCC Benefit",
        isCurrency: true,
      },
      {
        label: "Programs to Research",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const { income, purchasePrice, state, firstTimeOwner, veteranStatus } = values;
      const householdIncome = parseFloat(income);
      const price = parseFloat(purchasePrice);
      const isFirstTime = firstTimeOwner === "Yes";
      const isVeteran = veteranStatus === "Yes";

      let qualification = "Potentially Eligible";
      let mccCredit = 0;
      let stateTaxCredit = 0;
      let programs = [];

      if (!isFirstTime) {
        qualification = "Limited Eligibility (Not First-Time Buyer)";
      }

      if (householdIncome < 150000 && isFirstTime) {
        const mortgageAmount = price * 0.8;
        const annualInterest = mortgageAmount * 0.07;
        mccCredit = Math.min(annualInterest * 0.20, 2000);
        programs.push("MCC Program");
      }

      const stateCredits: { [key: string]: number } = {
        "California": 1000,
        "Colorado": 500,
        "Idaho": 500,
        "Illinois": 500,
        "Montana": 1000,
        "Ohio": 1500,
        "Oregon": 1000,
        "Minnesota": 750,
      };

      if (stateCredits[state] && isFirstTime) {
        stateTaxCredit = stateCredits[state];
        programs.push(`${state} FTHB Credit`);
      }

      if (isVeteran) {
        stateTaxCredit += 500;
        programs.push("Veteran Homebuyer Incentive");
      }

      const totalFirstYear = mccCredit + stateTaxCredit;
      const tenYearMCC = mccCredit * 10;
      const programsList = programs.length > 0 ? programs.join(", ") : "General FTHB Programs";

      return [
        {
          label: "Estimated Qualification",
          value: qualification,
          isCurrency: false,
        },
        {
          label: "Potential Annual MCC Credit",
          value: mccCredit.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Potential State Tax Credit",
          value: stateTaxCredit.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total First-Year Tax Benefits",
          value: totalFirstYear.toFixed(2),
          isCurrency: true,
        },
        {
          label: "10-Year MCC Benefit",
          value: tenYearMCC.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Programs to Research",
          value: programsList,
          isCurrency: false,
        },
      ];
    },
  },
};
