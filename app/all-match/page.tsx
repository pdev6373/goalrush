"use client";
import { useState, useEffect } from "react";
import { Calendar, LiveScores, DropDownButton } from "@/components";
import styles from "./page.module.css";
import { LiveScoresType } from "@/types";

export default function AllMatch() {
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [livescores, setLivescores] = useState<LiveScoresType>({
    data: [],
    message: "",
    succeeded: false,
  });

  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/livescores`
    );

    socket.onopen = () => socket.send("");
    socket.onmessage = (e: any) => {
      setLivescores(JSON.parse(e?.data));
    };
  }, []);

  const dropdownHandler = () => setShowCalendar((prev) => !prev);
  const calendarCloseHandler = () => setShowCalendar(false);

  const { data, message, succeeded } = livescores;

  return (
    <div className="main-wrapper">
      <div className={styles.wrapper}>
        <div
          className={[
            styles.positionedElementHide,
            showCalendar && styles.positionedElement,
          ].join(" ")}
          onClick={calendarCloseHandler}
        ></div>

        <main className={styles.liveScores}>
          <div className={styles.dropDownWapper}>
            <div onClick={dropdownHandler}>
              <DropDownButton currentValue="May, 29" />
            </div>

            <div
              className={[
                styles.dropDownContent,
                showCalendar && styles.calendarDropDown,
              ].join(" ")}
            >
              <Calendar setValue={setCalendarValue} />
            </div>
          </div>

          <LiveScores
            data={data}
            message={message}
            succeeded={succeeded}
            date={calendarValue}
          />
        </main>

        <div className={styles.calendar}>
          <Calendar setValue={setCalendarValue} />
        </div>
      </div>
    </div>
  );
}
