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
          {open &&
            items.map((item) => {
              if (item.href) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={styles.menuItem}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.children && item.children.length > 0) {
                return (
                  <div key={item.id} className={styles.menuGroup}>
                    <button className={styles.menuButton}>{item.label}</button>

                    <div className={styles.subMenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href!}
                          onClick={onClose}
                          className={styles.subMenuItem}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })}
        </div>
      </div>
    </div>
  );
}
