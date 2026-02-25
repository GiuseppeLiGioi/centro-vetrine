"use client";

import styles from "./MobileNav.module.css";
import { NavigationItem } from "@/data/navigation";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavigationItem[];
};
export default function MobileNav({ open, onClose, items }: MobileNavProps) {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  const toggleGroupById = (id: string): void => {
    if (openGroupId !== id) {
      setOpenGroupId(id);
    } else {
      setOpenGroupId(null);
    }
  };

  const handleClose = (): void => {
    setOpenGroupId(null);
    onClose();
  };

  return (
    <div className={styles.containerOuter}>
      <div className={styles.optionsNav}>
        <h4 className={styles.titleMenu}>CENTRO VETRINE</h4>
        <button className={styles.buttonClose} onClick={handleClose}>
          <X />
        </button>
      </div>
      <div className={styles.containerInner}>
        <div className={styles.listItems}>
          {items.map((item) => {
            const isOpen = openGroupId === item.id;
            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleClose}
                  className={styles.menuItem}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.children && item.children.length > 0) {
              return (
                <div key={item.id} className={styles.menuGroup}>
                  <button
                    className={styles.menuButton}
                    onClick={() => toggleGroupById(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${item.id}`}
                  >
                    {item.label}
                  </button>

                  {isOpen && (
                    <div className={styles.subMenu} id={`submenu-${item.id}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href!}
                          onClick={handleClose}
                          className={styles.subMenuItem}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
