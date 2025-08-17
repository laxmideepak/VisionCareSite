import { Medal, Clock, Languages } from "lucide-react";

export default function Team() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR TEAM</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            We are a dedicated team of eye care professionals obsessed with customer satisfaction, 100% locally, family, Latino and Veteran owned business so you can trust that our decisions will be always made in your best personal interest and not those of corporations or optical retails. If you are looking for an experienced and caring San Antonio optometrist that listens your concerns about your visual health, you just found one of the best eye care centers in SA. Todos aquí hablamos perfectamente espeñol y estamos para servirlos en su idioma.
          </p>
          <img 
            src="https://cdn.sanity.io/images/k0mgimab/production/33ce762de846140ec41c171e9bf9e9c7c1f98337-2048x1398.webp?fm=webp" 
            alt="Mi Vision Eye Care Team" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/f304872a0eff042c26932591e8838f1a32e56b9b-610x540.webp?fm=webp" 
              alt="Dr. Pedro Cuba" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Born in Peru, Dr. Cuba began like most immigrants in this country by working hard and understanding the principles of democracy and belief in the American dream. Dr. Cuba and his extraordinary team of eye care professionals are obsessed with customer satisfaction. Whether you need a comprehensive eye exam, prescription glasses, hard-to-fit contact lenses, our eye doctors near you in SA can assist with everything eye care! Our San Antonio optometrist near you offers eye exams for adults and children of all ages. If you are looking for an experienced and caring San Antonio eye doctor that listens your concerns about your visual health, you just found one of the best eye care centers in SA.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Medal className="text-primary-600 w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Veteran-Owned Business</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Clock className="text-primary-600 w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">20+ Years of Experience</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Languages className="text-primary-600 w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Se Habla Español!</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Schedule your exam with our optometrist in San Antonio!
            </p>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-8 mt-12">
          <div className="text-center mb-6">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/d01f5db13ba5bf0f28c74bd45459d28d2aa20854-387x139.webp?w=165&fm=webp" 
              alt="Veteran Owned Business" 
              className="mx-auto mb-4"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            We take pride in being a 100% locally owned, family-run, Latino, and veteran-operated business right here in Alamo City. Unlike corporate optical retail, every decision we make is centered around your best interests. Meet our owner, Dr. Cuba, who is always ready to personally address any concerns you may have. We're not just a business; we're a family that genuinely cares about our patients, we are growing fast and invite you to join our practice to witness the difference. Your visual needs are our top priority. Expect honesty, care, and expertise at every step. Questions or concerns? Please call or text 210-405-8057.
          </p>
        </div>
      </div>
    </section>
  );
}
