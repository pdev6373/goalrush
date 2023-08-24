import Image from "next/image";
import { SectionHeading, Wrapper } from "..";
import { Leagues as AllLeagues } from "@/constants";
import Link from "next/link";
import styles from "./Leagues.module.css";

export default function Leagues() {
  return (
    <Wrapper gap={10}>
      <>
        <SectionHeading>All Cup</SectionHeading>

        <Wrapper noBackground padding={20} paddingBlock={0} gap={8}>
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
                  <p>{league.name}</p>
                </Link>
              </Wrapper>
            ))}
          </>
        </Wrapper>
      </>
    </Wrapper>
  );
}
