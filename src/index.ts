import { Hono } from "hono";

const app = new Hono();

Bun.serve({
  fetch: app.fetch,
  port: 3000,
  hostname: "0.0.0.0",
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
