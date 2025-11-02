
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResultsProps {
  analysis: {
    totalRenovationCost: number;
    netProfit: number;
    roi: number;
  };
}

export const Results: React.FC<ResultsProps> = ({ analysis }) => {
  const { totalRenovationCost, netProfit, roi } = analysis;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Renovation ROI Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Total Renovation Cost</span>
            <span>${totalRenovationCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Net Profit</span>
            <span>${netProfit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Return on Investment (ROI)</span>
            <span className={roi >= 0 ? 'text-green-600' : 'text-red-600'}>
              {roi.toFixed(2)}%
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};