import {
  introduction,
  informationCollection,
  informationUsage,
  cookiesAndTracking,
  thirdPartyServices,
  dataSecurity,
  yourRights,
  childrenPrivacy,
  internationalTransfers,
  policyChanges,
  contactInfo,
} from "./data";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    {children}
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    {children}
  </>
);

export default function PrivacyContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <Section title={introduction.title}>
            {introduction.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </Section>

          <Section title={informationCollection.title}>
            {informationCollection.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <SubSection title={section.title}>
                  <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                  {section.items && (
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                </SubSection>
              </div>
            ))}
          </Section>

          <Section title={informationUsage.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{informationUsage.content}</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              {informationUsage.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </Section>

          <Section title={cookiesAndTracking.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{cookiesAndTracking.content}</p>
            {cookiesAndTracking.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <SubSection title={section.title}>
                  <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                </SubSection>
              </div>
            ))}
          </Section>

          <Section title={thirdPartyServices.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{thirdPartyServices.content}</p>
            {thirdPartyServices.services.map((service, index) => (
              <div key={index} className="mb-6">
                <SubSection title={service.title}>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </SubSection>
              </div>
            ))}
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: thirdPartyServices.footer }} />
          </Section>

          <Section title={dataSecurity.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{dataSecurity.content}</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              {dataSecurity.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">{dataSecurity.footer}</p>
          </Section>

          <Section title={yourRights.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{yourRights.content}</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              {yourRights.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">{yourRights.footer}</p>
          </Section>

          <Section title={childrenPrivacy.title}>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: childrenPrivacy.content }} />
          </Section>

          <Section title={internationalTransfers.title}>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: internationalTransfers.content }} />
          </Section>

          <Section title={policyChanges.title}>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: policyChanges.content }} />
          </Section>

          <Section title={contactInfo.title}>
            <p className="text-gray-700 leading-relaxed mb-4">{contactInfo.content}</p>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700">
                {contactInfo.methods.map((method, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: method }} />
                ))}
              </ul>
            </div>
          </Section>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} and was last updated on the same date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}