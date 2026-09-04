const PHASES = [
  {
    num: "01",
    title: "Discovery Call",
    duration: "30–60 min",
    desc: "We start with a conversation — no forms, no pressure. You tell us what you're trying to build, what problem it solves, and what your timeline looks like. We ask questions and get a clear picture of your needs.",
  },
  {
    num: "02",
    title: "Scoping & Quote",
    duration: "2–5 days",
    desc: "We produce a detailed scope document breaking down exactly what will be built, how long it will take, and what it will cost. Everything is fixed-price — no surprises mid-project.",
  },
  {
    num: "03",
    title: "Design",
    duration: "1–3 weeks",
    desc: "Our designers produce high-fidelity mockups of your product. You review, request changes, and approve before a single line of code is written. This keeps revisions cheap and fast.",
  },
  {
    num: "04",
    title: "Development",
    duration: "4–16 weeks",
    desc: "We build in sprints, sharing progress with you at each milestone. You get a staging environment to test throughout — not just at the end. Any feedback is addressed before we move to the next sprint.",
  },
  {
    num: "05",
    title: "Testing & QA",
    duration: "1–2 weeks",
    desc: "Before launch we run thorough quality assurance: functional testing, performance checks, security audits, and cross-device verification. We don't ship unless we're confident it works.",
  },
  {
    num: "06",
    title: "Launch & Support",
    duration: "Ongoing",
    desc: "We handle the deployment and ensure everything goes live smoothly. Post-launch, we offer maintenance plans and remain available for updates, fixes, and future features as your business grows.",
  },
];

import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

export default function ProcessPage({
  onBack,
  onRequest,
  onNavigate,
}: {
  onBack: () => void;
  onRequest: (need?: string) => void;
  onNavigate: (page: NavPage) => void;
}) {
  return (
    <div className="min-h-full bg-canvas text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-canvas/96" style={{ backdropFilter: "blur(8px)" }}>
        <div className="mx-auto flex h-12 max-w-[1380px] items-center justify-between px-8 lg:px-14 xl:px-20">
          <button onClick={onBack} className="shrink-0">
            <img src={logo} alt="Jaylinx Group" className="h-9 w-auto object-contain" />
          </button>
          <button
            onClick={onRequest}
            className="bg-gold px-4 py-2 font-mono text-[10px] uppercase text-canvas transition-colors hover:bg-gold-bright"
            style={{ letterSpacing: "0.14em" }}
          >
            GET A QUOTE
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1380px] px-8 pb-24 pt-28 lg:px-14 xl:px-20">
        <div className="mb-12 border-b border-white/8 pb-4">
          <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>
            Company
          </span>
        </div>

        <h1
          className="font-black uppercase leading-[0.9] text-white"
          style={{ fontSize: "clamp(44px, 6vw, 92px)", letterSpacing: "-0.04em" }}
        >
          Our Process
        </h1>

        <div className="my-8 h-[2px] bg-gold" style={{ width: "min(100%, 200px)" }} />

        <p className="max-w-[560px] text-[16px] leading-[1.8] text-white/50">
          We follow a structured, transparent process that keeps you informed at every
          stage. Here's exactly what happens from the moment you reach out to us.
        </p>

        <div className="mt-20 space-y-0">
          {PHASES.map((phase, i) => (
            <div
              key={phase.num}
              className={`grid grid-cols-1 gap-6 border-b border-white/8 py-10 md:grid-cols-[120px_1fr_160px] md:gap-12 ${i === 0 ? "border-t" : ""}`}
            >
              <div
                className="font-black leading-none text-white/8"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", fontVariantNumeric: "tabular-nums" }}
              >
                {phase.num}
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-white" style={{ letterSpacing: "-0.01em" }}>
                  {phase.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-white/42">{phase.desc}</p>
              </div>
              <div className="flex items-start md:justify-end">
                <span className="rounded-full border border-gold/25 px-3 py-1 font-mono text-[9px] uppercase text-gold/55" style={{ letterSpacing: "0.18em" }}>
                  {phase.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-6">
          <button
            onClick={onRequest}
            className="bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
            style={{ letterSpacing: "0.16em" }}
          >
            Start Your Project →
          </button>
        </div>
      </div>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
