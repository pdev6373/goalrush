"use client";
import { useState, useContext, useEffect } from "react";
import {
  Calendar,
  Leagues,
  NewsPreview,
  Wrapper,
  DropDownButton,
} from "@/components";
import { usePathname } from "next/navigation";
import { HomeTypes, LayoutType } from "@/types";
import { GlobalContext } from "@/context/global";
import styles from "./layout.module.css";

export default function Transfersayout({ children }: LayoutType) {
  const pathname = usePathname();

  const [currentDropDownToShow, setCurrentDropDownToShow] =
    useState<HomeTypes>(null);
  const { competitions, calendarValue, setCalendarValue } =
    useContext(GlobalContext);
  const [currentTournament, setCurrentTournament] = useState(
    currentTournamentHandler()
  );

  useEffect(() => {
    closeDropDown();
    setCurrentTournament(currentTournamentHandler());
  }, [pathname, competitions.data]);

  const dropdownHandler = (current: HomeTypes) =>
    competitions?.data?.length &&
    setCurrentDropDownToShow((prev) => (prev === current ? null : current));

  function closeDropDown() {
    setCurrentDropDownToShow(null);
  }

  function currentTournamentHandler() {
    if (!pathname.includes("/livescores")) return "All Cup";

    const pathNameArray = pathname.split("/");
    const pathName = pathNameArray[pathNameArray.length - 1];
    const updatedPathName = pathName.split("-").join(" ");

    return updatedPathName;
  }

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
              <DropDownButton currentValue={currentTournament} />
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
              <Calendar onChange={setCalendarValue} value={calendarValue} />
            </div>
          </div>

          {children}
        </main>

        <div className={styles.aside}>
          <Wrapper noBackground gap={30}>
            <>
              <div className={styles.calendar}>
                <Calendar onChange={setCalendarValue} value={calendarValue} />
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
