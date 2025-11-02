
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useClosingCostsCalculator } from "@/components/closing-costs-calculator/hooks/useClosingCostsCalculator";
import { PropertyInformation } from "@/components/closing-costs-calculator/components/PropertyInformation";
import { LoanDetails } from "@/components/closing-costs-calculator/components/LoanDetails";
import { CustomFees } from "@/components/closing-costs-calculator/components/CustomFees";
import { Results } from "@/components/closing-costs-calculator/components/Results";

export default function ClosingCostsCalculator() {
  const {
    purchasePrice, setPurchasePrice,
    loanAmount, setLoanAmount,
    propertyType, setPropertyType,
    state, setState,
    transactionType, setTransactionType,
    loanType, setLoanType,
    downPaymentPercent, setDownPaymentPercent,
    interestRate, setInterestRate,
    loanTerm, setLoanTerm,
    customOriginationFee, setCustomOriginationFee,
    customAppraisalFee, setCustomAppraisalFee,
    customInspectionFee, setCustomInspectionFee,
    customTitleInsurance, setCustomTitleInsurance,
    customAttorneyFees, setCustomAttorneyFees,
    customCommissionRate, setCustomCommissionRate,
    results,
    calculateClosingCosts,
  } = useClosingCostsCalculator();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Closing Costs Calculator</CardTitle>
        <CardDescription>Estimate the closing costs for your real estate transaction.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="property">
          <TabsList>
            <TabsTrigger value="property">Property Information</TabsTrigger>
            <TabsTrigger value="loan">Loan Details</TabsTrigger>
            <TabsTrigger value="fees">Custom Fees</TabsTrigger>
          </TabsList>
          <TabsContent value="property">
            <PropertyInformation 
              purchasePrice={purchasePrice} setPurchasePrice={setPurchasePrice}
              loanAmount={loanAmount} setLoanAmount={setLoanAmount}
              propertyType={propertyType} setPropertyType={setPropertyType}
              state={state} setState={setState}
              transactionType={transactionType} setTransactionType={setTransactionType}
            />
          </TabsContent>
          <TabsContent value="loan">
            <LoanDetails 
              loanType={loanType} setLoanType={setLoanType}
              downPaymentPercent={downPaymentPercent} setDownPaymentPercent={setDownPaymentPercent}
              interestRate={interestRate} setInterestRate={setInterestRate}
              loanTerm={loanTerm} setLoanTerm={setLoanTerm}
            />
          </TabsContent>
          <TabsContent value="fees">
            <CustomFees 
              customOriginationFee={customOriginationFee} setCustomOriginationFee={setCustomOriginationFee}
              customAppraisalFee={customAppraisalFee} setCustomAppraisalFee={setCustomAppraisalFee}
              customInspectionFee={customInspectionFee} setCustomInspectionFee={setCustomInspectionFee}
              customTitleInsurance={customTitleInsurance} setCustomTitleInsurance={setCustomTitleInsurance}
              customAttorneyFees={customAttorneyFees} setCustomAttorneyFees={setCustomAttorneyFees}
              customCommissionRate={customCommissionRate} setCustomCommissionRate={setCustomCommissionRate}
            />
          </TabsContent>
        </Tabs>
        <Button onClick={calculateClosingCosts} className="mt-4">Calculate</Button>
        <Results results={results} />
      </CardContent>
    </Card>
  );
}