"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { LivescoresTournamentType } from "@/types";
import { LivescoresContext } from "@/context/livescores";
import { GlobalContext } from "@/context/global";

export default function Livescores({
  params: { tournament },
}: LivescoresTournamentType) {
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);
  const { calendarValue } = useContext(GlobalContext);

  const updatedData = data.filter(
    (dataTournament) =>
      dataTournament.details.competitionSlug.toLowerCase() ===
      tournament.toLowerCase()
  );

  return (
    <LiveScores
      data={updatedData}
      message={message}
      succeeded={succeeded}
      date={calendarValue}
      loading={loadingLivescores}
    />
  );
}
