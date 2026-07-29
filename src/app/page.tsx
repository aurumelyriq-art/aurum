import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollIndex from "@/components/ScrollIndex";
import ContactForm from "@/components/ContactForm";
import PhaseTabs from "@/components/PhaseTabs";
import StoryCard from "@/components/StoryCard";
import { getDestination, getJournalPosts, DESTINATION_STATUS_LABEL } from "@/lib/supabase";
import { conceptImage } from "@/lib/images";
import styles from "./page.module.css";

export default async function HomePage() {
  const [flagship, journalPosts] = await Promise.all([
    getDestination("ara-farm-resort"),
    getJournalPosts(3),
  ]);

  return (
    <>
      <Header variant="animated" ctaHref="#contact" ctaLabel="Start a Conversation" />
      <ScrollIndex />

      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src={conceptImage("home-hero")}
          alt="Aerial twilight view of an AURUM ELYRIQ resort destination, lagoon pool and lit pathways through palm canopy"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <span className={styles.conceptBadge}>Concept render</span>

        <div className={`wrap ${styles.heroInner}`}>
          <div className="eyebrow">Destination Development</div>
          <h1 className={styles.heroHeading}>
            Every destination
            <br />
            begins at the <span className="gold">gate</span>
          </h1>
          <p className={`bodyTxt ${styles.sub}`}>
            AURUM ELYRIQ conceives, finances, and operates entertainment, leisure, and relaxation
            destinations for governments, landowners, and our own portfolio — built so the
            experience begins the moment you arrive, not the moment you reach the ride.
          </p>
          <div className={styles.heroActions}>
            <Link href="#flagship" className="btn btnGoldFill">
              View Our Ventures
            </Link>
            <Link href="#contact" className="btn btnGoldOutline">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className={`${styles.pillarsSec} sectionLight`}>
        <div className={`wrap ${styles.pillars}`}>
          <div className={styles.pillar}>
            <span className={`${styles.mark} gold`}>I.</span>
            <h3>Source</h3>
            <p>
              We raise the capital — loans and investment, sourced globally — that gives every
              destination room to be built without compromise.
            </p>
          </div>
          <div className={styles.pillar}>
            <span className={`${styles.mark} gold`}>II.</span>
            <h3>Design</h3>
            <p>
              Concept, master plan, and brand identity, carried from the entrance gate through
              every attraction, so the story never breaks.
            </p>
          </div>
          <div className={styles.pillar}>
            <span className={`${styles.mark} gold`}>III.</span>
            <h3>Operate</h3>
            <p>
              We build and run what we design — in partnership with government, with landowners,
              or entirely our own — sharing in what it becomes.
            </p>
          </div>
        </div>
      </section>

      {/* MONUMENT */}
      <section className={styles.monument}>
        <Reveal className="wrap">
          <div className="huge">
            NOT EVERY
            <br />
            <span className={styles.dim}>GROUND</span>
            <br />
            BECOMES A <span className="gold italicGold">GATE.</span>
          </div>
        </Reveal>
      </section>

      {/* WHY WE EXIST */}
      <section className={styles.editorial} id="vision">
        <div className={`wrap ${styles.editorialGrid}`}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 22 }}>
              Why We Exist
            </div>
            <div className="large">
              Most land
              <br />
              is never asked
              <br />
              what it could
              <br />
              <span className="gold italicGold">become.</span>
            </div>
          </Reveal>
          <Reveal>
            <p className="bodyTxt">
              AURUM ELYRIQ conceives, finances, and operates destinations for entertainment,
              leisure, relaxation, playgrounds, and parks — for governments, for private
              landowners, and in our own right.
            </p>
            <p className="bodyTxt" style={{ marginTop: 20 }}>
              We bring the capital, the concept, and the operating discipline. Our partners bring
              the ground. Together, the two become a destination — not built beside the land, but
              built from it.
            </p>
            <div className={styles.sketch}>
              <svg viewBox="0 0 400 220" fill="none">
                <path
                  d="M40 200 L110 90 L140 140 L200 40 L260 140 L300 90 L370 200"
                  stroke="#8a6a2a"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle cx="200" cy="40" r="3" fill="#d9b45c" />
                <path d="M0 200 H400" stroke="#8a6a2a" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY DESTINATIONS MATTER */}
      <Reveal as="section" className={styles.opportunity}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow eyebrowCenter">The Opportunity</div>
          <div className="large" style={{ marginTop: 20 }}>
            Why destinations matter
          </div>
          <div className={`lineGrid ${styles.statRow}`}>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>$168B</div>
              <div className={styles.l}>
                Potential addition to Africa&apos;s economy from travel &amp; tourism over the
                next decade
              </div>
            </div>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>18M+</div>
              <div className={styles.l}>New jobs the sector could create across the continent</div>
            </div>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>6.5%</div>
              <div className={styles.l}>Annual growth needed to unlock that potential</div>
            </div>
            <div className={`lineCell ${styles.statCell}`}>
              <div className={styles.n}>25M</div>
              <div className={styles.l}>People already employed by travel &amp; tourism across Africa</div>
            </div>
          </div>
          <div className={styles.statSource}>
            Source: World Travel &amp; Tourism Council (WTTC), &quot;Unlocking Opportunities for
            Travel &amp; Tourism Growth in Africa&quot;
          </div>
        </div>
      </Reveal>

      {/* FLAGSHIP PREVIEW */}
      {flagship && (
      <section className={styles.flagship} id="flagship">
        <Reveal className="wrap">
          <div className="eyebrow eyebrowCenter">Our Flagship</div>
          <div className="large" style={{ marginTop: 20 }}>
            The first chapter
          </div>
          <div className={styles.flagshipCard}>
            <Image
              src={conceptImage("ara-farm-hero")}
              alt="Aerial concept render of ARA Farm & Resort, plantation rows leading to guest pavilions and a lagoon-style pool"
              fill
              className={styles.flagshipImage}
              sizes="100vw"
            />
            <div className={styles.flagshipScrim} />
            <span className={styles.conceptBadgeInline}>Concept render</span>
            <div className={styles.flagshipContent}>
              <span className={styles.tag}>
                {DESTINATION_STATUS_LABEL[flagship.status]}
                {flagship.location ? ` · ${flagship.location}` : ""}
              </span>
              <div className="huge" style={{ fontSize: "clamp(30px,5vw,58px)" }}>
                ARA FARM
                <br />
                &amp; <span className="gold">RESORT</span>
              </div>
              <p className="bodyTxt" style={{ marginLeft: "auto", marginRight: "auto" }}>
                {flagship.summary}
              </p>
              <div style={{ marginTop: 36 }}>
                <Link href={`/locations/${flagship.slug}`} className="btn btnGoldFill">
                  Explore {flagship.name}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      )}

      {/* CAPABILITIES */}
      <section className={`${styles.capabilities} sectionLight`} id="capabilities">
        <Reveal className="wrap">
          <div className="eyebrow eyebrowCenter">How We Build</div>
          <div className="large" style={{ textAlign: "center", marginTop: 20 }}>
            The <span className="gold italicGold">GATE</span>{" "}framework
          </div>
          <div style={{ marginTop: 48 }}>
            <PhaseTabs
              phases={[
                {
                  key: "ground",
                  letter: "G",
                  label: "Ground",
                  title: "Ground",
                  description:
                    "Site, land rights, and access — the reality a destination is built on. Every project begins with a concession or partnership that secures land access first.",
                  image: conceptImage("ara-farm-hero"),
                },
                {
                  key: "architecture",
                  letter: "A",
                  label: "Architecture",
                  title: "Architecture",
                  description:
                    "Master plan and brand, carried from the gate through every attraction, so the guest experience never breaks from one zone to the next.",
                  image: conceptImage("vision-editorial"),
                },
                {
                  key: "trust",
                  letter: "T",
                  label: "Trust",
                  title: "Trust",
                  description:
                    "Financing and partnership structure — who brings what, and how it's shared, governed by exit and renegotiation clauses rather than rigid fixed terms.",
                  image: conceptImage("harvest-table"),
                  cta: { label: "Read Our Investment Philosophy", href: "/investors" },
                },
                {
                  key: "experience",
                  letter: "E",
                  label: "Experience",
                  title: "Experience",
                  description:
                    "Build and operate, with the guest experience as the measure of it all — brought to life with a dedicated hospitality operator where five-star service is required.",
                  image: conceptImage("canopy-glamping"),
                },
              ]}
            />
          </div>
        </Reveal>
      </section>

      {/* DESTINATION GALLERY */}
      <section className={styles.gallerySec}>
        <Reveal className="wrap">
          <div className={styles.galleryHead}>
            <div>
              <div className="eyebrow">What We Build</div>
              <div className="large" style={{ marginTop: 20 }}>
                Destination types
              </div>
            </div>
            <Link href="#contact" className="btn btnGhost">
              Discuss a Site
            </Link>
          </div>
          <div className={styles.storyGrid}>
            <StoryCard
              title="Theme & Adventure Parks"
              description="Full-scale destinations built around a signature attraction."
              image={conceptImage("category-theme-park")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
                  <path d="M20 6c6 8-2 12 0 18M20 6c-6 8 2 12 0 18M8 30h24" />
                  <circle cx="20" cy="24" r="3" />
                </svg>
              }
            />
            <StoryCard
              title="Water Parks"
              description="Scaled water experiences, from splash zones to full parks."
              image={conceptImage("category-water-park")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
                  <path d="M6 26c3-4 6 4 9 0s6 4 9 0 6 4 9 0M12 10c4 6-2 10 4 16" />
                </svg>
              }
            />
            <StoryCard
              title="Family Entertainment"
              description="Indoor and outdoor centers built for repeat visits."
              image={conceptImage("category-family-entertainment")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
                  <path d="M8 32V16l12-8 12 8v16" />
                  <path d="M16 32V22h8v10" />
                </svg>
              }
            />
            <StoryCard
              title="Canopy Glamping"
              description="Elevated stays set into the landscape they overlook."
              image={conceptImage("canopy-glamping")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
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
              image={conceptImage("category-farm-agritourism")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
                  <path d="M20 6c-8 4-8 12-8 12s0 8 8 12c8-4 8-12 8-12s0-8-8-12z" />
                </svg>
              }
            />
            <StoryCard
              title="Festivals & Events"
              description="Recurring gatherings that anchor a destination's calendar."
              image={conceptImage("category-festival")}
              icon={
                <svg viewBox="0 0 40 40" fill="none" stroke="#d9b45c" strokeWidth="1.3">
                  <path d="M20 4l3.6 8 8.8.9-6.6 6 1.8 8.6L20 23.5l-7.6 4L14.2 19l-6.6-6 8.8-.9z" />
                </svg>
              }
            />
          </div>
        </Reveal>
      </section>

      {/* JOURNAL TEASER */}
      <Reveal as="section" className={styles.gallerySec}>
        <div className="wrap">
          <div className={styles.galleryHead}>
            <div>
              <div className="eyebrow">From the Journal</div>
              <div className="large" style={{ marginTop: 20 }}>
                Thinking, before building
              </div>
            </div>
          </div>
          <div className={`lineGrid ${styles.journalGrid}`}>
            {journalPosts.map((post) => (
              <div key={post.id} className={`lineCell ${styles.journalCard}`}>
                <span className={styles.tag}>{post.tag}</span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* INVITATION */}
      <section className={styles.invite} id="contact">
        <Reveal className="wrap">
          <div className="eyebrow eyebrowCenter">Let&apos;s Talk</div>
          <div className="huge" style={{ marginTop: 26 }}>
            THE NEXT
            <br />
            LANDMARK
            <br />
            <span className="gold italicGold">
              STARTS WITH
              <br />
              A CONVERSATION.
            </span>
          </div>
          <div style={{ marginTop: 44 }}>
            <ContactForm type="general" submitLabel="Start a Conversation" />
          </div>
          <div className={styles.inviteActions}>
            <Link href="/locations/ara-farm-resort" className="btn btnGoldOutline">
              View Locations
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer variant="home" />
    </>
  );
}
