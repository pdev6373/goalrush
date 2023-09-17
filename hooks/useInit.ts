"use client";
import { useState } from "react";

export default function useInit(initCallback: any) {
  const [initialized, setInitialized] = useState(false);

  if (!initialized) {
    initCallback();
    setInitialized(true);
  }
}
