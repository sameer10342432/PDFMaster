import { CalculatorContent } from '@/types';

export const CASH_FLOW_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Cash Flow Analyzer',
  description: 'Analyze the cash flow of a rental property. A key metric for determining profitability.',
  icon: 'Icon',
  category: 'Investing',
  slug: 'cash-flow-analyzer',
  article: {
    title: 'What is Cash Flow?',
    content: `
    <h2>What is Cash Flow?</h2>
    <p>Cash flow is a key indicator of a rental property's financial performance. Positive cash flow means you have money left over after all expenses are paid, while negative cash flow indicates a loss. To accurately analyze cash flow, you must account for all sources of income and all expenses, including vacancies, maintenance, and property management fees.</p>
  `
  },
  calculator: {
    fields: [],
    results: [],
    calculate: () => []
  }
};