
import Link from 'next/link';
import { footerContent } from './data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              {footerContent.company.name}
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {footerContent.company.description}
            </p>
            <div className="flex space-x-4">
              {footerContent.socialLinks.links.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.legalLinks.title}</h3>
            <ul className="space-y-2">
              {footerContent.legalLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}