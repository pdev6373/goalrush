"use client";
import { LayoutType } from "@/types";
import styles from "./layout.module.css";
import Link from "next/link";
import { Text, Wrapper } from "@/components";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LivescoreLayout({ children }: LayoutType) {
  const pathname = usePathname();

  const isCurrentRoute = (route: string) =>
    pathname.includes(route) || route === "/line-up";

  return (
    <div className="main-wrapper-no-inline-padding">
      <Wrapper noBackground gap={30}>
        <>
          <div className={styles.topWrapper}>
            <Wrapper radius="600">
              <>
                <div className={styles.top}>
                  <div className={styles.leagueName}>
                    <Image
                      src="/assets/premier-league.png"
                      alt="league logo"
                      width={30}
                      height={30}
                      className={styles.leagueLogoWeb}
                    />
                    <Image
                      src="/assets/premier-league.png"
                      alt="league logo"
                      width={26}
                      height={26}
                      className={styles.leagueLogoMobile}
                    />

                    <Text
                      type="heading"
                      variation="main"
                      weight="600"
                      size={14}
                    >
                      English Premier League
                    </Text>
                  </div>

                  <div className={styles.notification}>
                    <Text
                      type="body"
                      variation="main-300"
                      weight="600"
                      sizeStatic={12}
                    >
                      Notify
                    </Text>
                    <Image
                      src="/assets/bell.png"
                      alt="notification icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>

                <div className={styles.teamInfo}>
                  <div className={styles.matchDetails}>
                    <Text
                      type="body"
                      variation="main-300"
                      weight="600"
                      size={12}
                    >
                      Matchday 24 Of 38
                    </Text>

                    <div className={styles.teamScores}>
                      <div className={styles.teamScoresInner}>
                        <div className={styles.clubDetails}>
                          <div className={styles.logoWrapper}>
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={82}
                              height={82}
                              className={styles.clubLogoWeb}
                            />
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={54}
                              height={54}
                              className={styles.clubLogoMobile}
                            />
                            <Image
                              src="/assets/star-bright.png"
                              alt="league logo"
                              width={14}
                              height={14}
                              className={styles.star}
                            />
                            <Image
                              src="/assets/star-bright.png"
                              alt="league logo"
                              width={10}
                              height={10}
                              className={styles.starMobile}
                            />
                          </div>
                          <div className={styles.teamNameWrapper}>
                            <p className={styles.teamAbbr}>LCF</p>
                            <h1 className={styles.clubName}>
                              Leichster City FC
                            </h1>
                          </div>

                          <div
                            className={[styles.leftAuto, styles.homeScore].join(
                              " "
                            )}
                          >
                            <p className={styles.teamScore}>3</p>
                            <Image
                              src="/assets/polygon.png"
                              alt="polygon"
                              width={7}
                              height={8}
                            />
                          </div>
                        </div>

                        <div
                          className={[
                            styles.scorerWrapper,
                            styles.leftAuto,
                          ].join(" ")}
                        >
                          <p className={styles.scorer}>
                            Sergio Aguero (31’, 34’ PEN)
                          </p>
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={14}
                            height={14}
                            className={styles.goalIconDesktop}
                          />
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={10}
                            height={10}
                            className={styles.goalIconMobile}
                          />
                        </div>
                      </div>

                      <div className={styles.matchTime}>
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={14}
                        >
                          FT
                        </Text>
                      </div>

                      <div className={styles.teamScoresInner}>
                        <div className={styles.clubDetails}>
                          <div>
                            <p className={styles.teamScore}>1</p>
                          </div>

                          <div
                            className={[
                              styles.teamNameWrapper,
                              styles.leftAuto,
                            ].join(" ")}
                          >
                            <p
                              className={[
                                styles.teamAbbr,
                                styles.leftAuto,
                              ].join(" ")}
                            >
                              ARS
                            </p>
                            <h1
                              className={[
                                styles.clubName,
                                styles.clubNameAway,
                              ].join(" ")}
                            >
                              Arsenal
                            </h1>
                          </div>

                          <div className={styles.logoWrapper}>
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={82}
                              height={82}
                              className={styles.clubLogoWeb}
                            />
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={54}
                              height={54}
                              className={styles.clubLogoMobile}
                            />
                            <Image
                              src="/assets/star-dim.png"
                              alt="league logo"
                              width={14}
                              height={14}
                              className={styles.starDim}
                            />
                            <Image
                              src="/assets/star-dim.png"
                              alt="league logo"
                              width={10}
                              height={10}
                              className={styles.starDimMobile}
                            />
                          </div>
                        </div>

                        <div className={styles.scorerWrapper}>
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={14}
                            height={14}
                            className={styles.goalIconDesktop}
                          />
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={10}
                            height={10}
                            className={styles.goalIconMobile}
                          />

                          <p className={styles.scorer}>Nathan Ake (10’)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className={styles.teamInfo}>
                  <div className={styles.teamBox}>
                    <div className={styles.teamBoxInner}>
                      <Image src="/assets/home-box.svg" alt="home box" fill />
                    </div>

                    <div className={styles.teamBoxWhite}>
                      <Image
                        src="/assets/home-box-white.svg"
                        alt="club box white"
                        fill
                      />
                    </div>

                    <div className={styles.teamBoxInnerInner}>
                      <Image
                        src="/assets/home-box-outer.svg"
                        alt="club box outer"
                        fill
                      />
                    </div>
                  </div>

                  <div
                    className={[styles.teamBox, styles.teamBoxAway].join(" ")}
                  >
                    <div className={styles.teamBoxInner}>
                      <Image src="/assets/away-box.svg" alt="home box" fill />
                    </div>

                    <div className={styles.teamBoxWhite}>
                      <Image
                        src="/assets/away-box-white.svg"
                        alt="club box white"
                        fill
                      />
                    </div>

                    <div className={styles.teamBoxInnerInner}>
                      <Image
                        src="/assets/away-box-outer.svg"
                        alt="club box outer"
                        fill
                      />
                    </div>
                  </div>

                  <div className={styles.matchDetails}>
                    <Text
                      type="body"
                      variation="main-300"
                      weight="600"
                      size={12}
                    >
                      Matchday 24 Of 38
                    </Text>

                    <div className={styles.teamScores}>
                      <div className={styles.teamScoresInner}>
                        <div className={styles.clubDetails}>
                          <div className={styles.logoWrapper}>
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={82}
                              height={82}
                              className={styles.clubLogoWeb}
                            />
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={54}
                              height={54}
                              className={styles.clubLogoMobile}
                            />
                            <Image
                              src="/assets/star-bright.png"
                              alt="league logo"
                              width={14}
                              height={14}
                              className={styles.star}
                            />
                            <Image
                              src="/assets/star-bright.png"
                              alt="league logo"
                              width={10}
                              height={10}
                              className={styles.starMobile}
                            />
                          </div>
                          <div className={styles.teamNameWrapper}>
                            <p className={styles.teamAbbr}>LCF</p>
                            <h1 className={styles.clubName}>
                              Leichster City FC
                            </h1>
                          </div>

                          <div
                            className={[styles.leftAuto, styles.homeScore].join(
                              " "
                            )}
                          >
                            <p className={styles.teamScore}>3</p>
                            <Image
                              src="/assets/polygon.png"
                              alt="polygon"
                              width={7}
                              height={8}
                            />
                          </div>
                        </div>

                        <div
                          className={[
                            styles.scorerWrapper,
                            styles.leftAuto,
                          ].join(" ")}
                        >
                          <p className={styles.scorer}>
                            Sergio Aguero (31’, 34’ PEN)
                          </p>
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={14}
                            height={14}
                            className={styles.goalIconDesktop}
                          />
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={10}
                            height={10}
                            className={styles.goalIconMobile}
                          />
                        </div>
                      </div>

                      <div className={styles.matchTime}>
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={14}
                        >
                          FT
                        </Text>
                      </div>

                      <div className={styles.teamScoresInner}>
                        <div className={styles.clubDetails}>
                          <div>
                            <p className={styles.teamScore}>1</p>
                          </div>

                          <div
                            className={[
                              styles.teamNameWrapper,
                              styles.leftAuto,
                            ].join(" ")}
                          >
                            <p
                              className={[
                                styles.teamAbbr,
                                styles.leftAuto,
                              ].join(" ")}
                            >
                              ARS
                            </p>
                            <h1
                              className={[
                                styles.clubName,
                                styles.clubNameAway,
                              ].join(" ")}
                            >
                              Arsenal
                            </h1>
                          </div>

                          <div className={styles.logoWrapper}>
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={82}
                              height={82}
                              className={styles.clubLogoWeb}
                            />
                            <Image
                              src="/assets/club.svg"
                              alt="goal icon"
                              width={54}
                              height={54}
                              className={styles.clubLogoMobile}
                            />
                            <Image
                              src="/assets/star-dim.png"
                              alt="league logo"
                              width={14}
                              height={14}
                              className={styles.starDim}
                            />
                            <Image
                              src="/assets/star-dim.png"
                              alt="league logo"
                              width={10}
                              height={10}
                              className={styles.starDimMobile}
                            />
                          </div>
                        </div>

                        <div className={styles.scorerWrapper}>
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={14}
                            height={14}
                            className={styles.goalIconDesktop}
                          />
                          <Image
                            src="/assets/goal.png"
                            alt="goal icon"
                            width={10}
                            height={10}
                            className={styles.goalIconMobile}
                          />

                          <p className={styles.scorer}>Nathan Ake (10’)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className={styles.vote}>
                  <Wrapper noBackground gapStatic={12}>
                    <>
                      <div className={styles.voteHeader}>
                        <Text
                          type="body"
                          variation="main"
                          weight="600"
                          size={12}
                        >
                          Who will win 1x1
                        </Text>
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={12}
                        >
                          19,475 Vote
                        </Text>
                      </div>

                      <div className={styles.votePercentLineWrapper}>
                        <Wrapper center noBackground gapStatic={10}>
                          <>
                            <Image
                              src="/assets/home-win.png"
                              alt="home win percent"
                              width={136}
                              height={5}
                            />

                            <div className={styles.voteDetails}>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                LCF
                              </Text>
                              <Text
                                type="body"
                                variation="main"
                                weight="600"
                                size={12}
                              >
                                4,557
                              </Text>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                Vote
                              </Text>
                            </div>
                          </>
                        </Wrapper>

                        <Wrapper center noBackground gapStatic={10}>
                          <>
                            <Image
                              src="/assets/draw.png"
                              alt="raw percent"
                              width={136}
                              height={5}
                            />
                            <div className={styles.voteDetails}>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                DRAW
                              </Text>
                              <Text
                                type="body"
                                variation="main"
                                weight="600"
                                size={12}
                              >
                                11,054
                              </Text>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                Vote
                              </Text>
                            </div>
                          </>
                        </Wrapper>

                        <Wrapper center noBackground gapStatic={10}>
                          <>
                            <Image
                              src="/assets/away-win.png"
                              alt="away win percent"
                              width={136}
                              height={5}
                            />
                            <div className={styles.voteDetails}>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                ARS
                              </Text>
                              <Text
                                type="body"
                                variation="main"
                                weight="600"
                                size={12}
                              >
                                3,738
                              </Text>
                              <Text
                                type="body"
                                variation="main-300"
                                weight="600"
                                size={12}
                              >
                                Vote
                              </Text>
                            </div>
                          </>
                        </Wrapper>
                      </div>
                    </>
                  </Wrapper>
                </div>

                <div className={styles.bottom}>
                  <ul className={styles.bottomList}>
                    <li>
                      <Link
                        href={`${pathname}/comment`}
                        className={
                          isCurrentRoute("/comment") ? styles.activeLink : ""
                        }
                      >
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={12}
                        >
                          Comment
                        </Text>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={`${pathname}/summary`}
                        className={
                          isCurrentRoute("/summary") ? styles.activeLink : ""
                        }
                      >
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={12}
                        >
                          Summary
                        </Text>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={`${pathname}`}
                        className={
                          isCurrentRoute("/line-up") ? styles.activeLink : ""
                        }
                      >
                        <Text
                          type="body"
                          variation="main-300"
                          weight="600"
                          size={12}
                        >
                          Line-Up
                        </Text>
                      </Link>
                    </li>
                  </ul>

                  <button className={styles.addVoteButton}>
                    <Text
                      type="body"
                      variation="secondary"
                      weight="600"
                      size={12}
                    >
                      Add Vote
                    </Text>
                  </button>
                </div>
              </>
            </Wrapper>
          </div>

          {children}
        </>
      </Wrapper>
    </div>
  );
}
