"use client";
import { useEffect, useState } from "react";
import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
  DropDownButton,
} from "@/components";
import { HomeTypes, LiveScoresType } from "@/types";
import styles from "./page.module.css";

export default function Livescores() {
  const [livescores, setLivescores] = useState<LiveScoresType>({
    data: [],
    message: "",
    succeeded: false,
  });

  useEffect(() => {
    // const socketProtocol =
    //   window.location.protocol === "https:" ? "wss:" : "ws:";
    // const livescoresSocketUrl =
    //   socketProtocol + "//" + window.location.hostname + ":443" + "/livescores";
    // const socket = new WebSocket(livescoresSocketUrl);
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/livescores`
    );

    socket.onopen = () => socket.send("");

    socket.onmessage = (e: any) => {
      console.log(JSON.parse(e?.data));

      setLivescores(JSON.parse(e?.data));
    };
  }, []);

  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);

  const dropdownHandler = (current: HomeTypes) =>
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));
  const closeDropDown = () => setCurrentDropDownToShow(null);

  const { data, message, succeeded } = livescores;

  return (
    <div className="main-wrapper">
      <div className={styles.wrapper}>
        <div
          className={[
            styles.positionedElementHide,
            currentDropDownToShow?.length && styles.positionedElement,
          ].join(" ")}
          onClick={closeDropDown}
        ></div>

        {/* <section className={styles.allLeagues}>
          <Leagues />
        </section> */}

        <main className={styles.main}>
          {/* <div className={styles.dropDowns}>
            <div
              className={styles.dropDownButton}
              onClick={() => dropdownHandler("all-cup")}
            >
              <DropDownButton currentValue="All Cup" />
            </div>

            <div
              onClick={() => dropdownHandler("calendar")}
              className={styles.dropDownButton}
            >
              <DropDownButton currentValue="May, 29" />
            </div>

            <div
              className={[
                styles.dropDownContent,
                currentDropDownToShow === "all-cup" && styles.allCupDropDown,
              ].join(" ")}
            >
              <Leagues />
            </div>

            <div
              className={[
                styles.dropDownContent,
                currentDropDownToShow === "calendar" && styles.calendarDropDown,
              ].join(" ")}
            >
              <Calendar />
            </div>
          </div> */}

          <LiveScores data={data} message={message} succeeded={succeeded} />
        </main>

        {/* <div className={styles.aside}>
          <Wrapper noBackground gap={30}>
            <>
              <div className={styles.calendar}>
                <Calendar />
              </div>

              <div className={styles.newsPreview}>
                <NewsPreview />
              </div>
            </>
          </Wrapper>
        </div> */}
      </div>
    </div>
  );
}
