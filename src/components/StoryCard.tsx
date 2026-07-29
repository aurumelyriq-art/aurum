import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./StoryCard.module.css";

export default function StoryCard({
  icon,
  image,
  title,
  description,
  href,
  linkLabel = "Learn More",
  caption,
}: {
  icon: ReactNode;
  image?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  caption?: string;
}) {
  const content = (
    <>
      <div className={styles.visual}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className={styles.visualImage}
            sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
          />
        ) : (
          icon
        )}
        <span className={styles.caption}>{caption ?? (image ? "Concept render" : "Visual coming soon")}</span>
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
