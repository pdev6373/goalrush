"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { LivescoresContext } from "@/context/livescores";
import { GlobalContext } from "@/context/global";

export default function Livescores() {
  const { calendarValue } = useContext(GlobalContext);
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);

  return (
    <LiveScores
      data={data}
      message={message}
      succeeded={succeeded}
      date={calendarValue}
      loading={loadingLivescores}
    />
  );
}
