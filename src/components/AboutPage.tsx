import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

export default function AboutPage({
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
      {/* Header */}
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
        {/* Page label */}
        <div className="mb-12 border-b border-white/8 pb-4">
          <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>
            Company
          </span>
        </div>

        <h1
          className="font-black uppercase leading-[0.9] text-white"
          style={{ fontSize: "clamp(44px, 6vw, 92px)", letterSpacing: "-0.04em" }}
        >
          About Us
        </h1>

        <div className="my-8 h-[2px] bg-gold" style={{ width: "min(100%, 200px)" }} />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[16px] leading-[1.8] text-white/55">
              Jaylinx Group is a Swiss-based software development studio specialising in
              mobile apps, web platforms, and digital systems for businesses of all sizes.
              Founded with the belief that good technology should be accessible — not just
              to big corporations — we work directly with business owners to bring their
              ideas to life without the jargon.
            </p>
            <p className="mt-6 text-[16px] leading-[1.8] text-white/55">
              We handle everything end-to-end: design, development, testing, and ongoing
              support. You stay informed at every stage. No surprises, no hidden costs.
            </p>
            <button
              onClick={onRequest}
              className="mt-10 bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
              style={{ letterSpacing: "0.16em" }}
            >
              Work With Us →
            </button>
          </div>

          <div className="space-y-0">
            {[
              { label: "Founded", value: "2024" },
              { label: "Headquarters", value: "Nairobi, Kenya" },
              { label: "Projects Delivered", value: "50+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Team Size", value: "12 specialists" },
              { label: "Industries Served", value: "Retail, Finance, Health, Logistics" },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex items-baseline justify-between border-b border-white/8 py-5 ${i === 0 ? "border-t" : ""}`}
              >
                <span className="font-mono text-[10px] uppercase text-white/28" style={{ letterSpacing: "0.18em" }}>
                  {row.label}
                </span>
                <span className="text-[14px] text-white/70">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="mb-10 border-b border-white/8 pb-4">
            <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>
              Our Values
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Clarity", desc: "We communicate in plain language, always. No buzzwords, no confusion." },
              { title: "Craft", desc: "Every line of code is written to last. We take pride in what we build." },
              { title: "Partnership", desc: "We succeed when you succeed. Your goals are our goals, full stop." },
            ].map((v) => (
              <div key={v.title} className="border-l border-gold/30 pl-6">
                <h3 className="text-[18px] font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/40">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
