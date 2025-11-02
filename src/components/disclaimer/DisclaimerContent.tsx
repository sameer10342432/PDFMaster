import { sections, finalWarning, importantNotice } from './data';
import { Section, Subsection, ProfessionalSection } from './types';

const DisclaimerContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800">{importantNotice.title}</h3>
              <p className="text-red-700 mt-2 leading-relaxed">{importantNotice.text}</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {sections.map((section: Section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
                ))
              ) : (
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
              )}
              {section.subsections && section.subsections.map((subsection: Subsection, sIndex) => (
                <div key={sIndex}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{subsection.title}</h3>
                  {'content' in subsection && subsection.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">{subsection.content}</p>
                  )}
                  {subsection.items && (
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      {subsection.items.map((item, iIndex) => (
                        <li key={iIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {section.professionalSections && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {section.professionalSections.map((profSection: ProfessionalSection, psIndex) => (
                    <div key={psIndex} className={`${profSection.className} rounded-lg p-6`}>
                      <h3 className={`text-lg font-semibold ${profSection.titleClassName} mb-3`}>{profSection.title}</h3>
                      <ul className={`${profSection.listClassName} space-y-1 text-sm`}>
                        {profSection.items.map((item, iIndex) => (
                          <li key={iIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {section.items && (
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contactInfo && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Email:</strong> {section.contactInfo.email}</li>
                    <li><strong>Address:</strong> {section.contactInfo.address}</li>
                    <li><strong>Phone:</strong> {section.contactInfo.phone}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">{finalWarning.title}</h3>
                <p className="text-yellow-700 mt-2 leading-relaxed">{finalWarning.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerContent;