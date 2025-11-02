export const zoningRegulations = {
  "R-1": {
    name: "Single-Family Residential",
    allowedUses: ["single-family"],
    maxHeight: 35, // feet
    minLotSize: 5000, // sqft
    setbacks: {
      front: 20, // feet
      side: 5, // feet
      rear: 15, // feet
    },
  },
  "R-2": {
    name: "Two-Family Residential",
    allowedUses: ["single-family", "two-family"],
    maxHeight: 40,
    minLotSize: 7000,
    setbacks: {
      front: 25,
      side: 7,
      rear: 20,
    },
  },
  "C-1": {
    name: "Commercial",
    allowedUses: ["commercial", "mixed-use"],
    maxHeight: 60,
    minLotSize: 10000,
    setbacks: {
      front: 0,
      side: 0,
      rear: 10,
    },
  },
  "I-1": {
    name: "Industrial",
    allowedUses: ["industrial"],
    maxHeight: 80,
    minLotSize: 20000,
    setbacks: {
      front: 50,
      side: 20,
      rear: 20,
    },
  },
};