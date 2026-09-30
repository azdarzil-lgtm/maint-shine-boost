import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/cookie-policy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Cookie Policy | SolidMaint" },
      {
        name: "description",
        content:
          "Which cookies and similar technologies SolidMaint uses on the Costa del Sol property care website, and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy | SolidMaint" },
      {
        property: "og:description",
        content: "The cookies and local-storage entries SolidMaint uses, and how to change your preferences at any time.",
      },
      { property: "og:url", content: "https://maint-shine-boost.lovable.app/cookie-policy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://maint-shine-boost.lovable.app/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="bg-deep pb-16 pt-36 text-sunlit md:pb-24 md:pt-48">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <p className="section-label text-coral">Legal</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Cookie Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sunlit/75">
            Only the essentials by default. Nothing extra loads until you say so.
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
              <p className="font-bold text-deep">Questions about cookies?</p>
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
                This policy explains which cookies and similar technologies this website uses, why we use them and how
                you can change your mind at any time.
              </p>
            </div>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">1. Cookies and Similar Technologies</h2>
              <div className="policy-body mt-4">
                <p>
                  Cookies are small text files that a website places on your device. Websites also use similar
                  technologies — such as your browser's local storage — for the same purposes: remembering your
                  preferences, keeping you signed in, or measuring how the site is used. In this policy, "cookies"
                  refers to cookies and these similar technologies together. On this site we set no cookies at all
                  unless you choose to accept them; by default, and if you decline, the only things stored are the
                  strictly necessary local-storage entries listed below.
                </p>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">2. Categories of Cookies We Use</h2>
              <div className="policy-body mt-4">
                <p>
                  We group these technologies into three categories: strictly necessary, analytics, and marketing. You
                  can accept all, reject the non-essential ones, or choose per category at any time in the consent
                  banner or via the preferences link at the top of this page. Non-essential cookies are off by default
                  and load only with your consent. The strictly necessary category uses only your browser's local
                  storage — not cookies.
                </p>
                <ul>
                  <li>
                    <strong>Strictly necessary:</strong> Required for core functionality — remembering your language
                    choice and your consent decision. These are stored in your browser's local storage, not in cookies,
                    and cannot be switched off.
                  </li>
                  <li>
                    <strong>Analytics:</strong> Used to understand how the site is actually used. If you accept this
                    category we load Contentsquare, which measures where visitors click, scroll and hesitate and can
                    replay how a page was used. It sets the first-party _cs_ cookies listed below. Anything you type
                    into a form is masked in your browser before it is sent, so we do not collect it. Off by default;
                    active only with your consent.
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> used to measure the performance of our advertising. If you
                    accept this category we load the Meta Pixel (Meta Platforms), which sets the _fbp and _fbc cookies.
                    Off by default; active only with your consent.
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">3. What We Store on Your Device</h2>
              <div className="policy-body mt-4">
                <p>Here is everything that can end up on your device, and for how long:</p>
                <div className="overflow-x-auto rounded-2xl border border-deep/15">
                  <table className="w-full min-w-[36rem] text-left text-sm">
                    <thead>
                      <tr className="bg-deep/5 text-deep">
                        <th className="px-4 py-3 font-semibold">Name</th>
                        <th className="px-4 py-3 font-semibold">Purpose</th>
                        <th className="px-4 py-3 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-deep/10">
                      <tr>
                        <td className="px-4 py-3 font-medium">solidmaint-lang (local storage)</td>
                        <td className="px-4 py-3">Stores your selected interface language</td>
                        <td className="px-4 py-3">Until you clear it</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">solidmaint-consent-v1 (local storage)</td>
                        <td className="px-4 py-3">Records your consent choice</td>
                        <td className="px-4 py-3">Until you clear it</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">_cs_id, _cs_s, _cs_s_ctx, _cs_c (Contentsquare)</td>
                        <td className="px-4 py-3">
                          Recognises your session and device so page use can be measured. Set only if you accept
                          analytics cookies.
                        </td>
                        <td className="px-4 py-3">30 minutes to 13 months</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">solidmaint-ab-hero</td>
                        <td className="px-4 py-3">
                          Remembers which version of the homepage you were shown so it stays the same on your next
                          visit. Set only if you accept analytics cookies.
                        </td>
                        <td className="px-4 py-3">90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">4. Third-Party Cookies</h2>
              <div className="policy-body mt-4">
                <p>Depending on which categories you accept, the following third parties set cookies on your device:</p>
                <ul>
                  <li>
                    <strong>Contentsquare (analytics):</strong> loads only if you accept analytics cookies. Content
                    Square SAS (7 rue de Madrid, 75008 Paris, France) acts as our processor and stores the data in the
                    EU (Ireland); its staff and affiliates outside the EEA may access it, protected by the European
                    Commission's Standard Contractual Clauses. It sets the first-party _cs_ cookies listed above.{" "}
                    <a href="https://docs.contentsquare.com/en/web/cookies/" target="_blank" rel="noreferrer noopener">
                      docs.contentsquare.com
                    </a>
                  </li>
                  <li>
                    <strong>Meta (Meta Pixel):</strong> loads only if you accept marketing cookies. It sets _fbp (up to
                    90 days) and, when you arrive from a Meta ad, _fbc (up to 90 days) to measure and attribute our
                    advertising. Data may be processed by Meta in the United States.
                  </li>
                </ul>
                <p>
                  We do not use Google Analytics. Apart from Contentsquare (analytics) and the Meta Pixel (marketing) —
                  each loaded only if you accept the matching category — we use no advertising or analytics trackers,
                  and we set no cookies at all until you accept one. You can withdraw consent at any time via the
                  preferences link.
                </p>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">5. Managing Your Preferences</h2>
              <div className="policy-body mt-4">
                <p>You can control cookies in several ways:</p>
                <ul>
                  <li>Use our cookie banner to accept or decline non-essential cookies.</li>
                  <li>Adjust your browser settings to block or delete cookies.</li>
                  <li>Use private/incognito browsing mode.</li>
                  <li>Clear cookies regularly through your browser settings.</li>
                  <li>Use browser extensions designed to block trackers.</li>
                </ul>
                <p>Note: blocking essential cookies may prevent parts of the site from working correctly.</p>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">6. Browser-Specific Instructions</h2>
              <div className="policy-body mt-4">
                <p>Most browsers let you manage or delete cookies. See your browser's help pages for instructions:</p>
                <ul>
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer noopener">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">7. Updates to This Cookie Policy</h2>
              <div className="policy-body mt-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for
                  legal, operational or regulatory reasons. The "Last updated" date at the top of this page indicates
                  when it was last revised.
                </p>
              </div>
            </section>

            <section className="scroll-mt-32">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">8. Contact Us</h2>
              <div className="policy-body mt-4">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@solidmaint.com">privacy@solidmaint.com</a>
                </p>
                <p>
                  Read how we handle your personal information in our{" "}
                  <Link to="/privacy">Privacy Policy</Link>.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
