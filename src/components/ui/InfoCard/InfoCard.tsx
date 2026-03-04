import { LucideIcon } from "lucide-react";
import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  variant?: "default" | "faq" | "history";
};
export default function InfoCard({
  title,
  text,
  icon,
  variant,
}: InfoCardProps) {
  const IconComponent = icon;
  const cardVariantClass =
    variant && variant !== "default" ? styles[variant] : "";
  const topVariantClass = variant === "faq" ? styles.faq : "";
  return (
    <article className={` ${styles.container} ${cardVariantClass} `}>
      <div className={`${styles.topWrapper} ${topVariantClass}`}>
        <IconComponent aria-hidden="true" />
        <h3 className={styles.titleCard}>{title}</h3>
      </div>
      <p className={styles.textCard}>{text}</p>
    </article>
  );
}
