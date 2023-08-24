import { Wrapper } from "..";
import { LiveScores as AllLiveScores } from "@/constants";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LiveScores() {
  return (
    <Wrapper padding={20} gap={20}>
      <>
        {AllLiveScores.map((league) => (
          <Wrapper noBackground gap={10} key={league.details.league}>
            <>
              <div className={styles.leagueHeader}>
                <p className={styles.leagueHeaderText}>
                  {league.details.league}
                </p>
                <p className={styles.leagueHeaderText}>{league.details.time}</p>
              </div>

              <div>
                {league.teams.map((match) => (
                  <Link
                    href=""
                    className={styles.matchDetails}
                    key={match.homeTeam.name}
                  >
                    {match.isLive ? (
                      <p className={styles.live}>• Live</p>
                    ) : (
                      <p>FT</p>
                    )}

                    <div className={styles.matchTeams}>
                      <div className={styles.teamWrapper}>
                        <p
                          className={[
                            styles.teamName,
                            styles.homeTeamName,
                          ].join(" ")}
                        >
                          {match.homeTeam.name}
                        </p>
                        <Image
                          src={match.homeTeam.logo}
                          alt="home team logo"
                          width={24}
                          height={24}
                          className={styles.teamLogoWeb}
                        />
                        <Image
                          src={match.homeTeam.logo}
                          alt="home team logo"
                          width={20}
                          height={20}
                          className={styles.teamLogoMobile}
                        />

                        <p
                          className={[
                            styles.matchScoresMobile,
                            styles.homeMatchScoresMobile,
                          ].join(" ")}
                        >
                          {match.homeTeam.score}
                        </p>
                      </div>

                      <p className={styles.matchScores}>
                        {`${match.homeTeam.score} : ${match.awayTeam.score}`}
                      </p>

                      <div className={styles.teamWrapper}>
                        <Image
                          src={match.awayTeam.logo}
                          alt="away team logo"
                          width={24}
                          height={24}
                          className={styles.teamLogoWeb}
                        />
                        <Image
                          src={match.homeTeam.logo}
                          alt="home team logo"
                          width={20}
                          height={20}
                          className={styles.teamLogoMobile}
                        />
                        <p className={styles.teamName}>{match.awayTeam.name}</p>
                        <p className={styles.matchScoresMobile}>
                          {match.awayTeam.score}
                        </p>
                      </div>
                    </div>

                    <p className={styles.matchTime}>{match.time}</p>
                  </Link>
                ))}
              </div>
            </>
          </Wrapper>
        ))}
      </>
    </Wrapper>
  );
}
