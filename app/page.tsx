"use client";
import { use, useState } from "react";
import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
  DropDownButton,
} from "@/components";
import styles from "./page.module.css";
import { HomeTypes } from "@/types";
import { useFetch } from "@/hooks";

export default function Livescores() {
  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);
  const { fetchData } = useFetch();

  const dropdownHandler = (current: HomeTypes) =>
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));
  const closeDropDown = () => setCurrentDropDownToShow(null);

  // const livescores = use(
  //   fetchData({
  //     url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/livescores`,
  //   })
  // );

  const livescores = { data: {} };

  console.log(livescores);

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

          <LiveScores livescores={livescores.data} />
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
