import { NavType } from "@/types";

const Nav: NavType[] = [
  {
    name: "Live Scores",
    route: "/",
  },
  {
    name: "All Match",
    route: "/all-match",
  },
  {
    name: "Video",
    route: "/video",
  },
  {
    name: "News",
    routes: [
      {
        name: "Latest News",
        route: "/latest-news",
      },
      {
        name: "Transfers",
        route: "/transfers",
      },
    ],
  },
  {
    name: "Stats",
    route: "/stats",
  },
  {
    name: "Rankings",
    route: "/rankings",
  },
];

export default Nav;
