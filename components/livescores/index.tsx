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
    time !== "After Pen." &&
    time !== "Susp." &&
    time !== "After ET" &&
    time?.length;

  const matchStatusText = (time: MatchStatusType, starttime: string) => {
    if (isLive(time)) return "• Live";
    if (time === "Finished") return "FT";
    if (time === "Postponed") return "Postp.";
    if (time === "Cancelled") return "Canc.";
    if (time === "After Pen.") return "AP";
    if (time === "Susp.") return "Susp.";
    if (time === "After ET") return "AET";

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
                      extraStyles={{ textTransform: "capitalize" }}
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

              {livescore.events.map((tournament, index) => (
                <div className={styles.matchDetails} key={index}>
                  {isLive(tournament.time) ? (
                    <>
                      <div className={styles.matchTimeMobile}>
                        <Text
                          size={14}
                          type="body"
                          variation="secondary"
                          weight="600"
                        >
                          {tournament.time === "Half Time"
                            ? "HT"
                            : tournament.time === "Finished"
                            ? "FT"
                            : `${tournament.time}'`}
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
                            tournament.time,
                            tournament.startTime
                          )}
                        </Text>
                      </div>
                    </>
                  ) : (
                    <div className={styles.notLive}>
                      <Text size={14} type="body" variation="main" weight="600">
                        {matchStatusText(tournament.time, tournament.startTime)}
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
                          {tournament.homeTeam.shortName}
                        </Text>
                      </div>

                      {tournament.homeTeam.logo?.length && (
                        <div
                          className={[
                            styles.teamLogo,
                            styles.homeTeamLogo,
                          ].join(" ")}
                        >
                          <Image
                            src={tournament.homeTeam.logo}
                            alt="home team logo"
                            fill
                          />
                        </div>
                      )}

                      <p className={styles.matchScoresMobile}>
                        {isLive(tournament.time) ||
                        tournament.time === "Finished" ||
                        tournament.time === "After Pen." ||
                        tournament.time === "Susp." ||
                        tournament.time === "After ET"
                          ? teamScore("home", tournament.score)
                          : ""}
                      </p>
                    </div>

                    <p className={styles.matchScores}>
                      {`${
                        isLive(tournament.time) ||
                        tournament.time === "Finished" ||
                        tournament.time === "After Pen." ||
                        tournament.time === "Susp." ||
                        tournament.time === "After ET"
                          ? teamScore("home", tournament.score)
                          : "-"
                      } : ${
                        isLive(tournament.time) ||
                        tournament.time === "Finished" ||
                        tournament.time === "After Pen." ||
                        tournament.time === "Susp." ||
                        tournament.time === "After ET"
                          ? teamScore("away", tournament.score)
                          : "-"
                      }`}
                    </p>

                    <div className={styles.teamWrapper}>
                      {tournament.awayTeam.logo?.length && (
                        <div className={styles.teamLogo}>
                          <Image
                            src={tournament.awayTeam.logo}
                            alt="away team logo"
                            fill
                          />
                        </div>
                      )}

                      <div>
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          {tournament.awayTeam.shortName}
                        </Text>
                      </div>

                      <p className={styles.matchScoresMobile}>
                        {isLive(tournament.time) ||
                        tournament.time === "Finished" ||
                        tournament.time === "After Pen." ||
                        tournament.time === "Susp." ||
                        tournament.time === "After ET"
                          ? teamScore("away", tournament.score)
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div
                    className={[
                      styles.matchTime,
                      !isLive(tournament.time) && styles.noMatchTime,
                    ].join(" ")}
                  >
                    {isLive(tournament.time) ? (
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {tournament.time === "Half Time"
                          ? "HT"
                          : tournament.time === "Finished"
                          ? "FT"
                          : `${tournament.time}'`}
                      </Text>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
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
