# Overview

This is a full-stack web application for Mi Vision Eye Care, a San Antonio-based optometry practice. The application serves as a business website showcasing eye care services, allowing appointment bookings, and providing information about the practice. Built with a modern tech stack including React, TypeScript, Express, and Drizzle ORM with PostgreSQL.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**React with TypeScript**: The client-side application is built using React 18 with TypeScript for type safety. The application uses a component-based architecture with reusable UI components.

**UI Framework**: Utilizes shadcn/ui components built on top of Radix UI primitives, providing a comprehensive set of accessible and customizable UI components. Styling is handled through Tailwind CSS with custom CSS variables for theming.

**Routing**: Uses Wouter for client-side routing, providing a lightweight alternative to React Router with a simple API for navigation.

**State Management**: Implements TanStack React Query for server state management, handling API calls, caching, and synchronization between client and server data.

**Build System**: Vite serves as the build tool and development server, offering fast hot module replacement and optimized production builds.

## Backend Architecture

**Express Server**: The server is built with Express.js running on Node.js, providing a RESTful API architecture. The server uses TypeScript for type safety and includes middleware for JSON parsing, URL encoding, and request logging.

**Storage Layer**: Implements an abstraction layer with an `IStorage` interface, currently using an in-memory implementation (`MemStorage`) for development. The interface defines methods for user management (CRUD operations).

**Development Integration**: In development mode, the server integrates with Vite middleware for seamless full-stack development experience with hot reloading.

**Error Handling**: Centralized error handling middleware captures and formats errors consistently across all API endpoints.

## Data Storage Solutions

**Database Configuration**: Configured to use PostgreSQL through Drizzle ORM with connection pooling via Neon Database serverless driver. The database URL is managed through environment variables.

**Schema Management**: Database schema is defined using Drizzle ORM with TypeScript, currently including a users table with UUID primary keys, username, and password fields. Schema validation is handled through Zod schemas.

**Migration System**: Drizzle Kit handles database migrations with configuration pointing to PostgreSQL dialect and schema files in the shared directory.

## External Dependencies

**Database Services**: 
- Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- PostgreSQL session store (connect-pg-simple) for session management

**UI and Styling**:
- Radix UI component primitives for accessible UI components
- Tailwind CSS for utility-first styling
- Lucide React for iconography
- Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

**Development and Build Tools**:
- Vite for build tooling and development server
- ESBuild for server-side bundling
- TypeScript for type checking
- Replit-specific plugins for development environment integration

**Third-party Integrations**:
- External booking system integration (Weave booking platform)
- Image hosting through Sanity CDN for optimized web delivery
- Google Fonts CDN for typography

**Form and Validation**:
- React Hook Form with Hookform Resolvers for form management
- Zod for runtime type validation and schema definition
- Drizzle-Zod for database schema validation integration