import Image from "next/image";
import { SectionHeading, Text, Wrapper } from "..";
import { Leagues as AllLeagues } from "@/constants";
import Link from "next/link";
import styles from "./index.module.css";

export default function Leagues() {
  return (
    <Wrapper gap={10}>
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
            {AllLeagues.map((league) => (
              <Link
                href={league.route}
                className={styles.league}
                key={league.name}
              >
                <Image
                  src={league.logo}
                  alt="league image"
                  width={32}
                  height={32}
                />

                <Text sizeStatic={14} type="body" variation="main" weight="700">
                  {league.name}
                </Text>
              </Link>
            ))}
          </div>
        </Wrapper>
      </>
    </Wrapper>
  );
}
