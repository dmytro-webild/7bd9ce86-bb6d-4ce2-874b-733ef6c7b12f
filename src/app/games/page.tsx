"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Users } from "lucide-react";

export default function GamesPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Games", id: "games" },
    { name: "Tournaments", id: "tournaments" },
    { name: "Schedule", id: "schedule" },
    { name: "Community", id: "community" },
  ];

  const footerColumns = [
    {
      title: "Platform",
      items: [
        { label: "Home", href: "/" },
        { label: "Games", href: "/games" },
        { label: "Tournaments", href: "/tournaments" },
        { label: "Schedule", href: "/schedule" },
      ],
    },
    {
      title: "Community",
      items: [
        { label: "Discord", href: "https://discord.gg/gamehubpro" },
        { label: "Twitter", href: "https://twitter.com/gamehubpro" },
        { label: "YouTube", href: "https://youtube.com/gamehubpro" },
        { label: "Twitch", href: "https://twitch.tv/gamehubpro" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Tournament Rules", href: "/rules" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Help Center", href: "/help" },
        { label: "Report Issue", href: "/report" },
        { label: "Feedback", href: "/feedback" },
        { label: "Email Support", href: "mailto:support@gamehub.pro" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="none"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="GameHub Pro"
          bottomLeftText="Competitive Gaming Platform"
          bottomRightText="tournaments@gamehub.pro"
        />
      </div>

      <div id="games-hero" data-section="games-hero">
        <HeroLogoBillboardSplit
          logoText="Popular Games"
          description="Explore all the featured esports titles with active tournaments, competitive communities, and exciting opportunities to showcase your skills."
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Back to Home", href: "/" },
            { text: "Browse Tournaments", href: "/tournaments" },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="reverse"
          imageSrc="http://img.b2bpic.net/free-photo/nervous-woman-screaming-husband-while-he-is-playing-space-shooter-videogame-rgb-powerful-computer-streaming-online-competition-pro-cyber-with-headset-performing-virtual-tournament_482257-12460.jpg"
          imageAlt="Popular Gaming Titles"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="Games page hero section"
        />
      </div>

      <div id="all-games" data-section="all-games">
        <ProductCardThree
          title="Complete Game Library"
          description="Discover all esports titles available on GameHub Pro with detailed tournament schedules and competitive rankings."
          products={[
            {
              id: "pubg-mobile",
              name: "PUBG Mobile",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-photo/soldier-with-gun-his-hand-blue-background_1268-28589.jpg",
              imageAlt: "PUBG Mobile battle royale gameplay",
            },
            {
              id: "roblox",
              name: "Roblox",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-photo/nervous-woman-screaming-husband-while-he-is-playing-space-shooter-videogame-rgb-powerful-computer-streaming-online-competition-pro-cyber-with-headset-performing-virtual-tournament_482257-12460.jpg",
              imageAlt: "Roblox gaming platform virtual world",
            },
            {
              id: "brawlstars",
              name: "Brawl Stars",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-psd/american-football-championship-template_23-2151933189.jpg",
              imageAlt: "Brawl Stars mobile game action gameplay",
            },
            {
              id: "codmobile",
              name: "Call of Duty Mobile",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-photo/soldier-with-gun-his-hand-blue-background_1268-28589.jpg",
              imageAlt: "Call of Duty Mobile competitive gameplay",
            },
            {
              id: "freefire",
              name: "Free Fire",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              imageAlt: "Free Fire battle royale action",
            },
            {
              id: "valorant",
              name: "Valorant",
              price: "Free to Play",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              imageAlt: "Valorant tactical shooter esports",
            },
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Tournaments", href: "/tournaments" }]}
        />
      </div>

      <div id="games-cta" data-section="games-cta">
        <ContactCTA
          tag="Ready to Compete"
          tagIcon={Users}
          title="Start Your Esports Journey Today"
          description="Join thousands of competitive players in the most exciting gaming tournaments on GameHub Pro. Register your team and begin competing for glory and prizes."
          buttons={[
            { text: "Create Account", href: "/signup" },
            { text: "View Tournaments", href: "/tournaments" },
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer-games" data-section="footer-games">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 GameHub Pro. All rights reserved. Competitive gaming platform for esports tournaments and live events."
        />
      </div>
    </ThemeProvider>
  );
}