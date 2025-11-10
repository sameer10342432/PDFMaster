const fs = require('fs');

// Read the user's requested tools list
const userToolsList = `FHA Loan Calculator
VA Loan Calculator
USDA Loan Calculator
Jumbo Loan Calculator
FHA 203k Loan Calculator
VA Loan Funding Fee Calculator
FHA MIP Calculator
PMI (Private Mortgage Insurance) Calculator
PMI Removal Calculator
FHA vs. Conventional Loan Analyzer
VA vs. Conventional Loan Comparison
USDA Loan Eligibility Checker
FHA Loan Limit Finder
VA Loan Entitlement Calculator
Debt-to-Income (DTI) Ratio Calculator
Loan-to-Value (LTV) Calculator
Mortgage Pre-Approval Calculator
Mortgage Rate by Credit Score Estimator
Credit Score Improvement Simulator (for Mortgage)
DTI Calculator for FHA Loans
DTI Calculator for VA Loans
DTI Calculator for Conventional Loans
Front-End DTI Calculator
Back-End DTI Calculator
Rapid Rescore ROI Calculator
Points vs. No-Points Mortgage Calculator
Mortgage Discount Points Calculator
Rate-and-Term Refinance Calculator
Cash-Out Refinance Calculator
HELOC vs. Cash-Out Refinance
Net Proceeds from Home Sale Calculator
Seller's Net Sheet
Home Staging ROI Calculator
Curb Appeal ROI Calculator
FSBO (For Sale By Owner) vs. Agent Savings Calculator
iBuyer vs. Traditional Sale Calculator
Best Time to Sell Analyzer
Home Appraisal Value Calculator
Seller Closing Cost Estimator
Real Estate Agent Commission Split Calculator
House Hacking Calculator
"Live for Free" (House Hack) Calculator
Duplex House Hacking Analyzer
Triplex House Hacking Analyzer
Quadplex House Hacking Analyzer
Airbnb Income Estimator
VRBO Income Calculator
Short-Term Rental (STR) Occupancy Rate Calculator
STR vs. Long-Term Rental (LTR) Profitability Analyzer
Airbnb Arbitrage Calculator
Airbnb Host Fee Calculator
Multi-Family Property Calculator (5+ units)
Commercial Property ROI Calculator
Self-Storage Facility ROI Calculator
Mobile Home Park Investment Calculator
ADU (Accessory Dwelling Unit) ROI Calculator
Cost to Build ADU Estimator
Seller Financing Calculator
"Subject-To" Deal Analyzer
Lease-Option (Rent-to-Own) Calculator
Raw Land Investment Calculator
New Construction Budget Calculator
Cost to Build a House Estimator
Land Development Cost Calculator
Homestead Exemption Calculator (by State)
MACRS Depreciation Calculator (Real Estate)
Property Tax Appeal Analyzer
State-Specific Real Estate Transfer Tax Calculator
Opportunity Zone (OZ) Investment Benefit Calculator
Eviction Cost & Timeline Estimator (by State)
Real Estate Professional (REPs) Status Tax Benefit Calculator
Cost Segregation Benefit Calculator
LLC vs. Sole Proprietorship (Real Estate) Analyzer
FEMA Flood Zone Checker (by Address)
Crime Rate by Address Analyzer
School Rating by Address
Local Rent Control Law Finder (by City/State)
Property History Analyzer (Sales/Price)
US ZIP Code Demographics Analyzer
Proximity to Amenities Calculator
Local Property Tax Rate Finder (by County)
Natural Disaster Risk Score (by Address)
Environmental Hazard Checker
Title Insurance Cost Estimator
Home Appraisal Fee Estimator
Survey Cost Estimator
Legal Fee Estimator (Real Estate)
AI Property Listing Description Generator
AI Real Estate Blog Post Idea Generator
AI Renovation Idea Generator (by Photo)
AI Negotiation Offer Letter Generator
AI Zillow Listing Summary Tool
AI "Ask a US Realtor" Bot
AI Investment Location Suggester
AI Market Trend Forecaster
California Property Tax Calculator (Prop 13)
Texas Property Tax Calculator
Florida Homestead Exemption Calculator
New York Mansion Tax Calculator
California Transfer Tax Calculator
Texas Transfer Tax Calculator
Florida Transfer Tax (Doc Stamps) Calculator
New York Transfer Tax Calculator
Pennsylvania Transfer Tax Calculator
Illinois Transfer Tax Calculator
Ohio Transfer Tax Calculator
Georgia Transfer Tax Calculator
North Carolina Transfer Tax Calculator
Michigan Transfer Tax Calculator
New Jersey Transfer Tax Calculator
Virginia Transfer Tax Calculator
Washington Transfer Tax Calculator
Massachusetts Transfer Tax Calculator
Arizona Transfer Tax Calculator
Tennessee Transfer Tax Calculator
Indiana Transfer Tax Calculator
Missouri Transfer Tax Calculator
Maryland Transfer Tax Calculator
Wisconsin Transfer Tax Calculator
Colorado Transfer Tax Calculator`.split('\n').filter(t => t.trim());

// Read existing tools from data/tools.ts
const toolsFile = fs.readFileSync('src/data/tools.ts', 'utf8');
const toolNameRegex = /name:\s*['"](.+?)['"]/g;
const existingTools = [];
let match;
while ((match = toolNameRegex.exec(toolsFile)) !== null) {
  existingTools.push(match[1]);
}

console.log(`User requested tools: ${userToolsList.length}`);
console.log(`Existing tools in codebase: ${existingTools.length}`);
console.log('\n=== MISSING TOOLS ===\n');

const missing = [];
userToolsList.forEach(tool => {
  const normalized = tool.toLowerCase().replace(/["""]/g, '"');
  const found = existingTools.find(existing => {
    const existingNorm = existing.toLowerCase().replace(/["""]/g, '"');
    return existingNorm.includes(normalized) || normalized.includes(existingNorm);
  });
  
  if (!found) {
    missing.push(tool);
    console.log(`❌ ${tool}`);
  }
});

console.log(`\n\nTotal missing: ${missing.length} tools`);
console.log('\n=== MISSING TOOLS LIST ===');
missing.forEach((tool, idx) => {
  console.log(`${idx + 1}. ${tool}`);
});
