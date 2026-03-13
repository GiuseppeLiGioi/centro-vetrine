import styles from "./CategoryHero.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type CategoryHeroProps = {
  data: {
    title: string;
    text: string;
    src: string;
    alt: string;
    ctaHref: string;
    ctaLabel: string;
  };
};

export default function CategoryHero({ data }: CategoryHeroProps) {
  const { title, text, src, alt, ctaHref, ctaLabel } = data;

  return (
    <div className={styles.hero}>
      <Image src={src} alt={alt} fill className={styles.categoryImage} />
      <div className={styles.overlay} />

      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span className={styles.separator}>&gt;</span>
        <span className={styles.current}>{title}</span>
      </div>

      <div className={styles.content}>
        <h1 className={styles.categoryTitle}>{title}</h1>
        <p className={styles.categoryText}>{text}</p>
        <Link href={ctaHref} className={styles.cta}>
          {ctaLabel}
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
