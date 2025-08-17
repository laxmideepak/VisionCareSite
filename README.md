# Mi Vision Eye Care Website

An exact clone of the Mi Vision Eye Care website featuring comprehensive eye care services, testimonials, and professional medical design.

## 🏥 About Mi Vision Eye Care

Mi Vision Eye Care is a San Antonio-based optometry practice specializing in comprehensive eye care services. This website showcases their services, allows appointment bookings, and provides information about their veteran-owned practice.

## ✨ Features

- **Professional Design**: Clean, medical-focused design with blue and orange color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Service Showcase**: Complete overview of eye care services offered
- **IPL Therapy**: Dedicated section for Intense Pulsed Light dry eye treatment
- **Patient Testimonials**: Real Google reviews from satisfied patients
- **Online Booking**: Integration with Weave booking platform
- **Team Information**: Meet Dr. Pedro Cuba and the veteran-owned business story
- **Pricing Plans**: Transparent pricing for different exam packages
- **Bilingual Support**: Se Habla Español

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** components built on Radix UI
- **Wouter** for client-side routing
- **TanStack React Query** for server state management
- **Lucide React** for icons

### Backend
- **Express.js** with TypeScript
- **Node.js** runtime
- **Drizzle ORM** for database operations
- **PostgreSQL** via Neon Database

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/krsayani/mi-vision-eye-care.git
cd mi-vision-eye-care
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Add your database URL
DATABASE_URL="your-postgresql-connection-string"
```

4. Run database migrations:
```bash
npm run db:migrate
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configs
│   │   └── index.css       # Global styles and Tailwind
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Data storage interface
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database and validation schemas
└── README.md
```

## 🎨 Design System

- **Primary Color**: Blue (`#3B82F6`)
- **Accent Color**: Orange (`#F97316`)
- **Typography**: Inter font family
- **Components**: shadcn/ui component library
- **Icons**: Lucide React

## 📱 Key Components

- **Header**: Navigation with logo and CTA buttons
- **Hero**: Eye-catching banner with discount offer
- **IPL Therapy**: Dry eye treatment information
- **Services**: Comprehensive service showcase
- **Testimonials**: Patient reviews and ratings
- **Team**: Dr. Cuba and business information
- **Pricing**: Transparent pricing plans
- **Contact**: Booking and contact information
- **Footer**: Business details and links

## 🏗️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

### Adding New Components

1. Create component in `client/src/components/`
2. Export from component file
3. Import and use in pages or other components
4. Follow existing styling patterns with Tailwind CSS

## 🔧 Configuration

### Tailwind CSS
Custom colors and design tokens are defined in `tailwind.config.ts`

### Database
Database schema is defined in `shared/schema.ts` using Drizzle ORM

### Build
Vite configuration in `vite.config.ts` handles both frontend and backend builds

## 📞 Contact Information

**Mi Vision Eye Care**
- Address: 4522 Fredericksburg Rd, San Antonio, TX 78201
- Phone: (210) 923-2020
- Online Booking: [Book Appointment](https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment)

## 🏆 Business Highlights

- ⭐ 800+ 5-Star Google Reviews
- 🇺🇸 Veteran-Owned Business
- 🕐 Same Day Appointments
- 💎 Exclusive Cartier, Versace & Gucci Retailer
- 💰 Lowest Prices in San Antonio
- 🌎 Se Habla Español

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ for Mi Vision Eye Care