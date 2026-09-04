import { useCallback, useEffect, useState } from "react";
import { fetchQuotes, updateQuoteStatus, deleteQuote, submitQuote } from "./utils/api";

export type Submission = {
  id: string;
  ref: string;
  name: string;
  phone: string;
  company: string;
  email: string;
  serviceType: string;
  projectDesc: string;
  createdAt: number;
  status: "NEW" | "TRIAGED" | "SCOPED";
};

function makeRef() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `JX-${new Date().getFullYear()}-${n}`;
}

export function useSubmissions() {
  const [subs, setSubs] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const data = await fetchQuotes();
      setSubs(data as Submission[]);
    } catch (e) {
      console.error("Failed to load submissions", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return { subs, loading, reload: load };
}

export async function addSubmission(
  input: Omit<Submission, "id" | "ref" | "createdAt" | "status">,
): Promise<Submission> {
  const ref = makeRef();
  const sub: Omit<Submission, "id"> = {
    ...input,
    ref,
    createdAt: Date.now(),
    status: "NEW",
  };
  const { id } = await submitQuote({ ...sub, ref });
  return { ...sub, id } as Submission;
}

export async function setStatus(id: string, status: Submission["status"]) {
  await updateQuoteStatus(id, status);
}

export async function removeSubmission(id: string) {
  await deleteQuote(id);
}
