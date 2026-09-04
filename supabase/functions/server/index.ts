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
		allowHeaders: ["Content-Type", "Authorization", "apikey"],
		allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
	}),
);

const health = (c: any) => {
	return c.json({ status: "ok" });
};

app.get("/", health);
app.get("/health", health);
app.get("/make-server-aae28e7d/health", health);

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

Deno.serve((request) => {
	const url = new URL(request.url);
	const routeMarker = "/make-server-aae28e7d";
	const routeIndex = url.pathname.indexOf(routeMarker);
	if (routeIndex >= 0) {
		url.pathname = url.pathname.slice(routeIndex);
	} else if (url.pathname.endsWith("/health")) {
		url.pathname = "/health";
	} else if (url.pathname.endsWith("/quotes")) {
		url.pathname = "/quotes";
	} else if (url.pathname.endsWith("/contacts")) {
		url.pathname = "/contacts";
	} else {
		url.pathname = "/";
	}
	if (url.pathname !== new URL(request.url).pathname) {
		request = new Request(url, request);
	}
	return app.fetch(request);
});