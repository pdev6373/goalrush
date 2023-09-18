"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { PageContext } from "../../layout";
import { LivescoresTournamentType } from "@/types";
import { LivescoresContext } from "@/context/livescores";

export default function Livescores({
  params: { tournament },
}: LivescoresTournamentType) {
  const date = useContext(PageContext);
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);

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
      date={date}
      loading={loadingLivescores}
    />
  );
}
