
import Link from 'next/link';
import { TOOLS } from '@/constants';
import { toolsContent } from './data';

export const Tools = () => {
  const tools = TOOLS.map(tool => ({
    name: tool.title,
    href: `/tools/${tool.title.toLowerCase().replace(/ /g, '-')}`,
    description: tool.description,
    icon: '',
    category: tool.category
  }));

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {toolsContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {toolsContent.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{tool.icon}</div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>
              <Link
                href={tool.href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
              >
                Try Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Tools Button */}
        <div className="text-center mt-12">
          <Link
            href={toolsContent.viewAllButton.href}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            {toolsContent.viewAllButton.text}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};