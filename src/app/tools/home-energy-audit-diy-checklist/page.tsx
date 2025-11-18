import { HOME_ENERGY_AUDIT_DIY_CHECKLIST_CONTENT } from '@/content/tools/home-energy-audit-diy-checklist';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { HomeEnergyAuditDiyChecklist } from '@/components/calculators/HomeEnergyAuditDiyChecklist';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Energy Audit (DIY) Checklist | Energy Efficiency Assessment Tool',
    description: 'Complete DIY home energy audit checklist to identify energy waste, reduce utility bills, and improve home efficiency. Step-by-step evaluation of insulation, HVAC, and appliances.',
  };
}

const HomeEnergyAuditDiyChecklistPage = () => {
  return (
    <CalculatorLayout content={HOME_ENERGY_AUDIT_DIY_CHECKLIST_CONTENT}>
      <HomeEnergyAuditDiyChecklist />
    </CalculatorLayout>
  );
};

export default HomeEnergyAuditDiyChecklistPage;
