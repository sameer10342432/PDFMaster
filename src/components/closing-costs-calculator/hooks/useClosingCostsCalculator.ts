
import { useState, useCallback } from 'react';

export interface ClosingCostBreakdown {
  buyerCosts: {
    loanOriginationFee: number;
    appraisalFee: number;
    homeInspection: number;
    titleInsurance: number;
    titleSearch: number;
    attorneyFees: number;
    surveyFee: number;
    creditReport: number;
    floodCertification: number;
    taxService: number;
    underwritingFee: number;
    processingFee: number;
    wireFee: number;
    recordingFees: number;
    transferTaxes: number;
    prepaidInterest: number;
    homeownersInsurance: number;
    propertyTaxes: number;
    escrowDeposit: number;
    total: number;
  };
  sellerCosts: {
    realEstateCommission: number;
    titleInsurance: number;
    attorneyFees: number;
    transferTaxes: number;
    recordingFees: number;
    surveyFee: number;
    homeWarranty: number;
    repairs: number;
    prorations: number;
    payoffFees: number;
    total: number;
  };
  totalClosingCosts: number;
  percentageOfPurchasePrice: number;
}

export const useClosingCostsCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(400000);
  const [loanAmount, setLoanAmount] = useState<number>(320000);
  const [propertyType, setPropertyType] = useState<string>("single-family");
  const [state, setState] = useState<string>("california");
  const [transactionType, setTransactionType] = useState<string>("purchase");

  const [loanType, setLoanType] = useState<string>("conventional");
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(7.0);
  const [loanTerm, setLoanTerm] = useState<number>(30);

  const [customOriginationFee, setCustomOriginationFee] = useState<number>(0);
  const [customAppraisalFee, setCustomAppraisalFee] = useState<number>(0);
  const [customInspectionFee, setCustomInspectionFee] = useState<number>(0);
  const [customTitleInsurance, setCustomTitleInsurance] = useState<number>(0);
  const [customAttorneyFees, setCustomAttorneyFees] = useState<number>(0);
  const [customCommissionRate, setCustomCommissionRate] = useState<number>(6.0);

  const [results, setResults] = useState<ClosingCostBreakdown | null>(null);

  const calculateClosingCosts = useCallback(() => {
    const downPayment = purchasePrice * (downPaymentPercent / 100);
    const calculatedLoanAmount = purchasePrice - downPayment;
    const actualLoanAmount = loanAmount || calculatedLoanAmount;

    const buyerCosts = {
      loanOriginationFee: customOriginationFee || actualLoanAmount * 0.005,
      appraisalFee: customAppraisalFee || (propertyType === "condo" ? 450 : 550),
      homeInspection: customInspectionFee || (propertyType === "condo" ? 350 : 500),
      titleInsurance: customTitleInsurance || purchasePrice * 0.005,
      titleSearch: 200,
      attorneyFees: customAttorneyFees || (state === "new-york" ? 1500 : 800),
      surveyFee: propertyType === "condo" ? 0 : 400,
      creditReport: 50,
      floodCertification: 25,
      taxService: 75,
      underwritingFee: loanType === "fha" ? 800 : 500,
      processingFee: 400,
      wireFee: 30,
      recordingFees: 125,
      transferTaxes: purchasePrice * (state === "new-york" ? 0.004 : 0.001),
      prepaidInterest: ((actualLoanAmount * (interestRate / 100)) / 365) * 15,
      homeownersInsurance: purchasePrice * 0.0035,
      propertyTaxes: (purchasePrice * 0.012) / 2,
      escrowDeposit: (purchasePrice * 0.0035) + ((purchasePrice * 0.012) / 2),
    };
    const buyerTotal = Object.values(buyerCosts).reduce((acc, cost) => acc + cost, 0);

    const sellerCosts = {
      realEstateCommission: purchasePrice * (customCommissionRate / 100),
      titleInsurance: purchasePrice * 0.003,
      attorneyFees: customAttorneyFees || 800,
      transferTaxes: purchasePrice * (state === "california" ? 0.0011 : 0.001),
      recordingFees: 75,
      surveyFee: 0,
      homeWarranty: 500,
      repairs: purchasePrice * 0.01,
      prorations: ((purchasePrice * 0.012) / 12) * 3,
      payoffFees: 300,
    };
    const sellerTotal = Object.values(sellerCosts).reduce((acc, cost) => acc + cost, 0);

    const totalClosingCosts =
      transactionType === "purchase"
        ? buyerTotal
        : transactionType === "sale"
        ? sellerTotal
        : buyerTotal + sellerTotal;

    setResults({
      buyerCosts: { ...buyerCosts, total: buyerTotal },
      sellerCosts: { ...sellerCosts, total: sellerTotal },
      totalClosingCosts,
      percentageOfPurchasePrice: (totalClosingCosts / purchasePrice) * 100,
    });
  }, [
    purchasePrice,
    loanAmount,
    propertyType,
    state,
    transactionType,
    loanType,
    downPaymentPercent,
    interestRate,
    customOriginationFee,
    customAppraisalFee,
    customInspectionFee,
    customTitleInsurance,
    customAttorneyFees,
    customCommissionRate,
  ]);

  return {
    purchasePrice, setPurchasePrice,
    loanAmount, setLoanAmount,
    propertyType, setPropertyType,
    state, setState,
    transactionType, setTransactionType,
    loanType, setLoanType,
    downPaymentPercent, setDownPaymentPercent,
    interestRate, setInterestRate,
    loanTerm, setLoanTerm,
    customOriginationFee, setCustomOriginationFee,
    customAppraisalFee, setCustomAppraisalFee,
    customInspectionFee, setCustomInspectionFee,
    customTitleInsurance, setCustomTitleInsurance,
    customAttorneyFees, setCustomAttorneyFees,
    customCommissionRate, setCustomCommissionRate,
    results,
    calculateClosingCosts,
  };
};