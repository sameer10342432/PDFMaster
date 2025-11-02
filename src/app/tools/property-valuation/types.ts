
export interface RiskFactor {
  factor: string;
  level: 'Low' | 'Medium' | 'High';
  details: string;
}

export interface InvestmentPotential {
  capRate: number;
  cashOnCashReturn: number;
  netOperatingIncome: number;
  potentialScore: number;
  recommendations: string[];
  investmentRating: string;
  roi: number;
  fiveYearAppreciation: number;
  riskFactors: RiskFactor[];
}

export interface ScenarioResult {
  year: number;
  propertyValue: number;
  rentalIncome: number;
  loanBalance: number;
  netWorth: number;
}

export interface Valuation {
  estimatedValue: number;
  valuationMethods: {
    comparativeSales: number;
    costApproach: number;
    incomeApproach: number;
  };
  marketTrends: {
    pricePerSqFt: number;
    appreciation: number;
    daysOnMarket: number;
  };
}