import { PlayerCardType } from "@/types";
import styles from "./index.module.css";
import Image from "next/image";
import { Text } from "..";

export default function PlayerCard({ id, body }: PlayerCardType) {
  return (
    <div className={styles.player}>
      <div className={styles.playerDetails}>
        <p className={styles.playerNumber}>{id}</p>

        <Image
          src={body.image}
          alt="player image"
          width={180}
          height={180}
          className={styles.webView}
        />

        <Image
          src={body.image}
          alt="player image"
          width={150}
          height={150}
          className={styles.mobileView}
        />

        <Image
          src={body.image}
          alt="player image"
          width={100}
          height={100}
          className={styles.smallMobile}
        />

        <div className={styles.position}>
          <div className={styles.name}>
            <Text type="body" variation="main" weight="700" size={20}>
              {body.name}
            </Text>
            <Image
              src={body.nationality.logo}
              alt="nationality image"
              width={28}
              height={28}
              className={styles.webView}
            />
            <Image
              src={body.nationality.logo}
              alt="nationality image"
              width={22}
              height={22}
              className={styles.mobileView}
            />
            <Image
              src={body.nationality.logo}
              alt="nationality image"
              width={20}
              height={20}
              className={styles.smallMobile}
            />
          </div>

          <Text type="body" variation="main-300" weight="600" size={14}>
            {`${body.position} / Age: ${body.age}`}
          </Text>
        </div>

        <div className={styles.reasonWrapper}>
          <Text type="body" variation="alert-200" weight="600" size={18}>
            {body.reason}
          </Text>
        </div>
      </div>

      <div className={styles.clubs}>
        <div className={styles.club}>
          <Image
            src={body.previousClub.logo}
            alt="home club logo"
            width={40}
            height={40}
            className={styles.webView}
          />
          <Image
            src={body.previousClub.logo}
            alt="home club logo"
            width={30}
            height={30}
            className={styles.mobileView}
          />
          <Image
            src={body.previousClub.logo}
            alt="home club logo"
            width={24}
            height={24}
            className={styles.smallMobile}
          />
          <Text type="body" variation="main" weight="600" size={16}>
            {body.previousClub.name}
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
          className={[styles.smallMobile, styles.smallMobileArrow].join(" ")}
        />

        <div className={styles.club}>
          <Image
            src={body.currentClub.logo}
            alt="away club logo"
            width={40}
            height={40}
            className={styles.webView}
          />
          <Image
            src={body.currentClub.logo}
            alt="away club logo"
            width={30}
            height={30}
            className={styles.mobileView}
          />
          <Image
            src={body.currentClub.logo}
            alt="away club logo"
            width={24}
            height={24}
            className={styles.smallMobile}
          />
          <Text type="body" variation="main" weight="600" size={16}>
            {body.currentClub.name}
          </Text>
        </div>
      </div>
    </div>
  );
}
