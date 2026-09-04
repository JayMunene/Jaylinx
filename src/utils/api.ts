import { projectId, publicAnonKey } from "../../utils/supabase/info";

const BASE = `https://${projectId}.supabase.co/functions/v1/server/make-server-aae28e7d`;

async function req(path: string, options?: RequestInit) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${publicAnonKey}`,
      apikey: publicAnonKey,
    },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

// ── Quotes ──────────────────────────────────────────────

export function fetchQuotes() {
  return req("/quotes") as Promise<any[]>;
}

export function submitQuote(data: {
  name: string;
  phone: string;
  email: string;
  company: string;
  serviceType: string;
  projectDesc: string;
  ref: string;
}) {
  return req("/quotes", { method: "POST", body: JSON.stringify(data) });
}

export function updateQuoteStatus(id: string, status: string) {
  return req(`/quotes/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
}

export function deleteQuote(id: string) {
  return req(`/quotes/${id}`, { method: "DELETE" });
}

// ── Contacts ────────────────────────────────────────────

export function submitContact(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  return req("/contacts", { method: "POST", body: JSON.stringify(data) });
}
