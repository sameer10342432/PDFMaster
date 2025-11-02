
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const footerContent = {
  company: {
    name: 'Property Tools',
    description: 'Free real estate calculators and tools for buyers, sellers, and agents. Make informed property decisions with our comprehensive suite of tools.',
  },
  quickLinks: {
    title: 'Quick Links',
    links: [
      { href: '/tools/property-valuation', label: 'Property Valuation' },
      { href: '/tools/mortgage-calculator', label: 'Mortgage Calculator' },
      { href: '/tools/roi-calculator', label: 'ROI Calculator' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  legalLinks: {
    title: 'Legal & Support',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/disclaimer', label: 'Disclaimer' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  socialLinks: {
    title: 'Social',
    links: [
      { href: '#', icon: FaTwitter },
      { href: '#', icon: FaLinkedin },
      { href: '#', icon: FaGithub },
    ],
  },
  copyright: `© ${new Date().getFullYear()} Property Tools. All rights reserved.`,
};