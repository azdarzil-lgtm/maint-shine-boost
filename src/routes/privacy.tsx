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
    title: "1. Introduction",
    content: (
      <>
        <p>
          SolidMaint ("we", "our", or "us") is committed to protecting your personal data and your right to privacy.
          This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our
          website, subscribe to our service updates, or contact us. We comply with the EU General Data Protection
          Regulation (GDPR) and the Spanish Organic Law on Personal Data Protection (LOPDGDD 3/2018).
        </p>
        <div className="border-l-2 border-coral pl-5">
          <p className="font-bold text-deep">Data Controller</p>
          <p>Pataluha Ventures S.L.</p>
          <p>c/o The Pool, Avda. Bulevar Príncipe Alfonso de Hohenlohe 2, 29602 Marbella, Málaga, Spain</p>
          <p><a href="mailto:privacy@solidmaint.com">privacy@solidmaint.com</a></p>
          <p>NIF B26627539. Operating subsidiary: SolidMaint S.L., NIF B27612159, registered 7 May 2026.</p>
        </div>
      </>
    ),
  },
  {
    title: "2. Personal Data We Collect",
    content: (
      <>
        <p>
          We only collect data you provide voluntarily. Bookings and service requests submitted through the website
          may be transmitted to SolidMaint’s own booking platform. The privacy notice for our customer and crew apps is
          available at <a href="https://api.solidmaint.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">api.solidmaint.com</a>.
        </p>
        <h3>Subscribers</h3>
        <ul><li>Full name, email address and phone number</li><li>Postal code and region</li><li>Services you are interested in</li><li>Sign-up timestamp</li></ul>
        <h3>Contact forms and care-plan requests</h3>
        <ul><li>Full name, email address and optional phone number</li><li>Property location, region, type and selected services</li><li>Message content and submission timestamp</li></ul>
        <h3>Admin and authenticated accounts</h3>
        <ul><li>Email address and encrypted password</li><li>Assigned role</li><li>Login timestamps and session metadata</li></ul>
        <h3>Technical and security data</h3>
        <ul><li>IP address, browser type and version</li><li>Pages visited and timestamps</li><li>Bot-protection challenge results</li></ul>
        <h3>Job applicants</h3>
        <ul><li>Name and contact details</li><li>Cover letter, motivation, LinkedIn or portfolio link</li><li>CV or résumé and submission timestamp</li></ul>
        <h3>Partner applications</h3>
        <ul><li>Company and contact name</li><li>Email address, phone number and website</li><li>Message content and submission timestamp</li></ul>
        <h3>Website usage data</h3>
        <ul><li>Pages viewed and the order in which they were viewed</li><li>Clicks, taps, scrolling and mouse movement</li><li>Session replays, with form entries masked</li><li>Device, browser, screen size and approximate location</li><li>A first-party analytics identifier stored in _cs_ cookies</li></ul>
        <p>
          We do not collect special categories of personal data and do not knowingly collect data from children under
          16. Please do not include special-category data in your CV, cover letter or messages.
        </p>
      </>
    ),
  },
  {
    title: "3. Why We Process Your Data",
    content: (
      <>
        <p>Under Article 6 of the GDPR, we rely on the following lawful bases:</p>
        <ul>
          <li><strong>Consent:</strong> service updates, product news, analytics and advertising measurement where you have opted in.</li>
          <li><strong>Pre-contractual measures:</strong> answering enquiries, assessing applications, preparing quotes and handling booking or service requests.</li>
          <li><strong>Legitimate interests:</strong> operating the business safely, managing authorised accounts and protecting the site from abuse.</li>
          <li><strong>Legal obligations:</strong> accounting, tax records and responding to lawful requests from authorities.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Retention Periods",
    content: (
      <>
        <p>We keep personal data only as long as needed for each purpose, then delete or anonymise it.</p>
        <ul>
          <li>Subscriber data: until you unsubscribe or after 24 months of inactivity, whichever comes first.</li>
          <li>Contact-form messages: 24 months, followed by up to 12 months of archived retention for disputes.</li>
          <li>Server and security logs: 12 months.</li>
          <li>Admin account data: while the account is active and for 12 months after closure.</li>
          <li>Accounting and tax data: up to 10 years where required by Spanish law.</li>
          <li>Job applications: 180 days, unless you consent to us retaining them for future roles.</li>
          <li>Partner applications and service requests: up to 24 months after your last contact.</li>
          <li>Contentsquare usage data: while consent remains valid and no longer than its configured retention period; analytics cookies expire within 13 months.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Service Providers and Advertising Partners",
    content: (
      <>
        <p>
          We share data only with carefully selected organisations that help us operate our services. Processors act on
          our instructions under GDPR-compliant agreements. Where Meta determines its own advertising purposes, we act
          as joint controllers under Article 26 GDPR.
        </p>
        <ul>
          <li><strong>Lovable Cloud:</strong> backend, database and authentication hosting in the EU.</li>
          <li><strong>Resend Inc.:</strong> transactional and marketing email delivery in the United States.</li>
          <li><strong>Cloudflare Inc.:</strong> DNS, delivery, DDoS and bot protection through its global network.</li>
          <li><strong>Lovable.dev:</strong> website build and deployment tooling in the EU.</li>
          <li><strong>Meta Platforms Ireland Ltd.:</strong> advertising measurement through Meta Pixel and Conversions API, only after marketing consent.</li>
          <li><strong>Content Square SAS:</strong> analytics, heatmaps and session replay, only after analytics consent; data is stored in Ireland.</li>
        </ul>
        <p>We never sell your personal data or otherwise share it for cross-context behavioural advertising.</p>
      </>
    ),
  },
  {
    title: "6. International Data Transfers",
    content: (
      <>
        <p>
          Resend, Cloudflare and, if marketing cookies are accepted, Meta may process data in the United States.
          Contentsquare stores data in the EU, but personnel outside the EEA may access it for support.
        </p>
        <p>
          Transfers are protected using safeguards recognised under Chapter V GDPR, including European Commission
          Standard Contractual Clauses and, where applicable, the EU–US Data Privacy Framework, together with encryption
          in transit and at rest. Request details at <a href="mailto:privacy@solidmaint.com">privacy@solidmaint.com</a>.
        </p>
      </>
    ),
  },
  {
    title: "7. Your Rights",
    content: (
      <>
        <p>Under GDPR Articles 15–22 and Spanish law, you may have the right to:</p>
        <ul><li>access your personal data;</li><li>correct inaccurate or incomplete data;</li><li>request erasure or restriction;</li><li>receive portable data;</li><li>object to processing, including direct marketing;</li><li>withdraw consent at any time; and</li><li>not be subject to qualifying automated decisions or profiling.</li></ul>
        <p>
          Email <a href="mailto:privacy@solidmaint.com">privacy@solidmaint.com</a> to exercise a right. We may ask you
          to verify your identity and will normally respond within one month. You may complain to the Spanish Data
          Protection Agency at <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">aepd.es</a>.
        </p>
      </>
    ),
  },
  {
    title: "8. Security Measures",
    content: (
      <>
        <p>Our technical and organisational safeguards include:</p>
        <ul><li>encryption in transit and at rest;</li><li>strict access controls;</li><li>bot protection and rate limiting on public forms; and</li><li>regular security reviews and prompt dependency updates.</li></ul>
      </>
    ),
  },
  {
    title: "9. Cookies and Similar Technologies",
    content: (
      <p>
        By default, only strictly necessary local-storage entries are used for preferences and consent. Non-essential
        cookies load only if accepted. Analytics cookies enable Contentsquare; marketing cookies enable Meta Pixel.
        You may decline or withdraw consent at any time. Read the full <a href="https://www.solidmaint.com/cookie-policy" target="_blank" rel="noreferrer noopener">Cookie Policy</a>.
      </p>
    ),
  },
  {
    title: "10. Children’s Privacy",
    content: <p>Our services are not directed to children under 16. If you believe we have inadvertently collected a child’s data, contact us and we will delete it promptly.</p>,
  },
  {
    title: "11. Changes to This Policy",
    content: <p>We may update this Privacy Policy from time to time. The effective date above reflects the latest revision. Material changes may be communicated by email or through a website notice.</p>,
  },
  {
    title: "12. Contact",
    content: (
      <>
        <p>For privacy questions or to exercise your rights, email <a href="mailto:privacy@solidmaint.com">privacy@solidmaint.com</a>.</p>
        <p>We have not appointed a formal Data Protection Officer because we are not legally required to do so under Article 37 GDPR. This email address is the point of contact for all data-protection matters.</p>
      </>
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
              <a className="mt-3 flex items-center gap-2 hover:text-coral" href="mailto:privacy@solidmaint.com">
                <Mail className="size-4" aria-hidden="true" /> privacy@solidmaint.com
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