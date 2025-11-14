import { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { DOWNSIZING_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/downsizing-savings-calculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Downsizing Savings Calculator (Retirement) - Free Property Tools',
    description: 'Calculate financial benefits of downsizing your home in retirement. Analyze monthly savings, equity release, and long-term cash flow improvements. Free retirement calculator.',
  };
}

const DownsizingSavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={DOWNSIZING_SAVINGS_CALCULATOR_CONTENT}>
      {/* Calculator component rendered by CalculatorLayout */}
    </CalculatorLayout>
  );
};

export default DownsizingSavingsCalculatorPage;
