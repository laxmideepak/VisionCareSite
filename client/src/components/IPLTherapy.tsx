import { Phone } from "lucide-react";

export default function IPLTherapy() {
  return (
    <section className="bg-primary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GOODBYE DRY EYES</h2>
            <h3 className="text-2xl font-semibold text-primary-600 mb-6">We now offer IPL therapy (Intense Pulsed Light)</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A revolutionary treatment that relieves dry and irritated eyes by reducing inflammation and restoring tear gland function. Schedule your appointment today!
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Do you suffer from dry, red, watery, and irritated eyes? We now offer Intense Pulsed Light (IPL) therapy, cutting-edge technology that targets the root causes of dry eye. IPL reduces inflammation, improves sebaceous gland function, and provides lasting relief. Say goodbye to eye drops and discomfort—experience clearer, more comfortable vision today!
            </p>
            <h4 className="text-xl font-bold text-gray-900 mb-4">FREE CONSULTATION AND EVALUATION</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+12109232020" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-center"
              >
                <Phone className="w-4 h-4 mr-2 inline" />Call Us
              </a>
              <a 
                href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-center"
              >
                Book Online
              </a>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/f61537c3f2af52f897aac457caa26c2597ec7171-1080x1920.webp?w=570&fm=webp" 
              alt="Patient receiving IPL treatment" 
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
