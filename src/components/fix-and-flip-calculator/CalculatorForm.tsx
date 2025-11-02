"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FixAndFlipCalculatorParams } from "@/hooks/fix-and-flip-calculator/useFixAndFlipCalculator";

interface Props {
  form: UseFormReturn<FixAndFlipCalculatorParams>;
}

export function CalculatorForm({ form }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="purchasePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Purchase Price</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="renovationCosts"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Renovation Costs</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="arv"
        render={({ field }) => (
          <FormItem>
            <FormLabel>After Repair Value (ARV)</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="holdingPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Holding Period (Months)</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="financingCosts"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Financing Costs</FormLabel>
            <FormControl>
              <Input type="number" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sellingCosts"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selling Costs</FormLabel>
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