
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const CalculatorForm = () => {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="purchasePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Purchase Price ($)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="sellingPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selling Price ($)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="holdingPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Holding Period</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="short-term">Short-Term (&lt; 1 year)</SelectItem>
                <SelectItem value="long-term">Long-Term (≥ 1 year)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="annualIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Annual Taxable Income ($)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};