import { Text, Wrapper } from "..";
import format from "date-fns/format";
import { LiveScoresWithDateType, MatchStatusType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function LiveScores({
  data,
  message,
  succeeded,
  date,
  loading,
}: LiveScoresWithDateType) {
  const livescoreDate = format(new Date(date), "dd/MM/yyyy");

  if (loading || !message.length)
    return (
      <div className={styles.noData}>
        <Wrapper padding={20} gap={20} extraStyles={extraStyles.wrapper}>
          <Image src="/loader.gif" alt="loading gif" width={150} height={150} />
        </Wrapper>
      </div>
    );

  if (!succeeded && !data?.length && message.length)
    return (
      <div className={styles.noData}>
        <Wrapper padding={20} gap={20} extraStyles={extraStyles.wrapper}>
          <>
            <Image
              src="/500.gif"
              alt="loading gif"
              width={400}
              height={300}
              className={styles.error500Large}
            />
            <Image
              src="/500.gif"
              alt="loading gif"
              width={250}
              height={187.5}
              className={styles.error500Medium}
            />
            <Image
              src="/500.gif"
              alt="loading gif"
              width={150}
              height={112.5}
              className={styles.error500Small}
            />
          </>
        </Wrapper>
      </div>
    );

  if (!data.length && message.length && succeeded)
    return (
      <div className={styles.noData}>
        <Wrapper padding={20} gap={20} extraStyles={extraStyles.wrapper}>
          <Image
            src="/no-data.gif"
            alt="no data gif"
            width={150}
            height={150}
          />
        </Wrapper>
      </div>
    );

  const teamScore = (team: "home" | "away", scores: string) => {
    const splittedScores = scores.split(" - ");

    return team === "home"
      ? splittedScores[0]
      : splittedScores[splittedScores.length - 1];
  };

  const isLive = (time: MatchStatusType) =>
    time !== "Cancelled" &&
    time !== "Finished" &&
    time !== "Postponed" &&
    time?.length;

  const matchStatusText = (time: MatchStatusType, starttime: string) => {
    if (isLive(time)) return "• Live";
    if (time === "Finished") return "FT";
    if (time === "Postponed") return "Postp.";
    if (time === "Cancelled") return "Canc.";

    return starttime;
  };

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

              <div className={styles.matchDetails}>
                {isLive(livescore.event.time) ? (
                  <>
                    <div className={styles.matchTimeMobile}>
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {livescore.event.time === "Half Time"
                          ? "HT"
                          : livescore.event.time === "Finished"
                          ? "FT"
                          : livescore.event.time.includes("+")
                          ? livescore.event.time
                          : `${livescore.event.time}'`}
                      </Text>
                    </div>

                    <div className={styles.live}>
                      <Text
                        size={14}
                        type="body"
                        variation="alert"
                        weight="600"
                      >
                        {matchStatusText(
                          livescore.event.time,
                          livescore.event.startTime
                        )}
                      </Text>
                    </div>
                  </>
                ) : (
                  <div className={styles.notLive}>
                    <Text size={14} type="body" variation="main" weight="600">
                      {matchStatusText(
                        livescore.event.time,
                        livescore.event.startTime
                      )}
                    </Text>
                  </div>
                )}

                <div className={styles.matchTeams}>
                  <div className={styles.teamWrapper}>
                    <div className={styles.teamName}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {livescore.event.homeTeam.shortName}
                      </Text>
                    </div>

                    {livescore.event.homeTeam.logo?.length ? (
                      <>
                        <div
                          className={[
                            styles.teamLogo,
                            styles.homeTeamLogo,
                          ].join(" ")}
                        >
                          <Image
                            src={livescore.event.homeTeam.logo}
                            alt="home team logo"
                            fill
                          />
                        </div>
                      </>
                    ) : (
                      <div className={styles.noLogo}></div>
                    )}

                    <p className={styles.matchScoresMobile}>
                      {isLive(livescore.event.time)
                        ? teamScore("home", livescore.event.score)
                        : ""}
                    </p>
                  </div>

                  <p className={styles.matchScores}>
                    {`${
                      isLive(livescore.event.time)
                        ? teamScore("home", livescore.event.score)
                        : "-"
                    } : ${
                      isLive(livescore.event.time)
                        ? teamScore("away", livescore.event.score)
                        : "-"
                    }`}
                  </p>

                  <div className={styles.teamWrapper}>
                    {livescore.event.awayTeam.logo?.length ? (
                      <>
                        <div className={styles.teamLogo}>
                          <Image
                            src={livescore.event.awayTeam.logo}
                            alt="away team logo"
                            fill
                          />
                        </div>
                      </>
                    ) : (
                      <div className={styles.noLogo}></div>
                    )}

                    <div>
                      <Text size={14} type="body" variation="main" weight="600">
                        {livescore.event.awayTeam.shortName}
                      </Text>
                    </div>

                    <p className={styles.matchScoresMobile}>
                      {isLive(livescore.event.time)
                        ? teamScore("away", livescore.event.score)
                        : ""}
                    </p>
                  </div>
                </div>

                <div
                  className={[
                    styles.matchTime,
                    !isLive(livescore.event.time) && styles.noMatchTime,
                  ].join(" ")}
                >
                  {isLive(livescore.event.time) ? (
                    <Text
                      size={14}
                      type="body"
                      variation="secondary"
                      weight="600"
                    >
                      {livescore.event.time === "Half Time"
                        ? "HT"
                        : livescore.event.time === "Finished"
                        ? "FT"
                        : livescore.event.time.includes("+")
                        ? livescore.event.time
                        : `${livescore.event.time}'`}
                    </Text>
                  ) : (
                    ""
                  )}
                </div>
              </div>
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
