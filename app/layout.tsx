import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components";
import { LayoutType } from "@/types";
import LivescoresProvider from "@/context/livescores";
import localFont from "next/font/local";
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
    title:
      "Goalrush - Your Ultimate Destination for Real-time Football Scores, News, Transfers, Stats, Videos, and Rankings!",
    description:
      "Experience the thrill of football like never before with Goalrush! Stay updated with live scores, immerse yourself in the latest football news, track transfers, explore player and club stats, enjoy captivating football videos, and dive into team rankings. The heart of football, all in one place. Join us now!",
    images: "http://goal-rush.vercel.app/og-image.png",
    type: "website",
    url: "https://goalrush.vercel.app/",
  },
  twitter: {
    title:
      "Goalrush - Your Ultimate Destination for Real-time Football Scores, News, Transfers, Stats, Videos, and Rankings!",
    description:
      "Experience the thrill of football like never before with Goalrush! Stay updated with live scores, immerse yourself in the latest football news, track transfers, explore player and club stats, enjoy captivating football videos, and dive into team rankings. The heart of football, all in one place. Join us now!",
    images: "http://goal-rush.vercel.app/og-image.png",
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
        <div className={styles.mainContent}>
          <GlobalProvider>
            <LivescoresProvider>{children}</LivescoresProvider>
          </GlobalProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
