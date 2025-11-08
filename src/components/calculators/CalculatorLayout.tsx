import React from 'react';

export const CalculatorLayout = ({ children, content }: { children?: React.ReactNode, content?: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-5 mb-4">
            {content?.icon && <span className="text-6xl drop-shadow-lg">{content.icon}</span>}
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">{content?.title}</h1>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl leading-relaxed">{content?.description}</p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="-mt-8">
          {children}
        </div>

        {/* Article Section */}
        {content?.article && (
          <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none mt-12 border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-6 border-b-4 border-gradient-to-r from-blue-500 to-indigo-500">
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