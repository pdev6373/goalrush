"use client";
import { useState, createContext } from "react";
import {
  Calendar,
  Leagues,
  NewsPreview,
  Wrapper,
  DropDownButton,
} from "@/components";
import { HomeTypes, LayoutType } from "@/types";
import styles from "./layout.module.css";

export const PageContext = createContext({} as Date);

export default function Transfersayout({ children }: LayoutType) {
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());
  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);

  const closeDropDown = () => setCurrentDropDownToShow(null);
  const dropdownHandler = (current: HomeTypes) =>
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));

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
              className={styles.dropDownButton}
              onClick={() => dropdownHandler("calendar")}
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
              <Calendar setValue={setCalendarValue} />
            </div>
          </div>

          <PageContext.Provider value={calendarValue}>
            {children}
          </PageContext.Provider>
        </main>

        <div className={styles.aside}>
          <Wrapper noBackground gap={30}>
            <>
              <div className={styles.calendar}>
                <Calendar setValue={setCalendarValue} />
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
