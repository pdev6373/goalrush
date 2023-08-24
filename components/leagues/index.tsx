import Image from "next/image";
import { SectionHeading, Wrapper } from "..";
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
          extraStyles={{ paddingBlock: "0 33px" }}
        >
          <>
            {AllLeagues.map((league) => (
              <Wrapper noBackground padding={10} key={league.name}>
                <Link href={league.route} className={styles.league}>
                  <Image
                    src={league.logo}
                    alt="league image"
                    width={32}
                    height={32}
                  />
                  <p className={styles.leagueName}>{league.name}</p>
                </Link>
              </Wrapper>
            ))}
          </>
        </Wrapper>
      </>
    </Wrapper>
  );
}
