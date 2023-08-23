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
  image: string;
  name: string;
  route: string;
};
