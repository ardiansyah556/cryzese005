import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ExternalLink, Github, MessageCircle, Twitter } from "lucide-react";

/**
 * Cryzese - The AI Accountability Protocol
 * Design: Cyberpunk Transparency
 * Color Palette: Deep Navy (#0a1628) + Electric Cyan (#00d9ff) + Vivid Magenta (#ff006e)
 * Typography: Space Grotesk (headlines) + Inter (body)
 * Motion: Scroll-triggered animations, parallax, glow effects
 */

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
}

function Counter({ end, duration = 2000, label }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-cyan-400 neon-text">
        {count.toLocaleString()}
      </div>
      <div className="text-sm md:text-base text-gray-400 mt-2">{label}</div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-background to-background pointer-events-none" />

        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-up ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo with glow */}
          <div className="mb-8 flex justify-center">
            <div className="animate-rotate-slow animate-glow-pulse">
              <img
                src="/images/logo-cryzese.png"
                alt="Cryzese Logo"
                className="w-32 md:w-48 h-auto mx-auto"
              />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text animate-float-up">
            Cryzese
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white animate-float-up stagger-1">
            The AI Accountability Protocol
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-float-up stagger-2">
            Solving the AI Black Box crisis through decentralized transparency and cryptographic auditing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-float-up stagger-3">
            <a href="#whitepaper" className="inline-block">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 text-lg border-glow">
                View Whitepaper
              </Button>
            </a>
            <a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer">
              <Button className="bg-magenta-600 hover:bg-magenta-700 text-white font-bold px-8 py-3 text-lg border-glow">
                Join Telegram
              </Button>
            </a>
            <a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-3 text-lg border-glow">
                Follow on X
              </Button>
            </a>
          </div>

          {/* Tagline strip */}
          <div className="bg-gradient-to-r from-cyan-500/20 via-magenta-600/20 to-cyan-500/20 border border-cyan-500/30 rounded-lg px-6 py-4 animate-float-up stagger-4">
            <p className="text-cyan-300 font-semibold text-lg">
              🚀 Mainnet Launch: Q1 2026 — Built on BNB Chain
            </p>
          </div>
        </div>

        {/* Parallax rings */}
        <div
          className="absolute top-1/4 right-0 w-96 h-96 border-2 border-cyan-500/20 rounded-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 border-2 border-magenta-600/20 rounded-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-blue-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            The Crisis of <span className="text-cyan-400">AI Black Box</span> Systems
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Problem points */}
            <div className="space-y-6">
              {[
                "Centralized AI models operate without transparency",
                "No public auditing of datasets or model logic",
                "High risk of algorithmic bias",
                "Decisions affecting finance, health, and governance are unverifiable",
              ].map((problem, i) => (
                <div
                  key={i}
                  className="glass rounded-lg p-4 border-glow animate-float-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="text-cyan-400 text-2xl font-bold flex-shrink-0">⚠️</div>
                    <p className="text-gray-200 text-lg">{problem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual illustration placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta-600/20 to-cyan-500/20 rounded-2xl border-2 border-cyan-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <p className="text-cyan-300 font-bold">Locked Black Box</p>
                    <p className="text-gray-400 text-sm mt-2">Opacity → Bias → Risk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            A 4-Stage <span className="text-cyan-400">Auditable AI Cycle</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            The Cryzese Protocol ensures complete transparency through four critical stages
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Data Provenance",
                icon: "📊",
                points: [
                  "On-chain dataset proof",
                  "Hashing and verification",
                  "Incentivized ethical data providers",
                ],
              },
              {
                title: "Model Commitment",
                icon: "🔐",
                points: [
                  "Executable code hashing",
                  "Immutable algorithm fingerprint",
                  "Staking requirement for integrity",
                ],
              },
              {
                title: "Execution Auditing",
                icon: "📝",
                points: [
                  "Real-time cryptographic logs",
                  "Input-output hashing",
                  "Accountability via $CRZ gas fees",
                ],
              },
              {
                title: "Decentralized Verification",
                icon: "✅",
                points: [
                  "Validator staking",
                  "Randomized auditing",
                  "Rewards for honesty, slashing for violations",
                ],
              },
            ].map((stage, i) => (
              <Card
                key={i}
                className="glass border-glow p-6 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer group animate-float-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{stage.icon}</div>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">{stage.title}</h3>
                <ul className="space-y-2">
                  {stage.points.map((point, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-magenta-500 font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TOKENOMICS */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-blue-950/10 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Tokenomics <span className="text-cyan-400">$CRZ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pie chart visualization */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Validator Rewards - 35% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#00d9ff"
                    strokeWidth="8"
                    strokeDasharray="87.96 251.33"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Community - 25% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ff006e"
                    strokeWidth="8"
                    strokeDasharray="62.83 251.33"
                    strokeDashoffset="-87.96"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Liquidity - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#00ff88"
                    strokeWidth="8"
                    strokeDasharray="37.70 251.33"
                    strokeDashoffset="-150.79"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Treasury - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ffaa00"
                    strokeWidth="8"
                    strokeDasharray="37.70 251.33"
                    strokeDashoffset="-188.49"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Team - 9% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#c0c0c0"
                    strokeWidth="8"
                    strokeDasharray="22.62 251.33"
                    strokeDashoffset="-226.19"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">56M</div>
                    <div className="text-sm text-gray-400">Total Supply</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tokenomics details */}
            <div className="space-y-4">
              {[
                { label: "Validator Rewards", value: "35%", amount: "19,600,000", color: "text-cyan-400" },
                { label: "Community & Ecosystem", value: "25%", amount: "14,000,000", color: "text-magenta-400" },
                { label: "Liquidity & Exchanges", value: "15%", amount: "8,400,000", color: "text-green-400" },
                { label: "Treasury / DAO Reserve", value: "15%", amount: "8,400,000", color: "text-yellow-400" },
                { label: "Core Team & Advisors", value: "9%", amount: "5,040,000", color: "text-gray-300" },
                { label: "Developer (Nomos Hex)", value: "1%", amount: "560,000", color: "text-gray-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-lg p-4 border-glow animate-float-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className={`text-sm ${item.color}`}>{item.amount}</p>
                    </div>
                    <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vesting info */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-magenta-600/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Vesting Schedule</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-400">Validator Rewards</p>
                <p className="text-white font-semibold">Distributed over 5 years via protocol emissions</p>
              </div>
              <div>
                <p className="text-gray-400">Community & Ecosystem</p>
                <p className="text-white font-semibold">3-year release schedule</p>
              </div>
              <div>
                <p className="text-gray-400">Core Team & Advisors</p>
                <p className="text-white font-semibold">12-month cliff, 3-year linear release</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TOKEN DETAILS */}
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Token <span className="text-cyan-400">Details</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Network", value: "BNB Chain", icon: "🔗" },
              { label: "Standard", value: "BEP-20", icon: "📋" },
              { label: "Maximum Supply", value: "56M $CRZ", icon: "💎" },
              { label: "Utility", value: "Gas, Staking, Governance", icon: "⚙️" },
              { label: "Type", value: "Deflationary", icon: "📉" },
              { label: "Mechanism", value: "Slashing + Burns", icon: "🔥" },
            ].map((item, i) => (
              <Card
                key={i}
                className="glass border-glow p-6 text-center animate-float-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <p className="text-cyan-300 font-bold text-lg">{item.value}</p>
              </Card>
            ))}
          </div>

          {/* Circulating supply counter */}
          <div className="glass rounded-lg p-8 border-glow text-center">
            <p className="text-gray-400 mb-4">Animated Circulating Supply</p>
            <Counter end={56000000} duration={2000} label="Total $CRZ Supply" />
          </div>
        </div>
      </section>

      {/* SECTION 6: ROADMAP */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-blue-950/10 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Project <span className="text-cyan-400">Roadmap</span>
          </h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-magenta-600" />

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Foundation",
                  date: "September 2025",
                  items: ["Finalize whitepaper", "Testnet Alpha", "Security audit"],
                  side: "left",
                },
                {
                  phase: "Phase 2",
                  title: "Token Launch & Genesis",
                  date: "October - December 2025",
                  items: [
                    "BEP-20 deployment",
                    "Staking & TGE",
                    "Community airdrop",
                    "Liquidity launch",
                  ],
                  side: "right",
                },
                {
                  phase: "Phase 3",
                  title: "Mainnet & Core Utility",
                  date: "January - June 2026",
                  items: [
                    "Mainnet Beta",
                    "Model Commitment activation",
                    "Execution logging tools",
                    "Validator verification",
                  ],
                  side: "left",
                },
              ].map((milestone, i) => (
                <div key={i} className={`flex ${milestone.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="w-1/2" />
                  <div className="relative w-1/2 px-8">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-background" />

                    {/* Content */}
                    <div className="glass rounded-lg p-6 border-glow animate-float-up" style={{ animationDelay: `${i * 0.15}s` }}>
                      <p className="text-cyan-400 font-bold text-sm">{milestone.phase}</p>
                      <h3 className="text-xl font-bold text-white mt-1">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm mt-2">{milestone.date}</p>
                      <ul className="mt-4 space-y-2">
                        {milestone.items.map((item, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-magenta-500 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Final milestone */}
              <div className="flex justify-center mt-12">
                <div className="glass rounded-lg p-8 border-glow text-center max-w-md animate-float-up">
                  <p className="text-2xl font-bold text-cyan-300 mb-2">🚀 Mainnet Launch</p>
                  <p className="text-xl font-bold text-white">Q1 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-magenta-950/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Join the Movement for <span className="text-cyan-400">Transparent and Ethical AI</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Be part of the revolution that brings accountability to artificial intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 text-lg border-glow w-full sm:w-auto">
                <MessageCircle className="mr-2" /> Join Telegram
              </Button>
            </a>
            <a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer">
              <Button className="bg-magenta-600 hover:bg-magenta-700 text-white font-bold px-8 py-3 text-lg border-glow w-full sm:w-auto">
                <Twitter className="mr-2" /> Follow on X
              </Button>
            </a>
            <a href="#whitepaper">
              <Button className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-3 text-lg border-glow w-full sm:w-auto">
                <ExternalLink className="mr-2" /> Download Whitepaper
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="border-t border-cyan-500/20 bg-gradient-to-b from-background to-blue-950/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div>
              <img src="/images/logo-cryzese.png" alt="Cryzese" className="w-20 h-20 mb-4" />
              <p className="text-gray-400 text-sm">
                Decentralized AI accountability protocol built on BNB Chain
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-white mb-4">Protocol</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#whitepaper" className="hover:text-cyan-400 transition">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="https://t.me/cryzese_official" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/cryzese" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Chain info */}
            <div>
              <h4 className="font-bold text-white mb-4">Network</h4>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <span className="text-xl">⛓️</span>
                <span>BNB Chain</span>
              </div>
              <p className="text-gray-500 text-xs">Token Standard: BEP-20</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-cyan-500/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
              <p>&copy; 2025 Cryzese Protocol. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
