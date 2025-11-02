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
  initialInvestment: z.number().min(0, "Initial investment must be greater than 0"),
  finalValue: z.number().min(0, "Final value must be greater than 0"),
});

export const CalculatorForm = ({ form, onCalculate }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onChange={() =>
              onCalculate(
                form.getValues("initialInvestment"),
                form.getValues("finalValue")
              )
            }
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="initialInvestment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initial Investment</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="finalValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Final Value</FormLabel>
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