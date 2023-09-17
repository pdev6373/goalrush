"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { PageContext } from "./layout";
import { LivescoresContext } from "../context";

export default function Livescores() {
  const date = useContext(PageContext);
  const { data, message, succeeded } = useContext(LivescoresContext);

  return (
    <LiveScores
      data={data}
      message={message}
      succeeded={succeeded}
      date={date}
    />
  );
}
