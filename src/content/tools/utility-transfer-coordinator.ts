import { CalculatorContent } from '@/types';

export const UTILITY_TRANSFER_COORDINATOR_CONTENT: CalculatorContent = {
  title: 'Utility Transfer Coordinator',
  description: 'Coordinate and track utility transfers for your new home with our comprehensive checklist.',
  icon: 'Icon',
  category: 'Moving & Relocation',
  slug: 'utility-transfer-coordinator',
  article: {
    title: 'Complete Guide to Coordinating Utility Transfers',
    content: `
Moving to a new home involves coordinating multiple utility transfers and setups. This comprehensive guide helps you manage all essential services without missing critical deadlines.

### Why Utility Coordination Matters

Proper utility coordination ensures you have essential services ready when you move in, avoiding uncomfortable gaps in service or double-paying for utilities at two locations.

### Essential Utilities to Coordinate

**1. Electricity**
- Contact provider 2-3 weeks before move-in
- Schedule connection for move-in day
- Submit final meter reading at old address
- Understand deposit requirements

**2. Natural Gas**
- Similar timeline to electricity
- Verify gas appliances are ready
- Schedule safety inspections if needed
- Coordinate with HVAC systems

**3. Water & Sewer**
- Contact local water authority
- Pay any connection fees
- Submit final readings at old address
- Understand billing cycles

**4. Internet & Cable**
- Schedule 2-4 weeks in advance
- Compare providers and plans
- Coordinate installation appointment
- Return old equipment on time

**5. Trash & Recycling**
- Contact municipal or private service
- Understand pickup schedules
- Get bin delivery scheduled
- Learn local recycling rules

**6. Security System**
- Transfer or setup new monitoring
- Update contact information
- Test all sensors after move
- Change access codes

## Timeline for Utility Transfers

**4-6 Weeks Before Move:**
- Research providers at new address
- Compare rates and plans
- Schedule installation appointments

**2-3 Weeks Before Move:**
- Confirm all appointments
- Submit transfer requests
- Schedule disconnections at old address

**1 Week Before Move:**
- Reconfirm all appointments
- Gather account numbers
- Prepare final meter readings

**Moving Day:**
- Document all meter readings
- Test all utilities at new home
- Keep provider contact info handy

**First Week After Move:**
- Verify all services working
- Submit any final readings
- Pay connection fees
- Update billing addresses

## How to Use This Coordinator

This tool helps you track all utility transfers in one place:

1. **Move-In Date**: Enter your planned move-in date
2. **Old Address**: Your current address for disconnections
3. **New Address**: Your new home address for connections
4. **Contact Dates**: Track when you contacted each provider
5. **Appointment Dates**: Schedule and confirm appointments
6. **Status Tracking**: Mark each utility as pending, scheduled, or completed

The coordinator will provide:
- Recommended contact dates for each utility
- Deadline tracking to avoid service gaps
- Checklist of all required utilities
- Priority order for scheduling
- Important reminders and tips

## Pro Tips for Smooth Transitions

- **Overlap Service**: Keep old utilities active 1-2 days after moving for cleanup visits
- **Document Everything**: Take photos of meter readings and damage
- **Get Confirmation Numbers**: For all transfer and disconnection requests
- **Budget for Deposits**: New service often requires security deposits
- **Update Addresses**: Don't forget to update billing addresses
- **Save Provider Info**: Keep contact numbers accessible on moving day

## Common Mistakes to Avoid

- Starting too late and missing installation windows
- Not comparing providers for better rates
- Forgetting to disconnect old services
- Missing deposit deadlines
- Not scheduling time off for installation appointments
- Losing track of confirmation numbers
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
        name: 'oldAddress',
        label: 'Current Address (For Disconnection)',
        type: 'text',
        defaultValue: '',
      },
      {
        name: 'newAddress',
        label: 'New Address (For Connection)',
        type: 'text',
        defaultValue: '',
      },
      {
        name: 'daysBeforeMove',
        label: 'Days Before Move to Start Coordination',
        type: 'number',
        defaultValue: 21,
      },
    ],
    results: [
      { label: 'Start Coordination Date', isCurrency: false },
      { label: 'Total Utilities to Coordinate', isCurrency: false },
      { label: 'Recommended Timeline', isCurrency: false },
    ],
    calculate: (data) => {
      const { moveInDate, daysBeforeMove } = data;
      const moveDate = new Date(moveInDate);
      const startDate = new Date(moveDate);
      startDate.setDate(startDate.getDate() - parseInt(daysBeforeMove));
      
      const totalUtilities = 9; // Electricity, Gas, Water, Internet, Cable, Trash, Security, Phone, HOA
      
      return [
        { 
          label: 'Start Coordination Date', 
          value: startDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        },
        { 
          label: 'Total Utilities to Coordinate', 
          value: `${totalUtilities} services` 
        },
        { 
          label: 'Recommended Timeline', 
          value: `${daysBeforeMove} days before move-in` 
        },
      ];
    },
  },
};
