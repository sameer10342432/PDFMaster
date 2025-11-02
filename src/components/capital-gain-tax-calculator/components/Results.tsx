
import { motion } from 'framer-motion';

interface TaxAnalysis {
  capitalGain: number;
  taxRate: number;
  estimatedTax: number;
}

interface ResultsProps {
  analysis: TaxAnalysis | null;
}

export const Results = ({ analysis }: ResultsProps) => {
  if (!analysis) return null;

  if (analysis.capitalGain <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 p-6 bg-green-100 dark:bg-green-900 rounded-lg text-center"
      >
        <h3 className="text-2xl font-bold">No Capital Gain</h3>
        <p>You have a capital loss of ${(-analysis.capitalGain).toLocaleString()}, so no capital gains tax is due.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
    >
      <h3 className="text-2xl font-bold text-center mb-4">Estimated Capital Gains Tax</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
          <p className="text-lg font-semibold">Capital Gain</p>
          <p className="text-2xl font-bold">${analysis.capitalGain.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
          <p className="text-lg font-semibold">Tax Rate</p>
          <p className="text-2xl font-bold">{analysis.taxRate}%</p>
        </div>
        <div className="p-4 bg-red-100 dark:bg-red-900 rounded-lg">
          <p className="text-lg font-semibold">Estimated Tax</p>
          <p className="text-2xl font-bold text-red-600">${analysis.estimatedTax.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
  );
};