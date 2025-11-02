import { FormValues, useCapRateCalculator } from "@/hooks/cap-rate-calculator/useCapRateCalculator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  form: ReturnType<typeof useCapRateCalculator>["form"];
  onSubmit: (data: FormValues) => void;
}

export const CalculatorForm = ({ form, onSubmit }: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="netOperatingIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Net Operating Income (NOI)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Value</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  );
};