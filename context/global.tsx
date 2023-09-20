"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { LayoutType, TournamentCategoriesType } from "@/types";

type CompetitionType = {
  data: TournamentCategoriesType[];
  message: string;
  succeeded: boolean;
};

type GLobalContextType = {
  competitions: CompetitionType;
  setCompetitions: Dispatch<SetStateAction<CompetitionType>>;
  loadingCompetitions: boolean;
  setLoadingCompetitions: Dispatch<SetStateAction<boolean>>;
  calendarValue: Date;
  setCalendarValue: Dispatch<SetStateAction<Date>>;
};

const initialCompetitions = {
  data: [],
  message: "",
  succeeded: false,
};

export const GlobalContext = createContext<GLobalContextType>({
  competitions: initialCompetitions,
  setCompetitions: () => initialCompetitions,
  loadingCompetitions: true,
  setLoadingCompetitions: () => true,
  calendarValue: new Date(),
  setCalendarValue: () => new Date(),
});

export default function GlobalProvider({ children }: LayoutType) {
  const [competitions, setCompetitions] =
    useState<CompetitionType>(initialCompetitions);
  const [loadingCompetitions, setLoadingCompetitions] = useState(true);
  const [calendarValue, setCalendarValue] = useState<Date>(new Date());

  return (
    <GlobalContext.Provider
      value={{
        competitions,
        setCompetitions,
        calendarValue,
        setCalendarValue,
        loadingCompetitions,
        setLoadingCompetitions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
