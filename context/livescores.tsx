"use client";
import { createContext, useState, useEffect, useContext, useRef } from "react";
import { LayoutType, LiveScoresType, TournamentCategoriesType } from "@/types";
import { GlobalContext } from "./global";
import { format } from "date-fns";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const today = format(new Date(), "yyyy-MM-dd");
  const calendarValueRef = useRef(calendarValue);
  const [isTodayCompetitionsSet, setIsTodayCometitionsSet] = useState(false);
  const isTodayCompetitionsSetRef = useRef(false);

  const setCompetitionsData = (comeptitions: LiveScoresType) => ({
    data: comeptitions.data
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
    message: comeptitions.message,
    succeeded: comeptitions.succeeded,
  });

  useEffect(() => {
    isTodayCompetitionsSetRef.current = isTodayCompetitionsSet;
  }, [isTodayCompetitionsSet]);

  useEffect(() => {
    calendarValueRef.current = calendarValue;

    const formattedCalendarDate = () =>
      format(new Date(calendarValueRef.current), "yyyy-MM-dd");
    const isToday = () => formattedCalendarDate() === today;

    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT_WS}/livescores`
    );

    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (isToday()) {
      current.delete("date");
      const query = "";
      setIsTodayCometitionsSet(false);

      push(`${pathname}${query}`);

      setLoadingLivescores(true);

      socket.onerror = () => setLoadingLivescores(false);
      socket.onopen = () => socket.send("Hello");
      socket.onmessage = (e: any) => {
        isToday() && setLivescores(JSON.parse(e?.data));
        setLoadingLivescores(false);
        !isTodayCompetitionsSetRef.current &&
          setCompetitions(setCompetitionsData(JSON.parse(e?.data)));
        setIsTodayCometitionsSet(true);
      };
    } else {
      socket.close();

      current.set("date", formattedCalendarDate());
      const query = `?${current.toString()}`;

      push(`${pathname}${query}`);

      (async () => {
        try {
          setLoadingLivescores(true);

          const response: LiveScoresType = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_ENDPOINT_HTTP}/livescores${query}`
            )
          ).json();

          setLivescores(response);

          setCompetitions(setCompetitionsData(response));
        } catch (e) {
          console.log(e);
        } finally {
          setLoadingLivescores(false);
        }
      })();
    }
  }, [calendarValue]);

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
