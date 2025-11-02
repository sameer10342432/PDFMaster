import {
  agreement,
  acceptance,
  serviceDescription,
  useLicense,
  userResponsibilities,
  disclaimer,
  liabilityLimitations,
  materialsAccuracy,
  thirdPartyLinks,
  advertising,
  intellectualProperty,
  termination,
  governingLaw,
  termsChanges,
  contactInfo,
} from "./data";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    {children}
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
    {items.map((item, i) => (
      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

export default function TermsContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <Section title={agreement.title}>
            {agreement.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={acceptance.title}>
            {acceptance.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={serviceDescription.title}>
            <Paragraph>{serviceDescription.content}</Paragraph>
            <List items={serviceDescription.items} />
            <Paragraph>{serviceDescription.footer}</Paragraph>
          </Section>

          <Section title={useLicense.title}>
            <Paragraph>{useLicense.content}</Paragraph>
            <List items={useLicense.items} />
            <Paragraph>{useLicense.footer}</Paragraph>
          </Section>

          <Section title={userResponsibilities.title}>
            <Paragraph>{userResponsibilities.content}</Paragraph>
            <List items={userResponsibilities.items} />
          </Section>

          <Section title={disclaimer.title}>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-gray-700 leading-relaxed font-semibold mb-2">
                {disclaimer.importantNotice.title}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {disclaimer.importantNotice.content}
              </p>
            </div>
            {disclaimer.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                <Paragraph>{section.content}</Paragraph>
                {section.items && <List items={section.items} />}
              </div>
            ))}
          </Section>

          <Section title={liabilityLimitations.title}>
            {liabilityLimitations.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={materialsAccuracy.title}>
            {materialsAccuracy.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={thirdPartyLinks.title}>
            {thirdPartyLinks.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={advertising.title}>
            {advertising.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={intellectualProperty.title}>
            {intellectualProperty.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={termination.title}>
            {termination.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={governingLaw.title}>
            {governingLaw.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={termsChanges.title}>
            {termsChanges.content.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)}
          </Section>

          <Section title={contactInfo.title}>
            <Paragraph>{contactInfo.content}</Paragraph>
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
              These Terms and Conditions are effective as of {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} and were last updated on the same date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}