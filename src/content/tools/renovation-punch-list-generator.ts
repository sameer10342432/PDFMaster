import { CalculatorContent } from "@/types";

export const RENOVATION_PUNCH_LIST_GENERATOR_CONTENT: CalculatorContent = {
  title: "Renovation Punch List Generator",
  description: "Create and track renovation tasks with cost estimates and timeline management.",
  icon: "Icon",
  category: "Real Estate",
  slug: "renovation-punch-list-generator",
  article: {
    title: "About the Renovation Punch List Generator",
    content: `
    The Renovation Punch List Generator helps homeowners, contractors, and real estate investors create comprehensive renovation task lists with cost estimates and timeline tracking.

    ### How it Works

    This tool calculates total renovation costs, tracks task completion, and helps manage project timelines for residential renovations.

    #### Key Inputs:

    - **Interior Tasks:** Kitchen, bathrooms, flooring, painting, and other interior work.
    - **Exterior Tasks:** Roofing, siding, landscaping, and outdoor improvements.
    - **Mechanical Systems:** HVAC, plumbing, electrical upgrades.
    - **Structural Work:** Foundation, framing, and structural repairs.
    - **Labor vs. Materials:** Separate tracking of labor and material costs.
    - **Timeline:** Estimated duration for each category of work.

    ### Why Use This Calculator?

    - **Complete Budgeting:** Track all renovation costs in one place.
    - **Task Organization:** Categorize work by type and priority.
    - **Timeline Management:** Estimate project duration and scheduling.
    - **Cost Breakdown:** Separate labor and material costs for better planning.

    ### Key Features:

    - Multi-category task tracking (interior, exterior, mechanical, structural)
    - Labor and material cost separation
    - Timeline estimation for project planning
    - Contingency budget calculation
    - Priority-based task organization
    - Total project cost and duration summary
  `,
  },
  calculator: {
    fields: [
      {
        name: "interiorLaborCost",
        label: "Interior Labor Cost",
        type: "number",
        defaultValue: "15000",
      },
      {
        name: "interiorMaterialsCost",
        label: "Interior Materials Cost",
        type: "number",
        defaultValue: "12000",
      },
      {
        name: "exteriorLaborCost",
        label: "Exterior Labor Cost",
        type: "number",
        defaultValue: "10000",
      },
      {
        name: "exteriorMaterialsCost",
        label: "Exterior Materials Cost",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "mechanicalLaborCost",
        label: "Mechanical Systems Labor Cost",
        type: "number",
        defaultValue: "8000",
      },
      {
        name: "mechanicalMaterialsCost",
        label: "Mechanical Systems Materials Cost",
        type: "number",
        defaultValue: "7000",
      },
      {
        name: "structuralLaborCost",
        label: "Structural Labor Cost",
        type: "number",
        defaultValue: "12000",
      },
      {
        name: "structuralMaterialsCost",
        label: "Structural Materials Cost",
        type: "number",
        defaultValue: "10000",
      },
      {
        name: "permitFees",
        label: "Permit & Inspection Fees",
        type: "number",
        defaultValue: "2500",
      },
      {
        name: "contingencyPercent",
        label: "Contingency Buffer (%)",
        type: "number",
        defaultValue: "10",
      },
      {
        name: "estimatedWeeks",
        label: "Estimated Project Duration (Weeks)",
        type: "number",
        defaultValue: "12",
      },
    ],
    results: [
      { label: "Total Labor Costs", isCurrency: true },
      { label: "Total Material Costs", isCurrency: true },
      { label: "Subtotal Renovation Costs", isCurrency: true },
      { label: "Permit & Fees", isCurrency: true },
      { label: "Contingency Reserve", isCurrency: true },
      { label: "Total Project Budget", isCurrency: true },
      { label: "Weekly Budget Burn Rate", isCurrency: true },
      { label: "Project Timeline (Weeks)", isCurrency: false },
    ],
    calculate: (values) => {
      const { interiorLaborCost, interiorMaterialsCost, exteriorLaborCost, exteriorMaterialsCost, mechanicalLaborCost, mechanicalMaterialsCost, structuralLaborCost, structuralMaterialsCost, permitFees, contingencyPercent, estimatedWeeks } = values;
      
      const totalLaborCosts = interiorLaborCost + exteriorLaborCost + mechanicalLaborCost + structuralLaborCost;
      const totalMaterialCosts = interiorMaterialsCost + exteriorMaterialsCost + mechanicalMaterialsCost + structuralMaterialsCost;
      const subtotalRenovationCosts = totalLaborCosts + totalMaterialCosts;
      const contingencyReserve = subtotalRenovationCosts * (contingencyPercent / 100);
      const totalProjectBudget = subtotalRenovationCosts + permitFees + contingencyReserve;
      const weeklyBurnRate = totalProjectBudget / estimatedWeeks;

      return [
        { label: "Total Labor Costs", value: totalLaborCosts.toFixed(2), isCurrency: true },
        { label: "Total Material Costs", value: totalMaterialCosts.toFixed(2), isCurrency: true },
        { label: "Subtotal Renovation Costs", value: subtotalRenovationCosts.toFixed(2), isCurrency: true },
        { label: "Permit & Fees", value: permitFees.toFixed(2), isCurrency: true },
        { label: "Contingency Reserve", value: contingencyReserve.toFixed(2), isCurrency: true },
        { label: "Total Project Budget", value: totalProjectBudget.toFixed(2), isCurrency: true },
        { label: "Weekly Budget Burn Rate", value: weeklyBurnRate.toFixed(2), isCurrency: true },
        { label: "Project Timeline (Weeks)", value: estimatedWeeks.toFixed(0), isCurrency: false },
      ];
    },
  },
};
