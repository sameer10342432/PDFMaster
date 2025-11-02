"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  renovationCost: z.number().positive(),
  increaseInPropertyValue: z.number().positive(),
});

interface CalculatorFormProps {
  form: ReturnType<typeof useForm<z.infer<typeof formSchema>>>;
}

export const CalculatorForm = ({ form }: CalculatorFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Home Renovation ROI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="renovationCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Renovation Cost</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="increaseInPropertyValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Increase in Property Value</FormLabel>
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