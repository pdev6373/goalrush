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
  const { setCompetitions, calendarValue, setLoadingCompetitions } =
    useContext(GlobalContext);
  const [loadingLivescores, setLoadingLivescores] = useState(true);
  const { push } = useRouter();
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
      const query = "";
      setIsTodayCometitionsSet(false);

      push(`${pathname}${query}`);

      setLoadingLivescores(true);
      setLoadingCompetitions(true);
      setLivescores(initialLivescores);

      socket.onopen = () =>
        socket.send(JSON.stringify(format(new Date(), "yyyy-MM-dd")));
      socket.onerror = () => {
        setLoadingLivescores(false);
        setLoadingCompetitions(false);
        setLivescores({
          data: [],
          message: "An error occurred",
          succeeded: false,
        });
      };
      socket.onmessage = (e: any) => {
        if (!isToday()) {
          socket.close();
          return;
        }

        const response: LiveScoresType = JSON.parse(e?.data);

        isToday() && setLivescores(response);
        setLoadingLivescores(false);
        !isTodayCompetitionsSetRef.current &&
          setCompetitions(setCompetitionsData(response));
        setLoadingCompetitions(false);
        setIsTodayCometitionsSet(true);
      };
    } else {
      socket.close();

      current.delete("date");
      current.set("date", formattedCalendarDate());
      const query = `?${current.toString()}`;

      push(`${pathname}${query}`);

      (async () => {
        try {
          setLoadingLivescores(true);
          setLoadingCompetitions(true);
          setLivescores(initialLivescores);

          const response: LiveScoresType = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_ENDPOINT_HTTP}/livescores${query}`
            )
          ).json();

          setLivescores(response);
          setCompetitions(setCompetitionsData(response));
        } catch (e) {
          console.error(e);
          setLivescores({
            data: [],
            message: "An error occurred",
            succeeded: false,
          });
        } finally {
          setLoadingLivescores(false);
          setLoadingCompetitions(false);
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
