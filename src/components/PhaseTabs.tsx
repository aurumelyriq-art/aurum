"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PhaseTabs.module.css";

export type Phase = {
  key: string;
  letter: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  cta?: { label: string; href: string };
};

export default function PhaseTabs({ phases }: { phases: Phase[] }) {
  const [activeKey, setActiveKey] = useState(phases[0]?.key);
  const active = phases.find((p) => p.key === activeKey) ?? phases[0];

  return (
    <div>
      <div className={styles.tabs} role="tablist">
        {phases.map((phase) => (
          <button
            key={phase.key}
            role="tab"
            aria-selected={phase.key === active.key}
            className={`${styles.tab} ${phase.key === active.key ? styles.active : ""}`}
            onClick={() => setActiveKey(phase.key)}
          >
            <span className={styles.letter}>{phase.letter}</span>
            <span className={styles.label}>{phase.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.panel}>
        <div className={styles.visual}>
          {active.image ? (
            <Image
              src={active.image}
              alt={active.title}
              fill
              className={styles.visualImage}
              sizes="(max-width: 880px) 100vw, 50vw"
            />
          ) : (
            <svg viewBox="0 0 100 100" fill="none">
              <path
                d="M50 8 C56 8 56 18 50 22 C44 26 44 34 50 38 L74 62 C80 68 68 80 62 74 L50 62 L38 74 C32 80 20 68 26 62 L50 38 C56 34 56 26 50 22 C44 18 44 8 50 8 Z"
                stroke="#d9b45c"
                strokeWidth="2"
              />
            </svg>
          )}
          <span className={styles.caption}>{active.image ? "Concept render" : "Visual coming soon"}</span>
        </div>
        <div className={styles.copy}>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          {active.cta && (
            <Link href={active.cta.href} className="btn btnGoldOutline">
              {active.cta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
