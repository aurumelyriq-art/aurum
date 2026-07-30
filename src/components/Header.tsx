"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GateMark from "./GateMark";
import styles from "./Header.module.css";

type NavKey = "home" | "vision" | "destinations" | "investors" | "locations";

const NAV_ITEMS: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "vision", label: "Vision", href: "/vision" },
  { key: "destinations", label: "Destinations", href: "/destinations" },
  { key: "investors", label: "Investors", href: "/investors" },
  { key: "locations", label: "Locations", href: "/locations/ara-farm-resort" },
];

export default function Header({
  variant = "default",
  active,
  ctaHref = "/#contact",
  ctaLabel = "Start a Conversation",
}: {
  variant?: "animated" | "default" | "sticky";
  active?: NavKey;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const [shown, setShown] = useState(variant !== "animated");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (variant !== "animated") return;
    const raf = requestAnimationFrame(() => setShown(true));
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [variant]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const headerClass = [
    styles.header,
    variant === "animated" ? styles.animated : "",
    variant === "sticky" ? styles.sticky : "",
    variant === "animated" && shown ? styles.shown : "",
    variant === "animated" && scrolled ? styles.scrolled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
        <GateMark size={22} />
        AURUM&nbsp;ELYRIQ
      </Link>
      <nav className={styles.links}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={item.key === active ? styles.active : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href={ctaHref} className={`btn btnGoldOutline btnSm ${styles.ctaDesktop}`}>
        {ctaLabel}
      </Link>

      <button
        type="button"
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerLinks}>
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.key}
              href={item.href}
              className={item.key === active ? styles.active : undefined}
              style={{ transitionDelay: menuOpen ? `${80 + i * 45}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ctaHref}
          className={`btn btnGoldFill ${styles.drawerCta}`}
          style={{ transitionDelay: menuOpen ? `${80 + NAV_ITEMS.length * 45}ms` : "0ms" }}
          onClick={() => setMenuOpen(false)}
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
