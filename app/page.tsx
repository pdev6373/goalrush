"use client";
import { use, useEffect, useState } from "react";
import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
  DropDownButton,
} from "@/components";
import styles from "./page.module.css";
import { HomeTypes, LiveScoresType } from "@/types";
import { useFetch } from "@/hooks";
// import { io } from "socket.io-client";

export default function Livescores() {
  // const [socket, setSocket] = useState<any>(null);
  const [allLivescores, setAllLivescores] = useState([]);

  useEffect(() => {
    const socketProtocol =
      window.location.protocol === "https:" ? "wss:" : "ws:";
    const echoSocketUrl =
      socketProtocol + "//" + window.location.hostname + "/echo/";
    const socket = new WebSocket(echoSocketUrl);

    socket.onopen = () => {
      socket.send("Here's some text that the server is urgently awaiting!");
    };

    socket.onmessage = (e: any) => {
      console.log("Message from server:", e?.data);
    };
  }, []);

  // useEffect(() => {
  //   setSocket(io("http://localhost:3501"));
  // }, []);

  // useEffect(() => {
  //   socket?.on("livescores", (message: any) => {
  //     console.log(message);
  //   });
  // }, [socket]);

  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);
  const { fetchData } = useFetch();

  const dropdownHandler = (current: HomeTypes) =>
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));
  const closeDropDown = () => setCurrentDropDownToShow(null);

  const livescores: LiveScoresType = use(
    fetchData({
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/livescores`,
    }) as any // remove as any
  );

  const { data, message, succeeded } = livescores;

  console.log(data);

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

        <section className={styles.allLeagues}>
          <Leagues />
        </section>

        <main className={styles.main}>
          <div className={styles.dropDowns}>
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
          </div>

          <LiveScores data={data} message={message} succeeded={succeeded} />
        </main>

        <div className={styles.aside}>
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
        </div>
      </div>
    </div>
  );
}
