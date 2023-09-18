"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { PageContext } from "../layout";
import { LivescoresContext } from "../../../context/livescores";

export default function Livescores() {
  const date = useContext(PageContext);
  const {
    livescores: { data, message, succeeded },
    loadingLivescores,
  } = useContext(LivescoresContext);

  return (
    <LiveScores
      data={data}
      message={message}
      succeeded={succeeded}
      date={date}
      loading={loadingLivescores}
    />
  );
}
