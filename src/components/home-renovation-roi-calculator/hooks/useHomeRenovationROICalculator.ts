
'use client';

import { useState, useMemo } from 'react';
import { z } from 'zod';

const renovationCostSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  cost: z.number().min(0, 'Cost must be positive'),
});

const formSchema = z.object({
  initialPropertyValue: z.number().min(0, 'Must be positive'),
  finalPropertyValue: z.number().min(0, 'Must be positive'),
  renovationCosts: z.array(renovationCostSchema),
});

export type RenovationCost = z.infer<typeof renovationCostSchema>;
export type FormData = z.infer<typeof formSchema>;

export const useHomeRenovationROICalculator = () => {
  const [initialPropertyValue, setInitialPropertyValue] = useState(500000);
  const [finalPropertyValue, setFinalPropertyValue] = useState(600000);
  const [renovationCosts, setRenovationCosts] = useState<RenovationCost[]>([
    { id: '1', name: 'Kitchen Remodel', cost: 25000 },
    { id: '2', name: 'Bathroom Remodel', cost: 15000 },
  ]);

  const totalRenovationCost = useMemo(() => {
    return renovationCosts.reduce((total, item) => total + item.cost, 0);
  }, [renovationCosts]);

  const netProfit = useMemo(() => {
    return finalPropertyValue - initialPropertyValue - totalRenovationCost;
  }, [finalPropertyValue, initialPropertyValue, totalRenovationCost]);

  const roi = useMemo(() => {
    if (totalRenovationCost === 0) return 0;
    return (netProfit / totalRenovationCost) * 100;
  }, [netProfit, totalRenovationCost]);

  const addRenovationCost = () => {
    setRenovationCosts([
      ...renovationCosts,
      { id: Date.now().toString(), name: '', cost: 0 },
    ]);
  };

  const removeRenovationCost = (id: string) => {
    setRenovationCosts(renovationCosts.filter((item) => item.id !== id));
  };

  const updateRenovationCost = (id: string, field: 'name' | 'cost', value: string | number) => {
    setRenovationCosts(
      renovationCosts.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const analysis = useMemo(() => {
    return {
      totalRenovationCost,
      netProfit,
      roi,
    };
  }, [totalRenovationCost, netProfit, roi]);

  return {
    initialPropertyValue,
    setInitialPropertyValue,
    finalPropertyValue,
    setFinalPropertyValue,
    renovationCosts,
    addRenovationCost,
    removeRenovationCost,
    updateRenovationCost,
    analysis,
    formSchema,
  };
};