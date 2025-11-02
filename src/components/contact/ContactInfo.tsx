
import { contactMethods, faqs } from './data';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      
      <div className="space-y-8">
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                  <method.icon className={`w-6 h-6 ${method.textColor}`} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: method.content }} />
                {method.description && <p className="text-sm text-gray-500 mt-1">{method.description}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-900">{faq.question}</h4>
                <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;