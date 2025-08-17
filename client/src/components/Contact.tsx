import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-400">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12109232020" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
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
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Exam Appointment Online</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are centrally located at 4522 Fredericksburg Rd, 78201, just off i10 and 410, which means you won't have to drive far to see an eye doctor nearest you on the same day. Book your appointment online!
              </p>
              <a 
                href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200 inline-block mb-8"
              >
                Call Us
              </a>
              <div className="mb-8">
                <p className="text-lg font-semibold text-gray-900 mb-4">We accept now</p>
                <img 
                  src="https://cdn.sanity.io/images/k0mgimab/production/967001f910f51522237ce2bc81e317b4f5fe9929-1000x80.webp?fm=webp" 
                  alt="Accepted Insurance" 
                  className="w-full max-w-2xl"
                />
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://cdn.sanity.io/images/k0mgimab/production/90188e03c78a04e7e99ecf6fa1a07c1a07c2aca5-1080x1080.webp?w=480&fm=webp" 
                alt="Book Online" 
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-500">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12109232020" 
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
      </section>
    </>
  );
}
