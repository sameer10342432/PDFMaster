
import { ImportantNotice, Section, FinalWarning } from './types';


export const disclaimerTitle = "Disclaimer";
export const disclaimerSubtitle = "Important information about the use of our property calculation tools";

export const importantNotice: ImportantNotice = {
  title: "IMPORTANT DISCLAIMER",
  text: "The information and calculations provided by Property Tools are for educational and informational purposes only. They should not be considered as professional financial, legal, tax, or real estate advice.",
};

export const sections: Section[] = [
  {
    title: "General Disclaimer",
    content: [
      "The information contained on this website and the calculations provided by our tools are offered on an informational basis only and are not intended to constitute financial, legal, tax, or real estate advice. Property Tools makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.",
      "Any reliance you place on such information is therefore strictly at your own risk. In no event will Property Tools be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or its calculators.",
    ],
  },
  {
    title: "Calculator Accuracy and Limitations",
    subsections: [
      {
        title: "Estimation Purposes Only",
        content: "All calculators provided on this website are designed for estimation purposes only. The results should be used as a starting point for your research and decision-making process, not as definitive financial advice.",
      },
      {
        title: "Property Valuation Calculator",
        items: [
          "Property values are estimates based on general market data and algorithms",
          "Actual property values can vary significantly based on local market conditions, property condition, and other factors",
          "Professional appraisals are required for accurate property valuations",
          "Market conditions change rapidly and may not be reflected in our calculations",
        ],
      },
      {
        title: "Mortgage Calculator",
        items: [
          "Calculations assume standard amortization schedules and may not reflect all loan types",
          "Actual mortgage terms, interest rates, and fees may vary significantly",
          "Does not include all costs associated with homeownership (insurance, taxes, maintenance, etc.)",
          "Lender requirements and qualification criteria are not considered",
        ],
      },
      {
        title: "ROI and Investment Calculators",
        items: [
          "Investment returns are estimates and do not guarantee future performance",
          "Market conditions, vacancy rates, and expenses can vary significantly",
          "Tax implications are simplified and may not reflect your specific situation",
          "Does not account for all investment risks and market volatility",
        ],
      },
    ],
  },
  {
    title: "Need for Professional Advice",
    content: "Before making any financial or real estate decisions, you should consult with qualified professionals:",
    professionalSections: [
      {
        title: "Real Estate Professionals",
        items: ["Licensed real estate agents", "Real estate brokers", "Certified appraisers", "Property inspectors"],
        className: "bg-blue-50",
        titleClassName: "text-blue-900",
        listClassName: "text-blue-800",
      },
      {
        title: "Financial Professionals",
        items: ["Certified financial planners", "Mortgage lenders", "Investment advisors", "Insurance agents"],
        className: "bg-green-50",
        titleClassName: "text-green-900",
        listClassName: "text-green-800",
      },
      {
        title: "Legal Professionals",
        items: ["Real estate attorneys", "Tax attorneys", "Contract lawyers", "Estate planning attorneys"],
        className: "bg-purple-50",
        titleClassName: "text-purple-900",
        listClassName: "text-purple-800",
      },
      {
        title: "Tax Professionals",
        items: ["Certified public accountants", "Tax preparers", "Tax advisors", "Enrolled agents"],
        className: "bg-orange-50",
        titleClassName: "text-orange-900",
        listClassName: "text-orange-800",
      },
    ],
  },
  {
    title: "Market Variations and Local Factors",
    content: "Real estate markets are highly localized and can vary significantly based on numerous factors:",
    subsections: [
      {
        title: "Geographic Factors",
        items: [
          "Local market conditions and trends",
          "Regional economic factors",
          "State and local tax laws",
          "Zoning regulations and building codes",
          "Climate and environmental considerations",
        ],
      },
      {
        title: "Economic Factors",
        items: [
          "Interest rate fluctuations",
          "Employment rates and job market",
          "Population growth or decline",
          "Infrastructure development",
          "Government policies and regulations",
        ],
      },
    ],
  },
  {
    title: "No Warranty",
    content: "Property Tools provides this website and its calculators on an \"as is\" basis. To the fullest extent permitted by law, Property Tools:",
    items: [
      "Excludes all representations and warranties relating to this website and its contents",
      "Excludes all liability for damages arising out of or in connection with your use of this website",
      "Does not warrant that the website will be constantly available or available at all",
      "Does not warrant that the information on this website is complete, true, accurate, or non-misleading",
    ],
  },
  {
    title: "User Responsibility",
    content: "By using our calculators and website, you acknowledge that:",
    items: [
      "You understand the limitations and assumptions of our calculators",
      "You will not rely solely on our calculations for financial decisions",
      "You will seek professional advice before making significant financial commitments",
      "You will verify all information independently",
      "You use our tools at your own risk",
    ],
  },
  {
    title: "External Links Disclaimer",
    content: "This website may contain links to external websites that are not provided or maintained by Property Tools. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  },
  {
    title: "Updates and Changes",
    content: "Property Tools reserves the right to update, modify, or discontinue any aspect of the website or its calculators at any time without notice. We may also update this disclaimer from time to time. Your continued use of the website after any changes constitutes acceptance of those changes.",
  },
  {
    title: "Questions About This Disclaimer",
    content: "If you have any questions about this disclaimer or our calculators, please contact us:",
    contactInfo: {
      email: "support@propertytools.com",
      address: "123 Real Estate Ave, Suite 100, Austin, TX 78701",
      phone: "(555) 123-4567",
    },
  },
];

export const finalWarning: FinalWarning = {
  title: "Remember",
  text: "Real estate and financial decisions involve significant risk and complexity. Always consult with qualified professionals and conduct thorough due diligence before making any commitments.",
};