"use client";
import { useState, useContext } from "react";
import { SectionHeading, Text, Wrapper } from "..";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { TournamentCategoriesType } from "@/types";
import { LivescoresContext } from "@/app/context";

export default function Leagues() {
  const [competitions, setCompetitions] =
    useState<TournamentCategoriesType[]>();
  const { data, message, succeeded } = useContext(LivescoresContext);

  !competitions?.length &&
    data.length &&
    setCompetitions(
      data
        .map(
          (tournament) =>
            ({
              name: tournament.details.competitionName,
              slug: tournament.details.competitionSlug,
              flag: "",
            } as TournamentCategoriesType)
        )
        .filter(
          (tournament, index, tournaments) =>
            tournaments.findIndex((item) => item.name === tournament.name) ===
            index
        )
    );

  if (!succeeded) {
    if (!message) return <p>Loading...</p>;
    else return <p>No profile data</p>;
  }

  if (!competitions?.length) return <p>Loading...</p>;

  console.log(competitions);

  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.heading}>
          <SectionHeading>All Cup</SectionHeading>
        </div>

        <Wrapper
          noBackground
          padding={20}
          gap={8}
          extraStyles={{ paddingBlock: "0" }}
        >
          <div className={styles.allLeagues}>
            {competitions.map((league) => (
              <Link
                href={`/cup/${league.slug}`}
                className={styles.league}
                key={league.name}
              >
                {/* <Image
                  src={league.flag}
                  alt="league image"
                  width={32}
                  height={32}
                /> */}

                <Text sizeStatic={14} type="body" variation="main" weight="700">
                  {league.name}
                </Text>
              </Link>
            ))}
          </div>
        </Wrapper>
      </>
    </div>
  );
}
