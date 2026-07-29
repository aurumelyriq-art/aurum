import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./StoryCard.module.css";

export default function StoryCard({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More",
  caption = "Visual coming soon",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  caption?: string;
}) {
  const content = (
    <>
      <div className={styles.visual}>
        {icon}
        <span className={styles.caption}>{caption}</span>
      </div>
      <div className={styles.body}>
        <h4>{title}</h4>
        <p>{description}</p>
        {href && <span className={styles.link}>{linkLabel} →</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.card}>
        {content}
      </Link>
    );
  }

  return <div className={styles.card}>{content}</div>;
}
