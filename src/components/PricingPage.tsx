import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

type Tier = {
  number: string;
  name: string;
  scope: string;
  price: string;
  timing: string;
  bestFor: string;
};

const TIERS: Tier[] = [
  { number: "01", name: "Slow PC Tune-Up", scope: "Remote AnyDesk session: startup cleanup, driver updates, drive health and malware scan.", price: "$19", timing: "30 minutes", bestFor: "A sluggish laptop or desktop" },
  { number: "02", name: "Website Revamp & Minor Frontend Changes", scope: "Refresh an existing website with layout refinements, responsive fixes and polished frontend details.", price: "$40–$180", timing: "1–3 days", bestFor: "Businesses improving an existing site" },
  { number: "03", name: "Tech Stack Audit", scope: "A focused review of subscriptions, tools and easy automation wins.", price: "$115", timing: "1–2 days", bestFor: "Businesses cutting software costs" },
  { number: "04", name: "Starter Website", scope: "A refined one-page site with WhatsApp, contact form and mobile QA.", price: "$190", timing: "7–10 working days", bestFor: "Service providers and creators" },
  { number: "05", name: "Business Website", scope: "A 4–6 page site with CMS, SEO setup and blog or catalogue structure.", price: "$350–$580", timing: "3–4 weeks", bestFor: "Established businesses and clinics" },
  { number: "06", name: "Workflow Automation", scope: "M-Pesa, WhatsApp, CRM and inventory systems with logging and alerts.", price: "$580–$960", timing: "2–4 weeks", bestFor: "Retail, clinics and e-commerce" },
  { number: "07", name: "Mobile App MVP", scope: "Cross-platform app with login, notifications and a basic payment flow.", price: "$1,150–$1,925", timing: "5–7 weeks", bestFor: "Founders validating an idea" },
  { number: "08", name: "B2B SaaS Platform", scope: "Multi-user roles, database, billing and custom business logic.", price: "$1,925–$3,850+", timing: "8–12 weeks", bestFor: "Growing enterprises" },
];

const PRINCIPLES = [
  ["Content starts the clock", "The build begins when your copy, logo and imagery are ready. Delayed assets move the launch date by the same amount."],
  ["48-hour feedback window", "Each milestone includes one structured review window. Fast decisions keep the work moving and protect your launch date."],
  ["Scope stays intentional", "New pages, features or sections after design approval become a clearly priced Phase 2, never a surprise inside the original scope."],
];

export default function PricingPage({
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
          <button onClick={onBack} className="shrink-0" aria-label="Back to Jaylinx Group">
            <img src={logo} alt="Jaylinx Group" className="h-9 w-auto object-contain" />
          </button>
          <button onClick={() => onRequest()} className="bg-gold px-4 py-2 font-mono text-[10px] uppercase text-canvas transition-colors hover:bg-gold-bright" style={{ letterSpacing: "0.14em" }}>
            START A PROJECT
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1380px] px-8 pb-24 pt-28 lg:px-14 xl:px-20">
        <div className="mb-12 border-b border-white/8 pb-4">
          <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>Investment Guide</span>
        </div>
        <div className="max-w-[760px]">
          <h1 className="font-black uppercase leading-[0.9] text-white" style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>Clear scope.<br /><span className="text-white/45">Serious work.</span></h1>
          <div className="my-8 h-[2px] w-[min(100%,220px)] bg-gold" />
          <p className="max-w-[590px] text-[16px] leading-[1.8] text-white/50">A considered starting point for every engagement. Choose the level of support you need, then we shape the final scope around your business.</p>
        </div>

        <section className="mt-20">
          <div className="mb-5 flex items-end justify-between border-b border-white/8 pb-4">
            <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>Services & investment</span>
            <span className="hidden font-mono text-[9px] uppercase text-white/20 sm:block" style={{ letterSpacing: "0.18em" }}>Indicative prices in USD</span>
          </div>
          <div className="border-t border-white/8">
            {TIERS.map((tier) => (
              <button key={tier.number} onClick={() => onRequest(tier.name)} className="group grid w-full grid-cols-[42px_1fr] gap-4 border-b border-white/8 py-7 text-left transition-colors hover:bg-white/[0.025] sm:grid-cols-[56px_1.05fr_1.35fr_180px] sm:gap-6">
                <span className="font-mono text-[10px] text-gold/55">{tier.number}</span>
                <div>
                  <h2 className="text-[17px] font-semibold text-white transition-colors group-hover:text-gold">{tier.name}</h2>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-white/36 sm:hidden">{tier.scope}</p>
                  <p className="mt-1 text-[11px] text-white/24 sm:hidden">{tier.bestFor}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-[13px] leading-[1.65] text-white/42">{tier.scope}</p>
                  <p className="mt-1.5 text-[10px] uppercase text-white/20" style={{ letterSpacing: "0.14em" }}>{tier.bestFor}</p>
                </div>
                <div className="col-start-2 mt-2 flex items-baseline justify-between gap-4 sm:col-start-auto sm:mt-0 sm:block sm:text-right">
                  <span className="font-mono text-[13px] text-gold">{tier.price}</span>
                  <span className="ml-3 text-[11px] text-white/28 sm:mt-2 sm:block">{tier.timing}</span>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-4 font-mono text-[9px] uppercase text-white/20" style={{ letterSpacing: "0.12em" }}>Final pricing is confirmed after scope, content and technical requirements are reviewed.</p>
        </section>

        <section className="mt-24">
          <div className="mb-10 border-b border-white/8 pb-4"><span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>Website timelines</span></div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {[
              ["Starter landing page", "7–10 working days", "3–4 build days plus review, content collection, mobile QA and launch."],
              ["Multi-page business site", "3–4 weeks", "8–10 build days plus content population, one revision sprint and handover."],
              ["Luxury or e-commerce build", "5–7 weeks", "15–20 build days plus feedback, product setup, performance and launch QA."],
            ].map(([name, timing, detail], index) => (
              <div key={name} className={`border-b border-white/8 py-8 md:border-b-0 md:py-0 md:pr-8 ${index > 0 ? "md:border-l md:pl-8" : ""}`}>
                <span className="font-mono text-[10px] text-gold/60">0{index + 1}</span>
                <h3 className="mt-4 text-[18px] font-semibold">{name}</h3>
                <div className="mt-3 font-mono text-[13px] text-gold">{timing}</div>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/38">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-white/8 pt-8">
          <div className="mb-10 font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>How we keep delivery calm</div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PRINCIPLES.map(([title, description]) => (
              <div key={title}>
                <h3 className="text-[16px] font-semibold text-white">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.75] text-white/38">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <button onClick={() => onRequest()} className="mt-16 bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright" style={{ letterSpacing: "0.16em" }}>Discuss your project →</button>
      </main>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
