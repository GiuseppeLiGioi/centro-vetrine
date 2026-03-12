import styles from "./CardGallery.module.css";
import Image from "next/image";
type CardGalleryProps = {
  src: string;
  alt: string;
};
export default function CardGallery({ src, alt }: CardGalleryProps) {
  return (
    <div className={styles.cardGallery}>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={320}
        height={240}
      />
    </div>
  );
}
