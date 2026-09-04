import { useMemo, useState } from "react";
import { removeSubmission, setStatus, useSubmissions, type Submission } from "../store";

const STATUSES: Submission["status"][] = ["NEW", "TRIAGED", "SCOPED"];

function timeAgo(ts: number) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const statusColor: Record<Submission["status"], string> = {
  NEW: "text-emerald",
  TRIAGED: "text-gold",
  SCOPED: "text-white/40",
};

const statusBorder: Record<Submission["status"], string> = {
  NEW: "border-emerald/30",
  TRIAGED: "border-gold/30",
  SCOPED: "border-white/14",
};

const statusLabel: Record<Submission["status"], string> = {
  NEW: "New",
  TRIAGED: "In Review",
  SCOPED: "Quoted",
};

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
  const { subs, loading, reload } = useSubmissions();
  const [filter, setFilter] = useState<"ALL" | Submission["status"]>("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "ALL" ? subs : subs.filter((s) => s.status === filter)),
    [subs, filter],
  );
  const selected = subs.find((s) => s.id === selectedId) ?? filtered[0] ?? null;

  const counts = useMemo(() => {
    const c = { total: subs.length, NEW: 0, TRIAGED: 0, SCOPED: 0 };
    subs.forEach((s) => { c[s.status]++; });
    return c;
  }, [subs]);

  async function handleSetStatus(id: string, status: Submission["status"]) {
    await setStatus(id, status);
    await reload();
  }

  async function handleDelete(id: string) {
    await removeSubmission(id);
    setSelectedId(null);
    await reload();
  }

  return (
    <div className="min-h-full bg-canvas text-white">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-canvas">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between px-8 lg:px-14">
          <span
            className="font-sans text-[11px] font-semibold uppercase text-white"
            style={{ letterSpacing: "0.28em" }}
          >
            JAYLINX <span className="text-gold">·</span> QUOTE REQUESTS
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={reload}
              className="font-mono text-[10px] uppercase text-white/28 transition-colors hover:text-white/60"
              style={{ letterSpacing: "0.18em" }}
            >
              ↻ Refresh
            </button>
            <button
              onClick={onBack}
              className="font-mono text-[10px] uppercase text-white/28 transition-colors hover:text-white/60"
              style={{ letterSpacing: "0.18em" }}
            >
              ← Back to Site
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-8 py-10 lg:px-14">
        <div className="font-mono text-[9px] uppercase text-white/28" style={{ letterSpacing: "0.24em" }}>
          Incoming Requests
        </div>
        <h1 className="mt-2 text-[26px] font-bold uppercase" style={{ letterSpacing: "-0.02em" }}>
          Quote Requests
        </h1>

        {/* Stats */}
        <div className="mt-8 flex border-t border-b border-white/8">
          {[
            { l: "Total Requests", v: counts.total },
            { l: "New", v: counts.NEW },
            { l: "In Review", v: counts.TRIAGED },
            { l: "Quoted", v: counts.SCOPED },
          ].map((m, i) => (
            <div key={m.l} className={`flex-1 px-6 py-5 ${i > 0 ? "border-l border-white/8" : ""}`}>
              <div className="text-[11px] text-white/28">{m.l}</div>
              <div
                className="mt-1.5 text-[32px] font-black"
                style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}
              >
                {String(m.v).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-6 flex gap-1">
          {(["ALL", ...STATUSES] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 font-mono text-[10px] uppercase transition-colors ${
                filter === f ? "bg-gold/10 text-gold" : "text-white/28 hover:text-white/55"
              }`}
              style={{ letterSpacing: "0.16em" }}
            >
              {f === "ALL" ? "All" : statusLabel[f]}
            </button>
          ))}
        </div>

        {/* Master-detail */}
        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* List */}
          <div className="border border-white/8">
            {loading && (
              <div className="px-6 py-16 text-center font-mono text-[11px] uppercase text-white/20" style={{ letterSpacing: "0.18em" }}>
                Loading…
              </div>
            )}
            {!loading && filtered.length === 0 && (
              <div className="px-6 py-16 text-center text-[13px] text-white/20">
                No requests yet.
              </div>
            )}
            {filtered.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`flex w-full items-center justify-between gap-4 border-b border-white/6 px-5 py-4 text-left last:border-b-0 transition-colors ${
                  selected?.id === s.id ? "bg-surface-2" : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-gold/70">{s.ref}</span>
                  </div>
                  <div className="mt-1 truncate text-[14px] font-medium">{s.name}</div>
                  <div className="truncate text-[12px] text-white/35">{s.serviceType}</div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className={`border px-2 py-0.5 text-[10px] ${statusColor[s.status]} ${statusBorder[s.status]}`}>
                    {statusLabel[s.status]}
                  </span>
                  <span className="font-mono text-[10px] text-white/22">{timeAgo(s.createdAt)}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="border border-white/8 p-7">
            {!selected ? (
              <div className="flex h-full items-center justify-center py-20 text-[13px] text-white/18">
                Select a request to view details
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] text-gold/65">{selected.ref}</div>
                    <h2 className="mt-1 text-[20px] font-bold" style={{ letterSpacing: "-0.01em" }}>
                      {selected.name}
                    </h2>
                    <div className="mt-1 text-[13px] text-white/35">
                      {selected.email}{selected.phone && ` · ${selected.phone}`}
                    </div>
                  </div>
                  <span className={`border px-2.5 py-1 text-[10px] ${statusColor[selected.status]} ${statusBorder[selected.status]}`}>
                    {statusLabel[selected.status]}
                  </span>
                </div>

                <div className="mt-6 border border-white/8 px-4 py-3">
                  <div className="text-[10px] uppercase text-gold/55" style={{ letterSpacing: "0.16em" }}>
                    Service Requested
                  </div>
                  <div className="mt-1 text-[14px] text-white/80">{selected.serviceType}</div>
                </div>

                <div className="mt-6">
                  <div className="text-[11px] uppercase text-white/28" style={{ letterSpacing: "0.18em" }}>
                    Project Description
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-[14px] leading-[1.65] text-white/75">
                    {selected.projectDesc}
                  </p>
                </div>

                {selected.company && (
                  <div className="mt-4 text-[13px] text-white/35">
                    Company: {selected.company}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/8 pt-5">
                  <span className="mr-1 text-[11px] text-white/22">Move to</span>
                  {STATUSES.map((st) => (
                    <button
                      key={st}
                      onClick={() => handleSetStatus(selected.id, st)}
                      disabled={selected.status === st}
                      className={`border px-3 py-1.5 font-mono text-[10px] uppercase transition-colors ${
                        selected.status === st
                          ? `${statusColor[st]} ${statusBorder[st]}`
                          : "border-white/12 text-white/28 hover:border-gold/40 hover:text-gold"
                      }`}
                      style={{ letterSpacing: "0.14em" }}
                    >
                      {statusLabel[st]}
                    </button>
                  ))}
                  <button
                    onClick={() => handleDelete(selected.id)}
                    className="ml-auto text-[11px] text-white/20 transition-colors hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
