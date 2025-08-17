import { Phone } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Your Local Optometrist<br />
            Near You for Eye Exams,<br />
            Contacts & Glasses
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At GoTo Optical, we are proud to provide comprehensive, primary eye care for the whole family. Our DFW optometrist, Dr. Joby, and our vision care team specialize in a full range of eye care services for women, men and children of all ages, such as
          </p>
          <ul className="text-lg text-gray-700 mt-6 space-y-2">
            <li>• Comprehensive Eye Exams</li>
            <li>• Contact Lenses</li>
            <li>• Eyeglasses & Sunglasses</li>
            <li>• Management of Ocular Conditions</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="tel:+12145505005" 
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Book Online
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/e7d1beb28d32c47924f7fa66a6f3707436c32f6a-450x285.webp?w=400&fm=webp" 
              alt="1 Hour Service" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">1 HOUR SERVICE + SAME DAY EXAMS</h3>
            <p className="text-gray-600">We offer one hour eyeglasses & same day eye exams & contact lens fittings.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/aa0d43fc4b520c0033e040af5114bd647c59a032-450x284.webp?w=400&fm=webp" 
              alt="Luxury Eyewear" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">EXCLUSIVE RETAILER OF LUXURY EYEWEAR</h3>
            <p className="text-gray-600">One of DFW's ONLY authorized retailers of Cartier, Versace & Gucci.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/ea9fbf7f6ca0a1c5beb630d3fb76a62d18e0e14f-450x284.webp?w=400&fm=webp" 
              alt="Lowest Prices" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">LOWEST PRICES IN SA</h3>
            <p className="text-gray-600">$59 Eye Exam, 20% Off When You Book Online & More!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
