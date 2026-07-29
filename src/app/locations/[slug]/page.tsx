import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import PhaseTabs from "@/components/PhaseTabs";
import { getSupabaseClient, getDestination } from "@/lib/supabase";
import { conceptImage } from "@/lib/images";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const supabase = getSupabaseClient();
  const { data } = await supabase.from("destinations").select("slug");
  return (data ?? []).map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestination(slug);
  if (!destination) return {};
  return {
    title: `${destination.name}${destination.location ? ` — ${destination.location}` : ""}`,
    description: destination.summary ?? undefined,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = await getDestination(slug);
  if (!destination) notFound();

  return (
    <div className={styles.page}>
      <Header variant="sticky" active="locations" ctaHref="#contact" ctaLabel="Start a Conversation" />

      {/* BANNER */}
      <section className={styles.banner}>
        <Image
          src={conceptImage("ara-farm-hero")}
          alt={`Aerial concept render of ${destination.name}`}
          fill
          priority
          className={styles.bannerImage}
          sizes="100vw"
        />
        <div className={styles.bannerScrim} />
        <span className={styles.conceptBadge}>Concept render</span>
        <div className={styles.bannerInner}>
          <div className="eyebrow">Location — {destination.location}</div>
          <div className={styles.status}>
            <span className={styles.dot} /> In Development · Private Concession
          </div>
          <h1>
            {destination.name},
            <br />
            in partnership with <span className="gold">{destination.partner_name}</span>
          </h1>
          <p className={styles.sub}>{destination.summary}</p>
        </div>
      </section>

      {/* FACTS */}
      <section>
        <div className={`lineGrid ${styles.facts}`}>
          <div className={`lineCell ${styles.fact}`}>
            <div className={styles.n}>{destination.location}</div>
            <div className={styles.l}>Location</div>
          </div>
          <div className={`lineCell ${styles.fact}`}>
            <div className={`${styles.n} gold`}>{destination.partner_name}</div>
            <div className={styles.l}>Land &amp; Vision Partner</div>
          </div>
          <div className={`lineCell ${styles.fact}`}>
            <div className={styles.n}>Profit-Share</div>
            <div className={styles.l}>Concession Structure</div>
          </div>
          <div className={`lineCell ${styles.fact}`}>
            <div className={styles.n}>Open</div>
            <div className={styles.l}>Master Plan Scope</div>
          </div>
        </div>
      </section>

      {/* WHO / STRUCTURE */}
      <section className={styles.sectionPad}>
        <div className={`wrap ${styles.twoCol}`}>
          <div>
            <div className="eyebrow">The Partnership</div>
            <h2 className={styles.sectionTitle}>
              Land meets
              <br />
              attraction economy
            </h2>
          </div>
          <div>
            <p className={styles.lede}>
              <b>LORALAND</b> brings the land and the founding vision. <b>AURUM ELYRIQ</b>{" "}
              proposes, designs, and finances the attractions — developing, building, and
              operating them, repaying financiers from proceeds, then sharing profit with
              LORALAND.
            </p>
            <p className={styles.lede} style={{ marginTop: 18 }}>
              Our scope is strictly the attractions and entertainment business; farm and
              plantation operations remain with LORALAND&apos;s partners. Where guest service
              calls for five-star delivery, we bring in a dedicated hospitality operator to run it
              on AURUM ELYRIQ&apos;s facilities.
            </p>
            <p className={styles.lede} style={{ marginTop: 18 }}>
              The term is governed by an exit and renegotiation clause rather than a fixed number
              of years — built to hold as the destination grows.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE CONCEPT */}
      <section className={styles.sectionPad}>
        <div className="wrap">
          <div className={styles.expHead}>
            <div className="eyebrow eyebrowCenter">The Concept</div>
            <h2 className={styles.sectionTitle}>The farm is the destination</h2>
            <p className={styles.lede} style={{ margin: "0 auto" }}>
              Six experiences, woven from the plantation itself — not built beside it.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className={styles.expGrid}>
            <StoryCard
              title="Living Farm Trail"
              description="A guided walking route through cocoa, oil palm, and plantain, where the harvest itself is the storytelling."
              image={conceptImage("living-farm-trail")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 6c-8 4-8 12-8 12s0 8 8 12c8-4 8-12 8-12s0-8-8-12z" />
                </svg>
              }
            />
            <StoryCard
              title="Harvest Table"
              description="A nightly dining ritual built around what came off the farm that day."
              image={conceptImage("harvest-table")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <rect x="8" y="18" width="24" height="4" />
                  <path d="M12 22v8M28 22v8M14 10v6M20 10v6M26 10v6" />
                </svg>
              }
            />
            <StoryCard
              title="Waterfront Adventure"
              description="Activity along the water's edge, scaled to the site's natural features."
              image={conceptImage("waterfront-adventure")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M6 26c3-4 6 4 9 0s6 4 9 0 6 4 9 0M12 10c4 6-2 10 4 16" />
                </svg>
              }
            />
            <StoryCard
              title="Kids' Splash Zone"
              description="A fun-and-splash zone designed to scale into a full water park over time."
              image={conceptImage("kids-splash-zone")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M6 26c3-4 6 4 9 0s6 4 9 0 6 4 9 0M12 10c4 6-2 10 4 16" />
                  <circle cx="20" cy="12" r="2" />
                </svg>
              }
            />
            <StoryCard
              title="Canopy Glamping"
              description="Elevated stays set into the tree line, framing the plantation below."
              image={conceptImage("canopy-glamping")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 8l10 10-10 10-10-10z" />
                  <path d="M20 4v4M20 32v4" />
                </svg>
              }
            />
            <StoryCard
              title="Recurring Festival"
              description="An annual gathering that turns the harvest calendar into a destination event."
              image={conceptImage("festival-grounds")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.4">
                  <path d="M20 4l3.6 8 8.8.9-6.6 6 1.8 8.6L20 23.5l-7.6 4L14.2 19l-6.6-6 8.8-.9z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* HOW WE'RE BUILDING IT */}
      <section className={styles.sectionPad}>
        <div className="wrap">
          <div className="eyebrow eyebrowCenter">How We&apos;re Building It</div>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
            The <span className="gold">GATE</span>{" "}framework, applied
          </h2>
          <div style={{ marginTop: 40 }}>
            <PhaseTabs
              phases={[
                {
                  key: "ground",
                  letter: "G",
                  label: "Ground",
                  title: "Ground",
                  description:
                    "Site data requested from LORALAND — topography, access, plantation boundaries — now informing the master plan.",
                  image: conceptImage("living-farm-trail"),
                },
                {
                  key: "architecture",
                  letter: "A",
                  label: "Architecture",
                  title: "Architecture",
                  description:
                    "A brand identity felt from the entrance gate, extending through the farm trail to the Harvest Table.",
                  image: conceptImage("vision-editorial"),
                },
                {
                  key: "trust",
                  letter: "T",
                  label: "Trust",
                  title: "Trust",
                  description:
                    "Concession terms with LORALAND, financing sourced globally, and technical partners under evaluation for water park delivery.",
                  image: conceptImage("harvest-table"),
                },
                {
                  key: "experience",
                  letter: "E",
                  label: "Experience",
                  title: "Experience",
                  description:
                    "A five-star hospitality operator to be brought in, delivering guest service on AURUM ELYRIQ's built facilities.",
                  image: conceptImage("canopy-glamping"),
                },
              ]}
            />
          </div>
          <div className={styles.partners}>
            <span className={styles.partnerChip}>LORALAND — Land &amp; Vision</span>
            <span className={styles.partnerChip}>Crystal Waters — Water Park (Prospective)</span>
            <span className={styles.partnerChip}>ICM Corp — Water Park (Prospective)</span>
            <span className={styles.partnerChip}>WhiteWater — Water Park (Prospective)</span>
            <span className={styles.partnerChip}>Hospitality Operator — Sourcing</span>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} id="contact">
        <div className="wrap">
          <div className="eyebrow eyebrowCenter">Have Land in Mind?</div>
          <h2>
            Let&apos;s find out what
            <br />
            it could <span className="gold">become</span>.
          </h2>
          <div className={styles.heroActions}>
            <Link href="/#contact" className="btn btnGoldFill">
              Start a Conversation
            </Link>
            <Link href="/" className="btn btnGhost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
