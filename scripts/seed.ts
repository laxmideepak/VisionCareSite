import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../shared/schema";
import bcrypt from "bcryptjs";

async function seedDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error("❌ DATABASE_URL environment variable is required");
    process.exit(1);
  }

  console.log("🌱 Starting database seeding...");
  
  try {
    const sql = neon(databaseUrl);
    const db = drizzle(sql, { schema });

    // Create admin user
    const adminPassword = await bcrypt.hash("admin123", 12);
    const [adminUser] = await db.insert(schema.users).values({
      email: "admin@gotooptical.com",
      password: adminPassword,
      firstName: "Admin",
      lastName: "User",
      role: "admin",
      isVerified: true,
    }).returning();

    console.log("✅ Created admin user:", adminUser.email);

    // Create staff user
    const staffPassword = await bcrypt.hash("staff123", 12);
    const [staffUser] = await db.insert(schema.users).values({
      email: "staff@gotooptical.com",
      password: staffPassword,
      firstName: "Staff",
      lastName: "Member",
      role: "staff",
      isVerified: true,
    }).returning();

    console.log("✅ Created staff user:", staffUser.email);

    // Create sample pricing plans
    const pricingPlans = [
      {
        name: "Basic Eye Exam",
        price: "59.00",
        features: [
          "Basic eye exam includes vision test",
          "Prescription",
          "Eye health screening"
        ],
        displayOrder: 1,
      },
      {
        name: "Complete Eye Exam",
        price: "99.00",
        features: [
          "Complete eye exam includes all basic tests",
          "Retinal imaging"
        ],
        displayOrder: 2,
      },
      {
        name: "Premium Eye Exam",
        price: "129.00",
        features: [
          "Premium eye exam includes all tests",
          "Contact lens fitting"
        ],
        displayOrder: 3,
      },
      {
        name: "Full Eye Care Package",
        price: "149.00",
        features: [
          "Full eye care package includes exam",
          "Contact lenses",
          "Glasses prescription"
        ],
        displayOrder: 4,
      }
    ];

    for (const plan of pricingPlans) {
      await db.insert(schema.pricingPlans).values(plan);
    }

    console.log("✅ Created pricing plans");

    // Create sample services
    const services = [
      {
        name: "Comprehensive Eye Exams",
        description: "Complete eye health evaluation including vision testing, eye pressure measurement, and retinal examination.",
        shortDescription: "Complete eye health evaluation",
        displayOrder: 1,
      },
      {
        name: "IPL Therapy for Dry Eyes",
        description: "Intense Pulsed Light therapy for treating dry eye syndrome and meibomian gland dysfunction.",
        shortDescription: "Advanced dry eye treatment",
        displayOrder: 2,
      },
      {
        name: "Contact Lens Fitting",
        description: "Professional contact lens fitting and consultation for all types of contact lenses.",
        shortDescription: "Professional contact lens fitting",
        displayOrder: 3,
      },
      {
        name: "Prescription Glasses",
        description: "Wide selection of designer frames including Cartier, Versace, and Gucci.",
        shortDescription: "Designer prescription glasses",
        displayOrder: 4,
      },
      {
        name: "Prescription Sunglasses",
        description: "Protect your eyes with prescription sunglasses in designer frames.",
        shortDescription: "Designer prescription sunglasses",
        displayOrder: 5,
      }
    ];

    for (const service of services) {
      await db.insert(schema.services).values(service);
    }

    console.log("✅ Created services");

    // Create sample testimonials
    const testimonials = [
      {
        patientName: "Ayerim Rios",
        patientImage: "https://cdn.sanity.io/images/k0mgimab/production/ff42a19f57ad9ccc0305b4ab89e4ae0932f21946-200x200.webp?w=96&fm=webp",
        rating: 5,
        testimonialText: "I come here once a year to check my prescription and Elizabeth and Dr Cuba never disappoints. The style of frames are my fav and my prescription sunglasses 😎 and even though I'm not a big brands girl I fell in love with my Versace & Gucci 😍 thank you Mi Vision",
        isApproved: true,
        isPublished: true,
      },
      {
        patientName: "Susana Williams",
        patientImage: "https://cdn.sanity.io/images/k0mgimab/production/4113f9232ede6b54e6d97bdeb3cf62c7e4f14dbc-200x200.webp?w=96&fm=webp",
        rating: 5,
        testimonialText: "I easily booked an appointment for the same day over the phone & everyone was really nice. My son's glasses were ready in an hour & they even showed him how to clean them. I also loved the decorated entrance that was perfect for the pictures I took. Overall it was a pleasant experience.",
        isApproved: true,
        isPublished: true,
      },
      {
        patientName: "Ronni Link",
        patientImage: "https://cdn.sanity.io/images/k0mgimab/production/ffa67cda82220a22b2a543c5a1859a5228b5f859-200x200.webp?w=96&fm=webp",
        rating: 5,
        testimonialText: "The ABSOLUTELY BEST eyeglass place I've ever gone to. Dr. Joby and his staff are awesome! I've used eye glasses for 25 years and NEVER have I been to an optometrist that cares as much for their clients, treat them like family, and go out of their way to make sure you can afford what you need. Thank you. You guys are a blessing.",
        isApproved: true,
        isPublished: true,
      }
    ];

    for (const testimonial of testimonials) {
      await db.insert(schema.testimonials).values(testimonial);
    }

    console.log("✅ Created testimonials");

    console.log("🎉 Database seeding completed successfully!");
    console.log("\n📋 Default Accounts Created:");
    console.log("Admin: admin@gotooptical.com / admin123");
    console.log("Staff: staff@gotooptical.com / staff123");
    
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedDatabase();
