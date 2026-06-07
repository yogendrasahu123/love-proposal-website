import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const memories = pgTable("memories", {
  id: serial().primaryKey(),
  text: text().notNull(),
  date: text("date").notNull(),
  color: text("color").notNull().default("rose"),
  createdAt: timestamp("created_at").defaultNow(),
});
