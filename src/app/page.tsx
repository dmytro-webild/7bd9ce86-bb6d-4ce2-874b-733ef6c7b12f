"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Flame, Zap, Globe, Calendar, HelpCircle, Users, Play, Eye, Trophy } from "lucide-react";

export default function HomePage() {
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

      <div id="hero-home" data-section="hero-home">
        <HeroLogoBillboardSplit
          logoText="GameHub Pro"
          description="Discover esports tournaments, live broadcasts, and competitive gaming events across PUBG Mobile, Roblox, Brawl Stars and more. Join the ultimate gaming community."
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Browse Tournaments", href: "/tournaments" },
            { text: "Join Community", href: "/community" },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg"
          imageAlt="esports gaming tournament broadcast setup"
          mediaAnimation="blur-reveal"
          frameStyle="card"
          ariaLabel="Hero section showcasing gaming tournaments"
        />
      </div>

      <div id="featured-games" data-section="featured-games">
        <ProductCardThree
          title="Featured Games"
          description="Explore the most popular esports titles with active tournaments and live competitions."
          tag="Popular Titles"
          tagIcon={Flame}
          tagAnimation="slide-up"
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
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View All Games", href: "/games" }]}
        />
      </div>

      <div id="live-tournaments" data-section="live-tournaments">
        <FeatureCardTwentySix
          title="Live Tournament Events"
          description="Stay updated with real-time tournament information, match schedules, and live broadcast links."
          tag="Active Events"
          tagIcon={Zap}
          tagAnimation="reveal-blur"
          features={[
            {
              title: "PUBG Mobile Pro Series",
              description: "International championship featuring top professional teams competing for $500,000 prize pool.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "PUBG Tournament Live",
              buttonIcon: Play,
              buttonHref: "/tournaments/pubg-pro-series",
            },
            {
              title: "Roblox Creator Clash",
              description: "Virtual world creators battle in custom-built game arenas with live streaming to millions.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "Roblox Tournament",
              buttonIcon: Eye,
              buttonHref: "/tournaments/roblox-creator-clash",
            },
            {
              title: "Brawl Stars Global Championship",
              description: "Fastest-paced esports tournament with teams from 60+ countries in real-time multiplayer action.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "Brawl Stars Championship",
              buttonIcon: Trophy,
              buttonHref: "/tournaments/brawlstars-global",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "See Full Schedule", href: "/schedule" }]}
        />
      </div>

      <div id="tournament-stats" data-section="tournament-stats">
        <MetricCardTwo
          title="Gaming Community Impact"
          description="Join millions of competitive gamers worldwide in the fastest-growing esports ecosystem."
          tag="Global Reach"
          tagIcon={Globe}
          metrics={[
            { id: "players", value: "5M+", description: "Active Competitive Players" },
            { id: "tournaments", value: "1,200+", description: "Monthly Tournaments" },
            { id: "broadcast", value: "$50M", description: "Total Prize Pools" },
            { id: "countries", value: "150+", description: "Countries Represented" },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
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
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "PUBG Pro Series Finals",
              authorName: "Tournament Admin",
              authorAvatar: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              date: "Dec 15, 2024",
            },
            {
              id: "event-2",
              category: "Roblox",
              title: "Creator Clash Spring Season",
              excerpt: "100 content creators showcase their game design skills in real-time competitive battles.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "Roblox Creator Clash",
              authorName: "Gaming Events",
              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              date: "Dec 18, 2024",
            },
            {
              id: "event-3",
              category: "Brawl Stars",
              title: "Global Championship Qualifiers",
              excerpt: "Regional playoffs begin. Teams compete for slots in the international championship tournament.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "Brawl Stars Qualifiers",
              authorName: "Brawl Esports",
              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              date: "Dec 20, 2024",
            },
            {
              id: "event-4",
              category: "Multi-Game",
              title: "Holiday Gaming Festival",
              excerpt: "Multi-game tournament featuring PUBG Mobile, Roblox, and Brawl Stars with combined $1M prize pool.",
              imageSrc: "http://img.b2bpic.net/free-photo/e-sport-streamer-being-upset-losing-space-shoot-video-game-championship-playing-computer_482257-2102.jpg",
              imageAlt: "Holiday Gaming Festival",
              authorName: "GameHub Events",
              authorAvatar: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              date: "Dec 25, 2024",
            },
          ]}
          buttons={[{ text: "View All Events", href: "/schedule" }]}
        />
      </div>

      <div id="gaming-faq" data-section="gaming-faq">
        <BlogCardOne
          title="Frequently Asked Questions"
          description="Get answers about tournaments, registration, rules, and how to participate in GameHub Pro events."
          tag="Tournament Help"
          tagIcon={HelpCircle}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          blogs={[
            {
              id: "faq-1",
              category: "Registration",
              title: "How do I register for a tournament?",
              excerpt: "Visit the tournament page you're interested in and click 'Register Team.' Fill out your team details, verify email, and you're ready to compete.",
              imageSrc: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              imageAlt: "Tournament Registration",
              authorName: "Support Team",
              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              date: "Always Available",
            },
            {
              id: "faq-2",
              category: "System Requirements",
              title: "What are the minimum system requirements?",
              excerpt: "For mobile: iOS 12+ or Android 8+. For PC: Windows 10/11 with at least 4GB RAM. Internet speed should be minimum 5 Mbps for smooth gameplay.",
              imageSrc: "http://img.b2bpic.net/free-photo/team-teenage-gamers-plays-multiplayer-video-game-pc-gaming-club_613910-19148.jpg",
              imageAlt: "System Requirements",
              authorName: "Technical Support",
              authorAvatar: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-playing-videogame_23-2149349994.jpg",
              date: "Always Available",
            },
          ]}
        />
      </div>

      <div id="community-contact" data-section="community-contact">
        <ContactCTA
          tag="Join Us"
          tagIcon={Users}
          title="Join the Gaming Revolution"
          description="Connect with millions of competitive gamers, participate in tournaments, and showcase your skills on the world's premier gaming platform."
          buttons={[
            { text: "Sign Up Now", href: "/signup" },
            { text: "Download App", href: "/download" },
          ]}
          background={{ variant: "downward-rays-animated" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer-home" data-section="footer-home">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2024 GameHub Pro. All rights reserved. Competitive gaming platform for esports tournaments and live events."
        />
      </div>
    </ThemeProvider>
  );
}