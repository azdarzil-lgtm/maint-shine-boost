import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Privacy Policy | SolidMaint" },
      {
        name: "description",
        content:
          "Read how SolidMaint collects, uses and protects personal information when you enquire about property care on the Costa del Sol.",
      },
      { property: "og:title", content: "Privacy Policy | SolidMaint" },
      {
        property: "og:description",
        content: "How SolidMaint handles personal information, enquiries and your privacy rights.",
      },
      { property: "og:url", content: "https://maint-shine-boost.lovable.app/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://maint-shine-boost.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Who we are",
    content: (
      <>
        <p>
          SolidMaint provides property maintenance and home-care services on the Costa del Sol. For the purposes of
          data protection law, SolidMaint is responsible for the personal information described in this policy.
        </p>
        <p>
          You can contact us at <a href="mailto:info@solidmaint.com">info@solidmaint.com</a> or by telephone on{
          " "}<a href="tel:+34951798899">+34 951 798 899</a>.
        </p>
      </>
    ),
  },
  {
    title: "2. Information we collect",
    content: (
      <>
        <p>We may collect information you choose to provide when you contact us or build a care plan, including:</p>
        <ul>
          <li>your name, email address and telephone number;</li>
          <li>your property type, location, size and care requirements;</li>
          <li>your preferred contact time and whether you request a visit or callback;</li>
          <li>details you include in an enquiry, quote request or property video; and</li>
          <li>correspondence and records connected with providing our services.</li>
        </ul>
        <p>
          Our website enquiry and quote forms prepare an email in your own email application. The information is sent
          to us only when you choose to send that email.
        </p>
      </>
    ),
  },
  {
    title: "3. How and why we use your information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>reply to enquiries and recommend a suitable care plan;</li>
          <li>prepare estimates, arrange visits and provide requested services;</li>
          <li>communicate about appointments, work, reports, invoices and customer care;</li>
          <li>maintain appropriate business, safety and accounting records; and</li>
          <li>protect our website, customers and legal rights.</li>
        </ul>
        <p>
          We rely on the steps you ask us to take before entering a contract, performance of a contract, compliance
          with legal obligations, and our legitimate interests in operating and improving our services. Where consent
          is required, you may withdraw it at any time.
        </p>
      </>
    ),
  },
  {
    title: "4. Sharing and international services",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share only what is necessary with trusted providers that
          help us deliver our services, such as email, communications, website hosting and professional advisers, or
          where the law requires it. Providers acting for us must protect your information and use it only for the
          agreed purpose.
        </p>
        <p>
          Links to WhatsApp, social networks and app stores take you to services operated by other companies. Their
          own privacy policies apply once you use those services. Some providers may process information outside the
          European Economic Area using legally recognised safeguards.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies and website data",
    content: (
      <>
        <p>
          We currently use only the technology needed to display and operate this website. A setting in your browser’s
          local storage remembers when you dismiss a website message so it does not keep appearing. We do not currently
          use advertising cookies on this site.
        </p>
        <p>
          Basic technical information may be processed by our website hosting and error-monitoring services to deliver
          the site securely and diagnose faults. Our heading font is provided by Google Fonts, so your browser may
          connect to Google when a page loads. External services you choose to open may set their own cookies. If we add
          optional analytics or marketing cookies, we will update this policy and request consent where required.
        </p>
      </>
    ),
  },
  {
    title: "6. How long we keep information",
    content: (
      <p>
        We keep enquiry information only as long as reasonably needed to respond and follow up. Customer and service
        records are kept for the duration of our relationship and afterwards for the periods required by tax,
        accounting, insurance and other applicable laws. Information that is no longer needed is deleted or
        anonymised securely.
      </p>
    ),
  },
  {
    title: "7. Keeping your information safe",
    content: (
      <p>
        We use reasonable organisational and technical safeguards designed to protect personal information from loss,
        misuse, unauthorised access, alteration or disclosure. No online service can guarantee absolute security, but
        we review our safeguards as our services develop.
      </p>
    ),
  },
  {
    title: "8. Your rights",
    content: (
      <>
        <p>
          Under applicable data protection law, you may have the right to access, correct, delete or restrict your
          personal information, object to certain uses, request portability, or withdraw consent. These rights can be
          subject to lawful exceptions.
        </p>
        <p>
          To exercise a right, email <a href="mailto:info@solidmaint.com">info@solidmaint.com</a>. We may need to
          confirm your identity before completing the request. You may also complain to the Spanish Data Protection
          Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">aepd.es</a>.
        </p>
      </>
    ),
  },
  {
    title: "9. Changes to this policy",
    content: (
      <p>
        We may update this policy when our services or legal obligations change. The latest version will always be
        published here with its effective date.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="bg-deep pb-16 pt-36 text-sunlit md:pb-24 md:pt-48">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <p className="section-label text-coral">Legal</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sunlit/75">
            Your home is personal. Your information deserves the same care.
          </p>
          <p className="mt-6 text-sm font-semibold text-sunlit/55">Effective 30 September 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[14rem_minmax(0,1fr)] md:px-10">
          <aside className="md:sticky md:top-32 md:self-start">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-coral hover:text-deep">
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
            </Link>
            <div className="mt-7 border-l-2 border-coral pl-4 text-sm leading-relaxed text-deep/65">
              <p className="font-bold text-deep">Questions about your data?</p>
              <a className="mt-3 flex items-center gap-2 hover:text-coral" href="mailto:info@solidmaint.com">
                <Mail className="size-4" aria-hidden="true" /> info@solidmaint.com
              </a>
              <a className="mt-2 flex items-center gap-2 hover:text-coral" href="tel:+34951798899">
                <Phone className="size-4" aria-hidden="true" /> +34 951 798 899
              </a>
            </div>
          </aside>

          <article className="space-y-10">
            <div className="border-b border-deep/15 pb-8 text-lg leading-relaxed text-deep/75">
              <p>
                This policy explains what personal information we collect through the SolidMaint website, why we use
                it, who may receive it and the choices you have.
              </p>
            </div>
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-32">
                <h2 className="font-display text-2xl font-semibold md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-deep/70 [&_a]:font-semibold [&_a]:text-coral [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                  {section.content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}