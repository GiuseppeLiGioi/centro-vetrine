"use client";
import { NavigationItem } from "@/data/navigation";
import Container from "@/components/ui/Container/Container";
import styles from "./DesktopNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
type DesktopNavProps = {
  items: NavigationItem[];
};

export default function DesktopNav({ items }: DesktopNavProps) {
  const activeUrl = usePathname();

  const handleLinkActive = (
    id: string,
    url?: string,
    children?: { href?: string }[],
  ): string => {
    if (id === "catalogo") {
      const isCatalogActive = children?.some(
        (child) => child.href && child.href === activeUrl,
      );
      return isCatalogActive ? styles.active : "";
    }
    const isActive = url === activeUrl;
    return isActive ? styles.active : "";
  };
  return (
    <nav
      className={styles.navbarLg}
      aria-label="Navigazione principale desktop"
    >
      <Container className={styles.containerNavbarLg}>
        {items.map((item) => {
          if (item.href) {
            return (
              <Link
                href={item.href}
                className={`${styles.voiceNavLg} ${handleLinkActive(item.id, item.href)}`}
                key={item.id}
              >
                {item.label}
              </Link>
            );
          }
          if (item.children && item.children.length > 0) {
            return (
              <div className={styles.navItem} key={item.id}>
                <button
                  type="button"
                  className={`${styles.navTrigger} ${handleLinkActive(item.id, item.href, item.children)}`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={styles.triggerIcon} />
                </button>
                <div className={styles.subMenu}>
                  {item.children.map((child) => (
                    <Link
                      href={child.href!}
                      key={child.id}
                      className={styles.childItem}
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
      </Container>
    </nav>
  );
}
