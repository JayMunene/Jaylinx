import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[9px] font-medium uppercase text-gold ${className}`}
      style={{ letterSpacing: "0.24em" }}
    >
      {children}
    </div>
  );
}

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 font-mono text-[9px] uppercase text-white/35"
      style={{ letterSpacing: "0.16em" }}
    >
      <span className="pulse-dot inline-block size-1.5 bg-emerald" />
      {children}
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

export function GoldButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled,
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 bg-gold px-7 py-3.5 font-mono text-[11px] uppercase text-canvas transition-colors duration-200 hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      style={{ letterSpacing: "0.16em" }}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled,
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 border border-white/18 px-7 py-3.5 font-mono text-[11px] uppercase text-white/60 transition-all duration-200 hover:border-gold hover:text-gold disabled:opacity-40 ${className}`}
      style={{ letterSpacing: "0.16em" }}
    >
      {children}
    </button>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block transition-transform duration-200 group-hover:translate-x-1.5 ${className}`}
    >
      →
    </span>
  );
}

export const SERVICE_TYPES = [
  "Mobile App",
  "Website",
  "Web Application / Platform",
  "Cost & Systems Review",
  "PC Tune-Up & Optimization",
  "Other",
];
