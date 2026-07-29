import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ variant = "simple" }: { variant?: "home" | "simple" }) {
  if (variant === "home") {
    return (
      <footer className={`${styles.footer} ${styles.footerHome}`}>
        <div className="wrap">
          <div className={styles.footTop}>
            <div>
              <div className={styles.footBrand}>AURUM&nbsp;ELYRIQ</div>
              <div className={styles.dividerMini} />
            </div>
            <div className={styles.footLinks}>
              <Link href="/#vision">Vision</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/#capabilities">Capabilities</Link>
              <Link href="/#contact">Partnerships</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/#contact">Careers</Link>
            </div>
          </div>
          <div className={styles.footBottom}>
            <span>© AURUM ELYRIQ 2026. Destinations for entertainment, leisure, and relaxation.</span>
            <span>Lagos · Abeokuta</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.simpleRow}`}>
        <div className={styles.brand}>AURUM&nbsp;ELYRIQ</div>
        <div className={styles.simpleLinks}>
          <Link href="/">Home</Link>
          <Link href="/vision">Vision</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/locations/ara-farm-resort">Locations</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div className={`wrap ${styles.copy}`}>
        © AURUM ELYRIQ 2026. Destinations for entertainment, leisure, and relaxation.
      </div>
    </footer>
  );
}
