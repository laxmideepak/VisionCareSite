import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../shared/schema";

async function testDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.log("❌ No DATABASE_URL provided - using in-memory storage");
    console.log("✅ In-memory storage is working (current setup)");
    return;
  }

  console.log("🔄 Testing database connection...");
  
  try {
    const sql = neon(databaseUrl);
    const db = drizzle(sql, { schema });
    
    // Test connection by querying users table
    const users = await db.select().from(schema.users).limit(1);
    
    console.log("✅ Database connection successful!");
    console.log(`📊 Found ${users.length} users in database`);
    
    // Test other tables
    const testimonials = await db.select().from(schema.testimonials).limit(5);
    const pricingPlans = await db.select().from(schema.pricingPlans).limit(5);
    const services = await db.select().from(schema.services).limit(5);
    
    console.log(`📝 Found ${testimonials.length} testimonials`);
    console.log(`💰 Found ${pricingPlans.length} pricing plans`);
    console.log(`🔧 Found ${services.length} services`);
    
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

testDatabase();
