"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { GrossRentMultiplierCalculatorParams } from "@/hooks/gross-rent-multiplier-calculator/useGrossRentMultiplierCalculator";

interface Props {
  form: UseFormReturn<GrossRentMultiplierCalculatorParams>;
}

export function CalculatorForm({ form }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="propertyValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Property Value</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="grossAnnualRent"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gross Annual Rent</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}