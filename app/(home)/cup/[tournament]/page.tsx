"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { PageContext } from "../../layout";
import { LivescoresTournamentType } from "@/types";

export default function Livescores({
  params: { tournament },
}: LivescoresTournamentType) {
  const { data, date, message, succeeded } = useContext(PageContext);

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
    />
  );
}
