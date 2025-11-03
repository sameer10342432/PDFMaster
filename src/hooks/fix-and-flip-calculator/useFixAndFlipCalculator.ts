import { useState } from 'react';

export const useFixAndFlipCalculator = () => {
  const [profit, setProfit] = useState(0);
  const [roi, setRoi] = useState(0);

  const calculate = (values: { purchasePrice: number, renovationCosts: number, arv: number }) => {
    const { purchasePrice, renovationCosts, arv } = values;
    const totalCost = purchasePrice + renovationCosts;
    const profit = arv - totalCost;
    const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
    setProfit(profit);
    setRoi(roi);
    return { profit, roi };
  };

  return { profit, roi, calculate };
};