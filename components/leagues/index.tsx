"use client";
import { useContext } from "react";
import { SectionHeading, Text, Wrapper } from "..";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { GlobalContext } from "@/context/global";
import { usePathname } from "next/navigation";

export default function Leagues() {
  const { competitions, loadingCompetitions } = useContext(GlobalContext);
  const pathname = usePathname();

  if (loadingCompetitions || !competitions?.data?.length) {
    return (
      <Wrapper center padding={30}>
        <Image src="/loader-two.gif" alt="loading gif" width={60} height={60} />
      </Wrapper>
    );
  }

  const isCurrentRoute = (route: string) =>
    pathname.toLowerCase().includes(`/livescores/${route}`.toLowerCase());

  return (
    <div className={styles.wrapper}>
      <>
        <Link href="/" className={styles.heading}>
          <SectionHeading>All Cup</SectionHeading>
        </Link>

        <Wrapper
          noBackground
          padding={20}
          gap={8}
          extraStyles={{ paddingBlock: "0" }}
        >
          <div className={styles.allLeagues}>
            {competitions.data.map((league) => (
              <Link
                href={`/livescores/${league.slug}`}
                className={[
                  styles.league,
                  isCurrentRoute(league.slug) && styles.leagueCurrent,
                ].join(" ")}
                key={league.name}
              >
                {league.flag?.length && (
                  <>
                    <Image
                      src={league.flag}
                      alt="league image"
                      width={32}
                      height={32}
                      className={styles.competitionFlag}
                    />
                    <Image
                      src={league.flag}
                      alt="league image"
                      width={28}
                      height={28}
                      className={styles.competitionFlagMobile}
                    />
                  </>
                )}

                <Text sizeStatic={14} type="body" variation="main" weight="700">
                  {league.name}
                </Text>

                <Image
                  src="/assets/nav-highlight.png"
                  alt="highlight"
                  width={18}
                  height={14}
                  className={[
                    styles.highlightIcon,
                    isCurrentRoute(league.slug) && styles.highlightIconActive,
                  ].join(" ")}
                />
              </Link>
            ))}
          </div>
        </Wrapper>
      </>
    </div>
  );
}
