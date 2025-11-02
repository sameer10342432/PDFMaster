
import { useReducer } from 'react';
import { zoningRegulations } from '@/lib/zoningRegulations';

type ZoneKey = keyof typeof zoningRegulations;

interface PropertyDetails {
  zone: string;
  proposedUse: string;
  buildingHeight: string;
  lotSize: string;
}

interface ComplianceResult {
  score: number;
  issues: string[];
}

interface State {
  propertyDetails: PropertyDetails;
  complianceResult: ComplianceResult | null;
}

type Action = 
  | { type: 'SET_PROPERTY_DETAIL'; payload: { name: string; value: string } }
  | { type: 'SET_COMPLIANCE_RESULT'; payload: ComplianceResult | null };

const initialState: State = {
  propertyDetails: {
    zone: '',
    proposedUse: '',
    buildingHeight: '',
    lotSize: '',
  },
  complianceResult: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PROPERTY_DETAIL':
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SET_COMPLIANCE_RESULT':
      return {
        ...state,
        complianceResult: action.payload,
      };
    default:
      return state;
  }
};

export const checkCompliance = (propertyDetails: PropertyDetails): ComplianceResult => {
  const { zone, proposedUse, buildingHeight, lotSize } = propertyDetails;
  if (!zone || !proposedUse || !buildingHeight || !lotSize) {
    throw new Error("Please fill in all fields.");
  }

  const regulation = zoningRegulations[zone as ZoneKey];
  const issues = [];
  let score = 100;

  if (!regulation.allowedUses.includes(proposedUse)) {
    issues.push(
      `Proposed use '${proposedUse}' is not allowed in '${regulation.name}' zone.`
    );
    score -= 40;
  }

  if (parseInt(buildingHeight) > regulation.maxHeight) {
    issues.push(
      `Building height of ${buildingHeight}ft exceeds the maximum of ${regulation.maxHeight}ft.`
    );
    score -= 30;
  }

  if (parseInt(lotSize) < regulation.minLotSize) {
    issues.push(
      `Lot size of ${lotSize} sqft is less than the minimum of ${regulation.minLotSize} sqft.`
    );
    score -= 30;
  }

  return {
    score: Math.max(0, score),
    issues: issues,
  };
};

export const useZoningCompliance = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_PROPERTY_DETAIL', payload: { name, value } });
  };

  const handleSelectChange = (name: string, value: string) => {
    dispatch({ type: 'SET_PROPERTY_DETAIL', payload: { name, value } });
  };

  const handleCheckCompliance = () => {
    try {
      const result = checkCompliance(state.propertyDetails);
      dispatch({ type: 'SET_COMPLIANCE_RESULT', payload: result });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return {
    ...state,
    handleInputChange,
    handleSelectChange,
    handleCheckCompliance,
  };
};