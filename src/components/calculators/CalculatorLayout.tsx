import React from 'react';

export const CalculatorLayout = ({ children, content }: { children?: React.ReactNode, content?: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {content?.icon && <span className="text-5xl">{content.icon}</span>}
            <h1 className="text-4xl md:text-5xl font-bold">{content?.title}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">{content?.description}</p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          {children}
        </div>

        {/* Article Section */}
        {content?.article && (
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
              {content.article.title}
            </h2>
            <div 
              className="article-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.article.content }} 
            />
          </article>
        )}
      </div>
    </div>
  );
};