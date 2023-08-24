import { CSSProperties } from "react";

export type NavRouteType =
  | "/"
  | "/all-match"
  | "/video"
  | "/news"
  | "/stats"
  | "/rankings";

export type NavType = {
  name: "Live Scores" | "All Match" | "Video" | "News" | "Stats" | "Rankings";
  route: NavRouteType;
};

export type LeagueType = {
  logo: string;
  name: string;
  route: string;
};

type WrapperSpacingType = 0 | 8 | 10 | 12 | 14 | 20 | 30;

export type WrapperType = {
  children: JSX.Element;
  padding?: WrapperSpacingType;
  paddingBlock?: WrapperSpacingType;
  gap?: WrapperSpacingType;
  noBackground?: boolean;
  extraStyles?: CSSProperties | undefined;
};

type LiveScoreDetailsType = {
  league: string;
  time: string;
};

type LiveScoreTeamDetailsType = {
  name: string;
  logo: string;
  score: number;
};

type LiveScoreTeamType = {
  isLive: boolean;
  time: string;
  winningTeam: "home" | "away" | "none";
  homeTeam: LiveScoreTeamDetailsType;
  awayTeam: LiveScoreTeamDetailsType;
};

export type LiveScoreType = {
  details: LiveScoreDetailsType;
  teams: LiveScoreTeamType[];
};

export type NewsType = {
  image: string;
  title: string;
  body: string;
  time: string;
};

export type SectionHeadingType = {
  children: string;
};

export type DropDownButtonType = {
  currentValue: string;
};

export type HomeTypes = "calendar" | "all-cup" | null;
