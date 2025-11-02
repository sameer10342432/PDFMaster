export interface Property {
  id: string
  name: string
  address: string
  type: 'single-family' | 'multi-family' | 'condo' | 'commercial' | 'land'
  purchasePrice: number
  value: number
  equity: number;
  purchaseDate: string
  monthlyRent: number
  monthlyExpenses: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  notes: string
}