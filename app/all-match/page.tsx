"use client";
import { useState, useContext } from "react";
import { LivescoresContext } from "../../context/livescores";
import { Calendar, LiveScores, DropDownButton } from "@/components";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Match - Goalrush",
  description:
    "We harness the boundless power of technology and innovation and elevate your business performance. Your Vision brought to life by Our Expertise.",
};

export default function AllMatch() {
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);

  const dropdownHandler = () => setShowCalendar((prev) => !prev);
  const calendarCloseHandler = () => setShowCalendar(false);

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
            loading={loadingLivescores}
          />
        </main>

        <div className={styles.calendar}>
          <Calendar setValue={setCalendarValue} />
        </div>
      </div>
    </div>
  );
}
