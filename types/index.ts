import { ReactNode, CSSProperties } from "react";

// type MatchTimeType = {
//   initial: number;
//   max: number;
//   extra: number;
//   currentPeriodStartTimestamp: number;
// };

// export type MatchStatusTypeType =
//   | "inprogress"
//   | "notstarted"
//   | "postponed"
//   | "finished"
//   | "canceled";

// export type MatchStatusDescriptionType =
//   | "1st half"
//   | "2nd half"
//   | "Halftime"
//   | "Not started"
//   | "Postponed"
//   | "Ended"
//   | "Canceled";

// type MatchStatusType = {
//   code: number;
//   description: MatchStatusDescriptionType;
//   type: MatchStatusTypeType;
// };

export type MatchStatusType =
  | "Finished"
  | "Postponed"
  | "Cancelled"
  | "Half Time"
  | string;

export type LayoutType = {
  children: ReactNode;
};

export type NavRoutesType = {
  name: "Latest News" | "Transfers";
  route: "/latest-news" | "/transfers";
};

export type NavRouteType =
  | "/"
  | "/all-match"
  | "/video"
  | "/news"
  | "/stats"
  | "/rankings"
  | NavRoutesType[];

export type NavType = {
  name: "Live Scores" | "All Match" | "Video" | "News" | "Stats" | "Rankings";
  route?: NavRouteType;
  routes?: NavRoutesType[];
};

type WrapperSpacingType = 0 | 8 | 10 | 12 | 20 | 30;

export type WrapperType = {
  children: JSX.Element;
  padding?: WrapperSpacingType;
  paddingStatic?: WrapperSpacingType;
  gap?: WrapperSpacingType;
  gapStatic?: WrapperSpacingType;
  noBackground?: boolean;
  extraStyles?: CSSProperties | undefined;
  radius?: "none" | "300" | "main" | "500" | "600";
  center?: boolean;
};

// type LiveScoreDetailsType = {
//   stageId: string;
//   stageName: string;
//   stageRoute: string;
//   competitionName: string;
//   competitionRoute: string;
//   time: string;
// };

type LiveScoreDetailsType = {
  // stageId: string;
  // stageName: string;
  // stageRoute: string;
  // competitionName: string;
  // competitionRoute: string;
  // time: string;

  // tournamentId: string;
  // tournamentRoute: string;
  tournamentName: string;
  tournamentSlug: string;
  time: string;
  competitionImage: string;
  // competitionId: string;
  // competitionRoute: string;
  competitionName: string;
  competitionSlug: string;
};

// type LiveScoreTeamDetailsType = {
//   id: string;
//   name: string;
//   score: number;
//   logo: string;
// };

type LiveScoreTeamDetailsType = {
  id: string;
  route: string;
  name: string;
  shortName: string;
  colors: object;
  code: string;
  logo: string;
};

// type LiveScoreEventType = {
//   eventId: string;
//   isLive: boolean;
//   winningTeam: "home" | "away" | "none";
//   time: string;
//   startTime: number;
//   homeTeam: LiveScoreTeamDetailsType;
//   awayTeam: LiveScoreTeamDetailsType;
// };

type LiveScoreEventType = {
  // eventId: string;
  // isLive: boolean;
  // winningTeam: "home" | "away" | "none";
  // time: string;
  // startTime: number;
  // homeTeam: LiveScoreTeamDetailsType;
  // awayTeam: LiveScoreTeamDetailsType;

  id: string;
  route: string;
  time: MatchStatusType;
  startTime: string;
  changeTime: number;
  homeTeam: LiveScoreTeamDetailsType;
  awayTeam: LiveScoreTeamDetailsType;
  score: string;
};

export type AllLiveScoresType = {
  details: LiveScoreDetailsType;
  // events: LiveScoreEventType[];
  events: LiveScoreEventType[];
};

export type LiveScoresType = {
  succeeded: boolean;
  message: string;
  data: AllLiveScoresType[];
};

export type LiveScoresWithDateType = {
  succeeded: boolean;
  message: string;
  data: AllLiveScoresType[];
  loading: boolean;
  date: Date;
};

export type NewsType = {
  id: string;
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

export type VideosType = {
  thumbnail: string;
  date: string;
  title: string;
};

export type VideoType = {
  thumbnail: string;
  date: string;
  title: string;
  route: string;
};

type TextDimensionType = 12 | 14 | 16 | 18 | 20 | 22;
export type TextType = {
  children: string;
  type: "heading" | "body";
  size?: TextDimensionType;
  sizeStatic?: TextDimensionType;
  weight: "300" | "400" | "600" | "700";
  variation:
    | "main"
    | "main-300"
    | "secondary"
    | "alert"
    | "alert-300"
    | "alert-200"
    | "yellow"
    | "active";
  extraStyles?: CSSProperties | undefined;
};

type TeansferBodyClubType = {
  logo: string;
  name: string;
};

type TeansferBodyNationalityType = {
  country: string;
  logo: string;
};

export type TransferBodyType = {
  image: string;
  name: string;
  nationality: TeansferBodyNationalityType;
  position: string;
  age: number;
  reason: string;
  previousClub: TeansferBodyClubType;
  currentClub: TeansferBodyClubType;
};

export type PlayerCardType = {
  type: "transfer" | "rumours";
  id: number;
  body: TransferBodyType;
};

export type TransferType = {
  id: string;
  category: string;
  body: TransferBodyType[];
};

export type FetchType = {
  url: string;
  method?: "GET" | "POST";
  payload?: object;
};

export type CalendarType = {
  value: Date;
  onChange: any;
};

export type TournamentCategoriesType = {
  name: string;
  slug: string;
  flag: string;
};

export type LivescoresTournamentType = {
  params: {
    tournament: string;
  };
};
