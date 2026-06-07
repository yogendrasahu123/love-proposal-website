import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { memories } from "../../db/schema.js";
import { desc } from "drizzle-orm";

export default async (req: Request) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method === "GET") {
    const allMemories = await db
      .select()
      .from(memories)
      .orderBy(desc(memories.createdAt));
    return Response.json(allMemories, { headers });
  }

  if (req.method === "POST") {
    const { text, date, color } = await req.json();
    if (!text?.trim()) {
      return Response.json({ error: "Memory text is required" }, { status: 400, headers });
    }
    const colors = ["rose", "pink", "purple"];
    const safeColor = colors.includes(color) ? color : colors[0];
    const [memory] = await db
      .insert(memories)
      .values({ text: text.trim(), date: date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), color: safeColor })
      .returning();
    return Response.json(memory, { status: 201, headers });
  }

  return new Response("Method not allowed", { status: 405, headers });
};

export const config: Config = {
  path: "/api/memories",
};
