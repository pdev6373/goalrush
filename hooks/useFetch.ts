import { FetchType } from "@/types";
import { NextResponse } from "next/server";

export default function useFetch() {
  const fetchData = async ({ url, method = "GET", payload }: FetchType) => {
    // const res = await fetch(url, {
    //   method: method,
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "API-Key": process.env.DATA_API_KEY,
    //   },
    //   body: JSON.stringify(payload),
    //   cache: "no-store",
    // });

    // const data = await res.json();

    // return NextResponse.json(data);

    // return data;
    return true;
  };

  return { fetchData };
}
