import styles from "./CategoryCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
type CategoryCardProps = {
  category: {
    id: string;
    title: string;
    image: string;
    alt: string;
    slug: string;
  };
};
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.slug} className={styles.card}>
      <Image
        src={category.image}
        alt={category.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 33vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.contentCard}>
        <h3 className={styles.title}>{category.title}</h3>
        <span className={styles.ctaCard}>
          Scopri di più <MoveRight />
        </span>
      </div>
    </Link>
  );
}
