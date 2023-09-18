import type { Metadata } from "next";
import { Header } from "@/components";
import { LayoutType } from "@/types";
import localFont from "next/font/local";
import LivescoresProvider from "@/context/livescores";
import GlobalProvider from "@/context/global";
import styles from "./layout.module.css";
import "./globals.css";

const segoeui = localFont({
  src: [
    {
      path: "../public/fonts/SegoeUI-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/SegoeUI.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/SegoeUI-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/SegoeUI-Bold.woff2",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Goalrush",
  description:
    "Experience the Thrill of Every Kick, Goal, and Victory Unfold in Real-Time - Your Premier Destination for Football Livescores!",
  keywords: [
    "football",
    "livescores",
    "livescore",
    "world cup",
    "champions league",
    "final",
    "premier league",
    "laliga",
    "serie a",
    "bundesliga",
    "league 1",
    "messi",
    "leonel messi",
    "ronaldo",
    "christiano ronaldo",
    "current livescore",
    "head to head",
    "transfer",
    "news",
  ],
  openGraph: {
    title: "Goalrush: Where Football Livescores Come Alive!",
    description:
      "Stay in the know with Goalrush - Your go-to destination for real-time football livescores, match updates, and all the action from the pitch!",
    // images: "http://goalrush.vercel.app/assets/news-two.png",
    images: "http://localhost:3000/og-image.png",
    type: "website",
    url: "https://goalrush.vercel.app/",
  },
  twitter: {
    title: "Goalrush: Where Football Livescores Come Alive!",
    description:
      "Stay in the know with Goalrush - Your go-to destination for real-time football livescores, match updates, and all the action from the pitch!",
    // images: "https://goalrush.vercel.app/assets/news-two.png",
    images: "http://localhost:3000/og-image.png",
    card: "summary_large_image",
    // site: "@goalrush",
  },
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body className={segoeui.className}>
        <div className={styles.header}>
          <Header />
        </div>

        <GlobalProvider>
          <LivescoresProvider>{children}</LivescoresProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
