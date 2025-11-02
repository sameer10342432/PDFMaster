
import { useState } from 'react'
import { Valuation } from '../types';

const initialValuation = {
  estimatedValue: 300000,
  valuationMethods: {
    comparativeSales: 305000,
    costApproach: 290000,
    incomeApproach: 295000,
  },
  marketTrends: {
    pricePerSqFt: 167,
    appreciation: 4.2,
    daysOnMarket: 28,
  },
}

export function useValuationState() {
  const [valuation, setValuation] = useState<Valuation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = async () => {
    setLoading(true)
    setError(null)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setValuation(initialValuation)
    } catch {
      setError('Failed to calculate valuation. Please try again.')
    }
    setLoading(false)
  }

  return { valuation, loading, error, handleCalculate }
}