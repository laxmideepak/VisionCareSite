import { Phone } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      price: "$69",
      features: [
        "• Basic eye exam includes vision test",
        "• Prescription", 
        "• Eye health screening"
      ]
    },
    {
      price: "$89",
      features: [
        "• Complete eye exam includes all basic tests",
        "• Retinal imaging"
      ]
    },
    {
      price: "$99",
      features: [
        "• Premium eye exam includes all tests",
        "• Standard contact lens fitting",
        "• Glasses prescription"
      ]
    },
    {
      price: "$119",
      features: [
        "• Full eye care package includes exam",
        "• Specialized contact lens fitting",
        "• Glasses prescription"
      ]
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="/assets/store-interior.webp" 
              alt="GoTo Optical Store Interior" 
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg object-contain"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          {/* Brand List Section */}
          <div className="mb-8 bg-blue-800 rounded-xl p-8 shadow-xl border-4 border-blue-600">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Premium Eyewear Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-white font-bold text-lg">COACH</div>
                <div className="text-white font-bold text-lg">FENDI</div>
                <div className="text-white font-bold text-lg">Christian Dior</div>
                <div className="text-white font-bold text-lg">DOLCE GABBANA</div>
                <div className="text-white font-bold text-lg">Cartier</div>
                <div className="text-white font-bold text-lg">BURBERRY</div>
              </div>
              <div className="space-y-3">
                <div className="text-white font-bold text-lg">BALENCIAGA</div>
                <div className="text-white font-bold text-lg">VERSACE</div>
                <div className="text-white font-bold text-lg">TIFFANY & Co</div>
                <div className="text-white font-bold text-lg">YVES SAINT LAURENT</div>
                <div className="text-white font-bold text-lg">PRADA</div>
                <div className="text-white font-bold text-lg">MICHAEL KORS</div>
                <div className="text-white font-bold text-lg">OAKLEY</div>
              </div>
              <div className="space-y-3">
                <div className="text-white font-bold text-lg">GUCCI</div>
                <div className="text-white font-bold text-lg">GIORGIO ARMANI</div>
                <div className="text-white font-bold text-lg">Salvatore Ferragamo</div>
                <div className="text-white font-bold text-lg">CARRERA</div>
                <div className="text-white font-bold text-lg">BOUCHERON</div>
                <div className="text-white font-bold text-lg">Ray-Ban</div>
                <div className="text-white font-bold text-lg">bebe</div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specials</h2>
          <p className="text-lg text-gray-600">Eye exam without glasses purchase</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl font-bold text-primary-600 mb-4">{plan.price}</div>
              <ul className="text-gray-700 space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a 
                href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 w-full block"
              >
                Book Online
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
