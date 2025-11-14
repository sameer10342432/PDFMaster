import { CalculatorContent } from "@/types";

export const commuteCostVsHousingCostTradeoff: CalculatorContent = {
  title: "Commute Cost vs. Housing Cost Trade-off Calculator",
  description:
    "Compare the true cost of living closer to work vs. a longer commute with cheaper housing to make an informed housing decision.",
  icon: "Icon",
  category: "Lifestyle & Housing",
  slug: "commute-cost-vs-housing-cost-tradeoff",
  metaTitle: "Commute Cost vs Housing Cost Calculator | Compare Living Closer to Work",
  metaDescription: "Calculate whether it's cheaper to live close to work with higher rent or commute from a more affordable area. Factor in gas, time value, car maintenance, and stress.",
  article: {
    title: "Understanding the True Cost of Your Commute vs. Housing Expenses",
    content: `
# Commute Cost vs. Housing Cost Trade-off: What Really Saves You Money?

When choosing where to live, many people focus solely on rent or mortgage payments. However, the location of your home relative to your workplace can have a significant financial impact that goes far beyond monthly housing costs.

## The Hidden Costs of Commuting

A long commute comes with expenses that add up quickly:

- **Fuel Costs**: Gas prices can turn a 50-mile daily commute into thousands of dollars per year
- **Vehicle Depreciation**: More miles means faster wear and tear on your vehicle
- **Maintenance & Repairs**: Oil changes, tire replacements, and brake work become more frequent
- **Time Value**: Your commute time has real monetary value - time you could spend earning, learning, or enjoying life
- **Health & Stress**: Long commutes are linked to higher stress levels, less exercise, and health issues
- **Lost Productivity**: Exhaustion from long drives can affect your work performance and career growth

## The Benefits of Living Closer

While housing costs may be higher near your workplace, consider these advantages:

- **More Personal Time**: Reclaim hours each week for family, hobbies, or side income
- **Lower Transportation Costs**: Less gas, fewer car repairs, possible elimination of second vehicle
- **Better Quality of Life**: Reduced stress, more sleep, improved work-life balance
- **Flexibility**: Ability to go home for lunch, handle emergencies, or avoid bad weather commutes
- **Environmental Impact**: Smaller carbon footprint with reduced driving

## Making the Calculation

Use this calculator to compare two scenarios side-by-side:

1. **Option A**: Higher housing cost, minimal commute
2. **Option B**: Lower housing cost, longer commute

The calculator factors in:
- Monthly rent/mortgage differences
- Fuel costs based on commute distance
- Vehicle maintenance and depreciation
- Time value of your commute hours
- Potential earnings from reclaimed time

## Key Considerations

**Distance isn't everything**: A 20-mile rural highway commute may be faster and cheaper than a 10-mile urban gridlock commute.

**Your time has value**: Consider what you could do with an extra 10-15 hours per week. Could you take on freelance work? Develop a skill? Spend time with family?

**Total cost of ownership**: Don't forget insurance rate differences, parking fees, tolls, and the potential to eliminate a second car.

**Quality of life**: Some costs can't be measured in dollars. Stress reduction, better health, and more family time have real value.

## When Living Closer Makes Sense

- Your time is valuable and you have side income opportunities
- You're in a high-paying field where networking and being available matters
- You have young children and want more family time
- Your commute involves expensive tolls or parking fees
- You're environmentally conscious and want to reduce your carbon footprint

## When a Longer Commute Might Work

- You work from home several days per week
- You enjoy your commute time (audiobooks, podcasts, decompression)
- The housing cost difference is substantial (30%+ savings)
- You have a fuel-efficient or electric vehicle
- Remote work options may increase in the future

## Bottom Line

The cheapest rent isn't always the best deal. By calculating your true all-in costs including commute expenses and time value, you can make a data-driven decision that optimizes both your finances and quality of life. Many people discover that paying slightly more for a convenient location actually saves money in the long run while dramatically improving their daily life.

Use our calculator above to run the numbers for your specific situation and see which option truly makes financial sense for you.
    `,
  },
  calculator: {
    fields: [
      {
        name: "closerHousingCost",
        label: "Monthly Housing Cost (Closer to Work)",
        type: "number",
        defaultValue: "2500",
      },
      {
        name: "fartherHousingCost",
        label: "Monthly Housing Cost (Farther from Work)",
        type: "number",
        defaultValue: "1800",
      },
      {
        name: "commuteDistanceCloser",
        label: "One-Way Commute Distance - Closer (miles)",
        type: "number",
        defaultValue: "5",
      },
      {
        name: "commuteDistanceFarther",
        label: "One-Way Commute Distance - Farther (miles)",
        type: "number",
        defaultValue: "35",
      },
      {
        name: "workDaysPerMonth",
        label: "Work Days Per Month",
        type: "number",
        defaultValue: "22",
      },
      {
        name: "fuelEfficiency",
        label: "Vehicle Fuel Efficiency (MPG)",
        type: "number",
        defaultValue: "28",
      },
      {
        name: "gasPrice",
        label: "Gas Price Per Gallon ($)",
        type: "number",
        defaultValue: "3.50",
      },
      {
        name: "maintenancePerMile",
        label: "Maintenance Cost Per Mile ($)",
        type: "number",
        defaultValue: "0.15",
      },
      {
        name: "hourlyTimeValue",
        label: "Value of Your Time ($/hour)",
        type: "number",
        defaultValue: "25",
      },
      {
        name: "averageSpeedCloser",
        label: "Average Commute Speed - Closer (mph)",
        type: "number",
        defaultValue: "30",
      },
      {
        name: "averageSpeedFarther",
        label: "Average Commute Speed - Farther (mph)",
        type: "number",
        defaultValue: "55",
      },
    ],
    results: [
      {
        label: "Total Monthly Cost (Closer)",
        isCurrency: true,
      },
      {
        label: "Total Monthly Cost (Farther)",
        isCurrency: true,
      },
      {
        label: "Monthly Savings",
        isCurrency: true,
      },
      {
        label: "Best Option",
        isCurrency: false,
      },
      {
        label: "Annual Savings",
        isCurrency: true,
      },
      {
        label: "Time Saved Per Month (hours)",
        isCurrency: false,
      },
    ],
    calculate: (values) => {
      const {
        closerHousingCost,
        fartherHousingCost,
        commuteDistanceCloser,
        commuteDistanceFarther,
        workDaysPerMonth,
        fuelEfficiency,
        gasPrice,
        maintenancePerMile,
        hourlyTimeValue,
        averageSpeedCloser,
        averageSpeedFarther,
      } = values;

      // Parse inputs
      const housingCloser = parseFloat(closerHousingCost);
      const housingFarther = parseFloat(fartherHousingCost);
      const distanceCloser = parseFloat(commuteDistanceCloser);
      const distanceFarther = parseFloat(commuteDistanceFarther);
      const workDays = parseInt(workDaysPerMonth);
      const mpg = parseFloat(fuelEfficiency);
      const gas = parseFloat(gasPrice);
      const maintenance = parseFloat(maintenancePerMile);
      const timeValue = parseFloat(hourlyTimeValue);
      const speedCloser = parseFloat(averageSpeedCloser);
      const speedFarther = parseFloat(averageSpeedFarther);

      // Calculate closer option
      const monthlyMilesCloser = distanceCloser * 2 * workDays;
      const fuelCostCloser = (monthlyMilesCloser / mpg) * gas;
      const maintenanceCostCloser = monthlyMilesCloser * maintenance;
      const commuteTimeCloser = (distanceCloser / speedCloser) * 2 * workDays; // hours per month
      const timeValueCostCloser = commuteTimeCloser * timeValue;
      const totalCostCloser = housingCloser + fuelCostCloser + maintenanceCostCloser + timeValueCostCloser;

      // Calculate farther option
      const monthlyMilesFarther = distanceFarther * 2 * workDays;
      const fuelCostFarther = (monthlyMilesFarther / mpg) * gas;
      const maintenanceCostFarther = monthlyMilesFarther * maintenance;
      const commuteTimeFarther = (distanceFarther / speedFarther) * 2 * workDays; // hours per month
      const timeValueCostFarther = commuteTimeFarther * timeValue;
      const totalCostFarther = housingFarther + fuelCostFarther + maintenanceCostFarther + timeValueCostFarther;

      // Determine best option
      const monthlySavings = Math.abs(totalCostCloser - totalCostFarther);
      const bestOption = totalCostCloser < totalCostFarther ? "Living Closer Saves Money" : "Living Farther Saves Money";
      const annualSavings = monthlySavings * 12;
      const timeSaved = Math.abs(commuteTimeCloser - commuteTimeFarther);

      return [
        {
          label: "Total Monthly Cost (Closer)",
          value: totalCostCloser.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Total Monthly Cost (Farther)",
          value: totalCostFarther.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Monthly Savings",
          value: monthlySavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Best Option",
          value: bestOption,
          isCurrency: false,
        },
        {
          label: "Annual Savings",
          value: annualSavings.toFixed(2),
          isCurrency: true,
        },
        {
          label: "Time Saved Per Month (hours)",
          value: timeSaved.toFixed(1),
          isCurrency: false,
        },
      ];
    },
  },
};
