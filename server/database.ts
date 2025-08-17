import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

// Database connection - only initialize if we have a valid DATABASE_URL
let db: any = null;

if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith("postgresql://")) {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema });
} else {
  console.log("No valid DATABASE_URL provided, using in-memory storage");
}

export { db };

// Export all schema for easy access
export * from "@shared/schema";
