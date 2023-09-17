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
};

const initialCompetitions = {
  data: [],
  message: "",
  succeeded: false,
};

export const GlobalContext = createContext<GLobalContextType>({
  competitions: initialCompetitions,
  setCompetitions: () => initialCompetitions,
});

export default function GlobalProvider({ children }: LayoutType) {
  const [competitions, setCompetitions] =
    useState<CompetitionType>(initialCompetitions);

  return (
    <GlobalContext.Provider
      value={{
        competitions,
        setCompetitions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
