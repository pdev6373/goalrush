"use client";
import { useContext } from "react";
import { LiveScores } from "@/components";
import { PageContext } from "./layout";

export default function Livescores() {
  const { data, date, message, succeeded } = useContext(PageContext);
  return (
    <LiveScores
      data={data}
      message={message}
      succeeded={succeeded}
      date={date}
    />
  );
}
