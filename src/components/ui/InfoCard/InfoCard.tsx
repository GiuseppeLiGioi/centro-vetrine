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
  variant = "default",
}: InfoCardProps) {
  const IconComponent = icon;
  const cardVariantClass = variant !== "default" ? styles[variant] : "";

  return (
    <article className={`${styles.container} ${cardVariantClass}`}>
      <div className={styles.topWrapper}>
        <IconComponent aria-hidden="true" />
        <h3 className={styles.titleCard}>{title}</h3>
      </div>
      <p className={styles.textCard}>{text}</p>
    </article>
  );
}
