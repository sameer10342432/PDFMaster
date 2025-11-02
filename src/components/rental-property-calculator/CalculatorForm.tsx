"use client";

import { useRentalPropertyCalculator, RentalPropertyState } from "@/hooks/rental-property-calculator/useRentalPropertyCalculator";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
const formatPercentage = (value: number) => `${(value * 100).toFixed(2)}%`;
const formatToCurrency = (value: number) => `$${value.toFixed(2)}`;

export const CalculatorForm = ({ form }: { form: any }) => {
  const { setField, calculate } = useRentalPropertyCalculator();

  const handleSliderChange = (
    field: keyof RentalPropertyState,
    value: number[],
  ) => {
    setField(field, value[0]);
    calculate();
  };

  return (
    <div className="space-y-8">
      {/* Income Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Income</h3>
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
          name="otherMonthlyIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Monthly Income</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Expenses Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Expenses</h3>
        <FormField
          control={form.control}
          name="propertyTaxes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Taxes (Monthly)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="insurance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insurance (Monthly)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyManagementFees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Management Fees (Monthly)</FormLabel>
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
              <FormLabel>Maintenance Costs (Monthly)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="otherMonthlyExpenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Monthly Expenses</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Purchase Details Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Purchase Details</h3>
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
              <FormLabel>Interest Rate</FormLabel>
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
      </div>

      {/* Assumptions Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Assumptions</h3>
        <FormField
          control={form.control}
          name="vacancyRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vacancy Rate</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[field.value]}
                    onValueChange={(value) => handleSliderChange("vacancyRate", value)}
                    min={0}
                    max={100}
                    step={1}
                  />
                  <span>{formatPercentage(field.value / 100)}</span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appreciationRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appreciation Rate</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[field.value]}
                    onValueChange={(value) =>
                      handleSliderChange("appreciationRate", value)
                    }
                    min={0}
                    max={20}
                    step={0.5}
                  />
                  <span>{formatPercentage(field.value / 100)}</span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};