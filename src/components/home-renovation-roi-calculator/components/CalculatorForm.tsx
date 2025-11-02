
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RenovationCost } from '../hooks/useHomeRenovationROICalculator';

interface CalculatorFormProps {
  renovationCosts: RenovationCost[];
  onAddRenovationCost: () => void;
  onRemoveRenovationCost: (id: string) => void;
  onUpdateRenovationCost: (id: string, field: 'name' | 'cost', value: string | number) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ 
  renovationCosts, 
  onAddRenovationCost, 
  onRemoveRenovationCost, 
  onUpdateRenovationCost 
}) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="initialPropertyValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Initial Property Value</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="finalPropertyValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Final Property Value (After Renovation)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div>
        <FormLabel>Renovation Costs</FormLabel>
        {renovationCosts.map((item, index) => (
          <div key={item.id} className="flex items-center space-x-2 mt-2">
            <Input
              placeholder="Renovation Item (e.g., Kitchen Remodel)"
              value={item.name}
              onChange={(e) => onUpdateRenovationCost(item.id, 'name', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Cost"
              value={item.cost}
              onChange={(e) => onUpdateRenovationCost(item.id, 'cost', parseFloat(e.target.value) || 0)}
            />
            <Button type="button" variant="destructive" onClick={() => onRemoveRenovationCost(item.id)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" onClick={onAddRenovationCost} className="mt-2">
          Add Renovation Item
        </Button>
      </div>
    </div>
  );
};