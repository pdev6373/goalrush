"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { LayoutType, LiveScoresType, TournamentCategoriesType } from "@/types";
import { GlobalContext } from "./global";

const initialLivescores = {
  data: [],
  message: "",
  succeeded: false,
};

type LiveScoresContextType = {
  livescores: LiveScoresType;
  loadingLivescores: boolean;
};

export const LivescoresContext = createContext<LiveScoresContextType>({
  livescores: initialLivescores,
  loadingLivescores: true,
});

export default function LivescoresProvider({ children }: LayoutType) {
  const [livescores, setLivescores] =
    useState<LiveScoresType>(initialLivescores);
  const { competitions, setCompetitions } = useContext(GlobalContext);
  const [loadingLivescores, setLoadingLivescores] = useState(true);

  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT_WS}/livescores`
    );

    socket.onerror = (e) => {
      if (e.type === "error") {
        setLoadingLivescores(false);
      }
    };

    socket.onopen = () => socket.send("");
    socket.onmessage = (e: any) => {
      setLivescores(JSON.parse(e?.data));
      setLoadingLivescores(false);
    };
  }, []);

  !competitions?.data?.length &&
    livescores?.data?.length &&
    setCompetitions({
      data: livescores.data
        .map(
          (tournament) =>
            ({
              name: tournament.details.competitionName,
              slug: tournament.details.competitionSlug,
              flag: tournament.details.competitionImage,
            } as TournamentCategoriesType)
        )
        .filter(
          (tournament, index, tournaments) =>
            tournaments.findIndex((item) => item.name === tournament.name) ===
            index
        ),
      message: livescores.message,
      succeeded: livescores.succeeded,
    });

  return (
    <LivescoresContext.Provider
      value={{
        livescores,
        loadingLivescores,
      }}
    >
      {children}
    </LivescoresContext.Provider>
  );
}
