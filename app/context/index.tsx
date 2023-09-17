"use client";
import { createContext, useState, useEffect } from "react";
import { LayoutType, LiveScoresType } from "@/types";

export const LivescoresContext = createContext({} as LiveScoresType);

export default function LivescoresProvider({ children }: LayoutType) {
  const [livescores, setLivescores] = useState<LiveScoresType>({
    data: [],
    message: "",
    succeeded: false,
  });

  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT_WS}/livescores`
    );

    socket.onopen = () => socket.send("");
    socket.onmessage = (e: any) => {
      setLivescores(JSON.parse(e?.data));
    };
  }, []);

  return (
    <LivescoresContext.Provider value={livescores}>
      {children}
    </LivescoresContext.Provider>
  );
}
