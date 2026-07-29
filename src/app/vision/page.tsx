import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { conceptImage } from "@/lib/images";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "The ground writes the brief, we don't. AURUM ELYRIQ's vision for building institutional agritourism destinations from the land up.",
};

export default function VisionPage() {
  return (
    <>
      <Header active="vision" />

      <section className={styles.hero}>
        <Image
          src={conceptImage("category-farm-agritourism")}
          alt="Working cocoa and oil palm plantation rows at golden hour"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <span className={styles.conceptBadge}>Concept render</span>
        <div className={`wrap ${styles.heroInner}`}>
          <div className="eyebrow eyebrowCenter">Vision</div>
          <div className={styles.heroHeading}>
            THE FUTURE
            <br />
            DESERVES <span className="gold">BETTER</span>
            <br />
            DESTINATIONS.
          </div>
        </div>
      </section>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">The Problem</div>
          <div className="large" style={{ marginTop: 22, maxWidth: 800 }}>
            Most leisure destinations are built <span className="gold italicGold">on</span>{" "}
            the land they occupy — not <span className="gold italicGold">from</span>{" "}it.
          </div>
          <p className="bodyTxt" style={{ marginTop: 26, maxWidth: 700 }}>
            A farm becomes scenery for a hotel. A plantation becomes a backdrop for a photo. The
            thing that made the ground worth visiting in the first place is treated as decoration,
            while the actual experience is imported from somewhere else entirely. Guests can feel
            the difference, even when they can&apos;t name it.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">The Opportunity</div>
          <div className="large" style={{ marginTop: 22, maxWidth: 800 }}>
            Nigeria&apos;s agritourism movement is already underway.
            <br />
            It hasn&apos;t yet met an <span className="gold italicGold">institutional</span>{" "}builder.
          </div>
          <p className="bodyTxt" style={{ marginTop: 26, maxWidth: 700 }}>
            Farm resorts are drawing city dwellers away from malls and beaches, and government
            tourism policy has started naming agritourism as a priority for rural development. But
            the destinations built so far are owned, farmed, staffed, and operated by a single hand
            — capable, but stretched thin. There is no dedicated partner bringing capital, design
            discipline, and operating standards to landowners who want to build something larger
            than they could alone.
          </p>
          <div className={`lineGrid ${styles.statRow}`}>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>3</div>
              <div className={styles.l}>Client Tracks — Government, Private, Own</div>
            </div>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>1</div>
              <div className={styles.l}>Active Concession — LORALAND / ARA Farm</div>
            </div>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>Global</div>
              <div className={styles.l}>Capital Sourcing — Loans &amp; Investment</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.editorialBreak}>
        <div className={styles.editorialImage}>
          <Image
            src={conceptImage("vision-editorial")}
            alt="Abstract sketch-to-render transition of a resort masterplan in gold linework"
            fill
            className={styles.editorialImageEl}
            sizes="100vw"
          />
          <span className={styles.captionSm}>Concept render</span>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">Our Philosophy</div>
          <div className="large" style={{ marginTop: 22, maxWidth: 800 }}>
            The <span className="gold italicGold">ground</span>{" "}writes the brief. We don&apos;t.
          </div>
          <p className="bodyTxt" style={{ marginTop: 26, maxWidth: 700 }}>
            Every AURUM ELYRIQ destination starts by asking what the land already does well — a
            plantation, a waterfront, a view — and building the guest experience around that,
            rather than importing a concept and hoping the site can carry it. The brand is felt
            from the entrance gate, not just inside individual attractions, because a destination
            is one continuous story or it isn&apos;t a destination at all.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">Our Principles</div>
          <div className="large" style={{ marginTop: 22 }}>
            Four rules we don&apos;t break
          </div>
          <div className={`lineGrid ${styles.principles}`}>
            <div className={`lineCell ${styles.principle}`}>
              <span className={styles.n}>I.</span>
              <h3>Scope Discipline</h3>
              <p>
                We control the attractions and entertainment business specifically. Farm,
                plantation, and agricultural operations stay with our partners — clear boundaries
                make for durable deals.
              </p>
            </div>
            <div className={`lineCell ${styles.principle}`}>
              <span className={styles.n}>II.</span>
              <h3>Capital-First</h3>
              <p>
                We source financing globally and lead the concept, while construction is delegated
                to technical partners — until our own in-house team can carry it end to end.
              </p>
            </div>
            <div className={`lineCell ${styles.principle}`}>
              <span className={styles.n}>III.</span>
              <h3>Exit Over Fixed Terms</h3>
              <p>
                Our concessions are governed by exit and renegotiation clauses rather than a fixed
                number of years — flexibility that protects both sides as a destination matures.
              </p>
            </div>
            <div className={`lineCell ${styles.principle}`}>
              <span className={styles.n}>IV.</span>
              <h3>Brand-Led Design</h3>
              <p>
                Guest experience flows outward from the brand, starting at the entrance gate and
                reaching every touchpoint — never confined to a single attraction zone.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">Looking Forward</div>
          <div className="large" style={{ marginTop: 22, maxWidth: 800 }}>
            We&apos;re building the template
            <br />
            with ARA Farm &amp; Resort
            <br />
            so the <span className="gold italicGold">next</span>{" "}ground doesn&apos;t start
            from zero.
          </div>
          <p className="bodyTxt" style={{ marginTop: 26, maxWidth: 700 }}>
            Every principle above is being tested, not assumed, on our first concession. What we
            learn there — the deal structure, the design language, the operating model — becomes
            the foundation for the next landowner, the next government partnership, and the
            destinations we&apos;ll eventually build entirely on our own.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.quoteBlock}>
        <div className="wrap">
          <div className="large">
            &quot;Every destination begins at the gate — and every gate begins with someone
            willing to ask what the ground could become.&quot;
          </div>
          <div className={styles.attr}>— AURUM ELYRIQ</div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
