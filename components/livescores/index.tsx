import { Text, Wrapper } from "..";
import { format, differenceInMinutes } from "date-fns";
import { LiveScoresWithDateType, MatchStatusTypeType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function LiveScores({
  data,
  message,
  succeeded,
  date,
}: LiveScoresWithDateType) {
  // const livescoreDate = format(new Date(date), "yyyy-MM-dd");
  const livescoreDate = format(new Date(date), "dd/MM/yyyy");

  const matchStatusText = (
    status: MatchStatusTypeType,
    customDisplay: string = ""
  ) => {
    switch (status) {
      case "finished":
        return "FT";
      case "canceled":
        return "Canc.";
      case "inprogress":
        return "• Live";
      case "notstarted":
        return customDisplay;
      case "postponed":
        return "Postp.";
    }
  };

  const matchTime = (initialTimestamp: number, currentTimestamp: number) =>
    differenceInMinutes(
      new Date(1694790991 * 1000),
      new Date(1694790016 * 1000)
      // new Date(1694790016 * 1000),
      // new Date(1694790000 * 1000)
      // new Date(1694790991 * 1000),
      // new Date(1694790000 * 1000)

      // new Date(currentTimestamp * 1000),
      // new Date(initialTimestamp * 1000)
    ).toString();

  const startTime = (timestamp: number) =>
    format(new Date(timestamp * 1000), "HH:mm");

  if (!succeeded)
    return (
      <div className={styles.noData}>
        <Wrapper padding={20} gap={20} extraStyles={extraStyles.wrapper}>
          {!message ? (
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
                    {livescoreDate}
                  </Text>
                </div>
              </div>

              {livescore.events.map((event, index) => (
                <Link href="" className={styles.matchDetails} key={index}>
                  {event.status.type === "inprogress" ? (
                    <>
                      <div className={styles.matchTimeMobile}>
                        <Text
                          size={14}
                          type="body"
                          variation="secondary"
                          weight="600"
                        >
                          {event.status.description === "Halftime"
                            ? "HT"
                            : matchTime(
                                event.startTime,
                                event.time.currentPeriodStartTimestamp
                              )}
                        </Text>
                      </div>
                      <div className={styles.live}>
                        <Text
                          size={14}
                          type="body"
                          variation="alert"
                          weight="600"
                        >
                          {matchStatusText(event.status.type)}
                        </Text>
                      </div>
                    </>
                  ) : (
                    <div className={styles.notLive}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {matchStatusText(
                          event.status.type,
                          event.status.type === "notstarted"
                            ? startTime(event.startTime)
                            : ""
                        )}
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
                          {event.homeTeam.shortName}
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
                        typeof event.homeTeam.score === "number"
                          ? event.homeTeam.score
                          : "-"
                      } : ${
                        typeof event.awayTeam.score === "number"
                          ? event.awayTeam.score
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
                          {event.awayTeam.shortName}
                        </Text>
                      </div>
                      <p className={styles.matchScoresMobile}>
                        {event.awayTeam?.score}
                      </p>
                    </div>
                  </div>

                  <div
                    className={[
                      styles.matchTime,
                      event.status.type !== "inprogress" && styles.noMatchTime,
                    ].join(" ")}
                  >
                    {event.status.type === "inprogress" && (
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {event.status.description === "Halftime"
                          ? "HT"
                          : matchTime(
                              event.startTime,
                              event.time.currentPeriodStartTimestamp
                            )}
                      </Text>
                    )}
                  </div>
                </Link>
              ))}
            </>
          </Wrapper>
        ))}
      </>
    </Wrapper>
  );
}

const extraStyles = {
  wrapper: {
    display: "grid",
    placeContent: "center",
    width: "100%",
    height: "100%",
  },
};
