import { LucideIcon } from "lucide-react";
import styles from "./InfoCardContact.module.css";

type InfoCardContactProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  variant?: "default" | "faq";
};
export default function InfoCardContact({
  title,
  text,
  icon,
  variant,
}: InfoCardContactProps) {
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
