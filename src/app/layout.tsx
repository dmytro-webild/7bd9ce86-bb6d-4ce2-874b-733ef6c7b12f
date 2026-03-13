import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameHub Pro - Esports Tournaments & Gaming Events",
  description: "Discover esports tournaments across PUBG Mobile, Roblox, Brawl Stars & more. Live broadcasts, competitive gaming events, and global prize pools.",
  keywords: "esports tournaments, gaming competitions, PUBG Mobile, Roblox, Brawl Stars, competitive gaming, live broadcasts, gaming events, prize pools",
  openGraph: {
    title: "GameHub Pro - Gaming Tournaments & Competitions",
    description: "Join millions of competitive gamers worldwide. Participate in tournaments, watch live broadcasts, and compete for prizes.",
    siteName: "GameHub Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHub Pro - Esports Tournaments",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${manrope.variable} ${dmSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}