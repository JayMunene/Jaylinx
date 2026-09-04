import { useState } from "react";
import Footer from "./Footer";
import { submitContact } from "../utils/api";
import logo from "@/imports/_EA7A32E7-9DFC-493C-8B79-4AF038894C97_-Photoroom.png";

type NavPage = "about" | "process" | "portfolio" | "contact";

export default function ContactPage({
  onBack,
  onRequest,
  onNavigate,
}: {
  onBack: () => void;
  onRequest: (need?: string) => void;
  onNavigate: (page: NavPage) => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    submitContact({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
    }).catch(console.error);
  }

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
          Contact Us
        </h1>

        <div className="my-8 h-[2px] bg-gold" style={{ width: "min(100%, 200px)" }} />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="text-[16px] leading-[1.8] text-white/50">
              Have a project in mind, a question, or just want to say hello? We'd love to
              hear from you. We typically respond within one business day.
            </p>

            <div className="mt-12 space-y-0">
              {[
                { label: "Email", value: "jaylinxgroup@gmail.com" },
                { label: "Office", value: "Nairobi, Kenya 00100" },
                { label: "Response time", value: "Within 1 business day" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`border-b border-white/8 py-6 ${i === 0 ? "border-t" : ""}`}
                >
                  <div className="font-mono text-[9px] uppercase text-white/28 mb-1" style={{ letterSpacing: "0.2em" }}>
                    {row.label}
                  </div>
                  <div className="text-[14px] text-white/65 whitespace-pre-line">{row.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="font-mono text-[9px] uppercase text-white/28 mb-4" style={{ letterSpacing: "0.2em" }}>
                Looking for a quote?
              </div>
              <button
                onClick={onRequest}
                className="border border-gold/35 px-6 py-2.5 font-mono text-[10px] uppercase text-gold transition-all hover:border-gold hover:bg-gold hover:text-canvas"
                style={{ letterSpacing: "0.16em" }}
              >
                Open Quote Form →
              </button>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center py-12">
                <div className="text-gold text-[32px] mb-4">✓</div>
                <h3 className="text-[22px] font-bold text-white">Message sent.</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/42">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 font-mono text-[10px] uppercase text-white/28 transition-colors hover:text-white/60"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: "name", label: "Your Name", type: "text", required: true },
                  { id: "email", label: "Email Address", type: "email", required: true },
                  { id: "company", label: "Company (optional)", type: "text", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-mono text-[9px] uppercase text-gold/60 mb-2"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full border-b border-white/12 bg-transparent pb-2.5 font-mono text-[13px] text-white outline-none transition-colors focus:border-gold placeholder:text-white/18"
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[9px] uppercase text-gold/60 mb-2"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none border-b border-white/12 bg-transparent pb-2.5 font-mono text-[13px] text-white outline-none transition-colors focus:border-gold placeholder:text-white/18"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
                  style={{ letterSpacing: "0.16em" }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer onRequest={onRequest} onNavigate={onNavigate} />
    </div>
  );
}
