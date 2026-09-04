import { useEffect, useState } from "react";
import { addSubmission, type Submission } from "../store";
import { SERVICE_TYPES } from "./ui";

const inputCls =
  "w-full border-0 border-b border-white/12 bg-transparent px-0 py-2.5 text-[14px] text-white outline-none transition-colors placeholder:text-white/20 focus:border-gold";

const selectCls =
  "w-full appearance-none border-0 border-b border-white/12 bg-transparent py-2.5 text-[14px] text-white outline-none transition-colors focus:border-gold";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-white/40">{label}</span>
      {children}
    </label>
  );
}

export default function IntakeModal({
  open,
  onClose,
  presetNeed,
}: {
  open: boolean;
  onClose: () => void;
  presetNeed?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [projectDesc, setProjectDesc] = useState("");
  const [receipt, setReceipt] = useState<Submission | null>(null);

  useEffect(() => {
    if (open && presetNeed && SERVICE_TYPES.includes(presetNeed)) {
      setServiceType(presetNeed);
    }
  }, [open, presetNeed]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const valid =
    name.trim() &&
    phone.trim() &&
    /.+@.+\..+/.test(email) &&
    projectDesc.trim().length > 10;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    try {
      const sub = await addSubmission({
        name: name.trim(),
        phone: phone.trim(),
        company: "",
        email: email.trim(),
        serviceType,
        projectDesc: projectDesc.trim(),
      });
      setReceipt(sub);
    } catch (err) {
      console.error("Failed to submit quote", err);
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setServiceType(SERVICE_TYPES[0]);
    setProjectDesc("");
    setReceipt(null);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-canvas/85"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex h-full w-full max-w-[520px] flex-col border-l border-white/8 bg-surface">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/8 px-8 py-5">
          <div>
            <div className="text-[18px] font-bold text-white">
              Get a Free Quote
            </div>
            <div className="mt-0.5 text-[13px] text-white/40">
              Tell us about your project — we'll get back to you within 24 hours.
            </div>
          </div>
          <button
            onClick={reset}
            className="ml-4 shrink-0 text-[20px] leading-none text-white/22 transition-colors hover:text-white/55"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {receipt ? (
            /* Success */
            <div className="flex flex-col items-start gap-6 px-8 py-12">
              <div className="flex size-12 items-center justify-center border border-emerald/30 text-emerald text-xl">
                ✓
              </div>
              <h3 className="text-[22px] font-bold">
                We've received your request!
              </h3>
              <p className="text-[14px] leading-[1.7] text-white/45">
                Thank you, {receipt.name.split(" ")[0]}. We'll review your
                project and get back to you within one business day.
              </p>
              <div className="w-full space-y-3 border border-white/8 bg-canvas px-6 py-5 text-[13px]">
                <div className="flex justify-between">
                  <span className="text-white/30">Reference</span>
                  <span className="text-gold/80 font-mono">{receipt.ref}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/30">Service</span>
                  <span className="text-white/70">{receipt.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/30">We'll contact you at</span>
                  <span className="text-white/70">{receipt.email}</span>
                </div>
              </div>
              <button
                onClick={reset}
                className="bg-gold px-6 py-3 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright"
                style={{ letterSpacing: "0.14em" }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={submit} className="space-y-6 px-8 py-8">
              <Field label="Your name">
                <input
                  className={inputCls}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Amina K."
                />
              </Field>

              <Field label="Phone number">
                <input
                  className={inputCls}
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 712 345 678"
                />
              </Field>

              <Field label="Email address">
                <input
                  className={inputCls}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@brandname.com"
                />
              </Field>

              <Field label="What do you need?">
                <select
                  className={selectCls}
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  {SERVICE_TYPES.map((o) => (
                    <option key={o} className="bg-canvas">
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Describe your project">
                <textarea
                  className={`${inputCls} min-h-[140px] resize-y pt-2.5 leading-[1.65]`}
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  placeholder="We need a customer portal for our Nairobi-based team, with booking, payments, and reporting."
                />
              </Field>

              <div className="flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-[12px] text-white/22">
                  We reply within one business day.
                </span>
                <button
                  type="submit"
                  disabled={!valid}
                  className="bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ letterSpacing: "0.14em" }}
                >
                  Send Request →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
