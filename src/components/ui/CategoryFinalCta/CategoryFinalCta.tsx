import styles from "./CategoryFinalCta.module.css";
import Link from "next/link";
import { Phone, MoveRight } from "lucide-react";
type CategoryFinalCtaProps = {
  data: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};
export default function CategoryFinalCta({ data }: CategoryFinalCtaProps) {
  const {
    title,
    text,
    primaryLabel,
    primaryHref,
    secondaryHref,
    secondaryLabel,
  } = data;
  return (
    <section className={styles.containerCta}>
      <div className={styles.ctaHeader}>
        <h2 className={styles.titleCta}>{title}</h2>
        <p className={styles.textCta}>{text}</p>
      </div>
      <div className={styles.ctaContent}>
        <Link href={primaryHref} className={styles.firstCta}>
          {primaryLabel} <MoveRight />
        </Link>
        <a href={secondaryHref} className={styles.secondCta}>
          <Phone /> {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
