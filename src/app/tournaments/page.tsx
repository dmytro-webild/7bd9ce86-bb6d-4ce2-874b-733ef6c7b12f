"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Zap, HelpCircle, Globe, Play, Eye, Trophy } from "lucide-react";

export default function TournamentsPage() {
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
      defaultTextAnimation="entrance-slide"
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

      <div id="live-tournaments" data-section="live-tournaments">
        <FeatureCardTwentySix
          title="Live Tournament Events"
          description="Stay updated with real-time tournament information, match schedules, and live broadcast links."
          tag="Active Events"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              title: "PUBG Mobile Pro Series",
              description: "International championship featuring top professional teams competing for $500,000 prize pool.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=15",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Play,
              buttonHref: "/tournaments/pubg-pro-series",
            },
            {
              title: "Roblox Creator Clash",
              description: "Virtual world creators battle in custom-built game arenas with live streaming to millions.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=16",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Eye,
              buttonHref: "/tournaments/roblox-creator-clash",
            },
            {
              title: "Brawl Stars Global Championship",
              description: "Fastest-paced esports tournament with teams from 60+ countries in real-time multiplayer action.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=17",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Trophy,
              buttonHref: "/tournaments/brawlstars-global",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            {
              text: "See Full Schedule",
              href: "/schedule",
            },
          ]}
        />
      </div>

      <div id="tournament-stats" data-section="tournament-stats">
        <MetricCardTwo
          title="Gaming Community Impact"
          description="Join millions of competitive gamers worldwide in the fastest-growing esports ecosystem."
          tag="Global Reach"
          tagIcon={Globe}
          metrics={[
            {
              id: "players",
              value: "5M+",
              description: "Active Competitive Players",
            },
            {
              id: "tournaments",
              value: "1,200+",
              description: "Monthly Tournaments",
            },
            {
              id: "broadcast",
              value: "$50M",
              description: "Total Prize Pools",
            },
            {
              id: "countries",
              value: "150+",
              description: "Countries Represented",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="gaming-faq" data-section="gaming-faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers about tournaments, registration, rules, and how to participate in GameHub Pro events."
          tag="Tournament Help"
          tagIcon={HelpCircle}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqs={[
            {
              id: "faq-1",
              title: "How do I register for a tournament?",
              content: "Visit the tournament page you're interested in and click 'Register Team.' Fill out your team details, verify email, and you're ready to compete. Registration typically closes 48 hours before the event starts.",
            },
            {
              id: "faq-2",
              title: "What are the minimum system requirements?",
              content: "Most tournaments support both mobile and PC. For mobile: iOS 12+ or Android 8+. For PC: Windows 10/11 with at least 4GB RAM. Internet speed should be minimum 5 Mbps for smooth gameplay.",
            },
            {
              id: "faq-3",
              title: "Are there age restrictions?",
              content: "Players must be 13+ to participate. Players under 18 require parental consent. Some professional tournaments have minimum age of 16 with additional verification requirements.",
            },
            {
              id: "faq-4",
              title: "How are prizes distributed?",
              content: "Prizes are awarded based on final ranking. All winners are verified through our system, and prizes are distributed within 30 days of tournament conclusion through bank transfer or gaming platform credits.",
            },
            {
              id: "faq-5",
              title: "Can I watch tournaments live?",
              content: "Yes! Most tournaments are streamed live on our platform and partners like Twitch and YouTube. Tournament links and broadcast times are available on each event page.",
            },
            {
              id: "faq-6",
              title: "What if I encounter technical issues during a match?",
              content: "Report issues immediately through the in-game support button. Our technical team will review and make decisions based on tournament rules. Most technical disconnects allow for match replay if reported within 5 minutes.",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 GameHub Pro. All rights reserved. Competitive gaming platform for esports tournaments and live events."
        />
      </div>
    </ThemeProvider>
  );
}