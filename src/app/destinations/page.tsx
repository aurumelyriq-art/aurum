import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StoryCard from "@/components/StoryCard";
import { getDestination, DESTINATION_STATUS_LABEL } from "@/lib/supabase";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "One concession underway. A pipeline built for the next three, across government, private, and our own ground.",
};

export default async function DestinationsPage() {
  const flagship = await getDestination("ara-farm-resort");

  return (
    <>
      <Header active="destinations" />

      <section className={`wrap ${styles.pHero}`}>
        <div className="eyebrow">Destinations</div>
        <div className="huge" style={{ marginTop: 22 }}>
          GROUND WE&apos;VE
          <br />
          <span className="gold italicGold">BEGUN TO SHAPE.</span>
        </div>
        <p className="bodyTxt" style={{ marginTop: 26 }}>
          One concession underway. A pipeline built for the next three, across government,
          private, and our own ground.
        </p>
      </section>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className={styles.flagshipRow}>
            <div>
              {flagship && (
                <div className={styles.status}>
                  <span className={styles.dot} /> {DESTINATION_STATUS_LABEL[flagship.status]}
                  {flagship.location ? ` · ${flagship.location}` : ""}
                </div>
              )}
              <div className="large">
                ARA Farm
                <br />
                &amp; <span className="gold italicGold">Resort</span>
              </div>
              <p className="bodyTxt" style={{ marginTop: 22 }}>
                {flagship?.summary ??
                  "A working cocoa, oil palm, and plantain plantation, becoming a destination in partnership with LORALAND."}
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href={`/locations/${flagship?.slug ?? "ara-farm-resort"}`} className="btn btnGoldFill">
                  View This Destination
                </Link>
              </div>
            </div>
            <div className={styles.flagshipVisual}>
              <svg viewBox="0 0 500 460" fill="none">
                <defs>
                  <linearGradient id="dGold" x1="0" y1="0" x2="500" y2="460">
                    <stop offset="0%" stopColor="#f4dd9a" />
                    <stop offset="45%" stopColor="#d9b45c" />
                    <stop offset="100%" stopColor="#8a6a2a" />
                  </linearGradient>
                </defs>
                <path
                  d="M250 30 C266 30 266 58 250 68 C234 78 234 100 250 110 L370 210 C392 228 358 264 340 246 L250 172 L160 246 C142 264 108 228 130 210 L250 110 C266 100 266 78 250 68 C234 58 234 30 250 30 Z"
                  stroke="url(#dGold)"
                  strokeWidth="2.4"
                  fill="none"
                />
                <path
                  d="M250 148 L318 210 L250 272 L182 210 Z"
                  stroke="url(#dGold)"
                  strokeWidth="1.8"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow">The Pipeline</div>
          <div className="large" style={{ marginTop: 22 }}>
            What comes after
            <br />
            the first gate
          </div>
          <div className={`lineGrid ${styles.pipeline}`}>
            <div className={`lineCell ${styles.pipeCell}`}>
              <span className={styles.statusSm}>Active</span>
              <h3>ARA Farm &amp; Resort</h3>
              <p>Private concession with LORALAND. Site data received; master plan and financing in progress.</p>
            </div>
            <div className={`lineCell ${styles.pipeCell}`}>
              <span className={styles.statusSm}>Open</span>
              <h3>Government PPP</h3>
              <p>A public-private partnership on state-held land — structure defined, site not yet identified.</p>
            </div>
            <div className={`lineCell ${styles.pipeCell}`}>
              <span className={styles.statusSm}>Future</span>
              <h3>Wholly-Owned Destination</h3>
              <p>The fullest expression of the brand, built entirely on AURUM ELYRIQ&apos;s own terms and capital.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap">
          <div className="eyebrow eyebrowCenter">Destination Categories</div>
          <div className="large" style={{ textAlign: "center", marginTop: 22 }}>
            What we build, wherever we build it
          </div>
        </div>
        <div className="wrap">
          <div className={styles.catGrid}>
            <StoryCard
              title="Theme & Adventure Parks"
              description="Full-scale destinations built around a signature attraction."
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 6c6 8-2 12 0 18M20 6c-6 8 2 12 0 18M8 30h24" />
                  <circle cx="20" cy="24" r="3" />
                </svg>
              }
            />
            <StoryCard
              title="Water Parks & Splash Zones"
              description="Scaled water experiences, from splash zones to full parks."
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M6 26c3-4 6 4 9 0s6 4 9 0 6 4 9 0M12 10c4 6-2 10 4 16" />
                </svg>
              }
            />
            <StoryCard
              title="Family Entertainment"
              description="Indoor and outdoor centers built for repeat visits."
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M8 32V16l12-8 12 8v16" />
                  <path d="M16 32V22h8v10" />
                </svg>
              }
            />
            <StoryCard
              title="Canopy Glamping & Eco-Retreats"
              description="Elevated stays set into the landscape they overlook."
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 8l10 10-10 10-10-10z" />
                  <path d="M20 4v4M20 32v4" />
                </svg>
              }
            />
            <StoryCard
              title="Farm & Agritourism"
              description="Working land turned into the destination itself."
              href="/locations/ara-farm-resort"
              linkLabel="View ARA Farm & Resort"
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 6c-8 4-8 12-8 12s0 8 8 12c8-4 8-12 8-12s0-8-8-12z" />
                </svg>
              }
            />
            <StoryCard
              title="Festivals & Events"
              description="Recurring gatherings that anchor a destination's calendar."
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 4l3.6 8 8.8.9-6.6 6 1.8 8.6L20 23.5l-7.6 4L14.2 19l-6.6-6 8.8-.9z" />
                </svg>
              }
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="block">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow eyebrowCenter">Where We Build</div>
          <div className="large" style={{ marginTop: 22 }}>
            Rooted in Nigeria.
            <br />
            Built for <span className="gold italicGold">wherever ground calls.</span>
          </div>
          <div className={styles.mapWrap}>
            <svg viewBox="0 0 400 420" fill="none">
              <path
                d="M120 40 L220 30 L280 70 L300 130 L340 160 L330 220 L300 260 L310 320 L260 380 L200 400 L150 370 L110 320 L90 250 L60 200 L70 140 L60 90 Z"
                stroke="#8a6a2a"
                strokeWidth="1.2"
                opacity="0.55"
              />
              <circle cx="150" cy="150" r="5" fill="#d9b45c" />
              <text x="162" y="154" fill="#f4ede0" fontSize="12" fontFamily="var(--font-jost), sans-serif" opacity="0.85">
                Abeokuta, Nigeria
              </text>
            </svg>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
