"use client";
import { Transfers as AllTransfers } from "@/constants";
import styles from "./page.module.css";
import { Text, Wrapper } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Transfers() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Wrapper noBackground gap={20}>
      <>
        <div className={styles.categories}>
          {AllTransfers.map((transfers) => (
            <Link href="" className={styles.category} key={transfers.category}>
              {transfers.category}
            </Link>
          ))}
        </div>

        <div className={styles.players}>
          {AllTransfers[0].body.map((transfer, index) => (
            <div className={styles.player} key={index}>
              <div className={styles.playerDetails}>
                <p className={styles.playerNumber}>{index + 1}</p>

                <Image
                  src={transfer.image}
                  alt="player image"
                  width={180}
                  height={180}
                  className={styles.playerImageWeb}
                />

                <Image
                  src={transfer.image}
                  alt="player image"
                  width={150}
                  height={150}
                  className={styles.playerImageMobile}
                />

                <div className={styles.position}>
                  <div className={styles.name}>
                    <Image
                      src={transfer.nationality.logo}
                      alt="nationality image"
                      width={28}
                      height={28}
                    />
                    <Text type="body" variation="main" weight="700" size={20}>
                      {transfer.name}
                    </Text>
                  </div>

                  <Text type="body" variation="main-300" weight="600" size={14}>
                    {`${transfer.position} / Age: ${transfer.age}`}
                  </Text>
                </div>

                <div className={styles.reasonWrapper}>
                  <Text
                    type="body"
                    variation="alert-200"
                    weight="600"
                    size={18}
                  >
                    {transfer.reason}
                  </Text>
                </div>
              </div>

              <div className={styles.clubs}>
                <div className={styles.club}>
                  <Image
                    src={transfer.previousClub.logo}
                    alt="home club logo"
                    width={40}
                    height={40}
                  />
                  <Text type="body" variation="main" weight="600" size={16}>
                    {transfer.previousClub.name}
                  </Text>
                </div>

                <Image
                  src="/assets/right-arrow.png"
                  alt="arrow"
                  width={28}
                  height={28}
                />

                <div className={styles.club}>
                  <Image
                    src={transfer.currentClub.logo}
                    alt="away club logo"
                    width={40}
                    height={40}
                  />
                  <Text type="body" variation="main" weight="600" size={16}>
                    {transfer.currentClub.name}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </Wrapper>
  );
}
