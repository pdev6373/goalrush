"use client";
import { Nav as NavItems } from "@/constants";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import { NavRouteType } from "@/types";
import Image from "next/image";
import { Text } from "..";

export default function Nav() {
  const pathname = usePathname();

  const isCurrentRoute = (route: NavRouteType) =>
    typeof route === "string"
      ? route.length > 1
        ? pathname.includes(route)
        : pathname === route || pathname.includes("/livescores")
      : route.some((route) => pathname.includes(route.route));

  const navHighlightHandler = (route: NavRouteType) => (
    <div
      className={[
        styles.highlight,
        isCurrentRoute(route) && styles.highlightCurrent,
      ].join(" ")}
    >
      <Image src="/assets/nav-highlight.png" alt="" width={18} height={14} />
    </div>
  );

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.navList}>
        {NavItems.map((nav) => (
          <li className={styles.navItem} key={nav.name}>
            {nav.route && typeof nav.route === "string" && (
              <>
                <div className={styles.linkWrapper}>
                  <Link
                    href={nav.route}
                    className={[
                      styles.link,
                      isCurrentRoute(nav.route) && styles.linkCurrent,
                    ].join(" ")}
                  >
                    {nav.name}
                  </Link>
                </div>

                {navHighlightHandler(nav.route)}
              </>
            )}

            {nav.routes?.length && (
              <>
                <div className={styles.linkWrapper}>
                  <p
                    className={[
                      styles.link,
                      isCurrentRoute(nav.routes) && styles.linkCurrent,
                    ].join(" ")}
                  >
                    {nav.name}
                  </p>

                  <div className={styles.newsTypeOuter}>
                    <div className={styles.newsType}>
                      {nav.routes.map((nav) => (
                        <Link
                          key={nav.name}
                          href={nav.route}
                          className={[
                            styles.newsLink,
                            // isCurrentRoute(nav.route) && styles.linkCurrent,
                          ].join(" ")}
                        >
                          <Text
                            size={16}
                            type="body"
                            variation="main"
                            weight="600"
                          >
                            {nav.name}
                          </Text>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {navHighlightHandler(nav.routes)}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
