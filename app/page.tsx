"use client";
import { useState } from "react";
import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
} from "@/components";
import styles from "./page.module.css";
import DropDownButton from "@/components/dropDownButton";
import { HomeTypes } from "@/types";

export default function Home() {
  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);

  const calendarDropdownHandler = (current: HomeTypes) =>
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));

  return (
    <div className={styles.wrapper}>
      <section className={styles.allLeagues}>
        <Leagues />
      </section>

      <main className={styles.main}>
        <div className={styles.dropDowns}>
          <div className={styles.dropDownWapper}>
            <div onClick={() => calendarDropdownHandler("all-cup")}>
              <DropDownButton currentValue="All Cup" />
            </div>
            <div
              className={[
                styles.dropDownContent,
                currentDropDownToShow === "all-cup" &&
                  currentDropDownToShow &&
                  styles.allCupDropDown,
              ].join(" ")}
            >
              <Leagues />
            </div>
          </div>

          <div className={styles.dropDownWapper}>
            <div onClick={() => calendarDropdownHandler("calendar")}>
              <DropDownButton currentValue="May, 29" />
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
        </div>

        <LiveScores />
      </main>

      <div className={styles.aside}>
        <Wrapper noBackground gap={30}>
          <>
            <div className={styles.calendar}>
              <Calendar />
            </div>
            <NewsPreview />
          </>
        </Wrapper>
      </div>
    </div>
  );
}
