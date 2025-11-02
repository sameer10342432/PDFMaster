
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zoningRegulations } from "@/lib/zoningRegulations";

type ZoningRegulations = typeof zoningRegulations;

interface ZoningGuideProps {
  regulations: ZoningRegulations;
}

const ZoningGuide: React.FC<ZoningGuideProps> = ({ regulations }) => {
  return (
    <div className="space-y-6">
      {Object.entries(regulations).map(([zone, details]) => (
        <Card key={zone}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-700">
              {details.name} ({zone})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Allowed Uses:</h4>
              <ul className="list-disc list-inside">
                {details.allowedUses.map(use => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Maximum Height:</h4>
              <p>{details.maxHeight} feet</p>
            </div>
            <div>
              <h4 className="font-semibold">Minimum Lot Size:</h4>
              <p>{details.minLotSize} sqft</p>
            </div>
            <div>
              <h4 className="font-semibold">Setbacks:</h4>
              <ul className="list-disc list-inside">
                <li>Front: {details.setbacks.front} feet</li>
                <li>Side: {details.setbacks.side} feet</li>
                <li>Rear: {details.setbacks.rear} feet</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ZoningGuide;