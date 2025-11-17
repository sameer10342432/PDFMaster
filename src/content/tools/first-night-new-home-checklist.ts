import { CalculatorContent } from '@/types';

export const FIRST_NIGHT_CHECKLIST_CONTENT: CalculatorContent = {
  title: 'First Night in New Home Checklist',
  description: 'Ensure a comfortable and stress-free first night in your new home with this comprehensive checklist.',
  icon: 'Icon',
  category: 'Moving & Relocation',
  slug: 'first-night-new-home-checklist',
  article: {
    title: 'Your First Night in a New Home: The Ultimate Survival Guide',
    content: `
Moving day can be overwhelming, and your first night in a new home sets the tone for your entire moving experience. This comprehensive guide ensures you have everything you need for a comfortable, safe, and stress-free first night.

### Why Planning Your First Night Matters

The first night in a new home often catches people off guard. After exhausting moving day, families have found themselves without:
- Basic toiletries
- Bed sheets and towels
- Food and drinks
- Phone chargers
- Important documents

Planning ahead prevents these stressful situations and helps you actually enjoy your first night in your new space.

## The "First Night Box" Strategy

Pack a clearly labeled "First Night" box or suitcase that travels with you (not on the moving truck) containing all essentials. This should be the last box packed and first box opened.

### Essential Categories for First Night Success

**1. Sleeping Essentials**
- Bed sheets (for each bed)
- Pillows and pillowcases  
- Blankets or comforters
- Pajamas for everyone
- Alarm clock (in case phone dies)

**2. Bathroom Necessities**
- Toilet paper (TOP PRIORITY!)
- Hand soap and paper towels
- Toothbrushes and toothpaste
- Shower essentials (shampoo, soap, towels)
- Medications (prescription and OTC)
- First aid kit

**3. Kitchen Basics**
- Paper plates, cups, plastic utensils
- Bottle opener and corkscrew
- Coffee maker and coffee
- Snacks and easy breakfast items
- Trash bags
- Dish soap and sponge

**4. Electronics & Connectivity**
- Phone chargers for all devices
- Laptop and charger
- Power strips or extension cords
- Flashlights or battery-powered lanterns
- Batteries (various sizes)

**5. Important Documents**
- Closing documents/lease
- IDs and important papers
- Moving company contact info
- Emergency contact list
- Utility company numbers

**6. Tools & Supplies**
- Screwdriver set
- Hammer
- Scissors
- Box cutter/utility knife
- Packing tape
- Light bulbs

**7. Personal Comfort Items**
- Change of clothes for everyone
- Pet food and supplies
- Children's comfort items
- Entertainment (books, tablets, games)
- Valuables and irreplaceables

**8. Cleaning Supplies**
- All-purpose cleaner
- Paper towels
- Disinfecting wipes
- Vacuum or broom
- Trash bags

**9. Safety & Security**
- Door locks (if changing them)
- Window locks check
- Smoke detector batteries
- Carbon monoxide detector
- Fire extinguisher

## First Night Timeline

**Upon Arrival (Hour 1-2):**
1. Do a walkthrough and document condition
2. Test all utilities (water, electricity, heating/cooling)
3. Locate circuit breaker, water shutoff, gas valve
4. Check all locks on doors and windows
5. Note any damage or issues

**Setting Up (Hour 2-4):**
1. Assemble beds or set up sleeping areas
2. Make bathrooms functional
3. Set up basic kitchen function
4. Charge all devices
5. Unpack first night box

**Evening (Hour 4+):**
1. Order food or prepare simple meal
2. Test internet/cable if installed
3. Program thermostat
4. Set up kids' and pets' spaces
5. Locate emergency exits

**Before Bed:**
1. Lock all doors and windows
2. Set alarm system if applicable
3. Locate emergency numbers
4. Set alarms for morning
5. Note any issues to address tomorrow

## How to Use This Checklist

This tool helps you prepare for and track your first night tasks:

1. **Move-In Date**: Enter your planned arrival date
2. **Number of People**: Family size affects what you need
3. **Pets**: Add extra items for furry family members
4. **Special Needs**: Medical equipment, baby items, etc.

The checklist will generate:
- Personalized packing list
- Recommended quantities
- Priority order for unpacking
- Safety checklist
- First morning essentials

## Pro Tips for First Night Success

**Week Before Move:**
- Shop for first night essentials
- Pack the first night box
- Label it clearly on all sides
- Keep it in your car, not the truck

**Day Before Move:**
- Confirm moving truck time
- Recheck first night box
- Charge all devices fully
- Get cash for tips/emergencies

**Moving Day Morning:**
- Eat good breakfast
- Dress comfortably
- Keep important docs with you
- Take photos of empty old home

**First Evening:**
- Don't try to unpack everything
- Focus on comfort and safety
- Order takeout - don't cook
- Go to bed at reasonable hour

## Common First Night Mistakes

- **Overpacking the moving truck**: Keep essentials separate
- **Not testing utilities**: Discover problems before dark
- **Trying to do too much**: Unpack only what you need
- **Forgetting about pets**: They need comfort items too
- **Not having cash**: For tips, food delivery, emergencies
- **Skipping the walkthrough**: Document issues immediately

## First Morning Checklist

Wake up ready for Day 2:
- Know where breakfast items are
- Have clean clothes accessible
- Locate keys and important docs
- Test shower and hot water
- Check neighborhood parking rules

## Budget for First Night

Set aside $150-300 for:
- Food delivery or takeout: $50-100
- Emergency supplies: $50-100
- Tips for movers: $50-100
- Unexpected needs: Variable

## Making It Special

Turn a stressful night into a memory:
- Order from your favorite restaurant
- Have a "picnic" on the floor
- Take first family photo in new home
- Let kids decorate their rooms
- Celebrate this milestone!
`,
  },
  calculator: {
    fields: [
      {
        name: 'moveInDate',
        label: 'Move-In Date',
        type: 'date',
        defaultValue: new Date().toISOString().split('T')[0],
      },
      {
        name: 'numberOfPeople',
        label: 'Number of People Moving',
        type: 'number',
        defaultValue: 2,
      },
      {
        name: 'hasPets',
        label: 'Do You Have Pets?',
        type: 'select',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
      },
      {
        name: 'hasChildren',
        label: 'Do You Have Children?',
        type: 'select',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
      },
    ],
    results: [
      { label: 'Total Essential Items', isCurrency: false },
      { label: 'Recommended Boxes', isCurrency: false },
      { label: 'Priority Level', isCurrency: false },
    ],
    calculate: (data) => {
      const { numberOfPeople, hasPets, hasChildren } = data;
      
      let essentialItems = 35; // Base essentials
      essentialItems += parseInt(numberOfPeople) * 5; // Per person items
      if (hasPets === 'Yes') essentialItems += 12; // Pet supplies
      if (hasChildren === 'Yes') essentialItems += 15; // Child items
      
      const boxes = Math.ceil(essentialItems / 20);
      
      return [
        { label: 'Total Essential Items', value: `${essentialItems} items` },
        { label: 'Recommended Boxes', value: `${boxes} boxes/bags` },
        { label: 'Priority Level', value: 'Pack 1 week before move' },
      ];
    },
  },
};
