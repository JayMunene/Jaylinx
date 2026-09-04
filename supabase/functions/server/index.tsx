import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

app.get("/make-server-aae28e7d/health", (c) => {
  return c.json({ status: "ok" });
});

// ── QUOTES ────────────────────────────────────────────────

app.post("/make-server-aae28e7d/quotes", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const entry = { id, ...body, createdAt: Date.now(), status: "NEW" };
    await kv.set(`quote:${id}`, entry);
    return c.json({ ok: true, id }, 201);
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

app.get("/make-server-aae28e7d/quotes", async (c) => {
  try {
    const entries = await kv.getByPrefix("quote:");
    entries.sort((a: any, b: any) => b.createdAt - a.createdAt);
    return c.json(entries);
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

app.patch("/make-server-aae28e7d/quotes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { status } = await c.req.json();
    const entry = await kv.get(`quote:${id}`);
    if (!entry) return c.json({ ok: false, error: "Not found" }, 404);
    await kv.set(`quote:${id}`, { ...entry, status });
    return c.json({ ok: true });
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

app.delete("/make-server-aae28e7d/quotes/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`quote:${id}`);
    return c.json({ ok: true });
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

// ── CONTACTS ─────────────────────────────────────────────

app.post("/make-server-aae28e7d/contacts", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const entry = { id, ...body, createdAt: Date.now() };
    await kv.set(`contact:${id}`, entry);
    return c.json({ ok: true, id }, 201);
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

app.get("/make-server-aae28e7d/contacts", async (c) => {
  try {
    const entries = await kv.getByPrefix("contact:");
    entries.sort((a: any, b: any) => b.createdAt - a.createdAt);
    return c.json(entries);
  } catch (err) {
    return c.json({ ok: false, error: String(err) }, 500);
  }
});

Deno.serve(app.fetch);
