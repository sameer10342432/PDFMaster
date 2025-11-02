import { privacyTitle, privacySubtitle } from "./data";

export default function PrivacyHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {privacyTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  );
}