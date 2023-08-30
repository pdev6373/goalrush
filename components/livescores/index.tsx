import { Text, Wrapper } from "..";
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
                <Text size={14} type="body" variation="main" weight="700">
                  {league.details.league}
                </Text>

                <Text size={14} type="body" variation="main" weight="700">
                  {league.details.time}
                </Text>
              </div>

              <div>
                {league.teams.map((match) => (
                  <Link
                    href={`/england/${league.details.league}/${match.homeTeam.name}-${match.awayTeam.name}`}
                    className={styles.matchDetails}
                    key={match.homeTeam.name}
                  >
                    {match.isLive ? (
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
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          FT
                        </Text>
                      </div>
                    )}

                    <div className={styles.matchTeams}>
                      <div className={styles.teamWrapper}>
                        <Text
                          size={14}
                          type="body"
                          variation="main"
                          weight="600"
                        >
                          {match.homeTeam.name}
                        </Text>

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

                        <p className={styles.matchScoresMobile}>
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

                        <div>
                          <Text
                            size={14}
                            type="body"
                            variation="main"
                            weight="600"
                          >
                            {match.awayTeam.name}
                          </Text>
                        </div>
                        <p className={styles.matchScoresMobile}>
                          {match.awayTeam.score}
                        </p>
                      </div>
                    </div>

                    <div className={styles.matchTime}>
                      <Text
                        size={14}
                        type="body"
                        variation="secondary"
                        weight="600"
                      >
                        {match.time}
                      </Text>
                    </div>
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
