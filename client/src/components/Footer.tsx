import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://gotooptical.com/wp-content/uploads/2023/11/GoTo-Optical-Logo-1.svg" 
              alt="GoTo Optical Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300">Your trusted San Antonio eye care professionals providing comprehensive vision services for the whole family.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                4522 Fredericksburg Rd, San Antonio, TX 78201
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (210) 923-2020
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Same Day Appointments Available
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Comprehensive Eye Exams</li>
              <li>• IPL Therapy for Dry Eyes</li>
              <li>• Contact Lenses</li>
              <li>• Designer Eyewear</li>
              <li>• Same Day Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 GoTo Optical. All rights reserved. | Veteran-Owned Business | Se Habla Español</p>
        </div>
      </div>
    </footer>
  );
}
