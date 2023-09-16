"use client";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks";
import { Leagues as AllLeagues } from "@/constants";
import { SectionHeading, Text, Wrapper } from "..";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { TournamentCategoriesType } from "@/types";

export default function Leagues() {
  const [data, setData] = useState<TournamentCategoriesType[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_HTTP}/tournament-categries`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data?.length) return <p>No profile data</p>;

  // const { fetchData } = useFetch();
  // const [leagues, setLeagues] = useState<TournamentCategoriesType>();

  // const data = use(
  //   fetchData({
  //     url: `${process.env.NEXT_PUBLIC_API_ENDPOINT_HTTP}/tournament-categories`,
  //   })
  // );

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
            {data.map((league) => (
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
