"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  // Renting
  monthlyRent: z.number().positive(),
  rentIncrease: z.number().min(0),

  // Buying
  purchasePrice: z.number().positive(),
  downPayment: z.number().positive(),
  interestRate: z.number().positive(),
  loanTerm: z.number().positive(),
  propertyTax: z.number().min(0),
  homeInsurance: z.number().min(0),
  maintenanceCosts: z.number().min(0),
  closingCosts: z.number().min(0),
  propertyValueGrowth: z.number().min(0),

  // General
  holdingPeriod: z.number().positive(),
});

interface CalculatorFormProps {
  form: ReturnType<typeof useForm<z.infer<typeof formSchema>>>;
}

export const CalculatorForm = ({ form }: CalculatorFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rent vs. Buy Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            <h3 className="text-lg font-medium">Renting</h3>
            <FormField
              control={form.control}
              name="monthlyRent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Rent</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rentIncrease"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual Rent Increase (%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-medium">Buying</h3>
            <FormField
              control={form.control}
              name="purchasePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchase Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="downPayment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Down Payment</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interestRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest Rate (%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="loanTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Term (Years)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Tax (%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="homeInsurance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Insurance (Monthly)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maintenanceCosts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maintenance Costs (% of Property Value)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="closingCosts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Closing Costs (% of Property Value)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyValueGrowth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Value Growth (%)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-medium">General</h3>
            <FormField
              control={form.control}
              name="holdingPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Holding Period (Years)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};