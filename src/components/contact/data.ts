
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'support@propertytools.com',
    description: "We'll respond within 24 hours",
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Office',
    content: '123 Real Estate Ave<br />Suite 100<br />Austin, TX 78701',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    icon: FaClock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM CST<br />Saturday: 10:00 AM - 4:00 PM CST<br />Sunday: Closed',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
];

export const faqs = [
  {
    question: 'Are your calculators accurate?',
    answer: 'Our calculators use industry-standard formulas and are designed for estimation purposes. Always consult with professionals for final decisions.',
  },
  {
    question: 'Is this service free?',
    answer: 'Yes, all our property calculation tools are completely free to use.',
  },
  {
    question: 'Do you store my data?',
    answer: "We don't store any calculation data you enter. All calculations are performed locally in your browser.",
  },
];

export const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'calculator', label: 'Calculator Question' },
  { value: 'bug', label: 'Report a Bug' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'business', label: 'Business Partnership' },
  { value: 'other', label: 'Other' },
];