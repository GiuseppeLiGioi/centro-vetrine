import styles from "./BrandCard.module.css";
import Image from "next/image";
import Link from "next/link";
type BrandCardProps = {
  name: string;
  logo: {
    src: string;
    alt: string;
  };
  href: string;
};
export default function BrandCard({ name, logo, href }: BrandCardProps) {
  return (
    <Link
      href={href}
      className={styles.brandCard}
      aria-label={`Vai al sito ${name}`}
    >
      <Image
        src={logo.src}
        className={styles.brandImg}
        alt={logo.alt}
        width={160}
        height={80}
      />
    </Link>
  );
}
