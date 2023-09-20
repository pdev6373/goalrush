"use client";
import { useState, useContext } from "react";
import { LivescoresContext } from "@/context/livescores";
import { Calendar, LiveScores, DropDownButton } from "@/components";
import styles from "./index.module.css";
import { GlobalContext } from "@/context/global";
import format from "date-fns/format";

export default function AllMatch() {
  const [showCalendar, setShowCalendar] = useState(false);
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);
  const { calendarValue, setCalendarValue } = useContext(GlobalContext);

  const formattedDate = format(new Date(calendarValue), "MMM, dd");

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
              <DropDownButton currentValue={formattedDate} />
            </div>

            <div
              className={[
                styles.dropDownContent,
                showCalendar && styles.calendarDropDown,
              ].join(" ")}
            >
              <Calendar onChange={setCalendarValue} value={calendarValue} />
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
          <Calendar onChange={setCalendarValue} value={calendarValue} />
        </div>
      </div>
    </div>
  );
}
