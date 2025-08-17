import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-500">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-primary-600 text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 touch-manipulation"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-orange-500 text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 touch-manipulation"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Community />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
