import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CalculatorFormProps {
  form: any;
}

export const CalculatorForm = ({ form }: CalculatorFormProps) => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Purchase & Renovation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Purchase Price</Label>
            <Input type="number" {...form.register("purchasePrice", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>After Repair Value (ARV)</Label>
            <Input type="number" {...form.register("arv", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Renovation Costs</Label>
            <Input type="number" {...form.register("renovationCosts", { valueAsNumber: true })} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Loan Amount</Label>
            <Input type="number" {...form.register("loanAmount", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Interest Rate (%)</Label>
            <Input type="number" {...form.register("interestRate", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Loan Term (Years)</Label>
            <Input type="number" {...form.register("loanTerm", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Refinance LTV (%)</Label>
            <Input type="number" {...form.register("refinanceLoanToValue", { valueAsNumber: true })} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rental Income & Expenses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Monthly Rent</Label>
            <Input type="number" {...form.register("monthlyRent", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Vacancy Rate (%)</Label>
            <Input type="number" {...form.register("vacancyRate", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Property Management Fee (%)</Label>
            <Input type="number" {...form.register("propertyManagementFee", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Maintenance Costs (Monthly)</Label>
            <Input type="number" {...form.register("maintenanceCosts", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Property Taxes (Monthly)</Label>
            <Input type="number" {...form.register("propertyTaxes", { valueAsNumber: true })} />
          </div>
          <div>
            <Label>Insurance (Monthly)</Label>
            <Input type="number" {...form.register("insurance", { valueAsNumber: true })} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};