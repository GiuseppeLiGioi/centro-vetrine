import styles from "./ShopCard.module.css";
import Image from "next/image";
type ShopCardProps = {
  shopName: string;
  city: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function ShopCard({ shopName, city, image }: ShopCardProps) {
  return (
    <div className={styles.shopCard}>
      <div className={styles.imageWrapper}>
        <Image src={image.src} className={styles.img} fill alt={image.alt} />
        <div className={styles.infoWork}>
          <h4 className={styles.titleShop}>{shopName}</h4>
          <p className={styles.cityShop}>{city}</p>
        </div>
      </div>
    </div>
  );
}
