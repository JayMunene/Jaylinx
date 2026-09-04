import Footer from "./Footer";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

export default function DonatePage({
  onBack,
  onRequest,
  onNavigate,
}: {
  onBack: () => void;
  onRequest: () => void;
  onNavigate: (page: NavPage) => void;
}) {
  return (
    <div className="min-h-full bg-canvas text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-canvas/96" style={{ backdropFilter: "blur(8px)" }}>
        <div className="mx-auto flex h-12 max-w-[1380px] items-center justify-between px-8 lg:px-14 xl:px-20">
          <button onClick={onBack} className="shrink-0" aria-label="Back to Jaylinx Group">
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

      <main className="mx-auto max-w-[1380px] px-8 pb-24 pt-28 lg:px-14 xl:px-20">
        <div className="mb-12 border-b border-white/8 pb-4">
          <span className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>
            Support Jaylinx
          </span>
        </div>

        <div className="max-w-[760px]">
          <h1 className="font-black uppercase leading-[0.9] text-white" style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.04em" }}>
            Support the work.
          </h1>
          <div className="my-8 h-[2px] w-[min(100%,220px)] bg-gold" />
          <p className="max-w-[560px] text-[16px] leading-[1.8] text-white/50">
            Your support helps us keep building useful digital tools, supporting local ideas, and creating opportunities through technology.
          </p>
        </div>

        <div className="mt-16 grid max-w-[760px] gap-6 md:grid-cols-2">
          <section className="border border-white/10 bg-surface p-8 sm:p-12">
            <div className="font-mono text-[10px] uppercase text-gold/70" style={{ letterSpacing: "0.2em" }}>
              Send via M-Pesa
            </div>
            <div className="mt-5 whitespace-nowrap font-mono text-[clamp(24px,4vw,42px)] font-bold tracking-[0.04em] text-white">
              0759846829
            </div>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/38">
              Use the number above to send your contribution via M-Pesa.
            </p>
          </section>

          <section className="border border-white/10 bg-surface p-8 sm:p-12">
            <div className="font-mono text-[10px] uppercase text-gold/70" style={{ letterSpacing: "0.2em" }}>
              Send via PayPal
            </div>
            <a
              href="mailto:jasonmunenekibicho@gmail.com?subject=Donation%20via%20PayPal"
              className="mt-5 block whitespace-nowrap font-mono text-[clamp(12px,1vw,14px)] font-bold tracking-normal text-white transition-colors hover:text-gold"
            >
              jasonmunenekibicho@gmail.com
            </a>
            <p className="mt-4 text-[13px] leading-[1.7] text-white/38">
              Send your contribution by email and we’ll confirm the payment once it lands.
            </p>
          </section>
        </div>

        <button
          onClick={onBack}
          className="mt-10 border border-gold/35 px-6 py-3 font-mono text-[10px] uppercase text-gold transition-colors hover:border-gold hover:bg-gold hover:text-canvas"
          style={{ letterSpacing: "0.16em" }}
        >
          Back to Jaylinx →
        </button>
      </main>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
