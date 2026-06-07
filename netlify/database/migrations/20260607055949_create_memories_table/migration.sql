CREATE TABLE "memories" (
	"id" serial PRIMARY KEY,
	"text" text NOT NULL,
	"date" text NOT NULL,
	"color" text DEFAULT 'rose' NOT NULL,
	"created_at" timestamp DEFAULT now()
);
