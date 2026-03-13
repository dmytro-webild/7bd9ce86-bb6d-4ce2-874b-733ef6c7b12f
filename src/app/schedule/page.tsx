"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Calendar, Zap, Users, Play, Eye, Trophy } from "lucide-react";

export default function SchedulePage() {
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

      <div id="upcoming-events" data-section="upcoming-events">
        <BlogCardOne
          title="Upcoming Events Calendar"
          description="Never miss a tournament. Check our comprehensive schedule of upcoming competitive events."
          tag="This Week"
          tagIcon={Calendar}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          blogs={[
            {
              id: "event-1",
              category: "PUBG Mobile",
              title: "PUBG Pro Series Finals",
              excerpt: "Top 16 teams compete for championship title and $200,000 grand prize. Watch live on all major platforms.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=8",
              imageAlt: "gaming tournament live broadcast stream",
              authorName: "Tournament Admin",
              authorAvatar: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              date: "Dec 15, 2024",
            },
            {
              id: "event-2",
              category: "Roblox",
              title: "Creator Clash Spring Season",
              excerpt: "100 content creators showcase their game design skills in real-time competitive battles.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=9",
              imageAlt: "gaming tournament live broadcast stream",
              authorName: "Gaming Events",
              authorAvatar: "http://img.b2bpic.net/free-photo/nervous-woman-screaming-husband-while-he-is-playing-space-shooter-videogame-rgb-powerful-computer-streaming-online-competition-pro-cyber-with-headset-performing-virtual-tournament_482257-12460.jpg",
              date: "Dec 18, 2024",
            },
            {
              id: "event-3",
              category: "Brawl Stars",
              title: "Global Championship Qualifiers",
              excerpt: "Regional playoffs begin. Teams compete for slots in the international championship tournament.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=10",
              imageAlt: "gaming tournament live broadcast stream",
              authorName: "Brawl Esports",
              authorAvatar: "http://img.b2bpic.net/free-psd/american-football-championship-template_23-2151933189.jpg",
              date: "Dec 20, 2024",
            },
            {
              id: "event-4",
              category: "Multi-Game",
              title: "Holiday Gaming Festival",
              excerpt: "Multi-game tournament featuring PUBG Mobile, Roblox, and Brawl Stars with combined $1M prize pool.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=11",
              imageAlt: "gaming tournament live broadcast stream",
              authorName: "GameHub Events",
              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              date: "Dec 25, 2024",
            },
          ]}
          buttons={[
            {
              text: "View All Events",
              href: "/schedule",
            },
          ]}
        />
      </div>

      <div id="live-tournaments-schedule" data-section="live-tournaments-schedule">
        <FeatureCardTwentySix
          title="Featured Tournament Highlights"
          description="Check out the most exciting matches happening this week with complete broadcast schedules and team rosters."
          tag="Featured Matches"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              title: "PUBG Regional Playoffs",
              description: "32 teams from 4 regions competing for a combined $100,000 prize pool. Stream live on Twitch and YouTube.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=12",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Play,
              buttonHref: "/tournaments/pubg-playoffs",
            },
            {
              title: "Roblox Developer Showdown",
              description: "Creative developers battle with custom game environments. First 8-hour tournament with live world-building.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=13",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Eye,
              buttonHref: "/tournaments/roblox-showdown",
            },
            {
              title: "Brawl Stars Regional Series",
              description: "3v3 competitive matches with 150 teams across Asia-Pacific region. Watch the fastest esport action.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg?_wi=14",
              imageAlt: "gaming tournament live broadcast stream",
              buttonIcon: Trophy,
              buttonHref: "/tournaments/brawlstars-regional",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Browse All Matches",
              href: "/tournaments",
            },
          ]}
        />
      </div>

      <div id="community-contact-schedule" data-section="community-contact-schedule">
        <ContactCTA
          tag="Join Us"
          tagIcon={Users}
          title="Ready to Compete?"
          description="Register now for upcoming tournaments and start your esports journey. Connect with players worldwide and compete for amazing prizes."
          buttons={[
            {
              text: "Sign Up Now",
              href: "/signup",
            },
            {
              text: "Download App",
              href: "/download",
            },
          ]}
          background={{
            variant: "downward-rays-animated",
          }}
          useInvertedBackground={true}
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