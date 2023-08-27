import { Transfers as AllTransfers } from "@/constants";
import styles from "./page.module.css";
import { Text } from "@/components";
import Image from "next/image";

export default function Transfers() {
  return (
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
              className={styles.webView}
            />

            <Image
              src={transfer.image}
              alt="player image"
              width={150}
              height={150}
              className={styles.mobileView}
            />

            <Image
              src={transfer.image}
              alt="player image"
              width={100}
              height={100}
              className={styles.smallMobile}
            />

            <div className={styles.position}>
              <div className={styles.name}>
                <Text type="body" variation="main" weight="700" size={20}>
                  {transfer.name}
                </Text>
                <Image
                  src={transfer.nationality.logo}
                  alt="nationality image"
                  width={28}
                  height={28}
                  className={styles.webView}
                />
                <Image
                  src={transfer.nationality.logo}
                  alt="nationality image"
                  width={22}
                  height={22}
                  className={styles.mobileView}
                />
                <Image
                  src={transfer.nationality.logo}
                  alt="nationality image"
                  width={20}
                  height={20}
                  className={styles.smallMobile}
                />
              </div>

              <Text type="body" variation="main-300" weight="600" size={14}>
                {`${transfer.position} / Age: ${transfer.age}`}
              </Text>
            </div>

            <div className={styles.reasonWrapper}>
              <Text type="body" variation="alert-200" weight="600" size={18}>
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
                className={styles.webView}
              />
              <Image
                src={transfer.previousClub.logo}
                alt="home club logo"
                width={30}
                height={30}
                className={styles.mobileView}
              />
              <Image
                src={transfer.previousClub.logo}
                alt="home club logo"
                width={24}
                height={24}
                className={styles.smallMobile}
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
              className={styles.webView}
            />

            <Image
              src="/assets/right-arrow.png"
              alt="arrow"
              width={22}
              height={22}
              className={styles.mobileView}
            />

            <Image
              src="/assets/right-arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className={[styles.smallMobile, styles.smallMobileArrow].join(
                " "
              )}
            />

            <div className={styles.club}>
              <Image
                src={transfer.currentClub.logo}
                alt="away club logo"
                width={40}
                height={40}
                className={styles.webView}
              />
              <Image
                src={transfer.currentClub.logo}
                alt="away club logo"
                width={30}
                height={30}
                className={styles.mobileView}
              />
              <Image
                src={transfer.currentClub.logo}
                alt="away club logo"
                width={24}
                height={24}
                className={styles.smallMobile}
              />
              <Text type="body" variation="main" weight="600" size={16}>
                {transfer.currentClub.name}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
