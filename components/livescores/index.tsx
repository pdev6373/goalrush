import { Text, Wrapper } from "..";
import { LiveScores as AllLiveScores } from "@/constants";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { LiveScoresType } from "@/types";

export default function LiveScores({
  data,
  message,
  succeeded,
}: LiveScoresType) {
  const isLive = (time: string) => time.includes("'");

  if (!data?.length)
    return (
      <div className={styles.noData}>
        <Wrapper
          padding={20}
          gap={20}
          extraStyles={{
            display: "grid",
            placeContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <p>Oops!, An Error Occurred</p>
        </Wrapper>
      </div>
    );

  return (
    <Wrapper padding={20} gap={20}>
      <>
        {data.map((livescore, index) => (
          <Wrapper noBackground gap={10} key={index}>
            <>
              <div className={styles.leagueHeader}>
                <div>
                  <Text size={14} type="body" variation="main" weight="700">
                    {livescore.details.stageName}
                  </Text>
                  <Text size={14} type="body" variation="main" weight="700">
                    {livescore.details.competitionName}
                  </Text>
                </div>

                <Text size={14} type="body" variation="main" weight="700">
                  29/05/2022
                </Text>
              </div>

              {livescore.events.map((event, index) => (
                <Link href="" className={styles.matchDetails} key={index}>
                  {isLive(event.time) ? (
                    <div className={styles.live}>
                      <Text
                        size={14}
                        type="body"
                        variation="alert"
                        weight="600"
                      >
                        • Live
                      </Text>
                    </div>
                  ) : (
                    <div className={styles.fulltime}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {event.time}
                      </Text>
                    </div>
                  )}

                  <div className={styles.matchTeams}>
                    <div className={styles.teamWrapper}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {event.homeTeam.name}
                      </Text>

                      <Image
                        src={event.homeTeam.logo}
                        alt="home team logo"
                        width={24}
                        height={24}
                        className={styles.teamLogoWeb}
                      />
                      <Image
                        src={event.homeTeam.logo}
                        alt="home team logo"
                        width={20}
                        height={20}
                        className={styles.teamLogoMobile}
                      />

                      <p className={styles.matchScoresMobile}>
                        {event.homeTeam.score}
                      </p>
                    </div>

                    <p className={styles.matchScores}>
                      {`${
                        event.homeTeam.score ? event.homeTeam.score : "-"
                      } : ${event.awayTeam.score ? event.awayTeam.score : "-"}`}
                    </p>

                    <div className={styles.teamWrapper}>
                      <Image
                        src={event.awayTeam.logo}
                        alt="away team logo"
                        width={24}
                        height={24}
                        className={styles.teamLogoWeb}
                      />
                      <Image
                        src={event.homeTeam.logo}
                        alt="home team logo"
                        width={20}
                        height={20}
                        className={styles.teamLogoMobile}
                      />

                      <div>
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          {event.awayTeam.name}
                        </Text>
                      </div>
                      <p className={styles.matchScoresMobile}>
                        {event.awayTeam.score}
                      </p>
                    </div>
                  </div>

                  {isLive(event.time) && (
                    <div className={styles.matchTime}>
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {event.time}
                      </Text>
                    </div>
                  )}
                </Link>
              ))}
            </>
          </Wrapper>
        ))}
      </>
    </Wrapper>
  );
}
