const PROJECTS = [
  {
    num: "01",
    title: "Freight Tracker Pro",
    category: "Mobile App",
    tags: "iOS · Android · Real-time GPS",
    desc: "A cross-platform logistics app for a Swiss freight company. Drivers get turn-by-turn job routing; dispatchers see live fleet positions and delivery ETAs on a web dashboard.",
    year: "2025",
    highlight: "40% reduction in dispatch call volume",
  },
  {
    num: "02",
    title: "MedRecord Portal",
    category: "Web Platform",
    tags: "React · Node.js · HIPAA-compliant",
    desc: "A secure patient record platform for a group of private clinics. Replaces a legacy desktop system with a browser-based app that works on any device — tablet, phone, or desktop.",
    year: "2024",
    highlight: "3× faster record retrieval",
  },
  {
    num: "03",
    title: "Pantry Commerce",
    category: "E-commerce",
    tags: "Shopify · Custom storefront · Mobile",
    desc: "A tailored online storefront for a specialty food retailer with subscription boxes, dynamic pricing, and a loyalty programme — integrated with their existing POS and inventory system.",
    year: "2024",
    highlight: "62% increase in online revenue",
  },
  {
    num: "04",
    title: "BuildFlow",
    category: "SaaS Platform",
    tags: "Project management · Construction · API",
    desc: "A project management SaaS for construction firms. Handles site schedules, subcontractor communication, compliance checklists, and client sign-off — all in one place.",
    year: "2023",
    highlight: "Used on 200+ active construction sites",
  },
  {
    num: "05",
    title: "Vaultwise",
    category: "FinTech App",
    tags: "iOS · Android · Open Banking",
    desc: "A personal finance app that aggregates accounts from multiple banks, visualises spending patterns, and sends smart alerts. Built on open-banking APIs with bank-grade encryption.",
    year: "2023",
    highlight: "4.8 App Store rating",
  },
  {
    num: "06",
    title: "Atlas Learning",
    category: "EdTech Platform",
    tags: "LMS · Video streaming · Certificates",
    desc: "A white-label learning management system for a corporate training provider. Supports live sessions, on-demand video, quizzes, and automated certificate generation.",
    year: "2022",
    highlight: "15,000+ learners onboarded",
  },
];

import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

export default function PortfolioPage({
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
          Portfolio
        </h1>

        <div className="my-8 h-[2px] bg-gold" style={{ width: "min(100%, 200px)" }} />

        <p className="max-w-[560px] text-[16px] leading-[1.8] text-white/50">
          A selection of projects we've delivered across mobile, web, and enterprise platforms.
          Each one started with a conversation — just like yours could.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-0 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div
              key={project.num}
              className={`group flex flex-col gap-4 border-b border-white/8 p-8 transition-colors hover:bg-white/[0.02] ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < 2 ? "md:border-t" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="font-mono text-[9px] uppercase text-gold/55"
                  style={{ letterSpacing: "0.2em" }}
                >
                  {project.num}
                </div>
                <span className="font-mono text-[9px] uppercase text-white/22" style={{ letterSpacing: "0.14em" }}>
                  {project.year}
                </span>
              </div>

              <div>
                <div className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.18em" }}>
                  {project.category}
                </div>
                <h3 className="mt-1 text-[20px] font-bold text-white" style={{ letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <div className="mt-1 text-[11px] text-white/25">{project.tags}</div>
              </div>

              <p className="flex-1 text-[13px] leading-[1.7] text-white/42">{project.desc}</p>

              <div className="flex items-center gap-2 border-t border-white/6 pt-4">
                <span className="text-gold">↗</span>
                <span className="text-[12px] text-white/40">{project.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-[14px] text-white/35">
            Interested in seeing more, or want to discuss a similar project?
          </p>
          <button
            onClick={onRequest}
            className="bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
            style={{ letterSpacing: "0.16em" }}
          >
            Get a Free Quote →
          </button>
        </div>
      </div>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
