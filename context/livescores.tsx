"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { LayoutType, LiveScoresType, TournamentCategoriesType } from "@/types";
import { GlobalContext } from "./global";
import { format } from "date-fns";
import { useRouter, usePathname } from "next/navigation";

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
  const { competitions, setCompetitions, calendarValue } =
    useContext(GlobalContext);
  const [loadingLivescores, setLoadingLivescores] = useState(true);
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const today = format(new Date(), "yyyy-MM-dd");

  const formattedCalendarDate = () =>
    format(new Date(calendarValue), "yyyy-MM-dd");
  const isToday = () => formattedCalendarDate() === today;

  useEffect(() => {
    setLoadingLivescores(true);

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
      console.log(isToday());
      console.log(calendarValue);

      isToday() && setLivescores(JSON.parse(e?.data));
      setLoadingLivescores(false);
    };
  }, []);

  useEffect(() => {
    if (isToday()) {
      replace("/");
      return;
    }

    setLoadingLivescores(true);
    const queryValue = `?date=${formattedCalendarDate()}`;
    push(`${pathname}${queryValue}`);

    (async () => {
      try {
        const response: LiveScoresType = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_HTTP}/livescores${queryValue}`
          )
        ).json();

        setLivescores(response);

        setCompetitions({
          data: response.data
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
                tournaments.findIndex(
                  (item) => item.name === tournament.name
                ) === index
            ),
          message: livescores.message,
          succeeded: livescores.succeeded,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingLivescores(false);
      }
    })();
  }, [calendarValue]);

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
