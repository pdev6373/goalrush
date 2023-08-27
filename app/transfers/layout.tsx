"use client";
import { LayoutType } from "@/types";
import styles from "./layout.module.css";
import { Transfers } from "@/constants";
import Link from "next/link";
import { Wrapper } from "@/components";
import { usePathname } from "next/navigation";

export default function Transfersayout({ children }: LayoutType) {
  const pathname = usePathname();

  const isCurrentRoute = (route: string) =>
    route !== "/transfers" ? pathname.includes(route) : pathname === route;

  return (
    <Wrapper noBackground gap={20}>
      <>
        <div className={styles.categories}>
          {Transfers.map((transfers, index) => {
            const route = index ? `/transfers/${transfers.id}` : "/transfers";

            return (
              <Link
                href={route}
                className={[
                  styles.category,
                  isCurrentRoute(route) && styles.categoryActive,
                ].join(" ")}
                key={transfers.category}
              >
                {transfers.category}
              </Link>
            );
          })}
        </div>
        {children}
      </>
    </Wrapper>
  );
}
