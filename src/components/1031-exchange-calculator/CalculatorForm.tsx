import { FormValues, use1031ExchangeCalculator } from "@/hooks/1031-exchange-calculator/use1031ExchangeCalculator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  form: ReturnType<typeof use1031ExchangeCalculator>["form"];
  onSubmit: (data: FormValues) => void;
}

export const CalculatorForm = ({ form, onSubmit }: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="salePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale Price of Old Property</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purchasePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchase Price of Old Property</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="improvements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Improvements to Old Property</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sellingExpenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Selling Expenses</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="replacementValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value of Replacement Property</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cashBoot"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cash Boot Received</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taxRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Combined Capital Gains Tax Rate (%)</FormLabel>
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