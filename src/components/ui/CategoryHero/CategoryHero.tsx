import styles from "./CategoryHero.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
type CategoryHeroProps = {
  title: string;
  text: string;
  src: string;
  alt: string;
};
export default function CategoryHero({
  title,
  text,
  src,
  alt,
}: CategoryHeroProps) {
  return (
    <div className={styles.hero}>
      <Image src={src} alt={alt} fill className={styles.categoryImage} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>&gt;</span>
          <span className={styles.current}>{title}</span>
        </div>
        <h1 className={styles.categoryTitle}>{title}</h1>
        <p className={styles.categoryText}>{text}</p>
        <Link href="/contatti" className={styles.cta}>
          Richiedi Informazioni <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
