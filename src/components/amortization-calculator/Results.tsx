"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Results = ({ schedule }: { schedule: any[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amortization Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Monthly Payment</TableHead>
              <TableHead>Principal Payment</TableHead>
              <TableHead>Interest Payment</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.monthlyPayment}</TableCell>
                <TableCell>{row.principalPayment}</TableCell>
                <TableCell>{row.interestPayment}</TableCell>
                <TableCell>{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};