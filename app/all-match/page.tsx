"use client";
import { useState } from "react";
import { Calendar, LiveScores, DropDownButton } from "@/components";
import styles from "./page.module.css";

export default function AllMatch() {
  const [showCalendar, setShowCalendar] = useState(false);

  const dropdownHandler = () => setShowCalendar((prev) => !prev);

  return (
    <div className={styles.wrapper}>
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
            <Calendar />
          </div>
        </div>

        <LiveScores />
      </main>

      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  );
}
