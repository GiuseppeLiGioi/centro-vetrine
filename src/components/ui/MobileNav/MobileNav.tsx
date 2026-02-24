import styles from "./MobileNav.module.css";
import { NavigationItem } from "@/data/navigation";
import { X } from "lucide-react";
import Link from "next/link";
type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavigationItem[];
};
export default function MobileNav({ open, onClose, items }: MobileNavProps) {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.optionsNav}>
        <h4 className={styles.titleMenu}>CENTRO VETRINE</h4>
        <button className={styles.buttonClose} onClick={onClose}>
          <X />
        </button>
      </div>
      <div className={styles.containerInner}>
        <div className={styles.listItems}>
          {/*open &&
            items.map((item) => (
                
              <Link href={item.href   } onClick={onClose}>
                {item.label}
              </Link>
            ))*/}
        </div>
      </div>
    </div>
  );
}
