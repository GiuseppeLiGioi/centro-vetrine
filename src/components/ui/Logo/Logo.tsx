import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={`${styles.logo} ${className ?? ""}`}
      aria-label="Centro Vetrine"
    >
      <span className={styles.line}>CENTRO</span>
      <span className={styles.line}>VETRINE</span>
    </div>
  );
}
