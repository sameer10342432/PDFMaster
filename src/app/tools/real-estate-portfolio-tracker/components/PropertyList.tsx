import { Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Badge, Color } from "@tremor/react";

type Status = "Rented" | "Vacant";

interface Property {
  name: string;
  type: string;
  location: string;
  value: string;
  equity: string;
  cashFlow: string;
  status: Status;
}

const properties: Property[] = [
  {
    name: "Sunset Villa",
    type: "Single-Family",
    location: "Los Angeles",
    value: "$550,000",
    equity: "$150,000",
    cashFlow: "$800",
    status: "Rented",
  },
  {
    name: "Downtown Lofts",
    type: "Multi-Family",
    location: "New York",
    value: "$1,200,000",
    equity: "$400,000",
    cashFlow: "$2,500",
    status: "Rented",
  },
  {
    name: "Oakwood Plaza",
    type: "Commercial",
    location: "Chicago",
    value: "$2,500,000",
    equity: "$1,000,000",
    cashFlow: "$5,000",
    status: "Rented",
  },
  {
    name: "Maple Creek",
    type: "Single-Family",
    location: "Houston",
    value: "$350,000",
    equity: "$100,000",
    cashFlow: "$600",
    status: "Vacant",
  },
  {
    name: "Lakeside Apartments",
    type: "Multi-Family",
    location: "Chicago",
    value: "$950,000",
    equity: "$300,000",
    cashFlow: "$1,800",
    status: "Rented",
  },
];

const statusColors: Record<Status, Color> = {
  Rented: "emerald",
  Vacant: "rose",
};

export default function PropertyList() {
  return (
    <Card className="mt-12">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">Property Overview</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Property Name</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Market Value</TableHeaderCell>
            <TableHeaderCell>Equity</TableHeaderCell>
            <TableHeaderCell>Monthly Cash Flow</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.type}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.location}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.value}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.equity}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.cashFlow}</Text>
              </TableCell>
              <TableCell>
                <Badge color={statusColors[item.status]}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}