"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  loanAmount: z.number().min(0, "Loan amount must be greater than 0"),
  interestRate: z.number().min(0, "Interest rate must be greater than 0"),
  loanTerm: z.number().min(0, "Loan term must be greater than 0"),
});

export const CalculatorForm = ({ form, onCalculate }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amortization Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onChange={() =>
              onCalculate(
                form.getValues("loanAmount"),
                form.getValues("interestRate"),
                form.getValues("loanTerm")
              )
            }
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Amount</FormLabel>
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
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};