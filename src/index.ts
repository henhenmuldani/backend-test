import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("OK"));

const port = Number(process.env.PORT) || 80;

Bun.serve({
  fetch: app.fetch,
  port,
  hostname: "0.0.0.0",
});

console.log(`Server running on http://0.0.0.0:${port}`);
