import { Text, Wrapper } from "..";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { LiveScoresType } from "@/types";
import { format } from "date-fns";

export default function LiveScores({
  data,
  message,
  succeeded,
}: LiveScoresType) {
  const today = format(new Date(), "dd/MM/yyyy");

  const matchTime = (timestamp: number) => {
    const time = new Date(timestamp * 1000);

    return `${time.getHours()}:${("0" + time.getMinutes()).slice(-2)}`;
  };

  if (!succeeded)
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
          {message === "" ? (
            <Image
              src="/loader.gif"
              alt="home team logo"
              width={150}
              height={150}
            />
          ) : (
            <p>Oops!, An Error Occurred</p>
          )}
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
                <Wrapper noBackground extraStyles={{ gap: "2px" }}>
                  <>
                    <Text size={14} type="body" variation="main" weight="700">
                      {livescore.details.tournamentName}
                    </Text>
                    <Text
                      size={12}
                      type="body"
                      variation="main-300"
                      weight="700"
                    >
                      {livescore.details.competitionName}
                    </Text>
                  </>
                </Wrapper>

                <div className={styles.date}>
                  <Text size={14} type="body" variation="main" weight="700">
                    {today}
                  </Text>
                </div>
              </div>

              {livescore.events.map((event, index) => (
                <Link href="" className={styles.matchDetails} key={index}>
                  {event.status.type === "inprogress" ? (
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
                  ) : event.status.type === "notstarted" ? (
                    <div className={styles.fulltime}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {matchTime(event.startTime)}
                      </Text>
                    </div>
                  ) : event.status.type === "finished" ? (
                    <div className={styles.fulltime}>
                      <Text size={14} type="body" variation="main" weight="600">
                        FT
                      </Text>
                    </div>
                  ) : (
                    <div className={styles.fulltime}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {event.status.description}
                      </Text>
                    </div>
                  )}

                  <div className={styles.matchTeams}>
                    <div className={styles.teamWrapper}>
                      <div className={styles.teamName}>
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          {event.homeTeam.name}
                        </Text>
                      </div>

                      {!event.homeTeam.logo.includes("undefined") && (
                        <>
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
                        </>
                      )}

                      <p className={styles.matchScoresMobile}>
                        {event.homeTeam?.score}
                      </p>
                    </div>

                    <p className={styles.matchScores}>
                      {`${
                        event.homeTeam?.score != "undefined"
                          ? event.homeTeam?.score
                          : "-"
                      } : ${
                        event.awayTeam.score
                          ? event.awayTeam.score.toString()
                          : "-"
                      }`}
                    </p>

                    <div className={styles.teamWrapper}>
                      {!event.awayTeam.logo.includes("undefined") && (
                        <>
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
                        </>
                      )}

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
                        {event.awayTeam?.score}
                      </p>
                    </div>
                  </div>

                  {event.status.type === "inprogress" && (
                    <div className={styles.matchTime}>
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {event.time.currentPeriodStartTimestamp.toString()}
                      </Text>
                    </div>
                  )}
                </Link>
              ))}

              {/* {livescore.events.map((event, index) => (
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
                  ) : event.time.toLowerCase() === "ns" ? (
                    <div className={styles.fulltime}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {matchTime(event.startTime.toString())}
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
                      <div className={styles.teamName}>
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          {event.homeTeam.name}
                        </Text>
                      </div>

                      {!event.homeTeam.logo.includes("undefined") && (
                        <>
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
                        </>
                      )}

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
                      {!event.awayTeam.logo.includes("undefined") && (
                        <>
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
                        </>
                      )}

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
              ))} */}
            </>
          </Wrapper>
        ))}
      </>
    </Wrapper>
  );
}
