"use client";
import { Nav as NavItems } from "@/constants";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import { NavRouteType } from "@/types";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();
  const isCurrentRoute = (route: NavRouteType) => route === pathname;

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {NavItems.map((nav) => (
          <li className={styles.navItem} key={nav.name}>
            <Link
              href={nav.route}
              className={[
                styles.link,
                isCurrentRoute(nav.route) && styles.linkCurrent,
              ].join(" ")}
            >
              {nav.name}
            </Link>

            <div
              className={[
                styles.highlight,
                isCurrentRoute(nav.route) && styles.highlightCurrent,
              ].join(" ")}
            >
              <Image
                src="/assets/nav-highlight.png"
                alt=""
                width={18}
                height={14}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
