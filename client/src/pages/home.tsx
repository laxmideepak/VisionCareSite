import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-500">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <i className="fas fa-phone mr-2"></i>Call Us
            </a>
            <a 
              href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-200"
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
