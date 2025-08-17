import { eq, and } from "drizzle-orm";
import { db, users, patientProfiles, appointments, contactSubmissions, testimonials, pricingPlans, services } from "./database";
import type { 
  User, 
  NewUser, 
  PatientProfile, 
  NewPatientProfile,
  Appointment,
  NewAppointment,
  ContactSubmission,
  NewContactSubmission,
  Testimonial,
  NewTestimonial,
  PricingPlan,
  NewPricingPlan,
  Service,
  NewService
} from "@shared/schema";
import bcrypt from "bcryptjs";

export interface IStorage {
  // User management
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: NewUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User | undefined>;
  getAllUsers?(): Promise<User[]>;
  
  // Patient profiles
  getPatientProfile(userId: string): Promise<PatientProfile | undefined>;
  createPatientProfile(profile: NewPatientProfile): Promise<PatientProfile>;
  updatePatientProfile(userId: string, updates: Partial<PatientProfile>): Promise<PatientProfile | undefined>;
  
  // Appointments
  getAppointments(patientId?: string): Promise<Appointment[]>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  createAppointment(appointment: NewAppointment): Promise<Appointment>;
  updateAppointment(id: string, updates: Partial<Appointment>): Promise<Appointment | undefined>;
  
  // Contact submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: NewContactSubmission): Promise<ContactSubmission>;
  updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined>;
  
  // Testimonials
  getPublishedTestimonials(): Promise<Testimonial[]>;
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: NewTestimonial): Promise<Testimonial>;
  updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | undefined>;
  
  // Pricing plans
  getActivePricingPlans(): Promise<PricingPlan[]>;
  getAllPricingPlans(): Promise<PricingPlan[]>;
  createPricingPlan(plan: NewPricingPlan): Promise<PricingPlan>;
  updatePricingPlan(id: string, updates: Partial<PricingPlan>): Promise<PricingPlan | undefined>;
  
  // Services
  getActiveServices(): Promise<Service[]>;
  getAllServices(): Promise<Service[]>;
  createService(service: NewService): Promise<Service>;
  updateService(id: string, updates: Partial<Service>): Promise<Service | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User management
  async getUser(id: string): Promise<User | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0];
  }

  async createUser(user: NewUser): Promise<User> {
    if (!db) throw new Error("Database not available");
    // Hash password before storing
    const hashedPassword = await bcrypt.hash(user.password, 12);
    const userWithHashedPassword = { ...user, password: hashedPassword };
    
    const result = await db.insert(users).values(userWithHashedPassword).returning();
    return result[0];
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    if (!db) return undefined;
    const result = await db.update(users).set(updates).where(eq(users.id, id)).returning();
    return result[0];
  }

  async getAllUsers(): Promise<User[]> {
    if (!db) return [];
    return await db.select().from(users);
  }

  // Patient profiles
  async getPatientProfile(userId: string): Promise<PatientProfile | undefined> {
    const result = await db.select().from(patientProfiles).where(eq(patientProfiles.userId, userId)).limit(1);
    return result[0];
  }

  async createPatientProfile(profile: NewPatientProfile): Promise<PatientProfile> {
    const result = await db.insert(patientProfiles).values(profile).returning();
    return result[0];
  }

  async updatePatientProfile(userId: string, updates: Partial<PatientProfile>): Promise<PatientProfile | undefined> {
    const result = await db.update(patientProfiles).set(updates).where(eq(patientProfiles.userId, userId)).returning();
    return result[0];
  }

  // Appointments
  async getAppointments(patientId?: string): Promise<Appointment[]> {
    if (patientId) {
      return await db.select().from(appointments).where(eq(appointments.patientId, patientId));
    }
    return await db.select().from(appointments);
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    const result = await db.select().from(appointments).where(eq(appointments.id, id)).limit(1);
    return result[0];
  }

  async createAppointment(appointment: NewAppointment): Promise<Appointment> {
    const result = await db.insert(appointments).values(appointment).returning();
    return result[0];
  }

  async updateAppointment(id: string, updates: Partial<Appointment>): Promise<Appointment | undefined> {
    const result = await db.update(appointments).set(updates).where(eq(appointments.id, id)).returning();
    return result[0];
  }

  // Contact submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async createContactSubmission(submission: NewContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined> {
    const result = await db.update(contactSubmissions).set(updates).where(eq(contactSubmissions.id, id)).returning();
    return result[0];
  }

  // Testimonials
  async getPublishedTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(
      and(eq(testimonials.isPublished, true), eq(testimonials.isApproved, true))
    );
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: NewTestimonial): Promise<Testimonial> {
    const result = await db.insert(testimonials).values(testimonial).returning();
    return result[0];
  }

  async updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | undefined> {
    const result = await db.update(testimonials).set(updates).where(eq(testimonials.id, id)).returning();
    return result[0];
  }

  // Pricing plans
  async getActivePricingPlans(): Promise<PricingPlan[]> {
    return await db.select().from(pricingPlans).where(eq(pricingPlans.isActive, true));
  }

  async getAllPricingPlans(): Promise<PricingPlan[]> {
    return await db.select().from(pricingPlans);
  }

  async createPricingPlan(plan: NewPricingPlan): Promise<PricingPlan> {
    const result = await db.insert(pricingPlans).values(plan).returning();
    return result[0];
  }

  async updatePricingPlan(id: string, updates: Partial<PricingPlan>): Promise<PricingPlan | undefined> {
    const result = await db.update(pricingPlans).set(updates).where(eq(pricingPlans.id, id)).returning();
    return result[0];
  }

  // Services
  async getActiveServices(): Promise<Service[]> {
    return await db.select().from(services).where(eq(services.isActive, true));
  }

  async getAllServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: NewService): Promise<Service> {
    const result = await db.insert(services).values(service).returning();
    return result[0];
  }

  async updateService(id: string, updates: Partial<Service>): Promise<Service | undefined> {
    const result = await db.update(services).set(updates).where(eq(services.id, id)).returning();
    return result[0];
  }
}

// Keep the memory storage class for development/testing
export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private patientProfiles: Map<string, PatientProfile> = new Map();
  private appointments: Map<string, Appointment> = new Map();
  private contactSubmissions: Map<string, ContactSubmission> = new Map();
  private testimonials: Map<string, Testimonial> = new Map();
  private pricingPlans: Map<string, PricingPlan> = new Map();
  private services: Map<string, Service> = new Map();

  // User management
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(user: NewUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    const newUser: User = {
      id: globalThis.globalThis.crypto.randomUUID(),
      ...user,
      password: hashedPassword,
      isVerified: false,
      verificationToken: null,
      resetPasswordToken: null,
      resetPasswordExpires: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(newUser.id, newUser);
    return newUser;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Patient profiles
  async getPatientProfile(userId: string): Promise<PatientProfile | undefined> {
    return Array.from(this.patientProfiles.values()).find(profile => profile.userId === userId);
  }

  async createPatientProfile(profile: NewPatientProfile): Promise<PatientProfile> {
    const newProfile: PatientProfile = {
      id: globalThis.globalThis.crypto.randomUUID(),
      ...profile,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.patientProfiles.set(newProfile.id, newProfile);
    return newProfile;
  }

  async updatePatientProfile(userId: string, updates: Partial<PatientProfile>): Promise<PatientProfile | undefined> {
    const profile = Array.from(this.patientProfiles.values()).find(p => p.userId === userId);
    if (!profile) return undefined;
    const updatedProfile = { ...profile, ...updates, updatedAt: new Date() };
    this.patientProfiles.set(profile.id, updatedProfile);
    return updatedProfile;
  }

  // Appointments
  async getAppointments(patientId?: string): Promise<Appointment[]> {
    const allAppointments = Array.from(this.appointments.values());
    return patientId ? allAppointments.filter(apt => apt.patientId === patientId) : allAppointments;
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(appointment: NewAppointment): Promise<Appointment> {
    const newAppointment: Appointment = {
      id: globalThis.globalThis.crypto.randomUUID(),
      ...appointment,
      reminderSent: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.appointments.set(newAppointment.id, newAppointment);
    return newAppointment;
  }

  async updateAppointment(id: string, updates: Partial<Appointment>): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (!appointment) return undefined;
    const updatedAppointment = { ...appointment, ...updates, updatedAt: new Date() };
    this.appointments.set(id, updatedAppointment);
    return updatedAppointment;
  }

  // Contact submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(submission: NewContactSubmission): Promise<ContactSubmission> {
    const newSubmission: ContactSubmission = {
      id: globalThis.crypto.randomUUID(),
      ...submission,
      status: "new",
      assignedTo: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.contactSubmissions.set(newSubmission.id, newSubmission);
    return newSubmission;
  }

  async updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    if (!submission) return undefined;
    const updatedSubmission = { ...submission, ...updates, updatedAt: new Date() };
    this.contactSubmissions.set(id, updatedSubmission);
    return updatedSubmission;
  }

  // Testimonials
  async getPublishedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isPublished && t.isApproved);
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(testimonial: NewTestimonial): Promise<Testimonial> {
    const newTestimonial: Testimonial = {
      id: globalThis.crypto.randomUUID(),
      ...testimonial,
      isApproved: false,
      isPublished: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.testimonials.set(newTestimonial.id, newTestimonial);
    return newTestimonial;
  }

  async updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (!testimonial) return undefined;
    const updatedTestimonial = { ...testimonial, ...updates, updatedAt: new Date() };
    this.testimonials.set(id, updatedTestimonial);
    return updatedTestimonial;
  }

  // Pricing plans
  async getActivePricingPlans(): Promise<PricingPlan[]> {
    return Array.from(this.pricingPlans.values()).filter(p => p.isActive);
  }

  async getAllPricingPlans(): Promise<PricingPlan[]> {
    return Array.from(this.pricingPlans.values());
  }

  async createPricingPlan(plan: NewPricingPlan): Promise<PricingPlan> {
    const newPlan: PricingPlan = {
      id: globalThis.crypto.randomUUID(),
      ...plan,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.pricingPlans.set(newPlan.id, newPlan);
    return newPlan;
  }

  async updatePricingPlan(id: string, updates: Partial<PricingPlan>): Promise<PricingPlan | undefined> {
    const plan = this.pricingPlans.get(id);
    if (!plan) return undefined;
    const updatedPlan = { ...plan, ...updates, updatedAt: new Date() };
    this.pricingPlans.set(id, updatedPlan);
    return updatedPlan;
  }

  // Services
  async getActiveServices(): Promise<Service[]> {
    return Array.from(this.services.values()).filter(s => s.isActive);
  }

  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(service: NewService): Promise<Service> {
    const newService: Service = {
      id: globalThis.crypto.randomUUID(),
      ...service,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.services.set(newService.id, newService);
    return newService;
  }

  async updateService(id: string, updates: Partial<Service>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;
    const updatedService = { ...service, ...updates, updatedAt: new Date() };
    this.services.set(id, updatedService);
    return updatedService;
  }
}

// Use database storage in production, memory storage for development/testing
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
