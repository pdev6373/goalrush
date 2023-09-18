import { Metadata } from "next";
import { AllMatch as AllFootballMatch } from "@/components";

export const metadata: Metadata = {
  title: "Goalrush - All Matches",
  description:
    "Experience the thrill of all matches, real-time scores, stats, and updates with Goalrush!",
};

export default function AllMatch() {
  return <AllFootballMatch />;
}
