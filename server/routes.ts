import type { Express } from "express";
import { createServer, type Server } from "http";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";


export async function registerRoutes(app: Express): Promise<Server> {
  // Security middleware
  app.use(helmet());
  app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }));

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
  });
  app.use("/api", limiter);



  // Public API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Testimonials endpoint (public)
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getPublishedTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Get testimonials error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Pricing plans endpoint (public)
  app.get("/api/pricing-plans", async (req, res) => {
    try {
      const plans = await storage.getActivePricingPlans();
      res.json(plans);
    } catch (error) {
      console.error("Get pricing plans error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Services endpoint (public)
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getActiveServices();
      res.json(services);
    } catch (error) {
      console.error("Get services error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form endpoint (public)
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, subject, message } = req.body;
      
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const submission = await storage.createContactSubmission({
        firstName,
        lastName,
        email,
        phone: phone || null,
        subject,
        message,
      });

      // TODO: Send email notification to staff

      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
