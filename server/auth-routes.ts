import { Router, Request, Response } from "express";
import { z } from "zod";
import { storage } from "./storage";
import { 
  generateToken, 
  comparePassword, 
  generateVerificationToken, 
  generatePasswordResetToken,
  authenticateToken,
  AuthenticatedRequest 
} from "./auth";
import { insertUserSchema } from "@shared/schema";

const router = Router();

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = insertUserSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
});

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// POST /api/auth/register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    
    // Check if user already exists
    const existingUser = await storage.getUserByEmail(validatedData.email);
    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email already exists" 
      });
    }

    // Create user (password hashing is handled in storage)
    const { confirmPassword, ...userData } = validatedData;
    const verificationToken = generateVerificationToken();
    
    const newUser = await storage.createUser({
      ...userData,
      verificationToken,
    });

    // Generate JWT token
    const token = generateToken(newUser);

    // Remove sensitive data from response
    const { password: _, verificationToken: __, ...userResponse } = newUser;

    res.status(201).json({
      message: "User created successfully",
      token,
      user: userResponse,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    
    // Find user by email
    const user = await storage.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Remove sensitive data from response
    const { password: _, ...userResponse } = user;

    res.json({
      message: "Login successful",
      token,
      user: userResponse,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/forgot-password
router.post("/forgot-password", async (req: Request, res: Response) => {
  try {
    const { email } = forgotPasswordSchema.parse(req.body);
    
    const user = await storage.getUserByEmail(email);
    if (!user) {
      // Don't reveal if email exists or not
      return res.json({ 
        message: "If an account with that email exists, we've sent a password reset link" 
      });
    }

    // Generate reset token
    const resetToken = generatePasswordResetToken();
    const resetExpires = new Date(Date.now() + 3600000); // 1 hour from now

    // Update user with reset token
    await storage.updateUser(user.id, {
      resetPasswordToken: resetToken,
      resetPasswordExpires: resetExpires,
    });

    // TODO: Send email with reset link
    // For now, we'll just return the token (remove this in production)
    console.log(`Password reset token for ${email}: ${resetToken}`);

    res.json({ 
      message: "If an account with that email exists, we've sent a password reset link" 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/reset-password
router.post("/reset-password", async (req: Request, res: Response) => {
  try {
    const { token, password } = resetPasswordSchema.parse(req.body);
    
    // Find user by reset token
    const users = await storage.getAllUsers?.() || [];
    const user = users.find(u => 
      u.resetPasswordToken === token && 
      u.resetPasswordExpires && 
      u.resetPasswordExpires > new Date()
    );

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Update user password and clear reset token
    await storage.updateUser(user.id, {
      password: await storage.hashPassword?.(password) || password,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    });

    res.json({ message: "Password reset successful" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/auth/me
router.get("/me", authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Remove sensitive data from response
    const { password: _, ...userResponse } = req.user;
    
    res.json({ user: userResponse });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/verify-email
router.post("/verify-email", async (req: Request, res: Response) => {
  try {
    const { token } = z.object({ token: z.string() }).parse(req.body);
    
    // Find user by verification token
    const users = await storage.getAllUsers?.() || [];
    const user = users.find(u => u.verificationToken === token);

    if (!user) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    // Update user as verified
    await storage.updateUser(user.id, {
      isVerified: true,
      verificationToken: null,
    });

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    console.error("Email verification error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST /api/auth/logout
router.post("/logout", authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  // In a stateless JWT system, logout is handled client-side by removing the token
  // For additional security, you could implement a token blacklist
  res.json({ message: "Logout successful" });
});

export default router;
