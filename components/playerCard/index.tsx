import Image from "next/image";
import { PlayerCardType } from "@/types";
import { Text } from "..";
import styles from "./index.module.css";

export default function PlayerCard({ id, type, body }: PlayerCardType) {
  return type === "transfer" ? (
    <div className={styles.player}>
      <p className={styles.playerNumber}>{id}</p>

      <div className={styles.playerDetails}>
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
  ) : (
    <div className={styles.rumourPlayer}>
      <p className={styles.playerNumber}>{id}</p>

      <div className={styles.rumourMain}>
        <div className={styles.rumourDetails}>
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

      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>

      <div className={styles.votes}>
        <div className={styles.votesIndicator}>
          <div
            className={styles.positiveVoteIndicatorWrapper}
            // style={{ width: "calc(40% + 3px)" }}
          >
            <Image
              src="/assets/positive-votes.svg"
              alt="positive votes"
              className={styles.positiveVoteIndicator}
              fill
            />
          </div>

          <div
            className={styles.negativeVoteIndicatorWrapper}
            // style={{ width: "calc(60% + 3px)" }}
          >
            <Image
              src="/assets/negative-votes.svg"
              alt="negative votes"
              className={styles.negativeVoteIndicator}
              fill
            />
          </div>
        </div>

        <div className={styles.voteDetails}>
          <div className={styles.voteOptions}>
            <Image
              src="/assets/like.svg"
              alt="like icon"
              width={18}
              height={18}
            />
            <Text type="body" variation="active" weight="600" sizeStatic={16}>
              Yes
            </Text>
          </div>

          <Text type="body" variation="main" weight="600" sizeStatic={16}>
            215 Votes
          </Text>

          <div className={styles.voteOptions}>
            <Text type="body" variation="yellow" weight="600" sizeStatic={16}>
              No
            </Text>
            <Image
              src="/assets/dislike.svg"
              alt="dislike icon"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
