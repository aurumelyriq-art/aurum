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
      <Link href="/" className={styles.brand}>
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
      <Link href={ctaHref} className="btn btnGoldOutline btnSm">
        {ctaLabel}
      </Link>
    </header>
  );
}
