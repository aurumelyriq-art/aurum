import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { conceptImage } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "AURUM ELYRIQ sources capital globally to finance destinations that are financed, built, and operated under a single disciplined structure.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header active="investors" ctaHref="#contact" ctaLabel="Talk to Us" />

      <section className={styles.hero}>
        <Image
          src={conceptImage("home-hero")}
          alt="Aerial twilight view of an AURUM ELYRIQ resort destination"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <span className={styles.conceptBadge}>Concept render</span>
        <div className={`wrap ${styles.heroInner}`}>
          <div className="eyebrow">Investors</div>
          <div className={styles.heroHeading}>
            BUILDING
            <br />
            <span className="gold">LONG-TERM</span>
            <br />
            VALUE.
          </div>
          <p className="bodyTxt" style={{ marginTop: 22 }}>
            AURUM ELYRIQ sources capital globally to finance destinations that are financed, built,
            and operated under a single disciplined structure — not to sell a projection, but to
            build a track record.
          </p>
        </div>
      </section>

      <Reveal as="section" className="block">
        <div className={`wrap ${styles.twoCol}`}>
          <div>
            <div className="eyebrow">Investment Philosophy</div>
          </div>
          <div>
            <p className="bodyTxt">
              We raise loans and investment to fund the development phase of each destination,
              then repay financiers from operating proceeds before profit-sharing with our
              landowner or government partner. Capital is matched to a specific site and a
              specific concession — not pooled into a blind fund.
            </p>
            <p className="bodyTxt" style={{ marginTop: 20 }}>
              We are early. Our first concession, ARA Farm &amp; Resort, is still in master
              planning. We&apos;d rather be direct about that stage than overstate it — what
              follows is the structure we&apos;re building toward, not a completed track record.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">Why AURUM ELYRIQ</div>
          <div className={styles.numList}>
            <div className={styles.numItem}>
              <div>
                <h3>Scope Discipline</h3>
                <p>
                  We control the attractions and entertainment business only — not agriculture,
                  not hospitality operations we haven&apos;t been asked to run. Narrow scope,
                  clearer risk.
                </p>
              </div>
            </div>
            <div className={styles.numItem}>
              <div>
                <h3>Land Secured Before Capital Deployed</h3>
                <p>
                  Every project begins with a concession or partnership that secures land access
                  first — a lesson carried directly from an earlier project that failed for lack
                  of it.
                </p>
              </div>
            </div>
            <div className={styles.numItem}>
              <div>
                <h3>Exit-Governed Concessions</h3>
                <p>
                  Our agreements are structured around exit and renegotiation clauses rather than
                  rigid fixed terms, protecting capital as circumstances change.
                </p>
              </div>
            </div>
            <div className={styles.numItem}>
              <div>
                <h3>Three Independent Tracks</h3>
                <p>
                  Government PPP, private concession, and wholly-owned development each diversify
                  where and how capital is deployed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block sectionLight">
        <div className="wrap">
          <div className="eyebrow">Governance &amp; Risk</div>
          <div className={`lineGrid ${styles.govGrid}`}>
            <div className={`lineCell ${styles.govCell}`}>
              <h4>Capital Structure</h4>
              <p>
                Development-phase financing is sourced as loans or direct investment, sized to the
                specific site and concession. Repayment to financiers is prioritized from
                operating proceeds ahead of profit-share distributions to landowner partners.
              </p>
            </div>
            <div className={`lineCell ${styles.govCell}`}>
              <h4>Risk Management</h4>
              <p>
                Land rights are confirmed before design work begins. Technical delivery is
                contracted to specialist partners with a track record in the relevant attraction
                type, reducing execution risk while our in-house capability is still being built.
              </p>
            </div>
            <div className={`lineCell ${styles.govCell}`}>
              <h4>Scope Boundaries</h4>
              <p>
                Agricultural and plantation operations remain with our landowner partners. Where
                five-star guest service is required, a dedicated hospitality operator is brought
                in — we do not stretch into operations outside our discipline.
              </p>
            </div>
            <div className={`lineCell ${styles.govCell}`}>
              <h4>Reporting</h4>
              <p>
                As projects move from master planning into construction and operation, we intend
                to share site progress and structural terms directly with financing partners —
                formal reporting cadence to be defined per agreement.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">Investment FAQ</div>
          <div style={{ marginTop: 20 }}>
            <div className={styles.faqItem}>
              <h4>What stage is AURUM ELYRIQ at?</h4>
              <p>
                Early. Our first concession, ARA Farm &amp; Resort in Abeokuta, Nigeria, is in the
                master planning and financing stage, structured as a profit-share partnership with
                landowner LORALAND.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>How does capital get repaid?</h4>
              <p>
                From operating proceeds once a destination is open — financiers are repaid first,
                then profit is shared with the landowner or government partner per the concession
                terms.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>What happens if a concession ends?</h4>
              <p>
                Our agreements use exit and renegotiation clauses rather than fixed terms, giving
                both financiers and land partners a defined path if circumstances change.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>Who builds and operates the destinations?</h4>
              <p>
                Today, vetted technical partners handle construction under our design and project
                leadership. Operations are run by AURUM ELYRIQ directly, with a dedicated
                hospitality operator brought in where five-star guest service is required.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <section className={styles.contactBand} id="contact">
        <div className="wrap">
          <div className="eyebrow eyebrowCenter">Investor Contact</div>
          <div className="large" style={{ marginTop: 22 }}>
            If you&apos;re evaluating capital deployment into destination development, we&apos;d
            rather have a direct conversation than send a deck.
          </div>
          <div style={{ marginTop: 40 }}>
            <ContactForm type="investor" submitLabel="Contact the Investment Team" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
