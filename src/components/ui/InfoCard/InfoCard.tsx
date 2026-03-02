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
  return (
    <article className={styles.container}>
      <div
        className={`${styles.topWrapper} ${
          variant === "faq" ? styles.faq : ""
        }`}
      >
        <IconComponent aria-hidden="true" />
        <h3 className={styles.titleCard}>{title}</h3>
      </div>
      <p className={styles.textCard}>{text}</p>
    </article>
  );
}
