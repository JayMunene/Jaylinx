import { useEffect, useRef, useState } from "react";
import { SERVICE_TYPES } from "./ui";
import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

const INSTRUMENTS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2 to 8wks", label: "Average Delivery" },
  { value: "2+", label: "Years in Business" },
];

const HERO_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiVv9lyBRZnckbpV_ByfSzL98tHNGa-rXB6C6g-fUoiGMgJON7-FEJrDw&s=10";

const SERVICES = [
  {
    num: "01",
    title: "Mobile Apps",
    tags: "iOS · Android · iPhone & Android",
    desc: "We design and build mobile apps that your customers will actually enjoy using. Fast, reliable, and works offline too.",
    need: "Mobile App",
  },
  {
    num: "02",
    title: "Websites & Web Apps",
    tags: "Websites · Online Platforms · Client Portals",
    desc: "From a simple business website to a full online platform — we build what fits your business, your budget, and your customers.",
    need: "Web Application / Platform",
  },
  {
    num: "03",
    title: "Systems & Cost Review",
    tags: "Audit · Save Money · Improve Performance",
    desc: "Spending too much on software or running slow systems? We find the problems, fix them, and help you save money.",
    need: "Cost & Systems Review",
  },
];

const TRUST_POINTS = [
  {
    title: "We speak plain English",
    desc: "No jargon, no confusing tech talk. We explain everything in a way that makes sense to you.",
  },
  {
    title: "Fixed-price quotes",
    desc: "You'll know exactly what you're paying before we start. No surprise bills.",
  },
  {
    title: "We keep you updated",
    desc: "Regular check-ins throughout the project so you're never left wondering what's happening.",
  },
  {
    title: "Your data is safe",
    desc: "We follow industry best practices to keep your business and customer data secure at all times.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell us what you need",
    desc: "Fill out our short form with your idea. No technical knowledge needed — just describe what you want.",
  },
  {
    step: "02",
    title: "We design & build it",
    desc: "Our team creates your solution and keeps you updated every step of the way. You approve before anything goes live.",
  },
  {
    step: "03",
    title: "Launch & grow",
    desc: "We launch your product and provide support as your business grows. We're here for the long run.",
  },
];

function AnimatedMetric({ value, delay }: { value: string; delay: number }) {
  const targets = value.match(/\d+/g)?.map(Number) ?? [];
  const [numbers, setNumbers] = useState(targets.map(() => 0));
  const metricRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || targets.length === 0) {
      setNumbers(targets);
      return;
    }

    let frame = 0;
    let timeout = 0;
    let observer: IntersectionObserver | undefined;

    const start = () => {
      const startedAt = performance.now();
      const duration = 2600;

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setNumbers(targets.map((target) => Math.round(target * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer?.disconnect();
        timeout = window.setTimeout(start, delay);
      }
    }, { threshold: 0.6 });
    if (metricRef.current) observer.observe(metricRef.current);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [delay, value]);

  let numberIndex = 0;
  const display = value.replace(/\d+/g, () => String(numbers[numberIndex++] ?? 0));

  return <span ref={metricRef}>{display}</span>;
}

type NavPage = "about" | "process" | "portfolio" | "contact" | "admin" | "donate" | "pricing";

export default function Landing({
  onRequest,
  onAdmin,
  onNavigate,
}: {
  onRequest: (need?: string) => void;
  onAdmin: () => void;
  onNavigate: (page: NavPage) => void;
}) {
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll(e?: Event) {
      const target = e?.target as HTMLElement | null;
      const y = target && target !== document
        ? target.scrollTop
        : (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0);
      setHeaderOpacity(Math.max(0, 1 - y / 120));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    const page = pageRef.current;
    page?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true } as any);
      page?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-full overflow-x-hidden bg-canvas text-white">
      {/* ─── HEADER ─── */}
      <header
        className="fixed inset-x-0 top-0 z-50 bg-transparent pointer-events-none"
        style={{ opacity: headerOpacity, transition: "opacity 0.05s linear" }}
      >
        <div className="pointer-events-auto mx-auto flex h-12 max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-14 xl:px-20">
          {/* Logo — top left */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="shrink-0">
            <img src={logo} alt="Jaylinx Group" className="h-9 w-auto object-contain" />
          </button>

          {/* Nav — centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {(["about", "process", "portfolio", "contact"] as const).map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="font-mono text-[9px] uppercase text-white/28 transition-colors hover:text-white/65"
                style={{ letterSpacing: "0.2em" }}
              >
                {page === "about" ? "About Us" : page === "process" ? "Our Process" : page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate("donate")}
              className="bg-gold px-4 py-2 font-mono text-[10px] uppercase text-canvas transition-colors hover:bg-gold-bright"
              style={{ letterSpacing: "0.14em" }}
            >
              DONATE
            </button>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[900px] flex-col px-5 sm:px-8 lg:min-h-screen lg:px-14 xl:px-20">
        {/* Main content */}
        <div className="flex flex-1 items-center pb-28">
          <div className="grid w-full max-w-[1380px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <h1
                className="font-black uppercase leading-[0.9] text-white"
                style={{
                  fontSize: "clamp(52px, 7.5vw, 116px)",
                  letterSpacing: "-0.04em",
                }}
              >
                Your idea.
                <br />
                <span className="text-white/55">We code.</span>
              </h1>

              <p className="max-w-[460px] text-[16px] leading-[1.75] text-white/50">
                We build apps, websites, and digital platforms for businesses of
                all sizes. You describe what you need — we take care of the rest.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <button
                  onClick={() => onNavigate("pricing")}
                  className="bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
                  style={{ letterSpacing: "0.16em" }}
                >
                  View Pricing →
                </button>
                <button
                  onClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="font-mono text-[11px] uppercase text-white/28 transition-colors hover:text-white/60"
                  style={{ letterSpacing: "0.16em" }}
                >
                  See What We Build ↓
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
              <div className="absolute -inset-5 border border-gold/15" aria-hidden />
              <img
                src={HERO_IMAGE}
                alt="Jaylinx Group creative technology work"
                className="relative aspect-[4/3] w-full object-cover brightness-90 contrast-110 grayscale-[15%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 border border-white/20 bg-canvas/80 px-3 py-2 font-mono text-[9px] uppercase text-gold/75" style={{ letterSpacing: "0.18em" }}>
                Built for what is next
              </div>
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="relative mt-10 border-t border-white/8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
          <div className="mx-auto grid max-w-[1380px] grid-cols-2 lg:flex lg:px-14 xl:px-20">
            {INSTRUMENTS.map((inst, i) => (
              <div
                key={inst.label}
                className={`min-w-0 border-b border-white/8 px-4 py-5 even:border-l lg:flex-1 lg:border-b-0 lg:px-0 ${i > 0 ? "lg:border-l lg:pl-6 xl:pl-8" : ""} ${i < INSTRUMENTS.length - 1 ? "lg:pr-6 xl:pr-8" : ""}`}
              >
                <div
                  className="font-black leading-none text-white"
                  style={{
                    fontSize: "clamp(22px, 3vw, 38px)",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <AnimatedMetric value={inst.value} delay={i * 250} />
                </div>
                <div
                  className="mt-1.5 max-w-full whitespace-normal font-mono uppercase leading-[1.25] text-white/28"
                  style={{ fontSize: "clamp(7px, 1.8vw, 9px)", letterSpacing: "0.14em" }}
                >
                  {inst.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUICK QUOTE ─── */}
      <section className="border-b border-white/6 bg-band px-5 py-8 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1380px]">
          <div
            className="mb-5 font-mono text-[9px] uppercase text-white/22"
            style={{ letterSpacing: "0.24em" }}
          >
            Quick Quote
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-0">
            <div className="flex-1">
              <div
                className="mb-2 font-mono text-[9px] uppercase text-gold/60"
                style={{ letterSpacing: "0.2em" }}
              >
                What do you need?
              </div>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full appearance-none border-b border-white/12 bg-transparent pb-2.5 font-mono text-[13px] text-white outline-none transition-colors focus:border-gold"
              >
                {SERVICE_TYPES.map((o) => (
                  <option key={o} className="bg-canvas">
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => onRequest(serviceType)}
              className="shrink-0 border border-gold/35 px-6 py-2.5 font-mono text-[10px] uppercase text-gold transition-all hover:border-gold hover:bg-gold hover:text-canvas lg:ml-8"
              style={{ letterSpacing: "0.16em" }}
            >
              Get a Quote →
            </button>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        ref={sectionRef}
        className="px-5 pb-8 pt-20 sm:px-8 lg:px-14 xl:px-20"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 flex items-baseline justify-between border-b border-white/8 pb-4">
            <span
              className="font-mono text-[9px] uppercase text-white/28"
              style={{ letterSpacing: "0.24em" }}
            >
              What We Build
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <button
                key={svc.num}
                onClick={() => onRequest(svc.need)}
                className={`group flex flex-col gap-5 py-10 text-left transition-colors ${
                  i > 0 ? "md:border-l md:border-white/8 md:pl-10" : ""
                } ${i < SERVICES.length - 1 ? "border-b border-white/8 md:border-b-0 md:pr-10" : ""}`}
              >
                <div
                  className="font-mono text-[9px] uppercase text-gold/55"
                  style={{ letterSpacing: "0.2em" }}
                >
                  {svc.num}
                </div>
                <h3
                  className="text-[20px] font-bold leading-snug"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {svc.title}
                </h3>
                <div className="text-[12px] text-white/30">{svc.tags}</div>
                <p className="flex-1 text-[13px] leading-[1.7] text-white/40">
                  {svc.desc}
                </p>
                <div
                  className="flex items-center gap-2 font-mono text-[10px] uppercase text-white/25 transition-colors group-hover:text-gold"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Get a Quote
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US + HOW IT WORKS ─── */}
      <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 flex items-baseline border-b border-white/8 pb-4">
            <span
              className="font-mono text-[9px] uppercase text-white/28"
              style={{ letterSpacing: "0.24em" }}
            >
              Why Work With Us
            </span>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Trust points */}
            <div>
              <h2
                className="text-[26px] font-bold uppercase leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                We make it
                <br />
                simple for you.
              </h2>
              <p className="mt-4 max-w-[460px] text-[14px] leading-[1.7] text-white/42">
                We know that most business owners aren't developers. That's why
                we do the heavy lifting and keep you informed every step of the
                way.
              </p>
              <div className="mt-10">
                {TRUST_POINTS.map((point, i) => (
                  <div
                    key={point.title}
                    className={`flex gap-4 py-5 border-b border-white/8 ${i === 0 ? "border-t" : ""}`}
                  >
                    <span className="mt-0.5 shrink-0 text-gold">✓</span>
                    <div>
                      <div className="text-[14px] font-semibold text-white">
                        {point.title}
                      </div>
                      <div className="mt-1 text-[13px] leading-[1.6] text-white/40">
                        {point.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div>
              <h2
                className="text-[26px] font-bold uppercase leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                How it
                <br />
                works.
              </h2>
              <p className="mt-4 max-w-[460px] text-[14px] leading-[1.7] text-white/42">
                Getting started is straightforward. Here's what happens after
                you reach out to us.
              </p>

              <div className="mt-10 space-y-0">
                {HOW_IT_WORKS.map((step, i) => (
                  <div
                    key={step.step}
                    className={`flex gap-6 py-7 border-b border-white/8 ${i === 0 ? "border-t" : ""}`}
                  >
                    <div
                      className="shrink-0 font-black leading-none text-white/10"
                      style={{ fontSize: "40px", fontVariantNumeric: "tabular-nums" }}
                    >
                      {step.step}
                    </div>
                    <div className="pt-1">
                      <div className="text-[15px] font-semibold text-white">
                        {step.title}
                      </div>
                      <div className="mt-2 text-[13px] leading-[1.65] text-white/40">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onRequest()}
                className="mt-10 bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
                style={{ letterSpacing: "0.16em" }}
              >
                Start Your Project →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onRequest={onRequest} onNavigate={onNavigate} onAdmin={onAdmin} />
    </div>
  );
}
