"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollIndex.module.css";

export default function ScrollIndex() {
  const [shown, setShown] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setShown(window.scrollY > 60);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setPct(docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.scrollIndex} ${shown ? styles.shown : ""}`}>
      <span className={`${styles.n} ${styles.active}`}>01</span>
      <div className={styles.track}>
        <div className={styles.fill} style={{ height: `${pct}%` }} />
      </div>
      <span className={styles.n}>08</span>
    </div>
  );
}
