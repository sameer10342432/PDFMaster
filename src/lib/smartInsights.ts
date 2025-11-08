export interface Insight {
  type: 'success' | 'warning' | 'info' | 'danger';
  title: string;
  message: string;
  recommendation?: string;
}

/**
 * Generate smart insights based on calculation results
 */
export const generateInsights = (
  calculatorType: string,
  inputs: Record<string, any>,
  results: any[]
): Insight[] => {
  const insights: Insight[] = [];
  
  // Mortgage Calculator Insights
  if (calculatorType.includes('mortgage') || calculatorType.includes('loan')) {
    const loanAmount = parseFloat(inputs.loanAmount || inputs.propertyPrice || 0);
    const downPayment = parseFloat(inputs.downPayment || 0);
    const interestRate = parseFloat(inputs.interestRate || inputs.rate || 0);
    const term = parseFloat(inputs.term || inputs.loanTerm || 0);
    
    // Down payment analysis
    const downPaymentPercent = (downPayment / loanAmount) * 100;
    if (downPaymentPercent < 20) {
      insights.push({
        type: 'warning',
        title: 'Low Down Payment',
        message: `Your down payment is ${downPaymentPercent.toFixed(1)}% of the loan amount.`,
        recommendation: 'Consider saving for a 20% down payment to avoid PMI (Private Mortgage Insurance) and reduce your monthly payments.'
      });
    } else if (downPaymentPercent >= 20) {
      insights.push({
        type: 'success',
        title: 'Excellent Down Payment',
        message: `Your ${downPaymentPercent.toFixed(1)}% down payment will help you avoid PMI and secure better interest rates.`,
      });
    }
    
    // Interest rate analysis
    if (interestRate > 7) {
      insights.push({
        type: 'warning',
        title: 'High Interest Rate',
        message: `Your interest rate of ${interestRate}% is relatively high.`,
        recommendation: 'Consider shopping around for better rates or improving your credit score to qualify for lower rates.'
      });
    } else if (interestRate < 4) {
      insights.push({
        type: 'success',
        title: 'Excellent Interest Rate',
        message: `Your ${interestRate}% interest rate is very competitive!`,
      });
    }
    
    // Loan term analysis
    if (term > 25) {
      insights.push({
        type: 'info',
        title: 'Long Loan Term',
        message: `Your ${term}-year loan term will result in lower monthly payments but higher total interest.`,
        recommendation: 'Consider a shorter term if you can afford higher monthly payments to save significantly on interest.'
      });
    }
  }
  
  // Investment Calculator Insights
  if (calculatorType.includes('roi') || calculatorType.includes('investment') || calculatorType.includes('rental')) {
    const roi = results.find(r => r.label.toLowerCase().includes('roi'))?.value;
    const cashFlow = results.find(r => r.label.toLowerCase().includes('cash flow'))?.value;
    const capRate = results.find(r => r.label.toLowerCase().includes('cap rate'))?.value;
    
    // ROI Analysis
    if (roi) {
      const roiValue = parseFloat(String(roi).replace(/[^0-9.-]/g, ''));
      if (roiValue < 0) {
        insights.push({
          type: 'danger',
          title: 'Negative ROI',
          message: 'This investment is projected to lose money.',
          recommendation: 'Reconsider this investment or negotiate a better purchase price.'
        });
      } else if (roiValue < 5) {
        insights.push({
          type: 'warning',
          title: 'Low ROI',
          message: `ROI of ${roiValue.toFixed(1)}% is below average for real estate investments.`,
          recommendation: 'Look for opportunities to increase rental income or reduce expenses.'
        });
      } else if (roiValue >= 10) {
        insights.push({
          type: 'success',
          title: 'Excellent ROI',
          message: `ROI of ${roiValue.toFixed(1)}% is outstanding for real estate!`,
        });
      }
    }
    
    // Cash Flow Analysis
    if (cashFlow) {
      const cashFlowValue = parseFloat(String(cashFlow).replace(/[^0-9.-]/g, ''));
      if (cashFlowValue < 0) {
        insights.push({
          type: 'danger',
          title: 'Negative Cash Flow',
          message: 'This property will cost you money each month.',
          recommendation: 'Increase rental income or reduce operating expenses to achieve positive cash flow.'
        });
      } else if (cashFlowValue > 0 && cashFlowValue < 100) {
        insights.push({
          type: 'warning',
          title: 'Minimal Cash Flow',
          message: 'Cash flow is positive but very thin.',
          recommendation: 'Build a larger cash reserve to handle unexpected expenses.'
        });
      } else if (cashFlowValue >= 200) {
        insights.push({
          type: 'success',
          title: 'Strong Cash Flow',
          message: `Monthly cash flow of $${cashFlowValue.toFixed(0)} provides excellent cushion.`,
        });
      }
    }
    
    // Cap Rate Analysis
    if (capRate) {
      const capRateValue = parseFloat(String(capRate).replace(/[^0-9.-]/g, ''));
      if (capRateValue < 4) {
        insights.push({
          type: 'info',
          title: 'Low Cap Rate',
          message: `Cap rate of ${capRateValue.toFixed(1)}% suggests this is in a high-growth area.`,
          recommendation: 'Lower cap rates often mean higher property appreciation potential.'
        });
      } else if (capRateValue > 10) {
        insights.push({
          type: 'warning',
          title: 'High Cap Rate',
          message: `Cap rate of ${capRateValue.toFixed(1)}% may indicate higher risk or needed renovations.`,
          recommendation: 'Verify property condition and neighborhood quality before investing.'
        });
      }
    }
  }
  
  // Debt Service Coverage Ratio
  if (calculatorType.includes('debt') || calculatorType.includes('dscr')) {
    const dscr = results.find(r => r.label.toLowerCase().includes('dscr') || r.label.toLowerCase().includes('coverage'))?.value;
    if (dscr) {
      const dscrValue = parseFloat(String(dscr).replace(/[^0-9.-]/g, ''));
      if (dscrValue < 1) {
        insights.push({
          type: 'danger',
          title: 'DSCR Below 1',
          message: 'Income does not cover debt payments.',
          recommendation: 'Most lenders require DSCR of at least 1.25. Increase income or reduce debt.'
        });
      } else if (dscrValue >= 1 && dscrValue < 1.25) {
        insights.push({
          type: 'warning',
          title: 'Low DSCR',
          message: `DSCR of ${dscrValue.toFixed(2)} may not meet lender requirements.`,
          recommendation: 'Aim for DSCR of 1.25 or higher for better financing options.'
        });
      } else if (dscrValue >= 1.25) {
        insights.push({
          type: 'success',
          title: 'Strong DSCR',
          message: `DSCR of ${dscrValue.toFixed(2)} meets or exceeds lender requirements.`,
        });
      }
    }
  }
  
  // General insights
  if (insights.length === 0) {
    insights.push({
      type: 'info',
      title: 'Calculation Complete',
      message: 'Review your results carefully and consider consulting with a financial advisor for personalized advice.',
    });
  }
  
  return insights;
};

/**
 * Generate What-If scenarios for sensitivity analysis
 */
export const generateWhatIfScenarios = (
  baseInputs: Record<string, any>,
  variableKey: string,
  changePercents: number[] = [-20, -10, 0, 10, 20]
): Record<string, any>[] => {
  const baseValue = parseFloat(baseInputs[variableKey] || 0);
  return changePercents.map(percent => ({
    ...baseInputs,
    [variableKey]: baseValue * (1 + percent / 100),
    _scenarioLabel: `${percent >= 0 ? '+' : ''}${percent}%`,
    _changePercent: percent,
  }));
};
